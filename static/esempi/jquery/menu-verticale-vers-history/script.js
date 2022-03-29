$(document).ready(function () {
  /* Cambiare l'effetto da utilizzare */
  $.easing.def = 'easeOutBounce'

  /* Associare una funzione all'evento click sul link */
  $('li.title img').click(function (e) {
    /* Trovare l'elenco a discesa che corrisponde al menu cliccato: */
    var subMenu = $(this).parent().next()

    /* Trovare il sotto menu che corrisponde alla voce cliccata */
    $('.sub-menu').not(subMenu).slideUp('slow')
    subMenu.stop(false, true).slideToggle('slow')

    /* Prevenire l'evento predefinito (che sarebbe di seguire il collegamento) */
    e.preventDefault()
  })
})
