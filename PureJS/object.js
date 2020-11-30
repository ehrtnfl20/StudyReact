var memberArray = ['hugo','ashley','tom' ];
console.log('memberArray[0] =' , memberArray[0]);

var memberObj = {
    developer:'hugo',
    teacher:'ashely',
    manager:'tom',
}
console.log('memberObj.manager =', memberObj.manager);
// memberObj.manager ='kim';
console.log('memberObj.manager=', memberObj.manager);
console.log("삭제전 memberObj['teacher']=", memberObj['teacher']);
// delete memberObj.teacher;
console.log("삭제후 memberObj['teacher'] =", memberObj['teacher']);



console.group('array loop');
var i = 0;
while (i < memberArray.length) {
    console.log(i, memberArray[i])
    i += 1;
}
console.groupEnd('array loop');

console.group('obj loop');

for (var name in memberObj) {
    console.log(name, memberObj[name]);
}

console.groupEnd('obj loop');