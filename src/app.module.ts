import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CitiesModule } from './cities/cities.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'ivan',
      password: '12QWasZX!',
      database: 'kapibara',
      models: [],
      autoLoadModels: true,
    }),
    CitiesModule,
  ],
})
export class AppModule {}
