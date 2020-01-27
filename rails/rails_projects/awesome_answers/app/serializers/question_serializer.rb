class QuestionSerializer < ActiveModel::Serializer
  # Use the 'attributes' method to specify which methods of a model
  # to include in the serialization output. All columns of a model
  # have a corresponding attr_reader (getter) method, so we can filter
  # this way as well.
  attributes :id, :title, :body, :created_at, :updated_at, :view_count

  # To include associated models, use the same named methods for creating
  # associations. You can rename the association with the argument 'key:'
  # which is only going to show in the rendered json (won't effect the name
  # of the association anywhere else).
  belongs_to :user, key: :author
  has_many :answers

  class AnswerSerializer < ActiveModel::Serializer
    attributes :id, :body, :created_at, :updated_at
  end

end
