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

  $( "#recycle-icon" ).click(function( event ) {
    $( "#recycle-window" ).dialog( "open" );
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

  let menu = $("ul#start-menu").menu().hide();

  $("#taskbar-start").click(function() {
        menu.show().position({
              my: "left top",
              at: "left bottom",
              of: this
        });
        $( document ).one( "click", function() {
              menu.hide();
        });
        return false;
  });

})(jQuery);