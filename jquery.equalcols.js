(function($) {

    $.fn.equalCols = function() {
        var $this = $(this);
        var height = 0;
        var maxHeight = 0;

        $this.css("height", "auto")
            .each(function() {

                height = this.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                    console.log(height + " " + maxHeight);
                }
            }).css("height", maxHeight);
    };

})(jQuery);
