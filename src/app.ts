import { calcTime, calcPerformance } from './calcTime';
import { testFnOne, testFnTwo, warmupFn } from './testingFn';

//warm up function
calcTime(warmupFn);

calcTime(testFnTwo);
calcPerformance(testFnOne);
