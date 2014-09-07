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
  $count = 0;
  $.get(chrome.extension.getURL("prototype/sidebar.html"), function(data){

    $('body').append('<section id="notifymecontainer" class="notify-me-leap"></section>');
    $('#notifymecontainer.notify-me-leap').html(data);

    $('#notifymecontainer').hide();

    loadjscssfile(chrome.extension.getURL("prototype/css/reset.css"), "css");
    loadjscssfile(chrome.extension.getURL("prototype/css/bootstrap.css"), "css");
    loadjscssfile(chrome.extension.getURL("prototype/css/bootstrap-reset.css"), "css");
    loadjscssfile(chrome.extension.getURL("prototype/assets/font-awesome/css/font-awesome.css"), "css");
    loadjscssfile(chrome.extension.getURL("prototype/css/style.css"), "css");
    loadjscssfile(chrome.extension.getURL("prototype/css/style-responsive.css"), "css");
  });

});

var controller = Leap.loop({enableGestures: true}, function(frame){
  if (frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
      if (gesture.type != 'swipe') return;
      var isVertical = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
      if(isVertical){

        if(Math.abs(gesture.direction[0])<0.10)return;

        if(gesture.direction[0]>0){
          $('#notifymecontainer').show({duration:400});
        } else {
          $('#notifymecontainer').hide({duration:400});
        }
      }else{
        $('#notifymecontainer').scrollTop($('#notifymecontainer').scrollTop()-5*gesture.direction[1]*10);
      }
    });
  }
});

document.onclick = function() {
  console.log("hi");
  $count++;
  if ($count % 2 == 1)
    $('#notifymecontainer').show({duration:400});
  else
    $('#notifymecontainer').hide({duration:400});
};


