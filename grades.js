const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = { A: 91-100, B: 81-90, C: 71-80, D: 61-70, F: 50-60 }

for (let i = 0; i < scores.length; i++) {

    var grade;
    switch (scores[i]) {
      case 91-100:
        grade = "A";
        break;
      case 81-90:
        grade = "B";
        break;
      case 71-80:
        grade = "C";
        break;
      case 61-70:
        grade = "D";
        break;
      case 50-60:
        grade = "F";
    }

    document.getElementById("grades").innerHTML += scores[i] + grade;
    

    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
}
