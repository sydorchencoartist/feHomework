// 0. Наполнить массив products подобными объектами, с разными значениями
/*
const products = [
    {
        id: 1,
        name: "Iphone 14",
        price: 100000,
        category: "phone"
    },
    {
        id: 2,
        name: "Iphone 13",
        price: 90000,
        category: "mobile"
    },
    {
        id: 3,
        name: "Iphone 12",
        price: 80000,
        category: "phone"
    },
     {
        id: 4,
        name: "Iphone 11",
        price: 70000,
        category: "phone"
    },
    {
        id: 5,
        name: "Iphone 10",
        price: 60000,
        category: "mobile"
    },
    {
        id: 6,
        name: "Iphone 9",
        price: 55000,
        category: "phone"
    },
     {
        id: 7,
        name: "Iphone 8",
        price: 50000,
        category: "phone"
    },
    {
        id: 8,
        name: "Iphone 7",
        price: 45000,
        category: "mobile"
    },
    {
        id: 9,
        name: "Iphone 6",
        price: 40000,
        category: "phone"
    }
]
*/

// 1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со скидкой 10%  

/*
products.forEach(product => {
    const discountedPrice = product.price * 0.9;
    console.log(`${product.name}: ${discountedPrice}`);
});
*/

// 2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те продукты: 
//    а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив

/*
const moreThanPrice = products.filter(product => product.price > 88000);
console.log(moreThanPrice);
*/

//    б) категория который "phone"; const categoryPhone = []

/*
const categoryPhone = products.filter(product => product.category === "phone");
console.log(categoryPhone);
*/

/*
3. Создать функцию, которая получает два числа в параметры и выводит в консоль большее из них
max(10, 20) // 20
max(100, 5) // 100
*/

/*
function max(num1, num2) {
    return Math.max(num1, num2);
  }
  console.log(max(10, 20)); 
  console.log(max(100, 5)); 
*/

// 4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное и "НЕЧЕТ", если нечетное

/*
function checkEven() {
    let num = prompt("Введите любое число: ");
    if (num % 2 === 0) {
        console.log("ЧЕТ");
    } else {
        console.log("НЕЧЕТ");
    }
}
checkEven();
*/

/*
    5. Написать функцию, которая получает два числа и возводит первое число в степень второго
        power(10, 2) // 100
        power(12, 2) // 144
        power(2, 5) // 32
*/

/*
function power(base, exponent) {
    return Math.pow(base, exponent);
}
console.log(power(10, 2)); 
console.log(power(12, 2)); 
console.log(power(2, 5)); 
*/
