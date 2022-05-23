/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
 function getSumGrades(students) {
   let total = 0;
   for(let i = 0; i < students.length; i++) {
     total += students[i].learnEnglish.grade;
   }
   return total;
 }

// Sample usage - do not modify
let students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18
    }
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19
    }
  }
];
console.log(getSumGrades(students)); // 37