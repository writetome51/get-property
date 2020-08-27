import {getProperty} from './index.js';

// Test 1:
let players = [
	[0, [100]],
	[2, 3]
];
let result = getProperty('0.1.0', players);
if (result === 100) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2:
let city = {
	name: 'San Francisco',
	cityCouncil: {
		members: [
			{name: {first: 'Megan', last: 'Trainor'}, age: 26},
			{name: {first: 'Justin', last: 'Bieber'}, age: 85}
		]
	}
};
let ageOfMeganTrainor = getProperty('cityCouncil.members.0.age', city);
if (ageOfMeganTrainor === 26) console.log('test 2 passed');
else console.log('test 2 FAILED');


let errTriggered = false;
try {
	getProperty(false, {});
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


errTriggered = false;
try {
	getProperty(['a'], {a: 1});
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


result = getProperty('a', []);
if (result === undefined) console.log('test 6 passed');
else console.log('test 6 FAILED');
