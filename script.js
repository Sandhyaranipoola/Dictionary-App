const result = document.getElementById('result');
const btn = document.getElementById('searchbtn');

btn.addEventListener("click", () => {
    let wordInput = document.getElementById('word').value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
                <div class="wordInput">
                    <h3>${wordInput}</h3>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <div class="meaning">
                <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
                <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p></div>`;
            
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't find the word</h3>`;
        });
});

