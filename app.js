function getPlayerExpenses(){
    const perPlayer = document.getElementById('per-player');
    const perPlayerCost = parseInt(perPlayer.value);
    const playerExpenses = perPlayerCost * 5;

    return playerExpenses;
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    ;
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