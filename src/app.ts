import { calcTime, calcPerformance } from './utils/calcTime';
import { testFnOne, testFnTwo } from './testingFn';
import { compareTwoFn } from './utils/compareTwoFn';
import { warmupFn } from './utils/warmUpFn';

// warm up function - must run always
calcTime(warmupFn, 'Warmup function');

// for single function
calcTime(testFnTwo);
calcPerformance(testFnOne);

// for comparing two functions
compareTwoFn(testFnOne, testFnOne);
