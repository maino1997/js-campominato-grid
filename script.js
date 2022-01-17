// L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
//  in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const userLevel = document.getElementById("select");
const genBtn = document.getElementById("generate");
const grid = document.getElementById("grid-container");

genBtn.addEventListener('click', () => {
    let userChoice = userLevel.value;
    if (userChoice === "1") {
        userChoice = 101;
    } else if (userChoice === "2") {
        userChoice = 82;
    } else {
        userChoice = 50;
    }


    const createCell = (cellmin, cellmax, docGrid, gotNumber) => {
        for (let i = cellmin; i < cellmax; i++) {
            const newCell = document.createElement('div');
            newCell.append(gotNumber[i]);
            docGrid.appendChild(newCell);
            newCell.id = gotNumber[i];
            newCell.classList.add("cell");
        }
    }


    const getIdNumber = (min, max) => {
        const idList = [];
        let cellId = 0;

        for (let i = min; i < max; i++) {
            cellId = i;
            idList.push(cellId);
        }
        return idList;
    }

    createCell(0, userChoice, grid, getIdNumber(1, userChoice));

    // console.log(getIdNumber(1, userChoice));

});





