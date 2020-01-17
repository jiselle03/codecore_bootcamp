class Product < ApplicationRecord
  belongs_to :user

  has_many :favorites, dependent: :destroy
  has_many :fans, through: :favorites, source: :user

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  
  has_many :reviews, dependent: :destroy

  before_validation :default_price

  before_save :capitalize_title

  validates :title, presence: true, uniqueness: { case_sensitive: false }

  validates :description, presence: true, length: { minimum: 10 }, uniqueness: { scope: :title}

  validates :price, numericality: {greater_than: 0}

  scope :search, lambda { |query|
  where("title ILIKE '%#{query}%' OR description ILIKE '%#{query}%'")
    .order(
      # Order first by products whose titles that contain the `query`
      "title ILIKE '%#{query}%' DESC",
      # Then, if a product's title and description contain the `query`,
      # put products whose descriptions also contain the `query` later in results
      "description ILIKE '%#{query}%' ASC"
    )
  }

  # Getter
  def tag_names
    self.tags.map{ |t| t.name }.join(", ")
  end

  # Setter
  def tag_names=(value)
      self.tags = value.strip.split(/\s*,\s*/).map do |tag_name|
          Tag.find_or_initialize_by(name: tag_name)
      end
  end

  private

  def default_price
      self.price ||= 1.00       
  end

  def capitalize_title
      self.title.capitalize!
  end

end