import { Observable, tap } from 'rxjs';

export type BenchmarkRunAction<T> = (...args: any[]) => Observable<T>;

export class BenchmarkRecord<T = any> {
   #started?: Date;

   duration?: number | undefined;
   active?: boolean | undefined;
   result?: T;

   constructor(public operation: string, public run: BenchmarkRunAction<T>) {}

   runRecord(...params: any[]) {
      this.active = true;
      this.#started = new Date();
      return this.run.apply(this, params).pipe(
         tap((result) => {
            this.result = result;
            this.duration ??=
               new Date().getTime() - (this.#started?.getTime() ?? 0);
            this.active = false;
         })
      );
   }
}
