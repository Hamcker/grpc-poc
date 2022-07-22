import { Observable } from 'rxjs';

export interface IBenchmarkRecord {
   operation: string;
   duration?: number;
   active?: boolean;
   run: (...args: any[]) => Observable<any>;
}
export interface IBenchmarkRecordGroup {
   records?: IBenchmarkRecord[];
   conclusion?: IBenchmarkRecord;
}

export interface IBenchmark {
   title: string;
   results?: IBenchmarkRecordGroup[];
}
