let partyInbjudan = ['John','Aleksander', 'Elam'];

partyInbjudan[4] = "Kim";

partyInbjudan.forEach(function(element, index){

console.log(element + "/" + index);

});

console.log(partyInbjudan);

// const A = [1, 2, 3, 4, 5];
// const B = [6, 7,8,9];

// function callback(ValueA, index, array){
//     console.log('a=' + index + " -  Element =" + ValueA);
// }

// A.forEach(callback);
// B.forEach(callback);

// superArray = [A,B];

// console.log(superArray[0]);

