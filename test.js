"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getProperty_1 = require("./getProperty");
// Test 1:
var players = [
    [0, [100]],
    [2, 3]
];
var result = getProperty_1.getProperty('0.1.0', players);
if (result === 100)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2:
var city = {
    name: 'San Francisco',
    cityCouncil: {
        members: [
            { name: { first: 'Megan', last: 'Trainor' }, age: 26 },
            { name: { first: 'Justin', last: 'Bieber' }, age: 85 }
        ]
    }
};
var ageOfMeganTrainor = getProperty_1.getProperty('cityCouncil.members.0.age', city);
if (ageOfMeganTrainor === 26)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
