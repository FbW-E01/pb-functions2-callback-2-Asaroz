// Number Sqaure
// Write a function which will return sqaure of given number
// Write a function which will return sqaure of every number in array



    const array = [1, 2, 3, 4, 5, 6]
    sqaure(array,squareNumber)  // return [1,4,9,16,25]


    function squareNumber(a){
        return  a*a
    }

    function sqaure(sq_array,sq_func){
        const new_array=[]
        sq_array.forEach(element => {
            new_array.push(sq_func(element))
        });
        console.log( new_array)
    }