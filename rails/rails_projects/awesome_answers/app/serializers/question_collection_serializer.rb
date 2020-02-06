class QuestionCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :updated_at, :author

  def author
    UserSerializer.new object.user
  end

  class AnswerSerializer < ActiveModel::Serializer
    attributes :id, :body, :created_at, :updated_at
    belongs_to(:user, key: :author)
  end

end
