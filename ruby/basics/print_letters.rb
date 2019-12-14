# Print letters

number = 1
for letter in 'a'..'z'
    number.times { print letter + ' ' }
    print "\n"
    number += 1
end
