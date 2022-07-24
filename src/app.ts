import { calcTime, calcPerformance } from './utils/calcTime';
import { testFnOne, testFnTwo, warmupFn } from './testingFn';
import { compareTwoFn } from './utils/compareTwoFn';

// warm up function - must run always
calcTime(warmupFn);

// for single function
calcTime(testFnTwo);
calcPerformance(testFnOne);

// for comparing two functions
compareTwoFn(testFnOne, testFnOne);
