// Creating the function add to process the information and setting the input as the string
const add = (numberStr: string) => {
    // using try catch to parse the number from the string , 
    // if it fails then we can return an error
    try {
        const numberParsed = parseInt(numberStr)
        return numberParsed
    } catch (err) {
        console.log(err)
        return "Unable to extract the number out of the string"
    }
}

// input data defined
const inputString: number = "1"

// Calling the function
const processedData = add(inputString)

console.log(processedData)