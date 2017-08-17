$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

$("#coffee > div:gt(0)").hide();

setInterval(function() {
  $('#coffee > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#coffee');
}, 3000)

$("#bread > div:gt(0)").hide();

setInterval(function() {
  $('#bread > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#bread');
}, 3000);

$("#pastries > div:gt(0)").hide();

setInterval(function() {
  $('#pastries > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#pastries');
}, 3000);