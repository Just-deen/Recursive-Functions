//function which triggers the recursive loop and takes in the target number argument 
function findSolution(target){

    //nested function for the recursive loop (recursive function)
    function find(current, history) {

        //first base case 
        if(current == target) {
            return history;
        }

        //second base case
        else if(current > target) {
            return null;
        }

        //conditional for calling the recursive function and updating the history and current arguments 
        else{
            return find(current + 5, `(${history} + 5)`) ?? find(current * 3, `(${history} * 3)`)
        }
    }

    //return statement which calls the 'find' function and triggers the first recursive function
    return find(1, '1');
}

console.log(findSolution(24))