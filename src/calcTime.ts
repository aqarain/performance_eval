const { performance } = require('perf_hooks');

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
