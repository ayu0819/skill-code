class GoalController < ApplicationController
  def form
  end
  def index
    @goal = Goal.find_by(id: params[:id])
  end
  def create
    @goal = Goal.new(description: params[:description])
    @goal.save 
    @goal = Goal.new(title: params[:title])
    @goal.save 
    redirect_to("/users/home")
  end
  
end
