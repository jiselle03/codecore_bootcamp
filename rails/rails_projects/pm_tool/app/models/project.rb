class Project < ApplicationRecord
    belongs_to :user
    has_many :tasks, dependent: :destroy

    has_many :favorites, dependent: :destroy
    has_many :fans, through: :favorites, source: :user

    validates :title, presence: true, uniqueness: { case_sensitive: false }
end
