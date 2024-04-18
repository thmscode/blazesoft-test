export const formatPrice = (num: string) => {
  const price = parseFloat(num);
  if (price % 1 !== 0) {
    return price.toString();
  } else {
    return price.toString() + ".00";
  }
};