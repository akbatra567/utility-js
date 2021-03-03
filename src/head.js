const head = (array) => {
    if(array === undefined)
        return undefined;
    else
        return (array.length > 0)?array[0]:null;
}

module.exports = head;