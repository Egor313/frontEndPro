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

  console.log(averageStudentMark(11));
  console.log(averageGroupMark(students));


function averageStudentMark (id) {
    const student = students.find((student) => student.id === id);

    if (!student) {
        return `Not found student with this Id. Try another Id.`
    }

    return arrAverage(student.marks);
}

function averageGroupMark(students) {
    const allMarks = students.reduce((acc, student) => acc.concat(student.marks), []);

    return arrAverage(allMarks);
}

function arrAverage (arr) {
    const sum = arr.reduce(add);

    return sum / arr.length;
}

function add (a, b) {
    return a + b;
}
