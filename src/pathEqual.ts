const pathEqual = (actual: string, expected: string): boolean =>
  normalizePath(actual) === normalizePath(expected);

const normalizePath = (path: string): string => {
  const replace: [RegExp, string][] = [
    [/\\/g, "/"],
    [/(\w):/, "/$1"],
    [/(\w+)\/\.\.\/?/g, ""],
    [/(\w+)\/\.\.\/?/g, ""],
    [/(\w+)\/\.\.\/?/g, ""],
    [/^\.\//, ""],
    [/\/\.\//, "/"],
    [/\/\.$/, ""],
    [/\/$/, ""],
  ];

  replace.forEach((array) => (path = path.replace(array[0], array[1])));

  return path;
};

export default pathEqual;
