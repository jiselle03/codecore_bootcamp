class Api::ApplicationController < ApplicationController
    # When making POST, DELETE, and PATCH requests to our controllers,
    # Rails requires that an authenticity token is included as part of
    # our params. Normally Rails will add this to any form that generates
    # form helper methods i.e. form_with, form_for, form_tag.
    # This prevents third parties from making such requests to our Rails app.
    # It's a security measure that is unneccessary in the context of a Web API.
    skip_before_action(:verify_authenticity_token)

    # rescue_from(<error-class>, with: <method-name>)
    # Use 'rescue_from' in a controller to prevent an error of class <error-class>
    # from crashing your Rails application and do something else instead.
    # The <method-name> will handle the error and do whatever you need instead of crashing.
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    private

    def authenticate_user!
        unless current_user.present?
            render json: { status: 401 }, status: 401
        end
    end

    def record_invalid error
        invalid_record = error.record
        errors = invalid_record.errors.map do |field, message|
            {
                type: error.class.to_s,
                record_type: record.class.to_s,
                field: field,
                message: message
            }
        end

        render(
            json: { status: 422, errors: errors },
            status: 422
        )
    end

end
