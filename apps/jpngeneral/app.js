require("Font8x12").add(Graphics);

var Anton;Anton=require("Storage").read("P_Anton.raw");
Graphics.prototype.setFontAnton = function(scale) {
  // Actual height 69 (68 - 0)
g.setFontCustom(atob(Anton), 46, atob("EiAnGicnJycnJycnEw=="), 78 + (scale << 8) + (1 << 16)); };

var Anton_Small; Anton_Small=require("Storage").read("P_Anton_Small.raw");
Graphics.prototype.setFontAntonSmall = function(scale) {
  // Actual height 53 (52 - 0)
  g.setFontCustom(atob(Anton_Small), 60 + (scale << 8) + (1 << 16));};

//-----------------------------------------------------------------------
//                VARIABLES  GENERALES
//-----------------------------------------------------------------------
var counterInterval; var momoregular;var boutton;
var x = g.getWidth() / 2; var y = g.getHeight() / 2;
var img="";var fic; var T;
var lit_img=0;var fic_img=["mote2","mote3","moto1","moto2"];
var timeout;
//-----------------------------------------------------------------------
//                FONCTIONS UTILITAIRES
//-----------------------------------------------------------------------
function Tsleep(ms) { var ok="0"; var debut;var maintenant;
  console.log("----");
  debut=Date.now(); while (ok=="0") { 
  if (boutton ==1 ) {ok="1"; boutton=0;} else{maintenant=Date.now(); if(maintenant-debut <= ms) {ok="0";} else {ok="1";} }
  }
}

function Sleep (s){ var nb;
  if (Math.floor(s)!=0) { for (nb=1;nb<=Math.floor(s);nb++) {Tsleep(1000);} }
  nb=Math.floor(s)-s; console.log (nb); if(nb!=0) { Tsleep(nb); }
}

function Tsleep_Led(ms,led,etat) {   var change=0; var ok="0"; var debut; var maintenant;
  debut=Date.now();
  while (ok=="0") {
     // TEST FIN
     if (boutton ==1 ) { ok="1"; boutton=0;}
     else { maintenant=Date.now(); if(maintenant-debut <=ms) {ok="0";} else {ok="1";}  }
    // BOUCLE + LED
    if (change==0) { if (etat==1) {  change=1; if (led==1) {LED1.write(1);} else { LED2.write(1);}  }}
    else { change=0; if (led==1) {LED1.write(0);} else { LED2.write(0);} }

    Tsleep(500);
  }
}
  
//--------------------------------------
//-------FCT -AFFICHAGES ----------------
function set_Aff() { g.clearRect(0,0,176,176); Bangle.drawWidgets(); g.setFontAlign(0,0); g.setFont("Vector",40); g.setColor(0,0,0);}

function lit_fic (i) { console.log(fic=fic_img[i]+".raw","Lecture"); img=require("Storage").read(fic=fic_img[i]+".raw"); console.log(img.length);lit_img=1;return(img); }

function D_ecran(img,x,y) {g.clearRect(0,0,176,176);g.drawImage(atob(img), x, y);Bangle.drawWidgets();console.log("xx");}

function aff_momoregular() {console.log("regular");D_ecran(img,0,24,1);}

//-------------------------------------------------------
// temperatures pression, altitude 
//
var history_T = [];var history_P = [];var history_A = [];
var temperature;var pression;var altitude;
var data;

function acqui_press() { Bangle.getPressure().then(data => { suite_press (data); });}
 
//------------------------------
function suite_press(data) {
  var temp=data.temperature; var rect_temp=-6.5;
  var press=data.pressure;  var rect_press=0;
  var alti=data.altitude; var rect_alti=62;
  
  // moyenne de 5 temperatures
  while (history_T.length>4) history_T.shift();
  history_T.push(temp); temperature = E.sum(history_T) / history_T.length; temperature +=rect_temp;
  
  temperature=temperature.toString();
  var point=temperature.indexOf(".");
  if (point==0) { point=temperature.length;temperature = temperature.substring(0,point);}
  else { temperature = temperature.substring(0,point)+"c"+temperature.substring(point+1,point+2);}
  //console.log("Temp:",temperature);

  // pression  : moyenne de 5 
  while (history_P.length>4) history_P.shift();
  history_P.push(press); pression = E.sum(history_P) / history_P.length; pression +=rect_press;
  
  pression=parseInt(pression)+0;
  //console.log("Pression:", pression);
  
  // altitude : moyenne de 5 
  while (history_A.length>4) history_A.shift();
  history_A.push(alti);  altitude = E.sum(history_A) / history_A.length; altitude +=rect_alti;
  
  altitude=parseInt(altitude)+0;
  //console.log("Altitude:",altitude);
}

//------------------------------------------------------

var calendar = []; var current = []; var next = []; var event =[]; var titre;
var nb_heures;var nb_minutes;

