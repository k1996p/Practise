$(document).ready(function () {
    $("#Submit").click(function () {
      const fname = $('#firstName').val();
      const lname = $('#lastName').val();
      const person = {fname, lname};
        console.log(person);
      const json = JSON.stringify(person);
      console.log(json);
      $("#root").text(json); 
    });
    $("#onJSObject").click(function () {
        const obj = JSON.parse(json);
        console.log(obj);
        $("#root").text(obj.firstName+" "+obj.lastName); 
    });
});