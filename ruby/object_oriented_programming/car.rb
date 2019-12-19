class Car
    # Methods can have default values for its arguments by using assignment syntax in argument declaration.
    # This makes the argument optional. If no argument is given, the default value will be used.
    def initialize(model, type = "sedan", capacity = 5)
        unless model.is_a? String
            raise ArgumentError.new("model must be a string")
        end

        @model = model
        @type = type
        @capacity = capacity
    end

    attr_accessor(:model, :type, :capacity)

    def drive
        ignite_engine
        puts "Vroom vroom"
    end

    def stop
        puts "Screeeeeeeetch"
    end

    def park
        puts "Clunk"
    end

    def self.max_speed
        200
    end

    private

    def pump_gas
        puts "Glug glug!"
    end

    def ignite_engine
        puts "🚗 🔥🔥🔥"
    end
end

c1 = Car.new
c2 = Car.new

c1.drive