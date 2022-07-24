const runIterations = (valueA: number, valueB: number) => {
  for (let i = 0; i < 1e6; ++i) {
    [valueA, valueB] = [valueB, valueA];
  }
};

export const warmupFn = () => {
  runIterations(1, 2);
};

// Paste your first function here in testFnOne
export const testFnOne = () => {
  runIterations(3, 4);
};

// Paste your second function here in testFnTwo
export const testFnTwo = () => {
  runIterations(5, 6);
};
