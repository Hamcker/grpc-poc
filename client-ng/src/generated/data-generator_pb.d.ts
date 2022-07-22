// package: contract
// file: data-generator.proto

import * as jspb from "google-protobuf";

export class GenerateDataRequest1 extends jspb.Message {
  getRequiredcount(): number;
  setRequiredcount(value: number): void;

  clearDataList(): void;
  getDataList(): Array<ActualData1>;
  setDataList(value: Array<ActualData1>): void;
  addData(value?: ActualData1, index?: number): ActualData1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDataRequest1.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDataRequest1): GenerateDataRequest1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateDataRequest1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDataRequest1;
  static deserializeBinaryFromReader(message: GenerateDataRequest1, reader: jspb.BinaryReader): GenerateDataRequest1;
}

export namespace GenerateDataRequest1 {
  export type AsObject = {
    requiredcount: number,
    dataList: Array<ActualData1.AsObject>,
  }
}

export class GenerateDataResponse1 extends jspb.Message {
  getTotalrows(): number;
  setTotalrows(value: number): void;

  clearTimestampsList(): void;
  getTimestampsList(): Array<string>;
  setTimestampsList(value: Array<string>): void;
  addTimestamps(value: string, index?: number): string;

  getTimetogeneraterows(): number;
  setTimetogeneraterows(value: number): void;

  clearDataList(): void;
  getDataList(): Array<ActualData1>;
  setDataList(value: Array<ActualData1>): void;
  addData(value?: ActualData1, index?: number): ActualData1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDataResponse1.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDataResponse1): GenerateDataResponse1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateDataResponse1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDataResponse1;
  static deserializeBinaryFromReader(message: GenerateDataResponse1, reader: jspb.BinaryReader): GenerateDataResponse1;
}

export namespace GenerateDataResponse1 {
  export type AsObject = {
    totalrows: number,
    timestampsList: Array<string>,
    timetogeneraterows: number,
    dataList: Array<ActualData1.AsObject>,
  }
}

export class ActualData1 extends jspb.Message {
  getField11(): string;
  setField11(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActualData1.AsObject;
  static toObject(includeInstance: boolean, msg: ActualData1): ActualData1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActualData1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActualData1;
  static deserializeBinaryFromReader(message: ActualData1, reader: jspb.BinaryReader): ActualData1;
}

export namespace ActualData1 {
  export type AsObject = {
    field11: string,
  }
}

export class GenerateDataRequest2 extends jspb.Message {
  getRequiredcount(): number;
  setRequiredcount(value: number): void;

  clearDataList(): void;
  getDataList(): Array<ActualData2>;
  setDataList(value: Array<ActualData2>): void;
  addData(value?: ActualData2, index?: number): ActualData2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDataRequest2.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDataRequest2): GenerateDataRequest2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateDataRequest2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDataRequest2;
  static deserializeBinaryFromReader(message: GenerateDataRequest2, reader: jspb.BinaryReader): GenerateDataRequest2;
}

export namespace GenerateDataRequest2 {
  export type AsObject = {
    requiredcount: number,
    dataList: Array<ActualData2.AsObject>,
  }
}

export class GenerateDataResponse2 extends jspb.Message {
  getTotalrows(): number;
  setTotalrows(value: number): void;

  clearTimestampsList(): void;
  getTimestampsList(): Array<string>;
  setTimestampsList(value: Array<string>): void;
  addTimestamps(value: string, index?: number): string;

  getTimetogeneraterows(): number;
  setTimetogeneraterows(value: number): void;

  clearDataList(): void;
  getDataList(): Array<ActualData2>;
  setDataList(value: Array<ActualData2>): void;
  addData(value?: ActualData2, index?: number): ActualData2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDataResponse2.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDataResponse2): GenerateDataResponse2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateDataResponse2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDataResponse2;
  static deserializeBinaryFromReader(message: GenerateDataResponse2, reader: jspb.BinaryReader): GenerateDataResponse2;
}

export namespace GenerateDataResponse2 {
  export type AsObject = {
    totalrows: number,
    timestampsList: Array<string>,
    timetogeneraterows: number,
    dataList: Array<ActualData2.AsObject>,
  }
}

export class ActualData2 extends jspb.Message {
  getField21(): string;
  setField21(value: string): void;

  getField22(): number;
  setField22(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActualData2.AsObject;
  static toObject(includeInstance: boolean, msg: ActualData2): ActualData2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActualData2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActualData2;
  static deserializeBinaryFromReader(message: ActualData2, reader: jspb.BinaryReader): ActualData2;
}

export namespace ActualData2 {
  export type AsObject = {
    field21: string,
    field22: number,
  }
}

export class GenerateDataRequest3 extends jspb.Message {
  getRequiredcount(): number;
  setRequiredcount(value: number): void;

