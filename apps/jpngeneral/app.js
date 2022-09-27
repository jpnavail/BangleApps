///   -------   PROGRAMME PRINCIPAL
//
require("Font8x12").add(Graphics);

Graphics.prototype.setFontAnton = function(scale) {
  // Actual height 69 (68 - 0)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAA/gAAAAAAAAAAP/gAAAAAAAAAH//gAAAAAAAAB///gAAAAAAAAf///gAAAAAAAP////gAAAAAAD/////gAAAAAA//////gAAAAAP//////gAAAAH///////gAAAB////////gAAAf////////gAAP/////////gAD//////////AA//////////gAA/////////4AAA////////+AAAA////////gAAAA///////wAAAAA//////8AAAAAA//////AAAAAAA/////gAAAAAAA////4AAAAAAAA///+AAAAAAAAA///gAAAAAAAAA//wAAAAAAAAAA/8AAAAAAAAAAA/AAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////AAAAAB///////8AAAAH////////AAAAf////////wAAA/////////4AAB/////////8AAD/////////+AAH//////////AAP//////////gAP//////////gAP//////////gAf//////////wAf//////////wAf//////////wAf//////////wA//8AAAAAB//4A//wAAAAAAf/4A//gAAAAAAP/4A//gAAAAAAP/4A//gAAAAAAP/4A//wAAAAAAf/4A///////////4Af//////////wAf//////////wAf//////////wAf//////////wAP//////////gAP//////////gAH//////////AAH//////////AAD/////////+AAB/////////8AAA/////////4AAAP////////gAAAD///////+AAAAAf//////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAP/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/AAAAAAAAAAA//AAAAAAAAAAA/+AAAAAAAAAAB/8AAAAAAAAAAD//////////gAH//////////gAP//////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/4AAAAB/gAAD//4AAAAf/gAAP//4AAAB//gAA///4AAAH//gAB///4AAAf//gAD///4AAA///gAH///4AAD///gAP///4AAH///gAP///4AAP///gAf///4AAf///gAf///4AB////gAf///4AD////gA////4AH////gA////4Af////gA////4A/////gA//wAAB/////gA//gAAH/////gA//gAAP/////gA//gAA///8//gA//gAD///w//gA//wA////g//gA////////A//gA///////8A//gA///////4A//gAf//////wA//gAf//////gA//gAf/////+AA//gAP/////8AA//gAP/////4AA//gAH/////gAA//gAD/////AAA//gAB////8AAA//gAA////wAAA//gAAP///AAAA//gAAD//8AAAA//gAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/+AAAAAD/wAAB//8AAAAP/wAAB///AAAA//wAAB///wAAB//wAAB///4AAD//wAAB///8AAH//wAAB///+AAP//wAAB///+AAP//wAAB////AAf//wAAB////AAf//wAAB////gAf//wAAB////gA///wAAB////gA///wAAB////gA///w//AAf//wA//4A//AAA//wA//gA//AAAf/wA//gB//gAAf/wA//gB//gAAf/wA//gD//wAA//wA//wH//8AB//wA///////////gA///////////gA///////////gA///////////gAf//////////AAf//////////AAP//////////AAP/////////+AAH/////////8AAH///+/////4AAD///+f////wAAA///8P////gAAAf//4H///+AAAAH//gB///wAAAAAP4AAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAAAAA//wAAAAAAAAAP//wAAAAAAAAB///wAAAAAAAAf///wAAAAAAAH////wAAAAAAA/////wAAAAAAP/////wAAAAAB//////wAAAAAf//////wAAAAH///////wAAAA////////wAAAP////////wAAA///////H/wAAA//////wH/wAAA/////8AH/wAAA/////AAH/wAAA////gAAH/wAAA///4AAAH/wAAA//+AAAAH/wAAA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gAAAAAAAAH/4AAAAAAAAAAH/wAAAAAAAAAAH/wAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8AAA/////+B///AAA/////+B///wAA/////+B///4AA/////+B///8AA/////+B///8AA/////+B///+AA/////+B////AA/////+B////AA/////+B////AA/////+B////gA/////+B////gA/////+B////gA/////+A////gA//gP/gAAB//wA//gf/AAAA//wA//gf/AAAAf/wA//g//AAAAf/wA//g//AAAA//wA//g//gAAA//wA//g//+AAP//wA//g////////gA//g////////gA//g////////gA//g////////gA//g////////AA//gf///////AA//gf//////+AA//gP//////+AA//gH//////8AA//gD//////4AA//gB//////wAA//gA//////AAAAAAAH////8AAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////gAAAAB///////+AAAAH////////gAAAf////////4AAB/////////8AAD/////////+AAH//////////AAH//////////gAP//////////gAP//////////gAf//////////wAf//////////wAf//////////wAf//////////wAf//////////4A//wAD/4AAf/4A//gAH/wAAP/4A//gAH/wAAP/4A//gAP/wAAP/4A//gAP/4AAf/4A//wAP/+AD//4A///wP//////4Af//4P//////wAf//4P//////wAf//4P//////wAf//4P//////wAP//4P//////gAP//4H//////gAH//4H//////AAH//4D/////+AAD//4D/////8AAB//4B/////4AAA//4A/////wAAAP/4AP////AAAAB/4AD///4AAAAAAAAAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAA//gAAAAAAAAAA//gAAAAAAAAAA//gAAAAAAADgA//gAAAAAAP/gA//gAAAAAH//gA//gAAAAB///gA//gAAAAP///gA//gAAAD////gA//gAAAf////gA//gAAB/////gA//gAAP/////gA//gAB//////gA//gAH//////gA//gA///////gA//gD///////gA//gf///////gA//h////////gA//n////////gA//////////gAA/////////AAAA////////wAAAA///////4AAAAA///////AAAAAA//////4AAAAAA//////AAAAAAA/////4AAAAAAA/////AAAAAAAA////8AAAAAAAA////gAAAAAAAA///+AAAAAAAAA///4AAAAAAAAA///AAAAAAAAAA//4AAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gB///wAAAAP//4H///+AAAA///8P////gAAB///+f////4AAD///+/////8AAH/////////+AAH//////////AAP//////////gAP//////////gAf//////////gAf//////////wAf//////////wAf//////////wA///////////wA//4D//wAB//4A//wB//gAA//4A//gA//gAAf/4A//gA//AAAf/4A//gA//gAAf/4A//wB//gAA//4A///P//8AH//4Af//////////wAf//////////wAf//////////wAf//////////wAf//////////gAP//////////gAP//////////AAH//////////AAD/////////+AAD///+/////8AAB///8f////wAAAf//4P////AAAAH//wD///8AAAAA/+AAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAB///+AA/+AAAAP////gA//wAAAf////wA//4AAB/////4A//8AAD/////8A//+AAD/////+A///AAH/////+A///AAP//////A///gAP//////A///gAf//////A///wAf//////A///wAf//////A///wAf//////A///wA///////AB//4A//4AD//AAP/4A//gAB//AAP/4A//gAA//AAP/4A//gAA/+AAP/4A//gAB/8AAP/4A//wAB/8AAf/4Af//////////wAf//////////wAf//////////wAf//////////wAf//////////wAP//////////gAP//////////gAH//////////AAH/////////+AAD/////////8AAB/////////4AAAf////////wAAAP////////AAAAB///////4AAAAAD/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AAB/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="), 46, atob("EiAnGicnJycnJycnEw=="), 78 + (scale << 8) + (1 << 16));
};

