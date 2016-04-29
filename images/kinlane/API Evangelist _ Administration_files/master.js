function popupwindow(path,width,height,top,left)
{
	window.open (path, "privacy", "resizable=1,menubar=1,toolbar=1,scrollbars=1, width="+width+",height="+height+",top="+top+",left="+left);
}

function round(number,X) {
// rounds number to X decimal places, defaults to 2
    X = (!X ? 2 : X);
    return Math.round(number*Math.pow(10,X))/Math.pow(10,X);
}

function JS_StringPrep(WhichString)
	{
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 39)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(31));
			}		
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 34)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(1));
			}
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 40)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(2));
			}	
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 41)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(3));
			}
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 44)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(4));
			}
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 60)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(5));
			}	
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 62)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(6));
			}	
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 61)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(7));
			}
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 123)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(8));
			}	
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 125)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(14));
			}
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 38)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(19));
			}
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 92)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(20));
			}
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 91)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(21));
			}
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 93)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(22));
			}
	for (i=0;i<WhichString.length;i++)
		if (WhichString.charCodeAt(i) == 37)
			{
			WhichString = WhichString.replace(WhichString.charAt(i),String.fromCharCode(23));
			}
	return WhichString;
	}

function CarriageReturns (strToEncode) {
  var strCRLF = String.fromCharCode(13,10);
  var strLeft;
  var strRight;
  var intCRLF = strToEncode.indexOf(strCRLF);
  var strDelimChars = String.fromCharCode(24);
  while (intCRLF != -1) {
	if (intCRLF > 0)
	  var strLeft = strToEncode.substring(0, intCRLF);
	if (intCRLF < strToEncode.length - 1)
	  var strRight = strToEncode.substring(intCRLF + 2, strToEncode.length);
	strToEncode = strLeft + strDelimChars + strRight;
	intCRLF = strToEncode.indexOf(strCRLF);
  }
  return strToEncode;
}

var NUM_CENTYEAR = 30;
var BUL_TIMECOMPONENT = false;
var BUL_YEARSCROLL = true;

var calendars = [];
var RE_NUM = /^\-?\d+$/;

function calendar2(obj_target) {

	this.gen_date = cal_gen_date2;
	this.gen_time = cal_gen_time2;
	this.gen_tsmp = cal_gen_tsmp2;
	this.prs_date = cal_prs_date2;
	this.prs_time = cal_prs_time2;
	this.prs_tsmp = cal_prs_tsmp2;
	this.popup    = cal_popup2;

	if (!obj_target)
		return cal_error("Error calling the calendar: no target control specified");
	if (obj_target.value == null)
		return cal_error("Error calling the calendar: parameter specified is not valid tardet control");
	this.target = obj_target;
	this.time_comp = BUL_TIMECOMPONENT;
	this.year_scroll = BUL_YEARSCROLL;
	
	this.id = calendars.length;
	calendars[this.id] = this;
}

function cal_popup2 (str_datetime) {
	this.dt_current = this.prs_tsmp(str_datetime ? str_datetime : this.target.value);
	if (!this.dt_current) return;

	var obj_calwindow = window.open(
		'/system/calendar/calendar.asp?datetime=' + this.dt_current.valueOf()+ '&id=' + this.id,
		'Calendar', 'width=200,height='+(this.time_comp ? 215 : 190)+
		',status=no,resizable=no,top=200,left=200,dependent=yes,alwaysRaised=yes'
	);
	obj_calwindow.opener = window;
	obj_calwindow.focus();
}

function cal_gen_tsmp2 (dt_datetime) {
	return(this.gen_date(dt_datetime) + ' ' + this.gen_time(dt_datetime));
}

function cal_gen_date2 (dt_datetime) {
	return (
		(dt_datetime.getMonth() < 9 ? '0' : '') + (dt_datetime.getMonth() + 1) + "/"
		+ (dt_datetime.getDate() < 10 ? '0' : '') + dt_datetime.getDate() + "/"
		+ dt_datetime.getFullYear()
	);
}
function cal_gen_time2 (dt_datetime) {
	return (
		(dt_datetime.getHours() < 10 ? '0' : '') + dt_datetime.getHours() + ":"
		+ (dt_datetime.getMinutes() < 10 ? '0' : '') + (dt_datetime.getMinutes()) + ":"
		+ (dt_datetime.getSeconds() < 10 ? '0' : '') + (dt_datetime.getSeconds())
	);
}


