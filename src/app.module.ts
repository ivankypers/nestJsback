import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import {DatasourceModule} from "./datasourse/datasourse.module";


@Module({
  imports: [AuthorsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
