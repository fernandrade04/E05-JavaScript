var n = prompt("Digite o número de linhas do tabuleiro de xadrez que você deseja criar: ");

var tab = "# # # #";

for (var i = 0; i < n; i++) {
    if (i % 2 != 0) {
        console.log(" " + tab + "\n");
    } else {
        console.log(tab + "\n");
    }
}