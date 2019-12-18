# Define a method with the 'def' keyword
# Methods that return a boolean generally end with a '?'

def by_five? n
    # Returning is implicit in Ruby. The last evaluated expression in a
    # method's body will always be returned unless you tell it otherwise.
    p n % 5 == 0
end

# To call a method:

by_five?(5) # => true
by_five? 6 # => false

def what_is_it something
    if [String, Array, Integer].include?(something.class)
        puts something.class.to_s
    else
        puts "Something Else"
    end
end

def what_is_it_2 something
    return "Array" if something.is_a? Array
    return "Integer" if something.is_a? Integer
    return "String" if something.is_a? String
    "Something else"
end

what_is_it "hello"

# Optional/default arguments

def multiply(a, b = 1)
    a * b
end

multiply(4) # => 4
multiply(4, 4) # => 16

# Variadic methods

def my_args(first, *args, last)
    # Use the splat '*' in front of an argument to take any number of args into
    # an array, just like gather (i.e. '...') in JavaScript. Unlike gather,
    # it can be placed at the beginning, middle, or end of a list of arguments.
    puts "first: #{first}"
    puts "args: #{args}"
    puts "last: #{last}"
end

my_args(0, 1, 2, 3, 4, 5, 6, 7)

def product(*nums)
    nums.reduce(1) do |accumulator, num|
        # In reduce, on the first iteration, the accumulator is the initial value
        # If you do not explicitly specify an initial value, then the first element
        # of the collection you are calling '.reduce' on is used as the initial value.
        accumulator * num
        # In the following iterations, accumulator will be the return of the 
        # prevous iteration
    end
end

p product(1,2,3,4,5)

[2, 3, 4, 5].reduce(1) do |acc, num|
    acc * num
end

def minimum *nums
    nums.reduce do |curr_min, num|
        if num > curr_min
            curr_min
        else
            num
        end
    end
end

p minimum(7,3,2,9,20)