Graphics.prototype.setFontAntonSmall = function(scale) {
  // Actual height 53 (52 - 0)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAAf8AAAAAAAAf8AAAAAAAAf8AAAAAAAAf8AAAAAAAAf8AAAAAAAAf8AAAAAAAAf8AAAAAAAAf8AAAAAAAAf8AAAAAAAAf8AAAAAAAAAAAAAAAAAAAAMAAAAAAAAD8AAAAAAAA/8AAAAAAAf/8AAAAAAH//8AAAAAB///8AAAAA////8AAAAP////8AAAD/////8AAB//////8AAf//////8AH///////4A///////+AA///////AAA//////wAAA/////8AAAA////+AAAAA////gAAAAA///4AAAAAA//8AAAAAAA//AAAAAAAA/wAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////wAAA//////8AAB//////+AAH///////gAH///////gAP///////wAf///////4Af///////4A////////8A////////8A////////8A//AAAAD/8A/8AAAAA/8A/8AAAAA/8A/8AAAAA/8A/+AAAAB/8A////////8A////////8A////////8Af///////4Af///////4AP///////wAP///////wAH///////gAD///////AAA//////8AAAP/////wAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAA/4AAAAAAAA/4AAAAAAAB/wAAAAAAAB/wAAAAAAAD/wAAAAAAAD/gAAAAAAAH///////8AP///////8A////////8A////////8A////////8A////////8A////////8A////////8A////////8A////////8A////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/4AAAP8AA//4AAA/8AB//4AAH/8AH//4AAP/8AP//4AA//8AP//4AB//8Af//4AD//8Af//4AP//8A///4Af//8A///4A///8A///4D///8A//AAH///8A/8AAP///8A/8AA//+/8A/8AD//8/8A/+Af//w/8A//////g/8A/////+A/8A/////8A/8Af////4A/8Af////wA/8AP////AA/8AP///+AA/8AH///8AA/8AD///wAA/8AA///AAA/8AAP/4AAA/8AAAAAAAAAAAAAAAAAAAAAAH4AAf/gAAA/4AAf/8AAD/4AAf//AAH/4AAf//gAP/4AAf//wAP/4AAf//wAf/4AAf//4Af/4AAf//4A//4AAf//8A//4AAf//8A//4AAP//8A//A/8AB/8A/8A/8AA/8A/8B/8AA/8A/8B/8AA/8A/+D//AB/8A////////8A////////8A////////8Af///////4Af///////4Af///////wAP///////gAH//9////gAD//4///+AAB//wf//4AAAP/AH//gAAAAAAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAB//wAAAAAAP//wAAAAAD///wAAAAA////wAAAAH////wAAAB/////wAAAf/////wAAD//////wAA///////wAA/////h/wAA////wB/wAA///8AB/wAA///AAB/wAA//gAAB/wAA////////8A////////8A////////8A////////8A////////8A////////8A////////8A////////8A////////8A////////8A////////8AAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4AA////4P/+AA////4P//AA////4P//gA////4P//wA////4P//wA////4P//4A////4P//4A////4P//8A////4P//8A////4P//8A/8H/AAB/8A/8H+AAA/8A/8P+AAA/8A/8P+AAA/8A/8P/gAD/8A/8P/////8A/8P/////8A/8P/////8A/8P/////4A/8H/////4A/8H/////wA/8D/////wA/8B/////gA/8A////+AA/8AP///4AAAAAB///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////wAAAf/////8AAB///////AAH///////gAP///////wAP///////wAf///////4Af///////4A////////8A////////8A////////8A/+AH/AB/8A/8AP+AA/8A/4Af+AA/8A/8Af+AA/8A/8Af/gH/8A//4f////8A//4f////8A//4f////8Af/4f////4Af/4f////4AP/4P////wAP/4P////gAH/4H////AAD/4D///+AAB/4B///4AAAP4AP//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AAAAAAAA/8AAAAAAAA/8AAAAAB8A/8AAAAB/8A/8AAAAf/8A/8AAAH//8A/8AAA///8A/8AAH///8A/8AA////8A/8AD////8A/8Af////8A/8B/////8A/8P/////8A/8//////8A////////AA///////AAA//////gAAA/////4AAAA/////AAAAA////4AAAAA////AAAAAA///8AAAAAA///gAAAAAA//+AAAAAAA//wAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/gD//gAAA//4P//8AAD//8f///AAH//+////gAH///////wAP///////4AP///////8Af///////8Af///////+Af///////+A////////+A//B//AB/+A/+A/+AA/+A/8Af+AA/+A/+Af+AA/+A//A//AB/+A////////+Af///////+Af///////+Af///////8Af///////8AP///////4AH///////4AH//+////wAD//+////AAA//4P//+AAAP/gH//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//gAfgAAA///8A/8AAB///+A//AAH////A//gAH////g//wAP////g//wAf////w//4Af////w//4A/////w//8A/////w//8A/////w//8A//gP/wA/8A/8AD/wA/8A/8AD/wAf8A/8AD/gA/8A/+AH/AB/8A////////8A////////8A////////8Af///////4Af///////4Af///////wAP///////wAH///////gAD//////+AAA//////4AAAP/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AA/4AAAAP+AA/4AAAAP+AA/4AAAAP+AA/4AAAAP+AA/4AAAAP+AA/4AAAAP+AA/4AAAAP+AA/4AAAAP+AA/4AAAAP+AA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="), 46, atob("DhgeFB4eHh4eHh4eDw=="), 60 + (scale << 8) + (1 << 16));
};
//-----------------------------------------------------------------------
//                VARIABLES  GENERALES
//-----------------------------------------------------------------------
var counter = 5;
var counterInterval;
var tp_time;
var boutton;
var attente;
var x = g.getWidth() / 2;
var y = g.getHeight() / 2;

