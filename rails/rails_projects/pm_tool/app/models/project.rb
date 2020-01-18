class Project < ApplicationRecord
    belongs_to :user
    has_many :tasks, dependent: :destroy

    validates :title, presence: true, uniqueness: { case_sensitive: false }
end
