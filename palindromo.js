var palavra = prompt("Digite qual palavra você quer verificar se é um palíndromo: ");

var checkpalin = palavra.split("").reverse().join("");
console.log(checkpalin);

if (palavra === checkpalin) {
    console.log("É um palindromo");
} else {
    console.log("Não é um palindromo");
}