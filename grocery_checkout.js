(function($) {
  Drupal.behaviors.grocery_checkout = {
    attach: function (context, settings) {
      var quantities = JSON.parse(settings.grocery_checkout.quantities);
      $.each(quantities, function (key, data) {
        $("#edit-submitted-sku-multiple-product-quantities-" + key).val(data);
        $("#edit-submitted-sku-multiple-product-quantities-" + key).attr("readonly", "readonly");
      });
    }
  };

})(jQuery);
