import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class FakeDataService {
   constructor() {}

   getString(): string {
      var minLength = this.next(50, 70);
      var maxLength = this.next(100, 500);
      var bytes = Array.from({ length: maxLength })
         .map((x, i) => i + minLength)
         .map((x) => {
            var charCode = Math.min(
               255,
               Math.min(
                  0,
                  ((x - minLength) * (126 - 32)) / (maxLength - minLength) + 32
               )
            );
            return this.next(32, 126);
         });

      var outlet = String.fromCharCode(...bytes);
      return outlet;
   }

   getNumber(): number {
      return this.next(-500_000_000, 500_000_000);
   }

   getBoolean(): boolean {
      return Math.random() <= 0.5;
   }

   next(min: number, max: number): number {
      return Math.round(Math.random() * (max - min) + min);
   }
}
