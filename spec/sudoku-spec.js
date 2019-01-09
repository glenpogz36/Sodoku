import { Sudoku } from './../src/sudoku.js';
describe('Sudoku', function() {
  var reusableSudoku;

  beforeEach(function() {
    reusableSudoku = new Sudoku([1,2,3,4,5,6,7,8,9])
  });

  it('should test whether a sudoku has an array of 9 element', function() {

    expect(reusableSudoku.elements.length).toEqual(9)

  });

  it('should test a sudoku is valid or not', function() {

    expect(reusableSudoku.isValid()).toEqual(true);

  });

  it('should test a sudoku is valid or not', function() {

    expect(reusableSudoku.isUnique()).toEqual(true);

  });

});
