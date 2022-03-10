<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
class PersonaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        for ($i=0; $i < 10; $i++) {
            DB::table("personas")->insert(
                array(
                        'id'         => $faker->unique()->randomNumber,
                        'nombre'     => $faker->firstName("male"),
                        'cedula'  => $faker->randomNumber($nbDigits = NULL, $strict = false),
                        'email'     => $faker->email(),
                        'created_at' => date('Y-m-d H:m:s'),
                        'updated_at' => date('Y-m-d H:m:s')
                )
            );
        }
    }
}
