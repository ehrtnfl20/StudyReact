var Park = {
  lastName: "Park",
  firstName: "ES",
  firstGrade: 35,
  secondGrade: 55,
  sum: function () {
    var res = this.firstGrade + this.secondGrade;
    return res;
  },
  average: function () {
    return this.sum() / 2;
  },
};

var Sung = {
  lastName: "Sung",
  firstName: "MG",
  firstGrade: 99,
  secondGrade: 99,
  sum: function () {
    var res = this.firstGrade + this.secondGrade;
    return res;
  },
  average: function () {
    return this.sum() / 2;
  },
};

console.log("Park.grade =", Park.sum(), Park.average());
console.log("Sung.grade =", Sung.sum(), Sung.average());
