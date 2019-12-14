print "What is your score?"
score = gets.to_f 
# no need for .chomp if you convert

if score >= 90
    puts 'A'
elsif score >= 80
    puts 'B'
elsif score >= 70
    puts 'C'
else
    puts 'F'
end