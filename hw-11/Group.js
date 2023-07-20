class Group {
    #students = [];

   get students() {
       return this.#students;
   }

   addStudent(student) {
       if (this.isStudent(student)) {
         this.#students.push(student)
       }
     }
 
   isStudent(student) {
     return student instanceof Student;
   }
 
     
   getAverageMark() {
       return this.getAverageMarksSum() / this.#students.length;
   }
 
   getAverageMarksSum() {
     return this.#students.reduce((acc, student) => acc + student.getAverageMark(), 0);
   }
 }