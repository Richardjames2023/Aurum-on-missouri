export const VAT_RATE = 0.075;

export const parseRoomPrice = (price: string | number): number =>
  typeof price === 'number' ? price : Number(price.replace(/,/g, ''));

export const calculateVat = (amount: number, currency: string): number =>
  currency === 'NGN' ? Math.round(amount * VAT_RATE) : 0;
