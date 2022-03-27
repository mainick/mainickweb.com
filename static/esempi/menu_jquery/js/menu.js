/**
 * @author Maico Orazio
 */

/**
 * @author Maico Orazio
 */

$(document).ready(function () {
  //
  // Nascondo tutti i menu principali
  $('#menu1 > ul')
    .animate({ bottom: '0px' }, { queue: false, duration: 350 })
    .css('display', 'none')
  $('#menu2 > ul')
    .animate({ bottom: '0px' }, { queue: false, duration: 350 })
    .css('display', 'none')
  $('#menu3 > ul')
    .animate({ bottom: '0px' }, { queue: false, duration: 350 })
    .css('display', 'none')

  $('#menu1').hover(function () {
    //
    // effetto uscita altri menu
    $('#menu2 > ul')
      .animate({ top: '-200px' }, { queue: false, duration: 350 })
      .css('display', 'none')
    $('#menu3 > ul')
      .animate({ top: '-200px' }, { queue: false, duration: 350 })
      .css('display', 'none')
    //
    // effetto entrata menu
    $('#menu1 > ul')
      .animate({ top: '33px' }, { queue: false, duration: 350 })
      .css('display', 'block')
  })

  $('#menu2').hover(function () {
    //
    // effetto uscita altri menu
    $('#menu1 > ul')
      .animate({ top: '-200px' }, { queue: false, duration: 350 })
      .css('display', 'none')
    $('#menu3 > ul')
      .animate({ top: '-200px' }, { queue: false, duration: 350 })
      .css('display', 'none')
    //
    // effetto entrata menu
    $('#menu2 > ul')
      .animate({ top: '33px' }, { queue: false, duration: 350 })
      .css('display', 'block')
  })

  $('#menu3').hover(function () {
    //
    // effetto uscita altri menu
    $('#menu1 > ul')
      .animate({ top: '-200px' }, { queue: false, duration: 350 })
      .css('display', 'none')
    $('#menu2 > ul')
      .animate({ top: '-200px' }, { queue: false, duration: 350 })
      .css('display', 'none')
    //
    // effetto entrata menu
    $('#menu3 > ul')
      .animate({ top: '33px' }, { queue: false, duration: 350 })
      .css('display', 'block')
  })
})
