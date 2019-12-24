class Question < ApplicationRecord
    # Question model
    # Generated with command 'rails g model question title:string body:text'
    # Question class inherits everything from ApplicationRecord

    # ActiveRecord is an ORM
    # It provides a bunch of methods to query the database

    # Rails HOOK
    before_validation :default_view_count
    before_save :capitalize_title
    # Before saving a record, execute the method

    # Validations
    # Rails has built-in methods which allow us to create validations easily
    validates :title, presence: true # will make sure a question has a title before saving it

    # validate uniqueness of title
    validates :title, uniqueness: true

    # validate length of body
    validates :body, length: {minimum: 5, maximum: 500}

    # view count must be at least 0
    validates :view_count, numericality: {greater_than_or_equal_to: 0}

    # Custom validation
    validate(:no_monkey)

    private

    def capitalize_title
        self.title.capitalize!
    end

    def no_monkey
        # '&.' is the safe navigator operator. It is used like the '.' operator to call
        # methods on an object only if they exist
        if body&.downcase&.include?("monkey")
            # If a body of a question has the word "monkey" in it, give us an error
            # 'errors.add' is used to add an error to the instance. It accepts 2 arguments:
                # 1) the column/property you want the error to be on
                # 2) the error message
            self.errors.add(:body, "must not have monkeys")
        end
    end

    def default_view_count
        self.view_count ||= 0
    end

end