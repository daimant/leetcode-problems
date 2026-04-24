type JSONVal = null | boolean | number | string | JSONVal[] | { [key: string]: JSONVal };

function argumentsLength(...args: JSONVal[]): number {
  return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */