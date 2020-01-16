class Question < ApplicationRecord
    belongs_to :user
    
    # Question model
    # Generated with command 'rails g model question title:string body:text'
    # Question class inherits everything from ApplicationRecord

    # ActiveRecord is an ORM
    # It provides a bunch of methods to query the database

    has_many :answers, dependent: :destroy
    has_many :likes, dependent: :destroy
    # The 'has_many' below is dependent on the existence of 'has_many :likes' above.
    # If the above doesn't exist or comes after, you will get an error. 
    has_many :likers, through: :likes, source: :user
    has_many :taggings, dependent: :destroy
    has_many :tags, through: :taggings
    # If the name of the association is the same as the as the source singularized 
    # (i.e. tag), the :source named argument can be omitted.

    # Adds the following instance methods to the question model:
        # answers
        # answers<<(object, ...)
        # answers.delete(object, ...)
        # answers.destroy(object, ...)
        # answers=(objects)
        # answers_singular_ids
        # answers_singular_ids=(ids)
        # answers.clear
        # answers.empty?
        # answers.size
        # answers.find(...)
        # answers.where(...)
        # answers.exists?(...)
        # answers.build(attributes = {}, ...)
        # answers.create(attributes = {})
        # answers.create!(attributes = {})
        # answers.reload

    # Adding 'dependent: :destroy' tells Rails to delete associated records before deleting
    # the record itself. In this case, when a question is deleted, its 
    # answers are deleted first to satisfy the forein_key constraint.

    # You can also use 'dependent: :nullify' which will cause all 
    # associated answers to have their question_id column set to NULL
    # before the question is destroyed.

    # If you don't set either 'dependent' option, you can end up with 
    # answers in your db referencing question_ids that no longer exist,
    # likely leading to errors. ALWAYS SET A DEPENDENT OPTION TO HELP
    # MAINTAIN REFERENTIAL INTEGRITY.

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

    # Rails HOOK
    before_validation :default_view_count
    before_save :capitalize_title
    # Before saving a record, execute the method

    # Getter
    def tag_names
        self.tags.map{ |t| t.name }.join(", ")
    end

    # Setter
    # Appending '=' at the end of a method name allows us to implement a setter.
    def tag_names=(value)
        self.tags = value.strip.split(/\s*,\s*/).map do |tag_name|
            # Finds the first record with the given attributes or initializes
            # a record (Tag.new) with the given attributes if one is not found.
            Tag.find_or_initialize_by(name: tag_name)
        end
    end

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