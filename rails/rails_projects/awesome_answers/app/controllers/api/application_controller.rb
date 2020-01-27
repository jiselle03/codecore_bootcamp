class Api::ApplicationController < ApplicationController
    # When making POST, DELETE, and PATCH requests to our controllers,
    # Rails requires that an authenticity token is included as part of
    # our params. Normally Rails will add this to any form that generates
    # form helper methods i.e. form_with, form_for, form_tag.
    # This prevents third parties from making such requests to our Rails app.
    # It's a security measure that is unneccessary in the context of a Web API.
    skip_before_action(:verify_authenticity_token)
end
