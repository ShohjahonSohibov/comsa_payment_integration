import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config();

type ServerConfigType = {
  port: number;
};

export const ServerConfig: ServerConfigType = {
  port: env.get('PORT').required().asPortNumber(),
};
