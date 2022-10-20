'use strict'

//В переменной min лежит число от 0 до 59. Определите в какую четверть 
//часа попадает это число (в первую, вторую, третью или четвертую).
let minn = 46
if (minn <= 15) {
    console.log('Число попадает в перввую четверть часа')
} else if (minn >= 16 && minn <= 30) {
    console.log('Число попадает во вторую четверть часа')
} else if (minn >= 31 && minn <= 45) {
    console.log('Число попадает в третью четверть часа')
} else {
    console.log('Число попадает в четвёртую четверть часа')
}

//Переменная lang может принимать 2 значения: 'ru' 'en'. 
//Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском.
let lang = 'ru'
let langArr = []
if (lang == 'ru') {
    langArr = ['пн', 'вт']
} else if (lang == 'eng') {
    langArr = ['mon', 'tue']
}
console.log(langArr)

//----- другое решение
var lang = 'ru';
if (lang == 'ru') {
	var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
	arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(arr);

//switch case
let lang1 = 'arab'
switch (lang1) {
    case 'ru':
        langArr = ['пн', 'вт']
        break
    case 'en':
        langArr = ['mon', 'ts']
        break
    default: 
        langArr = ['Lang undefined']
}
console.log(langArr)

//Переменная num может принимать 4 значения: 1, 2, 3 или 4. 
//Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.

let num = 5
let result = ''
switch (num) {
    case 1:
        result = 'зима'
        break
    case 2:
        result = 'весна'
        break
    case 3: 
        result = 'лето'
    default:
        result = 'undefined время года'
}
console.log(result)

// Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 5, 0, -3, 2.

const a = 2
if (a > 0 && a < 5) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. 
//Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

let bub = -3
if (bub == 0 || bub == 2) {
    bub = bub + 7
} else {
    bub = bub / 10
}
console.log(bub)

//Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных,
//иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

let bubb = 1
let gutt = 2
if (bubb <= 1 && gutt >= 3) {
    sum = bubb + gutt
    console.log(sum)
} else {
    raz = bubb - gutt
    console.log(raz)
}

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'.

let kpp = 3
let omm = 3
if (kpp > 2 && kpp < 11 || omm >= 6 && omm < 14) {
    console.log('true')
} else {
    console.log('false')
}

// Скопировать объект

let bp = {
    a: 10,
    b: {
        a: 10,
        b: 15,
        c: [1, 2]
    }
}

// полное копирование, а не создание новой ссылки на объект

let newBp = JSON.parse(JSON.stringify(bp))

bp.b.a = 200

console.log(bp)
console.log(newBp)

// Написать функцию, получающую на вход 2 числа
// Если оба числа четные - функция возвращает их произвевдение
// Если нечетные - функция возвращает их сумму
// Если одно из чисел четное, второе - нечетное, то функция возвращает нечетное число
let multi = 1
let summ = 0
let odd
function fun98(a, b) {
    if (a % 2 == 0 && b % 2 == 0) {
        multi = a * b
    }  else if (a % 2 != 0 && b % 2 != 0 ) {
        summ = a + b
    } else {
        odd = a % 2 ? a : b;
    }
    return {
        'Если четные, то произведение': multi,
        'Если нечетные, то сложение': summ,
        'Если одно - четное, второе - нечетное, возвращаем нечетное': odd
    }
}

console.log(fun98(3, 8))

//Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution,
//and you may not use the same element twice.

// let nums1 = [2, 7, 11, 15]
// let nums1 = [3, 2, 4]
// let target1 = 6

// let twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] + nums[i+1] === target) {
//             return [i, i + 1]
//         }
//     }
// }

// console.log(twoSum(nums1, target1))

let nums1 = [4, 3, 2]
let target1 = 6

let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum(nums1, target1))

//Найти вес всех вещей, цена которых более 80 
//и количество меньше 7
let food1 = [
    {name: 'Паста', weight: 350, price: 68, quantity: 10},
    {name: 'Салат с креветками', weight: 250, price: 101, quantity: 5},
    {name: 'Пюре с котлеткой', weight: 400, price: 90, quantity: 6},
    {name: 'Шашлык', weight: 350, price: 100, quantity: 100},
]

let fullWeight = 0
for (let i = 0; i < food1.length; i++) {
    if (food1[i].price > 80 && food1[i].quantity < 7) {
        fullWeight = food1[i].weight
    } 
}
console.log(fullWeight)


// let weightMore80 = 0
// let fullWeight = 0
// for (let i = 0; i < food1.length; i++) {
//     if (food1[i].price > 80) {
//         for (let j = 0; j < food1.length; j++) {
//             if (food1[j].quantity < 7) {
//                 fullWeight = food1[i].weight + food1[j].weight
//                 console.log(food1[i].weight)
//                 console.log(food1[j].weight)
//             }
//         }
//     } 
// }
// console.log(fullWeight)


// let fullWeight = 0
// for (let i = 0; i < food1.length; i++) {
//     for (let j = 0; j < food1.length; j++) {
//         if (food1[i].price > 80 && food1[j].quantity < 7) {
//             fullWeight = food1[i].weight + food1[j].weight
//             console.log(food1[i].weight, food1[j].weight)
//         }
//     } 
// }


console.log(fullWeight)
