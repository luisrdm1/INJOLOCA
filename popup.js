// Script por Guy Novaes
// Contribuições: Luis Molon

const lotteries = {
    "" : null,
    "Mais-Milionaria" : {
        STANDARD_TICKET : 6,
        MAX_TICKET : 12,
        PLACEHOLDER : "1 2 3 4 5 6 T1 T2",
        TEIMOSA : [0, 2, 3, 4 , 5]
    },
    "Mega-Sena" : {
        STANDARD_TICKET : 6,
        MAX_TICKET : 15,
        PLACEHOLDER : "01 02 03 04 05 06",
        TEIMOSA : [0, 2, 4, 8]
    },
    "Lotofácil" : {
        STANDARD_TICKET : 15,
        MAX_TICKET : 20,
        PLACEHOLDER : "01 02 03 04 05 06 07 08 09 10 11 12 13 14 15",
        TEIMOSA : [0, 2, 3, 4, 6, 8, 9, 12, 18, 24]
    },
    "Quina" : {
        STANDARD_TICKET : 5,
        MAX_TICKET : 15,
        PLACEHOLDER : "01 02 03 04 05",
        TEIMOSA : [0, 3, 6, 12, 18, 24]
    },
    "Lotomania" : {
        STANDARD_TICKET : 50,
        PLACEHOLDER : "01 02 03 04 05 ... 45 46 47 48 49 50",
        TEIMOSA : [0, 2, 3, 4, 6, 8, 9, 12]
    },
    "Timemania" : {
        STANDARD_TICKET : 10,
        PLACEHOLDER : "01 02 03 04 05 06 07 08 09 10 TM01",
        TEIMOSA : [0, 3, 6, 9, 12]
    },
    "Dupla-Sena" : {
        STANDARD_TICKET : 6,
        MAX_TICKET : 15,
        PLACEHOLDER : "01 02 03 04 05 06",
        TEIMOSA : [0, 2, 3, 4, 6, 8, 9, 12]
    },
    "Loteca" : {
        STANDARD_TICKET : "13 simples/1 duplo",
        PLACEHOLDER : "X00 XX0 00X 0X0 00X 00X 0X0 X00 0X0 0X0 X00 X00 00X 00X",
        TEIMOSA : [0]
    },
    "Dia-de-Sorte" : {
        STANDARD_TICKET : 7,
        MAX_TICKET : 15,
        PLACEHOLDER : "01 02 03 04 05 06 07 JAN",
        TEIMOSA : [0, 3, 6, 9, 12]
    },
    "Super-Sete" : {
        STANDARD_TICKET : 7,
        MAX_TICKET : 21,
        PLACEHOLDER : "1 9 17 25 33 41 49",
        TEIMOSA : [0, 3, 6, 9, 12]
    }
};

function changeElementVisibility(id, param) {
    document.getElementById(id).style.visibility = param
}

function getElementValue(id) {
    return document.getElementById(id).value
}

function populatePopup(modalidade) {
    if (modalidade != "Lotomania") {
        changeElementVisibility("espelho", "hidden");
        changeElementVisibility("espelhoLabel", "hidden");
    } else {
        changeElementVisibility("espelho", "");
        changeElementVisibility("espelhoLabel", "");
    }

    const listadejogos = document.getElementById("listadejogos");
    listadejogos.placeholder = ""

    const quantidadeHTML = document.getElementById("quantidade");
    quantidadeHTML.innerHTML = "";

    const qtdTeimosa = document.getElementById("qtdTeimosinha");
    qtdTeimosa.innerHTML = "";

    if (lotteries[modalidade] != null) {

        const {STANDARD_TICKET} = lotteries[modalidade];
        const {MAX_TICKET} = lotteries[modalidade];
        const {PLACEHOLDER} = lotteries[modalidade];
        const {TEIMOSA} = lotteries[modalidade];
        listadejogos.placeholder = PLACEHOLDER;
        
        if (MAX_TICKET != undefined) {
            for (let i = STANDARD_TICKET; i <= MAX_TICKET; i++) {
                createOption(i, i, quantidadeHTML);
            }
        } else {
            createOption(STANDARD_TICKET, STANDARD_TICKET, quantidadeHTML);
        }

        for (const [key, val] of TEIMOSA.entries()) {
            createOption(val, key, qtdTeimosa)
        }
    }
}


function createOption(text, value, parentElement) {
    const option = document.createElement("option");
    option.innerText = text;
    option.value = value;
    parentElement.appendChild(option);
}

