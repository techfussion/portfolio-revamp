const customMap = (arr) => {
  const objMap = new Map();

  for (let obj of arr) {
    objMap.set(obj.property1, obj);
  }

  return {
    getObject: (target) => {
      return objMap.get(target);
    },
  };
};

export default customMap;
