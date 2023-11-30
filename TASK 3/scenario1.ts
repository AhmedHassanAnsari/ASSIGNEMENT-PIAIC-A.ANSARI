var arr=['hockey','football','cricket'];
console.log(arr);
arr.pop(); 
console.log(arr);           //to remove last element from array which is cricket in our case
//now to add a new element at the end of array such as wrestling,we use push method
arr.push('wrestling');
console.log(arr);
//now we will use shift method to remove first element from our array which is hockey in our case.
arr.shift();
console.log(arr);
//now to add element at first in our array we use unshift,for example we want to add basketball
arr.unshift('basketball');
console.log(arr); 