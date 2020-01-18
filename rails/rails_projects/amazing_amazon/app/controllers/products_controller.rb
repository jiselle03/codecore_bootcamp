class ProductsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_product, only: [:edit,:update,:show, :destroy]
    before_action :authorize!, only: [:edit, :update, :destroy]

    def new
        @product = Product.new
    end

    def create
        @product = Product.new product_params
        @product.user = current_user
        if @product.save # perform validation and save if successful
            ProductMailer.new_product(@product).deliver_later(wait: 1.minute)
            flash[:notice] = 'Product Added Successfully'
            redirect_to product_path(@product.id)
        else
            render :new
        end
    end

    def edit
        
    end

    def update
        if @product.update product_params
            flash[:notice] = 'Product updated Successfully'
            redirect_to product_path(@product.id)
        else
            render :edit
        end
    end

    def index
        if params[:tag]
            @tag = Tag.find_or_initialize_by(name: params[:tag])
            @products = @tag.products.order(created_at: :desc)
        else
            @products = Product.all.order(created_at: :desc)
        end
    end

    def show
        @new_review = Review.new
        @reviews = @product.reviews.order(created_at: :desc)
        @favorite = @product.favorites.find_by(user: current_user)
    end

    def destroy
        @product.destroy
        redirect_to products_path
    end

    def favorited
        @products = current_user.favorited_products.order('favorites.created_at DESC')
    end

    private

    def find_product
        @product = Product.find params[:id]
    end
    
    def product_params
        params.require(:product).permit(:title, :description, :price, :tag_names)
    end

    def authorize!
        unless can?(:crud, @product)
            redirect_to root_path, alert: 'Not Authorized'
        end
    end

end
