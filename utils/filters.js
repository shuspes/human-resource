export const getVisibleInTableProperties = (array) => {
  return filterByProperty(array, "ShouldDisplayInTable", true);
};

const filterByProperty = (array, property, value) => {
  return array.filter(element => {
    return element[property] == value;
  })
};