Rails.application.routes.draw do
  root :to => "homes#index"

  get "home" => "homes#index"

  get "admin-home" => "admin_homes#index"
  get "admin-create" => "admin_create_users#index"

  get "lecturer-home" => "lecturer_homes#index"
  get "lecturer-create" => "lecturer_create#index"
  get "lecturer-edit" => "lecturer_edit#index"
  get "lecturer-view" => "lecturer_view#index"
  get "lecturer-video" => "lecturer_video#index"

  get "student-home" => "student_homes#index"
end
