require("Font8x12").add(Graphics);

var Anton;Anton=require("Storage").read("P_Anton.raw");
Graphics.prototype.setFontAnton = function(scale) {
  // Actual height 69 (68 - 0)
g.setFontCustom(atob(Anton), 46, atob("EiAnGicnJycnJycnEw=="), 78 + (scale << 8) + (1 << 16)); };

var Anton_Small; Anton_Small=require("Storage").read("P_Anton_Small.raw");
Graphics.prototype.setFontAntonSmall = function(scale) {
  // Actual height 53 (52 - 0)
  g.setFontCustom(atob(Anton_Small), 60 + (scale << 8) + (1 << 16));};

var couleur=[
  {"code":"1","nom":"Noir","valeur":"0x0000"},
  {"code":"2","nom":"Bleu_fonce","valeur":"0x000F"},
  {"code":"3","nom":"Vert_fonce","valeur":"0x03E0"},
  {"code":"4","nom":"Bordeaux","valeur":"0x7800"},
  {"code":"5","nom":"Violet","valeur":"0x780F"},
  {"code":"6","nom":"Olive","valeur":"0x7BE0"},
  {"code":"7","nom":"Gris_clair","valeur":"0xC618"},
  {"code":"8","nom":"Gris_fonce","valeur":"0x7BEF"},
  {"code":"9","nom":"Bleu","valeur":"0x001F"},
  {"code":"10","nom":"Vert","valeur":"0x07E0"},
  {"code":"11","nom":"Rouge","valeur":"0xF800"},
  {"code":"12","nom":"Magenta","valeur":"0xF81F"},
  {"code":"13","nom":"Jaune","valeur":"0xFFE0"},
  {"code":"14","nom":"Blanc","valeur":"0xFFFF"},
  {"code":"15","nom":"Orange","valeur":"0xFD20"},
  {"code":"16","nom":"Vert_jaune","valeur":"0xAFE5"},
  {"code":"17","nom":"Rose","valeur":"0xF81F"},
  {"code":"18","nom":"Cyan_fonce","valeur":"0x03EF"},
  {"code":"19","nom":"Cyan","valeur":"0x07FF"},
   ];

aff_type=[
  { "bg":"colioure","bg_l1":"No","fg_l1":"Bleu_fonce","bg_l2":"No","fg_l2":"Bleu_fonce","bg_l3":"No","fg_l3":"Blanc"},
  { "bg":"No","bg_l1":"Rouge","fg_l1":"Blanc","bg_l2":"No","fg_l2":"Noir","bg_l3":"No","fg_l3":"Noir"},
  { "bg":"terre","bg_l1":"No","fg_l1":"Jaune","bg_l2":"No","fg_l2":"Blanc","bg_l3":"No","fg_l3":"Blanc"},
  { "bg":"No","bg_l1":"Noir","fg_l1":"Orange","bg_l2":"Noir","fg_l2":"Jaune","bg_l3":"Noir","fg_l3":"Blanc"},
  { "bg":"montagne","bg_l1":"No","fg_l1":"Bleu_fonce","bg_l2":"No","fg_l2":"Blanc","bg_l3":"No","fg_l3":"Noir"},
  { "bg":"No","bg_l1":"Orange","fg_l1":"Bleu","bg_l2":"No","fg_l2":"Rouge","bg_l3":"No","fg_l3":"Bleu_fonce"},
  ];


var fic_img=["mote2","mote3","moto2"];

//-----------------------------------------------------------------------
//                VARIABLES  GENERALES
//-----------------------------------------------------------------------
var counterInterval; var momoregular;var boutton;
var x = g.getWidth() / 2; var y = g.getHeight() / 2; var Haut=24;
var img="";var fic; var T;
var lit_img=0;
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

function Tsleep_Led(ms,led,etat) {   var change=0; var ok=0; var debut; var maintenant;
  debut=Date.now();
  while (ok==0) {
     // TEST FIN
     if (boutton ==1 ) { ok=1; boutton=0;}
     else { maintenant=Date.now(); if(maintenant-debut <=ms) {ok=0;} else {ok=1;}  }
    // BOUCLE + LED
    if (change==0) { if (etat==1) {  change=1; if (led==1) {LED1.write(1);} else { LED2.write(1);}  }}
    else { change=0; if (led==1) {LED1.write(0);} else { LED2.write(0);} }

    Tsleep(500);
  }
}
  
//--------------------------------------
//-------FCT -AFFICHAGES ----------------
function set_Aff() { g.clearRect(0,0,176,176); Bangle.drawWidgets(); g.setFontAlign(0,0); g.setFont("Vector",40); g.setColor(0,0,0);}

