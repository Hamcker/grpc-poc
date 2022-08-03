using System.Diagnostics;
using System.Runtime.CompilerServices;
using System.Text;
using Contracts;

namespace server.Services;

public class FakeDataGenerator
{
    private Random rnd = new Random();
    private int maxDepth = 0;

    public DataGenerationStats<T> Generate<T>(int count, Stopwatch timer, int maxDepth = 3)
        where T : new()
    {
        var data = Enumerable.Range(0, count).Select(x => GenerateRecord<T>());
        this.maxDepth = maxDepth;
        return new DataGenerationStats<T>(
            timer.Elapsed,
            data.Where(x => x is not null).Cast<T>().ToList()
        );
    }

    public T? GenerateRecord<T>(int depth = 1) where T : new()
    {
        if (depth >= maxDepth)
            return default(T);
        var props = typeof(T).GetProperties().Where(x => x.CanWrite);
        var outlet = new T();
        props.ToList().ForEach(x => x.SetValue(outlet, GenerateFieldData(x.PropertyType, depth)));
        return outlet;
    }

    public object? GenerateFieldData(Type type, int depth = 1)
    {
        switch (type.Name)
        {
            case "Int32":
                return rnd.Next(int.MinValue, int.MaxValue);

            case "Boolean":
                return rnd.Next() < 0.5 ? false : true;

            case "String":
                var minLength = rnd.Next(7, 15);
                var maxLength = rnd.Next(20, 30);
                var bytes = Enumerable
                    .Range(minLength, maxLength)
                    .Select(x =>
                    {
                        // ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
                        // var charCode = Convert.ToByte((x - minLength) / (maxLength - minLength) * (126 - 32) + 32);
                        var charCode = Convert.ToByte(
                            Math.Min(
                                byte.MaxValue,
                                Math.Max(
                                    byte.MinValue,
                                    ((x - minLength) * (126 - 32)) / (maxLength - minLength) + 32
                                )
                            )
                        );
                        return charCode;
                    })
                    .ToArray();

                var outlet = string.Join("", ASCIIEncoding.ASCII.GetChars(bytes));
                return outlet;

            case "Single":
                return rnd.NextSingle();

            case "ActualData4":
                return GenerateRecord<ActualData4>(depth + 1);
        }

        return null;
    }
    // 33 - 126
}

public record DataGenerationStats<T>
{
    public TimeSpan ElapsedTime { get; set; }
    public IEnumerable<T> Data { get; set; }

    public DataGenerationStats(TimeSpan elapsedTime, IEnumerable<T> data)
    {
        ElapsedTime = elapsedTime;
        Data = data;
    }
}
