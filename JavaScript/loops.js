//Repeating Steps: For Loops
for ( var pixel of Image.values()) {
  var newG = 255 - pixel.getGreen();
  pixel.setGreen(newG);
}