function updateCalendar() {
  calendar = require("Storage").readJSON("android.calendar.json",true)||[];
  calendar = calendar.filter(e => isActive(e) || getTime() <= e.timestamp);
  calendar.sort((a,b) => a.timestamp - b.timestamp);

  current = calendar.filter(isActive);
  next = calendar.filter(e=>!isActive(e));
}

function isActive(event) {
  var timeActive = getTime() - event.timestamp;
  return timeActive >= 0 && timeActive <= event.durationInSeconds;
}

function zp(str) { return ("0"+str).substr(-2);}

function timeToNext() {
  calen=" Sans elements";var entete;
  if (next.length !=0) { calen=next[0].title;var tempo=new Date(next[0].timestamp*1000);
      var offset = 0-tempo.getTimezoneOffset()/1440;
      var days = Math.floor((tempo.getTime()/1000)/86400+offset)-Math.floor(getTime()/86400+offset);
      if (days==0) { nb_heures=zp(tempo.getHours());nb_minutes=zp(tempo.getMinutes());calen=nb_heures+":"+nb_minutes+" "+calen;}
      else { entete = days===1?/*LANG*/"Demain ":/*LANG*/"J+"+days+" "; calen=entete+calen; }
  } 
}
//-------------------------------------------------------------------------------------------
//                AFFICHAGES 
//-------------------------------------------------------------------------------------------
var altern=0;

function aff_principal() { ecran=1; 
  console.log("ecran 1",img.length);

  set_Aff(); 
  //
  // --------- HEURE et MINUTE ------------------
  //
  var hh=new Date().getHours().toString(); var aff=hh+":";
  var mm=new Date().getMinutes().toString(); if (mm.length==1) { aff=aff+"0"; } aff=aff+mm;
    
  //  rectangle rouge/blanc 
  if ( altern==0 ) { g.setColor(1,0,0); g.fillRect (2,28,172,108); g.setColor(1,1,1); altern=1; } 
  else { // Blanc bleu
    if (altern==1) { g.setColor(0,0,1); altern=2; } 
    else { // blanc/rouge 
          if (altern==2) { g.setColor(1,0,0); altern=3; }
          else { // noir bleu clair
                g.setColor(0,0,0); g.fillRect (2,28,172,108); g.setColor('#00F0FF'); altern=0;}
         }
  }
  x=83;y=75;
  g.setFontAlign(0, 0).setFont("Anton").drawString(aff,x,y); 
  
  //-----------------------------------------------
  //       JOUR MOIS 
  //
  var jourSem = ""; var calWeek = false;
  jourSem = require("locale").dow(Date(), calWeek ? 1 : 0); 
  deb=jourSem.substring(0,1); deb=deb.toUpperCase(); jourSem = deb+jourSem.substring(1,3);
  // DATE MOIS 
  var dateOnMain = "Long"; var dateStr = (dateOnMain === "ISO8601" ? isoStr(Date()) : require("locale").date(Date(), (dateOnMain === "Long" ? 0 : 1)));
  var jourMois= dateStr.substring(0,2); 
  var blanc=dateStr.indexOf(" "); var mois =(dateStr.substring(blanc,dateStr.length)).substring(0,4);

  g.setColor(0,0,0); // noir
 
  x+=6; y+=55; dateStr=jourSem+"        "; g.setFont("8x12",3); g.drawString(dateStr, x, y);
  x+=40; y+=1; dateStr=jourMois+"    ";  g.setFont("Vector",40); g.drawString(dateStr,x,y);
  x+=6; y+=0;  dateStr=mois.toUpperCase(); g.setFont("8x12",3); g.drawString(dateStr,x,y);
  
  //-----------------------------------------------
  //        LIGNE RDV A VENIR 

  updateCalendar(); timeToNext();
  x=5; y+=32;
  g.setFont("Vector",20);
  g.setFontAlign(-1, 0);
  g.drawString(calen,x,y);

  if ((nb_heures==1) && (nb_minutes==0)) {Bangle.buzz(1000);}
  if ((nb_heures==0) && (nb_minutes==30)) {Bangle.buzz(2000); Tsleep(1000);Bangle.buzz(1000);}
  if ((nb_heures==0) && (nb_minutes==30)) {i=0; while(i<4) { Bangle.buzz(500);Tsleep(500);i+=1;} }

  //  ----  generiques

  acqui_press();
  if (lit_img==0) {img=lit_fic(0);}
}

//-----------------------------------------------------------------------

function aff_second() { ecran=2; set_Aff();

  console.log("affichage second");
  g.setFont("Vector",24);  g.setFontAlign(-1, 0);
  
  var batt=E.getBattery().toString()+ "%"; y=40; g.drawString("B:"+batt, x, y);
  y+=30;g.drawString(" T:"+temperature, x, y);
  var tend;
  if (pression-1013>=0){tend="Bo "+(pression-1013).toString();} else {tend="Mo "+(pression-1013).toString();}
  y+=30;g.drawString("P:"+pression+" "+tend, x, y);
  y+=30;g.drawString(" Alt:"+altitude+" m", x, y);  
}

