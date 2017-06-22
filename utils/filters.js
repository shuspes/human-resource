export const getVisibleInTableProperties = (properties) => {
  const visibleProperties = getVisibleProperties(properties);
  return filterByProperty(visibleProperties, "ShouldDisplayInTable", true);
};

export const getVisibleInDetailsProperties = (properties) => {
  return getVisibleProperties(properties);
};

const getVisibleProperties = (properties) => {
  return filterByProperty(properties, "IsVisible", true);
};

const filterByProperty = (array, property, value) => {
  return array.filter(element => {
    return element[property] == value;
  })
};