class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :body
      t.boolean :is_done, default: false
      t.datetime :due_date

      t.timestamps
    end
  end
end
