var myValue = prompt("Enter a value", "");

function in_array(myValue) {
    var arr = ["Bangladesh", "India", "Australia"];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() == myValue.toLowerCase()) {
            return true;
        }
    }
}

var result = in_array(myValue);

if (result == true) {
    console.log("Found in Array");
} else {
    console.log("Not Found in Array");
}