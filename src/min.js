const minElement = (number1, number2) => (number1<number2)?number1:number2;

const min = (array, size) => {
    if( size == 1)
        return array[0];
    return minElement(array[size], min(array, size - 1));
} 

module.exports = min;
