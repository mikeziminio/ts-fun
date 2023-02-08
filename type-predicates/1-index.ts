
interface User {
    id: number;
    age: number;
}

// Не обычная функция, а типовый предикат
function isUser(user: any): user is User {
    return (user.id !== undefined) && (user.age !== undefined);
}

function doSomeWithUser(user: User): void {
    console.log(user.id);
}

// eval возвращает тип any
// приводим его к типу unknown и после этого
// у нас уже работает строгая типизация по человечески
const p = eval('({ id: 55, age: 33, name: "Mike"})') as unknown;

// doSomeWithUser(p);          // ошибка на этапе компиляции

// type guarding
if(isUser(p)) {             // если iUser возвращает true, то p приводится к типу User
    console.log(p.id);      // 55
    console.log(p.age);     // 33
    // console.log(p.name);    // ошибка на этапе компиляции
    doSomeWithUser(p);      // нет ошибки
}