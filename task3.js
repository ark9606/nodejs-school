// Задание 3:
// Переписать ф-цию memoization используюя ES6 features

(function () {

  const memoization = func => {
    const { name: fName } = func;

    return (...args) => {
      const argsKey = args.join(',');

      let strLog = '';

      if(!(fName in memoization) || !(argsKey in memoization[fName])) {
        const funcRes = func(...args);

        memoization[fName] = {
          ...memoization[fName],
          [argsKey]: funcRes
        };

        strLog = 'Executed: ';
      }

      console.log(strLog + `${fName}(${argsKey}) = ${memoization[fName][argsKey]}`);      
      return memoization[fName][argsKey];
    }
  }

  memoization(multiply)(1 ,2);  // вычислено
  memoization(multiply)(1 ,3);  // вычислено
  memoization(multiply)(1 ,2);  // взято из кеша
  memoization(sum)(1 ,3, 4);    // вычислено
  memoization(sum)(10);         // вычислено
  memoization(sum)(10);         // взято из кеша


  function sum (...array) {
    return array.reduce((prevValue, item) => prevValue + +item, 0);
  }

  function multiply(x, y){
    return x * y;
  }
  
})();