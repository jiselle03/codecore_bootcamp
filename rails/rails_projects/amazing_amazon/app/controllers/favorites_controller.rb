class FavoritesController < ApplicationController
    before_action :authenticate_user!
    before_action :find_product, only: [:create]
    before_action :authorize!, only: [:create]

    def create
        favorite = Favorite.new(user: current_user, product: @product)

        if favorite.save
            flash[:success] = "Product liked"
        else
            flash[:danger] = favorite.errors.full_messages.join(", ")
        end
        redirect_to @product
    end

    def destroy
        favorite = Favorite.find params[:id]
        if can? :destroy, favorite
            favorite.destroy
            flash[:success] = "Product unfavorited"
            redirect_to product_path(favorite.product)
        else
            flash[:alert] = "Can't delete favorite!"
        end
    end

    private

    def find_product
        @product = Product.find params[:product_id]
    end

    def authorize!
        unless can? :favorite, @product
            flash[:danger] = "You can't favorite your own product." 
            redirect_to @product
        end
    end
end
