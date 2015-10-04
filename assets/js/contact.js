$("#contact").submit(function(event){
  // cancels the form submission
  event.preventDefault();
  submitForm();
});
function submitForm(){
  // Initiate Variables With Form Content
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  $.ajax({
    type: "POST",
    url: "assets/contact.php",
    data: "name=" + name + "&email=" + email + "&message=" + message,
    success: function(text){
      if (text == "success"){
          formSuccess();
      }
    },
    error: function(xhr){
      formError();
    }
  });
}
function formSuccess(){
  $("#success").removeClass("hidden");
}
function formError(){
  $("#error").removeClass("hidden");
}