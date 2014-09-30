function tab(selectedtab) {    
  //content
    var s_tab_content = "tab_content_" + selectedtab;   
    var contents = document.getElementsByTagName("div");
    for(var x=0; x<contents.length; x++) {
        name = contents[x].getAttribute("name");
        if (name == 'tab_content') {
            if (contents[x].id == s_tab_content) {
            contents[x].style.display = "block"; 
            contents[x].class = "tab_content_active";
            alert("tab_content_active" + selectedtab + "set");                       
            } else {
            contents[x].style.display = "none";
            contents[x].class = "tab_content";
            }
        }
    }   
    // tabs
    
    var s_tab = "tab_" + selectedtab;  
    var tabs = document.getElementsByTagName("a");
    for(var x=0; x<tabs.length; x++) {
        name = tabs[x].getAttribute("name");
        if (name == 'tab') {
            if (tabs[x].id == s_tab) {
                alert("")
            tabs[x].className = "active";                       
            } else {
            tabs[x].className = "";
            }
        }
    }     
}



$('login').click(function (e) {
    // body...
    alert("clicked..");
    e.preventDefault();
    $('loginD').animate({
        'margin:left' : (parseInt($(this).parent().css('width'))-
            parseInt($('#loginD').css('width'))) + 'px'
    });
});
/*
var h1 = document.getElementbyId("loga");

h1.innerHTML = '<span>' + h1.innerHTML.split('').join('</span><span>') + '</span>' ;

*/


/**
$(document).ready(function(){
/*
    $("#loga").click(function(){
        $("#lg").toggle('slide',{direction : "right" },500 );
    });
    $("#logs").click(function  () {
        // body...
        $("loginD").toggle('slide',{direction : "right"}, 500);
        $("loginD").style.
    });

});


/*
$("#logs").click(function(){
    var effect = 'slide';
    var options = {direction : "right" };
    var duration = 500;
    $('#lg').toggle(effect,options,duration);
})
}*/
/*
function moveright() {
    // body...
    /*
    var objId = document.getElementbyId('logs');
    objId.style.left = parseInt(objId.style.left) + 10 + 'px';



}

*/
