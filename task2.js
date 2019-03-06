// Задание 2:
// Функция integers создает бесконечный итератор, который продолжает производить целые числа вечно.
// Нужно создать функцию take, которая оборачивает данный итератор в другой итератор,
// останавливающийся по достижении n элементов.

(function () {

  const iter = integers();

  for(let i of take(3, iter)){
    console.log(i);
  }


  function integers() {
    let current = 0;
    
    return {
      [Symbol.iterator]: () => ({
        next() {
          return {
            done: false,
            value: current++,
          }
        }
      })
    }
  }

  function take(end, iterator) {    
    return {
      [Symbol.iterator]: () => ({
        next() {
          const { value } = iterator[Symbol.iterator]().next();
          
          return {
            done: value > end,
            value
          }
        }
      })
    }
  }

})();
