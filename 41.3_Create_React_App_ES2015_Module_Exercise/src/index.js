import fruits from './foods';
import { choice, remove } from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here's your ${fruit}`);
console.log(`It's delicious! May I have another?`);

let fruitsLeft = remove(fruit, fruits);

console.log(`I'm sorry, we're all out of ${fruit}. We have ${fruitsLeft.length} other types of fruit, though.`);


