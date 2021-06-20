function printName(firstname) {

    console.log(typeof inner);
    var result = inner;
    console.log("my name is " + result);

    var inner = function () {
        return "inner value";
    }

}

printName();

testFunction();

function testFunction() {
    console.log("testtest");
}


