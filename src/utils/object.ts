export const objectExistsInArray = (
  itemsArray: any[],
  item: any,
  key: string
) => !!itemsArray.find((i) => i[key] === item[key]);
