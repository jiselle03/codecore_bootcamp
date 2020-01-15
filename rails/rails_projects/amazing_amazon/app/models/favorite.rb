class Favorite < ApplicationRecord
  belongs_to :product
  belongs_to :user

  validates(
    :product_id, 
    uniqueness: {
      scope: :user_id,
      message: "You have already favorited this."
    }
  )

end
