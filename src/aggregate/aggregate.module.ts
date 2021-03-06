import { NgModule } from '@angular/core';

import { GroupByPipe } from './group-by.pipe';
import { MaxPipe } from './max.pipe';
import { MeanPipe } from './mean.pipe';
import { MinPipe } from './min.pipe';
import { SumPipe } from './sum.pipe';

@NgModule({
  declarations: [
    GroupByPipe,
    MaxPipe,
    MeanPipe,
    MinPipe,
    SumPipe
  ],
  exports: [
    GroupByPipe,
    MaxPipe,
    MeanPipe,
    MinPipe,
    SumPipe
  ]
})
export class NgAggregatePipesModule {}


