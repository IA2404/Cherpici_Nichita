Основы работы с массивами в JavaScript:

.map(), .filter(), .reduce()
.forEach(), .some(), .every()
.sort(), .find(), .findIndex()
Set и Object.keys()
Работу с объектами:

Доступ к свойствам (obj.property, obj["property"])
Деструктуризация { transaction_id, transaction_date } = transaction
Создание, изменение и копирование объектов
Работу с датами:

new Date(), .getFullYear(), .getMonth(), .getDate()
Разница между датами (date1 - date2)
Преобразование строки в дату new Date("2024-02-04")
Функции и их параметры:

function myFunc(param1, param2) { return result; }
Стрелочные функции const myFunc = (param1, param2) => result;
Опциональные параметры: function example(a, b = 10)
Документирование кода с JSDoc:

/** @param {string} type - описание параметра */
@returns {number} Описание возвращаемого значения
Тестирование кода в консоли:

console.log()
Отладка через debugger
Проверка работы функций с разными входными данными



_______________________________________________________________________________________________________________________________________________________________________________________________________________

1. Основы работы с массивами в JavaScript
Массив – это структура данных, в которой можно хранить элементы (числа, строки, объекты). Вот основные методы работы с массивами:

1.1 forEach()
Выполняет функцию для каждого элемента массива, но не возвращает новый массив.

const transactions = [100, 200, 300];
transactions.forEach((amount) => {
    console.log(amount);
});
1.2 map()
Создает новый массив, применяя функцию к каждому элементу.

const doubled = transactions.map(amount => amount * 2);
console.log(doubled); // [200, 400, 600]
1.3 filter()
Создает новый массив, оставляя только те элементы, которые соответствуют условию.

const largeTransactions = transactions.filter(amount => amount > 150);
console.log(largeTransactions); // [200, 300]
1.4 reduce()
Сокращает массив до одного значения.

const total = transactions.reduce((sum, amount) => sum + amount, 0);
console.log(total); // 600
1.5 some() и every()
some() – проверяет, есть ли хотя бы один элемент, удовлетворяющий условию.
every() – проверяет, удовлетворяют ли все элементы условию.


console.log(transactions.some(amount => amount > 250)); // true
console.log(transactions.every(amount => amount > 50)); // true
1.6 find() и findIndex()
find() – возвращает первый элемент, подходящий под условие.
findIndex() – возвращает индекс первого подходящего элемента.


const found = transactions.find(amount => amount > 150);
console.log(found); // 200

const index = transactions.findIndex(amount => amount > 150);
console.log(index); // 1
1.7 sort()
Сортирует массив. Важно: по умолчанию сортирует как строки, поэтому для чисел нужен compareFunction.


const sorted = [...transactions].sort((a, b) => a - b);
console.log(sorted); // [100, 200, 300]
1.8 Set
Используется для хранения уникальных значений.


const types = ["debit", "credit", "debit", "credit", "debit"];
const uniqueTypes = [...new Set(types)];
console.log(uniqueTypes); // ["debit", "credit"]
_______________________________________________________________________________________________________________________________________________________________________________________________________________
2. Работа с объектами в JavaScript
Объект – это структура данных, которая хранит данные в виде пар ключ – значение.

2.1 Создание объекта

const transaction = {
    transaction_id: "12345",
    transaction_date: "2025-02-04",
    transaction_amount: 150,
    transaction_type: "debit",
    transaction_description: "Grocery shopping",
    merchant_name: "Supermarket",
    card_type: "debit"
};
Ключи (например, transaction_id) – это строки.
Значения могут быть любого типа: строки, числа, массивы, другие объекты.
2.2 Доступ к свойствам
Два способа получения значений:


console.log(transaction.transaction_amount); // 150
console.log(transaction["transaction_amount"]); // 150
Второй способ (["ключ"]) используется, когда ключ – переменная:


const key = "transaction_amount";
console.log(transaction[key]); // 150
2.3 Добавление/изменение свойств

transaction.status = "Completed"; // Добавляет новое свойство
transaction.transaction_amount = 200; // Изменяет существующее
console.log(transaction);
2.4 Удаление свойств

delete transaction.status;
console.log(transaction);
2.5 Деструктуризация объектов
Деструктуризация – это удобный способ извлечения значений из объекта.


const { transaction_id, transaction_amount } = transaction;
console.log(transaction_id); // "12345"
console.log(transaction_amount); // 150
Вместо transaction.transaction_id можно просто transaction_id.
Если свойства нет, будет undefined:

const { nonExistent } = transaction;
console.log(nonExistent); // undefined
Можно задать значение по умолчанию:


