const { app } = require("../app");

function addTwoPlusTwo() {
    return 2 + 5;
}
//added this
function multiplyTwoNum(num1, num2) {
    return num1 * num2;
}

it("prints 4 when adding 2 + 2", () => {
    const result = addTwoPlusTwo();
    expect(result).toEqual(4);
});

it("prints 56 when multiplying 8 * 7", () => {
    const result = multiplyTwoNum(8, 7);
    expect(result).toEqual(56);
});