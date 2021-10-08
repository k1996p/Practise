$(document).ready(function () {
    $('button').click(function () {

        var addHobbyToList = $('#input').val();
        $('#list').append('<li>' + addHobbyToList + '</li>');
        return false;
    });
});