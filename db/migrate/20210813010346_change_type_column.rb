class ChangeTypeColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :posts, :type, :post_type
  end
end
