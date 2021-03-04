const maxElement = (number1, number2) => (number1>number2)?number1:number2;

const max = (array, size) => {
    if( size == 1)
        return array[0];
    return maxElement(array[size], max(array, size - 1));
} 

module.exports = max;
