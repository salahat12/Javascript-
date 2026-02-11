const students = [
 { id: 1, name: "Ahmed", score: 80 },
 { id: 2, name: "Sara", score: 95 },
 { id: 3, name: "Omar", score: 60 },
 { id: 4, name: "Layan", score: 45 },
 { id: 5, name: "Hisham", score: 72 },
];
const studentNames = students.map(s => s.name);
const passedStudents = students.filter(s => s.score >= 60);
students.forEach(s => {
     console.log(`${s.name} scored ${s.score}`); 
    });
    
console.log(studentNames);
 console.log(passedStudents);