const { transaction_status = "Pending" } = transaction;
console.log(transaction_status); // "Pending"
2.6 Копирование объектов
Обычное присваивание копирует ссылку, а не сам объект:


const copy1 = transaction;
copy1.transaction_amount = 300; 
console.log(transaction.transaction_amount); // 300 (оригинал тоже изменился!)
Чтобы создать независимую копию, используют:

1. Object.assign()

const copy2 = Object.assign({}, transaction);
copy2.transaction_amount = 500;
console.log(transaction.transaction_amount); // 300 (не изменился!)
2. Spread-оператор (...)

const copy3 = { ...transaction, transaction_amount: 700 };
console.log(copy3.transaction_amount); // 700
console.log(transaction.transaction_amount); // 300 (не изменился)
Но эти методы не копируют вложенные объекты. Для глубокого копирования:


const deepCopy = JSON.parse(JSON.stringify(transaction));
_______________________________________________________________________________________________________________________________________________________________________________________________________________
3. Работа с датами в JavaScript
В JavaScript работа с датами выполняется через объект Date.

3.1 Создание даты
Создать дату можно разными способами:


const now = new Date(); // Текущая дата и время
console.log(now); // Например: 2025-02-04T14:30:00.123Z
3.2 Создание даты из строки

const dateFromString = new Date("2024-12-25");
console.log(dateFromString); // 2024-12-25T00:00:00.000Z

const dateFromParts = new Date(2024, 11, 25); // Декабрь – 11, а не 12!
console.log(dateFromParts); // 2024-12-25T00:00:00.000Z
🔹 Месяцы в JavaScript начинаются с 0! (0 = январь, 11 = декабрь).

3.4 Получение частей даты
Допустим, у нас есть дата:


const date = new Date("2025-02-04T14:30:00");
Теперь получаем её части:


console.log(date.getFullYear()); // 2025
console.log(date.getMonth()); // 1 (Февраль, потому что январь = 0)
console.log(date.getDate()); // 4 (День месяца)
console.log(date.getDay()); // 2 (Вторник, потому что воскресенье = 0)
console.log(date.getHours()); // 14
console.log(date.getMinutes()); // 30
console.log(date.getSeconds()); // 0

3.5 Сравнение дат
Даты можно сравнивать, но нужно конвертировать их в число:


const date1 = new Date("2025-02-04");
const date2 = new Date("2025-02-05");

console.log(date1 > date2); // false
console.log(date1 < date2); // true
console.log(date1.getTime() === date2.getTime()); // false
Метод .getTime() возвращает миллисекунды с 1 января 1970 года. Он нужен, чтобы корректно сравнивать даты.

3.6 Разница между датами
Если надо узнать разницу (например, в днях):


const diffMs = date2 - date1; // Разница в миллисекундах
const diffDays = diffMs / (1000 * 60 * 60 * 24); // Переводим в дни

console.log(diffDays); // 1
3.7 Проверка, находится ли дата в диапазоне
Функция для проверки, входит ли дата в диапазон:


function isDateInRange(date, start, end) {
    return date >= start && date <= end;
}

const checkDate = new Date("2025-02-04");
const startDate = new Date("2025-02-01");
const endDate = new Date("2025-02-10");

console.log(isDateInRange(checkDate, startDate, endDate)); // true
_______________________________________________________________________________________________________________________________________________________________________________________________________________
4. Функции в JavaScript
Функции позволяют организовать код в переиспользуемые блоки.

4.1 Объявление функции
Три основных способа:

1. Обычная функция (Function Declaration)

function greet(name) {
    return `Привет, ${name}!`;
}

console.log(greet("Антон")); // Привет, Антон!
Доступна до её объявления (из-за "hoisting").
Может быть вызвана в любом месте файла.
2. Функция в переменной (Function Expression)

const greet = function(name) {
    return `Привет, ${name}!`;
};

console.log(greet("Антон")); // Привет, Антон!
Доступна только после объявления.
Полезна, если нужна анонимная функция (без имени).
3. Стрелочная функция (Arrow Function)

const greet = (name) => `Привет, ${name}!`;
console.log(greet("Антон")); // Привет, Антон!
Если один параметр, можно без скобок (name => ...).
Если одно выражение, можно без return и {}.


Нельзя использовать this, оно берётся из внешнего контекста.
Нельзя использовать arguments (см. ниже).
Нельзя вызывать перед объявлением.
4.2 Аргументы и параметры
Параметры – это переменные внутри функции.


function sum(a, b) {
    return a + b;
}

console.log(sum(5, 10)); // 15
Если параметр не передан, его значение – undefined:


function printMessage(message) {
    console.log(message);
}

printMessage(); // undefined
4.3 Значения по умолчанию

