
let fruta = prompt('Ingrese fruta');

switch(fruta.toLocaleLowerCase()){
    case 'mango':
        alert('El precio del mango es $10000');
    break;
    case 'fresa':
        alert('El precio de la fresa es $20000');
    break;
    default:
        alert('La fruta ingresada se encuntra agotada');
    break;
}