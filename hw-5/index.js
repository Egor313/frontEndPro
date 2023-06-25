
const students = [
    {
      id: 10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7]
    },
    {
      id: 11,
      name: 'John Doe',
      marks: [9, 8, 7, 6, 7]
    },
    {
      id: 12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8]
    },
    {
      id: 13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9]
    }
  ];

function averageStudentMark (id) {
    const student = students.find((student) => student.id === id);

    if (!student) {
        return `Not found student with this Id. Try another Id.`
    }
    const sumOfMarks = student.marks.reduce((acc, mark) => acc + mark, 0);
    const averageMark = sumOfMarks / student.marks.length;

    return averageMark;
}

function averageGroupMark(students) {
    const allMarks = students.reduce((acc, student) => acc.concat(student.marks), []);
    const sumOfStudentMarks = allMarks.reduce((total, num) => total + num, 0);
    const averageMark = sumOfStudentMarks / allMarks.length;

    return averageMark;
}


console.log(averageStudentMark(id));
console.log(averageGroupMark(students));
