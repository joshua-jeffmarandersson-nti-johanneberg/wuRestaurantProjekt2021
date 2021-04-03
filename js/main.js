
// Disable phone rotating
//screen.lockOrientation("portrait-primary");


function DisplayIndex()
{
    document.querySelector(".code-container").style.display = "none";

    document.querySelector(".site-container").style.display = "block";
    document.querySelector(".navbar").style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => 
{
    codeContainer = document.getElementsByClassName("code-container")[0];
    // console.log(textboi)
    htmlsource = document.getElementsByTagName('html')[0].innerHTML.toString();
    linuxstring = "joshua@linux-desktop: $touch index.html\njoshua@linux-desktop: vim index.html\n"
    htmlsource = linuxstring + htmlsource

    htmlsource = htmlsource.replace(/</g, "&lt;")
    htmlsource = htmlsource.replace(/>/g, "&gt;")

    lines = htmlsource.split("\n");


    
    //console.log("done")
  
    codeContainer.innerHTML = "<pre id=\"preload-code\"></pre>";
    i = 0
    codeString = ""
    doneLinux = false
    function RenderCode()
    {
        codeString += htmlsource[i]
        codeContainer.innerHTML = "<pre id=\"preload-code\">" + codeString + ((i/10 % 2 == 0) ? "|" : "") + "</pre>";
        i +=1;
        if (true)
        {
            DisplayIndex();
            return;
        }

        if (i >= linuxstring.length && !doneLinux)
        {
            codeString = ""
            htmlsource = htmlsource.slice(linuxstring.length, htmlsource.length)
            i=0
            doneLinux=true
        }
        if (i == linuxstring.length - 1)
        {
            setTimeout(() => {
                RenderCode()
                w3CodeColor(document.getElementsByClassName("code-container")[0]);
            }, ((doneLinux) ? 0 : 100));
        }
        else if (i < htmlsource.length - 1)
        {
            setTimeout(() => {
                RenderCode()
                w3CodeColor(document.getElementsByClassName("code-container")[0]);
            }, ((doneLinux) ? 0 : 30));
            
        }
        else
        {
            DisplayIndex();
        }
    }

    RenderCode()

});

var ONLYONETIME_EXECUTE = null;
window.addEventListener('load', function(){ // on page load
    let player = document.querySelector("#bad-apple-player")
    console.log(player)
    player.play()
      document.body.addEventListener('touchstart', function(e)
      {
    
    if (ONLYONETIME_EXECUTE == null) {   


        let player = document.querySelector("#bad-apple-player")
        console.log(player)
        player.play();

        //if you want to prepare more than one video/audios use this trick :             
          // now video2 is buffering and you can play it programmability later 
          // My personal testing was maximum 6 video/audio for android 
          // and maybe 3 max for iOS using single click or touch.
          // Every next click also can prepare more audios/videos.

        ONLYONETIME_EXECUTE = 0;
    }

  }, false)
 
}, false)