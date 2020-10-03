/* helper que converte numeros e letras */

exports.convert = (number) => {
  if (!calc[number]) {
    return null;
  }
  return calc[number];
};

/* Biblitocas com os botes e os valores */

const calc = {
  1: "",
  2: "a",
  22: "b",
  222: "c",
  3: "d",
  33: "e",
  333: "f",
  4: "g",
  44: "h",
  444: "i",
  5: "j",
  55: "k",
  555: "l",
  6: "m",
  66: "n",
  666: "o",
  7: "p",
  77: "q",
  777: "r",
  7777: "s",
  8: "t",
  88: "u",
  888: "v",
  9: "w",
  99: "x",
  999: "y",
  9999: "z",
  0: " ",
  "*": "*",
  "#": "#",
};
