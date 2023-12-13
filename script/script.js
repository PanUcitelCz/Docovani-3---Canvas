let x = 20;
let dx = 5;
let y = 20;
let dy = 5;

function vykreslit(){

    let obsah = document.getElementById("platno").getContext("2d");

    //Čtvereček
    /*obsah.fillStyle="blue";
    obsah.strokeStyle="yellow";
    obsah.lineWidth=4;
    obsah.moveTo(30,30);
    obsah.lineTo(30,70);
    obsah.lineTo(70,70);
    obsah.lineTo(70,30);
    obsah.lineTo(30,30);
    obsah.closePath();
    obsah.fill();
    obsah.stroke();*/
    
    //Geometrické tvary
    /*obsah.beginPath()
    obsah.rect(20,20,150,100);
    obsah.fillStyle="blue";
    obsah.fill();
    obsah.stroke();
    
    obsah.beginPath();
    obsah.rect(70,150,100,100);
    obsah.fillStyle="orange";
    obsah.fill();
    obsah.stroke();*/  
    
    //Kulikča v pohybu
    if(x<5 || x>569)
    {
        dx=-dx
    }

    else if(y<5 || y>269)
    {
        dy=-dy;
    }

    x+=dx;
    y+=dy;
    
    
    obsah.fillStyle='rgba(255,0,255,0.25)';
    obsah.fillRect(0,0,600,300);
    //obsah.clearRect(0,0,600,300);
    
    obsah.beginPath();
    obsah.arc(x+15, y+16, 15, 0, 2*Math.PI);
    obsah.fillStyle="Aqua";
    obsah.fill();
    obsah.stroke();
}

//setInterval(vykreslit,1);