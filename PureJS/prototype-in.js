var superObj = {superVal:'super'};
var subObj = {subVal:'sub'};

subObj.__proto__ = superObj;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);


subObj.superVal = 'superman';
console.log('subObj.superVal =>', subObj.superVal);
console.log('superObj.superVal =>', superObj.superVal); 