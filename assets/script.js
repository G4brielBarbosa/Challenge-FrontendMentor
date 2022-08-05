$(document).ready(() =>{
    var input = $("#email")
    var button = $('.arrow');
    $('.pError').hide();
    $('.iconError').hide();
    button.click(() => {

        var user = input.val().substring(0, input.val().indexOf("@"))
        var domain = input.val().substring(input.val().indexOf("@") + 1, input.val().length)

        if((user.length >= 1) &&
            (domain.length >= 3) &&
            (user.search("@") == -1) &&
            (domain.search("@") == -1)&&
            (user.search(" ") == -1) &&
            (domain.search(" ") == -1) &&
            (domain.search(".") != -1) &&
            (domain.indexOf(".") >= 1) &&
            (domain.lastIndexOf(".") < domain.length -1)){
                $('.pError').hide();
                $('.iconError').hide();
            }else{
                $('.pError').fadeIn();
                $('.iconError').fadeIn();
            }
    });
    
    
})
