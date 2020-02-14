class User < ApplicationRecord
    has_many :questions, dependent: :nullify
    has_many :answers, dependent: :nullify
    has_many :job_posts, dependent: :destroy
    has_many :likes, dependent: :destroy
    # The 'has_many through:' argument takes the name of another association created with
    # has_many :association_name. If you were to 'use has_many :questions, through: :likes',
    # then you will have two has_many :questions.
    # To fix this, we can give the association a different name and specify the 'source'
    # option so that Rails will be able to figure out what the other ned of the association 
    # actually refers to.
    # Note: 'source' has to match a belongs_to association statement in the join model
    # ('like' in this case).
    has_many :liked_questions, through: :likes, source: :question
    
    has_many :sent_gifts, class_name: "Gift", foreign_key: :sender_id, dependent: :nullify
    has_many :received_gifts, class_name: "Gift", foreign_key: :receiver_id, dependent: :nullify

    # To set up attachments or uploads, generate a migraiton to create tables needed by ActiveStorage:
    # rails active_storage:install
    # Then run your migration
    
    # To support multiple file attachments, do:
    # has_many_attached :avatars

    # To support a single file attachment, do:
    has_one_attached :avatar    

    validates :email, presence: true, uniqueness: true,
    format: /\A([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    has_secure_password

    def full_name
        "#{first_name} #{last_name}".strip.squeeze
    end

end
