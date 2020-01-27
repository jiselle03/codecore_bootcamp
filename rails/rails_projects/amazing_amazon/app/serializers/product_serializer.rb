class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :created_at, :updated_at, :favorite_count

  belongs_to :user, key: :seller
  has_many :reviews

  def favorite_count
    object.favorites.count
  end

  class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :rating, :created_at, :updated_at
    belongs_to(:user, key: :author)
  end

end
