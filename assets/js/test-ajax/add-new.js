/**
 * Created by YU on 2015/8/6.
 */
define(['jquery','util/ajax'],function ($) {

    var addUserInfo = {
        init: function(){
            this.initBtn();
        },
        initBtn: function(){
            var $userInfo = $('.user-info');
            $userInfo.find('.submit').click(function(){
                console.log('clicking submit.');
            });
            $userInfo.find('.reset').click(function(){
                console.log('clicking reset.');
            });
        }
    };

    return {
        init: function(){
            addUserInfo.init();
        }
    };
});