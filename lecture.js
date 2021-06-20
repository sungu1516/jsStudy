function printName(firstname) {
    var myname = "sungu";
    return myname + "," + firstname;
}

function run(firstname) {
    var firstname = firstname || "Lee";
    var result = printName(firstname);
    debugger;
    console.log(result);
}

run("Kim");