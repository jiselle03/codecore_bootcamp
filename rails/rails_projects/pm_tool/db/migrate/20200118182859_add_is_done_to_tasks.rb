class AddIsDoneToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :is_done, :boolean, default: false
  end
end
