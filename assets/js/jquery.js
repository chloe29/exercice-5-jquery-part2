$(function(){
  $('#lastName, #firstName').focus(function(){
    $('#lastName, #firstName').css('border', '1px solid green');
  });
  // lorsque ma souris est sur le champs à remplir, le contour est vert
  $('#lastName, #firstName').focusout(function(){
    $('#lastName, #firstName').css('border', '1px solid red');
  })
  // lorsque ma souris sort du champs, le contour est rouge
});
