export function add(a, b){
  return a + b;
}
export const subtract = (a, b) => {
  return a - b;
}
export const multiply = (a, b) => (a * b);

const myExportDefault = {
  name: 'abc',
  age: 20
}

export default myExportDefault;