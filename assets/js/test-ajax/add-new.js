/**
 * Created by YU on 2015/8/6.
 */
define(['jquery','util/ajax'],function ($) {

    var addUserInfo = {
        init: function(){
            this.initBtn();
        },
        initBtn: function(){
            var $userInfo = $('.user-info'), $userForm = $(".user-form");
            $userInfo.find('.submit').click(function(){
                //console.log('clicking submit.');
                var user = {
                    name : $userForm.find('input[name="name"]').val(),
                    school:$userForm.find('input[name="school"]').val(),
                    post:$userForm.find('select').val()
                };
                console.log(user);
            });
            $userInfo.find('.reset').click(function(){
                //console.log('clicking reset.');
                $userForm.find('input').val('');
                $userForm.find('select').val('1');
            });
        }
    };

    return {
        init: function(){
            addUserInfo.init();
        }
    };
});