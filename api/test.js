// const wait = (t) => new Promise((res) => {
//     setTimeout(() => {
//         console.log('tany');
//         res();
//     }, 1000 * t);
// });

// const name = async () => {
//     console.log("hi");
//     await swait(5);
//     console.log('yo');
// };

// name();


// a2[b3[c]]
// abcccbccc



const printTeam = (teamName, coach, ...players) => {
    let playersList = ''
    players.forEach((playername) => playersList += playername + ' ')
    return `Team: ${teamName} 
    Coach: ${coach}
    Players: ${players.join(', ')}`
}

console.log(printTeam('liberty', 'andrew', 'tany', 'vijay', 'jagrit'))