# Client-NG

## How to generate TS services from .proto file

1. Run `npm ci`
2. Install **Protoc 3.20.1** from [here](https://github.com/protocolbuffers/protobuf/releases/tag/v3.20.1) (don't user other versions!)
3. Open Powershell and run:
   ```sh
   [Environment]::SetEnvironmentVariable("PATH", $Env:PATH + ';C:\protoc-20.1-win64\bin', [EnvironmentVariableTarget]::Machine)
   ```
4. Run the script below:
   ```sh
   cd client-ng
   mkdir src/generated
   protoc --plugin=protoc-gen-ts="<ABSOLUTE_PATH_TO_CLIENT_PROJECT>/node_modules/ts-protoc-gen/bin/protoc-gen-ts.cmd" --js_out="import_style=commonjs,binary:./src/generated" --ts_out="service=grpc-web:./src/generated" --proto_path ../contracts data-generator.proto
   ```
   ⚠ Replace `<ABSOLUTE_PATH_TO_CLIENT_PROJECT>` with the real value.
