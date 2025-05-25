//alert
    // alert(`Chào mừng bạn đến với động Wibu!`) 
    
    //edit touchScreen and 'xem anime'
    let screenBlock= document.getElementById('screen');
    let inScreen= document.getElementById('inScreen');
    let watchScreen= document.getElementById('watchScreen');
    screenBlock.addEventListener("click", function(){
        screenBlock.style.width= '0px'; screenBlock.style.height= '0px';
        inScreen.innerHTML= '';
        watchScreen.innerHTML= "Xem Anime"
    });

    //edit list anime
    let menu_anime= document.getElementById('menu_anime');
    let contain= document.getElementById('contain');
    let a1= document.getElementById('a1');
    watchScreen.addEventListener("click", function(){
        menu_anime.style.width= '80%'; menu_anime.style.height= '60%';
        contain.style.width= '100%'; contain.style.height= '90%';
        a1.innerHTML= 'Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san.'
    });

    //edit background anime
    let editbackgr1= document.getElementById('background1');
    let editbackgr2= document.getElementById('background2');
    editbackgr1.addEventListener('mouseover', function(){
        editbackgr1.style.top= '10%'; editbackgr1.style.width= '50%'; editbackgr1.style.height= '90%'
    });

    editbackgr1.addEventListener('mouseleave', function(){
        editbackgr1.style.top= '15%'; editbackgr1.style.width= '40%'; editbackgr1.style.height= '75%'
    });

    editbackgr2.addEventListener('mouseover', function(){
        editbackgr2.style.top= '10%'; editbackgr2.style.width= '50%'; editbackgr2.style.height= '90%'        
    });

    editbackgr2.addEventListener('mouseleave', function(){
        editbackgr2.style.top= '15%'; editbackgr2.style.width= '40%'; editbackgr2.style.height= '75%'
    });

    //edit click thay background anime
    let listBackground= [
        'https://i.pinimg.com/736x/c7/d4/b2/c7d4b2425f3abcffba182652ff801bab.jpg',
        'https://i.pinimg.com/736x/ab/03/16/ab03163207e71d0f640a56aa19ca1930.jpg',
        'https://i.pinimg.com/736x/0d/5c/1d/0d5c1d53b559e742487f9aa1fb0b535e.jpg',
        'https://i.pinimg.com/736x/39/5a/f8/395af81daf1d8c701d1819e73db2eb08.jpg',
        'https://i.pinimg.com/736x/ab/d1/36/abd13632eb80103d981d3c08a332a4c5.jpg',
        'https://i.pinimg.com/736x/fd/df/7a/fddf7a7884321deb6aa2a157b964579c.jpg',
        'https://i.pinimg.com/736x/21/ec/ba/21ecba5c0054e502600584fa818c72ae.jpg',
        'https://i.pinimg.com/736x/45/39/4f/45394f4cffb496542ae537ff9108376e.jpg',
        'https://i.pinimg.com/736x/66/f5/f5/66f5f51664fd8c13388b89394b1a0523.jpg',
        'https://i.pinimg.com/736x/0f/d4/db/0fd4dbb602de61e3a220b6240cf40983.jpg',
        'https://i.pinimg.com/736x/4c/dd/0d/4cdd0d3dc314bc952260b432387654f3.jpg',
        'https://i.pinimg.com/736x/bd/5f/3d/bd5f3d858fb5874f5d51d6f524ff270d.jpg',
        'https://i.pinimg.com/736x/02/8b/7c/028b7cdcad63a711613864a8fcd2f165.jpg',
        'https://i.pinimg.com/736x/a5/e7/c8/a5e7c8419b6c99c0ddf2de3fe256adf4.jpg',
        'https://i.pinimg.com/736x/50/d8/15/50d8155e56a93957d8a37fc631b3b107.jpg',
        'https://i.pinimg.com/736x/bf/5e/3c/bf5e3cf2983a6e51d6bca7e538f31a34.jpg',
        'https://i.pinimg.com/736x/be/39/28/be3928cba11858ed7c83eab4bf7337ed.jpg',
        'https://i.pinimg.com/736x/1a/17/99/1a1799de722409bc846678400c515e26.jpg'
        ]

    let a=0;
    let changeBackground1= ()=>{
        if (a<listBackground.length){
            a+=1;
            editbackgr1.src= listBackground[a-1];
        }       
        else if(a===listBackground.length){
            a=1;
            editbackgr1.src= listBackground[a-1]
        }
    };

    let changeBackground2= ()=>{
        if (a<listBackground.length){
            a+=1;
            editbackgr2.src= listBackground[a-1];
        }    
        else if(a===listBackground.length){
            a=1;
            editbackgr2.src= listBackground[a-1]
        }   
    };

    editbackgr1.addEventListener('click', changeBackground1);
    editbackgr2.addEventListener('click', changeBackground2);
    
    
    //music
    let music= new Audio('Luminous Entities Lost Heart.mp3');
    let checkTime=0;
    let autoRunRadio='Off';
    let musicTime= document.getElementById('musicTime');
    let x=0;

    let autoPlay=()=>{ 
        checkTime= parseInt(checkTime)
        musicTimeline.max= parseInt(music.duration)-10
        musicTime.innerHTML= `Current time: ${checkTime}s <br>
                            End time: ${parseInt(music.duration)-10}s`;
        musicTimeline.value= music.currentTime
        if(!music.paused){
            if(checkTime<parseInt(music.duration)-10){
                checkTime+=1
            }
            else if(checkTime===parseInt(music.duration)-10){
                checkTime+=1
                musicButtonplay.innerHTML='<p style="width:90px; height:20%; font-size:x-large; cursor:pointer">▶️</p>'
                if(n===myMusic.length){
                    x=1
                    alert('Đây đã là bài hát cuối cùng!')
                }
                nextSong();
            }  
        }
        setTimeout(autoPlay,1000); 
    };
    
    let playPause= ()=>{
        if(x===0){
            if(music.paused){
                music.play();
                musicButtonplay.innerHTML='<p style="width:90px; height:20%; font-size:x-large; cursor:pointer">⏸️</p>'
            }
            else {
                music.pause();
                musicButtonplay.innerHTML='<p style="width:90px; height:20%; font-size:x-large; cursor:pointer">▶️</p>'
            }  
        }   
    }

    //create event cho radio
    let radio= document.getElementById('radio');
    let listener= document.getElementById('listener');
    let musicScreen= document.getElementById('musicScreen');
    let contain2= document.getElementById('contain2')
    let title2= document.getElementById('title2')
    let Songnumber= document.getElementById('Songnumber')
    let finder= document.getElementById('finder')
    let label = document.getElementById('label')
    let search= document.getElementById('search')
    let heart= document.getElementById('heart')
    let vb= document.getElementById('volume&bar')
    

    let musicButtonplay= document.getElementById('musicButtonplay');
    let musicButtonnext= document.getElementById('musicButtonnext');
    let musicButtonprevious= document.getElementById('musicButtonprevious');

    radio.addEventListener('mouseover', function(){
        radio.style.width= '30%'; radio.style.height= '12%'
    })

    radio.addEventListener('mouseleave', function(){
        radio.style.width= '15%'; radio.style.height= '6%'
    })

    musicButtonplay.addEventListener('click', playPause);
    
    radio.addEventListener('click', function(){
        listener.style.width= 'auto'; listener.style.height= '60%';
        musicScreen.style.position= 'absolute'
        contain2.style.position= 'absolute'
        contain2.style.width= '100%'; contain2.style.height= '90%';
        watchScreen.innerHTML= ""
        listener.innerHTML= `<img src="https://ws.shoutcast.com/images/contacts/f/f641/f641fdbd-2d81-4d28-9e5b-f5a0d1f01f81/radios/09ef7730-5422-47ea-9bc2-96a8904f585b/09ef7730-5422-47ea-9bc2-96a8904f585b.png" alt="">`             
        title2.style.position='absolute'
        title2.style.bottom= '-20px'
        Songnumber.innerHTML= `<marquee behavior="sroll" direction="left"> <br><br><br><br><br><br><br>Song ${n}: ${myMusic[n-1].name} </marquee>`;
        label.style.top= '15%'
        finder.style.top= '20%'
        search.style.top= '27%'
        musicTime.style.left= '10%';
        vb.style.bottom= '15%'
        if(check===0){
           heart.style.right= '5%'; 
        }
        playFavouriteMusic.style.bottom= '5%'
        if(autoRunRadio==="Off"){
            autoRunRadio= 'On'
            playPause()
            setTimeout(autoPlay,1000)
        }
        warning.style.transition='all 1s'

    });


    let radioExit=document.getElementById('radioExit');
    radioExit.addEventListener('click', function(){
        listener.style.width= '0'; listener.style.height= '0';
        musicScreen.style.position= 'relative'
        contain2.style.position= 'relative'
        contain2.style.width= '0'; contain2.style.height= '0';
        watchScreen.innerHTML= "Xem Anime"
        listener.innerHTML= ''
        title2.style.position='fixed'
        title2.style.bottom= '-100px' 
        Songnumber.innerHTML= '' 
        label.style.top= '-15%'
        finder.style.top= '-20%'
        search.style.top= '-25%'
        musicTime.style.left= '-30%';
        heart.style.right= '-20%';
        playFavouriteMusic.style.bottom= '-20%'
        searchingResultsBlock.innerHTML=``;
        vb.style.bottom= '-25%';
        warning.style.top='-8%'
        warning.style.transition=''
    })

    //list nhac
    let myMusic= [
    {
        name: 'Luminous Entities Lost Heart'
    },
    {
        name: 'Lemon'
    },
    {
        name: 'Rokudenashi - One Voice'
    },
    {
        name: 'Akie秋絵天ノ弱 -うぃんぐPiano Ver.- 歌ってみたオリジナルPV'
    },
    {
        name: '洛天依 嘘つきは恋のはじまり オリジナルMV'
    },
    {
        name: 'Best friend'
    },
    {
        name: `Giorno's Theme (Jay D Remix)`
    },
    {
        name: `Kakyoin's Theme`
    },
    {
        name: 'Hotaru - Fujita Maiko'
    },
    {
        name: 'Yume To Hazakura'
    },
    {
        name: 'Omae Wa Mou'
    },
    {
        name: 'Fire Force Opening 1 - Inferno by Mrs.GREEN APPLE'
    },
    {
        name: 'Orange'
    },
    {
        name: 'Sakura - Ikimonogakari'
    },
    {
        name: 'Silhouette'
    },
    {
        name: 'Summertime'
    },
    {
        name: 'Karakai Jouzu no Takagi-san OP 1 Full'
    },
    {
        name: 'Karakai Jouzu no Takagi-san OP 2'
    },
    {
        name: '可愛くてごめん (feat. かぴ)'
    },
    {
        name: 'Yunomi - ジェリーフィッシュ (feat. ローラーガール)'
    },
    {
        name: 'Yoru ni Kakeru夜に駆けるYOASOBI'
    },
    {
        name: 'Karakai Jouzu no Takagi-san OP 3'
    },
    {
        name: 'Bluebird (ブルーバード) - Ikimono Gakari'
    },
    {
        name: 'Acoustic - Unravel'
    },
    ];
    
    let favouriteMusicList= [];
    let checkHeart = ()=>{
        if(favouriteMusicList.indexOf(myMusic[n-1])===-1){
            heart.src='https://phunugioi.com/wp-content/uploads/2020/11/tranh-to-mau-trai-tim-hinh-ve-don-gian.png'
        }
        else{
           heart.src='https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474100kNy/anh-icon-trai-tim-ghep-anh_054623143.png' 
        }
    };

    let clickHeart= ()=>{
        if(heart.src==='https://phunugioi.com/wp-content/uploads/2020/11/tranh-to-mau-trai-tim-hinh-ve-don-gian.png'){
            heart.src='https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474100kNy/anh-icon-trai-tim-ghep-anh_054623143.png'
            favouriteMusicList.push(myMusic[n-1]);
        }
        else{
            heart.src='https://phunugioi.com/wp-content/uploads/2020/11/tranh-to-mau-trai-tim-hinh-ve-don-gian.png'
            favouriteMusicList.splice(favouriteMusicList.indexOf(myMusic[n-1]),1);
        }
    };

    heart.addEventListener('click', clickHeart);

    let myMusicCopy= myMusic;
    let playFavouriteMusic= document.getElementById('playFavouriteMusic');
    let count=0; let check=0;
    let warning= document.getElementById('warning')
    
    let warningEdit= ()=>{
        warning.style.top= '8%';
        setTimeout(function(){
            warning.style.top='-8%';
        }, 3000)
    }

    playFavouriteMusic.addEventListener('click', function(){
        if(favouriteMusicList.length>0){
            searchingResultsBlock.innerHTML=``
            if(count===0){
                heart.style.right= '-20%'
                n=0; count=1; music.pause(); check=1
                myMusic= favouriteMusicList;
                nextSong();
                warningEdit()
                warning.innerHTML= `<h3><b>Bạn đã vào playlist yêu thích!</b></h3>`
            }
            else{
                heart.style.right= '5%'
                n=0; count=0; music.pause(); check=0
                myMusic=myMusicCopy;
                nextSong();
                warningEdit()
                warning.innerHTML= `<h3><b>Bạn đã thoát playlist yêu thích!</b></h3>`
            }    
        }
        else{
            warningEdit();
            warning.innerHTML= `<h3><b>Bạn chưa có bài hát yêu thích nào!</b></h3>`
        }
    })


    let n=1;
    let nextSong=()=>{
        if (n<=myMusic.length-1){
            music.pause(); x=0
            n+=1; checkTime=0;
            music= new Audio(`./music/${myMusic[n-1].name}.mp3`); music.volume= (musicVolume.value)/100
            Songnumber.innerHTML= `<marquee behavior="sroll" direction="left"> <br><br><br><br><br><br><br>Song ${n}: ${myMusic[n-1].name} </marquee>`;
            checkHeart()
            playPause(); 
        }
    };

    let previousSong=()=>{
        if (n>1){
            music.pause(); x=0
            n-=1; checkTime=0;
            music= new Audio(`./music/${myMusic[n-1].name}.mp3`); music.volume= (musicVolume.value)/100
            Songnumber.innerHTML= `<marquee behavior="sroll" direction="left"> <br><br><br><br><br><br><br>Song ${n}: ${myMusic[n-1].name} </marquee>`;
            checkHeart()
            playPause(); 
        }
    };

    musicButtonprevious.addEventListener('click', previousSong)
    musicButtonnext.addEventListener('click', nextSong)

    //edit hàm tìm kiếm nhạc
    let musicName='';
    let y=''
    let searchMusic= ()=>{
        if(finder.value!==''){
            musicName= finder.value;
            finder.value= '';
            for(let i=0; i<myMusic.length; i++){
                if (musicName===`Song ${i+1}: ${myMusic[i].name}`){
                    music.pause(); 
                    n=i; 
                    nextSong()
                    break;
                }            
            }  
        }
              
    };
    search.addEventListener('click', searchMusic);

    let arrIndex=[]; let arrSearch=[]; let editName='';
    let searchingResultsBlock= document.getElementById('searchingResultsBlock');
    let searchingResults= document.getElementsByClassName('searchingResults');
    finder.addEventListener('keyup', function(){
        arrIndex=[]; arrSearch=[]; y=''
        searchingResultsBlock.innerHTML=``
        musicName= (finder.value).toLowerCase().trim().split(' ')
        for(let i=0; i<musicName.length; i++){
            y= `${y}${musicName[i]}`
        }
        musicName= y;
        if(musicName.length>0){
            for(let i=0; i<myMusic.length; i++){
                editName='';
                y= `Song ${i+1}: ${myMusic[i].name}`.toLowerCase().trim().split(' ')
                for(let z=0;z<y.length;z++){
                    editName=`${editName}${y[z]}`
                }

                if(editName.includes(musicName)){
                    arrSearch.push(i); //arr chua toan bo
                    if(arrIndex.length<5){
                        arrIndex.push(i); //arr chua max 5
                        searchingResultsBlock.innerHTML= `${searchingResultsBlock.innerHTML}<div class="searchingResults" onmouseover="newResult()" style="padding:5%"> Song ${i+1}: ${myMusic[i].name}</div>`
                    }            
                }
            }
            if(arrIndex.length===5){
                searchingResultsBlock.innerHTML= `${searchingResultsBlock.innerHTML} <p style='float:right; padding-right:3%; cursor: pointer' onclick='clickNext(arrIndex[arrIndex.length-1])'>➡️</p>`
            }   
        }    
    });


    let clickNext= (r)=>{
        if(arrIndex.length===5){
            arrIndex=[];
            searchingResultsBlock.innerHTML=``
            for(let i=1; i<6; i++){
                if(arrSearch.indexOf(r)+i< arrSearch.length){
                    if(arrIndex.length<5){
                        arrIndex.push(arrSearch[arrSearch.indexOf(r)+i]); 
                        searchingResultsBlock.innerHTML= `${searchingResultsBlock.innerHTML}<div class="searchingResults" onmouseover="newResult()" style="padding:5%"> Song ${arrSearch[arrSearch.indexOf(r)+i]+1}: ${myMusic[arrSearch[arrSearch.indexOf(r)+i]].name}</div>`
                    }
                }   
            }
            searchingResultsBlock.innerHTML= `${searchingResultsBlock.innerHTML}<p style='float:left; padding-left:3%; cursor:pointer' onclick='clickBack(arrIndex[0])'>⬅️</p>`
            if(arrIndex.length===5){
                searchingResultsBlock.innerHTML= `${searchingResultsBlock.innerHTML} <p style='float:right; padding-right:3%; cursor: pointer' onclick='clickNext(arrIndex[arrIndex.length-1])'>➡️</p>`
            }    
        }       
    };

    let clickBack=(r)=>{
        if(r>4){
            arrIndex=[];
            searchingResultsBlock.innerHTML=``
            for(let i=-5; i<0; i++){
                if(arrSearch.indexOf(r)+i< arrSearch.length){
                    if(arrIndex.length<5){
                        arrIndex.push(arrSearch[arrSearch.indexOf(r)+i]); 
                        searchingResultsBlock.innerHTML= `${searchingResultsBlock.innerHTML}<div class="searchingResults" onmouseover="newResult()" style="padding:5%">Song ${arrSearch[arrSearch.indexOf(r)+i]+1}: ${myMusic[arrSearch[arrSearch.indexOf(r)+i]].name}</div>`
                    }
                }        
            }
            searchingResultsBlock.innerHTML= `${searchingResultsBlock.innerHTML} <p style='float:right; padding-right:3%; cursor: pointer' onclick='clickNext(arrIndex[arrIndex.length-1])'>➡️</p>`    
            if(arrIndex[0]>4){
                searchingResultsBlock.innerHTML= `${searchingResultsBlock.innerHTML}<p style='float:left; padding-left:3%; cursor:pointer' onclick='clickBack(arrIndex[0])'>⬅️</p>`
            }
        }   
    }

    let newResult= ()=>{
        for(let i=0; i<arrIndex.length; i++){
            searchingResults[i].addEventListener('click', function(){
                finder.value= `Song ${arrIndex[i]+1}: ${myMusic[arrIndex[i]].name}`
                searchingResultsBlock.innerHTML=``   
            })    
        }
    }
        
    let resetFinder= document.getElementById('resetFinder')  
    resetFinder.addEventListener('click', function(){
        finder.value='';
        searchingResultsBlock.innerHTML=``
    })      

    let musicVolume= document.getElementById('musicVolume');
    let volumeLabel= document.getElementById('volumeLabel')
    musicVolume.addEventListener('click', function(){
        music.volume= (musicVolume.value)/100
        volumeLabel.innerHTML= `${musicVolume.value}%`
    })

    let musicTimeline= document.getElementById('musicTimeline')
    musicTimeline.addEventListener('click', function(){
        music.currentTime= musicTimeline.value
        checkTime= musicTimeline.value
    })
    



