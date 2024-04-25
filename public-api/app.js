document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    //console.log('get jokes');

    const number = document.querySelector('input[type="number"]').value;

    //console.log(number);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://official-joke-api.appspot.com/jokes/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            let output = '';

            if(response.type === 'general'){
                output += `<li>${response.setup}: ${response.punchline}</li>`
            }else{
                output += `<li>Something went wrong</li>`
            }

            document.querySelector('.jokes').innerHTML = output;

            console.log(response);
        }
    }

    xhr.send();

    e.preventDefault();
}