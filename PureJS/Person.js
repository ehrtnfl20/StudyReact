class Person {
    constructor(firstName, lastName, firstGrade, secondGrade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstGrade = firstGrade;
        this.secondGrade = secondGrade; 
    }
   sum() {
        return this.firstGrade + this.secondGrade;
    }
    average() {
        return this.sum() / 2;
    }
}

class PersonPlus extends Person {
    constructor(firstName, lastName, firstGrade, secondGrade, thirdGrade) {
        super(firstName, lastName, firstGrade, secondGrade);
        this.thirdGrade = thirdGrade;
    }
  sum() {
        return super.sum( ) + this.thirdGrade;
    }
  average() {
        return this.sum() /3 ; 
  }
}       

var Park = new Person('ES', 'Park', 10, 30);
var Kim = new Person('GT', 'Kim', 5, 5);
var Lee = new PersonPlus ('YS', 'LEE', 100, 100, 99); 

console.log('Park grade =', Park.sum(), Park.average());
console.log('Kim grade =', Kim.sum(), Kim.average());
console.log('Lee grade =', Lee.sum(), Lee.average());  //Lee Grade = 2999.99.66666667

//Park.sum = function() {
//    return this.firstGrade | this.secondGrade;
//}



//Person.prototype.sum = function() {
//    return 10 + 20;
//}

//console.log('Park =', Park);
//console.log('Kim =', Kim);

Kim.sum = function() {
    return (this.firstGrade + this.secondGrade);
}
Kim.average = function() {
    return (this.firstGrade + this.secondGrade);
}

//console.log('Park.sum() =', Park.sum());
//console.log('Kim.sum() =', Kim.sum());

