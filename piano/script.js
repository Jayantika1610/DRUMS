const keyMap={
    'A': "../piano/pianotunes/A.wav",
    'W': "../piano/pianotunes/W.wav",
    'S': "../piano/pianotunes/S.wav",
    'E': "../piano/pianotunes/E.wav",
    'D': "../piano/pianotunes/D.wav",
    'F': "../piano/pianotunes/F.wav",
    'T': "../piano/pianotunes/T.wav",
    'G': "../piano/pianotunes/G.wav",
    'Y': "../piano/pianotunes/Y.wav",
    'H': "../piano/pianotunes/H.wav",
    'U': "../piano/pianotunes/U.wav",
    'J': "../piano/pianotunes/J.wav",
    'K': "../piano/pianotunes/K.wav",
    'O': "../piano/pianotunes/O.wav",
    'L': "../piano/pianotunes/L.wav",
    'P': "../piano/pianotunes/P.wav",
    ';': "../piano/pianotunes/;.wav"
}


var pianokeys= document.querySelectorAll(".allkeys .key");
var audio=null;
const volSlider= document.querySelector(".volume-slid input");
const playthis= (key)=>{
    audio=new Audio(keyMap[key]);
    audio.play();
}

pianokeys.forEach(key => {
    key.addEventListener("click", ()=> playthis(key.textContent)
    );
});
const changeVolume=(e)=>{
    audio.volume=parseFloat(e.target.value);
}

volSlider.addEventListener("input", changeVolume);
