import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './cities.model';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [SequelizeModule.forFeature([City])],
})
export class CitiesModule {}
