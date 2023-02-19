export const getFilteredStores = (searchConditions) => {
  if (isEmptyObject(searchConditions)) {
    return stores;
  }
  const BreakException = {};
  const filteredStores = stores.filter((store) => {
    let matched = false;
    Object.keys(searchConditions).forEach((condition) => {
      try {
        if (
          store[condition].includes(searchConditions[condition]) ||
          store[condition] === searchConditions[condition]
        ) {
          matched = true;
          throw BreakException;
        } else {
          matched = false;
          throw BreakException;
        }
      } catch (error) {
        if (error !== BreakException) console.warn(error);
      }
    });
    return matched;
  });
  return filteredStores;
};
