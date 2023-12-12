let baseURL = "http://numbersapi.com"
let number = Math.floor(Math.random() * 9) + 1;


$.getJSON(`${baseURL}/${number}?json`).then(data => {
    console.log(data)
})


let numbers = [7, 11, 22];
$.getJSON(`${baseURL}/${numbers}?json`).then(data => {
    console.log(data)
})


Promise.all(
  Array.from({ length: number }, () => {
      return $.getJSON(`${baseURL}/${number}?json`)
  })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`))
})