var controller = Leap.loop({enableGestures: true}, function(frame){
  if(frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
      if(gesture.type != 'swipe')return;
      var isVertical = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
      if(isVertical){

        if(Math.abs(gesture.direction[0])<0.75)return;

        if(gesture.direction[0]>0){
          console.log('left');
        }else{
          console.log('right')
        }
      }
    });
  }
});