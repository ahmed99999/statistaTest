export const getItemsPerPageNumber = <T>(
  items: T[],
  currentPageNumber: number,
  limit: number
): T[] => {
  const lastItemIndex = currentPageNumber * limit;
  const firstItemIndex = lastItemIndex - limit;
  return items.slice(firstItemIndex, lastItemIndex);
};

export const getMaximumPageNumber = (total: number, limit: number) =>
  Math.ceil(total / limit);
