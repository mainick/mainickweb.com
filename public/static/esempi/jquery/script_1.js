$(document).ready(function () {
  // link inserito alla fine dell'elemento clonato che permette di eliminarlo
  var removeLink =
    ' <a class="remove" href="#" onclick="$(this).parent().slideUp(function(){ $(this).remove() }); return false">remove</a>'

  // chiamata permette di clonare il paragrafo con all'interno il campo di testo del recapito
  $('a.add').relCopy({ append: removeLink })
})
