export const mapValues = (mapData) => {
  return Array.from(mapData.values());
};

export const mapKeys = (mapData) => {
  return Array.from(mapData.keys());
};

export const mapSize = (mapData) => {
  return mapData.size;
};

export const getMapValuesByKey = (mapData, key) => {
  return mapData.get(key);
};
