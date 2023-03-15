import express from 'express';
import connectToDb from './utils/db.js';
import logger from './middleware/logger.js';
import fallback from './middleware/fallback.js';
import errorHandler from './middleware/errorhandler.js';
import router from "./router.js";

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(logger);
app.use(router)
app.use(fallback);
app.use(errorHandler);

const startServer = async () => await connectToDb();
{
  app.listen(PORT, () => {
    console.log(`server is working on ${PORT}`);
  });
}
startServer();
