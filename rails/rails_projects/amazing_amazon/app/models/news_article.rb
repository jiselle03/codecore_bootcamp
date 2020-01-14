class NewsArticle < ApplicationRecord

    belongs_to :user
    
    before_save :titlelize_title

    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validate :published_at_after_created_at

    private

    def published_at_after_created_at
        return if created_at.blank? || published_at.blank?
        if created_at > published_at
            errors.add(:published_at, "must be after the created date") 
        end 
    end

    def publish
        self.published_at = DateTime.now
    end

    def titlelize_title
        self.title.titleize
    end

end
