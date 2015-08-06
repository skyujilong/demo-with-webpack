/**
 * Created by lsc on 2014/12/1.
 */
(function(root,factory){
    if(typeof define === 'function' && define.amd){
        define(['jquery', 'q'], function ($, Q) {
            return factory($,Q);
        });
    }else{
        root.ajax = factory(root.$,root.Q);
    }
})(this,function($,Q){
    var requestData = function (opt, ctx) {
        return Q.promise(function (resolve, reject, notify) {
            $.ajax({
                url: opt.url,
                data: opt.data || {},
                dataType: 'json',
                type: opt.type || 'get',
                success: function (data,textStatus,jqXHR) {
                    delete jqXHR.then;
                    resolve.apply(ctx || null, arguments);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    delete jqXHR.then;
                    reject.apply(ctx || null, arguments);
                }
            });
        });
    };
    $.ajaxSetup({cache: false});
    return requestData;
});
