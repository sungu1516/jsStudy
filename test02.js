var oReq = new XMLHttpRequest();
function reqListener() {
    console.log(this.responseText);
}

oReq.open("GET", "./json.txt");
oReq.send();