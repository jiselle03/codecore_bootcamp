# Write a code that takes an array and then returns another array that contains all the numbers that are greater than 10. 
# The code should not fail if the array contains strings / non-number elements. for example, this array:

my_array = [1,4,5,23,14,"Hello there", false, nil]

p my_array.select {|n| n > 10 if n.is_a? Integer}