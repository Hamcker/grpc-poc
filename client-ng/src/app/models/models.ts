import { Observable } from 'rxjs';
import { BenchmarkRecord } from './BenchmarkRecord';

export interface IBenchmarkStep {
   operation: string;
   duration?: number;
   active?: boolean;
}
export interface IBenchmarkStepGroup {
   steps?: BenchmarkRecord<any>[];
}

export interface IBenchmark {
   title: string;
   stepGroups?: IBenchmarkStepGroup[];
   status?: number;
}
