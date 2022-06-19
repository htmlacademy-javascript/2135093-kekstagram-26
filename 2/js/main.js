function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
 // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

 const checkStringLength = function (string, lengthNumber = 140) {
//Проверка параметра string на 'Строку' и ёё длину (length)
  if (typeof string !== 'string' || typeof lengthNumber !== 'number') {
   throw new Error ('Строка не подходит по типу данных');
  }
  return string.length <= lengthNumber;
 };
