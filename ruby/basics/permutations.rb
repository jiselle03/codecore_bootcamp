puts "Please provide input 1."
x = gets.chomp
puts "Please provide input 2."
y = gets.chomp
puts "Please provide input 3."
z = gets.chomp

letters_string = x + y + z

for x in 0..2
    for y in 0..2
        for z in 0..2
            puts letters_string[x] + letters_string[y] + letters_string[z]
        end
    end
end