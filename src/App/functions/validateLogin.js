export const validateEmail = (email) =>
{
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const isCyrillic = (str) => {

  const cyrillicPattern = /^[\u0400-\u04FF]+$/;

  for (let symbol of str) {
    if (!!cyrillicPattern.test(symbol)) {
      return true
    }
  }
  return false
}