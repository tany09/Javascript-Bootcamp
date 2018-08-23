const createTipper = (tip) => {
    return (bill) => {
        return bill + ((tip/100) * bill);
    }
}

const tip15 = createTipper(15);
console.log(tip15(100));

