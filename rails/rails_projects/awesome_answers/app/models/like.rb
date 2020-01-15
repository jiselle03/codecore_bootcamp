class Like < ApplicationRecord
  belongs_to :question
  belongs_to :user

  # The following will ensure that the question_id / user_id combination is unique.
  validates(
    :question_id, 
    uniqueness: {
      scope: :user_id,
      message: "You have already liked this."
    }
  )

end
