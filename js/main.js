$(document).ready(function(){

  // Toggle nav
  $('.navbar-toggle').click(function() {
    $('.navbar-collapse').slideToggle();
  });

  // Open modal
  $('.open-modal').click(function() {
    $('.modal').addClass('in');
    $('body').addClass('no-scroll');
  });

  $(document).click(function(event) {
    if ($(event.target).closest('.box-modal').length || $(event.target).closest('.open-modal').length 
      || $(event.target).closest('.certificate').length || $(event.target).closest('.private').length ) return;
      $('.modal').removeClass('in');
      $('body').removeClass('no-scroll');
      event.stopPropagation();
  });

  // Tabs
  $(".tab_item").not(":first").hide();
  $(".box .tab").click(function() {
    $(".box .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

});

function handleOutboundLinkClick(linkName) {
  console.log('Link cliked: ' + linkName);
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: linkName
  });
}
