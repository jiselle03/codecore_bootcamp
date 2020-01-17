class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user

  has_many :votes, dependent: :destroy

  validates :rating, numericality: { only_integer: true }, inclusion: { in: 1..5 }
end
