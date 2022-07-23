import { Request } from '@improbable-eng/grpc-web/dist/typings/invoke';
import { Observable } from 'rxjs';
import {
   GenerateDataRequest1,
   GenerateDataRequest2,
   GenerateDataRequest3,
   GenerateDataRequest4,
   ActualData1,
   ActualData2,
   ActualData3,
   ActualData4,
   GenerateDataResponse1,
   GenerateDataResponse2,
   GenerateDataResponse3,
   GenerateDataResponse4,
} from 'src/generated/data-generator_pb';
import { BenchmarkRecord } from './BenchmarkRecord';

export interface IBenchmarkStep {
   operation: string;
   duration?: number;
   active?: boolean;
}
export interface IBenchmarkStepGroup {
   steps?: BenchmarkRecord<any>[];
}

export interface IBenchmark {
   title: string;
   stepGroups?: IBenchmarkStepGroup[];
   status?: number;
}

export type TGrpcRequest =
   | GenerateDataRequest1
   | GenerateDataRequest2
   | GenerateDataRequest3
   | GenerateDataRequest4;
export type TWebApiRequest =
   | GenerateDataRequest1.AsObject
   | GenerateDataRequest2.AsObject
   | GenerateDataRequest3.AsObject
   | GenerateDataRequest4.AsObject;

export type TGrpcActualData =
   | ActualData1
   | ActualData2
   | ActualData3
   | ActualData4;
export type TWebApiActualData =
   | ActualData1.AsObject
   | ActualData2.AsObject
   | ActualData3.AsObject
   | ActualData4.AsObject;

export type TGrpcResponse =
   | GenerateDataResponse1
   | GenerateDataResponse2
   | GenerateDataResponse3
   | GenerateDataResponse4;
export type TWebApiResponse =
   | {
        totalRows: number;
        timestamps: Array<string>;
        timeToGenerateRows: number;
        data: Array<ActualData1.AsObject>;
     }
   | {
        totalRows: number;
        timestamps: Array<string>;
        timeToGenerateRows: number;
        data: Array<ActualData2.AsObject>;
     }
   | {
        totalRows: number;
        timestamps: Array<string>;
        timeToGenerateRows: number;
        data: Array<ActualData3.AsObject>;
     }
   | {
        totalRows: number;
        timestamps: Array<string>;
        timeToGenerateRows: number;
        data: Array<ActualData4.AsObject>;
     };

export type TGrpcResult = {
   client: Request;
   response: TGrpcResponse;
};
