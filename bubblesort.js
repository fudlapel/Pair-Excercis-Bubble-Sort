
function bubbleSort(array){
    let outputArray = [];

    for(var i = 0; i < array.length; i++) {
        let elem1 = array[i];
        let elem2 = array[i+1];
        compare(elem1, elem2, outputArray);
        console.log(outputArray);
    }

    return outputArray;
}

function compare(item1, item2, newArray){
    let temp1 = item1
    let temp2 = item2

    if (temp1 > temp2) {
        item2 = temp1
        item1 = temp2
    }

    newArray.push(item1);

    if (temp2 === undefined) {
        newArray.push(item1);
    }
}

// function swap(){

// }
