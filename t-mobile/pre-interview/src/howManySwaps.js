export default function howManySwaps(arr) { 
    // Basically my thought is to use bubble sort. Every time a swap happens, we increment a 
    // counter which will keep track of how many sorts happened. However, we have to break out of an array early if the array 
    let length = arr.length;
    // Counter for swaps 
    var swaps = 0;
    
    for(let i = 0; i < length; i++){
        var swapped = false;
        for(let j = 0; j < length; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped = true;
                swaps++;
            }
        }
        if(!swapped) break;
    }
    
    return swaps;
}
