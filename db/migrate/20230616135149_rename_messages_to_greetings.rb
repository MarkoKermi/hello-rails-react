class RenameMessagesToGreetings < ActiveRecord::Migration[7.0]
  def change
    rename_table :messages, :greetings
    rename_column :greetings, :content, :message
  end
end
