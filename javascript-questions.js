var sales = [
    { itemSold: 'Football', price: 19.99, dateSold: '2018-04-07', id: 'j_123' },
    { itemSold: 'Trainers', price: 159.95, dateSold: '2018-03-02', id: 't_acds1' },
    { itemSold: 'Cricket bat', price: 204.97, dateSold: '2018-04-05', id: 'j_456'},
    { itemSold: 'Rugby ball', price: 30.00, dateSold: '2017-04-22', id: 't_acds3' },
    { itemSold: 'Hockey stick', price: 54.95, dateSold: '2017-03-19', id: 'j_999' }
];

// 1. Write a function to return the sum of the price of all properties as a single value.
var sum = function(sales) {
    var total = sales.reduce(function(acc, obj) {
        return acc + obj.price;
    }, 0);
    return total.toFixed(2); // Result rounded to 2 decimal places. Weird that it wasn't already.
};

// console.log(sum(sales));


// 2. Write a function to only return the items which were sold in 2017
var soldIn17 = function(sales) {
    return sales.filter(function(obj) {
        return obj.dateSold.includes('2017');
    });
};

// console.log(soldIn17(sales));


// 3. Write a function to return an array of all of the itemsSold properties as strings, sorted alphabetically.
var itemsSoldByTitle = function(sales) {
    var itemArr = [];
    sales.map(function(obj) {
        itemArr.push(obj.itemSold);
    });
    return itemArr.sort();
};

// console.log(itemsSoldByTitle(sales));


// 4. Write a function which takes an id as an argument and returns the sale which matches the id.
var findById = function(sales, id) {
    return sales.find(function(obj) {
        return id === obj.id;
    });
};

// console.log(findById(sales, 't_acds1'));
