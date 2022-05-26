import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CitiesModule } from './cities/cities.module';
import { ConfigModule } from '@nestjs/config';
import { City } from './cities/cities.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [City],
      autoLoadModels: true,
    }),
    CitiesModule,
  ],
})
export class AppModule {}
