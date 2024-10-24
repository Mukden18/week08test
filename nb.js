const scores = [
  { number: 'N1047', chinese: 95, math: 79, english: 98 },
  { number: 'N1176', chinese: 84, math: 72, english: 76 },
  { number: 'N1087', chinese: 82, math: 99, english: 97 },
  { number: 'N1808', chinese: 77, math: 89, english: 70 },
  { number: 'N1365', chinese: 93, math: 79, english: 71 },
  { number: 'N1416', chinese: 90, math: 91, english: 91 },
  { number: 'N1048', chinese: 74, math: 89, english: 85 },
  { number: 'N1126', chinese: 74, math: 82, english: 85 },
  { number: 'N1386', chinese: 77, math: 77, english: 85 },
  { number: 'N1869', chinese: 90, math: 74, english: 99 }
];

const totalScores = scores.map(student => {
  const total = student.chinese + student.math + student.english;
  return { number: student.number, total };
});

totalScores.sort((a, b) => b.total - a.total);

console.log("总分排名:");
totalScores.forEach((student, index) => {
  console.log(`${index + 1}. 学号: ${student.number}, 总分: ${student.total}`);
});

const subjects = {
  chinese: [],
  math: [],
  english: []
};

scores.forEach(student => {
  subjects.chinese.push({ number: student.number, score: student.chinese });
  subjects.math.push({ number: student.number, score: student.math });
  subjects.english.push({ number: student.number, score: student.english });
});

const topThree = (subjectScores) => {
  return subjectScores.sort((a, b) => b.score - a.score).slice(0, 3);
};

console.log("\n各单科成绩前三名:");
console.log("语文:");
topThree(subjects.chinese).forEach(student => {
  console.log(`学号: ${student.number}, 成绩: ${student.score}`);
});

console.log("数学:");
topThree(subjects.math).forEach(student => {
  console.log(`学号: ${student.number}, 成绩: ${student.score}`);
});

console.log("英语:");
topThree(subjects.english).forEach(student => {
  console.log(`学号: ${student.number}, 成绩: ${student.score}`);
});
