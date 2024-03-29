import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, Optional } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Request } from '@improbable-eng/grpc-web/dist/typings/invoke';

import {
   BehaviorSubject,
   filter,
   from,
   map,
   mergeMap,
   Observable,
   of,
   range,
   switchMap,
   take,
   toArray,
} from 'rxjs';

import { delayWhen, tap } from 'rxjs/operators';

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
import { FIELDS_COUNT, MAX_DEPTH } from '../code/injection-tokens';

import {
   BenchmarkRecord,
   BenchmarkRecord as BenchmarkStep,
} from '../models/BenchmarkRecord';
import {
   IBenchmark,
   IBenchmarkStepGroup,
   TGrpcActualData,
   TGrpcResult,
   TWebApiActualData,
   TWebApiResponse,
} from '../models/models';
import { FakeDataService } from './fake-data.service';

export type TFields = 1 | 2 | 3 | 40;

const GRPC_SERVER = 'https://localhost:7150';
const WEBAPI_SERVER = 'https://localhost:7013';

@Injectable({
   providedIn: 'root',
})
export class BenchmarkGenService {
   activeRequests = new BehaviorSubject(0);

   constructor(
      private fakeData: FakeDataService,
      private httpClient: HttpClient,
      @Optional() @Inject(MAX_DEPTH) private maxDepth: number,
      @Optional() @Inject(FIELDS_COUNT) private fieldsCount: number
   ) {
      this.maxDepth ??= 3;
      this.fieldsCount ??= 20;
   }

   generateGrpcGroup(
      payload: number,
      fields: TFields,
      records: number
   ): IBenchmarkStepGroup {
      const outlet: IBenchmarkStepGroup = {
         steps: [
            new BenchmarkStep(
               `Generating payload (${fields} fields among ${payload} items)`,
               () => this.generateGrpcPayload(payload, fields)
            ),
            new BenchmarkStep('Send & Receive', (data: any) =>
               this.sendGrpcRequest(records, fields, data)
            ),
            new BenchmarkStep(
               'Generate data (server-side)',
               (data: TGrpcResult, step: BenchmarkStep) =>
                  this.getGrpcResponse(data, outlet, step)
            ),
            new BenchmarkStep('Total', () => this.finalize(outlet)),
         ],
      };

      return outlet;
   }

   generateWebApiGroup(
      payload: number,
      fields: TFields,
      records: number
   ): IBenchmarkStepGroup {
      const outlet: IBenchmarkStepGroup = {
         steps: [
            new BenchmarkStep(
               `Generating payload (${fields} fields among ${payload} items)`,
               () => this.generateWebApiPayload(payload, fields)
            ),
            new BenchmarkStep('Send & Receive', (data: any) =>
               this.sendWebApiRequest(records, fields, data)
            ),
            new BenchmarkStep(
               'Generate data (server-side)',
               (data: TWebApiResponse, step: BenchmarkStep) =>
                  this.getWebApiResponse(data, outlet, step)
            ),
            new BenchmarkStep('Total', () => this.finalize(outlet)),
         ],
      };

      return outlet;
   }

