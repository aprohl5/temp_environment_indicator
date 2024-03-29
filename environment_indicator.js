(function ($) {

"use strict";

Drupal.behaviors.environmentIndicatorToolbar = {
  attach: function (context, settings) {
    if (typeof drupalSettings.environment_indicator != 'undefined') {
      // $('#toolbar-administration', context).css('background-color', drupalSettings.environment_indicator['toolbar-color']);
      $('#toolbar-administration .toolbar-bar', context).css('background-color', drupalSettings.environment_indicator['toolbar-color']);
      $('#toolbar-administration .toolbar-lining', context).css('background-color', changeColor(drupalSettings.environment_indicator['toolbar-color'], 0.15, false));
    };
  }
};
  
  // Drupal.behaviors.environment_indicatorAdminMenu = {
  //   attach: function (context, settings) {
  //     if (typeof(Drupal.admin) != 'undefined') {
  //       // Add the restyling behavior to the admin menu behaviors.
  //       Drupal.admin.behaviors['environment_indicator'] = function (context, settings) {
  //         $('#admin-menu, #admin-menu-wrapper', context).css('background-color', drupalSettings.environment_indicator['toolbar-color']);
  //         $('#admin-menu .bar', context).css('background-color', changeColor(drupalSettings.environment_indicator['toolbar-color'], 0.15, true));
  //         $('#admin-menu .bar ul li:not(.environment-switcher) a', context).css('background-color', drupalSettings.environment_indicator['toolbar-color']);
  //       };
  //     };
  //   }
  // };
  // 
Drupal.behaviors.environmentIndicatorSwitcher = {
  attach: function (context, settings) {
    $('#environment-indicator .environment-indicator-name, #toolbar-administration .environment-indicator-name-wrapper', context).bind('click', function () {
      $('#environment-indicator .item-list, #toolbar-administration .item-list', context).slideToggle('fast');
    });
    $('#environment-indicator.position-top.fixed-yes').once(function () {
      $('body').css('margin-top', '+=' + $('#environment-indicator.position-top.fixed-yes').height());
    });
    $('#environment-indicator.position-bottom.fixed-yes').once(function () {
      $('body').css('margin-bottom', '+=' + $('#environment-indicator.position-bottom.fixed-yes').height());
    });
  }
}

/**
 * Add the farbtastic tie-in.
 */
Drupal.behaviors.environmentIndicatorAdmin = {
  attach: function (context) {
    if (typeof Drupal.color != 'undefined') {
      var $placeholder = $('#environment-indicator-color-picker');
      if ($placeholder.length) {
        drupalSettings.environment_indicator_color_picker = $placeholder.farbtastic('#environment-indicator-form #edit-color');
      };
    };
  }
};

})(jQuery);