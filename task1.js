// Задание 1:
// Реализовать ф-цию sum которая принимает любое кол-во аргументов и возвращает сумму всех аргументов

(function () {
  function sum_es5() {
    return Array.prototype.reduce.call(arguments, (prevValue, item) =>  prevValue + +item, 0);
  }
  
  const sum = (...array) => array.reduce((prevValue, item) => prevValue + +item, 0);
  
  
  const res = [
    sum(),
    sum(1),
    sum(1, 2, 3),
    sum(1, 2, 3, 4, 5),
  ];
  
  console.log('Задание 1:', res);

})();

