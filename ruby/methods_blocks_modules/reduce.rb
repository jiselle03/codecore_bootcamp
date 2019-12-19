# Implement a reduce method which takes an array, and initial value and a block as its 
# arguments. Reduce is used to process lists (or arrays) of elements and return another 
# value that is an aggregation of all the elements. You are not allowed to use Ruby's reduce 
# or collect and you must use yield to execute the passed block.

def reduce arr, val
    output = val
    arr.each do |n|
        output = yield(output, n)
    end
    p output
end

reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v } # => 21

reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word } 
# => "This is my sentence"

reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) do |min, v|
  if min > v
    v
  else
    min
  end
end
# => 1