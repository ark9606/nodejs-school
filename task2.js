// Задание 2:
// Реализовать memoization - функция, которая принимает функции с любым количеством аргументов, 
// и если она уже вызывалась ранее с этими же аргументами - отдавать сразу ответ, если же нет, вызывать переданную функцию

(function () {

  function memoization(func) {
    const { name } = func;

    return function(...args) {
      const argsKey = args.join(',');

      if(!(name in memoization) || !(argsKey in memoization[name])) {

        const funcRes = func(...args);

        memoization[name] = {
          ...memoization[name],
          [argsKey]: funcRes
        };

        return funcRes;
      }

      console.log('Cache: ', name, argsKey, memoization[name][argsKey]);

      return memoization[name][argsKey];
    }
  }

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

})();
