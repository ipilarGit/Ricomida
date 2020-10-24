$(document).ready(function () {

     $(function () {
          $('[data-toggle="tooltip"]').tooltip()
     })

     $('#color-rojo-ingredientes').dblclick(function () {
          $('#color-rojo-ingredientes').css('color', 'red');
     });

     $('#color-rojo-preparacion').dblclick(function () {
          $('#color-rojo-preparacion').css('color', 'red');
     });

     $('#titulo-panqueques').click(function () {
          $('#texto-panqueques').toggle('slow');
     });

     $('#titulo-tiramisu').click(function () {
          $('#texto-tiramisu').toggle('slow');
     });

     $('#titulo-plateada').click(function () {
          $('#texto-plateada').toggle('slow');
     });

})

/* 
(function () {
     var qs, js, q, s, d = document,
          gi = d.getElementById,
          ce = d.createElement,
          gt = d.getElementsByTagName,
          id = "typef_orm",
          b = "https://embed.typeform.com/";
     if (!gi.call(d, id)) {
          js = ce.call(d, "script");
          js.id = id;
          js.src = b + "embed.js";
          q = gt.call(d, "script")[0];
          q.parentNode.insertBefore(js, q)
     }
})() */