import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { asapScheduler, from, generate, map, Observable, of, range, toArray } from 'rxjs';
import {
   ActualData1,
   ActualData2,
   ActualData3,
   ActualData4,
   GenerateDataRequest1,
   GenerateDataResponse1,
} from 'src/generated/data-generator_pb';
import { DataProvider } from 'src/generated/data-generator_pb_service';
import { Randomizer } from 'ts-randomizer';
import { IBenchmarkRecord, IBenchmarkRecordGroup } from '../models/models';

export type TFields = 1 | 2 | 3 | 4;
const BACKEND = 'https://localhost:7150';

@Injectable({
   providedIn: 'root',
})
export class BenchmarkGenService {
   constructor() {}

   generateGroup(payload: number, fields: TFields, records: number): IBenchmarkRecordGroup {
      return {
         records: [
            {
               operation: 'Generating payload',
               run: () => this.generatePayload(payload, fields),
            },
            {
               operation: 'Sending request',
               run: (data) => this.sendRequest(records, fields, data),
            },
            {
               operation: 'Sending request',
               run: () => this.generatePayload(payload, fields),
            },
         ],
      };
   }

   generatePayload(count: number, fields: TFields) {
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

   sendRequest(
      count: number,
      fields: TFields,
      data: (ActualData1 | ActualData2 | ActualData3 | ActualData4)[]
   ): Observable<any> {
      switch (fields) {
         case 1:
            const request1 = new GenerateDataRequest1();
            request1.setRequiredcount(count);
            request1.setDataList(data as ActualData1[]);

            return from(new Promise());
            const grpcClient = grpc.invoke(DataProvider.GenerateData1, {
               request: request1,
               host: BACKEND,
               onMessage: (message: GenerateDataResponse1) => {
                  // This section works when server writes something to stream.

                  const data = message.toObject();
                  return of(data);
               },
               onEnd: this.onEnd,
            });

            return of(grpcClient);

         default:
            break;
      }
   }

   private onEnd(code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) {
      // This section works when server close connection.
      if (code == grpc.Code.OK) {
         console.log('request finished wihtout any error');
      } else {
         console.log('an error occured', code, msg, trailers);
      }
   }
}
