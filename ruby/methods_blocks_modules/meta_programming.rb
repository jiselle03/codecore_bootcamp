# Meta programming
# Programming techniques that perform operations on the running code itself

# define_method

numbers = {
    1 => "one",
    2 => "two",
    3 => "three",
    4 => "four",
    5 => "five"
}

numbers.each do |num, num_word|
    # WHen using define_method, the first argument is the name of the method
    # othat is being defined (as a symbol or a string)
    # The body of the method is the block that is passed to define_method
    define_method(num_word) do
        num
    end
end

p one

# eval
# Takes a string as an argument and will attempt to evaluate as Ruby code
# THIS METHOD IS VERY DANGEROUS. AVOID USING AT WORK WHEN POSSIBLE.
eval("1 + 1 * 10")

# send
# Takes a string or symbol as a first argument named after a method.
# Attempts to call method with that name.

p send(:product, 10, 10, 10)