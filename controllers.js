// Função que escuta o input da pagina para movimentar as peças
document.onkeydown = function(e) {
    add_points = 0
    e.preventDefault(); //Para prevenir que a janela se mova com os comandos
    switch (e.keyCode) {
        case 37: // Esquerda
            slideLeft();
            break;
        case 38: // Cima
            slideUp();
            break;
        case 39: // Direita
            slideRight();
            break;
        case 40: // Baixo
            slideDown();
            break;
    }
    // Se a função adicionar numero for falsa, então não existe posição para colocar peca nova
    if (addNumber() === false) {
        // Verifica que mesmo com o campo cheio, se o jogo realmente acabou
        if (isGameOver() === false) {
            alert(`Game Over ! SCORE: ${points}`)
        }
    }
};

// Funcao que junta se dois numero foram iguais
function concatNumbers(isMoved) {
    for (let j = isMoved.length - 1; j >= 0; j--) {
        if (isMoved[j] === isMoved[j - 1]) {
            points += isMoved[j - 1] * 2
            add_points += isMoved[j - 1] * 2
            isMoved[j] *= 2
            isMoved.splice(j - 1, 1)
            j -= 1
        }
    }
    document.getElementById("add_points").innerHTML = "+" + add_points
    document.getElementById("score").innerHTML = points
}

// Funcao para movimentar as pecas para cima, para cada coluna adiciona os valores diferentes de 0 em um array e concatena eles
function slideUp() {
    for (let i = 0; i < lenBoard; i++) {
        isMoved = []
            // Adiciona no array os numero diferentes de 0
        for (let j = lenBoard - 1; j >= 0; j--) {
            if (grid[j][i] !== 0)
                isMoved.push(grid[j][i])
        }
        // Concatena os numeros iguais
        concatNumbers(isMoved)
            // Completa os arrays com o número 0
        for (let j = isMoved.length; j < 4; j++) {
            isMoved.unshift(0)
        }
        // Altera a coluna do grid
        for (let k = 0; k < lenBoard; k++) {
            grid[k][i] = isMoved[lenBoard - (k + 1)]
        }
    }
}
// Funcao para movimentar as pecas para baixo, para cada coluna adiciona os valores diferentes de 0 em um array e concatena eles
function slideDown() {
    for (let i = 0; i < lenBoard; i++) {
        isMoved = []
            // Adiciona no array os numero diferentes de 0
        for (let j = 0; j < lenBoard; j++) {
            if (grid[j][i] != 0)
                isMoved.push(grid[j][i])
        }
        // Concatena os numeros iguais
        concatNumbers(isMoved)
            // Completa os arrays com o número 0
        for (let j = isMoved.length; j < 4; j++) {
            isMoved.unshift(0)
        }
        // Altera a coluna do grid
        for (let k = 0; k < lenBoard; k++) {
            grid[k][i] = isMoved[k]
        }
    }
}
// Funcao para movimentar as pecas para direita, para cada coluna adiciona os valores diferentes de 0 em um array e concatena eles
function slideRight() {
    for (let i = 0; i < lenBoard; i++) {
        isMoved = []
            // Adiciona no array os numero diferentes de 0
        for (let j = 0; j < lenBoard; j++) {
            if (grid[i][j] != 0)
                isMoved.push(grid[i][j])
        }
        // Concatena os numeros iguais
        concatNumbers(isMoved)
            // Completa os arrays com o número 0
        for (let j = isMoved.length; j < 4; j++) {
            isMoved.unshift(0)
        }
        // Altera a linha do grid
        for (let k = 0; k < lenBoard; k++) {
            grid[i][k] = isMoved[k]
        }
    }
}
// Funcao para movimentar as pecas para esquerda, para cada coluna adiciona os valores diferentes de 0 em um array e concatena eles
function slideLeft() {
    for (let i = 0; i < lenBoard; i++) {
        isMoved = []
            // Adiciona no array os numero diferentes de 0
        for (let j = lenBoard - 1; j >= 0; j--) {
            if (grid[i][j] !== 0)
                isMoved.push(grid[i][j])
        }
        // Concatena os numeros iguais
        concatNumbers(isMoved)
            // Completa os arrays com o número 0
        for (let j = isMoved.length; j < 4; j++) {
            isMoved.unshift(0)
        }
        // Altera a linha do grid
        for (let k = 0; k < lenBoard; k++) {
            grid[i][k] = isMoved[lenBoard - (k + 1)]
        }
    }
}