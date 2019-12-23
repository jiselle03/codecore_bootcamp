class ContactsController < ApplicationController
    def new
    end

    def create
        # All parameters from HTTP or URL come in a hash called 'params'
        # params is a hash with indifferent access meaning that you can
        # access values using string or symbol keys i.e params[:name] or params['name']
        @name = params[:name]
        @email = params[:email]
        @message = params[:message]
        # When we define instance variable in actions such as '@name' we can
        # access them in the associated view file
    end
end
