class User < ApplicationRecord
    has_many :products, dependent: :nullify
    has_many :reviews, dependent: :nullify
    has_many :job_posts, dependent: :destroy

    has_many :likes, dependent: :destroy
    has_many :liked_reviews, through: :likes, source: :review
    has_many :favorites, dependent: :destroy
    has_many :favorited_products, through: :favorites, source: :product

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true,
    format: /\A([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    has_secure_password

    def full_name
        "#{first_name.titleize} #{last_name.titleize}"
    end

end
