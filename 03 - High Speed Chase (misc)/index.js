function controlCar(scanArray) {
    // finding greatest distance 
    var max = Math.max(...scanArray);
    // turning left or right based on the greatest value found
    for (let i = 0; i < 16; i++) {
        if (scanArray[i] == max) {
            if (i == 8) {
                return 0;
            } else if (i <= 7) {
                return -1;
            } else {
                return 1;
            }
        }
    }
}

/* 
notes: looking through the source code, once a distance of 3 is reached in any of the params, it will crash
maybe stop hardcoding the values and look at intervals
*/
