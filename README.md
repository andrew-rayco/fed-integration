# Front End Developer - Technical Test - Andy Condon

## Code challenges
### CSS/HTML challenge
To view result in browser:
```
npm install
npm run open
```

### JavaScript challenge
To view in browser:
```
npm install (if you haven't already done so)
npm start
```

## CSS/HTML questions
### 1. Give a brief description of the Box Model
The CSS Box Model determines how the browser renders the shape and size of an element.
Each element is a rectangular box, and the CSS Box Model defines how to handle CSS properties applied to the box.
There are four primary 'layers' to the Box Model:
- **Content box**: The inner-most layer that contains the box content (text/images)
- **Padding**: Surrounding the Content box is the padding, which determines the space between the content box and the border.
- **Border**: Surrounding the Padding box, the border determines the space between the inner padding and content boxes and the margin.
- **Margin**: An effectively 'empty' zone that (typically) surrounds all the inner boxes and determines the space between the box as a whole and neighbouring elements.

### 2. What is the difference between `display: inline;` and `display: block`?
HTML elements are (mostly) either a `block-level` or `inline` element.

Inline elements (such as the anchor `<a>` or `<span>` elements) will only take up the space that they need, are not forced to start on a new line, and neighbouring inline elements will wrap around them. Top and bottom margin and padding are ignored on inline elements.

Block elements (like a paragraph `<p>` or `<div>`) will always start on a new line, and allow no horizontal neighbours where it is placed. Content following a block element (be it block-level or inline) is pushed beneath a block element onto a new line.

### 3. How is the `z-index` property used and why?
The `z-index` property determines the visibility of 'positioned' elements where some overlap of elements exists.

A higher z-index will place the element on top (or in front) of an element with a lower z-index.

The z-index property can only be applied on elements that have a declared `position` property (e.g. with a value of `static`, `relative`, `absolute`).

### 4. Can you give an example of when you would use absolute positioning?
I'd use absolute positioning when I wanted an element positioned accurately without being influenced by other elements. For example, in a temporary modal window or navigation overlay.

Absolute positioning removes the element from the flow of the document, and is positioned using the `top`, `bottom`, `left` and `right` properties relative to the nearest parent container (that has relative or absolute positioning itself).


## JavaScript questions
**Note:** All the below solutions are available in [javascript-questions.js](javascript-questions.js)
```
Const sales = [
    { itemSold: “Football”, price: 19.99, dateSold: ‘2018-04-07’, id: ‘j_123 },
    { itemSold: “Trainers”, price: 159.95, dateSold: ‘2018-03-02’, id: ‘t_acds1’ },
    { itemSold: “Cricket bat”, price: 204.97, dateSold: ‘2018-04-05’ id: ‘j_456’},
    { itemSold: ”Rugby ball”, price: 30.00, dateSold: ‘2017-04-22’, id: ‘t_acds3’ },
    { itemSold: “Hockey stick”, price: 54.95, dateSold: ‘2017-03-19’, id: ‘j_999’ }
]
```
### 1. Write a function to return the sum of the price of all properties as a single value.
```
var sum = function(sales) {
    var total = sales.reduce(function(acc, obj) {
        return acc + obj.price;
    }, 0);
    return total.toFixed(2); // Result rounded to 2 decimal places. Weird that it wasn't already.
};
```
### 2. Write a function to only return the items which were sold in 2017.
```
var soldIn17 = function(sales) {
    return sales.filter(function(obj) {
        return obj.dateSold.includes('2017');
    });
};
```
### 3. Write a function to return an array of all of the itemsSold properties as strings, sorted alphabetically.
```
var itemsSoldByTitle = function(sales) {
    var itemArr = [];
    sales.map(function(obj) {
        itemArr.push(obj.itemSold);
    });
    return itemArr.sort();
};
```
### 4. Write a function which takes an id as an argument and returns the sale which matches the id.
```
var findById = function(sales, id) {
    return sales.find(function(obj) {
        return id === obj.id;
    });
};
```
