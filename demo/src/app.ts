//let j = prompt("Introducir el numero a Calcular");
//document.write(j);
let j: number = 83;
console.log(primo(j));
function primo(numero:number):boolean {
  for (let i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }
  return true;
}