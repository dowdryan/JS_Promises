let baseURL = "http://numbersapi.com";
let number = Math.floor(Math.random() * 9) + 1


$.getJSON(`${baseURL}/${number}?json`, data => {
    console.log(data)
})


let numbers = [1, 2, 3]
$.getJSON(`${baseURL}/${numbers}?json`, data => {
    console.log(data)
})


let facts = []
$.getJSON(`${baseURL}/${number}?json`, data => {
    facts.push(data.text)
    $.getJSON(`${baseURL}/${number}?json`, data => {
        facts.push(data.text);
        $.getJSON(`${baseURL}/${number}?json`, data => {
            facts.push(data.text);
            $.getJSON(`${baseURL}/${number}?json`, data => {
                facts.push(data.text);
                facts.forEach(fact => {
                    $("body").append(`<p>${fact}</p>`);
                });
            });
        });
    });
})