  clearDataList(): void;
  getDataList(): Array<ActualData3>;
  setDataList(value: Array<ActualData3>): void;
  addData(value?: ActualData3, index?: number): ActualData3;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDataRequest3.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDataRequest3): GenerateDataRequest3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateDataRequest3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDataRequest3;
  static deserializeBinaryFromReader(message: GenerateDataRequest3, reader: jspb.BinaryReader): GenerateDataRequest3;
}

export namespace GenerateDataRequest3 {
  export type AsObject = {
    requiredcount: number,
    dataList: Array<ActualData3.AsObject>,
  }
}

export class GenerateDataResponse3 extends jspb.Message {
  getTotalrows(): number;
  setTotalrows(value: number): void;

  clearTimestampsList(): void;
  getTimestampsList(): Array<string>;
  setTimestampsList(value: Array<string>): void;
  addTimestamps(value: string, index?: number): string;

  getTimetogeneraterows(): number;
  setTimetogeneraterows(value: number): void;

  clearDataList(): void;
  getDataList(): Array<ActualData3>;
  setDataList(value: Array<ActualData3>): void;
  addData(value?: ActualData3, index?: number): ActualData3;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDataResponse3.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDataResponse3): GenerateDataResponse3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateDataResponse3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDataResponse3;
  static deserializeBinaryFromReader(message: GenerateDataResponse3, reader: jspb.BinaryReader): GenerateDataResponse3;
}

export namespace GenerateDataResponse3 {
  export type AsObject = {
    totalrows: number,
    timestampsList: Array<string>,
    timetogeneraterows: number,
    dataList: Array<ActualData3.AsObject>,
  }
}

export class ActualData3 extends jspb.Message {
  getField31(): string;
  setField31(value: string): void;

  getField32(): number;
  setField32(value: number): void;

  getField33(): boolean;
  setField33(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActualData3.AsObject;
  static toObject(includeInstance: boolean, msg: ActualData3): ActualData3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActualData3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActualData3;
  static deserializeBinaryFromReader(message: ActualData3, reader: jspb.BinaryReader): ActualData3;
}

export namespace ActualData3 {
  export type AsObject = {
    field31: string,
    field32: number,
    field33: boolean,
  }
}

export class GenerateDataRequest4 extends jspb.Message {
  getRequiredcount(): number;
  setRequiredcount(value: number): void;

  clearDataList(): void;
  getDataList(): Array<ActualData4>;
  setDataList(value: Array<ActualData4>): void;
  addData(value?: ActualData4, index?: number): ActualData4;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDataRequest4.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDataRequest4): GenerateDataRequest4.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateDataRequest4, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDataRequest4;
  static deserializeBinaryFromReader(message: GenerateDataRequest4, reader: jspb.BinaryReader): GenerateDataRequest4;
}

export namespace GenerateDataRequest4 {
  export type AsObject = {
    requiredcount: number,
    dataList: Array<ActualData4.AsObject>,
  }
}

export class GenerateDataResponse4 extends jspb.Message {
  getTotalrows(): number;
  setTotalrows(value: number): void;

  clearTimestampsList(): void;
  getTimestampsList(): Array<string>;
  setTimestampsList(value: Array<string>): void;
  addTimestamps(value: string, index?: number): string;

  getTimetogeneraterows(): number;
  setTimetogeneraterows(value: number): void;

  clearDataList(): void;
  getDataList(): Array<ActualData4>;
  setDataList(value: Array<ActualData4>): void;
  addData(value?: ActualData4, index?: number): ActualData4;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDataResponse4.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDataResponse4): GenerateDataResponse4.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateDataResponse4, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDataResponse4;
  static deserializeBinaryFromReader(message: GenerateDataResponse4, reader: jspb.BinaryReader): GenerateDataResponse4;
}

export namespace GenerateDataResponse4 {
  export type AsObject = {
    totalrows: number,
    timestampsList: Array<string>,
    timetogeneraterows: number,
    dataList: Array<ActualData4.AsObject>,
  }
}

export class ActualData4 extends jspb.Message {
  getField41(): string;
  setField41(value: string): void;

  getField42(): number;
  setField42(value: number): void;

  getField43(): boolean;
  setField43(value: boolean): void;

  clearField44List(): void;
  getField44List(): Array<string>;
  setField44List(value: Array<string>): void;
  addField44(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActualData4.AsObject;
  static toObject(includeInstance: boolean, msg: ActualData4): ActualData4.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActualData4, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActualData4;
  static deserializeBinaryFromReader(message: ActualData4, reader: jspb.BinaryReader): ActualData4;
}

export namespace ActualData4 {
  export type AsObject = {
    field41: string,
    field42: number,
    field43: boolean,
    field44List: Array<string>,
  }
}

