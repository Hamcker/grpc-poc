using System.Diagnostics;
using System.Text;

namespace server.Services;

public class FakeDataGenerator
{
    private Random rnd = new Random();

    public DataGenerationStats<T> Generate<T>(int count, Stopwatch timer) where T : new()
    {
        var data = Enumerable.Range(0, count).Select(x => GenerateRecord<T>());
        return new DataGenerationStats<T>(timer.Elapsed, data);
    }

    public T GenerateRecord<T>() where T : new()
    {
        var props = typeof(T).GetProperties().Where(x => x.CanWrite);
        var outlet = new T();
        props.ToList().ForEach(x => x.SetValue(outlet, GenerateFieldData(x.PropertyType)));
        return outlet;
    }

    public object? GenerateFieldData(Type type)
    {
        switch (type.Name)
        {
            case "Int32":
                return rnd.Next(int.MinValue, int.MaxValue);

            case "Boolean":
                return rnd.Next() < 0.5 ? false : true;

            case "String":
                var minLength = rnd.Next(50, 70);
                var maxLength = rnd.Next(100, 4000);
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
