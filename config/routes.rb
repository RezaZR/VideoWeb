Rails.application.routes.draw do
  root :to => "homes#index"

  get "home" => "homes#index"

  get "admin_home" => "admin_homes#index"
  get "admin_create" => "admin_create_users#index"

  get "lecturer-home" => "lecturer_homes#index"

  get "student-home" => "student_homes#index"
end
