// Задание 2:
// Реализовать memoization - функция, которая принимает функции с любым количеством аргументов, 
// и если она уже вызывалась ранее с этими же аргументами - отдавать сразу ответ, если же нет, вызывать переданную функцию
(function () {

  function memoization(func) {
    const { name } = func;

    var cache = 0;
    return function(...args) {
      const argsKey = args.join(',');

      console.log(name, argsKey);
      return cache++;
    }
  }


  var memoization = memoization(sum);

  console.log(memoization(1));
  console.log(memoization(2, 3));
  console.log(memoization(4, 5));
  // console.log(mem());
  // console.log(mem());
  

  return;

  const res = [
    memoization(multiply)(1 ,2),  // вычислено
    memoization(multiply)(1 ,3),  // вычислено
    memoization(multiply)(1 ,2),  // взято из кеша
    memoization(sum)(1 ,3, 4),    // вычислено
    memoization(sum)(10),         // вычислено
    memoization(sum)(10),         // взято из кеша
  ];


  console.log('Задание 2:', res);


  function sum (...array) {
    return array.reduce((prevValue, item) => prevValue + +item, 0);
  }

  function multiply(x, y){
    return x * y;
  }

  // function multiply (...array) { 
  //   return array.reduce((prevValue, item) => prevValue * +item, 1)
  // };

})();

