<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function portfolio()
    {
        return view('portfolio');
    }

    public function portfolioReact()
    {
        return view('portfolio-react');
    }


    public function test()
    {
        return view('test');
    }
}
