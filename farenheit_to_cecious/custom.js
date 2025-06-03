function farenheitToCelcious(farenheit){
    return 5/9 * (farenheit-32);
}

let x = farenheitToCelcious(100)
document.getElementById('farenheit_to_celcious').innerHTML = x;


// Celcious To Farenheit

function celciousToFarenheit(celcious){
    return (9/5 * celcious) + 32; 
};

let y = celciousToFarenheit(35);
document.getElementById('celcious_to_farenheit').innerHTML = y;
