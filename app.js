//Object Destructuring 1
//8
//1846

//Object Destructuring 2
//{1846, 1659}

//Object Destructuring 3
//Your name is Alejandro and you like purple
//Your name is Melissa and you like green
//Your name is undefined and you like green

//Array Destructuring 1
//Maya
//Marissa
//Chi

//Array Destructuring 2
//Raindrops on roses
//Whiskers on kittens
//[Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings]

//Array Destructuring 3
//10, 30, 20

//1
const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

// const {numbers: { a, b },} = obj;

const {a,b} = obj.numbers

//2
const arr = [1, 2];
[first, second] = [second, first] = arr;

const faceResults = ([first,second,third, ...rest]) => ({first, second,third, ...rest})
