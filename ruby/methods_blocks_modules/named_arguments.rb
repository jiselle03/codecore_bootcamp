def add(first, second)
    first + second
end

add(1, 2)

# Named/Key-Value arguments

# Methods can take named arguments. Named arguments are written as key-values 
# of a hash.
# They must be given a default value.

def add(first: 0, second: 0)
    first + second
end

add(first: 1, second: 2)

hash = {first: 2, second: 6}
add(hash)