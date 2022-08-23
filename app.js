let players = [];

function getName(node) {
    const name = node.parentNode.parentNode.children[0].innerText;
    if (players.length < 5) {
        node.setAttribute('disabled', true);
        node.style.backgroundColor = 'gray';
        players.push(name);
        setName();
    } else {
        alert('You have already selected five of them');
    }
    
}
function setName() {
    const ol = document.getElementById('ordered-list');
    ol.innerHTML = '';
    for (const player of players) {
        const div = document.createElement('div');
        div.innerHTML = `
    <li class="font-semibold tracking-wide text-lg text-gray-300 pt-5">
        ${player}
    </li>
    `
        ol.appendChild(div)
    }
}

// only number type input ensure function
function onlyNumberInput(event) {
    const text = event.charCode;
    if ((text >= 48 && text <= 57)|| text == 46){
        return true;
    } else {
        alert('Please Enter Number')
        return false;
    } 
}

function getValue(inputId) {
    const value = document.getElementById(inputId).value
    return parseFloat(value);
}

function getText(inputId) {
    const value = document.getElementById(inputId).innerText
    return value;
}

function setText(inputId, value) {
    const text = document.getElementById(inputId)
    text.innerText = value;
}

// is NaN check
function isItNaN(value) {
    if (isNaN(value) == true) {
        return true;
    } else {
        return false;
    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayer = getValue('per-player');
    if (isItNaN(perPlayer) == true) {
        alert('Please Input Player Cost');
    } else {
        const calculate = perPlayer * players.length;
        setText('expenses', calculate);
    }   
})

document.getElementById('total-btn').addEventListener('click', function () {
    const coach = getValue('coach');
    const manager = getValue('manager');
    if (isItNaN(coach) == true || isItNaN(manager) == true) {
        alert('Fill Input Field First')
    } else {
        const playerCost = parseFloat(getText('expenses'))
        const calculate = coach + manager + playerCost;
        setText('total', calculate);
    }
})