//makes the dropdown menu appear
$('.dropdown-toggle').dropdown()

//for making the dropdown items show up when clicked
$('#pizzaTab').on('click', function(){
    $('#portfolio').tab('show')
})
