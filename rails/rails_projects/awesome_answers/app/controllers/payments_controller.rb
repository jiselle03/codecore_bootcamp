class PaymentsController < ApplicationController
    def new
        @gift = Gift.find params[:gift_id]
    end

    def create
        @gift = Gift.find params[:gift_id]
        charge = Stripe::Charge.create({
            amount: (@gift.amount * 100).to_i,
            currency: 'cad',
            source: params[:stripe_token],
            description: "Charge for gift #{@gift.id} by #{current_user.id}"
        })
        @gift.update(txn_id: charge.id)
        redirect_to @gift.receiver, notice: "Thanks for completing your payment."
    
        rescue => e
            puts "ERROR #{e.message}"
            flash.now[:alert] = "There was a problem handling your payment. Please try again."
            render :new

    end
end
