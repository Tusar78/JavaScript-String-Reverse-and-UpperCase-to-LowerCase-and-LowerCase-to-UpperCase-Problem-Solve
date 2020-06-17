// EcmaScript6
const strRevWithChangeCase = inp => {
    const strToArr = inp.split('');
    const changeCaseArr = [];
    strToArr.map(val => {
        if(val !== val.toLowerCase()) {
            const getLowAndUpCase = val.toLowerCase();
            changeCaseArr.push(getLowAndUpCase);
        } else {
            const getLowAndUpCase = val.toUpperCase();
            changeCaseArr.push(getLowAndUpCase);
        }
    })

    const revText = changeCaseArr.reverse().join('');
    console.log(revText);
}

strRevWithChangeCase('Hello There')
















// function strRevWithChangeCase(inp) {
//     const inpArr = inp.split('');
//     const ulCase = [];
//     for(let i = 0; i < inpArr.length; i++) {
//         if(inpArr[i] !== inpArr[i].toLowerCase()) {
//             const ulData = inpArr[i].toLowerCase();
//             ulCase.push(ulData)
//         } else {
//             const ulData = inpArr[i].toUpperCase();
//             ulCase.push(ulData)
//         }
//     }
//     const text = ulCase.reverse().join('')
//     console.log(text)
// }
// strRev('Hello There')