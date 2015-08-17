/**
 * Created by YU on 2015/8/4.
 */
define(['jquery','test-ajax/add-new','test-ajax/print-handler'],function ($, addHandler, printHandler) {
    $(document).ready(function(){
        addHandler.init();
        printHandler.init();
    });
});