function greet(name = "Гость") {
    return `Привет, ${name}!`;
}

console.log(greet()); // Привет, Гость!
console.log(greet("Антон")); // Привет, Антон!
Если параметр не передан → берётся Гость.
4.4 Rest-параметры (...args)
Позволяют передавать неограниченное количество аргументов:


function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15
...numbers собирает все аргументы в массив.

arguments работает только в обычных функциях, а ...args – в любых.
4.5 Передача функции как аргумента
Функции можно передавать внутрь других функций:


function operate(a, b, operation) {
    return operation(a, b);
}

function multiply(x, y) {
    return x * y;
}

console.log(operate(5, 3, multiply)); // 15
В operate() передаётся multiply как аргумент.
4.6 Возвращение функции (замыкания)
Функция может возвращать другую функцию:


function createMultiplier(factor) {
    return (num) => num * factor;
}

const double = createMultiplier(2);
console.log(double(5)); // 10
createMultiplier(2) создаёт функцию, которая умножает на 2.
_______________________________________________________________________________________________________________________________________________________________________________________________________________
5. Документирование кода с помощью JSDoc
JSDoc – это стандарт документирования кода в JavaScript, который помогает понять, как работают функции, какие параметры они принимают и что возвращают.

5.1 Базовый синтаксис JSDoc

/**
 * Вычисляет сумму двух чисел.
 * @param {number} a - Первое число.
 * @param {number} b - Второе число.
 * @returns {number} Сумма чисел a и b.
 */
function sum(a, b) {
    return a + b;
}
🔹 Разбор:

@param {тип} имя - описание – описывает параметры.
@returns {тип} описание – указывает, что возвращает функция.
5.2 Описание необязательных параметров
Необязательные параметры указываются в квадратных скобках []:


/**
 * Приветствует пользователя.
 * @param {string} [name="Гость"] - Имя пользователя (по умолчанию "Гость").
 * @returns {string} Приветственное сообщение.
 */
function greet(name = "Гость") {
    return `Привет, ${name}!`;
}
Если name не передан → будет "Гость".
5.3 Массивы, объекты и сложные типы
Если функция принимает массив:


/**
 * Вычисляет сумму всех элементов массива.
 * @param {number[]} numbers - Массив чисел.
 * @returns {number} Сумма элементов массива.
 */
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
🔹 @param {number[]} означает массив чисел.

Если функция принимает объект:


/**
 * Выводит информацию о транзакции.
 * @param {Object} transaction - Объект транзакции.
 * @param {string} transaction.id - Уникальный идентификатор.
 * @param {number} transaction.amount - Сумма транзакции.
 * @param {string} transaction.type - Тип транзакции ("debit" или "credit").
 */
function printTransaction(transaction) {
    console.log(`ID: ${transaction.id}, Сумма: ${transaction.amount}, Тип: ${transaction.type}`);
}
🔹 @param {Object} означает объект, а его свойства описываются отдельно.

5.4 Описание функций, возвращающих null или void
Если функция ничего не возвращает, используется @returns {void}:


/**
 * Выводит сообщение в консоль.
 * @returns {void}
 */
function logMessage() {
    console.log("Сообщение");
}
Если функция может вернуть null, указывают ?:


/**
 * Ищет пользователя по ID.
 * @param {number} id - ID пользователя.
 * @returns {?Object} Найденный пользователь или null, если не найден.
 */
function findUser(id) {
    return id === 1 ? { id: 1, name: "Антон" } : null;
}
?Object означает либо объект, либо null.
5.5 Описание функций с колбэком (callback)
Если функция принимает другую функцию как аргумент:


/**
 * Выполняет операцию с числами.
 * @param {number} a - Первое число.
 * @param {number} b - Второе число.
 * @param {(num1: number, num2: number) => number} operation - Функция, выполняющая операцию.
 * @returns {number} Результат операции.
 */
function executeOperation(a, b, operation) {
    return operation(a, b);
}
{(num1: number, num2: number) => number} описывает функцию, которая принимает два числа и возвращает число.
5.6 JSDoc для класса
Для классов описываются свойства и методы:


/**
 * Класс, представляющий банковский счет.
 */
class BankAccount {
    /**
     * Создает новый банковский счет.
     * @param {string} owner - Владелец счета.
     * @param {number} balance - Начальный баланс.
     */
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    /**
     * Пополняет счет.
     * @param {number} amount - Сумма пополнения.
     * @returns {void}
     */
    deposit(amount) {
        this.balance += amount;
    }

    /**
     * Получает текущий баланс.
     * @returns {number} Текущий баланс счета.
     */
    getBalance() {
        return this.balance;
    }
}
