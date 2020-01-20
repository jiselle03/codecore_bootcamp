require 'rails_helper'

RSpec.describe Project, type: :model do
  describe "validates" do
    it("should require a title") do
      project = Project.new
      project.valid?
      expect(project.errors.messages).to(have_key(:title))
    end

    it("should require a unique title") do
      persisted_project = FactoryBot.create(:project)
      project = Project.new(title: persisted_project.title)
      project.valid?
      expect(project.errors.messages).to(have_key(:title))
      expect(project.errors.messages[:title]).to(include('has already been taken'))

    end

    it("should have a due date after created at") do
      project = FactoryBot.create(:project)
      project.due_date = "2017-08-08 00:00:00"
      project.valid?
      expect(project.errors.messages).to have_key(:due_date)
    end

  end
end
