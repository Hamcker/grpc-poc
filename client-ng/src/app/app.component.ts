import { Component } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Request } from '@improbable-eng/grpc-web/dist/typings/invoke';
import { GenerateDataRequest as RpcRequest, GenerateDataResponse1 as RpcResponse1 } from '../generated/data-generator_pb';
import { DataProvider } from '../generated/data-generator_pb_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-ng';
  grpcClient!: Request;
  response?: RpcResponse1.AsObject;

  startStream() {
    const request = new RpcRequest();
    request.setRequiredcount(100);

    this.grpcClient = grpc.invoke(DataProvider.GenerateData1, {
      request: request,
      host: `http://localhost:5181`,
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
