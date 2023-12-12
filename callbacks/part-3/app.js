$(function() {
    let baseURL = "https://pokeapi.co/api/v2";
  
    // Returns the names & url of every single pokemon.
    $.getJSON(`${baseURL}/pokemon/?limit=1017`, function(data) {
      console.log(data);
    });
  

    // Gets the pokemon's url and returns it's pertaining data. 
    $.getJSON(`${baseURL}/pokemon/?limit=1017`, function(data) {
      let randomPokemonUrls = [];
      for (let i = 0; i < 3; i++) {
        let randomIdx = Math.floor(Math.random() * data.results.length);
        let url = data.results.splice(randomIdx, 1)[0].url;
        randomPokemonUrls.push(url);
      }
      randomPokemonUrls.forEach(function(url) {
        $.getJSON(url, function(data) {
          console.log(data);
        });
      });
    });
  

    // Returns the name of a pokemon and it's description
    $.getJSON(`${baseURL}/pokemon/?limit=1017`, function(data) {
      let randomPokemonUrls = [];
      for (let i = 0; i < 3; i++) {
        let randomIdx = Math.floor(Math.random() * data.results.length);
        let url = data.results.splice(randomIdx, 1)[0].url;
        randomPokemonUrls.push(url);
      }
      randomPokemonUrls.forEach(function(url) {
        $.getJSON(url, function(data) {
          let name = data.name;
          $.getJSON(data.species.url, function(data) {
            let descriptionObj = data.flavor_text_entries.find(
              entry => entry.language.name === "en"
            );
            let description = descriptionObj
              ? descriptionObj.flavor_text
              : "No description available.";
            console.log(`${name}: ${description}`);
          });
        });
      });
    });
  

    // Returns 3 random pokemon and their descriptions into an HTML format each time a button is clicked.
    let $btn = $("button");
    let $pokeArea = $("#pokemon-area");
    $btn.on("click", function() {
      $pokeArea.empty();
      $.getJSON(`${baseURL}/pokemon/?limit=1017`, function(data) {
        let randomPokemonUrls = [];
        for (let i = 0; i < 3; i++) {
          let randomIdx = Math.floor(Math.random() * data.results.length);
          let url = data.results.splice(randomIdx, 1)[0].url;
          randomPokemonUrls.push(url);
        }
        randomPokemonUrls.forEach(function(url, i) {
          $.getJSON(url, function(data) {
            let name = data.name;
            let imgSrc = data.sprites.front_default;
            $.getJSON(data.species.url, function(data) {
              let descriptionObj = data.flavor_text_entries.find(
                entry => entry.language.name === "en"
              );
              let description = descriptionObj
                ? descriptionObj.flavor_text
                : "No description available.";
              $pokeArea.append(makePokeCard(name, imgSrc, description));
            });
          });
        });
      });
    });
    function makePokeCard(name, imgSrc, description) {
        return `
          <div class="card">
            <h1>${name}</h1>
            <img src=${imgSrc} />
            <p>${description}</p>
          </div>`
      }
  });
  