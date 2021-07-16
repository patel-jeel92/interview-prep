const postFix = require('../src/index');

test('should add correctly', ()=> {
    const input = ["4.5", "5.25", "+"]
    const output = 9.75;

    expect(postFix(input)).toEqual(output);
})

test('should subtract correctly', ()=> {
    const input = ["4.5", "5.25", "-"]
    const output = -0.75;

    expect(postFix(input)).toEqual(output);
})

test('should multiply correctly', ()=> {
    const input = ["8", "6.5", "*"]
    const output = 52;

    expect(postFix(input)).toEqual(output);
})

test('should divide correctly', ()=> {
    const input = ["50", "2", "/"]
    const output = 25;

    expect(postFix(input)).toEqual(output);
})

test('should work with multiple operands', ()=> {
    const input = ["3.5", "2", "+", "4.25", "4", "*", "-"]
    const output = -11.5;

    expect(postFix(input)).toEqual(output);
})
test('should work with multiple operands 2', ()=> {
    const input = ["4", "2", "*", "5", "2", "*", "+"]
    const output = 18;

    expect(postFix(input)).toEqual(output);
})

