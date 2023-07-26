function mostFrequent(arr) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr.length; i++) {
      for (var j = i; j < arr.length; j++) {
        if (arr[i] == arr[j]) m++;
        if (mf < m) {
          mf = m;
          item = arr[i];
        }
      }
      m = 0;
    }
    return item;
  }
  
  console.log(mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]));