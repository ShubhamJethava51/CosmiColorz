// webpack.mix.js

const { disableNotifications } = require("laravel-mix");
let mix = require("laravel-mix");

mix.sass("resources/scss/app.scss", "public/css/app.css");
disableNotifications();
