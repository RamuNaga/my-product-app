const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const protoDir = path.join(root, 'libs/backend/proto/src/lib');
const outputDir = path.join(protoDir, 'generated');

const protoc = require.resolve('protoc/protoc.cjs');
const plugin = require.resolve('ts-proto/protoc-gen-ts_proto');

const protoFiles = fs
  .readdirSync(protoDir)
  .filter((file) => file.endsWith('.proto'))
  .sort()
  .map((file) => path.join(protoDir, file));

if (protoFiles.length === 0) {
  throw new Error('No .proto files found');
}

fs.mkdirSync(outputDir, { recursive: true });

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'my-product-proto-'));

const isWindows = process.platform === 'win32';
const pluginLauncher = path.join(
  tempDir,
  isWindows ? 'ts-proto.cmd' : 'ts-proto',
);

try {
  if (isWindows) {
    fs.writeFileSync(
      pluginLauncher,
      `@echo off\r\n"${process.execPath}" "${plugin}"\r\n`,
    );
  } else {
    fs.writeFileSync(
      pluginLauncher,
      `#!/bin/sh\nexec "${process.execPath}" "${plugin}"\n`,
      { mode: 0o755 },
    );
  }

  const args = [
    protoc,
    `--plugin=protoc-gen-ts_proto=${pluginLauncher}`,
    `--ts_proto_out=${outputDir}`,
    '--ts_proto_opt=nestJs=true,outputServices=grpc-js,grpcClients=grpc-js,addGrpcMetadata=true,outputDirFlatten=true',
    `-I=${protoDir}`,
    ...protoFiles,
  ];

  const result = spawnSync(process.execPath, args, {
    cwd: root,
    stdio: 'inherit',
  });

  if (result.error) {
    throw result.error;
  }

  process.exitCode = result.status ?? 1;
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
