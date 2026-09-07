<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});
Route::get('/events', function () {
    return view('events');
});
Route::get('/register', function () {
    return view('register');
});