function color_it(c_champ) { var ic; for (ic in couleur ) {if (c_champ == couleur[ic].nom) 
 { g.setColor(Number(couleur[ic].valeur));ic=couleur.length;} }}

function lit_fic (i) { console.log(fic=fic_img[i]+".raw","Lecture"); img=require("Storage").read(fic=fic_img[i]+".raw"); console.log(img.length);lit_img=1;return(img); }

function D_ecran(img,x,y) {g.clearRect(0,0,176,176);g.drawImage(atob(img), x, y);Bangle.drawWidgets();console.log("xx");}

function aff_momoregular() {console.log("regular");D_ecran(img,0,24,1);}


//-----------------------------------------------------
//      Memoire
// ={ free: 11908, usage: 92, total: 12000, history: 4, gc: 2, 
// gctime: 20.263671875, blocksize: 15, stackEndAddress: 537089304, flash_start: 0,
// flash_binary_end: 594656, flash_code_start: 1610612736, flash_length: 1048576 }}
var imp_util=["","","",""];
var mem_util=["","","",""];
var anc_util=["","","",""];
function ressource() {
  var i=0;
  while (i!=4) {anc_util[i]=mem_util[i];i +=1;}
  var pack=process.memory(true);
  var bloc=parseInt(pack.blocksize);

  mem_util[0]=Math.floor(parseInt(pack.free)*bloc/1000).toString();
  imp_util[0]="M Libre: "+mem_util[0]+" k / "+anc_util[0];
  mem_util[1]=Math.floor(parseInt(pack.usage)*bloc/1000).toString();
  imp_util[1]="M utili: "+mem_util[1]+" k / "+anc_util[1];
  mem_util[2]=Math.floor(parseInt(pack.total)*bloc/1000).toString();
  imp_util[2]="M Total: "+mem_util[2]+" k / "+anc_util[2];
  mem_util[3]=Math.floor(parseInt(pack.flash_length)*bloc/1000).toString();
  imp_util[3]="M Flash: "+mem_util[3]+" k / "+anc_util[3];
  console.log(imp_util);
  return (imp_util,mem_util,anc_util);
}

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
  else { temperature = temperature.substring(0,point+2);}

  // pression  : moyenne de 5 
  while (history_P.length>4) history_P.shift();
  history_P.push(press); pression = E.sum(history_P) / history_P.length; pression +=rect_press;
  
  pression=parseInt(pression)+0;
  
  // altitude : moyenne de 5 
  while (history_A.length>4) history_A.shift();
  history_A.push(alti);  altitude = E.sum(history_A) / history_A.length; altitude +=rect_alti;
  
  altitude=parseInt(altitude)+0;
}



var calendar = []; var current = []; var next = []; var event =[]; var titre;
var nb_heures;var nb_minutes;
//-----------------------------------------------------------------------------------------
function updateCalendar() { 
  calendar = require("Storage").readJSON("android.calendar.json",true)||[];
  calendar = calendar.filter(e => isActive(e) || getTime() <= e.timestamp);
  calendar.sort((a,b) => a.timestamp - b.timestamp);

  current = calendar.filter(isActive);
  next = calendar.filter(e=>!isActive(e));
}
//-----------------------------------------------------------------------------------------

function isActive(event) {
  var timeActive = getTime() - event.timestamp;
  return timeActive >= 0 && timeActive <= event.durationInSeconds;
}

function zp(str) { return ("0"+str).substr(-2);}

var chaine; var nb=10;
//-----------------------------------------------------------------------------------------
function limit_chaine (chaine,nb) {
  if (chaine.length !=0) { if (chaine.length>=nb+1) {chaine=chaine.substring(0,nb);} }
  return chaine;
}
var calen;
//-----------------------------------------------------------------------------------------
function timeToNext() {
  calen=" ";var entete;
  if (next.length !=0) { calen=limit_chaine(next[0].title,10);var tempo=new Date(next[0].timestamp*1000);
      var offset = 0-tempo.getTimezoneOffset()/1440;
      var days = Math.floor((tempo.getTime()/1000)/86400+offset)-Math.floor(getTime()/86400+offset);
      nb_heures=zp(tempo.getHours());nb_minutes=zp(tempo.getMinutes());
      if (days==0) { calen=nb_heures+":"+nb_minutes+" "+calen;}
      else { entete = days===1?/*LANG*/"Demain ":/*LANG*/"J+"+days+" "; calen=entete+calen;}
  } 
}

//-----------------------------------------------------------------------------------------
//                AFFICHAGES 
//-----------------------------------------------------------------------------------------
var altern=0;

