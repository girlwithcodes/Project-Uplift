class UsersController < ApplicationController
  before_action :authorize_request, only: [:verify]

  

  #POST '/users'
  def create
    user = User.new(user_registration_params)
    if user.save
      token = create_token(user.id)
      render json: {
        user: user.attributes.except("password_digest"),
        token: token
      }, status: :created
    else
      render json: user.errors, status: 422
    end
  end

  #POST '/users/login'
  def login
    user = User.find_by(email: user_login_params[:email])

    if user && user.authenticate(user_login_params[:password])
      token = create_token(user.id)
      render json: {
        user: user.attributes.except("password_digest"),
        token: token,
      }, status: :ok
    else
      render json: {error: "unauthorized"}, status: :unauthorized
    end
  end

  #GET '/users/verify'
  def verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end


  private

    def user_registration_params
      params.require(:user).permit(:username, :email, :password)
    end

    def user_login_params
      params.require(:user).permit(:email, :password)
    end

    def create_token(user_id)
      payload = {id: user_id, exp: 24.hours.from_now.to_i}
      JWT.encode(payload, SECRET_KEY)
    end
end
