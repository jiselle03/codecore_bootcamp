class Task < ApplicationRecord
    belongs_to :user
    belongs_to :project

    validates :body, presence: true, uniqueness: true
end
