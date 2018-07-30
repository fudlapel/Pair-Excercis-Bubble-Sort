let swapCount = 0

function bubbleSort(array){
    //let outputArray = [];

    if (array.length <= 1){
        return array
    }

    //let swapCount = 0
    for(var i = 0; i < array.length - 1; i++) {
        let elem1 = array[i];
        let elem2 = array[i+1];
        if (compare(elem1,elem2)){
            swap(elem1,elem2, array, i)
        }

    }

    if (swapCount === 0){
        return array
    }
    else {
        swapCount = 0
        return bubbleSort(array)
    }
}

function compare(elem1, elem2){
    if (elem1 > elem2){
        return true
    }
    return false
}

function swap(elem1, elem2,array,i){
    //let swapCount = 0
    function swapThese () {
        array[i] = elem2
        array[i+1] = elem1
        swapCount++
    }
    swapThese()
}
