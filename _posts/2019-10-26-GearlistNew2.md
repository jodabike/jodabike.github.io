---
layout: article
title: Gearlist 2.0
article_header:
  type: cover
  image:
    src: /assets/images/cover.jpg
cover: https://i.ytimg.com/vi/yyPFT3Ajkzc/maxresdefault.jpg
---




<html>
<head>


<link rel="stylesheet" type="text/css" href="/assets/css/links.css">
<link rel="stylesheet" type="text/css" href="/assets/css/textdeco.css">
<link rel="stylesheet" type="text/css" href="/assets/css/enumerate.css">
<link rel="stylesheet" type="text/css" href="/assets/css/toc.css">



<!--
<style>

/*
a:link {
  text-decoration: none;
  color: red;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}

*/
/* --- Numbering for Lists--- */

OL { counter-reset: item }
OL>LI { display: block }
OL>LI:before { content: counters(item, ".") " "; counter-increment: item }

/* --- Text color etc.. ---  */
      /*p { 
        font-size:14px; 
        color:#538b01; 
        font-weight:bold; 
        font-style:italic;
      }
*/
      .good {
        color: green;
      }
      .ok {
        color: orange;
      }
      .bad {
        color: red;
      }
      
      .uline {
      	text-decoration: underline;
      }


/* --- Numbering for headlines */
    body {
        counter-reset: h2counter;
    }
    h1 {
        counter-reset: h2counter;
    }
    
    h2:before {
        content: counter(h2counter) ".\0000a0\0000a0";
        counter-increment: h2counter;

    }
    
    h2 {
    	counter-reset: h3counter;
    }
    h2.nocount:before {
        content: none;
        counter-increment: none;
    }
    
    h3:before {
        content: counter(h2counter) "." counter(h3counter) ".\0000a0\0000a0";
        counter-increment: h3counter;
    }
    h3.nocount:before {
        content: none;
        counter-increment: none;
    }
    


#toc_container {
    background: #f9f9f9 none repeat scroll 0 0;
    border: 1px solid #aaa;
    display: table;
    font-size: 95%;
    margin-bottom: 1em;
    padding: 20px;
    width: auto;
    a:link: {text-decoration: none;};
}

.toc_title {
    font-weight: 700;
    text-align: center;
}

#toc_container li, #toc_container ul, #toc_container ul li{
    list-style: outside none none !important;
}

OL { counter-reset: item }
OL>LI { display: block }
OL>LI:before { content: counters(item, ".") " "; counter-increment: item }




</style>
-->

<script src="/assets/js/jquery-3.4.1.min.js"></script>
<script src="/assets/js/tocSH.js"></script>

<!--
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


<script>

$("#hide").hide();
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
    $("h2, h3").each(function() {                                                     
    
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
</script>
-->

</head>
{% include gearlist.html %}

