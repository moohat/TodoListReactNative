<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TodosController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index(){
        return DB::table('todos')->get();
    }

    public function store(Request $request){
        // return "Todos {POST}".$request->name;
        DB::table('todos')->insert([
            'name'=> $request->name,
            'isDone'=> 0
            ]);
        return $request;
    }

    public function update(Request $request, $id){
        // return "Todos {PATCH:id}". $id." ". $request->name;
         DB::table('todos')
              ->where('id', $id)
              ->update(['isDone' => $request->isDone]);

        return json_encode(DB::table('todos')->where('id', $id)->first());
    }

    public function view($id){
        return json_encode(DB::table('todos')->where('id', $id)->first());
    }

    public function delete($id){
        return DB::table('todos')->where('id', $id)->delete();
    }





    //
}
