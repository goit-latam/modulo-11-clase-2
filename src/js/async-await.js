/*
 * async/await
 * асинхрона(async) функція ЗАВЖДИ повертає проміс.
 * await змушує функцію чекати виконання проміса.
 * await не працює поза асинхроними функціями.
 */

// console.log('First');

// const fn = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   console.log(response);
// };

// fn();

// console.log('Second');

//? TASK 01
// Cambia por   async/await
// const loadPosts = async () => {
//   // return fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//   //   if (!response.ok) {
//   //     throw new Error(response.status);
//   //   }
//   //   return response.json();
//   // });

//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// "Es una función regular. ¿Cómo se puede obtener el resultado de la ejecución de una función asíncrona dentro de ella?"
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait()
//     .then(result => {
//       console.log(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// "... ¿qué puedo escribir aquí?
// para llamar a wait() y esperar el resultado '10' de una función asíncrona
// recuerda, no se puede usar 'await' aquí."
// }

// f();
