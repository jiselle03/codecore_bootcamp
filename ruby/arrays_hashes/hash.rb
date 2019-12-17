# Hash

# A Ruby hash is a set/dictionary of key value pairs. So, basically JavaScript objects.

# Defining a hash

h1 = Hash.new() # Creates an empty hash
h2 = {} # Creates an empty hash

me = {
    "name" => "jiselle",
    "place" => "richmond",
    "company" => "codecore",
    1 => "something"
}

#  Keys can be a string, integer, or symbol
# The hash rocket '=>' is used to assign a value to a key
# Key value pairs within hashes are separated by a comma

# Select a value
# To select a value we use square bracket notation passing the key 
me["name"] # "jiselle"
me[1] # "something"

# '.keys' will return an array of all the keys of an object
p me.keys

# '.values' will return an array of all the values of an object
p me.values

# Iterating over an object

# '.each' is the easiest way to iterate over an object
me.each do |key, value|
    p "key is #{key}, value is #{value}"
end

# .each_value
me.each_value do |val|
    p val
end