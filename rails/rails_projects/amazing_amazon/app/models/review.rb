class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product

  validates :rating, numericality: { only_integer: true }, inclusion: { in: 1..5 }
end
