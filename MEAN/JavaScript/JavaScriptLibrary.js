var _ = {
   map: function(arr, callback) {
     //code here;
     const results = [];
     for (let i = 0; i < arr.length; i++) {
       results.push(callback(arr[i], i));
     }
     return results;
   },
   reduce: function(arr, callback, memo) {
     // code here;
     const results = [].concat(array);

     if(memo === undefined){
       memo = results.pop();
     }
     for (let i = 0; i < results.length; i++) {
       memo = callback(memo, arr[i], i);
     }
     return memo;
   },
   find: function(arr, callback) {
     // code here;
     for (let i = 0; i < arr.length; i++) {
       if (callback(arr[i], i)){
         return arr[i];
       }
     }
   },
   filter: function(arr, callback) {
     // code here;
     const results = [];
     for (let i = 0; i < arr.length; i++) {
       if (callback(arr[i], i)){
         results.push(arr[i]);
       }
     }
     return results;
   },
   reject: function() {
     // code here;
     const results = [];
     for (let i = 0; i < arr.length; i++) {
       if (!callback(arr[i], i)){
         results.push(arr[i]);
       }
     }
     return results;
   }
 }
