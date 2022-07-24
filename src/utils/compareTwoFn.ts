import { comparePerformance } from './calcTime';

export const compareTwoFn = (fnOne: Function, fnTwo: Function) => {
  comparePerformance(fnOne, fnTwo);
};
