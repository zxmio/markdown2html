// Set environment variables and run build script
process.env.NODE_OPTIONS = '--openssl-legacy-provider';
process.env.GENERATE_SOURCEMAP = 'false';

// Spawn the build process
const { spawnSync } = require('child_process');
console.log('Starting build with NODE_OPTIONS=--openssl-legacy-provider');
const result = spawnSync('node', ['scripts/build.js'], {
  stdio: 'inherit',
  env: { ...process.env }
});

process.exit(result.status); 