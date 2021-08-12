class BoardsController < ApplicationController
  before_action :set_user, only: [:index, :create]
  before_action :set_board, only: [:show, :update, :destroy]

  #GET 'users/:user_id/boards'
  def index
    @boards = Board.where(user_id: @user.id)
    render json: @boards, status: :ok
  end

  #GET '/users/:user_id/boards/:id'
  def show
    render json: @board, status: :ok
  end

  #POST '/users/:user_id/boards'
  def create
    @board = board.new(board_params)
    if @board.save
      render json: @board, status: :created
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  #PUT '/users/:user_id/boards/:id'
  def update
    if @board.update(board_params)
      render json: @board, status: :ok
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  #DELETE '/users/:user_id/boards/:id'
  def destroy
    @board.destroy
    render json: "DELETED"
  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_board
      @board = Board.find(params[:id])
    end

    def board_params
      params.require(:board).permit(:name, :description, :cover_image_url, :background_color, :font, :font_color, :user_id, :background_url)
    end

end
