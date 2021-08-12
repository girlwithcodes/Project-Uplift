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

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_board
      @board = Board.find(params[:id])
    end

end