//-----------------------------------------------------------------------
//                FONCTIONS UTILITAIRES
//-----------------------------------------------------------------------
function Tsleep (attente) {
  // temps en millisecondes
  const start = Date.now();
  //console.log('starting timer...');
  setTimeout(() => {
          const millis = Date.now() - start;
          //console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
                    }, attente);
  return;
}

function set_aff() {
  g.clear();
  Bangle.drawWidgets();
  g.setFontAlign(0,0); // center font
  g.setFont("Vector",40); // vector font, 80px  
  return;
}


//-----------------------------------------------------------------------
//                AFFICHAGES 
//-----------------------------------------------------------------------

function aff_principal() {

  counter +=1;
  set_aff();
  x = g.getWidth() / 2;
  y = g.getHeight() / 2;

  //
  // --------- HEURE et MINUTE ------------------
  //
  var date = new Date();
  var hh=date.getHours();
  if (hh.length==1) { hh="0"+hh; }
  var mm=date.getMinutes();
 if (mm.length==1) { mm="0"+mm; }
  g.setColor(0,0,0); // noir
  y-=10;
  g.setFontAlign(0, 0).setFont("Anton").drawString(hh+":"+mm, x, y); // draw time
  
  //-----------------------------------------------
  //       JOUR MOIS 
  //
  var jourSem = "";
  var calWeek = false;

  jourSem = require("locale").dow(date, calWeek ? 1 : 0);
  deb=jourSem.substring(0,1);
  deb=deb.toUpperCase();
  jourSem = deb+jourSem.substring(1,3);
  // DATE MOIS 
  var dateOnMain = "Long";
  var dateStr = (dateOnMain === "ISO8601" ? isoStr(date) : require("locale").date(date, (dateOnMain === "Long" ? 0 : 1)));
  dateStr=dateStr.substring(0,dateStr.length-4);
  var jourMois= "";
  var blanc=1;
  var mois ="";
  jourMois=dateStr.substring(0,2);
  blanc=dateStr.indexOf(" ");
  mois=dateStr.substring(blanc,dateStr.length);
  mois=mois.substring(0,4);

  //g.setColor(1,0,0); // Rouge
  y+=50;
  x+=4;
  dateStr=jourSem+"        ";
  g.setFont("8x12",3);
  g.drawString(dateStr, x, y);
  //
  x+=43;
  //y+=1;
  dateStr=jourMois+"    ";
  g.setFont("Vector",42);
  g.drawString(dateStr,x,y);
  //
  x+=6;
  y+=1;
  dateStr=mois.toUpperCase();
  g.setFont("8x12",3);
  g.drawString(dateStr,x,y);

  return;
}

