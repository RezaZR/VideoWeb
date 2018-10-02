require 'test_helper'

class LecturerEditControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lecturer_edit_index_url
    assert_response :success
  end

end