function formatCurrency(num) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))
	num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	num = num.substring(0,num.length-(4*i+3))+','+
	num.substring(num.length-(4*i+3));
	return (((sign)?'':'-') + '$' + num + '.' + cents);
}

// timestamp parsing function
function cal_prs_tsmp2 (str_datetime) {
	// if no parameter specified return current timestamp
	if (!str_datetime)
		return (new Date());

	// if positive integer treat as milliseconds from epoch
	if (RE_NUM.exec(str_datetime))
		return new Date(str_datetime);
		
	// else treat as date in string format
	var arr_datetime = str_datetime.split(' ');
	return this.prs_time(arr_datetime[1], this.prs_date(arr_datetime[0]));
}

// date parsing function
function cal_prs_date2 (str_date) {

	var arr_date = str_date.split('/');

	if (arr_date.length != 3) return alert ("Invalid date format: '" + str_date + "'.\nFormat accepted is dd-mm-yyyy.");
	if (!arr_date[1]) return alert ("Invalid date format: '" + str_date + "'.\nNo day of month value can be found.");
	if (!RE_NUM.exec(arr_date[1])) return alert ("Invalid day of month value: '" + arr_date[1] + "'.\nAllowed values are unsigned integers.");
	if (!arr_date[0]) return alert ("Invalid date format: '" + str_date + "'.\nNo month value can be found.");
	if (!RE_NUM.exec(arr_date[0])) return alert ("Invalid month value: '" + arr_date[0] + "'.\nAllowed values are unsigned integers.");
	if (!arr_date[2]) return alert ("Invalid date format: '" + str_date + "'.\nNo year value can be found.");
	if (!RE_NUM.exec(arr_date[2])) return alert ("Invalid year value: '" + arr_date[2] + "'.\nAllowed values are unsigned integers.");

	var dt_date = new Date();
	dt_date.setDate(1);

	if (arr_date[0] < 1 || arr_date[0] > 12) return alert ("Invalid month value: '" + arr_date[0] + "'.\nAllowed range is 01-12.");
	dt_date.setMonth(arr_date[0]-1);
	 
	if (arr_date[2] < 100) arr_date[2] = Number(arr_date[2]) + (arr_date[2] < NUM_CENTYEAR ? 2000 : 1900);
	dt_date.setFullYear(arr_date[2]);

	var dt_numdays = new Date(arr_date[2], arr_date[0], 0);
	dt_date.setDate(arr_date[1]);
	if (dt_date.getMonth() != (arr_date[0]-1)) return alert ("Invalid day of month value: '" + arr_date[1] + "'.\nAllowed range is 01-"+dt_numdays.getDate()+".");

	return (dt_date)
}

// time parsing function
function cal_prs_time2 (str_time, dt_date) {

	if (!dt_date) return null;
	var arr_time = String(str_time ? str_time : '').split(':');

	if (!arr_time[0]) dt_date.setHours(0);
	else if (RE_NUM.exec(arr_time[0])) 
		if (arr_time[0] < 24) dt_date.setHours(arr_time[0]);
		else return cal_error ("Invalid hours value: '" + arr_time[0] + "'.\nAllowed range is 00-23.");
	else return cal_error ("Invalid hours value: '" + arr_time[0] + "'.\nAllowed values are unsigned integers.");
	
	if (!arr_time[1]) dt_date.setMinutes(0);
	else if (RE_NUM.exec(arr_time[1]))
		if (arr_time[1] < 60) dt_date.setMinutes(arr_time[1]);
		else return cal_error ("Invalid minutes value: '" + arr_time[1] + "'.\nAllowed range is 00-59.");
	else return cal_error ("Invalid minutes value: '" + arr_time[1] + "'.\nAllowed values are unsigned integers.");

	if (!arr_time[2]) dt_date.setSeconds(0);
	else if (RE_NUM.exec(arr_time[2]))
		if (arr_time[2] < 60) dt_date.setSeconds(arr_time[2]);
		else return cal_error ("Invalid seconds value: '" + arr_time[2] + "'.\nAllowed range is 00-59.");
	else return cal_error ("Invalid seconds value: '" + arr_time[2] + "'.\nAllowed values are unsigned integers.");

	dt_date.setMilliseconds(0);
	return dt_date;
}

