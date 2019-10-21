// Object

let fNamn = "John";
let eNamn = "Doe";
let age= 40;

let person = {
    fNamn: "Johan",
    eNamn: "Doe",
    age: 40,
    fullName: function() {
      return  person.fNamn + " " + person.eNamn;
    }  
}



// person.fNamn = "John";

// var parameter = "fNamn";

// person[parameter] = "Kalle";

console.log(person.fullName());
