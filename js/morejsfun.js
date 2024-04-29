
function lastItem(arr) {
    const originalArray = arr.join(', ');
    const lastAlphabetically = arr.sort()[arr.length - 1];
    
    const output1 = document.getElementById("output1");
    output1.innerHTML = `The original array is [${originalArray}], and I sorted it alphabetically.<br>The last item of the sorted array is ${lastAlphabetically}.`;
}

function askAndSort() {
    let numItems = prompt("How many categories would you like to enter? (Between 2 and 4)");

    if (!numItems) {
        return; // Canceled prompt.
    }

    numItems = parseInt(numItems, 10);
    if (numItems < 2 || numItems > 4) {
        alert("Invalid number. Please enter a number between 2 and 4.");
        return;
    }

    const categories = [];
    const items = [];

    for (let i = 0; i < numItems; i++) {
        const category = prompt(`Enter category ${i + 1} of ${numItems}`);
        if (!category) {
            return; // Canceled prompt.
        }

        categories.push(category);

        const item = prompt(`Enter one ${category}`);
        if (!item) {
            return; // Canceled prompt.
        }

        items.push(item);
    }
    
    const sortedItems = items.slice().sort();

    const output2 = document.getElementById("output2");
    output2.innerHTML = `You entered ${numItems} items: ${items.join(', ')}.<br>I sorted them: ${sortedItems.join(', ')}.`;
}
