import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config();

type MongoConfigType = {
  connectionString: string;
};

export const MongoConfig: MongoConfigType = {
  connectionString: env.get('CONNECTION_STRING').required().asString(),
};
