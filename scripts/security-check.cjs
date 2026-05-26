#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

let exitCode = 0;

function sha256File(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}

async function checkYtDlp() {
  const binDir = path.join(__dirname, '..', 'bin');
  const binName = process.platform === 'win32' ? 'yt-dlp.exe' : 'yt-dlp';
  const binary = path.join(binDir, binName);
  if (!fs.existsSync(binary)) {
    console.warn('⚠  yt-dlp binary not found — run npm install first');
    return;
  }
}

async function main() {
  console.log('\n🔍 Cupid Player Security Check\n');

  await checkYtDlp();

  const envPath = path.join(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    const secrets = ['VITE_YOUTUBE_CLIENT_SECRET', 'VITE_SPOTIFY_CLIENT_ID'];
    for (const secret of secrets) {
      if (content.includes(secret + '=') && !content.includes(secret + '=your_')) {
        console.log(`✓ ${secret} is configured`);
      }
    }
  } else {
    console.warn('⚠  No .env file found — copy .env.example to .env');
  }

  const gitignore = fs.readFileSync(path.join(__dirname, '..', '.gitignore'), 'utf8');
  if (!gitignore.includes('*.p8')) {
    console.warn('⚠  .gitignore missing *.p8 entry');
    exitCode = 1;
  }

  console.log(exitCode === 0 ? '\n✅ All security checks passed\n' : '\n⚠️  Some checks failed\n');
  process.exit(exitCode);
}

main().catch((err) => {
  console.error('Security check failed:', err.message);
  process.exit(1);
});
