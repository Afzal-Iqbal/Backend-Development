// // API Endpoint
// const getTodos = (resource, callback) =>{

//     return new Promise((resolve, reject) => {

//             const request = new XMLHttpRequest(); // it will create a request object
//         request.addEventListener('readystatechange', ()=>{
//             // console.log(request, request.readyState);
//             if(request.readyState === 4){
//                 // console.log(request, request.responseText && request.status === 200);
//                 //const data = JSON.parse(request.responseText);
//                 // const data = JSON.parse(request.responseText);
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             }else if(request.readyState === 4 && request.status !== 200){
//                 // console.error('Error fetching API data:', request.statusText);
//                 reject('could not fetch data');
//             }
//         });  
//         request.open('GET', 'resource'); // it will open a request to the server
//         request.send();
//     });
// }

// getTodos('todo/afzal.json').then(data => {
//     console.log('promise resolved:', data);
// }).catch(err => {
//     console.log('promise rejected', err);
// });

// // getTodos('todo/afzal.json', (err, data) => {
// //     console.log(data);
// //     getTodos('todo/iqbal.json', (err, data) => {
// //         console.log(data);
// //         getTodos('todo/ahad.json', (err, data) => {
// //             console.log(data);
// //         });
// //     });
    
// // });


// // // promise example here
// // const getSomething = () => {


// //     return new Promise((resolve, reject) => { // resolve and reject are the parameter we are gettting rom hte promise
// //         // fetch something 
// //         // resolve('some data');
// //         reject('some error');
// //     });
// // };

// // // getSomething().then((data) => {
// // //     console.log(data);
// // // }, (err) =>{
// // //     console.log(err)
// // // })

// // getSomething().then(data => {
// //     console.log(data);

// // }).catch(err => {
// //     console.log(err);
// // })

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//       if (request.readyState === 4) {
//         if (request.status === 200) {
//           const data = JSON.parse(request.responseText);
//           resolve(data);
//         } else {
//           reject('could not fetch data');
//         }
//       }
//     });

//     request.open('GET', resource); // ✅ Use dynamic resource
//     request.send();
//   });
// };

// getTodos('todo/afzal.json')
//   .then(data => {
//     console.log('promise resolved:', data);
//   })
//   .catch(err => {
//     console.log('promise rejected:', err);
//   });


// practice with promises
// const randomOutcome = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.5;
//       success ? resolve("Success") : reject("FAILLED TO FULLFILL THE CODITINO");  

//     },1500);
//   });
// };

// randomOutcome().then(msg => console.log("resovled",msg)).catch(err => console.log("rejected or the condition is false randomly ",err));


// FATCH API  
// fetch('todo/afzal.json').then((respnse) => {
//   console.log('resolved', respnse)
// }).then((err) =>{
//   console.log('rejected ',err);
// })

//fetch api 
// fetch('todo/afzal.json').then((response) => {
//   let data = response.json();
// }).then((data)  => {
//   console.log('resolve',data)
// }).catch((err) => {
//   console.log('rejected',err)
// })

//fetch api here

// modern way to do this 
// fetch('todo/afzal.json').then((response) => {
//   console.log('resolved', response);
//   return response.json();
// }).then(data => {
//   console.log(data);
// }).catch((err) => {
//   console.log('rejected',err);
// })

// asyn await
// const getTodo = async() => {
//   const response = await fetch('todo/afzal.jsoon')
//   const data = await response.json(); // value of the promise resolve here and then send to the data 
//   console.log(data)
// }

// getTodo();
// console.log(1)
// console.log(2)
// console.log(3)

const getTodo = async () => {
  const response = await fetch('todo/afzal.json');
  if(response.status !== 200){
    throw new Error('can not fetch the data'); // throw new for givng your won error 
  }
  const data = await response.json(); // use the json mehtod to get the data here 
  
  return data;
}

getTodo().
then(data => console.log('resolved', data)).
catch(err => console.log('rejected', err.message));


// console.log(4)
// console.log(5)
// console.log(6)