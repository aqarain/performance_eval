export const warmupFn = () => {
  let valueA = 10,
    valueB = 20;

  for (let i = 0; i < 1e6; ++i) {
    [valueA, valueB] = [valueB, valueA];
  }
};

export const testFnOne = () => {
  let valueA = 10,
    valueB = 20;

  for (let i = 0; i < 1e6; ++i) {
    [valueA, valueB] = [valueB, valueA];
  }
};

export const testFnTwo = () => {
  let valueA = 1,
    valueB = 2;

  for (let i = 0; i < 1e6; ++i) {
    [valueA, valueB] = [valueB, valueA];
  }
};
