import re
import unittest

class StringCalc:
    def add(self, number_str: str) -> int:
        # // This will take care of the empty string
        if not number_str:
            return 0

        # Default delimiter is a comma with the starter
        default_delimiter = ","

        # Check for custom delimiter
        if number_str.startswith("//"):
            index_of_next_ln = number_str.find('\n')
            # i thought of considering the the whole area to be as delimiters
            # which i can use this as forward item
            default_delimiter = number_str[2:index_of_next_ln]
            # Update the number_str to exclude the delimiter declaration
            number_str = number_str[index_of_next_ln + 1:]

        # Splitting the array using the defaultDelimiter , and adding \n both
        num_arr = re.split(f"[{re.escape(default_delimiter)}\n]", number_str)

        # Parse numbers from the string and filter out empty strings
        # adding length check will remove all the nulls that are collected
        # dumb but fast & works
        number_parsed_arr = [int(each_num) for each_num in num_arr if each_num]

        # Added the check for the negative number and then concatinating wtih the negative numbers
        negatives = [num for num in number_parsed_arr if num < 0]
        if negatives:
            raise ValueError(f"Negative numbers not allowed: {', '.join(map(str, negatives))}")

        # Sum numbers, ignoring those greater than 1000
        number_parsed_added = sum(num for num in number_parsed_arr if num <= 1000)

        return number_parsed_added

class TestStringCalc(unittest.TestCase):
    def setUp(self):
        self.calc = StringCalc()

    def test_empty_string(self):
        self.assertEqual(self.calc.add(""), 0)

    def test_single_number(self):
        self.assertEqual(self.calc.add("1"), 1)
        self.assertEqual(self.calc.add("100"), 100)

    def test_two_numbers(self):
        self.assertEqual(self.calc.add("1,2"), 3)
        self.assertEqual(self.calc.add("10,20"), 30)

    def test_newline_delimiter(self):
        self.assertEqual(self.calc.add("1\n2,3"), 6)
        self.assertEqual(self.calc.add("10\n20\n30"), 60)

    def test_custom_delimiter(self):
        self.assertEqual(self.calc.add("//;\n1;2;3"), 6)
        self.assertEqual(self.calc.add("//*\n10*20*30"), 60)

    def test_ignore_numbers_greater_than_1000(self):
        self.assertEqual(self.calc.add("2,1001"), 2)
        self.assertEqual(self.calc.add("1000,1001"), 1000)

    def test_negative_numbers(self):
        with self.assertRaises(ValueError) as context:
            self.calc.add("1,-2,3")
        self.assertIn("Negative numbers not allowed", str(context.exception))
        self.assertIn("-2", str(context.exception))

    def test_complex_custom_delimiter(self):
        self.assertEqual(self.calc.add("//***\n1***2***3"), 6)

if __name__ == '__main__':
    unittest.main()