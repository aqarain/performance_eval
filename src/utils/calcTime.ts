import { performance } from 'perf_hooks';

export const calcTime = (cb: Function) => {
  console.time('Console.time Results');
  cb();
  console.timeEnd('Console.time Results');
};

export const calcPerformance = (cb: Function) => {
  const start = performance.now();
  cb();
  const end = performance.now();
  console.log(`Performance.now Results: ${end - start}ms`);
};

export const comparePerformance = (fnOne: Function, fnTwo: Function) => {
  console.log('⏳⏳Comparing two functions....');

  const start1 = performance.now();
  fnOne();
  const end1 = performance.now();
  const time1 = end1 - start1;

  const start2 = performance.now();
  fnTwo();
  const end2 = performance.now();
  const time2 = end2 - start2;

  console.log(`Time taken by Function 01: ${time1}ms`);
  console.log(`Time taken by Function 02: ${time2}ms`);

  if (time2 < time1) {
    console.log(
      `🚀 Function 02 is faster and completed ${(time1 - time2).toFixed(
        4
      )}ms earlier`
    );
  } else if (time1 < time2) {
    console.log(
      `🚀 Function 01 is faster and completed ${(time2 - time1).toFixed(
        4
      )}ms earlier`
    );
  } else {
    console.log('No Difference!');
  }
};
