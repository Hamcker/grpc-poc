import { Component } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Request } from '@improbable-eng/grpc-web/dist/typings/invoke';
import * as moment from 'moment';

import {
   GenerateDataRequest as RpcRequest,
   GenerateDataResponse1 as RpcResponse1,
} from '../generated/data-generator_pb';
import { DataProvider } from '../generated/data-generator_pb_service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   benchmarks: IBenchmark[] = [
      {
         title: 'gRPC',
         results: [
            {
               records: [
                  {
                     operation: 'send request 100 records',
                     duration: 123,
                     active: true,
                  },
                  {
                     operation: 'send request 100 records',
                     duration: 123,
                  },
               ],
               conclusion: {
                  operation: 'conc',
                  duration: 12332,
               },
            },
         ],
      },
      {
         title: 'WebAPI',
         results: [
            {
               records: [
                  {
                     operation: 'send request 100 records',
                     duration: new Date().getTime(),
                  },
               ],
               conclusion: {
                  operation: 'conc',
                  duration: 12332,
               },
            },
         ],
      },
   ];

   getDuration(ms: number, maxPrecission = 3) {
      const duration = moment.duration(ms);

      const items: any[] = [];
      items.push({ timeUnit: 'd', value: Math.floor(duration.asDays()) });
      items.push({ timeUnit: 'h', value: duration.hours() });
      items.push({ timeUnit: 'm', value: duration.minutes() });
      items.push({ timeUnit: 's', value: duration.seconds() });
      items.push({ timeUnit: 'ms', value: duration.milliseconds() });

      const formattedItems = items.reduce((accumulator, { value, timeUnit }) => {
         if (accumulator.length >= maxPrecission || (accumulator.length === 0 && value === 0)) {
            return accumulator;
         }

         accumulator.push(`${value}${timeUnit}`);
         return accumulator;
      }, []);

      return formattedItems.length !== 0 ? formattedItems.join(' ') : '-';
   }

   grpcClient!: Request;
   response?: RpcResponse1.AsObject;

   startStream() {
      const request = new RpcRequest();
      request.setRequiredcount(10000);

      this.grpcClient = grpc.invoke(DataProvider.GenerateData1, {
         request: request,
         host: `https://localhost:7150`,
         onMessage: (message: RpcResponse1) => {
            // This section works when server writes something to stream.

            const data = message.toObject();
            this.response = data;
         },
         onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
            // This section works when server close connection.

            if (code == grpc.Code.OK) {
               console.log('request finished wihtout any error');
            } else {
               console.log('an error occured', code, msg, trailers);
            }
         },
      });
   }

   stopStream() {
      this.grpcClient.close();
   }
}
