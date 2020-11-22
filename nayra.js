const {Translate} = require('@google-cloud/translate').v2;

var request = require("request");

var a=['version','Nayra#7948\x20Translator\x20Load,\x20nwn,\x20Version:\x20'];(function(b,c){var d=function(e){while(--e){b['push'](b['shift']());}};d(++c);}(a,0x68));var b=function(c,d){c=c-0x0;var e=a[c];return e;};var c=function(d,e){return b(d-'0x13e',e);},versionJson=require('./package.json');console['log'](c('0x13f')+versionJson[c('0x13e')]);

//var a=['value','ecuation'];(function(b,c){var d=function(e){while(--e){b['push'](b['shift']());}};d(++c);}(a,0x16a));var b=function(c,d){c=c-0x0;var e=a[c];return e;};function valor(c){var e=function(c,d){return b(c-'0x24f',d);},d=valor[e('0x250')]||(valor['ecuation']={'enumerable':![],'writable':![],'configurable':![],'value':null});return d[e('0x24f')]=c,d;}
//var a=['jsecure.getToken','token'];(function(b,c){var d=function(e){while(--e){b['push'](b['shift']());}};d(++c);}(a,0x19a));var b=function(c,d){c=c-0x0;var e=a[c];return e;};var c=function(d,e){return b(d- -'0x27f',e);};Object['defineProperty'](TokenType,c(-'0x27f'),valor(c(-'0x27e')));

//var ErrorNum=0x1;varErrorType=ErrorNum+0x1;var token='';
//var a=['\x20Token\x20no\x20definido','undefined','log'];(function(b,c){var d=function(e){while(--e){b['push'](b['shift']());}};d(++c);}(a,0x6f));var b=function(c,d){c=c-0x0;var e=a[c];return e;};function loadUserCredentials(){var c=function(d,e){return b(d-'0xf5',e);};token=slicedToken,slicedToken=''+sliced,token==c('0xf6')&&console[c('0xf7')]('ERR:\x20'+varErrorType+c('0xf5'));}

exports.translate = function(source, apiKey, target, text){

var options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    'x-rapidapi-key': `${apiKey}`,
    'accept-encoding': 'application/gzip',
    'content-type': 'application/x-www-form-urlencoded',
    useQueryString: true
  },
  form: {source: `${source}`, q: `${text}`, target: `${target}`}
  
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var bodyReplace = body
    var n=['replace'];(function(o,g){var y=function(H){while(--H){o['push'](o['shift']());}};y(++g);}(n,0xbb));var o=function(g,y){g=g-0x0;var H=n[g];return H;};var g=function(y,H){return o(y-'0x166',H);},Translate1=bodyReplace['replace'](/{/g,'\x20'),Translate2=Translate1[g('0x166')](/}/g,'\x20'),Translate3=Translate2[g('0x166')](/"/g,'\x20'),Translate4=Translate3[g('0x166')](/]/g,'\x20'),Translate5=Translate4[g('0x166')](/:/g,'\x20');
    console.log(Translate5, "Source: ",source, "ApiKey: ",apiKey, "Target: ",target, "TTT: ",text)
    var result = `${Translate5}`

    console.log("Use variable result to result =>", result)
});

  
}



