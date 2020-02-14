class UserSerializer < ActiveModel::Serializer
  # URL Helpers (e.g. questions_path, answer_url, etc.) are only 
  # available on your controllers and your views. To make them 
  # available elsewhere, you need to include that module that holds
  # those methods by doing the following:
  include Rails.application.routes.url_helpers

  attributes :id, :full_name, :created_at, :updated_at, :avatar
  # :avatars # for multiple

  # For multiple file uploads
  def avatars
    # has_many_attached :avatars
    # object.avatars_attachments
    object.avatars_attachments.includes(:blob).map do |attachment|
      {
        id: attachment.id,
        name: attachment.name,
        content_type: attachment.blob.filename.to_s,
        url: rails_blob_url(attachment)
      }
    end
  end
end
