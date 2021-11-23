// Code your solution in this file!
const returnFirstTwoDrivers = function(arr=['Dave', 'Joe', 'Grace', 'Carol']) {
   const newArr = [];
   newArr.push(arr[0]);
   newArr.push(arr[1]);
   return newArr;
}

const returnLastTwoDrivers = function(arr=['Dave', 'Joe', 'Grace', 'Carol']) {
   const lastDrivers = arr.slice(-2);
   return lastDrivers;
 }
 
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(argument) {
     return function(fare) {
         return fare * argument;
     }
 }

 function fareDoubler(fare) {
     return fare * 2;

 }

 function fareTripler(fare) {
     return fare * 3;
 }

 function selectDifferentDrivers(arrayOfDrivers=['Dave', 'Joe', 'Grace', 'Carol'], oldFunction=returnFirstTwoDrivers()) {
     return oldFunction(arrayOfDrivers)
 }