class PostsController < ApplicationController
  before_action :set_board, only: [:index, :create]

  before_action :set_post, only: [:show, :update, :destroy]

  #GET '/posts'
  def public_index
    @posts = Post.where(is_public: true)
    render json: @posts, status: :ok
  end

  #GET '/users/:user_id/boards/:board_id/posts'
  def index
    @posts = Post.where(board_id: @board.id)
    render json: @posts, status: :ok
  end

  #GET '/users/:user_id/boards/:board_id/posts/:id'
  def show
    render json: @post, status: :ok
  end

  #POST '/users/:user_id/boards/:board_id/posts'
  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  #PUT '/users/:user_id/boards/:board_id/posts/:id'
  def update
    if @post.update(post_params)
      render json: @post, status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  #DELETE '/users/:user_id/boards/:board_id/posts/:id'
  def destroy
    @post.destroy
    render json: "DELETED"
  end


  private

    def set_board
      @board = Board.find(params[:board_id])
    end

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:content, :image_url, :board_id, :post_type, :is_public, :background_url, :background_color, :font, :font_color)
    end
end