//-----------------------------------------------------------------------------------------
function aff_principal() { ecran=1; console.log("ecran 1",img.length);
  
                          
  set_Aff();updateCalendar(); timeToNext();
  var offset;
  offset=0;
  if (calen==" ") offset=24;
  //
  // --------- HEURE et MINUTE ------------------
  //
  var hh=new Date().getHours().toString(); var aff=hh+":";
  var mm=new Date().getMinutes().toString(); if (mm.length==1) aff=aff+"0"; aff=aff+mm;

  var fond=""; var ic;
  
   // ---  FOND ------                      
  if (aff_type[altern].bg !="No") { fond=require("Storage").read(aff_type[altern].bg+".raw");
       console.log (aff_type[altern].bg+".raw",fond.length);
       g.drawImage( require("heatshrink").decompress(atob(fond)),0,0); //Bangle.drawWidgets();
       }
  
   // -------RECTANGLE                       
  if (aff_type[altern].bg_l1 !="No") { color_it(aff_type[altern].bg_l1); g.fillRect (0,28+offset,176,108+offset); }
  color_it(aff_type[altern].fg_l1);
  
   x=83;y=75+offset;
                        
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

  x+=6; y+=55;

  if (aff_type[altern].bg_l2 !="No") { color_it(aff_type[altern].bg_l2); g.fillRect (0,y-22,176,y+40);}
  color_it(aff_type[altern].fg_l2);

  dateStr=jourSem+"        "; g.setFont("8x12",3); g.drawString(dateStr, x, y);
  x+=40; y+=1;
  dateStr=jourMois+"    ";  g.setFont("Vector",40); g.drawString(dateStr,x,y);
  x+=6; y+=0;
  dateStr=mois.toUpperCase(); g.setFont("8x12",3); g.drawString(dateStr,x,y);
  
  //-----------------------------------------------
  //        LIGNE RDV A VENIR 

  x=5; y+=32;
  if (calen!=" ") {                        
      //   Cadre ou pas 
      if (aff_type[altern].bg_l3 !="No") { 
             color_it(aff_type[altern].bg_l3); g.fillRect(0,y,176,y+24);}
      // couleur texte
      color_it(aff_type[altern].fg_l3);
      g.setFont("Vector",23); g.setFontAlign(-1, 0);   g.drawString(calen,x,y);
  }

  // Vibrations en amont du RDV
  if ((nb_heures==1) && (nb_minutes==0)) {Bangle.buzz(2000);}
  if ((nb_heures==0) && (nb_minutes==30)) {Bangle.buzz(2000); Tsleep(1000);Bangle.buzz(1000);}
  if ((nb_heures==0) && (nb_minutes==10)) {i=0; while(i<4) { Bangle.buzz(500);Tsleep(500);i+=1;} }

  // Passage au style suivant 
  altern +=1;if (altern>=aff_type.length) altern=0;
  console.log(altern);
  //  ----  generiques
  acqui_press();
  if (lit_img==0) img=lit_fic(0);
}

//--------------  PAGE DES DONNEES ------------------------------------------------

function aff_second() { ecran=2; set_Aff();
  Haut=22;var inc=0;
  console.log("affichage second");
  g.setFont("Vector",Haut);  g.setFontAlign(-1, 0);

  x=10; y=24+inc;

  var batt=E.getBattery().toString()+ " %";g.drawString(" Batt: "+batt, x, y);
  y+=Haut+inc;
  g.drawString("Temp: "+temperature+" C", x, y);y+=Haut+inc;

  var tend;
  if (pression-1013>=0){tend="Bo"+(pression-1013).toString();color_it("Bleu");} 
  else {tend="Mo"+(pression-1013).toString(); color_it("Rouge");}
  g.drawString("P:"+pression+" "+tend, x, y);y+=Haut+inc;

  color_it("Noir");
  g.drawString(" Alt: "+altitude+" m", x, y);y+=Haut+inc;

  //imp_util,mem_util,anc_util=
  ressource();
  var i=0;
  while(i!=3) {console.log(i, imp_util[i]);
                    g.drawString(imp_util[i].substring(0,14),x,y);y+=Haut+inc;i +=1;}

}


//-------------------------------------------------------
//          PAGE CALENDRIER 

var inter=0;

function drawEventHeader(event, y) {
  Haut=24; 
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

  if(current.length === 0) { titre=""; console.log("premiere ligne");} 
  else {y = drawEventHeader(current[0], y);
    for (event of current) { console.log("current"); titre=limit_chaine(event.title,10);
                             y = drawEventBody(titre, y);}
  }
  curEventHeight = y - curEventHeight;
  return y;
}

function drawFutureEvents(y) { g.setColor(g.theme.fg);
  for (event of next) { console.log("futur");titre=limit_chaine(event.title,10);
                       y = drawEvent(event,titre,y);
                       if(y>g.getHeight())break; }
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