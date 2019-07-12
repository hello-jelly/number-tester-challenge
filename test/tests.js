import isEven from '../is-even.js';

const test = QUnit.test;

test('test for even', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 2;
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isEven(x);

    //Assert
    // What should the result be?
    assert.equal(result, expected);
});

test('test for odd', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 1;
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isEven(x);

    //Assert
    // What should the result be?
    assert.equal(result, expected);
});