   run(benchmark: IBenchmark): Observable<any> {
      benchmark.status = 1;
      benchmark.stepGroups?.forEach((group) =>
         group.steps?.forEach((s) => (s.duration = undefined))
      );

      return from(benchmark.stepGroups ?? []).pipe(
         mergeMap((group) => {
            return from(group.steps ?? []).pipe(
               take(1),
               switchMap((task) => this.chain(group.steps ?? [], 0, []))
            );
         })
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

   private generateGrpcPayload(count: number, fields: TFields) {
      return range(0, count).pipe(
         map((x) => {
            switch (fields) {
               case 1:
                  const outlet = new ActualData1();
                  outlet.setField11(this.fakeData.getString());
                  return outlet;

               case 2:
                  const outlet2 = new ActualData2();
                  outlet2.setField21(this.fakeData.getString());
                  outlet2.setField22(this.fakeData.getNumber());
                  return outlet2;

               case 3:
                  const outlet3 = new ActualData3();
                  outlet3.setField31(this.fakeData.getString());
                  outlet3.setField32(this.fakeData.getNumber());
                  outlet3.setField33(this.fakeData.getBoolean());
                  return outlet3;

               case 40:
                  const generate40 = (depth = 1) => {
                     if (depth >= this.maxDepth) return null;
                     const outlet = new ActualData4();

                     const generators = [
                        this.fakeData.getString.bind(this.fakeData),
                        this.fakeData.getStringArray.bind(this.fakeData),
                        this.fakeData.getNumber.bind(this.fakeData),
                        this.fakeData.getNumberArray.bind(this.fakeData),
                        this.fakeData.getBoolean.bind(this.fakeData),
                        this.fakeData.getBooleanArray.bind(this.fakeData),
                        this.fakeData.getNumber.bind(this.fakeData),
                        this.fakeData.getNumberArray.bind(this.fakeData),
                        generate40.bind(this, depth + 1),
                        () => {
                           const length = this.fakeData.next(2, 10);
                           return Array.from({ length })
                              .map(() => generate40(depth + 1))
                              .filter((x) => x);
                        },
                     ];
                     for (let index = 0; index <= this.fieldsCount; index++) {
                        const generator: any =
                           generators[index % generators.length];
                        const setField =
                           (outlet as any)['setField4' + index] ??
                           (outlet as any)[`setField4${index}List`];
                        const value = generator();
                        setField.call(outlet, value);
                     }
                     return outlet;
                  };
                  return generate40();
            }
         }),
         toArray()
      );
   }
   private generateWebApiPayload(count: number, fields: TFields) {
      return range(0, count).pipe(
         map((x) => {
            switch (fields) {
               case 1:
                  const outlet: ActualData1.AsObject = {
                     field11: this.fakeData.getString(),
                  };
                  return outlet;

               case 2:
                  const outlet2: ActualData2.AsObject = {
                     field21: this.fakeData.getString(),
                     field22: this.fakeData.getNumber(),
                  };
                  return outlet2;

               case 3:
                  const outlet3: ActualData3.AsObject = {
                     field31: this.fakeData.getString(),
                     field32: this.fakeData.getNumber(),
                     field33: this.fakeData.getBoolean(),
                  };
                  return outlet3;

               case 40:
                  const generate40 = (depth = 1) => {
                     if (depth >= this.maxDepth) return null;
                     const outlet = {};

                     const generators = [
                        this.fakeData.getString.bind(this.fakeData),
                        this.fakeData.getStringArray.bind(this.fakeData),
                        this.fakeData.getNumber.bind(this.fakeData),
                        this.fakeData.getNumberArray.bind(this.fakeData),
                        this.fakeData.getBoolean.bind(this.fakeData),
                        this.fakeData.getBooleanArray.bind(this.fakeData),
                        this.fakeData.getNumber.bind(this.fakeData),
                        this.fakeData.getNumberArray.bind(this.fakeData),
                        generate40.bind(this, depth + 1),
                        () => {
                           const length = this.fakeData.next(2, 10);
                           return Array.from({ length })
                              .map(() => generate40(depth + 1))
                              .filter((x) => x);
                        },
                     ];
                     for (let index = 0; index <= this.fieldsCount; index++) {
                        const generator: any =
                           generators[index % generators.length];

                        const value = generator.call(this.fakeData);

                        if (value instanceof Array) {
                           (outlet as any)[`field4${index}List`] = value;
                        } else {
                           (outlet as any)['field4' + index] = value;
                        }
                     }
                     return outlet;
                  };
                  return generate40();
            }
         }),
         toArray()
      );
   }

   private sendGrpcRequest<T extends TGrpcActualData>(
      count: number,
      fields: TFields,
      data: T[]
   ): Observable<TGrpcResult> {
      switch (fields) {
         case 1:
            const request1 = new GenerateDataRequest1();
            request1.setRequiredcount(count);
            request1.setDataList(data as ActualData1[]);

            return from(
               new Promise((res: (value: TGrpcResult) => void) => {
                  const grpcClient = grpc.invoke(DataProvider.GenerateData1, {
                     request: request1,
                     host: GRPC_SERVER,
                     onMessage: (message: GenerateDataResponse1) => {
                        res({
                           client: grpcClient,
                           response: message,
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
               new Promise((res: (value: TGrpcResult) => void) => {
                  const grpcClient = grpc.invoke(DataProvider.GenerateData2, {
                     request: request2,
                     host: GRPC_SERVER,
                     onMessage: (message: GenerateDataResponse2) => {
                        res({
                           client: grpcClient,
                           response: message as any,
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
               new Promise((res: (value: TGrpcResult) => void) => {
                  const grpcClient = grpc.invoke(DataProvider.GenerateData3, {
                     request: request3,
                     host: GRPC_SERVER,
                     onMessage: (message: GenerateDataResponse3) => {
                        res({
                           client: grpcClient,
                           response: message as any,
                        });
                     },
                     onEnd: this.onEnd,
                  });
               })
            );
            break;

         case 40:
            const request4 = new GenerateDataRequest4();
            request4.setRequiredcount(count);
            request4.setDataList(data as ActualData4[]);

            return from(
               new Promise((res: (value: TGrpcResult) => void) => {
                  const grpcClient = grpc.invoke(DataProvider.GenerateData4, {
                     request: request4,
                     host: GRPC_SERVER,
                     onMessage: (message: GenerateDataResponse4) => {
                        res({
                           client: grpcClient,
                           response: message as any,
                        });
                     },
                     onEnd: this.onEnd,
                  });
               })
            );
            break;
      }
   }
   private sendWebApiRequest<T extends TWebApiActualData>(
      count: number,
      fields: TFields,
      data: T[]
   ): Observable<TWebApiResponse> {
      return of(null).pipe(
         delayWhen(() => this.activeRequests.pipe(filter((x) => x < 4))),
         switchMap(() => {
            this.activeRequests.next(this.activeRequests.value + 1);

            return this.httpClient
               .post<TWebApiResponse>(
                  WEBAPI_SERVER + '/GenerateData/GenerateData' + fields,
                  { requiredCount: count, data }
               )
               .pipe(
                  tap(() =>
                     this.activeRequests.next(this.activeRequests.value - 1)
                  )
               );
         })
      );
   }

   private getGrpcResponse(
      data: TGrpcResult,
      group: IBenchmarkStepGroup,
      record: BenchmarkStep
   ): Observable<any> {
      const matches = /(\d{0,2}):(\d{0,2}):(\d{0,2}).(\d*)/.exec(
         data.response.toObject().timestampsList[0]
      );

      const hour = parseInt(matches?.[1] ?? '0');
      const minute = parseInt(matches?.[2] ?? '0');
      const second = parseInt(matches?.[3] ?? '0');
      const milis = parseInt(matches?.[4] ?? '0');

      record.duration =
         hour * 60 * 60000 + minute * 60000 + second * 1000 + milis;

      data.client.close();
      return of(null);
   }
   private getWebApiResponse(
      data: TWebApiResponse,
      group: IBenchmarkStepGroup,
      record: BenchmarkStep
   ): Observable<any> {
      const matches = /(\d{0,2}):(\d{0,2}):(\d{0,2}).(\d*)/.exec(
         data.timestamps[0]
      );

      const hour = parseInt(matches?.[1] ?? '0');
      const minute = parseInt(matches?.[2] ?? '0');
      const second = parseInt(matches?.[3] ?? '0');
      const milis = parseInt(matches?.[4] ?? '0');

      record.duration =
         hour * 60 * 60000 + minute * 60000 + second * 1000 + milis;

      return of(null);
   }

   private finalize(group: IBenchmarkStepGroup) {
      if (group.steps?.[group.steps?.length - 1]) {
         const sum =
            (group.steps[0].duration ?? 0) + (group.steps[1].duration ?? 0);

         group.steps[group.steps?.length - 1].duration = sum;
      }

      return of(null);
   }

   private onEnd(
      code: grpc.Code,
      msg: string | undefined,
      trailers: grpc.Metadata
   ) {
      // This section works when server close connection.
      if (code == grpc.Code.OK) {
      } else {
         console.log('an error occured', code, msg, trailers);
      }
   }
}
