// function myName(fNamn, eNamn){

//         console.log(fNamn + " " + eNamn);

// }

// myName('Kim', 'Vagi');

// function square(number){

//     let square = number * number;
//     return square;
// }

// console.log(square(4));

// function kollaTalet(tal){
//      if(tal < 1 || tal > 100){
//          return true;
//      }else{
//          return false;
//      }  

// }

// var kollaTalet = function(tal){
//      if(tal < 1 || tal > 100){
//           return true;
//      }else{
//          return false;
//      }     
// }

var kollaTalet = (tal) => (tal < 1 || tal > 100) ? "Kul":"funkar";
    


console.log(kollaTalet(10));

