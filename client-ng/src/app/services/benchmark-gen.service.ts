import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Request } from '@improbable-eng/grpc-web/dist/typings/invoke';
import {
   asapScheduler,
   from,
   generate,
   map,
   mergeMap,
   Observable,
   of,
   range,
   skip,
   switchMap,
   take,
   toArray,
} from 'rxjs';
import {
   ActualData1,
   ActualData2,
   ActualData3,
   ActualData4,
   GenerateDataRequest1,
   GenerateDataRequest2,
   GenerateDataRequest3,
   GenerateDataRequest4,
   GenerateDataResponse1,
   GenerateDataResponse2,
   GenerateDataResponse3,
   GenerateDataResponse4,
} from 'src/generated/data-generator_pb';
import { DataProvider } from 'src/generated/data-generator_pb_service';
import { Randomizer } from 'ts-randomizer';
import {
   BenchmarkRecord,
   BenchmarkRecord as BenchmarkStep,
} from '../models/BenchmarkRecord';
import {
   IBenchmark,
   IBenchmarkStep,
   IBenchmarkStepGroup,
} from '../models/models';

export type TFields = 1 | 2 | 3 | 4;
export type TRequest =
   | GenerateDataRequest1
   | GenerateDataRequest2
   | GenerateDataRequest3
   | GenerateDataRequest4;
export type TActualData = ActualData1 | ActualData2 | ActualData3 | ActualData4;
export type TResponse =
   | GenerateDataResponse1.AsObject
   | GenerateDataResponse2.AsObject
   | GenerateDataResponse3.AsObject
   | GenerateDataResponse4.AsObject;

export type TSendRequestResult = {
   client: Request;
   response: TResponse;
};

// const BACKEND = 'https://localhost:7150';
const BACKEND = 'http://localhost:5097';

@Injectable({
   providedIn: 'root',
})
export class BenchmarkGenService {
   constructor() {}

   generateGrpcGroup(
      payload: number,
      fields: TFields,
      records: number
   ): IBenchmarkStepGroup {
      const outlet: IBenchmarkStepGroup = {
         steps: [
            new BenchmarkStep(
               `Generating payload (${fields} fields among ${payload} items)`,
               () => this.generatePayload(payload, fields)
            ),
            new BenchmarkStep('Sending request', (data: any) =>
               this.sendRequest(records, fields, data)
            ),
            new BenchmarkStep(
               'Conclusion',
               (data: TSendRequestResult, step: BenchmarkStep) =>
                  this.finalize(data, outlet, step)
            ),
         ],
      };

      return outlet;
   }

   run(benchmark: IBenchmark): Observable<any> {
      benchmark.status = 1;
      const currentStep = 1;
      return from(benchmark.stepGroups ?? []).pipe(
         mergeMap((group) =>
            from(group.steps ?? []).pipe(
               take(1),
               switchMap((task) => this.chain(group.steps ?? [], 0, []))
            )
         )
      );
   }

   chain(
      collection: BenchmarkRecord<any>[],
      index: number = 0,
      params: any[]
   ): Observable<any> {
      if (!collection[index]) return of(null);
      return of(collection[index]).pipe(
         switchMap((task) => task.runRecord(params)),
         switchMap((prevResult) => {
            return this.chain(collection, ++index, prevResult);
         })
      );
   }

   private generatePayload(count: number, fields: TFields) {
      return range(0, count).pipe(
         map((x) => {
            switch (fields) {
               case 1:
                  const outlet = new ActualData1();
                  outlet.setField11(Randomizer.create<string>() ?? '');
                  return outlet;

               case 2:
                  const outlet2 = new ActualData2();
                  outlet2.setField21(Randomizer.create<string>() ?? '');
                  outlet2.setField22(Randomizer.create<number>() ?? 0);
                  return outlet2;

               case 3:
                  const outlet3 = new ActualData3();
                  outlet3.setField31(Randomizer.create<string>() ?? '');
                  outlet3.setField32(Randomizer.create<number>() ?? 0);
                  outlet3.setField33(Randomizer.create<boolean>() ?? false);
                  return outlet3;

               case 4:
                  const outlet4 = new ActualData4();
                  outlet4.setField41(Randomizer.create<string>() ?? '');
                  outlet4.setField42(Randomizer.create<number>() ?? 0);
                  outlet4.setField43(Randomizer.create<boolean>() ?? false);
                  outlet4.setField44List(Randomizer.create<string[]>() ?? []);
                  return outlet4;
            }
         }),
         toArray()
      );
   }

   private sendRequest<T extends TActualData>(
      count: number,
      fields: TFields,
      data: T[]
   ): Observable<TSendRequestResult> {
      switch (fields) {
         case 1:
            const request1 = new GenerateDataRequest1();
            request1.setRequiredcount(count);
            request1.setDataList(data as ActualData1[]);

            return from(
               new Promise((res: (value: TSendRequestResult) => void) => {
                  const grpcClient = grpc.invoke(DataProvider.GenerateData1, {
                     request: request1,
                     host: BACKEND,
                     onMessage: (message: GenerateDataResponse1) => {
                        res({
                           client: grpcClient,
                           response: message.toObject(),
                        });
                     },
                     onEnd: this.onEnd,
                  });
               })
            );

         case 2:
            const request2 = new GenerateDataRequest2();
            request2.setRequiredcount(count);
            request2.setDataList(data as ActualData2[]);

            return from(
               new Promise((res: (value: TSendRequestResult) => void) => {
                  const grpcClient = grpc.invoke(DataProvider.GenerateData2, {
                     request: request2,
                     host: BACKEND,
                     onMessage: (message: GenerateDataResponse2) => {
                        res({
                           client: grpcClient,
                           response: message.toObject() as any,
                        });
                     },
                     onEnd: this.onEnd,
                  });
               })
            );
            break;

         case 3:
            const request3 = new GenerateDataRequest3();
            request3.setRequiredcount(count);
            request3.setDataList(data as ActualData3[]);

            return from(
               new Promise((res: (value: TSendRequestResult) => void) => {
                  const grpcClient = grpc.invoke(DataProvider.GenerateData3, {
                     request: request3,
                     host: BACKEND,
                     onMessage: (message: GenerateDataResponse3) => {
                        res({
                           client: grpcClient,
                           response: message.toObject() as any,
                        });
                     },
                     onEnd: this.onEnd,
                  });
               })
            );
            break;
         case 4:
            const request4 = new GenerateDataRequest4();
            request4.setRequiredcount(count);
            request4.setDataList(data as ActualData4[]);

            return from(
               new Promise((res: (value: TSendRequestResult) => void) => {
                  const grpcClient = grpc.invoke(DataProvider.GenerateData4, {
                     request: request4,
                     host: BACKEND,
                     onMessage: (message: GenerateDataResponse4) => {
                        res({
                           client: grpcClient,
                           response: message.toObject() as any,
                        });
                     },
                     onEnd: this.onEnd,
                  });
               })
            );
            break;
      }
   }

   private finalize(
      data: TSendRequestResult,
      group: IBenchmarkStepGroup,
      record: BenchmarkStep
   ): Observable<any> {
      record.duration = parseInt(data.response.timestampsList[0], 10);
      data.client.close();
      return of(null);
   }

   private onEnd(
      code: grpc.Code,
      msg: string | undefined,
      trailers: grpc.Metadata
   ) {
      // This section works when server close connection.
      if (code == grpc.Code.OK) {
         console.log('request finished wihtout any error');
      } else {
         console.log('an error occured', code, msg, trailers);
      }
   }
}
