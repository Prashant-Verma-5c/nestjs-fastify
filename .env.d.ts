import { OperatorsAliases } from 'sequelize';
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      username: string;
      passwort: string;
      database: string;
      db_port: number;
      host: string;
      operators_aliases: OperatorsAliases;
    }
  }
}
export {};
