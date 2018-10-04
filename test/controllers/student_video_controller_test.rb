require 'test_helper'

class StudentVideoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get student_video_index_url
    assert_response :success
  end

end
