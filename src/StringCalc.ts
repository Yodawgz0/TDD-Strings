// Creating the function add to process the information and setting the input as the string

export class StringCalc {
  add = (numberStr: string) => {
    // using try catch to parse the number from the string ,
    // if it fails then we can return an error
    try {
      if (!numberStr) return 0;
      const numberParsed = parseInt(numberStr);
      return numberParsed;
    } catch (err) {
      console.log(err);
      return "Unable to extract the number out of the string";
    }
  };
}
