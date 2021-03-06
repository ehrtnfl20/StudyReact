function Person(_firstName, _lastName, _first, _second){
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.first = _first;
    this.second = _second;

    this.sum = function() {
        return this.first + this.second;
    }
    this.average = function() {
        return this.sum() / 2;
    }
}

var Park = new Person('ES', 'Park', 33, 55);
var Sung = new Person('MG', 'Sung', 99, 99);
var Kim = new Person('GT', 'Kim', 91, 88);

console.log('Park grade:' , Park.sum(), Park.average());
console.log('Sung grade:' , Sung.sum(), Sung.average());
console.log('Kim grade:' , Kim.sum(), Kim.average());