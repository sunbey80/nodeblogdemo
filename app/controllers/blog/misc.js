var express = require('express'),
    router = express.Router();

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.redirect('/posts')
});

router.get('/about', function (req, res, next) {
    res.render('blog/about', {
        title: '关于我们页面',
        pretty: true,
    });
});

router.get('/contact', function (req, res, next) {
    res.render('blog/contact', {
        title: '联系我们页面',
        pretty: true,
    });
});
