var scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
// const grades = [ {A: "91-100"},
//                  {B: "81-90"}, 
//                  {C: "71-80"},
//                  {D: "61-70"}, 
//                  {F: "50-60"}
//                 ];

// var letter;

var lowestGrade = 100;
var highestGrade = 0;


var numberofAs = 0;
var numberofBs = 0;
var numberofCs = 0;
var numberofDs = 0;
var numberofFs = 0;

for (let i = 0; i < scores.length; i++) {


var grade = scores[i];
switch (true) {
  case (grade >= 91):
    console.log("A");
    break;
  case (grade >= 81 && grade <= 90):
    console.log("B");
    break;
  case (grade >= 71 && grade <= 80):
    console.log("C");
    break;
  case (grade >= 61 && grade <= 70):
    console.log("D");
    break;
  case (grade >= 51 && grade <= 60):
    console.log("F");
}

var grade = scores[i];
switch (true) {
  case (grade >= 91):
  numberofAs++;
    break;
  case (grade >= 81 && grade <= 90):
  numberofBs++;
    break;
  case (grade >= 71 && grade <= 80):
  numberofCs++;
    break;
  case (grade >= 61 && grade <= 70):
  numberofDs++;
    break;
  case (grade >= 50 && grade <= 60):
  numberofFs++;
    break;
}

if (lowestGrade > scores[i]) {
    lowestGrade = scores[i]
}

if (highestGrade < scores[i]) {
    highestGrade = scores[i]
}

}

console.log("As", numberofAs);
console.log("Bs", numberofBs);
console.log("Cs", numberofCs);
console.log("Ds", numberofDs);
console.log("Fs", numberofFs);

console.log("lowest grade", lowestGrade);
console.log("highest grade", highestGrade);

