import { Component } from '@angular/core';
import * as moment from 'moment';
import { range, filter, mergeMap, from, map, tap } from 'rxjs';

import { IBenchmark, IBenchmarkStepGroup } from './models/models';
import { BenchmarkGenService, TFields } from './services/benchmark-gen.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   benchmarks: IBenchmark[] = [
      {
         title: 'gRPC',
         stepGroups: [],
      },
      {
         title: 'WebAPI',
         stepGroups: [],
      },
   ];

   constructor(private benchmarkService: BenchmarkGenService) {
      range(1, 4)
         .pipe(
            mergeMap((x) => from([10, 100, 1000]).pipe(map((y) => [x, y]))),
            tap(([fields, records]) => {
               this.benchmarks[0].stepGroups!.push(
                  this.benchmarkService.generateGrpcGroup(
                     records,
                     fields as TFields,
                     records
                  )
               );
               this.benchmarks[1].stepGroups!.push(
                  this.benchmarkService.generateWebApiGroup(
                     records,
                     fields as TFields,
                     records
                  )
               );
            })
         )
         .subscribe();
   }

   onRunClick(benchmark: IBenchmark) {
      benchmark.status = 1;
      this.benchmarkService.run(benchmark).subscribe();
   }

   getDuration(ms: number, maxPrecission = 3) {
      const duration = moment.duration(ms);

      const items: any[] = [];
      items.push({ timeUnit: 'd', value: Math.floor(duration.asDays()) });
      items.push({ timeUnit: 'h', value: duration.hours() });
      items.push({ timeUnit: 'm', value: duration.minutes() });
      items.push({ timeUnit: 's', value: duration.seconds() });
      items.push({ timeUnit: 'ms', value: duration.milliseconds() });

      const formattedItems = items.reduce(
         (accumulator, { value, timeUnit }) => {
            if (
               accumulator.length >= maxPrecission ||
               (accumulator.length === 0 && value === 0)
            ) {
               return accumulator;
            }

            accumulator.push(`${value}${timeUnit}`);
            return accumulator;
         },
         []
      );

      return formattedItems.length !== 0 ? formattedItems.join(' ') : '-';
   }
}
