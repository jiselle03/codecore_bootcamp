class Product < ApplicationRecord

    before_validation :default_price

    before_save :capitalize_title

    validates :title, presence: true, uniqueness: { case_sensitive: false }

    validates :description, presence: true, length: { minimum: 10 }, uniqueness: { scope: :title}

    validates :price, numericality: {greater_than: 0}

    # scope :search, ->(query) { where("title ILIKE ?" || "description ILIKE ?", "%#{query}%") }

    def self.search query
        where("title ILIKE ?" || "description ILIKE ?", "%#{query}%")
    end

    private

    def default_price
        self.price ||= 1.00       
    end

    def capitalize_title
        self.title.capitalize!
    end

end