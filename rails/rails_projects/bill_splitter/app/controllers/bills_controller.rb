class BillsController < ApplicationController
    def new
    end

    def create
        amount = params[:amount].to_f
        tax = amount * (params[:tax].to_f / 100)
        tip = amount * (params[:tip].to_f / 100)
        number_of_people = params[:tip].to_i
        
        @payment = (amount + tax + tip).to_d.round(2) / number_of_people
        render :new
    end
end