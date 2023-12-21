const ages = [ 14, 12, 16, 13, 11 ];
const ages2 = [12, 16, 14 , 19];
const friend = [ 'saidee hasan', 'Alim hasan', ' Elion musko', ];
const allAges = ages.concat(ages2).concat([1000]).concat(friend);
const allage2 = [ ...ages, ...ages2, 5, ...friend ];
console.log(allage2)
console.log(allAges);

const buisness = 450 ;
 const minister = 4550 ;
 const  sochip = 120 ; 
 const takaposia = [ 500, 600, 100];
 const miximum = Math.max(buisness , minister , sochip);
 const mixmum2 = Math.max(...takaposia);
 console.log(miximum);
 console.log(mixmum2)
 