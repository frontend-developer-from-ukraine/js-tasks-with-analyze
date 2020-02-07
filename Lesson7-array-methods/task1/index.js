const getSpecialNumbers = numbers =>
    numbers.filter(num => num % 3 === 0);

/*
    методом .filt мы можем отфильтровать , 

1.	const getSpecialNumbers = numbers => {
2.	    let specialNumbers = [];
3.	
4.	    const result = numbers.filter(num => { // создали переменную result 
5.	        if (num % 3 === 0) {
6.	            return true; // если num - удовлетворяет условию то верну true
7.	        }
8.	        return false; // если не удотворяет то верну false 
9.	    });
10.	
11.	    return result;
12.	};
13.	
14.	const arr = [1, 2, 3, 4, 5, 6];
15.	console.log(getSpecialNumbers(arr));

УПРОСТИМ: , МОЖНО ИСПОЛЬЗОВАТЬ ТЕРНАРНЫЙ ОПЕРАТОР:

1.	const getSpecialNumbers = numbers => {
2.	    let specialNumbers = [];
3.	
4.	    const result = numbers.filter(num => {
5.	        return num % 3 === 0 ? true : false;    // тернарный оператор
6.	    });
7.	
8.	    return result;
9.	};
10.	
11.	const arr = [1, 2, 3, 4, 5, 6, 18];
12.	console.log(getSpecialNumbers(arr));

1.	const getSpecialNumbers = numbers => {
2.	    let specialNumbers = [];
3.	
4.	    const result = numbers.filter(num => {
5.	        return num % 3 === 0;  // УБРАЛИ ТРУ ИЛИ ФОЛС , ПОТОМУ ЧТО И ТАК СТАНЕТ ТРУ ИЛИ ФОЛС
6.	    });
7.	
8.	    return result;
9.	};

И ТАК: 1. ПРОМЕЖУТОЧНАЯ ПЕРЕМЕННАЯ НАМ БОЛЬШЕ НЕ НУЖНА!
            2. ЕСЛИ ОДИН return то можем фигурные скобки упустить и return упустить

1.	const getSpecialNumbers = numbers =>
2.	    numbers.filter(num => num % 3 === 0);
3.	
4.	const arr = [1, 2, 3, 4, 5, 6, 18];
5.	console.log(getSpecialNumbers(arr));

ВЫВОД МЫ ВЫБРАЛИ ПРАВИЛЬНЫЙ МЕТОД МАССИВА ДЛЯ ТЕКУЩЕЙ ЗАДАЧИ И СОКРАТИЛИ ЕГО В РАЗЫ!!
*/