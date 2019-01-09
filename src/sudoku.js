export function Sudoku (array){
  this.elements = array.slice();
}
Sudoku.prototype.isValid = function (){
  var validaty= true;
    for (var i=1;i<=9;i++){
      if (this.elements[i]<1 && this.elements[i]>9){
        validaty=false;
      }
    }
    return validaty;
}
Sudoku.prototype.isUnique = function (){
  var unique=true;
  var allElements = this.elements.slice();
  allElements.sort();
  for (var i=0;i<9;i++){
    if (allElements[i]==allElements[i+1]){
      unique=false;
    }
  }
  return unique;
}
