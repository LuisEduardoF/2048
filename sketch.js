// Essa classe ajuda a desenhar o grid junto com os retangulos e os números
class Position {
    constructor(rectangle, x, y, num) {
        this.rect = rectangle;
        this.x = x;
        this.y = y;
        this.num = num;
        showNumber(x + len / 2 - len / 10, y + len / 2 + len / 10, num)
    }
}
sep = 4
len = 120

// Função que escreve na página os desafios
function writeChallenges(challenges) {
    for (let i = 0; i < challenges.length; i++) {
        document.getElementById(`c${i+1}`).innerHTML = Allchallenges[challenges[i]][0]
        document.getElementById(`c${i+1}`).style.marginTop = "5px";
        document.getElementById(`c${i+1}`).style.marginBottom = "5px";
        document.getElementById(`P${i+1}`).innerHTML = " +" + Allchallenges[challenges[i]][1]
        if (Allchallenges[challenges[i]][0] === "2048") {
            document.getElementById(`c${i+1}`).style.color = "red"
            document.getElementById(`c${i+1}`).style.textAlign = "center"
            document.getElementById(`c${i+1}`).style.fontSize = "32px";
            document.getElementById(`c${i+1}P`).style.width = "120px"
            document.getElementById(`c${i+1}P`).style.backgroundColor = "red";
        }
    }
}
// Função que que deixa verde os desafios, se tiver completado
function challengeDone(num) {
    if (Allchallenges[challenges[num]][0] === "2048") {
        document.getElementById(`P${num+1}`).style.color = "#ffe557"
        document.getElementById(`c${num+1}`).style.color = "rgb(255, 185, 0);"
        document.getElementById(`c${num+1}`).innerHTML = "🏆 " + document.getElementById(`c${num+1}`).innerHTML + " 🏆"
    } else {
        document.getElementById(`c${num+1}`).innerHTML = document.getElementById(`c${num+1}`).innerHTML + " ✔️"
        document.getElementById(`c${num+1}`).style.color = "rgb(22, 198, 12)"
        document.getElementById(`c${num+1}P`).style.backgroundColor = "green"
        document.getElementById(`P${num+1}`).style.color = "white"
    }
    points += Allchallenges[challenges[num]][1]
    add_points += Allchallenges[challenges[num]][1]
    document.getElementById("add_points").innerHTML = "+" + add_points
    document.getElementById("score").innerHTML = points
}
// Função que define a cor de cada peça do tabuleiro
function selectColorNum(num) {
    switch (num) {
        case 0:
            return "white"
        case 2:
            return "#F6CED8"
        case 4:
            return "#F7BE81"
        case 8:
            return "#F3F781"
        case 16:
            return "#BEF781"
        case 32:
            return "#81F7D8"
        case 64:
            return "#58D3F7"
        case 128:
            return "#FA58F4"
        case 256:
            return "#A901DB"
        case 512:
            return "#01DF3A"
        case 1024:
            return "#D7DF01"
        case 2048:
            return "#D7DF01"
        default:
            return "#ffffff"
    }
}
// Função que auxilia na criação dos retangulos do grid
function showRetangle(x, y, width, height, num) {
    fill(selectColorNum(num))
    return rect(x, y, width, height, 10, 10)
}
// Função que desenha os números na tela
function showNumber(x, y, num) {
    fill("black")
    textSize(48);
    // Substrair pelo tamanho do num, para caber, fazer para textSize
    text(num, x - (String(num).length - 1) * 12, y + 8);
}
// Função que cria o grid
function generateTable(sep, len) {
    let Table = {};
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            Table[`(${i}, ${j})`] = new Position(showRetangle(sep + j * (len + sep), sep + i * (len + sep), len, len, grid[i][j]), j * (len + sep), i * (len + sep), grid[i][j])
        }
    }
    return Table
}
// Função específica da p5.js que inicializa o canvas
function setup() {
    challenges = getRandom(Allchallenges, 3) // Escolhe 3 challenges diferentes
    writeChallenges(challenges) // Escreve eles na tela
    addNumber() // Adiciona um valor no grid
    verifyChallenges();
    createCanvas(500, 500);
    fill("#eb880f")
    rect(0, 0, 500, 500, 10, 10)
    noLoop() // Não tem loop
    Table = generateTable(4, 120) // Cria o grid
}
/*
 0 = transition Up
 1 = transition Down
 2 = transition Left
 3 = transition Right
 -1 = default
 */
function draw() {
    document.getElementById("add_points").innerHTML = "+" + add_points
    fill("#eb880f")
    rect(0, 0, 500, 500, 10, 10)
    Table = generateTable(4, 120)
}