export default (name, value) => {
  const nameLength = 12;
  const nameType = /[a-zA-Z\u00C0-\u00FF ]+/i;
  const passwordLength = 6;
  const regExrEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  switch (true) {
    case name === 'name':
      return value.length >= nameLength && nameType.test(value);
    case name === 'email':
      return regExrEmail.test(value);
    case name === 'password':
      return value.length >= passwordLength;
    default:
      return false;
  }
};
