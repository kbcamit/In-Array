var myValue = prompt("Enter a value", "");
var arr = ["Bangladesh", "India", "Australia"];

function in_array(arr, myValue) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() == myValue.toLowerCase()) {
            return true;
        }
    }
}

var result = in_array(arr, myValue);

if (result == true) {
    console.log("Found in Array");
} else {
    console.log("Not Found in Array");
}