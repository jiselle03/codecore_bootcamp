class VotesController < ApplicationController
    before_action :authenticate_user!
    before_action :find_vote, only: [:update, :destroy]
    before_action :authorize!, only: [:update, :destroy]

    def create
        @review = Review.find params[:review_id]
        @vote = Vote.new(user: current_user, review: @review, is_up: params[:is_up])
        if can? :create, @vote
            if @vote.save
                flash[:success] = "Vote saved"
            else
                flash[:danger] = @vote.errors.full_messages.join(", ")
            end
        else
            flash[:danger] = "You can't vote on your own review." 
        end
        redirect_to product_path(@review.product)
    end

    def update
        if @vote.update vote_params
            flash[:success] = "Vote updated"
            redirect_to product_path(@vote.review.product)
        else
            render 'products/show'
        end
    end

    def destroy
        if can? :destroy, @vote
            @vote.destroy
            flash[:success] = "Vote removed."
            redirect_to product_path(@vote.review.product)
        else
            flash[:alert] = "Can't remove vote!"
        end
    end

    private

    def vote_params
        params.permit(:is_up)
    end

    def find_vote
        @vote = Vote.find params[:id]
    end

    def authorize!
        @review = Review.find params[:id]
        unless can? :vote, @review
            flash[:danger] = "You can't vote on your own review." 
            redirect_to product_path(@review.product)
        end
    end
end
