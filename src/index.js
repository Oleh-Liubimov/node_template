import { startSever } from './server.js';
import { initMongoDB } from './db/initMongoDB.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';

const bootstrap = async () => {
  await initMongoDB();
  createDirIfNotExists(UPLOAD_DIR);
  createDirIfNotExists(TEMP_UPLOAD_DIR);
  startSever();
};

bootstrap();
