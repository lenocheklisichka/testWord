document.addEventListener('DOMContentLoaded', function(){
  /*3.JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска.
    Не использовать onclick атрибут в разметке кода.*/

  let btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    let search = document.getElementById("search");
     alert(search.value);
  });

  /*4.Если ввести в поиск слово google и нажать кнопку НАЙТИ, 
  то нужно показать в алерте “Yandex круче. Но это не точно”*/

  btn.addEventListener('click', () => {
    if(search.value == "google") {
      alert("Yandex круче.Но это не точно");
    }
  });

  /*5.Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. 
  При нажатии на кнопку НАЙТИ также вывести ещё и св-во name
  первого объекта в массиве*/

  let users = [
    {name: "John", age: 18},
    {name: "Elen", age: 35},
    {name: "Petr", age: 33},
    {name: "Alexander", age: 25},
  ];
    btn.addEventListener('click', () => {
      alert(users[0].name);
    });


  /*6.Создать функцию superSum, которая будет в алерте показывать сумму 
  ЛЮБЫХ двух чисел, переданных этой функции через параметры */

  let num1 = 10; let num2 = 26;

  function superSum(a, b) {
    let sum = a + b;
    alert(sum);
  }
  superSum(num1, num2);


  /*7.Создать массив из чисел в перемешку (не отсортированы). 
  С помощью цикла for найти максимальный и минимальный элементы в массиве*/

  let array = [5, 27, 8, 36, 29, 4, 48, -2];
  let max = 0;
  let min = 0;

  for (let i = 0; i < array.length; i++) {
    if(array[i] > max) {
      max = array[i];
    }
    if(array[i] < min) {
      min = array[i];
    }
  }
  console.log(array);
  console.log("максимальный элемент: " + max + ", " + "минимальный элемент: "+ min);

  /*8.Создать 2 переменные a и b… присвоить им любые значения.
  Потом программно поменять эти значения местами, не используя значения напрямую*/

 let a = "Paris";
 let b = "London";
 [a, b] = [b, a];
 console.log(a, b);

  /* 9.Оформить алгоритм поиска максимального числа в массиве как функцию findMax
  (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала 
  нам максимальное число из массива)*/

  function findMax(numArray) {
    return Math.max.apply(null, numArray);
  }
  findMax();

 /*10.Показать alert с результатом поиска не сразу, а через 3 секунды
  после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”,
  но с задержкой в 3 секунды)*/

  function alertTimer() {
    btn.addEventListener('click', () => {
      alert("Яндекс круче");
    });
  }
  setTimeout(alertTimer, 3000);
});