
let contadorElement = document.getElementById('contador')
console.log(contadorElement);
let contador = 0;



let guardarElement = document.getElementById('guardar')
console.log(guardarElement);

// funcion contar
function increment(){
    // console.log('onclick');
    contador = contador+1;
    // console.log(contador )
    contadorElement.innerHTML = contador
}

// funcion guardar
function guardar(){
    // console.log(contador);
    alert(`Total personas ${contador}`);

}


