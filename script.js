alert("hi");
var schet = 0;
jQuery('button').on('click', function(){
    schet+=1;
    jQuery('h2').html(schet);
});