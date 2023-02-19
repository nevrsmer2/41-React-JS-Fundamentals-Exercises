/* Gererate a random index number to choose a reandom value from a given array */
function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    let item = items[idx];
    return item;
};

/* removes the first matching item from an array, If the item exists, it returns it. Otherwise, it returns undefined. */

function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
        if (item === items[i]) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        };
    };
};


export { choice, remove };
