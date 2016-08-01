/**
 * Created by brendan on 7/23/16.
 */
$(document).ready(function(){

    $('.bubbleup').on('click', function(){
        $(this).toggleClass('bubble pop');
        $('.bubble-number').css('display','block');
    });



});