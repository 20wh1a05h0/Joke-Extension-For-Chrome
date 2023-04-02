fetch('https://icanhazdadjoke.com/slack')
    .then(response=>response.json())
        .then(jokeData =>{
            const jokeText = jokeData.attachments[0].fallback;
            const jokeElement = document.getElementById('joke1')

            jokeElement.innerHTML = jokeText;
        })