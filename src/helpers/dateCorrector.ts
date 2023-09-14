const setCorrectDate = (date: string) => {
  const correctedDate = date.substring(0, 10);
  return correctedDate;
};

export default setCorrectDate;