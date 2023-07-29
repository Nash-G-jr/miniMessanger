export const updateObjectInArray = (
  items,
  objectPropName,
  itemId,
  newObjProps,
) => {
  return items.map((u) => {
    if (u[objectPropName] === itemId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