function cal_error (str_message) {
	alert (str_message);
	return null;
}

var xy = navigator.appVersion; 
xz = xy.substring(0,4); 
//document.cookie = "ScreenWidth=" + screen.width 
//document.cookie = "ScreenHeight=" + screen.height 

function emailCheck(emailStr) 

{
var checkTLD=1;
var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
var emailPat=/^(.+)@(.+)$/;
var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
var validChars="\[^\\s" + specialChars + "\]";
var quotedUser="(\"[^\"]*\")";
var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
var atom=validChars + '+';
var word="(" + atom + "|" + quotedUser + ")";
var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
var matchArray=emailStr.match(emailPat);

if (matchArray==null) {

//alert("Email address seems incorrect (check @ and .'s)");
//alert("Please enter a valid email address!");
return false;
}
var user=matchArray[1];
var domain=matchArray[2];

for (i=0; i<user.length; i++) {
if (user.charCodeAt(i)>127) {
//alert("Ths username contains invalid characters.");
//alert("Please enter a valid email address!");
return false;
   }
}
for (i=0; i<domain.length; i++) {
if (domain.charCodeAt(i)>127) {
//alert("Ths domain name contains invalid characters.");
//alert("Please enter a valid email address!");
return false;
   }
}

if (user.match(userPat)==null) {
//alert("The username doesn't seem to be valid.");
//alert("Please enter a valid email address!");
return false;
}

var IPArray=domain.match(ipDomainPat);
if (IPArray!=null) {

for (var i=1;i<=4;i++) {
if (IPArray[i]>255) {
//alert("Destination IP address is invalid!");
//alert("Please enter a valid email address!");
return false;
   }
}
return true;
}

var atomPat=new RegExp("^" + atom + "$");
var domArr=domain.split(".");
var len=domArr.length;
for (i=0;i<len;i++) {
if (domArr[i].search(atomPat)==-1) {
//alert("The domain name does not seem to be valid.");
//alert("Please enter a valid email address!");
return false;
   }
}

if (checkTLD && domArr[domArr.length-1].length!=2 && 
domArr[domArr.length-1].search(knownDomsPat)==-1) {
//alert("The address must end in a well-known domain or two letter " + "country.");
//alert("Please enter a valid email address!");
return false;
}
if (len<2) {
//alert("This address is missing a hostname!");
//alert("Please enter a valid email address!");
return false;
}

return true;
}

function outputList(ar, name, size) {
 var strIDs = "<SELECT class=textarea size=15 NAME=\"ro_lst" + name + "\">"
 var sel = " SELECTED"
 for (var i=0;i<ar.length;i++) {
  strIDs += "<OPTION " + sel + " VALUE=\"" + ar[i][0] + "\">" + ar[i][1]
  sel = ""
 }
 strIDs+="</SELECT>"
 strIDs+="<INPUT NAME=\"" + name + "\" TYPE=hidden>"
 return strIDs
}

function outputReorderList(ar, name, size) {
 var strIDs = "<SELECT class=textarea size=15 NAME=\"ro_lst" + name + "\">"
 var sel = " SELECTED"
 for (var i=0;i<ar.length;i++) {
  strIDs += "<OPTION " + sel + " VALUE=\"" + ar[i][0] + "\">" + ar[i][1]
  sel = ""
 }
 strIDs+="</SELECT>"
 strIDs+="<INPUT NAME=\"" + name + "\" TYPE=hidden>"
 return strIDs
}

function outputButton(bDir,name,val) {
 return "<INPUT class=button TYPE=button VALUE=\"" + val + "\" ONCLICK=\"move(this.form," + bDir + ",'" + name + "')\">"
}

