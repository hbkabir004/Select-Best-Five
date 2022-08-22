function getPlayerExpenses(){
    const perPlayer = document.getElementById('per-player');
    const perPlayerCost = parseInt(perPlayer.value);
    const playerExpenses = perPlayerCost * 5;

    return playerExpenses;
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    document.getElementById('player-expenses').innerText = getPlayerExpenses();
})

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const manager = document.getElementById('manager');
    const managerCost = parseInt(manager.value);
    const coach = document.getElementById('coach');
    const coachCost = parseInt(coach.value);

    const totalCost = getPlayerExpenses() + managerCost + coachCost;
    document.getElementById('total').innerText = totalCost;
})


const playerArray = [];
function getPlayerName(element){
    element.disabled = true;
    
    const playerName = element.parentNode.parentNode.children[1].children[0].children[0].innerText;
    const selected = document.getElementById('selected');

    playerArray.push(playerName);
    selected.innerHTML='';
    
    let number= playerArray.length;
    number=1;
    for(const player of playerArray){
        const li = document.createElement('li');
        li.innerHTML = `
        ${number}. &emsp;<span>${player}</span>
        `;
        if(playerArray.length > 5 ){
            alert('SELECTED-V Full!');
            break;
        }
        selected.appendChild(li);
        number++;
        
    }
    
}