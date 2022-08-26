function mediaTotal (number) {
    let sum = 0

    number.forEach(element => {
        sum += element
    });

    const avarege = sum / number.length

    return avarege
}

console.log (mediaTotal([4,5,6,1,9,1]))