const numbers=[4,8,16,32,64,25];
newnumbers=[];
numbers.forEach(p => {
    newnumbers.push(Math.sqrt(p));
});
console.log(newnumbers);
