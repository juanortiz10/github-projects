export const saveData = (keyName, keyValue) => {
  localStorage.setItem(keyName, keyValue);
};

export const getData = keyName => {
  return localStorage.getItem(keyName);
};
