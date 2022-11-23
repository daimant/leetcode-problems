// first task

// Реализовать функциональность с помощью которой можно будет получать данные пользователей в нужном формате.
// На вход будет передаваться userId в виде строки.
// В зависимости от роли пользователя должны возвращаться разные данные.

// Таких ролей сейчас 2:
// – если роль admin, то возвращаются поля name, role, password и permissions;
// – если роль regular, то name и role.
// Роли в дальнейшем могут изменяться:
// – если роль несуществующая, то выдаем ошибку.

// Поле permissions должно быть в kebab-case и разбираться только из валидных значений rights.
// Поле permissions является массивом строк.
// Эти поля тоже могут в дальнешем изменяться.

// Пользователи
const users = [
  {
    id: 1,
    name: 'Ivan',
    role: 'regular',
    password: 'password',
  },
  {
    id: 2,
    name: 'Andrey',
    role: 'admin',
    password: 'password',
    // -> permissions: [] -> permissions: ['report-stats']
  },
  {
    id: 3,
    name: 'Victor',
    role: 'non-existent',
    password: 'password',
  },
];

// Метод, который должен возвращать данные пользователей в нужном формате
export async function getUserData(id) {
  // Получение пользователя
  const user = await fetch(`/api/users/${id}`);
  // Объект прав
  const rights = { reportStats: true, validate: true };
}
// Результат можно вывести через console.log(), либо через html

// second task

// Есть два эндпоинта, по которым получаем данные
// Первый эндпоинт – /users – возвращает список пользователей
const users2 = [
  {
    name: 'Avtushenko Andrey',
    books: [1, 2, 6],
  },
  {
    name: 'Belousova Daryay',
    books: [4, 6],
  },
  {
    name: 'Mirzoev Ruslan',
    books: [],
  },
];

// Второй эндпоинт – /books – возвращает список книг
const books = [
  {
    id: 1,
    name: 'The Da Vinci Code',
    author: 'Dan Braun',
  },
  {
    id: 2,
    name: 'Clean code',
    author: 'Robert Martin',
  },
  {
    id: 3,
    name: 'William Shakespeare',
    author: 'Hamlet',
  },
  {
    id: 4,
    name: 'Faust',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    id: 5,
    name: 'Nineteen Eighty-Four',
    author: 'George Orwell',
  },
  {
    id: 6,
    name: 'Brave New World',
    author: 'Aldous Huxley',
  },
];

// У каждого пользователя есть поле books, которое хранит в себе прочитанные книги пользователем
// Необходимо вывести список пользователей со всеми его книгами

// Конечный массив, который должен получиться
const result = [
  {
    name: 'Avtushenko Andrey',
    books: [
      { id: 1, name: 'The Da Vinci Code', author: 'Dan Braun' },
      { id: 2, name: 'Clean code', author: 'Robert Martin' },
      { id: 6, name: 'Brave New World', author: 'Aldous Huxley' },
    ],
  },
  {
    name: 'Belousova Daryay',
    books: [
      { id: 4, name: 'Faust', author: 'Johann Wolfgang von Goethe' },
      { id: 6, name: 'Brave New World', author: 'Aldous Huxley' },
    ],
  },
  {
    name: 'Mirzoev Ruslan',
    books: [],
  },
];
