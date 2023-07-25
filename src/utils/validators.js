export const required = (value) => {
  if (value) return undefined;
  return 'Field is required';
};

export const maxLengthCreator = (maxLenth) => (value) => {
  if (value && value.length > maxLenth) return 'ты давай поменьше напиши..';
  return undefined;
};
