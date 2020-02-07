const transformToObject = arr => {
    let obj = {};

    arr.forEach(el => {
        obj[el] = el;
    });
    return obj;
}

const arr = [1, 'text'];
console.log(transformToObject(arr));

/*
Алгоритм
1. создали стелочную функцию , в аргумент передали массив 
2. объявили новый объект 
3. перебрали объект , call back функция 
4. обьект массиву равен не массиву
5. вернуть переменную 
*/