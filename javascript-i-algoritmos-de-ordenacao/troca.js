function exchange (array, test) {
    let testItem = array[test];
    let previousItem = array[test - 1];

    array[test] = previousItem;
    array[test -1] = testItem;
}

module.exports = exchange;