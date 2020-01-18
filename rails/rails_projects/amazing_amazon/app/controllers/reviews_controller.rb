class ReviewsController < ApplicationController
    before_action :authenticate_user!
    
    def create
        @product = Product.find params[:product_id]
        @new_review = Review.new review_params
        @new_review.user = current_user
        @new_review.product = @product

        if @new_review.save
            ReviewMailer.new_review(@new_review).deliver_later(wait: 1.minute)
            redirect_to product_path(@product)
        else
            @reviews = @product.reviews.order(created_at: :desc)
            render 'products/show'
        end
    end

    def destroy
        @review = Review.find params[:id]
        if can? :crud, @review
            @review.destroy
            redirect_to product_path(@review.product)
        else
            redirect_to root_path, alert: 'Not Authorized'
        end
    end

    def edit
        @product = Product.find params[:id]
        @review = Review.find params[:id]
    end

    def update
        @review = Review.find params[:id]
        if @review.update review_params
            flash[:notice] = 'Review updated Successfully'
            redirect_to product_path(@review.product)
        else
            render 'products/show'
        end
    end

    def toggle_hidden
        @review = Review.find params[:id]

        @review.is_hidden == true ? @review.is_hidden = false : @review.is_hidden = true

        if @review.save
            flash[:notice] = 'Review updated Successfully'
            redirect_to product_path(@review.product)
        else
            render 'products/show'
        end

    end

    private

    def review_params
        params.require(:review).permit(:body, :rating)
    end
end