//-----------------------------------------------------------------------

function aff_second() {
  boutton+=1;
  set_aff();
  g.drawString("2-CARO :"+ boutton,120,120);

  setWatch(aff_tiers,BTN1,{edge:"rising", debounce:30, repeat:true});

  Tsleep(5000);
  return;
}

//-----------------------------------------------------------------------

function aff_tiers() {
  boutton+=1;
  set_aff(); 
  g.drawString("3-FIN ! ",120,120);

  setWatch(aff_second,BTN1,{edge:"rising", debounce:30, repeat:true});
  Tsleep(3000);
   // Show launcher when middle button pressed
  Bangle.setUI("clock");

  return;
}

//-----------------------------------------------------------------------
//                         PRINCIPAL
//--------------------                -----------------------------------

function general() {

  aff_principal();

  setWatch(aff_second,BTN1,{edge:"rising", debounce:30, repeat:true});

  if (!counterInterval)
    counterInterval = setInterval(aff_principal, 8000);

  return;
}

//--------------------     MAIN           -----------------------------------
boutton=0;
general ();

// Register hooks for LCD on/off event and screen lock on/off event
//Bangle.on('lcdPower', on => {   general(); });
//Bangle.on('lock', on => { general(); });

// Load widgets
Bangle.loadWidgets();

// end of file
