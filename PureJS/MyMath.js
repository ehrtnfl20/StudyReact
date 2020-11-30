var MyMath = {
    myPI: Math.PI,
    myRandom: function() {
        return Math.random();
    },
    myCeil: function(val) {
        return Math.ceil(val);
    },
    myFloor: function(val) {
        return Math.floor(val);
    }
}

console.log('MyMath.myRandom() =', MyMath.myFloor(MyMath.myRandom(Math.PI)*10));
console.log('MyMath.myCeil(13.4) =', MyMath.myCeil(13.4));
console.log('MyMath.myFloor(13.89) =', MyMath.myFloor(13.89));