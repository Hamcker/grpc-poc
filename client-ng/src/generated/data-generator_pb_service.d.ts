// package: contract
// file: data-generator.proto

import * as data_generator_pb from "./data-generator_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DataProviderGenerateData1 = {
  readonly methodName: string;
  readonly service: typeof DataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof data_generator_pb.GenerateDataRequest;
  readonly responseType: typeof data_generator_pb.GenerateDataResponse1;
};

type DataProviderGenerateData2 = {
  readonly methodName: string;
  readonly service: typeof DataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof data_generator_pb.GenerateDataRequest;
  readonly responseType: typeof data_generator_pb.GenerateDataResponse2;
};

type DataProviderGenerateData3 = {
  readonly methodName: string;
  readonly service: typeof DataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof data_generator_pb.GenerateDataRequest;
  readonly responseType: typeof data_generator_pb.GenerateDataResponse3;
};

type DataProviderGenerateData4 = {
  readonly methodName: string;
  readonly service: typeof DataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof data_generator_pb.GenerateDataRequest;
  readonly responseType: typeof data_generator_pb.GenerateDataResponse4;
};

export class DataProvider {
  static readonly serviceName: string;
  static readonly GenerateData1: DataProviderGenerateData1;
  static readonly GenerateData2: DataProviderGenerateData2;
  static readonly GenerateData3: DataProviderGenerateData3;
  static readonly GenerateData4: DataProviderGenerateData4;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class DataProviderClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  generateData1(
    requestMessage: data_generator_pb.GenerateDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: data_generator_pb.GenerateDataResponse1|null) => void
  ): UnaryResponse;
  generateData1(
    requestMessage: data_generator_pb.GenerateDataRequest,
    callback: (error: ServiceError|null, responseMessage: data_generator_pb.GenerateDataResponse1|null) => void
  ): UnaryResponse;
  generateData2(
    requestMessage: data_generator_pb.GenerateDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: data_generator_pb.GenerateDataResponse2|null) => void
  ): UnaryResponse;
  generateData2(
    requestMessage: data_generator_pb.GenerateDataRequest,
    callback: (error: ServiceError|null, responseMessage: data_generator_pb.GenerateDataResponse2|null) => void
  ): UnaryResponse;
  generateData3(
    requestMessage: data_generator_pb.GenerateDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: data_generator_pb.GenerateDataResponse3|null) => void
  ): UnaryResponse;
  generateData3(
    requestMessage: data_generator_pb.GenerateDataRequest,
    callback: (error: ServiceError|null, responseMessage: data_generator_pb.GenerateDataResponse3|null) => void
  ): UnaryResponse;
  generateData4(
    requestMessage: data_generator_pb.GenerateDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: data_generator_pb.GenerateDataResponse4|null) => void
  ): UnaryResponse;
  generateData4(
    requestMessage: data_generator_pb.GenerateDataRequest,
    callback: (error: ServiceError|null, responseMessage: data_generator_pb.GenerateDataResponse4|null) => void
  ): UnaryResponse;
}

