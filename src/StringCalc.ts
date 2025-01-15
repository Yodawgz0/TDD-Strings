// Creating the function add to process the information and setting the input as the string

export class StringCalc {
  add = (numberStr: string) => {
    // using try catch to parse the number from the string ,
    // if it fails then we can return an error
    try {
      // This will take care of the empty string
      if (!numberStr) return 0;

      let defaultDelimiter = ",";
      // Splitting the array using the defaultDelimiter
      const numArr = numberStr.split(defaultDelimiter);
      // Parse the single number from the string
      // and reducing it to the added sum and returning it
      const numberParsedAdded = numArr
        .map((eachNum) => parseInt(eachNum))
        .reduce((sum, num) => sum + num, 0);
      return numberParsedAdded;
    } catch (err) {
      console.log(err);
      return "Unable to extract the number out of the string";
    }
  };
}
