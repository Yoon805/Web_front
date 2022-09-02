const express = require('express');
const app = express();
app.listen(5500);
// 페이지
app.get('/main', function (req, res) {
    res.sendFile(__dirname +'/front/main.html')
});

app.get('/main2', function (req, res) {
    res.sendFile(__dirname +'/front/main_copy_0902.html')
});

app.get('/virtual', function (req, res) {
    res.sendFile(__dirname +'/front/product_virtual.html')
});
//CSS
app.get('/css/css_main.css', function (req, res) {
    res.sendFile(__dirname +'/front/css/css_main.css')
});

app.get('/css/css_main_copy_0902.css', function (req, res) {
    res.sendFile(__dirname +'/front/css/css_main_copy_0902.css')
});
app.get('/css/css_product_virtual.css', function (req, res) {
    res.sendFile(__dirname +'/front/css/css_product_virtual.css')
});

// 사진  
app.get('/sources/logo_footer_CI.png', function (req, res) {
    res.sendFile(__dirname +'/sources/logo_footer_CI.png')
});

app.get('/sources/logo_CI_color.png', function (req, res) {
    res.sendFile(__dirname +'/sources/logo_CI_color.png')
});

app.get('/sources/btn_blog.png', function (req, res) {
    res.sendFile(__dirname +'/sources/btn_blog.png')
});

app.get('/sources/btn_youtube.png', function (req, res) {
    res.sendFile(__dirname +'/sources/btn_youtube.png')
});

app.get('/sources/slide1.jpg', function (req, res) {
    res.sendFile(__dirname +'/sources/slide1.jpg')
});

app.get('/sources/dstation_1.jpg', function (req, res) {
    res.sendFile(__dirname +'/sources/dstation_1.jpg')
});
// TEST
app.get('/a', function (req, res) {
    console.log('test success');
});