// função que clica nos números na DOM
function modifyDOM(linha, quantidade, qtdTeimosa, marcaEspelho) {
    // Processamento da linha não precisa ocorrer aqui
    const ticket = linha.trim().split(/[ \t]+/);

    if (marcaEspelho === true) {
        document.getElementById("apostaEspelho").click();
    }

    const bAumentarNumero = document.getElementById("aumentarnumero");
    // Clica no botão aumentarnumero a quantidade de vezes que o usuário selecionou
    for (let i = 0; i < quantidade; i++) {
        bAumentarNumero.click();
    }

    const bAumentarTeimosinha = document.getElementById("aumentarteimosinha");
    // clica no botão aumentarnumero a quantidade de vezes da Teimosinha
    for (let i = 0; i < qtdTeimosa; i++) {
        bAumentarTeimosinha.click();
    }

    const clovers = {
        "T1": "trevo1", "T2": "trevo2",
        "T3": "trevo3", "T4": "trevo4",
        "T5": "trevo5", "T6": "trevo6"
    };

    let quantidadeTrevos = 0;
    for (const [_, element] of ticket.entries()) {
        if (clovers[element] != undefined) { quantidadeTrevos++ }
    }

    const bAumentarTrevos =
        document.querySelectorAll(".botao.data-aumentar-qtd-numeros-aposta-mais-milionaria")[1];
    // clica no botão aumentarnumero a quantidade trevos que o usuário selecionou
    for (let i = 2; i < quantidadeTrevos; i++) {
        bAumentarTrevos.click();
    }	

    const meses = {
        "JAN": 0, "FEV": 1, "MAR": 2,
        "ABR": 3, "MAI": 4, "JUN": 5,
        "JUL": 6, "AGO": 7, "SET": 8,
        "OUT": 9, "NOV": 10,"DEZ": 11
    };

    const teams = {};
    
    // Preenche os times
    for (let i = 1; i <= 80; i++) {
        const key = `TM${i.toString().padStart(2, '0')}`;
        const value = i - 1;
        teams[key] = value;
    }

    // Selecionando os elementos específicos por classe
    // TODO: mover para funções específicas!
    const mesDeSorte = document.querySelectorAll(".data-selecionar-mes-de-sorte");
    const timeDoCoracao = document.querySelectorAll(".data-selecionar-time-do-coracao");

    for (const [_, item] of ticket.entries()) {
        if (clovers[item] != undefined) {
            document.getElementById(clovers[item]).click();
        } else if (meses[item] != undefined) {
            mesDeSorte[meses[item]].click();
        } else if (teams[item] != undefined) {
            timeDoCoracao[teams[item]].click();
        } else {
            const numButton = document.getElementById("n" + item);
            if (numButton != null) {
                numButton.click();
            } else {
                const num = item < 10 ? `0${item}` : item;
                document.getElementById("n" + num).click();
            }
        }        
    }

    document.getElementById("colocarnocarrinho").click();

    return
}

// Modulo para preencher a Loteca
function modifyDOMLoteca(linha) {

    const volante = linha.split(/[ \t]+/);
    document.getElementById("limparvolante").click();

    if (volante.length == 14) {
        let buttons = document.querySelectorAll("a.loteca_palpite");
        for (let i = 0, l = volante.length; i < l; i++) {
            for(let j = 0; j <= 2; j++) {
                if (volante[i][j] == 'X') buttons[(i * 3) + j].click();
            }
        }
    
        document.getElementById("colocarnocarrinho").click();
    }

    return
}

// função para mandar executar no DOM a função marca os números.
function marcaJogo(linha, quantidade, qtdTeimosa, marcaEspelho, modalidade) {
    const {STANDARD_TICKET} = lotteries[modalidade];
    let diff = quantidade - STANDARD_TICKET;
    chrome.tabs.executeScript({
        code: `(${modifyDOM})('${linha}','${diff}','${qtdTeimosa}','${marcaEspelho}');`
    }, (results) => {
        console.log("marcaJogo: ", results);
    });
}

// funcao para clicar nas modalidades do site da caixa pela extensao
function clickModalidade(modalidade) {
    document.querySelector("#menuPrincipal a#" + modalidade).click();
}

document.getElementById("modalidade").onchange = function() {
    populatePopup(this.value);
    chrome.tabs.executeScript({
        code: `(${clickModalidade})('${this.value}');`
    }, (results) => {
        console.log("modalidade.onchange: ", results);
    });
}

function sleepFor(sleepDuration) {
    const now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration) {}
}

const bPreencherJogos = document.getElementById('bPreencherJogos');

// atribui a ação onclick do clicar no botão
bPreencherJogos.onclick = function() {

    const modalidade = getElementValue("modalidade");
    const input = getElementValue("listadejogos");
    const qtdTeimosa = getElementValue("qtdTeimosinha");
    const quantidadeAMarcar = getElementValue("quantidade");

    const checkBoxEspelho = document.getElementById("espelho");
    let marcaEspelho = false;
    checkBoxEspelho.checked ? marcaEspelho = true : false;

    if (modalidade == "") {
        alert("Por favor, informe a modalidade!");
        return
    } else if (input == "") {
        alert("Preencha os jogos!");
        return
    } else {
        let lines = input.split("\n");

        if (modalidade == "Loteca") {
            for (const [_, line] of lines.entries()) {
                chrome.tabs.executeScript({
                    code: `(${modifyDOMLoteca})('${line}');`
                }, (results) => {
                    console.log("preencherJogos.onclick: ", results);
                });                
            }
        } else {
            for (const [_, line] of lines.entries()) {
                marcaJogo(line, quantidadeAMarcar, qtdTeimosa, marcaEspelho, modalidade);
                //sleepFor(500); // ms // Não dorme mais.
            }
        }
        alert("Processamento concluído!");
    }
}