function move(f,bDir,sName) {
 var el = f.elements["ro_lst" + sName]
 var idx = el.selectedIndex
 if (idx==-1) 
  alert("You must first select the item to reorder.")
 else {
  var nxidx = idx+( bDir? -1 : 1)
  if (nxidx<0) nxidx=el.length-1
  if (nxidx>=el.length) nxidx=0
  var oldVal = el[idx].value
  var oldText = el[idx].text
  el[idx].value = el[nxidx].value
  el[idx].text = el[nxidx].text
  el[nxidx].value = oldVal
  el[nxidx].text = oldText
  el.selectedIndex = nxidx
 }
}

function processForm(f) {
 for (var i=0;i<f.length;i++) {	
  var el = f[i]
  if (el.name.substring(0,6)=="ro_lst") {
   var strIDs = ""
   for (var j=0;j<f[i].options.length;j++)
     strIDs += f[i].options[j].value + ", "
   f.elements[f.elements[i].name.substring(6)].value = strIDs.substring(0,strIDs.length-2)
  }
 }
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function validateUSPhone( strValue ) {
  var objRegExp  = /^\([1-9]\d{2}\)\s?\d{3}\-\d{4}$/;

  return objRegExp.test(strValue);
}

function  validateNumeric( strValue ) {
  var objRegExp  =  /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;

  return objRegExp.test(strValue);
}

function validateInteger( strValue ) {
  var objRegExp  = /(^-?\d\d*$)/;

  return objRegExp.test(strValue);
}

function validateNotEmpty( strValue ) {
   var strTemp = strValue;
   strTemp = trimAll(strTemp);
   if(strTemp.length > 0){
     return true;
   }
   return false;
}

function validateUSZip( strValue ) {
var objRegExp  = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

  return objRegExp.test(strValue);
}

function validateUSDate( strValue ) {
  var objRegExp = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/

  if(!objRegExp.test(strValue))
    return false; //doesn't match pattern, bad date
  else{
    var strSeparator = strValue.substring(2,3) //find date separator
    var arrayDate = strValue.split(strSeparator); //split date into month, day, year
    var arrayLookup = { '01' : 31,'03' : 31, '04' : 30,'05' : 31,'06' : 30,'07' : 31,
                        '08' : 31,'09' : 30,'10' : 31,'11' : 30,'12' : 31}
    var intDay = parseInt(arrayDate[1]);

    if(arrayLookup[arrayDate[0]] != null) {
      if(intDay <= arrayLookup[arrayDate[0]] && intDay != 0)
        return true; //found in lookup table, good date
    }

    var intMonth = parseInt(arrayDate[0]);
    if (intMonth == 2) { 
       var intYear = parseInt(arrayDate[2]);
       if( ((intYear % 4 == 0 && intDay <= 29) || (intYear % 4 != 0 && intDay <=28)) && intDay !=0)
          return true; //Feb. had valid number of days
       }
  }
  return false;
}

function rightTrim( strValue ) {

var objRegExp = /^([\w\W]*)(\b\s*)$/;

      if(objRegExp.test(strValue)) {
       //remove trailing a whitespace characters
       strValue = strValue.replace(objRegExp, '$1');
    }
  return strValue;
}

function leftTrim( strValue ) {

var objRegExp = /^(\s*)(\b[\w\W]*)$/;

      if(objRegExp.test(strValue)) {
       //remove leading a whitespace characters
       strValue = strValue.replace(objRegExp, '$2');
    }
  return strValue;
}

function trimAll( strValue ) {

 var objRegExp = /^(\s*)$/;

    if(objRegExp.test(strValue)) {
       strValue = strValue.replace(objRegExp, '');
       if( strValue.length == 0)
          return strValue;
    }

   objRegExp = /^(\s*)([\W\w]*)(\b\s*$)/;
   if(objRegExp.test(strValue)) {
       strValue = strValue.replace(objRegExp, '$2');
    }
  return strValue;
}

function removeCurrency( strValue ) {
  var objRegExp = /\(/;
  var strMinus = '';

  if(objRegExp.test(strValue)){
    strMinus = '-';
  }

  objRegExp = /\)|\(|[,]/g;
  strValue = strValue.replace(objRegExp,'');
  if(strValue.indexOf('$') >= 0){
    strValue = strValue.substring(1, strValue.length);
  }
  return strMinus + strValue;
}

function addCurrency(strValue) {
  var objRegExp = /-?[0-9]+\.[0-9]{2}$/;

    if( objRegExp.test(strValue)) {
      objRegExp.compile('^-');
      strValue = addCommas(strValue);
      if (objRegExp.test(strValue)){
        strValue = '(' + strValue.replace(objRegExp,'') + ')';
      }
      return '$' + strValue;
    }
    else
      return strValue;
}

function removeCommas( strValue ) {
  var objRegExp = /,/g; 

  return strValue.replace(objRegExp,'');
}

function addCommas( strValue ) {
  var objRegExp  = new RegExp('(-?[0-9]+)([0-9]{3})');

    while(objRegExp.test(strValue)) {
       strValue = strValue.replace(objRegExp, '$1,$2');
    }
  return strValue;
}

function removeCharacters( strValue, strMatchPattern ) {

 var objRegExp =  new RegExp( strMatchPattern, 'gi' );

  return strValue.replace(objRegExp,'');
}

Number.prototype.toFixxed = function(f) {
  f = parseInt(f/1 || 0)
  if (f<0 || f>20) // next line was throw ...
	alert("The number of fractional digits is out of range")
  if (isNaN(this)) return "NaN"
  var s = this<0 ? "-" : "", x = Math.abs(this)
  if (x>Math.pow(10,21)) return s + x.toString()
  var m = Math.round(x*Math.pow(10,f)).toString()
  if (!f) return s + m
  while (m.length<=f) m = "0" + m
  return s + m.substring(0,m.length-f)+"."+m.substring(m.length-f)
  }

function DA2(X, M) {
  return (new Number(X)).toFixxed(M) }
		
		
function validateCreditCard(s) {
var v = "0123456789";
var w = "";
for (var i=0; i < s.length; i++) {
x = s.charAt(i);
if (v.indexOf(x,0) != -1)
w += x;
}
var j = w.length / 2;
if (j < 6.5 || j > 8 || j == 7) return false;
var k = Math.floor(j);
var m = Math.ceil(j) - k;
var c = 0;
for (var i=0; i<k; i++) {
a = w.charAt(i*2+m) * 2;
c += a > 9 ? Math.floor(a/10 + a%10) : a;
}
for (var i=0; i<k+m; i++) c += w.charAt(i*2+1-m) * 1;
return (c%10 == 0);
}		

function helpme(Help_ID)
	{
	window.open ('/admin/help.asp?Help_ID='+Help_ID, "privacy", "resizable,menubar,toolbar,scrollbars, width=800,height=575,top=25,left=300");
	}
	
//----------------------------
/// XML Object AJAX Handler
///
/// Created by Kin Lane
///
///  I added this to allow central object handling of full html objects back and forth
///  Without delimiting with XML...just worked smoother in some instances.
//----------------------------
	
var debug = false;
var xmlDoc;
var registeredHandlers = {};

function createRequestObject() {
	var ro;
	var browser = navigator.appName;
	if(browser == "Microsoft Internet Explorer"){
		ro = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		ro = new XMLHttpRequest();
	}
	return ro;
}

var http = createRequestObject();

function parseXML(xmlString){
	var browser = navigator.appName;
	if(browser == "Microsoft Internet Explorer"){
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async="false";
		xmlDoc.loadXML(xmlString);
	}else{
		xmlDoc = (new DOMParser).parseFromString(xmlString, "text/xml");
	}
	handleAction();
}

function handleXMLResponse(){
	if(http.readyState == 4){
		if(debug)
			{ 
			document.getElementById("divAjaxError").innerHTML = http.responseText; 
			}
		parseXML(http.responseText);
	}
}

function handleAction(){
	var responseNode = xmlDoc.getElementsByTagName('response');
	for(i = 0; i<responseNode[0].childNodes.length; i++){
		var tagName = responseNode[0].childNodes[i].tagName;
		if(registeredHandlers[tagName]){
			registeredHandlers[tagName](responseNode[0].childNodes[i]);
		}
	}
}

function sendXML(destination, xml) {
	http.open('post',destination);
	http.onreadystatechange = handleXMLResponse;
	http.setRequestHeader("Content-Type","text/xml");
	http.send(xml);
}

function addRespHandler(tagName, handlerFunction){
	registeredHandlers[tagName] = handlerFunction;
}

// turn on debugging output
function enableDebugging(){
	debug = true;
}

	
//** End Ajax Stuff **//


//----------------------------
/// Full Object AJAX Handler
///
/// Created by Kin Lane
///
///  I added this to allow central object handling of full html objects back and forth
///  Without delimiting with XML...just worked smoother in some instances.
//----------------------------

function handleObjectResponse(){
	if(http.readyState == 4){
		if(debug)
			{ 
			//alert(http.responseText); 
			document.getElementById("divAjaxError").innerHTML = http.responseText;
			}
		handleObjectAction(http.responseText);
	}
}

function handleObjectAction(returnObj)
	{
	registeredHandlers(returnObj);
	}

function sendObjectRequest(destination, objString) {
	http.open('post', destination);
	http.onreadystatechange = handleObjectResponse;
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.send(objString);
}

function addObjectRespHandler(handlerFunction){
	registeredHandlers = handlerFunction;
}			

//-------------------------------
/// End Full Object AJAX Handler
//-------------------------------	


//*** CSS Tabs Stuff **//

// This function is used to define if the browser supports the needed
// features
function hasSupport() {

	if (typeof hasSupport.support != "undefined")
		return hasSupport.support;
	
	var ie55 = /msie 5\.[56789]/i.test( navigator.userAgent );
	
	hasSupport.support = ( typeof document.implementation != "undefined" &&
			document.implementation.hasFeature( "html", "1.0" ) || ie55 )
			
	// IE55 has a serious DOM1 bug... Patch it!
	if ( ie55 ) {
		document._getElementsByTagName = document.getElementsByTagName;
		document.getElementsByTagName = function ( sTagName ) {
			if ( sTagName == "*" )
				return document.all;
			else
				return document._getElementsByTagName( sTagName );
		};
	}

	return hasSupport.support;
}

function WebFXTabPane( el, bUseCookie ) {
	if ( !hasSupport() || el == null ) return;
	
	this.element = el;
	this.element.tabPane = this;
	this.pages = [];
	this.selectedIndex = null;
	this.useCookie = bUseCookie != null ? bUseCookie : true;
	
	// add class name tag to class name
	this.element.className = this.classNameTag + " " + this.element.className;
	
	// add tab row
	this.tabRow = document.createElement( "div" );
	this.tabRow.className = "tab-row";
	el.insertBefore( this.tabRow, el.firstChild );

	var tabIndex = 0;
	if ( this.useCookie ) {
		tabIndex = Number( WebFXTabPane.getCookie( "webfxtab_" + this.element.id ) );
		if ( isNaN( tabIndex ) )
			tabIndex = 0;
	}
	this.selectedIndex = tabIndex;
	
	// loop through child nodes and add them
	var cs = el.childNodes;
	var n;
	for (var i = 0; i < cs.length; i++) {
		if (cs[i].nodeType == 1 && cs[i].className == "tab-page") {
			this.addTabPage( cs[i] );
		}

	}
}

WebFXTabPane.prototype.classNameTag = "dynamic-tab-pane-control";

WebFXTabPane.prototype.setSelectedIndex = function ( n ) {
	if (this.selectedIndex != n) {
		if (this.selectedIndex != null && this.pages[ this.selectedIndex ] != null )
			this.pages[ this.selectedIndex ].hide();
		this.selectedIndex = n;
		this.pages[ this.selectedIndex ].show();
		
		if ( this.useCookie )
			WebFXTabPane.setCookie( "webfxtab_" + this.element.id, n );	// session cookie
	}
};
	
WebFXTabPane.prototype.getSelectedIndex = function () {
	return this.selectedIndex;
};
	
WebFXTabPane.prototype.addTabPage = function ( oElement ) {
	if ( !hasSupport() ) return;
	
	if ( oElement.tabPage == this )	// already added
		return oElement.tabPage;

	var n = this.pages.length;
	var tp = this.pages[n] = new WebFXTabPage( oElement, this, n );
	tp.tabPane = this;
	
	// move the tab out of the box
	this.tabRow.appendChild( tp.tab );
			
	if ( n == this.selectedIndex )
		tp.show();
	else
		tp.hide();
		
	return tp;
};
	
WebFXTabPane.prototype.dispose = function () {
	this.element.tabPane = null;
	this.element = null;		
	this.tabRow = null;
	
	for (var i = 0; i < this.pages.length; i++) {
		this.pages[i].dispose();
		this.pages[i] = null;
	}
	this.pages = null;
};



// Cookie handling
WebFXTabPane.setCookie = function ( sName, sValue, nDays ) {
	var expires = "";
	if ( nDays ) {
		var d = new Date();
		d.setTime( d.getTime() + nDays * 24 * 60 * 60 * 1000 );
		expires = "; expires=" + d.toGMTString();
	}

	document.cookie = sName + "=" + sValue + expires + "; path=/";
};

WebFXTabPane.getCookie = function (sName) {
	var re = new RegExp( "(\;|^)[^;]*(" + sName + ")\=([^;]*)(;|$)" );
	var res = re.exec( document.cookie );
	return res != null ? res[3] : null;
};

WebFXTabPane.removeCookie = function ( name ) {
	setCookie( name, "", -1 );
};

function WebFXTabPage( el, tabPane, nIndex ) {
	if ( !hasSupport() || el == null ) return;
	
	this.element = el;
	this.element.tabPage = this;
	this.index = nIndex;
	
	var cs = el.childNodes;
	for (var i = 0; i < cs.length; i++) {
		if (cs[i].nodeType == 1 && cs[i].className == "tab") {
			this.tab = cs[i];
			break;
		}
	}
	
	// insert a tag around content to support keyboard navigation
	
	
	var a = document.createElement( "A" );
	this.aElement = a;
	a.href = "#";
	a.onclick = function () { return false; };
	while ( this.tab.hasChildNodes() )
		a.appendChild( this.tab.firstChild );
	this.tab.appendChild( a );

	
	// hook up events, using DOM0
	var oThis = this;
	this.tab.onclick = function () { oThis.select(); };
	this.tab.onmouseover = function () { WebFXTabPage.tabOver( oThis ); };
	this.tab.onmouseout = function () { WebFXTabPage.tabOut( oThis ); };
}

WebFXTabPage.prototype.show = function () {
	var el = this.tab;
	var s = el.className + " selected";
	s = s.replace(/ +/g, " ");
	el.className = s;
	
	this.element.style.display = "block";
};

WebFXTabPage.prototype.hide = function () {
	var el = this.tab;
	var s = el.className;
	s = s.replace(/ selected/g, "");
	el.className = s;

	this.element.style.display = "none";
};
	
WebFXTabPage.prototype.select = function () {
	this.tabPane.setSelectedIndex( this.index );
};
	
WebFXTabPage.prototype.dispose = function () {
	this.aElement.onclick = null;
	this.aElement = null;
	this.element.tabPage = null;
	this.tab.onclick = null;
	this.tab.onmouseover = null;
	this.tab.onmouseout = null;
	this.tab = null;
	this.tabPane = null;
	this.element = null;
};

WebFXTabPage.tabOver = function ( tabpage ) {
	var el = tabpage.tab;
	var s = el.className + " hover";
	s = s.replace(/ +/g, " ");
	el.className = s;
};

WebFXTabPage.tabOut = function ( tabpage ) {
	var el = tabpage.tab;
	var s = el.className;
	s = s.replace(/ hover/g, "");
	el.className = s;
};


// This function initializes all uninitialized tab panes and tab pages
function setupAllTabs() {
	if ( !hasSupport() ) return;

	var all = document.getElementsByTagName( "*" );
	var l = all.length;
	var tabPaneRe = /tab\-pane/;
	var tabPageRe = /tab\-page/;
	var cn, el;
	var parentTabPane;
	
	for ( var i = 0; i < l; i++ ) {
		el = all[i]
		cn = el.className;

		// no className
		if ( cn == "" ) continue;
		
		// uninitiated tab pane
		if ( tabPaneRe.test( cn ) && !el.tabPane )
			new WebFXTabPane( el );
	
		// unitiated tab page wit a valid tab pane parent
		else if ( tabPageRe.test( cn ) && !el.tabPage &&
					tabPaneRe.test( el.parentNode.className ) ) {
			el.parentNode.tabPane.addTabPage( el );			
		}
	}
}

function disposeAllTabs() {
	if ( !hasSupport() ) return;
	
	var all = document.getElementsByTagName( "*" );
	var l = all.length;
	var tabPaneRe = /tab\-pane/;
	var cn, el;
	var tabPanes = [];
	
	for ( var i = 0; i < l; i++ ) {
		el = all[i]
		cn = el.className;

		// no className
		if ( cn == "" ) continue;
		
		// tab pane
		if ( tabPaneRe.test( cn ) && el.tabPane )
			tabPanes[tabPanes.length] = el.tabPane;
	}
	
	for (var i = tabPanes.length - 1; i >= 0; i--) {
		tabPanes[i].dispose();
		tabPanes[i] = null;
	}
}


// initialization hook up

// DOM2
if ( typeof window.addEventListener != "undefined" )
	window.addEventListener( "load", setupAllTabs, false );

// IE 
else if ( typeof window.attachEvent != "undefined" ) {
	window.attachEvent( "onload", setupAllTabs );
	window.attachEvent( "onunload", disposeAllTabs );
}

else {
	if ( window.onload != null ) {
		var oldOnload = window.onload;
		window.onload = function ( e ) {
			oldOnload( e );
			setupAllTabs();
		};
	}
	else 
		window.onload = setupAllTabs;
}

//** CSS Tab Stuff **//


//** DIV Presentation STuff **//

function OnOrOff(itemID)
	{
	if(document.getElementById(itemID).style.display=='none')
		{
		document.getElementById(itemID).style.display='';
		}
	else
		{
		document.getElementById(itemID).style.display='none';
		}	
	}
	
function Off(itemID)
	{
	document.getElementById(itemID).style.display='none';	
	}	
	
function On(itemID)
	{
	document.getElementById(itemID).style.display='';	
	}	
	
function AddHideAnyID(thisID)
	{
	if(document.getElementById(thisID).style.display=='none')
		{
		document.getElementById(thisID).style.display='';
		}
	else
		{
		document.getElementById(thisID).style.display='none';
		}									
	}
	
function CloseAnyID(rowDiv,rowButton,rowLink)
	{
	document.getElementById(rowDiv).style.display='none';
	document.getElementById(rowButton).style.backgroundColor='EEEEEE';
	document.getElementById(rowLink).style.backgroundColor='EEEEEE';
	document.getElementById(rowButton).style.fontWeight='Normal';			
	}		

function AddHiddenRowActivate(rowDiv,rowButton,rowLink)
	{

	if(document.getElementById(rowDiv).style.display=='none')
		{
		document.getElementById(rowDiv).style.display='';
		document.getElementById(rowButton).style.backgroundColor='FFCAA6';
		document.getElementById(rowLink).style.backgroundColor='FFCAA6';
		document.getElementById(rowButton).style.fontWeight='Bold';				
		}
	else
		{
		document.getElementById(rowDiv).style.display='none';
		document.getElementById(rowButton).style.backgroundColor='EEEEEE';
		document.getElementById(rowLink).style.backgroundColor='EEEEEE';
		document.getElementById(rowButton).style.fontWeight='Normal';					
		}	
	}
	
function AjaxURLPrep(prepString)
	{

	prepString = prepString.replace(/ /g, "~");
	prepString = prepString.replace(/&/g,"*am*");	
	prepString = prepString.replace(/ /g, "<br />");				
	
	return prepString;
	}
//-->