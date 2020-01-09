require 'minitest/autorun'

# To create a grouping of tests with Minitest, create a 
# class whose name ends in 'Test' and inherits from 
# Minitest::Test

class HelloWorldTest < MiniTest::Test

    # To run tests with minitest/autorun, you must start 
    # the method name with 'test_'
    def test_something
        # Use the method 'assert' inside a test to verify 
        # that your code must evaluate to something that 
        # is truthy
        x = 5
        y = 5
        assert(x == 5)
    end

    def test_something_else
        # Use the method 'assert_equal' inside of a test 
        # method to compare values.
        assert_equal(2, 1 + 1)
    end

end

# To run this test file, execute with ruby:
# ruby hello_world.rb

# To display the name of all tests that run add the option:
# ruby hello_world.rb --verbose

# There are 3 different kinds of automated tests:

# - Unit Testing
    # Testing a minimal amount of code. often a method or function. 
    # It means testing a minimal piece of code isolated from the 
    # rest of your application.
# - Integration Testing
    # It means testing a section of an application as a whole. This 
    # helps identify issues between the related parts of our app. 
    # In Rails, we'll test our controllers as integration tests.
# - Functional Testing
    # This involves testing the application as a whole against its requirements.
    # For web application, this might mean simulating a browser and 
    # simulating user interactions with a headless Chrome browser 
    # or Selenium.