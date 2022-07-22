// package: contract
// file: data-generator.proto

var data_generator_pb = require("./data-generator_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DataProvider = (function () {
  function DataProvider() {}
  DataProvider.serviceName = "contract.DataProvider";
  return DataProvider;
}());

DataProvider.GenerateData1 = {
  methodName: "GenerateData1",
  service: DataProvider,
  requestStream: false,
  responseStream: false,
  requestType: data_generator_pb.GenerateDataRequest1,
  responseType: data_generator_pb.GenerateDataResponse1
};

DataProvider.GenerateData2 = {
  methodName: "GenerateData2",
  service: DataProvider,
  requestStream: false,
  responseStream: false,
  requestType: data_generator_pb.GenerateDataRequest2,
  responseType: data_generator_pb.GenerateDataResponse2
};

DataProvider.GenerateData3 = {
  methodName: "GenerateData3",
  service: DataProvider,
  requestStream: false,
  responseStream: false,
  requestType: data_generator_pb.GenerateDataRequest3,
  responseType: data_generator_pb.GenerateDataResponse3
};

DataProvider.GenerateData4 = {
  methodName: "GenerateData4",
  service: DataProvider,
  requestStream: false,
  responseStream: false,
  requestType: data_generator_pb.GenerateDataRequest4,
  responseType: data_generator_pb.GenerateDataResponse4
};

exports.DataProvider = DataProvider;

function DataProviderClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DataProviderClient.prototype.generateData1 = function generateData1(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataProvider.GenerateData1, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DataProviderClient.prototype.generateData2 = function generateData2(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataProvider.GenerateData2, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DataProviderClient.prototype.generateData3 = function generateData3(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataProvider.GenerateData3, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DataProviderClient.prototype.generateData4 = function generateData4(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DataProvider.GenerateData4, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.DataProviderClient = DataProviderClient;

