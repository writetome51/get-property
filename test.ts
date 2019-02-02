import { getProperty } from './index';


// Test 1:
let players: any[] = [
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
