// filter
const number = [1, -1, 1, 2, 3];
// stoppa in en callback funktion
const filtered = numbers.filter(function(value) {
    /* här säger vi alltså att 
    filterara värdet så att endast de mer eller lika med 0 returneras */
    return value >= 0;
});

console.log(filtered);

// arrow
const filteredARROW = numbers.filter(value => value >= 0);
