# Write some code that keeps asking the user for book names until the user enters "exit".
# After typing "exit" the program should display all the entered book names sorted and have the book 
# names capitalized.

books = []
while true
    puts "What is the name of book"
    answer = gets.chomp
    if answer != "exit"
        books.push answer
    elsif answer == "exit"
        books.sort.each do |book|
            p book.capitalize
        end
    end
    break if answer == "exit"
end