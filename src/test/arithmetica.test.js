const {add}= require("../arithmetica")

test(' 3 + 4 is equal to 7 ', () => {
    expect(add(3,4)).toBe(7);
});