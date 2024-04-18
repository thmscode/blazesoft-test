export const formatPrice = (num: string) => {
  const price = parseFloat(num);
  if (price % 1 !== 0) {
    return price.toString();
  } else {
    return price.toString() + ".00";
  }
};

export const capitalize = (string: string) => {
  const split = string.toLowerCase().split(" ");
  const capitalized = split.map(
    (word) => word.substring(0, 1).toUpperCase() + word.substring(1)
  );
  return capitalized.join(" ");
};
