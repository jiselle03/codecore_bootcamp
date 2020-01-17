class Vote < ApplicationRecord
  belongs_to :review
  belongs_to :user

  validates(
    :review_id, 
    uniqueness: {
      scope: :user_id,
      message: "You can't upvote or downvote twice."
    }
  )
end
