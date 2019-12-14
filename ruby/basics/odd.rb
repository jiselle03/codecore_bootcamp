# Odd

# Solution 1
i = 1
while i < 60
    puts i unless i % 2 == 0 
    i += 1
end

# Solution 2
while i < 60
    puts i
    i += 2
end

# Solution 3
counter = 0
i = 1
while counter < 30
    puts i if i % 2 == 1
    i += 2
    counter += 1
end

# Solution 4
while i < 60
    puts i if i.odd?
    i += 1
end