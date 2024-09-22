 let login_btn = document.querySelector('#login')


 login_btn.addEventListener('click',get_authorization)




 function get_authorization() {
    

    const clientId = '6d7c9aa0d8a440f5ba9bfd274e0a7ff0'; // Spotify Developer 中獲取
    const redirectUri = "https://hao0609.github.io/SpotifyAPI_Project/test.html" // 設定的重導網址 
    const scope = 'user-read-private user-read-email'; // 需要的權限範圍

    // 構造授權 URL
    // encodeURIComponent 是網址編碼的方法
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;


    // 重導用戶到 Spotify 的授權頁面
    window.location.href = authUrl;
 }