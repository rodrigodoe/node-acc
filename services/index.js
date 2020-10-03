exports.convert = (number) => {
  if (!calc[number]) {
    return null;
  }
  return calc[number];
};

const calc = {
  2: "a",
  22: "b",
  222: "c",
  9999: "z",
};
