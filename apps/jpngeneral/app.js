//-----------------------------------------------------------------
//       PROGRAMME  JPN GENERAL 
//------------------------------------------------------------------

// -------------   CHARGEMENT FICHIERS  FONTS 
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

//  Type affichage : Fichier Fond / No ,
//  xx : 1 HH:MM, 2/ Date  3 :Ligne =>  bg:rectange/No , couleur fg : coul texte

aff_type=[ 
  { "bg":"colioure","bg_l1":"No","fg_l1":"Bleu_fonce","bg_l2":"No","fg_l2":"Bleu_fonce","bg_l3":"No","fg_l3":"Blanc"},
  { "bg":"fd_bg_cal","bg_l1":"Rouge","fg_l1":"Blanc","bg_l2":"No","fg_l2":"Noir","bg_l3":"No","fg_l3":"Noir"},
  { "bg":"terre","bg_l1":"No","fg_l1":"Jaune","bg_l2":"No","fg_l2":"Blanc","bg_l3":"No","fg_l3":"Blanc"},
  { "bg":"fd_bg_mult","bg_l1":"No","fg_l1":"Noir","bg_l2":"Noir","fg_l2":"Jaune","bg_l3":"Noir","fg_l3":"Blanc"},
  { "bg":"montagne","bg_l1":"No","fg_l1":"Jaune","bg_l2":"No","fg_l2":"Blanc","bg_l3":"No","fg_l3":"Noir"},
  { "bg":"fd_bg_eau","bg_l1":"No","fg_l1":"Blanc","bg_l2":"No","fg_l2":"Blanc","bg_l3":"No","fg_l3":"Blanc"},
  ];

//-----------------------------------------------------------------------
//                VARIABLES  GENERALES
//-----------------------------------------------------------------------
var boutton;
var x = g.getWidth() / 2; var y = g.getHeight() / 2; var Haut=24;
var img="";var fic; var T;
var lit_img=0;
var timeout;


var calendar = []; var current = []; var next = [];
var courant=[]; var suivant=[];
var sortie ={};
var  d_jour=24*60*60*1000;
var now = new Date();
var event={};var ligne_premier="";var inter = 0;

//-----------------------------------------------------------------------
//                FONCTIONS UTILITAIRES
//-----------------------------------------------------------------------
function Tsleep(ms) 

{ var ok="0"; var debut;var maintenant;
  console.log("----");
  debut=Date.now(); while (ok=="0") { 
  if (boutton ==1 ) {ok="1"; boutton=0;} else{maintenant=Date.now(); if(maintenant-debut <= ms) {ok="0";} else {ok="1";} }
  }
}

function Sleep (s){ var nb;
                   
  if (Math.floor(s)!=0) { for (nb=1;nb<=Math.floor(s);nb++) {Tsleep(1000);} }
  nb=Math.floor(s)-s; console.log (nb); if(nb!=0) { Tsleep(nb); }
}

function Tsleep_Led(ms,led,etat) 

