const sortByProperty = (obj, propertyName) => {
  let list = [];
  const newObj = {};

  Object.values(obj).forEach((property) => {
    if (!list.includes(property[propertyName])) {
      list.push(property[propertyName]);
    }
  });

  list = list.sort((a, b) => b - a);

  list.forEach((item) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key][propertyName] === item) {
        newObj[key] = obj[key];
      }
    });
  });

  return newObj;
};

module.exports = sortByProperty;
