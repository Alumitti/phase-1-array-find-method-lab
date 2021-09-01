function superbowlWin(array1){
    let winningYear = array1.find(year => year.result === 'W');
    if (!!winningYear) {
        return winningYear.year;
    }
}