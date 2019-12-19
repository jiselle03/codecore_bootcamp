# Creating a class

# Use the keyword 'class' to create a class.
# Classes are named using PascalCase.

class Cookie
    # Define an instance method for your class by writing the method within the class body.

    def initialize(sugar, flour)
        # puts "In the initialize method"

        # Create an instance variable by prefixing the name with the '@' symbol
        # An instance variable is scoped to the body class and an instance.
        # It is usable by all instance methods (including private methods) of a class.
        # Every instance of the class gets its own set of instance variables.
        @sugar = sugar
        @flour = flour

        # Declare class variables by prefixing with '@@'.
        # A class variable is accessible by all class methods and instance methods.
        # It is shared across all instances of the class, meaning that changing it for one instance
        # will change it for all other instances as well. Class variables are also shared across the
        # inheritance chain.
        @@color = "brown"
    end

    # This is a getter method. It reads the value of an instance variable
    # def sugar
    #     @sugar
    # end
    # These are so common in Ruby that it has a special way of creating them. The following method will
    # create the method above:
    attr_reader(:sugar, :flour)

    # This is a setter. It sets the value of an instance variable.
    # def sugar=(qty)
    #     @sugar = qty
    # end
    attr_writer(:sugar, :flour)

    # To create the getter and setter all in one step for an instance variable, use the following instead:
    # attr_accessor(:sugar, :flour)

    def details
        "sugar: #{sugar} and flour: #{flour}"
    end

    def eat
        bake
        "Nomnomnom"
    end

# To create a class method, prefix the method name with 'self.'.
# A class method can only be called on the class itself and not instances of the class.
    def self.info
        "I'm in the cookie class"
    end

# Any method declared after the keyword 'private' becomes a private method.
# Private methods are methods that can only be used inside the bdy of the class. They can't be 
# called as instance methods of the class's instances.
    private

    def bake
        "baking the cookie!"
    end
end
# Global variables
# Prefix a word with '$' to create a global variable.
# Variables should always use the minimum scope needed.
$domain = "http://raise.hell"

# c = Cookie.new
# c.eat
# c.bake # will get an error