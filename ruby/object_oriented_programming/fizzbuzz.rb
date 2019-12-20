# Build a class called FizzBuzz that takes two numbers as parameters and then have a method called 
# run that returns a fizzbuzz array (numbers from 1 to 100, numbers divisible by the first number 
# replaced by 'fizz' and numbers divisible by the second number replaced by 'buzz' and numbers divisible 
# by both replaced by 'fizzbuzz'). For instance this code should work with your class:

# Now modify your solution to make it flexible and be able to change the numbers after you create the object. For instance:

class FizzBuzz
    attr_accessor :first_number, :second_number

    def initialize(first_number, second_number)
        @first_number = first_number
        @second_number = second_number
    end

    def run
        arr = []
        for n in 1..100
            str = ""
            str << "fizz" if n % first_number == 0
            str << "buzz" if n % second_number == 0
            str << n.to_s if str.length == 0
            arr << str
        end
        arr
    end

end

fb = FizzBuzz.new(3,5)
fb.run # returns an array: [1, 2, 'fizz', 4, 'buzz, ...
fb.first_number = 2
fb.second_number = 3
p fb.run # returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuzz'...