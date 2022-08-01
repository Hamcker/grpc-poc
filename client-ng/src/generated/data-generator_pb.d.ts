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
  getField40(): string;
  setField40(value: string): void;

  clearField41List(): void;
  getField41List(): Array<string>;
  setField41List(value: Array<string>): void;
  addField41(value: string, index?: number): string;

  getField42(): number;
  setField42(value: number): void;

  clearField43List(): void;
  getField43List(): Array<number>;
  setField43List(value: Array<number>): void;
  addField43(value: number, index?: number): number;

  getField44(): boolean;
  setField44(value: boolean): void;

  clearField45List(): void;
  getField45List(): Array<boolean>;
  setField45List(value: Array<boolean>): void;
  addField45(value: boolean, index?: number): boolean;

  getField46(): number;
  setField46(value: number): void;

  clearField47List(): void;
  getField47List(): Array<number>;
  setField47List(value: Array<number>): void;
  addField47(value: number, index?: number): number;

  hasField48(): boolean;
  clearField48(): void;
  getField48(): ActualData4 | undefined;
  setField48(value?: ActualData4): void;

  clearField49List(): void;
  getField49List(): Array<ActualData4>;
  setField49List(value: Array<ActualData4>): void;
  addField49(value?: ActualData4, index?: number): ActualData4;

  getField410(): string;
  setField410(value: string): void;

  clearField411List(): void;
  getField411List(): Array<string>;
  setField411List(value: Array<string>): void;
  addField411(value: string, index?: number): string;

  getField412(): number;
  setField412(value: number): void;

  clearField413List(): void;
  getField413List(): Array<number>;
  setField413List(value: Array<number>): void;
  addField413(value: number, index?: number): number;

  getField414(): boolean;
  setField414(value: boolean): void;

  clearField415List(): void;
  getField415List(): Array<boolean>;
  setField415List(value: Array<boolean>): void;
  addField415(value: boolean, index?: number): boolean;

  getField416(): number;
  setField416(value: number): void;

  clearField417List(): void;
  getField417List(): Array<number>;
  setField417List(value: Array<number>): void;
  addField417(value: number, index?: number): number;

  hasField418(): boolean;
  clearField418(): void;
  getField418(): ActualData4 | undefined;
  setField418(value?: ActualData4): void;

  clearField419List(): void;
  getField419List(): Array<ActualData4>;
  setField419List(value: Array<ActualData4>): void;
  addField419(value?: ActualData4, index?: number): ActualData4;

  getField420(): string;
  setField420(value: string): void;

  clearField421List(): void;
  getField421List(): Array<string>;
  setField421List(value: Array<string>): void;
  addField421(value: string, index?: number): string;

  getField422(): number;
  setField422(value: number): void;

  clearField423List(): void;
  getField423List(): Array<number>;
  setField423List(value: Array<number>): void;
  addField423(value: number, index?: number): number;

  getField424(): boolean;
  setField424(value: boolean): void;

  clearField425List(): void;
  getField425List(): Array<boolean>;
  setField425List(value: Array<boolean>): void;
  addField425(value: boolean, index?: number): boolean;

  getField426(): number;
  setField426(value: number): void;

  clearField427List(): void;
  getField427List(): Array<number>;
  setField427List(value: Array<number>): void;
  addField427(value: number, index?: number): number;

  hasField428(): boolean;
  clearField428(): void;
  getField428(): ActualData4 | undefined;
  setField428(value?: ActualData4): void;

  clearField429List(): void;
  getField429List(): Array<ActualData4>;
  setField429List(value: Array<ActualData4>): void;
  addField429(value?: ActualData4, index?: number): ActualData4;

  getField430(): string;
  setField430(value: string): void;

  clearField431List(): void;
  getField431List(): Array<string>;
  setField431List(value: Array<string>): void;
  addField431(value: string, index?: number): string;

  getField432(): number;
  setField432(value: number): void;

  clearField433List(): void;
  getField433List(): Array<number>;
  setField433List(value: Array<number>): void;
  addField433(value: number, index?: number): number;

  getField434(): boolean;
  setField434(value: boolean): void;

  clearField435List(): void;
  getField435List(): Array<boolean>;
  setField435List(value: Array<boolean>): void;
  addField435(value: boolean, index?: number): boolean;

  getField436(): number;
  setField436(value: number): void;

  clearField437List(): void;
  getField437List(): Array<number>;
  setField437List(value: Array<number>): void;
  addField437(value: number, index?: number): number;

  hasField438(): boolean;
  clearField438(): void;
  getField438(): ActualData4 | undefined;
  setField438(value?: ActualData4): void;

  clearField439List(): void;
  getField439List(): Array<ActualData4>;
  setField439List(value: Array<ActualData4>): void;
  addField439(value?: ActualData4, index?: number): ActualData4;

  getField440(): string;
  setField440(value: string): void;

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
    field40: string,
    field41List: Array<string>,
    field42: number,
    field43List: Array<number>,
    field44: boolean,
    field45List: Array<boolean>,
    field46: number,
    field47List: Array<number>,
    field48?: ActualData4.AsObject,
    field49List: Array<ActualData4.AsObject>,
    field410: string,
    field411List: Array<string>,
    field412: number,
    field413List: Array<number>,
    field414: boolean,
    field415List: Array<boolean>,
    field416: number,
    field417List: Array<number>,
    field418?: ActualData4.AsObject,
    field419List: Array<ActualData4.AsObject>,
    field420: string,
    field421List: Array<string>,
    field422: number,
    field423List: Array<number>,
    field424: boolean,
    field425List: Array<boolean>,
    field426: number,
    field427List: Array<number>,
    field428?: ActualData4.AsObject,
    field429List: Array<ActualData4.AsObject>,
    field430: string,
    field431List: Array<string>,
    field432: number,
    field433List: Array<number>,
    field434: boolean,
    field435List: Array<boolean>,
    field436: number,
    field437List: Array<number>,
    field438?: ActualData4.AsObject,
    field439List: Array<ActualData4.AsObject>,
    field440: string,
  }
}

