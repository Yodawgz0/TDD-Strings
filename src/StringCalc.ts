// Creating the class StringCalc to process the information and setting the input as the string

export class StringCalc {
  add = (numberStr: string) => {
    // This will take care of the empty string
    if (!numberStr) return 0;
    // Check for custom delimiter
    let defaultDelimiter = ",";
    if (numberStr.startsWith("//")) {
      const indexOfNextLn = numberStr.indexOf('\n');
      // i thought of considering the the whole area to be as delimiters
      // which i can use this as forward item
      defaultDelimiter = numberStr.slice(2, indexOfNextLn);
      // removing the forward slashes
      numberStr =  numberStr.slice(2);
    }

    // Splitting the array using the defaultDelimiter , and adding \n both
    const numArr = numberStr.split(new RegExp(`[${defaultDelimiter}\n]`));
    // Parse the single number from the string
    const numberParsedArr = numArr.map(
      // adding length check will remove all the nulls that are collected
      // dumb but fast & works
      (eachNum) => eachNum.length && parseInt(eachNum),
    );

    // Added the check for the negative number and then concatinating wtih the negative numbers
    const negatives = numberParsedArr.filter((num) => num < 0);
    if (negatives.length > 0) {
      // throw the exception which will be caught by the script
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    // reducing it to the added sum and returning
    // added the check of huge nums for add
    const numberParsedAdded = numberParsedArr.reduce(
      (sum, num) => (num > 1000 ? sum : sum + num),
      0,
    );
    return numberParsedAdded;
  };
}
