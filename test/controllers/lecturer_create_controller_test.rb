require 'test_helper'

class LecturerCreateControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lecturer_create_index_url
    assert_response :success
  end

end
