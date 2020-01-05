$("#show").hide();
$(document).ready(function(){
  $("#hide").click(function(){
    $("#toc_contents").hide();
    $("#hide").hide();
    $("#show").show();
  });
  $("#show").click(function(){
    $("#toc_contents").show();
     $("#hide").show();
     $("#show").hide();
  });
});




$(document).ready(function() {                                                                          
    $(toc_contents).empty();                                                            
    
    var prevH2Item = null;                                                            
    var prevH2List = null;                                                            
    
    var index = 0;                                                                    
    $("h2, h4").each(function() {                                                     
    
        //insert an anchor to jump to, from the TOC link.            
        var anchor = "<a name='" + index + "'></a>";                 
        $(this).before(anchor);                                     
        
        var li     = "<li><a href='#" + index + "'>" + $(this).text() + "</a></li>"; 
        
        if( $(this).is("h2") ){                                     
            prevH2List = $("<ol></ol>");                
            prevH2Item = $(li);                                     
            prevH2Item.append(prevH2List);                          
            prevH2Item.appendTo("#toc_contents");                        
        } else {                                                    
            prevH2List.append(li);                                  
        }                                                           
        index++;                                                    
    });                                                             
    
});                   
