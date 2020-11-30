function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

function sum(prefix) {
    return prefix + (this.first + this.second);
}

var Kim = new Person('Kim', 30, 40);
var Lee = new Person('Lee', 70, 70);
console.log(sum.call(Kim, 'result=>'));
console.log(sum.call(Lee, '결과:'));

var LeeOthSum = sum.bind(Lee, 'sum->');
console.log(LeeOthSum());