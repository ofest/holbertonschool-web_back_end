export default function sigUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
