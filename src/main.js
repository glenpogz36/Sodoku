import { Sudoku } from './sudoku';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jQuery';
import './styles.css';

$(document).ready(function() {
  $("form#sudoku").submit(function(){
    var colResults=[];
    var rowResults=[];
    for (var j=1;j<=9;j++) {
      for (var i=1;i<=9;i++){
        var rowId=""+j+i;
        var colId=""+i+j;
        var rowResult=$("#"+rowId+" input").val();
        var colResult=$("#"+colId+" input").val();

        rowResults.push(rowResult);
        colResults.push(colResult);
      }
      var colsudoku = new Sudoku(colResults);
      var rowsudoku = new Sudoku(rowResults);
      if (colsudoku.isValid() && colsudoku.isUnique()){
        // ChangeColumnColor(j,"green");

      } else {
        // ChangeColumnColor(j,"red");

      }
      if (rowsudoku.isValid() && rowsudoku.isUnique()){
        ChangeRowColor(j,"green");

      } else {
        ChangeRowColor(j,"red");
      }
      rowResults=[];
      colResults=[];
    }
        event.preventDefault();
  });
});
// function ChangeColumnColor(index,color){
//   for (var z=1;z<=9;z++){
//     var cell=index+(z-1)*9;
//     $("td:nth-child("+cell+")").css("background-color",color);
//   }
// }
function ChangeRowColor(index,color){
  for (var z=1;z<=9;z++){
    var cell=(index-1)*9+z;
    $("td:nth-child("+cell+")").css("background-color",color);
  }
}
