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

console.log("Park.sum() =", Park.sum());
console.log("Park.average() =", Park.average());
