require "./cookie.rb"

# To inherit from another class, use the '<' when declaring as shown below:
# By default, all classes inherit from the Object class unless another superclass is provided.
class Oreo < Cookie

    def initialize(sugar, flour, filling_type = "Pure white sugar")
        # Use 'super' to call the same named method in the super class
        # In this case, it will call the initialize method from Cookie
        super(sugar, flour)
        @filling_type = filling_type
    end

    def eat
        puts "split into two and lick the center"
        super
    end

end