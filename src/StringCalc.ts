// Creating the class StringCalc to process the information and setting the input as the string

export class StringCalc {
  add = (numberStr: string) => {
    // This will take care of the empty string
    if (!numberStr) return 0;
    // Check for custom delimiter
    let defaultDelimiter = ",";
    if (numberStr.startsWith("//")) {
      [defaultDelimiter, numberStr] = [numberStr[2], numberStr.slice(4)];
    }

    // Splitting the array using the defaultDelimiter , and adding \n both
    const numArr = numberStr.split(new RegExp(`[${defaultDelimiter}\n]`));
    // Parse the single number from the string
    const numberParsedArr = numArr.map((eachNum) => parseInt(eachNum));

    // Added the check for the negative number and then concatinating wtih the negative numbers
    const negatives = numberParsedArr.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    //  reducing it to the added sum and returning it
    const numberParsedAdded = numberParsedArr.reduce(
      (sum, num) => (num > 1000 ? sum : sum + num),
      0,
    );
    return numberParsedAdded;
  };
}
