export const parseMoney = (num: number | null | undefined) => num?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
