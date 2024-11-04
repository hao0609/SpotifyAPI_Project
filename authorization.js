
let login_btn = document.querySelectorAll('.login_btn')


login_btn.forEach((btn) => {
   btn.addEventListener('click', get_authorization);
 });


 function get_authorization() {
   
   console.log("test");
   
    const clientId = '6d7c9aa0d8a440f5ba9bfd274e0a7ff0'; // Spotify Developer 中獲取
   //  const redirectUri = "http://127.0.0.1:5500/test.html" // 設定的重導網址 
    const redirectUri = "https://hao0609.github.io/SpotifyAPI_Project/personal.html"
    const scope = 'user-read-private user-read-email user-top-read'; // 需要的權限範圍

    // 構造授權 URL
    // encodeURIComponent 是網址編碼的方法
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;


    // 重導用戶到 Spotify 的授權頁面
    window.location.href = authUrl;
 }
