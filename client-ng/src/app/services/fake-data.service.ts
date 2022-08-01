import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class FakeDataService {
   constructor() {}

   getString(): string {
      const minLength = this.next(5, 10);
      const maxLength = this.next(12, 15);
      const bytes = Array.from({ length: maxLength })
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
   getStringArray(): string[] {
      const lenght = this.next(10, 20);
      return Array.from({ length }).map(() => this.getString());
   }

   getNumber(): number {
      return this.next(-500_000_000, 500_000_000);
   }
   getNumberArray(): number[] {
      const lenght = this.next(10, 20);
      return Array.from({ length }).map(() => this.getNumber());
   }

   getBoolean(): boolean {
      return Math.random() <= 0.5;
   }
   getBooleanArray(): boolean[] {
      const lenght = this.next(10, 20);
      return Array.from({ length }).map(() => this.getBoolean());
   }

   next(min: number, max: number): number {
      return Math.round(Math.random() * (max - min) + min);
   }
}
