class User < ApplicationRecord
    has_many :projects, dependent: :nullify
    has_many :tasks, dependent: :nullify

    has_many :favorites, dependent: :destroy
    has_many :favorited_projects, through: :favorites, source: :project

    validates :email, presence: true, uniqueness: true,
    format: /\A([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    has_secure_password

    def full_name
        "#{first_name} #{last_name}"
    end
end
