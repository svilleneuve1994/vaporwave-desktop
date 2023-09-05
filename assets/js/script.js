"use strict";

(function ($) {
  $( ".window" ).dialog({
    autoOpen: false,
    width: 700,
    height: 600,
    classes: {
      "ui-dialog": "ui-widget ui-widget-content browser-window",
      "ui-dialog-titlebar": "ui-helper-clearfix ui-draggable-handle browser-titlebar",
      "ui-dialog-title": "browser-title",
      "ui-dialog-titlebar-close": "browser-titlebar-close-btn",
      "ui-dialog-content": "ui-widget-content browser-content",
    },
    // resizeStop: function( event, ui ) {
    //   let content = $( ".browser-window div:nth-child(2)" );
    //   content.each(function( i ) {
    //     console.log( content[i] );
    //     content[i].style.width = "100%";
    //     console.log("Adjusted");
    //   });
    // }
  });

  $( ".decorative" ).dialog({
    width: 'auto',
    autoOpen: true,
    resizable: true,
    classes: {
      "ui-dialog": "ui-widget ui-widget-content browser-window",
      "ui-dialog-titlebar": "ui-helper-clearfix ui-draggable-handle browser-titlebar",
      "ui-dialog-title": "browser-title",
      "ui-dialog-titlebar-close": "browser-titlebar-close-btn",
      "ui-dialog-content": "ui-widget-content browser-content",
    },
    resizeStart: function( event, ui ) {
      let content = $( ".browser-window div:nth-child(2)" );
      content.each(function( i ) {
        console.log( content[i] );
        content[i].style.width = "100%";
        // content[i].style.height = "calc(100% - 44px - 28px)";
        console.log("Adjusted");
      });
    }
  });

  $( "#weather-window" ).dialog({
    position: { my: "center center", 
                at: "left+20% center+20%", 
                of: $(".homepage") }
  });

  $( "#upgrade-window" ).dialog({
    width: 264,
    height: 290,
    position: { my: "bottom", 
                at: "right top+10%", 
                of: $("#weather-window") }
  });

  $( "#plants-window" ).dialog({
    width: 270,
    height: 314,
    position: { my: "right bottom", 
                at: "right-10% bottom-10%", 
                of: $(".homepage") }
  });

  $( "#meme-window" ).dialog({
    width: 402,
    height: 425,
    position: { my: "right top", 
                at: "right-15% top+5%", 
                of: $(".homepage") }
  });

  
  $( "#fish-window" ).dialog({
    position: { my: "right top", 
                at: "left+25% bottom-15%", 
                of: $("#meme-window") }
  });

  $( ".browser-titlebar-close-btn" ).button({
    classes: {
      // "ui-button": "ui-widget ui-button-icon-only",
      "ui-button-icon": "browser-titlebar-close",
    }
  });

  $( ".ui-button-icon" ).removeClass("ui-icon-closethick");

  let img = $("#recycle-icon img")
  $( "#recycle-icon" ).click(function( event ) {
    img.effect( "shake", {distance: 3} );
    img.attr("src", "assets/images/desktop-icons/bin72.png");
    event.preventDefault();
  });

  $( "#file-icon" ).click(function( event ) {
    $( "#file-window" ).dialog( "open" );
    event.preventDefault();
  });

  $( "#email-icon" ).click(function( event ) {
    $( "#email-window" ).dialog( "open" );
    event.preventDefault();
  });

  $( "#music-icon" ).click(function( event ) {
    $( "#music-window" ).dialog( "open" );
    event.preventDefault();
  });

  $( "#taskbar-weather" ).click(function( event ) {
    $( "#weather-window" ).dialog( "open" );
    event.preventDefault();
  });

  $( "#taskbar-fish" ).click(function( event ) {
    $( "#fish-window" ).dialog( "open" );
    event.preventDefault();
  });

  $( "#taskbar-upgrade" ).click(function( event ) {
    $( "#upgrade-window" ).dialog( "open" );
    event.preventDefault();
  });

  $( "#taskbar-plants" ).click(function( event ) {
    $( "#plants-window" ).dialog( "open" );
    event.preventDefault();
  });

  $( "#taskbar-meme" ).click(function( event ) {
    $( "#meme-window" ).dialog( "open" );
    event.preventDefault();
  });

  let menu = $("#start-menu").menu().hide();

  $( "#taskbar-start" ).click(function() {
      menu.toggle();

      menu.position({
            my: "left top",
            at: "left bottom",
            of: this
      });

      $( document ).one( "click", function() {
            menu.hide();
      });

      return false;
  });

  $( "#settings-darkmode" ).click(function() {
    let theme = $( "#current-theme" ).text()
    $( "html" ).attr("data-theme", theme);
    
    if (theme === "darkmode") {
      $( "#current-theme" ).text("lightmode")
    } else {
      $( "#current-theme" ).text("darkmode")
    }
  })

  
  $( "#logoff" ).click(function() {
    let overlay = $('<div></div>');  
    $( "body" ).append(overlay);
    overlay.fadeIn().addClass('overlay-styles');

    let logInHeader = $('<div></div>')
    logInHeader.addClass('login-header'); 
    logInHeader.text('LOG IN');

    let userInput = $('<input />')
    .attr('type', 'text')
    .attr('value', 'tempestTypist')
    .addClass('login-body__email'); 

    let passInput = $('<input />')
    .attr('type', 'password')
    .attr('value', 'password')
    .addClass('login-body__password'); 

    let logInBtn = $("<button></button>");
    logInBtn.text('Log In...');
    logInBtn.addClass('login-body__submit');                
    logInBtn.on('click', function(){
        overlay.remove();
        overlayContent.remove();
    });

    let logInForm = $('<form>')
    .append(userInput)
    .append(passInput)
    .append(logInBtn)
    logInForm.addClass('login-body'); 

    let overlayContent = $('<div>')
    .addClass('overlay-content-styles login-card')
    .append(logInHeader)
    .append(logInForm)

    overlay.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
    function() {     
        $('body').append(overlayContent); 
    }
);   
  })
  
  $( "#shutdown" ).click(function() {
    window.close()
  })

})(jQuery);