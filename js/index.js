$(document).ready(function(){

  const bLazy = new Blazy({
    selector: '.b-lazy',
    offset: 1
  })


  // Nav Bar Drop Down On Mobile
  $('nav ul li:first-child').click(function(){
    console.log('hamburger menu clicked!')
    // $("ul li a").slideToggle();
    $('nav').toggleClass('open')

  })
  $('nav ul li a').click(function(){
    console.log('hamburger menu clicked!')
    // $("ul li a").slideToggle();
    $('nav').toggleClass('open')
  })
  // scroll tabs

  // Cache selectors
  var lastId, topMenu = $('#top-menu'),topMenuHeight = topMenu.outerHeight()+1,
    // All list items
    menuItems = topMenu.find('a'),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr('href'))
      if (item.length) {
        return item
      }
    })

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight
    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this
    })
    // Get the id of the current element
    cur = cur[cur.length-1]
    var id = cur && cur.length ? cur[0].id : ''

    if (lastId !== id) {
      lastId = id
      // Set/remove active class
      menuItems
        .parent().removeClass('active')
        .end().filter('[href=\'#'+id+'\']').parent().addClass('active')
    }
  })
  // To remember page: https://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll

  // scroll menu down  :)

  $('.menu li a').click(function(e) {
    e.preventDefault()
    var offset = 20 //Offset of 20px
    var element = $(this).attr('title')
    $('html, body').animate({
      scrollTop: $('#' + element).offset().top + offset
    }, 2000)
  })


  $('.greeting-section-img').click(function(e) {
    e.preventDefault()
    var offset = 20 //Offset of 20px
    $('html, body').animate({
      scrollTop: $('#portfolio-section').offset().top + offset
    }, 2000)
  })

  $('.fewd-scroll').click(function(e) {
    e.preventDefault()
    var offset = 20 //Offset of 20px
    $('html, body').animate({
      scrollTop: $('#fewd-section').offset().top + offset
    }, 2000)
  })

  // ********************** POP-UP WINDOW FOR PORTFOLIO SECTION **********************

  function deselect(e) {
    $(portfolio_box_popup_id).slideFadeToggle(function() {
      e.removeClass('selected')
    })
  }

  var portfolio_box_popup_id

  var portfolio_box_id

  $(function() {
    $('.portfolio-box').on('click', function() {
      if($(this).hasClass('selected')) {
        deselect($(this))
      } else {
        $(this).addClass('selected')

        portfolio_box_popup_id='#'+$(this).attr('id')+'-popup'
        // we're setting a variable to add the hash and get the id, and add the popup name,

        portfolio_box_id='#'+$(this).attr('id')

        $(portfolio_box_popup_id).slideFadeToggle()

        var bLazy = new Blazy({
          selector: '.b-lazy',
          offset: 1
        })

      }
      return false
    })

    $('.close').on('click', function() {
      deselect($(portfolio_box_id))
      return false
    })

    $('.close-bottom').on('click', function() {
      deselect($(portfolio_box_id))
      return false
    })
  })

  $.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback)
  }



  // nav background color change on scroll
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 225) {
        $('header').addClass('scrolled')
      } else {
        $('header').removeClass('scrolled')
      }
    })
  })

})
