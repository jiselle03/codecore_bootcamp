# Blocks

def my_method
    puts "Before block"
    # To execute a block that has been passed to a method, use the 'yield' keyword.
    # Yield will return the last expression from the block

    yield_return = yield(1, 2, 3, 4)
    puts "Yielded block returned: #{yield_return}"
    # Arguments passed to yield are then passed to the block that yield executes

    puts "After block"
end

my_method { |x, y, z| x * y * z }

def burger
    puts "top bun"
    yield
    puts "bottom bun"
end

burger do
    puts "lettuce"
    puts "cheese"
    puts "beef patty"
end

# Methods cannot take more than one block
# Yield can be used multiple times

def print_twice
    yield
    yield
end

print_twice { puts "Hello" }

# If you try to yield without passing a block, you will get a 'no block given'
# error. You can avoid this by using the 'block_given?' method.

def burger
    puts "top bun"
    yield if block_given?
    puts "bottom bun"
end

# Implement each

def each array
    for element in array
        yield element
    end
end

each([1, 2, 3, 4, 5]) { |x| puts x * x }
each([1, 2, 3, 4, 5]) { |x| puts x.odd? }
each([1, 2, 3, 4, 5]) { |x| puts "The number is #{x}" }

# Implement map

def map array
    new_array = []
    for val in array
        new_array << yield(val)
        # new_array.push yield(val)
    end
    new_array
end

p map([1, 2, 3, 4, 5]) { |x| x * x }