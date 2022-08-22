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

// let saveButtons = document.getElementsByClassName('btn-select');
// for( const button of saveButtons){
//     button.addEventListener('click', function(){
//         const selected = document.getElementById('selected');
//         // const newPlayer = document.createElement('li');
//         const names = document.getElementsByClassName('names');
//         for(let i = 0; i<names.length; i++){
//             // name.innerText = newPlayer.innerText;
//             // selected.appendChild(newPlayer);
//             console.log(names[0]);
//         }

//     })
// }

function getPlayerName(element){
    const playerName = element.parentNode.parentNode.children[1].children[0].children[0].innerText;
}