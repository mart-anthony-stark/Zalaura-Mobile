export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const applyDiscount = (price: number, discount: number): number => {
  return ((price) * (1 - discount))
};