{   var change=0; var ok=0; var debut; var maintenant;
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
function set_Aff() 

{ g.clearRect(0,0,176,176); Bangle.drawWidgets(); 
  g.setFontAlign(0,0); g.setFont("Vector",40); g.setColor(0,0,0);}

function color_it(c_champ) 

{ var ic; g.setColor(Number("0x000F"));for (ic in couleur ) {if (c_champ == couleur[ic].nom) 
 { g.setColor(Number(couleur[ic].valeur));ic=couleur.length;} }}

function lit_fic (i) 

{ console.log(fic=fic_img[i]+".raw","Lecture"); img=require("Storage").read(fic=fic_img[i]+".raw"); console.log(img.length);lit_img=1;return(img); }

function D_ecran(img,x,y) 

{g.clearRect(0,0,176,176);g.drawImage(atob(img), x, y);Bangle.drawWidgets();console.log("xx");}

function aff_momoregular() {console.log("regular");D_ecran(img,0,24,1);}

//-----------------------------------------------------
//      Memoire = pack 
// ={ free: 11908, usage: 92, total: 12000, history: 4, gc: 2, 
// gctime: 20.263671875, blocksize: 15, stackEndAddress: 537089304, flash_start: 0,
// flash_binary_end: 594656, flash_code_start: 1610612736, flash_length: 1048576 }}
var imp_util = ["", "", "", ""];
// -------
function ressource() 

{
  var pack = process.memory(true);
  var bloc = parseInt(pack.blocksize);
  imp_util[0] = "M Libre: " + Math.floor(parseInt(pack.free) * bloc / 1000).toString() + " k";
  imp_util[1] = "M utili: " + Math.floor(parseInt(pack.usage) * bloc / 1000).toString() + " k";
  console.log(imp_util);
  return (imp_util);
}

//-------------------------------------------------------
// temperatures pression, altitude 
//
var history_T = []; var history_P = []; var history_A = [];
var temperature; var pression; var altitude; var data;

function acqui_press() 

{ Bangle.getPressure().then(data => {
    suite_press(data);
  });
}

//------------------------------
function suite_press(data) 

{ var temp = data.temperature; var rect_temp = -6.5;
  var press = data.pressure;  var rect_press = 0;
  var alti = data.altitude;  var rect_alti = 62;

  // moyenne de 5 temperatures
  while (history_T.length > 4) history_T.shift();
  history_T.push(temp);
  temperature = E.sum(history_T) / history_T.length;
  temperature += rect_temp;

  temperature = temperature.toString();
  var point = temperature.indexOf(".");
  if (point == 0) {
    point = temperature.length;
    temperature = temperature.substring(0, point);
  } else {
    temperature = temperature.substring(0, point + 2);
  }

  // pression  : moyenne de 5 
  while (history_P.length > 4) history_P.shift();
  history_P.push(press);
  pression = E.sum(history_P) / history_P.length;
  pression += rect_press;

  pression = parseInt(pression) + 0;

  // altitude : moyenne de 5 
  while (history_A.length > 4) history_A.shift();
  history_A.push(alti);
  altitude = E.sum(history_A) / history_A.length;
  altitude += rect_alti;

  altitude = parseInt(altitude) + 0;
}

//-------------------------------------------------------------------------

function isActive(event) 

{ var timeActive = getTime() - event.timestamp;
  return timeActive >= 0 && timeActive <= event.durationInSeconds;
}

function zp(str) {return ("0" + str).substr(-2);}
//-------------------

function remanie_elem (event) 

{ sortie.id=event.id;
  if (event.title.length<=10) sortie.titre=event.title;
  else sortie.titre=event.title.substring(0,14);
  sortie.moment=event.timestamp;
  sortie.duree=event.durationInSeconds;
  sortie.journee=event.allDay;
  
  var Rdv = new Date(event.timestamp * 1000);
  sortie.HH=zp(Rdv.getHours())+":"+zp(Rdv.getMinutes());
  //console.log(now,Rdv);
  sortie.nbj=Math.floor(Rdv.getTime()/d_jour)-Math.floor(now.getTime()/d_jour);
  if (sortie.nbj==0) 
     {sortie.date="          ";
      sortie.premier=sortie.HH;}
  else 
     {sortie.date=("J+"+sortie.nbj+"      ").substring(0,12);
      sortie.premier=sortie.date.substring(0,4);}
  sortie.date=sortie.date+sortie.HH;
  sortie.premier=(sortie.premier+" "+sortie.titre).substring(0,14);
}
//-------------------

function remanie_tout () 

{ var i;
  courant=[];
  if (current.length !=0) 
     {i=0;while(i<current.length)
               {remanie_elem(current[i]);
                courant.push(JSON.parse(JSON.stringify(sortie)));
                i++;}
     }
  suivant=[];
  if (next.length !=0) 
     {i=0;while(i<next.length)
               {remanie_elem(next[i]);
                suivant.push(JSON.parse(JSON.stringify(sortie)));
                i++;}
     }
}
//----------------
function updateCalendar() 

{ calendar = require("Storage").readJSON("android.calendar.json", true) || [];
  calendar = calendar.filter(e => isActive(e) || getTime() <= e.timestamp);
  calendar.sort((a, b) => a.timestamp - b.timestamp);

  current = calendar.filter(isActive);
  next = calendar.filter(e => !isActive(e));
  
  remanie_tout();
}
//-------------------

function Is_Premier () 

{ligne_premier="";
  if (courant.length!=0) {ligne_premier=courant[0].premier;return(true);}
  else if (suivant.length!=0) {ligne_premier=suivant[0].premier;return(true);}
  else return(false);
}

//-------------------
function draw_All () 

{ var e={};
  if (courant.length!=0)
   { g.setColor(1,0,0);
     for (i=0;i<courant.length;i++){
              g.drawString(courant[i].date,x,y);y+=Haut+inter;
              console.log(courant[i].date);
              g.drawString(courant[i].titre,x,y);y+=Haut+inter;
                         if (y > g.getHeight()) break;}
   }
  if (suivant.length!=0)
   { for (i=0;i<suivant.length;i++){
     if (suivant[i].nbj==0) g.setColor(0,0,1); else g.setColor(0,0,0);
                         g.drawString(suivant[i].date,x,y);y+=Haut+inter;
     console.log(suivant[i].date);
                         g.drawString(suivant[i].titre,x,y);y+=Haut+inter;
                         if (y > g.getHeight()) break;}
   }
}


//-----------------------------------------------------------------------------------------
//          FONCTIONS AFFICHAGES MONTRE
//-----------------------------------------------------------------------------------------



//-------------------------------------------------------
//                1  /   HORLOGE   
var altern = 0;

function aff_principal() {
  ecran = 1;
  console.log("ecran 1");

  set_Aff();
  updateCalendar();

  var offset=0;
  if (!Is_Premier ()) offset = 24;
  //
  // --------- HEURE et MINUTE ------------------
  //
  var hh = new Date().getHours().toString();
  var aff = hh + ":";
  var mm = new Date().getMinutes().toString();
  if (mm.length == 1) aff = aff + "0";
  aff = aff + mm;

  var fond = "";
  var ic;

  // ---  FOND ------                      
  if (aff_type[altern].bg != "No") {
    fond = require("Storage").read(aff_type[altern].bg + ".raw");
    console.log(aff_type[altern].bg + ".raw", fond.length);
    g.drawImage(require("heatshrink").decompress(atob(fond)), 0, 0); //Bangle.drawWidgets();
  }

  // -------RECTANGLE
  if (aff_type[altern].bg_l1 != "No") {
    color_it(aff_type[altern].bg_l1);
    g.fillRect(0, 28 + offset, 176, 108 + offset);
  }
  color_it(aff_type[altern].fg_l1);

  x = 83;
  y = 75 + offset;

  g.setFontAlign(0, 0).setFont("Anton").drawString(aff, x, y);

  //-----------------------------------------------
  //             JOUR MOIS 
  //
  var jourSem = "";
  var calWeek = false;
  jourSem = require("locale").dow(Date(), calWeek ? 1 : 0);
  deb = jourSem.substring(0, 1);
  deb = deb.toUpperCase();
  jourSem = deb + jourSem.substring(1, 3);
  // DATE MOIS 
  var dateOnMain = "Long";
  var dateStr = (dateOnMain === "ISO8601" ? isoStr(Date()) : require("locale").date(Date(), (dateOnMain === "Long" ? 0 : 1)));
  var jourMois = dateStr.substring(0, 2);
  var blanc = dateStr.indexOf(" ");
  var mois = (dateStr.substring(blanc, dateStr.length)).substring(0, 4);

  x += 6;
  y += 55;

  if (aff_type[altern].bg_l2 != "No") {
    color_it(aff_type[altern].bg_l2);
    g.fillRect(0, y - 22, 176, y + 40);
  }
  color_it(aff_type[altern].fg_l2);

  dateStr = jourSem + "        ";
  g.setFont("8x12", 3);
  g.drawString(dateStr, x, y);
  x += 40;
  y += 1;
  dateStr = jourMois + "    ";
  g.setFont("Vector", 40);
  g.drawString(dateStr, x, y);
  x += 6;
  y += 0;
  dateStr = mois.toUpperCase();
  g.setFont("8x12", 3);
  g.drawString(dateStr, x, y);

  //-----------------------------------------------
  //        LIGNE RDV A VENIR 

  x = 2;
  y += 32;
  g.setFont("Vector", 22);
  if (Is_Premier()) 
  {
    //   Cadre ou pas 
    if (aff_type[altern].bg_l3 != "No") 
    {
      color_it(aff_type[altern].bg_l3);
      g.fillRect(0, y, 176, y + 24);
    }
    // couleur texte
    color_it(aff_type[altern].fg_l3);
    g.setFontAlign(-1, 0);
    g.drawString(ligne_premier, x, y);

  }

  //  ----  generiques
  acqui_press();
  if (lit_img == 0) img = lit_fic(0);

  // Passage au style suivant 
  altern += 1;
  if (altern >= aff_type.length) altern = 0;
  console.log("next :", altern);

  balai();
}
//-------------------------------------------------------
//               PAGE DES DONNEES-

function aff_second() {
  ecran = 2;
  set_Aff();
  Haut = 22;
  var inc = 0;
  console.log("affichage second");
  g.setFont("Vector", Haut);
  g.setFontAlign(-1, 0);

  x = 10;
  y = 36 + inc;

  var batt = E.getBattery().toString() + " %";
  g.drawString(" Batt: " + batt, x, y);
  y += Haut + inc;
  g.drawString("Temp: " + temperature + " C", x, y);
  y += Haut + inc;

  var tend;
  if (pression - 1013 >= 0) {
    tend = "Bo" + (pression - 1013).toString();
    color_it("Bleu");
  } else {
    tend = "Mo" + (pression - 1013).toString();
    color_it("Rouge");
  }
  g.drawString("P:" + pression + " " + tend, x, y);
  y += Haut + inc;

  color_it("Noir");
  g.drawString(" Alt: " + altitude + " m", x, y);
  y += Haut + inc;

  //imp_util,mem_util,anc_util=
  ressource();
  var i = 0;
  while (i != 2) {
    console.log(i, imp_util[i]);
    g.drawString(imp_util[i].substring(0, 14), x, y);
    y += Haut + inc;
    i += 1;
  }

  balai();
}


//-------------------------------------------------------
//                 3/ ECRAN AGENDA 

function aff_agenda() 

{
  ecran = 3;
  set_Aff();

  console.log("troisieme ecran");

  g.setFontAlign(-1, 0);
  g.clearRect(5, 24, g.getWidth() - 5, g.getHeight());

  updateCalendar();
  
  Haut = 22; g.setFont("Vector", Haut);inter=0;
  x = 2;y = 33;
  draw_All (); 

  balai();
}
//--------------------------------------------------------------------------
//                  4/   DIAPORAMA 
//
var diap = 0;
var fic_img = ["mote2", "mote3", "moto2"];

// ---------------
function aff_momo() 

{ ecran = 4;
  console.log(" Diaporama :", ecran, diap);
  clearTimeout(tp_momo);
  if (diap >= fic_img.length) {diap = 0;lit_img = 0;aff_principal();} //fini
  else {img = lit_fic(diap);D_ecran(img, 0, 24);diap += 1;tp_momo = setTimeout(aff_momo, 7000);balai();}
}

//-----------------------------------------------------------------------
//                   AIGUILLAGE
//--------------------                -----------------------------------

//  ----------------   Fonctions Touch screen 
var SD=""; var LR=0;var UD=0; var balai_set=0;

function balai() 

{ if (balai_set==1) return;
  balai_set=1;  print(">> ----- suis la");
  Bangle.setUI("clock");
  Bangle.on('tap', function(data) {
    print(data.double);
    Bangle.setLCDPower(true);
  });
  SD = "";LR=0;UD=0; 
  Bangle.on('swipe', function(LR, UD) {
    if (LR == -1) {SD ="G";} else {if (LR == 1) {SD ="D";} 
                                    else {if (UD == -1) {SD ="H";} 
                                          else {if (UD == 1) {SD ="B";}   }
                                          }
                                    }
    print(SD);
    Bangle.removeAllListeners('tap');
    Bangle.removeAllListeners('swipe');
    print("sortie");
    balai_set=0;
    aiguillage();
 });
}

//-----------------------------------------------
var Inter_page;var tp_momo; var Momo_regular;

function aiguillage() 
{
  console.log("Boutton/swipe");
  boutton = 1;// Pour arreter Tsleep 
  setWatch(aiguillage, BTN1, {edge: "rising",debounce: 30,repeat: true });
  
  if (tp_momo) clearTimeout(tp_momo);
  if (Inter_page) clearTimeout(Inter_page);
  Inter_page = setInterval(aff_principal, rafraichi * 1000);

  var prochain=ecran;
  if (SD=="D") prochain=ecran+1;
  if (SD=="G") prochain=ecran-1;

  if (prochain <=1 || prochain > 4) {diap = 0;lit_img = 0;aff_principal();}
  if (prochain == 2) aff_second();
  if (prochain == 3) aff_agenda();
  if (prochain== 4) {tp_momo = setTimeout(aff_momo, 7000);diap = 0;
                   Bangle.setUI("clock");aff_momo();}
}

//--------------------     MAIN           -----------------------------------

//setTimeout(aiguillage, 5000);

// Load widgets
Bangle.loadWidgets();

Bangle.setBarometerPower(true);
Bangle.setOptions({
  wakeOnTouch: true
});

acqui_press();

// rafraichissement en secondes   nb de cycles avant momo
//var rafraichi=6; var nbaffpr_momo=2; // tous les x/2 momo 
var rafraichi = 60;
var nbaffpr_momo = 8;
var moins_tps;
var inter_momo;
var laps = 15; //limite max d affichage
if ((0, 5 * rafraichi) >= laps) {
  moins_tps = laps;
} else {
  moins_tps = (0, 5 * rafraichi);
}
inter_momo = ((nbaffpr_momo * rafraichi) - moins_tps) * 1000;

if (!Momo_regular) 
  Momo_regular= setInterval(aff_momoregular, inter_momo);

//------------------
ecran = 0;
aiguillage();

// end of file
