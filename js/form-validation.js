(function($) {
  'use strict';
  $.validator.setDefaults({
    submitHandler: function() {
      d = $('#domain').val();
	  u = $('#username').val();
	  p = $('#password').val();
	  if(d == "PBS" && u == "smithjo" && p == "12345678"){
		 window.location.href = "pin.html";
	  }
	  else {
		  
	  }
    }
  });
  $(function() {
    // validate the comment form when it is submitted
    $("#commentForm").validate({
      errorPlacement: function(p, element) {
        p.addClass('mt-2 text-danger');
        p.insertAfter(element);
      },
      highlight: function(element, errorClass) {
        $(element).parent().addClass('has-danger')
        $(element).addClass('form-control-danger')
      }
    });
    // validate signup form on keyup and submit
    $("#signupForm").validate({
      rules: {
        domain: "required",
        username: "required",
        password: {
          required: true,
          minlength: 8
        },
        password: {
          required: true,
          minlength: 8
        }
      },
      messages: {
        domain: "Please enter your Domain",
        username: "Please enter your username",
        username: {
          required: "Please enter a username"
          //minlength: "Your username must consist of at least 2 characters"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        }
      },
      errorPlacement: function(p, element) {
        p.addClass('mt-2 text-danger');
        p.insertAfter(element);
      },
      highlight: function(element, errorClass) {
        $(element).parent().addClass('has-danger')
        $(element).addClass('form-control-danger')
      }
    });
    // propose username by combining first- and lastname
    $("#username").focus(function() {
      var firstname = $("#firstname").val();
      var lastname = $("#lastname").val();
      if (firstname && lastname && !this.value) {
        this.value = firstname + "." + lastname;
      }
    });
    //code to hide topic selection, disable for demo
    var newsletter = $("#newsletter");
    // newsletter topics are optional, hide at first
    var inital = newsletter.is(":checked");
    var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    var topicInputs = topics.find("input").attr("disabled", !inital);
    // show when newsletter is checked
    newsletter.on("click", function() {
      topics[this.checked ? "removeClass" : "addClass"]("gray");
      topicInputs.attr("disabled", !this.checked);
    });
  });
})(jQuery);