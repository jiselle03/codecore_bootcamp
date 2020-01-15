class LikesController < ApplicationController
    before_action :authenticate_user!
    before_action :find_review, only: [:create]
    before_action :authorize!, only: [:create]

    def create
        like = Like.new(user: current_user, review: @review)

        if like.save
            flash[:success] = "Review liked"
        else
            flash[:danger] = like.errors.full_messages.join(", ")
        end
        redirect_to product_path(@review.product)
    end

    def destroy
        like = Like.find params[:id]
        if can? :destroy, like
            like.destroy
            flash[:success] = "Review unliked"
            redirect_to product_path(like.review.product)
        else
            flash[:alert] = "Can't delete like!"
        end
    end

    private

    def find_review
        @review = Review.find params[:review_id]
    end

    def authorize!
        unless can? :like, @review
            flash[:danger] = "You can't like your own review." 
            redirect_to product_path(@review.product)
        end
    end

end
