function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

$(document).ready(function(){
  $.get(chrome.extension.getURL("prototype/sidebar.html"), function(data){

    $('body').append('<section id="notifymecontainer" class="notify-me-leap"></section>');
    $('#notifymecontainer.notify-me-leap').html(data);

    loadjscssfile(chrome.extension.getURL("prototype/css/bootstrap.css"), "css");
    loadjscssfile(chrome.extension.getURL("prototype/css/bootstrap-reset.css"), "css");
    loadjscssfile(chrome.extension.getURL("prototype/assets/font-awesome/css/font-awesome.css"), "css");
    loadjscssfile(chrome.extension.getURL("prototype/css/navbar-fixed-top.css"), "css");
    loadjscssfile(chrome.extension.getURL("prototype/css/style.css"), "css");
    loadjscssfile(chrome.extension.getURL("prototype/css/style-responsive.css"), "css");

    loadjscssfile(chrome.extension.getURL("prototype/js/jquery.js"), "js");
    loadjscssfile(chrome.extension.getURL("prototype/js/bootstrap.min.js"), "js");
  });
});

var controller = Leap.loop({enableGestures: true}, function(frame){
  if (frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
      if (gesture.type != 'swipe') return;
      var isVertical = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
      if(isVertical){

        if(Math.abs(gesture.direction[0])<0.75)return;

        if(gesture.direction[0]>0){
          console.log('left');
          
        } else {
          console.log('right');
        }
      }
    });
  }
});

document.onclick = function() {
  console.log("hi");
};


