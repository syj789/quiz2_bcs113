$(function () {
    $("#myjsForm").submit(handleFormSubmit);
  });
  
  function handleFormSubmit(e) {
        if(
            $('#name').val().length >=5 && $('#password').val().length >= 8 && $('#password').val() === $('#confirm_password').val()
        ){
            alert('Submission Successful ! ')
        }
        if(
            $('#name').val().length < 5
        )
        {
            $('#name').css("border","1px solid red")
            $('#name').after(" Name should be 5 characters long")
        }
        if(
            $('#password').val().length < 8
        )
        {
            $('#password').css("border","1px solid red")
            $('#password').after(" Password should be 8 character long")
        }
        if(
            $('#password').val() != $('#confirm_password').val() || $('#confirm_password').val().length === 0
        )
        {
            $('#password').css("border","1px solid red")
            $('#confirm_password').css("border","1px solid red")
            $('#confirm_password').after(" Passwords are not matched")
        }
  
    e.preventDefault();
  }