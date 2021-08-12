class AddBackgroundUrlToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :background_url, :string
  end
end
