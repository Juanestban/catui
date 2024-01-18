export const normalizePercentage = (percentage: number) => {
  const normalized = percentage.toFixed(2);

  return { ptg: `${normalized}%`, normalized };
};
