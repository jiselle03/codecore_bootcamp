require 'minitest/autorun'
require './vector.rb'

class VectorTest < MiniTest::Test

    def test_length
        # GIVEN - Initial state of our program
        # A vector of (3,4)
        vector = Vector.new(3,4)
        
        # WHEN - An action is triggered
        # Length method is called
        length = vector.length

        # THEN - Verify final state
        # The length should be equal to 5

        # The argument order for 'assert_equal' is as follows:
        # - The first arg is the value we expect or want
        # - The second argument is the actual value our code returns
        assert_equal(5, length)
        assert_equal(13, Vector.new(5,12).length)
        # A line that beginns with an 'assert' method is called an 
        # assertion. There can be multiple assertions per test.
        # However it is recommented that you keep it at a minimum.
    end

    def test_to_string
        # GIVEN
        vector = Vector.new(0,0)

        # WHEN
        to_s = vector.to_s

        # THEN
        assert_equal("Vector (0,0)", to_s)
    end

end