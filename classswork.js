//? Why do we use objects?
//? Ans:
// Organization of Data: Objects allow you to group related data and functions together. This helps in organizing the code and making it more manageable. For example, an object representing a car might contain properties like make, model, and year, and methods like start() and stop().

// Encapsulation: Encapsulation is the bundling of data and the methods that operate on that data into a single unit. In JavaScript, objects encapsulate data (properties) and functions (methods) together. This helps in hiding the internal state of the object and only exposing a controlled interface.

// Reusability and Inheritance: JavaScript objects can be used as templates for creating multiple instances with similar structure and behavior. Through prototype-based inheritance, objects can inherit properties and methods from other objects, promoting code reusability and reducing redundancy.

// State Management: Objects are used to store the state of an application. For example, in a game, you might use an object to keep track of the player's score, level, and other statistics. This helps in maintaining a structured and easily accessible state.

// Dynamic Nature: Objects in JavaScript are highly dynamic. You can add, modify, or delete properties and methods at runtime. This flexibility makes objects very powerful and adaptable to changing requirements.

// Functional Programming: JavaScript supports functional programming, and objects can play a crucial role here. Functions themselves are objects in JavaScript, and you can attach properties and other functions to them, enabling complex functional constructs.

let myHouseDetails={
    numberOfRoom:7,
    numberOfMembers:10,
    colorOfHouse:"green",
    builtYear:2011,
    numberOfStorey:3,
    estimatedPriceOfHouse:"2 crores",
};
console.log(myHouseDetails)
//?delete myHouseDetails.numberOfMembers;
//?console.log(myHouseDetails)
myHouseDetails.numberOfRoom +=3;
console.log(myHouseDetails)
console.log(`I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRoom} rooms where ${myHouseDetails.numberOfMembers} people are living.The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse} . `)

