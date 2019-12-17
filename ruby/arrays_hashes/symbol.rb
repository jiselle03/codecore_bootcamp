# Symbols

# Symbols are like strings except they cannot be mutated

:hello

school = {
    :name => "codecore",
    :place => "new west",
    :students => "awesome"
}

# New Ruby syntax

school2 = {
    name: "codecore",
    "name" => "vcc", # New syntax only reserved for symbols
    place: "new west",
    students: "awesome" # Values can still be changed because they're strings, not symbols
}

# Getting a value from a hash
# We can only use square bracket notation
school2["name"] # nil
school2[:name] # codecore

# Adding a key value to a hash
school2[:student_count] = 4000