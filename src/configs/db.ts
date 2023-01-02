//Works only for mongodb database
import {MONGO_URI} from "./index"

const mongoConfig = {
  url: MONGO_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    dbName: 'test',  // edit to your needs
  },
};

export default mongoConfig;