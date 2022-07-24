export const runIterations = (valueA: number, valueB: number) => {
  for (let i = 0; i < 1e6; ++i) {
    [valueA, valueB] = [valueB, valueA];
  }
};

export const warmupFn = () => {
  runIterations(1, 2);
};
