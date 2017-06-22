export const sortByDisplayOrderProperty = (array) => {
  return sortByProperty(array, "DisplayOrder");
};

const sortByProperty = (array, property) => {
  return array.sort((first, second) => {
    const firstDisplayOrder = first[property];
    const secondDisplayOrder = second[property];
    return firstDisplayOrder < secondDisplayOrder
      ? -1
      : firstDisplayOrder > secondDisplayOrder
        ? 1
        : 0;
  })
};