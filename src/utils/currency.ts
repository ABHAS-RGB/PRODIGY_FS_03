export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const formatPriceWithCommas = (price: number): string => {
  return price.toLocaleString('en-IN');
};