require 'test_helper'

class LecturerVideoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lecturer_video_index_url
    assert_response :success
  end

end
