function run() {

    setTimeout(function () {
        setTimeout(function () {
            var msg2 = "hello codesquad2";
            console.log(msg2);
        }, 1000);
        var msg = "hello codesquad";
        console.log(msg);

    }, 1000);
    console.log("run end");
    console.log("function finally end");


}
console.log("run start");
run();
console.log("end");