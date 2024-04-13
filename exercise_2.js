const STUDENTS_DATA = [
    { firstName: "An", lastName: "Nguyen", batch: 1, age: 20 },
    { firstName: "Bình", lastName: "Dang", batch: 2, age: 22 },
    { firstName: "Cẩm", lastName: "To", batch: 1, age: 21 },
    { firstName: "An", lastName: "Nguyen", batch: 2, age: 19 }, 
  ];
  
  function updateStudentAge(firstName, lastName, batch, newAge) {
    let student = STUDENTS_DATA.find(
      (s) =>
        s.firstName === firstName &&
        s.lastName === lastName &&
        s.batch === batch
    );
    if (student) {
      student.age = newAge;
    }
  }
  
  updateStudentAge("An", "Nguyen", 1, 30);
  
  console.log(JSON.stringify(STUDENTS_DATA));