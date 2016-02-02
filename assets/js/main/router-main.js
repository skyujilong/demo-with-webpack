/**
 * Created by YU on 2015/12/17.
 */
define([
    'exports?Router!director',
    'es5-shim.min',
    'es5-sham.min'
],function(Router){
    var author = function () { console.log("author"); };
    var books = function () { console.log("books"); };
    var viewBook = function (bookId) {
        console.log("viewBook: bookId is populated: " + bookId);
    };

    var routes = {
        '/author': author,
        '/books': [books, function() {
            console.log("An inline route handler.");
        }],
        '/books/view/:bookId': viewBook
    };

    var router = Router(routes);

    router.init();
});