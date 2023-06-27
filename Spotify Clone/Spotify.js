console.log("Welcome to Spotify");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/4.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgreessBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let gif1 = document.getElementById('bd');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
        {songName : "Kun-Faya-Kun" , filePath: "songs/1.mp3" , coverPath: "https://i.ytimg.com/vi/-aGe-2oUAX4/maxresdefault.jpg"} ,
        {songName : "Shree Krishna Flute " , filePath: "songs/2.mp3" , coverPath: "https://i.ytimg.com/vi/NRmSf9VqrUA/maxresdefault.jpg"} ,
        {songName : "I Tried So Hard" , filePath: "songs/3.mp3" , coverPath: "https://pbs.twimg.com/profile_images/1240708436775632899/lHL8ty85_400x400.jpg"},
        {songName : "Invisible" , filePath: "songs/4.mp3" , coverPath: "https://www.jamsbase.com/wp-content/uploads/2022/06/Somebody-Like-U.jpg"},
        {songName : "Darkside" , filePath: "songs/5.wav" , coverPath: "https://i0.wp.com/talkglitz.media/wp-content/uploads/2019/03/Download-mp3-Alan-Walker-Sabrina-Carpenter-Farruko-On-My-Way-mp3-Download.jpg?fit=1280%2C720&ssl=1"},
        {songName : "Into Your Arm" , filePath: "songs/6.mp3" , coverPath: "https://ichef.bbci.co.uk/images/ic/960x540/p0b2w95p.jpg"},
        {songName : "Marshmellow" , filePath: "songs/7.mp3" , coverPath: "https://lastfm.freetls.fastly.net/i/u/ar0/3f632084024e5540bbe717fd4692ca28"},


]

songItems.forEach((element, i)=>{
// console.log(element,i);
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click' , ()=>
{
        if(audioElement.paused || audioElement.currentTime<=0)
        {
                audioElement.play();
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                gif.style.opacity = 1;
                gif1.style.opacity = 1;

        }
        else
        {
                audioElement.pause();
                masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
                gif.style.opacity = 0;
                

        }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
        // console.log('timeupdate');

//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
myProgreessBar.value = progress;
} )

myProgreessBar.addEventListener('change', ()=>{
        audioElement.currentTime = myProgreessBar.value * audioElement.duration/100;
})

const makeAllPlays = () =>
{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
        {       
                
                element.classList.remove('fa-circle-pause');
                element.classList.add('fa-circle-play') ;
        })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
        element.addEventListener('click',(e)=>
        {
                // console.log(e.target);
                makeAllPlays();
                songIndex = parseInt(e.target.id);
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                audioElement.src = `songs/${songIndex+1}.mp3` ;
                masterSongName.innerText = songs[songIndex].songName;
                audioElement.currentTime = 0;
                audioElement.play();
                gif.style.opacity = 1;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
        })
})

                document.getElementById('next').addEventListener('click', ()=> {
                        if(songIndex>=6)
                        {
                                songIndex = 0;
                                gif.style.opacity = 1;
                        }
                        else
                        {
                                songIndex += 1;
                                gif.style.opacity = 1;
                        }
                        audioElement.src = `songs/${songIndex+1}.mp3` ;
                masterSongName.innerText = songs[songIndex].songName;
                audioElement.currentTime = 0;
                audioElement.play();
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                })
                document.getElementById('Previous').addEventListener('click', ()=> {
                        if(songIndex<=0)
                        {
                                songIndex = 0;
                                gif.style.opacity = 1;
                        }
                        else
                        {
                                songIndex -= 1;
                                gif.style.opacity = 1;
                        }
                        audioElement.src =`./songs/${songIndex+1}.mp3` ;
                masterSongName.innerText = songs[songIndex].songName;
                audioElement.currentTime = 0;
                audioElement.play();
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                })

                function changebackground(){
                        document.getElementById('bd').style.backgroundImage="url(https://www.oxigenio.fm/wp-content/uploads/2020/11/Music-Listening-1.jpg)";
                }
                function background3(){
                        document.getElementById('bd').style.backgroundImage="url(https://scitechdaily.com/images/Plasma-Energy-Generation-Concept-Slow.gif)";
                }
                function background1()
                {
                        document.getElementById('bd').style.backgroundImage="url(https://cdn.dribbble.com/users/746306/screenshots/4639102/wave_sound.gif)";
                }
                function background2()
                {
                        document.getElementById('bd').style.backgroundImage="url(https://cdn.dribbble.com/users/829077/screenshots/6314208/sirilike.gif)";
                }
                function background0()
                {
                        document.getElementById('bd').style.backgroundImage="url(https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif)";
                }

                function background4()
                {
                        document.getElementById('bd').style.backgroundImage="url(https://i.gifer.com/LCPT.gif )";
                }
                function background5()
                {
                        document.getElementById('bd').style.backgroundImage="url(https://i.pinimg.com/originals/9d/f5/22/9df522a31e95f6b502f12cf3b5fe227e.gif)";
                }
                function background6()
                {
                        document.getElementById('bd').style.backgroundImage="url(https://cdn.dribbble.com/users/479289/screenshots/4919148/ezgif.com-optimize.gif)";
                }
                function background7()
                {
                        document.getElementById('bd').style.backgroundImage="url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/e2a03d31641415.565a78be188d4.gif)";
                }