//-------------------------------------------------------
//          PAGE CALENDRIER 

function fait_titre(titre) {
  if (titre!="") { if (titre.length>10) { titre=titre.substring(0,10); }  }
  console.log(titre,titre.length);
  return titre;
}

var Haut=24; var inter=0;

function drawEventHeader(event, y) {

  g.setFont("Vector", Haut);

  var time = isActive(event) ? new Date() : new Date(event.timestamp * 1000);
  var timeStr = zp(time.getHours()) + ":" + zp(time.getMinutes());

  y += 0; x=5;
  
  if (isActive(event)) {
     g.drawString(zp(time.getDate())+"." + require("locale").month(time,1),x,y);
  } else {
     var offset = 0-time.getTimezoneOffset()/1440;
     var days = Math.floor((time.getTime()/1000)/86400+offset)-Math.floor(getTime()/86400+offset);
     if(days > 0) { 
       //g.setFont("Vector", 24);
       var daysStr = days===1?/*LANG*/"Demain":/*LANG*/"J+"+days+" "; g.drawString(daysStr,x,y);
    }
 }
  g.drawString(timeStr, 100, y);  
  y+=Haut+inter;
  return y;
}
 
function drawEventBody(titre,y) {x=3; g.setFont("Vector", Haut); if (titre != "") {g.drawString(titre, x, y); y+=Haut+inter;}
  return y;
}

function drawEvent(event,titre,y) {y = drawEventHeader(event, y); y = drawEventBody(titre, y); return y;}

var curEventHeight = 0;

function drawCurrentEvents(y) {
  
  g.setColor(0,0,1); g.clearRect(5, y, g.getWidth() - 5, y + curEventHeight); curEventHeight = y;

  if(current.length === 0) { titre="";titre=fait_titre(titre); console.log("premiere ligne");
   // y = drawEvent({timestamp: getTime(), durationInSeconds: 100},titre, y);
  } 
  else {y = drawEventHeader(current[0], y);
    for (event of current) { console.log("current"); titre=event.title;titre=fait_titre(titre);y = drawEventBody(titre, y);}
  }
  curEventHeight = y - curEventHeight;
  return y;
}

function drawFutureEvents(y) { g.setColor(g.theme.fg);
  for (event of next) { console.log("futur"); titre=event.title;titre=fait_titre(titre); y = drawEvent(event,titre,y);
    if(y>g.getHeight())break;
  }
  return y;
}

//-----------------------------------------------------------------------
function aff_agenda() { ecran=3;set_Aff();

  console.log ("troisieme ecran");

  g.setFontAlign(-1, 0); g.clearRect(5,24,g.getWidth()-5,g.getHeight());
  updateCalendar();
  y = 33;  y = drawCurrentEvents(y); drawFutureEvents(y);
}
//-----------------------------------

var k=0;
// ---------------
function aff_momo() { ecran=4;console.log(" Diaporama :",ecran,k);
     img=lit_fic(k); D_ecran(img,0,24); k +=1; 
     if (k==(fic_img.len)+1) {k=0; clearTimeout(tp_momo);lit_img=0;}
     else {clearTimeout(tp_momo);tp_momo=setTimeout(aff_momo,5000);}
}

//-----------------------------------------------------------------------
//                         PRINCIPAL
//--------------------                -----------------------------------
var tp_momo;

function aiguillage (){
  console.log("Boutton");
  // Pour arreter Tsleep 
  boutton=1;

  if (ecran==1) { aff_second();}
  else { if (ecran==2) { aff_agenda();} 
         else { if (ecran==3) { tp_momo=setTimeout(aff_momo,5000);aff_momo(); }
                else { // Show launcher when middle button press
                       Bangle.setUI("clock"); }
              }
       }
}

//------------------

function general() {

  acqui_press();
  
  // rafraichissement en secondes   nb de cycles avant momo
  
  //var rafraichi=6; var nbaffpr_momo=2; // tous les x/2 momo 
  var rafraichi=60; var nbaffpr_momo=8;
  
  if (!counterInterval)
      counterInterval = setInterval(aff_principal, rafraichi*1000);

  var moins_tps; var inter_momo;var laps=15; //limite max d affichage
  if ((0,5*rafraichi) >=laps) {moins_tps=laps;} else {moins_tps=(0,5*rafraichi);}
  inter_momo=((nbaffpr_momo*rafraichi)-moins_tps)*1000;
  if (!momoregular)
      momoregular = setInterval(aff_momoregular,inter_momo);
  
  aff_principal();
  
}


//--------------------     MAIN           -----------------------------------


//setTimeout(general,10000);

// Load widgets
Bangle.loadWidgets();

Bangle.setBarometerPower(true);

setWatch(aiguillage ,BTN1,{edge:"rising", debounce:30, repeat:true});

general ();


// Register hooks for LCD on/off event and screen lock on/off event
//Bangle.on('lcdPower', on => {   general(); });
//Bangle.on('lock', on => { general(); });

// end of file
