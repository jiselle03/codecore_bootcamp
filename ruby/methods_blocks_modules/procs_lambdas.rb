# Procs and lambdas

# A proc is an instance of the Proc class, which holds a code block to be
# executed, and be stored in a variable.
my_proc = Proc.new { |x| puts x }
my_proc = proc { |x| puts x}

# To call a proc:
my_proc.call(5)

add_five = Proc.new { |n| n + 5 }
add_five.call(5)
# A proc can be passed as a method argument
[1, 2, 3, 4, 5].map(&add_five)

# There is no dedicated lambda class. They are a special kind of Proc object.

my_lambda = lambda { |x| puts x }
lambda_add = lambda { |x, y| x + y }
# Equivalent to:
# Stabby lambda
lambda_add = ->(a, b) { |x, y| x + y }

# A proc behaves differently than a lambda specifically when it comes to arguments

test = Proc.new { |x, y| puts "I don't care about arguments" }
test.call # => "I don't care about arguments"
test.call(1, 2) # => "I don't care about arguments"

test = lambda { |x, y| puts "I don't care about arguments" }
# test.call will throw an error
test.call(1, 2) # => "I don't care about arguments"

# Procs and lambdas handle return differently:
    # A lambda will return normally like a method, while 
    # A proc will return from the method enclosing the proc.

def proc_return
    my_proc = Proc.new { return }
    my_proc.call
    puts "This will not be printed"
end

def lambda_return
    my_lambda = Proc.new { return }
    my_lambda.call
    puts "This will be be printed"
end