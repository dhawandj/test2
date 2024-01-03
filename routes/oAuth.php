<?php

use App\Models\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

Route::get('/auth/redirect', function () {
        return Socialite::driver('google')->redirect();
})->name('oauth');

Route::get('/auth/callback', function () {

        $googleUser = Socialite::driver('google')->user();
        // dd($googleUser);
        $user =    User::updateOrCreate(
                [
                        'google_id' => $googleUser->id,
                ],
                [
                        'name' => $googleUser->name,
                        'email' => $googleUser->email,
                        'google_token' => $googleUser->token,
                        'google_refresh_token' => $googleUser->refreshToken,
                        'email_verified_at' => now(), //mark as verfied 
                ]
        );
        Auth::login($user);
        return redirect('/dashboard');
        // $user->token
});
