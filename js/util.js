//Вспомогательные функции;
function getRandomPositiveInteger (min, max) {
  if (min < 0 || max < 0) {
    throw new RangeError('Числа не должны быть отрицательными');}
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
const checkStringLength = function (string, lengthNumber = 140) {
//Проверка параметра string на 'Строку' и ёё длину (length)
  if (typeof string !== 'string' || typeof lengthNumber !== 'number') {
    throw new Error ('Строка не подходит по типу данных');
  }
  return string.length <= lengthNumber;
};

function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

export {getRandomPositiveInteger, checkStringLength, getRandomArrayElement};
