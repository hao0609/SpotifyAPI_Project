<!DOCTYPE html>
<html lang="zn-tw">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="source/parallax.js"></script>
    <script src="source/parallax.min.js"></script>


    <!-- GSAP -->

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Flip.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Observer.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/MotionPathPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/EaselPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/PixiPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/TextPlugin.min.js"></script>
    <!-- RoughEase, ExpoScaleEase and SlowMo are all included in the EasePack file -->    
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/EasePack.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/CustomEase.min.js"></script>


    <!-- Noto Sans 字體 -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">


    <style>
        body{
            background-color: #ffffff;
        }
        body,ul,h3{

         box-sizing: border-box;
         margin: 0;
         padding: 0;
         font-family: 'Noto Sans', sans-serif;
         font-weight: 800;

      
        }
        h1{
            font-size: 60px;
            font-weight: bold;
            font-weight:  700;
        }
        h3{
            font-size: 24px;
            font-weight: bold;
            font-weight:  700;
            line-height: 40px;
            
        }
        .scene {
            margin: 0;
            padding: 0; 
            overflow: hidden;
            position: absolute;
            top: 0px;
        }
        .scene, .layer {
            display: block;
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0;
        }
        .wrapper {
            height: 100%;
            width: 100%;
        }
        .content_box{

            display: flex;
            flex-direction: column;
        }

        .bell {
            animation: swing 3s infinite alternate cubic-bezier(0.455, 0.03, 0.515, 0.955);
            -webkit-animation: swing 3s infinite alternate cubic-bezier(0.455, 0.03, 0.515, 0.955);
            
        }
        .wave-front{
            -webkit-animation: wave-front 4s 0.1s infinite linear;
            animation: wave-front 4s 0.1s infinite linear;
        }
        .wave-back{
            -webkit-animation: wave-back 3s 0.1s infinite linear;
            animation: wave-back 3s 0.1s infinite linear;
        }
        .img_user{
            position: relative; 
            width: 185px;
            height: 185px;
            border-radius: 100px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        .user_name{
            margin: 2% 0;
        }
        .box{
            position: relative;
            /* background-color: #e6e5e5; */
            
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color:#f0f2f0c1;
            z-index: 1; 
        }
        .flex-center{
            display: flex;
            align-items: center;
        }
        .title_box{
            flex: 1;
            display: flex;
            justify-content: space-evenly;
            flex-direction:row;
            z-index: 99;
            padding: 10%;
            flex-wrap: wrap;
        }
        .login{
            display: flex;
            align-items: flex-end;
        }
        .btn{
            color: #000000;
            background-color: #1ed660;
            border: none;
            line-height: 20px;
            border-radius: 25px;
        }
        .btn:hover{
            cursor: pointer;
            background-color: #000000;
            border-radius: 100px;
            color: white;
        }
        .login_btn{
            padding-top: 10px;
            padding-left: 20px;
            padding-bottom: 10px;
            padding-right: 20px;
            display: flex;
            text-decoration: none;    
        }
        .listen_btn{

            padding-top: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            padding-right: 10px;
            display: flex;
            text-decoration: none;    
        }

        .show_more_btn{
            padding-top: 10px;
            padding-left: 10px;
            padding-bottom: 10px;
            padding-right: 10px;
            display: flex;
            text-decoration: none;  
            width: fit-content;
            margin: auto;
        }
        .top_box{
            display: flex;
            justify-content: center;
        }
        .top_genres{
            font-size: 64px;
            text-transform:capitalize;
        }
        .top_track{
            width: 200px;
            height: 200px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            /* background-color: #8e8e8e; */

        }
        .top_artist{
            position: relative; 
            width: 185px;
            height: 185px;
            border-radius: 100px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            /* background-color: #8e8e8e; */
        }
        .rank_tittle{

            font-size: 96px;
            position: relative;
        }
        .grey{
            color: #ced0cf;
        }
        @keyframes swing {
            0% {
                -webkit-transform: rotateZ(10deg);
                -moz-transform: rotateZ(10deg);
                transform: rotateZ(10deg);
            }

                100% {
                -webkit-transform: rotateZ(-10deg);
                -moz-transform: rotateZ(-10deg);
                transform: rotateZ(-10deg);
            }
        }
        @keyframes wave-front{
            0% {
                -webkit-transform: rotateZ(0deg) translate3d(0, 10%, 0) rotateZ(0deg);
                -moz-transform: rotateZ(0deg) translate3d(0, 10%, 0) rotateZ(0deg);
                transform: rotateZ(0deg) translate3d(0, 10%, 0) rotateZ(0deg);
            }
            100% {
                -webkit-transform: rotateZ(360deg) translate3d(0, 10%, 0) rotateZ(-360deg);
                -moz-transform: rotateZ(360deg) translate3d(0, 10%, 0) rotateZ(-360deg);
                transform: rotateZ(360deg) translate3d(0, 10%, 0) rotateZ(-360deg);
            }
        
        }
        @keyframes wave-back{
            0% {
                -webkit-transform: rotateZ(360deg) translate3d(0, 10%, 0) rotateZ(-360deg);
                -moz-transform: rotateZ(360deg) translate3d(0, 10%, 0) rotateZ(-360deg);
                transform: rotateZ(360deg) translate3d(0, 10%, 0) rotateZ(-360deg);
               
            }
            100% {
                -webkit-transform: rotateZ(0deg) translate3d(0, 10%, 0) rotateZ(0deg);
                -moz-transform: rotateZ(0deg) translate3d(0, 10%, 0) rotateZ(0deg);
                transform: rotateZ(0deg) translate3d(0, 10%, 0) rotateZ(0deg);
            }
        
        }
        header{
            position: relative;
            top: 0px;
            display: flex;
            justify-content: center;
            width: 100%;
            height: 65px;
            left: 0px;
            z-index: 99;

        }
        .header_box{
            width: 1200px;
            padding-left: 2%;
            padding-right: 2%;
            display: flex;
            justify-content: space-between;
        }
        .user_info_box{

            width: 100%;
            padding-top: 2%;
            padding-bottom: 2%;
            background-color: #ccc;

        }
        .user_info_inside_box{
            display: flex;
            width: 1200px;
            margin: auto;

        }
        .user_info{
            margin-left: 5%;
        }
        li{
            list-style: none;
        }
        .menu{
            gap: 40px;
        }
        .down{
            text-align: center;
            z-index: 99;
        }

        .icon {
            opacity: 0;
            transform: translateY(-20px); /* 從上方開始 */
            animation: fadeInDown 2s ease-in-out infinite;
        }
        .tittle{
            transform: translateY(-200px); /* 初始位置 */
            opacity: 0;
        }
        .rank{

            margin: 100px 50px
        }
        .rank_title_box{
            position: relative;
            display: flex;
            justify-content: flex-end;
            height: 150px;
            overflow: hidden;
        }
        .top_title_box{
            position: relative;
            display: flex;
            justify-content: flex-start;
            height: 150px;
        }
        .rank_tittle_top{
            position: absolute;
            right: 15px;
            opacity: 0;
            transform: translate(600px, 150px); 

        }
        .rank_tittle_bottom{
            position: absolute;
            top: 15px;
            color: rgb(205, 205, 205);
            transform: translate(600px, 150px); 
            z-index: -1;

        }
        .top_tittle_top{
            position: absolute;
            left: 20px;
            transform: translate(-600px, 150px); 
        }
        .top_tittle_bottom{
            position: absolute;
            top: 20px;
            color: rgb(205, 205, 205);
            transform: translate(-600px, 150px); 
            z-index: -1;
        }

        @keyframes fadeInDown {
            0% {
                opacity: 0;
                transform: translateY(-20px); 
            }
            50% {
                opacity: 1;
                transform: translateY(0); 
            }
            100% {
                opacity: 0;
                transform: translateY(20px); 
            }
        }

        .select_box{
            display: flex;
            justify-content: center;
            margin: 50px;

        }
        .option_box{
            text-align: center;
            padding-right: 20px;
            font-size: 30px;
            font-weight: bold;
            font-weight:  700;
            width: 180px;
            height: 50px;
            background-color: #ffffff;
            border: none;
            line-height: 50px;
            border-radius: 100px;
            box-shadow: 1px 1px 11px #8e8e8e;
            outline: none;
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M14.207 1.707L13.5 1l-6 6l-6-6l-.707.707l6.353 6.354h.708zm0 6L13.5 7l-6 6l-6-6l-.707.707l6.353 6.354h.708z' clip-rule='evenodd'/%3E%3C/svg%3E");
            background-repeat: no-repeat, repeat;
            background-position: right .7em top 50%, 0 0;
            background-size: .65em auto, 100%;

        }
        option{
            
            font-size: 30px;
            font-weight: bold;
            font-weight:  700;
        }
        .contury_box{
            margin-right: 100px;
        }

        .top1_box{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin:0px 50px;
            background-color: #e8e8e8;
        }

        .track_img{
            width: 130px;
            height: 130px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .rank_num{
            font-size: 24px;
            width: 30px;
            text-align: center;
        }
        .song{
            width: 500px;

        }
        .songname{
            font-size: 32px;
        }
        .artistname{
            color: #857E7E;
        }
        .margin_50{
            margin-top: 50px;
        }
        .flex{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
        .margin_30{
            margin-top: 30px;
            margin-bottom: 30px;
        }
        .width_300{
            width: 300px;
        }
        .show_more{

            text-align: center;
        }
        .showmore_btn{
            background-color: transparent;
        }
        footer{

            display: flex;
            flex-direction: column;
            margin-top: 5%;
            padding: 0 5%;
            background-color: #000000;
            color: #ffffff;

        }
        .info_from{
            display: flex;
            margin-left: 10rem;
            margin-right: 10rem;
            padding: 2rem;
            text-align: center;
            align-items: center;
            
        }
        .info{
            text-align: center;
            padding: 2rem;
        }
        .info_text{
            width: 50%;
        }
        .info_icon{
            width: 50%;
        }
        img{
            width: 50%;
        }
        .a_tag{
            height: 100%;
            color: black;
            text-decoration: none;
        }
        .time_box{

            width: 900px;
            text-align: left;
            margin: auto;
            padding: 20;
            padding-top: 40px;
            padding-bottom: 40px;
        }
        
    </style>
    <title>Spotify API Project</title>
</head>
<body>


    <div id="container" class="wrapper">

        <div class="content_box">
            <header>
                <div class="header_box flex-center">
                    <a href="./index.html" class="a_tag flex-center"> LOGO</a>
                    <nav class="nav flex-center"> 
                        <ul class="menu flex-center">
                            <li>最新熱門</li>
                            <li>網站說明</li>
                            <li>關於作者</li>
                            <li>免責聲明</li>
                            <li class="flex-center">
                                <div class="flex-center" style="margin-right: 5px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M16 7.992C16 3.58 12.416 0 8 0C3.584 0 0 3.58 0 7.992C0 10.422 1.104 12.612 2.832 14.082C2.848 14.098 2.864 14.098 2.864 14.114C3.008 14.226 3.152 14.338 3.312 14.45C3.392 14.498 3.456 14.561 3.536 14.625C4.8586 15.5202 6.41889 15.9991 8.016 16C9.61311 15.9991 11.1734 15.5202 12.496 14.625C12.576 14.577 12.64 14.514 12.72 14.465C12.864 14.354 13.024 14.242 13.168 14.13C13.184 14.114 13.2 14.114 13.2 14.098C14.896 12.611 16 10.422 16 7.992ZM8 14.993C6.496 14.993 5.12 14.513 3.984 13.714C4 13.586 4.032 13.459 4.064 13.331C4.15965 12.9842 4.29947 12.6512 4.48 12.34C4.656 12.036 4.864 11.764 5.12 11.524C5.36 11.284 5.648 11.061 5.936 10.885C6.24 10.709 6.56 10.581 6.912 10.485C7.26685 10.39 7.63264 10.3419 8 10.342C9.09075 10.3337 10.1415 10.7522 10.928 11.508C11.296 11.876 11.584 12.3077 11.792 12.803C11.904 13.091 11.984 13.3947 12.032 13.714C10.8512 14.5442 9.44343 14.9907 8 14.993ZM5.552 7.593C5.41131 7.27013 5.34043 6.92117 5.344 6.569C5.344 6.218 5.408 5.866 5.552 5.546C5.696 5.226 5.888 4.939 6.128 4.699C6.368 4.459 6.656 4.268 6.976 4.124C7.296 3.98 7.648 3.916 8 3.916C8.368 3.916 8.704 3.98 9.024 4.124C9.344 4.268 9.632 4.46 9.872 4.699C10.112 4.939 10.304 5.227 10.448 5.546C10.592 5.866 10.656 6.218 10.656 6.569C10.656 6.937 10.592 7.273 10.448 7.592C10.3098 7.9077 10.1145 8.19519 9.872 8.44C9.6271 8.68219 9.33963 8.87712 9.024 9.015C8.36272 9.28617 7.62128 9.28617 6.96 9.015C6.64437 8.87712 6.3569 8.68219 6.112 8.44C5.86925 8.19865 5.67864 7.91102 5.552 7.593ZM12.976 12.899C12.976 12.867 12.96 12.851 12.96 12.819C12.8029 12.3183 12.571 11.8443 12.272 11.413C11.9728 10.9786 11.6054 10.5953 11.184 10.278C10.8621 10.0357 10.5131 9.83169 10.144 9.67C10.3111 9.5582 10.4666 9.42989 10.608 9.287C10.8465 9.0515 11.056 8.7883 11.232 8.503C11.5876 7.92133 11.7707 7.25066 11.76 6.569C11.7652 6.06449 11.6672 5.56424 11.472 5.099C11.2795 4.65065 11.0025 4.24357 10.656 3.9C10.3092 3.56105 9.90226 3.28974 9.456 3.1C8.99007 2.90485 8.48911 2.80718 7.984 2.813C7.47882 2.8075 6.97786 2.90551 6.512 3.101C6.06084 3.28843 5.65256 3.56572 5.312 3.916C4.97128 4.26097 4.69973 4.66795 4.512 5.115C4.31678 5.58024 4.21877 6.08049 4.224 6.585C4.224 6.937 4.272 7.27267 4.368 7.592C4.464 7.928 4.592 8.232 4.768 8.519C4.928 8.807 5.152 9.063 5.392 9.303C5.536 9.447 5.696 9.57467 5.872 9.686C5.5013 9.85103 5.15206 10.0606 4.832 10.31C4.416 10.63 4.048 11.013 3.744 11.429C3.44227 11.8586 3.2101 12.3331 3.056 12.835C3.04 12.867 3.04 12.899 3.04 12.915C1.776 11.636 0.992 9.91 0.992 7.992C0.992 4.14 4.144 0.991 8 0.991C11.856 0.991 15.008 4.14 15.008 7.992C15.0059 9.83196 14.2753 11.5962 12.976 12.899Z" fill="black"/>
                                    </svg>
                                </div>
                                <a href="./index.html" class="a_tag flex-center" id="log_out"> LOG Out</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>



            <div class="user_info_box">

                <div class="user_info_inside_box">
                    <div class="img_user"></div>
                    <div class="user_info">
                        <div class="user_name"> <h3>用戶名</h3></div>
                        <div class="user_text">
                            <h3> Hi , <span id="userName"></span>  以下是您 Spotify 帳號的音樂品味分析 <br>

                                您可以點選 ”最愛的藝人”、”最愛的藝人”、”最愛的歌手” <br>
                                
                                "Show More" 查看您目前各項目的排行榜
                            </h3>

                        </div>

                    </div>
                </div>

            </div>

            
            <div class="time_box">
                <select name="time" id="time" class="option_box" onchange="change_option()">
                    <option value="fourWeek" selected> 4 周</option>
                    <option value="sixMonth" > 6 個月</option>
                    <option value="total" >總時間</option>
                  </select>
            </div>

            <div class="top_box">
                <div class="genres flex width_300">
                    <div class="top_tittle">
                        <h3>最愛的音樂風格</h3>
                    </div>
                    <div class="top_genres margin_30" id="top_genres">
                        
                    </div>
                    <div class="show_more">
                        <a  id="show_more_btn" class="btn show_more_btn" ><h3 class="margin_btn"> Show More </h3></a>                 
                    </div>  
                </div>

                <div class="artist flex width_300">
                    <div class="top_tittle">
                       <h3>最愛的藝人</h3> 
                    </div>
                    <div id="top_artist_name"><h3></h3></div>
                    <div class="top_artist margin_30" id="top_artist">
                        
                    </div>
                    <div class="show_more">
                        <a  id="show_more_btn" class="btn show_more_btn" ><h3 class="margin_btn"> Show More </h3></a>                 
                    </div>  
                </div>

                <div class="track flex width_300">
                    <div class="top_tittle">
                        <h3>最愛的歌曲</h3>
                    </div>
                    <div id="top_track_name"><h3></h3></div>
                    <div class="top_track margin_30" id="top_track">
                        
                    </div>
                    <div class="show_more">
                        <a  id="show_more_btn" class="btn show_more_btn" ><h3 class="margin_btn"> Show More </h3></a>                 
                    </div>  
                </div>

            </div>
            

        <footer>

            <div class="info"> 本網站為緯育TibaMe【第 一 期】前端工程師專業技術養成在職培訓班學員作品<br />僅供學習、展示之用途。<br />若有任何相關侵權問題，請聯繫 緯育TibaMe ，將立即下架該網站。 </div>
            <div class="info_from">
                <div class="info_text"><h3>Information from</h3></div>
                <div class="info_icon"><img src="img/Spotify_Full_Logo_RGB_Green.png" alt=""></div>
            </div>
        </footer>


    </div>

    <script>

        let change_option

        window.addEventListener('load',doFirst)
          function doFirst() {
            

           let  accessToken
           let  refreshToken
           let  New_API_token
         //獲取授權碼

        const params = new URLSearchParams(window.location.search);
        const authorizationCode = params.get('code');
        // console.log(authorizationCode);

        const clientId = '6d7c9aa0d8a440f5ba9bfd274e0a7ff0';
        const clientSecret = '439e391e71ae4bf68f1b99a7191dfaa8';
        const encodedCredentials = btoa(`${clientId}:${clientSecret}`);
        const redirectUri = "https://hao0609.github.io/SpotifyAPI_Project/personal.html"
        //console.log(encodedCredentials);
        
        // 請求 API Token
        async function getSpotifyToken(API_token) {
            
            
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
            'Authorization': `Basic ${encodedCredentials}`, // Basic 認證
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: authorizationCode,  // 授權碼
                redirect_uri: redirectUri,  
            })
        });
        const data = await response.json();
         console.log(data);

        accessToken = data.access_token
        refreshToken = data.refresh_token
        
        if (accessToken) {
            localStorage.setItem('refresh_token', refreshToken);
        }

        return accessToken;
        
        }   

        async function getRefreshToken(New_API_token) {
        
        // refresh token that has been previously stored
        const refreshToken = localStorage.getItem('refresh_token');

        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
            'Authorization': `Basic ${encodedCredentials}`, // Basic 認證
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                client_id: clientId
            })
        });
        
            const data = await response.json();
            // console.log(data);
            New_API_token = data.access_token
            localStorage.setItem('New_API_token', New_API_token);
            return New_API_token
        }
        

        

        // 查詢 Spotify User 用戶資料 API
    
    let time = 'short_term'

    
    async function GetUserProfile(){
        let token = await getSpotifyToken();
        let new_token = await getRefreshToken();

        
        
        console.log(token)
        console.log(new_token)

        console.log(time);

        // 判斷token為空值(代表就token失效)，讓新的token做替換
        if (!token) {
            token = new_token
        }

        let UserProfile_response = await fetch(`https://api.spotify.com/v1/me`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
        });
        console.log(token)

            
            const UserProfileData = await UserProfile_response.json();
            // console.log(UserProfileData);

            let userName = UserProfileData.display_name
            let userImage_url = UserProfileData.images[1].url

            console.log(userName);
            console.log(userImage_url);
            
            document.querySelector('.img_user').style.backgroundImage=`url(${userImage_url})`

            document.querySelector('.user_name>h3').innerText = userName
            document.querySelector('#userName').innerText = userName
            
           
            console.log(token)
            // 查詢 Spotify User Top Artist

        let UserTopArtist_response = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${time}&limit=50&offset=0`, {
                 headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const UserTopArtistData = await UserTopArtist_response.json();
             console.log(UserTopArtistData.items)

             let UserTopArtist_list = UserTopArtistData.items

             let allGenres = [];

             for (let i = 0; i < UserTopArtist_list.length; i++) {
                // UserTopArtist_list[i].genres
                // console.log(UserTopArtist_list[i].genres);
                allGenres = allGenres.concat(UserTopArtist_list[i].genres);
                
             }

            console.log(allGenres);

            const genreCount = allGenres.reduce((acc, genre) => {
            acc[genre] = (acc[genre] || 0) + 1;  // 如果 genre 已經存在於 acc 中，則次數加 1，否則初始化為 1
            return acc;
            }, {});

            console.log(genreCount);
            
            const sortedGenres = Object.entries(genreCount)

            .sort((a, b) => b[1] - a[1]);  // 根據出現次數（a[1] 和 b[1]）降序排列

            // 顯示排序後的結果
            console.log(sortedGenres);

            let genreTop = sortedGenres[0]
            let genreTopName = genreTop[0]

            console.log(genreTopName);

            document.querySelector('#top_genres').innerText = genreTopName  //最愛風格

            TopArtist_name = UserTopArtist_list[0].name
            document.querySelector('#top_artist_name>h3').innerText = TopArtist_name
            TopArtist_img_url = UserTopArtist_list[0].images[1].url //最愛藝人
            console.log(TopArtist_img_url);
            document.querySelector('#top_artist').style.backgroundImage=`url(${TopArtist_img_url})`



            // 查詢 Spotify User Top Track
            let UserTopTrack_response = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${time}&limit=50&offset=0`, {
                 headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const UserTopTrackData = await UserTopTrack_response.json();
             console.log(UserTopTrackData.items)

             let UserTopTrack_list = UserTopTrackData.items

             TopTrack_name = UserTopTrack_list[0].name

             document.querySelector('#top_track_name>h3').innerText = TopTrack_name

             TopTrack_img_url = UserTopTrack_list[0].album.images[1].url //最愛藝人圖片

             document.querySelector('#top_track').style.backgroundImage=`url(${TopTrack_img_url})` //最愛歌曲圖片




        }   
        
        GetUserProfile()       
       
        
        change_option = async function() {
                let time_range = document.querySelector('#time').value
                if (time_range == 'fourWeek') {
                     time = 'short_term'
                    console.log(time)
                    
                }else if(time_range == 'sixMonth') {   
                     time = 'medium_term'
                    console.log(time);
                }else if (time_range == 'total') {
                     time = 'long_term'
                    console.log(time);
                }
                 GetUserProfile()
            }
 }
    </script>

    <script>
        let logOut_btn = document.querySelector('#log_out').addEventListener('click',function() {
            
            localStorage.removeItem('New_API_token');
            localStorage.removeItem('refresh_token');
            refresh_token = ''
            accessToken = ''
            New_API_token = ''
        })

    </script>

    
</body>
</html>
