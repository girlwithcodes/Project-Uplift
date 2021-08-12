class AddBackgroundUrlToBoard < ActiveRecord::Migration[6.1]
  def change
    add_column :boards, :background_url, :string
  end
end
