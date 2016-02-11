jQuery(document).ready(function() {
    jQuery('#menu').click(function(e) {
        e.preventDefault();
        jQuery('nav ol').toggle('blind');
    });

    jQuery('.letter').toggle('explode');
});
