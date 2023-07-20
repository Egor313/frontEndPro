class Student {
    constructor(name, marks = []) {
      this.name = name;
      this.marks = marks;
    }
  
    getMarksSum() {
        return this.marks.reduce((acc, curr) => acc + curr, 0);

    }
  
    getAverageMark() {
       return this.getMarksSum() / this.marks.length;
    }
  }
  