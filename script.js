
var energy = localStorage.getItem('energy_saved') || 300;
var i = localStorage.getItem('i_saved') || 1;
var up = localStorage.getItem('up_saved') || 100;;
let a = localStorage.getItem('a_saved') || 0;
var elb = localStorage.getItem('elb_saved') || 1;
var ba = localStorage.getItem('ba_saved') || energy/ 3;









jQuery('h2').html( Number (a));
$("#cen").html(`цена улучшения: ${up}`);
jQuery('.poi').on('click', function(){
    ba = energy / 3;
    a = Number(a)
    i = Number(i)
    a +=i;
    
    energy= Number(energy)

    energy -=i;
    localStorage.setItem('energy_saved', Number (energy));
    localStorage.setItem('a_saved', Number (a));
 

    jQuery('h2').html( Number (a));
});


$("#up").mousedown(function() {
    if (a >= up){
        a -= up;
        localStorage.setItem('a_saved', Number (a));

        up *=2
        localStorage.setItem('up_saved', Number (up));
        i+=1;
        localStorage.setItem('i_saved', Number (i));

    }

        $("#cen").html(`цена улучшения: ${up}`);
        jQuery('h2').html(a);
    

});
//localStorage.clear();
while(true){
     
    energy++;
    ba = energy / 3;
    $("#greenBar").width(`${ba}%`);
    $("h3").html(energy); 



    setTimeout(start, 1000); 
}


