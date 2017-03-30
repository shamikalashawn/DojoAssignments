/*
For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “ +” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+).

Example: Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-".
*/

function accurateGrade(score) {
  var grade = '';

  if (score >= 90) {
    if ((score % 10 == 0) || (score % 10 == 1)) {
      grade = 'A-';
    } else {
      grade = 'A';
    }
  } else if (score >= 80){
    if ((score % 10 == 0) || (score % 10 == 1)) {
      grade = 'B-';
    } else if ((score % 10 == 8) || (score % 10 == 9)) {
        grade = 'B+';
    } else {
      grade = 'B';
    }
  } else if (score >= 70){
    if ((score % 10 == 0) || (score % 10 == 1)) {
      grade = 'C-';
    } else if ((score % 10 == 8) || (score % 10 == 9)) {
        grade = 'C+';
    } else {
      grade = 'C';
    }
  } else if (score >= 60){
    if ((score % 10 == 0) || (score % 10 == 1)) {
      grade = 'D-';
    } else if ((score % 10 == 8) || (score % 10 == 9)) {
        grade = 'D+';
    } else {
      grade = 'D';
    }
  } else if (score < 60){
    grade = 'F';
  }
  console.log('Score: ' + score + '. Grade: ' + grade);
}

accurateGrade(81)
