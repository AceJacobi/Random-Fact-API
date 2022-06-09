let display = document.getElementById('rFact');

let instruct = document.getElementById('instructions');

let button = document.getElementById('fact-b');

async function randomFact(){
    
    let url = window.location.protocol + '//' + window.location.host + '/facts';
        
    let result = await fetch(url)
    
    .then(data => data.text())
    
    .then(response => display.innerHTML = response);     
    
    instruct.style.display = 'none';
    
    button.style.display = 'none';
}




