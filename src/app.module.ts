import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

console.log({
  host: process.env.host,
  port: process.env.db_port,
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
});

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.host,
      port: parseInt(process.env.db_port!, 10) || 5432,
      username: process.env.username,
      password: process.env.password,
      database: process.env.database,
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
