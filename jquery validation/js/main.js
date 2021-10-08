$(document).ready(function(){
    $('#registration').validate({
        rules: {
            fname: {
                required: true,
                minlength:3,
                maxlength:11,
                nowhitespace: true
            },
            lname: {
                required: true,
                minlength:3,
                maxlength:11,
                nowhitespace: true
            },
            email: {
                required: true,
                email: true
            },
            phone:{
                required: true,
                minlength:10
            },
            gender: {
                required: true
            },
            hobbies: {
                required: true
            },
            city: {
                required: true
            }
        },
        messages: {
            fname: {
                required: 'Please enter first name!'
            },
            lname: {
                required: 'Please enter last name!'
            },
            email: {
                required: 'Please enter email!',
                //error message for the email field
                email: 'Please enter valid email!'
            },
            phone: {
                required: 'Please enter phone number!'
            },
            city: {
                required: 'Please select city!'
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents('.gender'));
            }
            else if (element.is(":checkbox")) {
                error.appendTo(element.parents('.hobbies'));
            }
            else {
                error.insertAfter(element);
            }
        }
    });
});