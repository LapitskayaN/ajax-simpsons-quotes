import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';


let getQuote=()=> {
  let url ='https://simpsons-quotes-api.herokuapp.com/quotes';
  axios.get(url)
   .then(response => response.data)
    // Use this data to update the state
   .then(data => {
    const quoteHTML= `
    <p>Name:${data[0].character} </p>
    <img src="${data[0].image} alt='${data[0].character}"/>
    <p>Name:${data[0].quote} </p>`
    console.log(document.querySelector('.content'))
    document.querySelector('.content').innerHTML = quoteHTML
  })  
}

let btn=document.querySelector('.btn')
btn.addEventListener('click',getQuote )


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
