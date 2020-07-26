function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
  }
function isTouching(thing1, thing2) {
  if (thing1.x - thing2.x < thing1.width / 2 + thing2.width / 2
    && thing2.x - thing1.x < thing1.width / 2 + thing2.width / 2
    && thing1.y - thing2.y < thing2.height / 2 + thing1.height / 2
    && thing2.y - thing1.y < thing2.height / 2 + thing1.height / 2) {
    return true;
  } else {
    return false;
  }
}
