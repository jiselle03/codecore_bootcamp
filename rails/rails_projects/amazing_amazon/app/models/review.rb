class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user

  validates :rating, numericality: { only_integer: true }, inclusion: { in: 1..5 }
end
