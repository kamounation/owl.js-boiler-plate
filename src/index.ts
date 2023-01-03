import { ENV, PORT } from 'configs';
import mongoConfig from 'configs/db';
import helmet from 'helmet';
import OwlFactory from 'owl-factory';
import ExamleRoute from 'routes/example.routes';

const server = new OwlFactory([new ExamleRoute()], process.env.PORT || PORT, ENV, {
  mongodbConfig: mongoConfig,
  otherDbConfig: null,
});

server.app.use(helmet());

server.listen();
