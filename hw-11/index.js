class Student {
    constructor(name, marks) {
      this.name = name;
      this.marks = marks;
    }
  
    getMarksSum() {
      const sum = this.marks.reduce((acc, curr) => acc + curr, 0)
      return sum;
    }
  
    getAverageMark() {
      const sumMarks = this.getMarksSum();
      return sumMarks / this.marks.length;
    }
  }
  
  class Group {
     #students = [];
  
    #isStudent(student) {
      return student instanceof Student;
    }
  
    addStudent(student) {
      if (this.#isStudent(student)) {
        this.#students.push(student)
      }
    }
  
    getAverageMarksSum() {
      let sum = 0;
      this.#students.forEach(student => sum += student.getMarksSum());
      return sum;
    }
  
    getAverageMark() {
      const studentsMark = [];
      this.#students.forEach(student => studentsMark.push(student.getAverageMark()));
  
      const averageMarkGroup = studentsMark.reduce((acc, curr) => acc + curr, 0) / studentsMark.length;
      return averageMarkGroup;
    }
    
    get students() {
      return this.#students;
    }
  }
  const group = new Group();
  
  
  group.addStudent(new Student('John', [10, 8])); // средний балл = 9
  group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
  group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8
  
  
  console.log(group.students.length === 3);
  group.addStudent({}); // игнорируем добавление невалидных данных
  console.log(group.students.length === 3);
  
  // Выводим средний балл группы
  console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);
  
  group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
  console.log(group.students.length === 3);
  // Выводим средний балл группы
  console.log(group.getAverageMark());
  console.log(group.students.length);
  