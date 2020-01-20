class Project < ApplicationRecord
    belongs_to :user
    has_many :tasks, dependent: :destroy

    has_many :favorites, dependent: :destroy
    has_many :fans, through: :favorites, source: :user

    validates :title, presence: true, uniqueness: { case_sensitive: false }
    validate :due_date_after_created_at

    private

    def due_date_after_created_at
        return if created_at.blank? || due_date.blank?
        if created_at > due_date
            errors.add(:due_date, "must be after the created date") 
        end 
    end
end
