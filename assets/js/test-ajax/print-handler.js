/**
 * Created by YU on 2015/8/17.
 */
define(['jquery','printer'],function ($) {

    var printHandler = {
        init: function(){
            $(".print-btn").click(function(){
                $('.user-list').find('table').printArea();
            });
        }
    };

    return {
        init: function(){
            printHandler.init();
        }
    };
});