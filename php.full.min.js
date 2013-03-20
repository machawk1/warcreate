/* 
 * More info at: http://phpjs.org
 * 
 * This is version: 3.26
 * php.js is copyright 2011 Kevin van Zonneveld.
 * 
 * Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
 * (http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
 * (http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jack, Jonas
 * Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Legaev
 * Andrey, Ates Goral (http://magnetiq.com), Alex, Ratheous, Martijn Wieringa,
 * Rafał Kukawski (http://blog.kukawski.pl), lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/), Nate, Philippe Baumann,
 * Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/), Carlos R.
 * L. Rodrigues (http://www.jsfromhell.com), Ash Searle
 * (http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek,
 * Erkekjetter, Michael Grier, Rafał Kukawski (http://kukawski.pl), Johnny
 * Mast (http://www.phpvrouwen.nl), T.Wild, d3x,
 * http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
 * Rafał Kukawski (http://blog.kukawski.pl/), stag019, pilus, WebDevHobo
 * (http://webdevhobo.blogspot.com/), marrtins, GeekFG
 * (http://geekfg.blogspot.com), Andrea Giammarchi
 * (http://webreflection.blogspot.com), Arpad Ray (mailto:arpad@php.net),
 * gorthaur, Paul Smith, Tim de Koning (http://www.kingsquare.nl), Joris, Oleg
 * Eremeev, Steve Hilder, majak, gettimeofday, KELAN, Josh Fraser
 * (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
 * Marc Palau, Kevin van Zonneveld (http://kevin.vanzonneveld.net/), Martin
 * (http://www.erlenwiese.de/), Breaking Par Consulting Inc
 * (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
 * Chris, Mirek Slugen, saulius, Alfonso Jimenez
 * (http://www.alfonsojimenez.com), Diplom@t (http://difane.com/), felix,
 * Mailfaker (http://www.weedem.fr/), Tyler Akins (http://rumkin.com), Caio
 * Ariede (http://caioariede.com), Robin, Kankrelune
 * (http://www.webfaktory.info/), Karol Kowalski, Imgen Tata
 * (http://www.myipdf.com/), mdsjack (http://www.mdsjack.bo.it), Dreamer,
 * Felix Geisendoerfer (http://www.debuggable.com/felix), Lars Fischer, AJ,
 * David, Aman Gupta, Michael White, Public Domain
 * (http://www.json.org/json2.js), Steven Levithan
 * (http://blog.stevenlevithan.com), Sakimori, Pellentesque Malesuada,
 * Thunder.m, Dj (http://phpjs.org/functions/htmlentities:425#comment_134018),
 * Steve Clay, David James, Francois, class_exists, nobbler, T. Wild, Itsacon
 * (http://www.itsacon.net/), date, Ole Vrijenhoek (http://www.nervous.nl/),
 * Fox, Raphael (Ao RUDLER), Marco, noname, Mateusz "loonquawl" Zalega, Frank
 * Forte, Arno, ger, mktime, john (http://www.jd-tech.net), Nick Kolosov
 * (http://sammy.ru), marc andreu, Scott Cariss, Douglas Crockford
 * (http://javascript.crockford.com), madipta, Slawomir Kaniecki,
 * ReverseSyntax, Nathan, Alex Wilson, kenneth, Bayron Guevara, Adam Wallner
 * (http://web2.bitbaro.hu/), paulo kuong, jmweb, Lincoln Ramsay, djmix,
 * Pyerre, Jon Hohle, Thiago Mata (http://thiagomata.blog.com), lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/this.), Linuxworld, duncan,
 * Gilbert, Sanjoy Roy, Shingo, sankai, Oskar Larsson Högfeldt
 * (http://oskar-lh.name/), Denny Wardhana, 0m3r, Everlasto, Subhasis Deb,
 * josh, jd, Pier Paolo Ramon (http://www.mastersoup.com/), P, merabi, Soren
 * Hansen, Eugene Bulkin (http://doubleaw.com/), Der Simon
 * (http://innerdom.sourceforge.net/), echo is bad, Ozh, XoraX
 * (http://www.xorax.info), EdorFaus, JB, J A R, Marc Jansen, Francesco, LH,
 * Stoyan Kyosev (http://www.svest.org/), nord_ua, omid
 * (http://phpjs.org/functions/380:380#comment_137122), Brad Touesnard, MeEtc
 * (http://yass.meetcweb.com), Peter-Paul Koch
 * (http://www.quirksmode.org/js/beat.html), Olivier Louvignes
 * (http://mg-crea.com/), T0bsn, Tim Wiel, Bryan Elliott, Jalal Berrami,
 * Martin, JT, David Randall, Thomas Beaucourt (http://www.webapp.fr), taith,
 * vlado houba, Pierre-Luc Paour, Kristof Coomans (SCK-CEN Belgian Nucleair
 * Research Centre), Martin Pool, Kirk Strobeck, Rick Waldron, Brant Messenger
 * (http://www.brantmessenger.com/), Devan Penner-Woelk, Saulo Vallory, Wagner
 * B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong
 * (http://carrot.org/), Christoph, Daniel Esteban, strftime, Mick@el, rezna,
 * Simon Willison (http://simonwillison.net), Anton Ongson, Gabriel Paderni,
 * Marco van Oort, penutbutterjelly, Philipp Lenssen, Bjorn Roesbeke
 * (http://www.bjornroesbeke.be/), Bug?, Eric Nagel, Tomasz Wesolowski,
 * Evertjan Garretsen, Bobby Drake, Blues (http://tech.bluesmoon.info/), Luke
 * Godfrey, Pul, uestla, Alan C, Ulrich, Rafal Kukawski, Yves Sucaet,
 * sowberry, Norman "zEh" Fuchs, hitwork, Zahlii, johnrembo, Nick Callen,
 * Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Brian Tafoya
 * (http://www.premasolutions.com/), Philippe Jausions
 * (http://pear.php.net/user/jausions), Aidan Lister
 * (http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp,
 * strcmp, Taras Bogach, jpfle, Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando,
 * dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha
 * (http://www.pedrotainha.com), James, Arnout Kazemier
 * (http://www.3rd-Eden.com), Chris McMacken, gabriel paderni, Yannoo,
 * FGFEmperor, baris ozdil, Tod Gentille, Greg Frazier, jakes, 3D-GRAF, Allan
 * Jensen (http://www.winternet.no), Howard Yeend, Benjamin Lupton, davook,
 * daniel airton wermann (http://wermann.com.br), Atli Þór, Maximusya, Ryan
 * W Tenney (http://ryan.10e.us), Alexander M Beedie, fearphage
 * (http://http/my.opera.com/fearphage/), Nathan Sepulveda, Victor, Matteo,
 * Billy, stensi, Cord, Manish, T.J. Leahy, Riddler
 * (http://www.frontierwebdev.com/), Rafał Kukawski, FremyCompany, Matt
 * Bradley, Tim de Koning, Luis Salazar (http://www.freaky-media.com/), Diogo
 * Resende, Rival, Andrej Pavlovic, Garagoth, Le Torbi
 * (http://www.letorbi.de/), Dino, Josep Sanz (http://www.ws3.es/), rem,
 * Russell Walker (http://www.nbill.co.uk/), Jamie Beck
 * (http://www.terabit.ca/), setcookie, Michael, YUI Library:
 * http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Blues at
 * http://hacks.bluesmoon.info/strftime/strftime.js, Ben
 * (http://benblume.co.uk/), DtTvB
 * (http://dt.in.th/2008-09-16.string-length-in-bytes.html), Andreas, William,
 * meo, incidence, Cagri Ekin, Amirouche, Amir Habibi
 * (http://www.residence-mixte.com/), Luke Smith (http://lucassmith.name),
 * Kheang Hok Chin (http://www.distantia.ca/), Jay Klehr, Lorenzo Pisani,
 * Tony, Yen-Wei Liu, Greenseed, mk.keck, Leslie Hoare, dude, booeyOH, Ben
 * Bryan
 * 
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */ 


// Compression: minified


function _phpjs_shared_bc(){var libbcmath={PLUS:'+',MINUS:'-',BASE:10,scale:0,bc_num:function(){this.n_sign=null;this.n_len=null;this.n_scale=null;this.n_value=null;this.toString=function(){var r,tmp;tmp=this.n_value.join('');r=((this.n_sign==libbcmath.PLUS)?'':this.n_sign)+tmp.substr(0,this.n_len);if(this.n_scale>0){r+='.'+tmp.substr(this.n_len,this.n_scale);}
return r;};},bc_add:function(n1,n2,scale_min){var sum,cmp_res,res_scale;if(n1.n_sign===n2.n_sign){sum=libbcmath._bc_do_add(n1,n2,scale_min);sum.n_sign=n1.n_sign;}else{cmp_res=libbcmath._bc_do_compare(n1,n2,false,false);switch(cmp_res){case-1:sum=libbcmath._bc_do_sub(n2,n1,scale_min);sum.n_sign=n2.n_sign;break;case 0:res_scale=libbcmath.MAX(scale_min,libbcmath.MAX(n1.n_scale,n2.n_scale));sum=libbcmath.bc_new_num(1,res_scale);libbcmath.memset(sum.n_value,0,0,res_scale+1);break;case 1:sum=libbcmath._bc_do_sub(n1,n2,scale_min);sum.n_sign=n1.n_sign;}}
return sum;},bc_compare:function(n1,n2){return libbcmath._bc_do_compare(n1,n2,true,false);},_one_mult:function(num,n_ptr,size,digit,result,r_ptr){var carry,value;var nptr,rptr;if(digit===0){libbcmath.memset(result,0,0,size);}else{if(digit==1){libbcmath.memcpy(result,r_ptr,num,n_ptr,size);}else{nptr=n_ptr+size-1;rptr=r_ptr+size-1;carry=0;while(size-->0){value=num[nptr--]*digit+carry;result[rptr--]=value%libbcmath.BASE;carry=Math.floor(value/libbcmath.BASE);}
if(carry!==0){result[rptr]=carry;}}}},bc_divide:function(n1,n2,scale){var quot;var qval;var num1,num2;var ptr1,ptr2,n2ptr,qptr;var scale1,val;var len1,len2,scale2,qdigits,extra,count;var qdig,qguess,borrow,carry;var mval;var zero;var norm;var ptrs;if(libbcmath.bc_is_zero(n2)){return-1;}
if(libbcmath.bc_is_zero(n1)){return libbcmath.bc_new_num(1,scale);}
if(n2.n_scale===0){if(n2.n_len===1&&n2.n_value[0]===1){qval=libbcmath.bc_new_num(n1.n_len,scale);qval.n_sign=(n1.n_sign==n2.n_sign?libbcmath.PLUS:libbcmath.MINUS);libbcmath.memset(qval.n_value,n1.n_len,0,scale);libbcmath.memcpy(qval.n_value,0,n1.n_value,0,n1.n_len+libbcmath.MIN(n1.n_scale,scale));}}
scale2=n2.n_scale;n2ptr=n2.n_len+scale2-1;while((scale2>0)&&(n2.n_value[n2ptr--]===0)){scale2--;}
len1=n1.n_len+scale2;scale1=n1.n_scale-scale2;if(scale1<scale){extra=scale-scale1;}else{extra=0;}
num1=libbcmath.safe_emalloc(1,n1.n_len+n1.n_scale,extra+2);if(num1===null){libbcmath.bc_out_of_memory();}
libbcmath.memset(num1,0,0,n1.n_len+n1.n_scale+extra+2);libbcmath.memcpy(num1,1,n1.n_value,0,n1.n_len+n1.n_scale);len2=n2.n_len+scale2;num2=libbcmath.safe_emalloc(1,len2,1);if(num2===null){libbcmath.bc_out_of_memory();}
libbcmath.memcpy(num2,0,n2.n_value,0,len2);num2[len2]=0;n2ptr=0;while(num2[n2ptr]===0){n2ptr++;len2--;}
if(len2>len1+scale){qdigits=scale+1;zero=true;}else{zero=false;if(len2>len1){qdigits=scale+1;}else{qdigits=len1-len2+scale+1;}}
qval=libbcmath.bc_new_num(qdigits-scale,scale);libbcmath.memset(qval.n_value,0,0,qdigits);mval=libbcmath.safe_emalloc(1,len2,1);if(mval===null){libbcmath.bc_out_of_memory();}
if(!zero){norm=Math.floor(10/(n2.n_value[n2ptr]+1));if(norm!=1){libbcmath._one_mult(num1,0,len1+scale1+extra+1,norm,num1,0);libbcmath._one_mult(n2.n_value,n2ptr,len2,norm,n2.n_value,n2ptr);}
qdig=0;if(len2>len1){qptr=len2-len1;}else{qptr=0;}
while(qdig<=len1+scale-len2){if(n2.n_value[n2ptr]==num1[qdig]){qguess=9;}else{qguess=Math.floor((num1[qdig]*10+num1[qdig+1])/n2.n_value[n2ptr]);}
if(n2.n_value[n2ptr+1]*qguess>(num1[qdig]*10+num1[qdig+1]-n2.n_value[n2ptr]*qguess)*10+num1[qdig+2]){qguess--;if(n2.n_value[n2ptr+1]*qguess>(num1[qdig]*10+num1[qdig+1]-n2.n_value[n2ptr]*qguess)*10+num1[qdig+2]){qguess--;}}
borrow=0;if(qguess!==0){mval[0]=0;libbcmath._one_mult(n2.n_value,n2ptr,len2,qguess,mval,1);ptr1=qdig+len2;ptr2=len2;for(count=0;count<len2+1;count++){if(ptr2<0){val=num1[ptr1]-0-borrow;}else{val=num1[ptr1]-mval[ptr2--]-borrow;}
if(val<0){val+=10;borrow=1;}else{borrow=0;}
num1[ptr1--]=val;}}
if(borrow==1){qguess--;ptr1=qdig+len2;ptr2=len2-1;carry=0;for(count=0;count<len2;count++){if(ptr2<0){val=num1[ptr1]+0+carry;}else{val=num1[ptr1]+n2.n_value[ptr2--]+carry;}
if(val>9){val-=10;carry=1;}else{carry=0;}
num1[ptr1--]=val;}
if(carry==1){num1[ptr1]=(num1[ptr1]+1)%10;}}
qval.n_value[qptr++]=qguess;qdig++;}}
qval.n_sign=(n1.n_sign==n2.n_sign?libbcmath.PLUS:libbcmath.MINUS);if(libbcmath.bc_is_zero(qval)){qval.n_sign=libbcmath.PLUS;}
libbcmath._bc_rm_leading_zeros(qval);return qval;},MUL_BASE_DIGITS:80,MUL_SMALL_DIGITS:(this.MUL_BASE_DIGITS/4),bc_multiply:function(n1,n2,scale){var pval;var len1,len2;var full_scale,prod_scale;len1=n1.n_len+n1.n_scale;len2=n2.n_len+n2.n_scale;full_scale=n1.n_scale+n2.n_scale;prod_scale=libbcmath.MIN(full_scale,libbcmath.MAX(scale,libbcmath.MAX(n1.n_scale,n2.n_scale)));pval=libbcmath._bc_rec_mul(n1,len1,n2,len2,full_scale);pval.n_sign=(n1.n_sign==n2.n_sign?libbcmath.PLUS:libbcmath.MINUS);pval.n_len=len2+len1+1-full_scale;pval.n_scale=prod_scale;libbcmath._bc_rm_leading_zeros(pval);if(libbcmath.bc_is_zero(pval)){pval.n_sign=libbcmath.PLUS;}
return pval;},new_sub_num:function(length,scale,value){var temp=new libbcmath.bc_num();temp.n_sign=libbcmath.PLUS;temp.n_len=length;temp.n_scale=scale;temp.n_value=value;return temp;},_bc_simp_mul:function(n1,n1len,n2,n2len,full_scale){var prod;var n1ptr,n2ptr,pvptr;var n1end,n2end;var indx,sum,prodlen;prodlen=n1len+n2len+1;prod=libbcmath.bc_new_num(prodlen,0);n1end=n1len-1;n2end=n2len-1;pvptr=prodlen-1;sum=0;for(indx=0;indx<prodlen-1;indx++){n1ptr=n1end-libbcmath.MAX(0,indx-n2len+1);n2ptr=n2end-libbcmath.MIN(indx,n2len-1);while((n1ptr>=0)&&(n2ptr<=n2end)){sum+=n1.n_value[n1ptr--]*n2.n_value[n2ptr++];}
prod.n_value[pvptr--]=Math.floor(sum%libbcmath.BASE);sum=Math.floor(sum/libbcmath.BASE);}
prod.n_value[pvptr]=sum;return prod;},_bc_shift_addsub:function(accum,val,shift,sub){var accp,valp;var count,carry;count=val.n_len;if(val.n_value[0]===0){count--;}
if(accum.n_len+accum.n_scale<shift+count){throw new Error("len + scale < shift + count");}
accp=accum.n_len+accum.n_scale-shift-1;valp=val.n_len=1;carry=0;if(sub){while(count--){accum.n_value[accp]-=val.n_value[valp--]+carry;if(accum.n_value[accp]<0){carry=1;accum.n_value[accp--]+=libbcmath.BASE;}else{carry=0;accp--;}}
while(carry){accum.n_value[accp]-=carry;if(accum.n_value[accp]<0){accum.n_value[accp--]+=libbcmath.BASE;}else{carry=0;}}}else{while(count--){accum.n_value[accp]+=val.n_value[valp--]+carry;if(accum.n_value[accp]>(libbcmath.BASE-1)){carry=1;accum.n_value[accp--]-=libbcmath.BASE;}else{carry=0;accp--;}}
while(carry){accum.n_value[accp]+=carry;if(accum.n_value[accp]>(libbcmath.BASE-1)){accum.n_value[accp--]-=libbcmath.BASE;}else{carry=0;}}}
return true;},_bc_rec_mul:function(u,ulen,v,vlen,full_scale){var prod;var u0,u1,v0,v1;var u0len,v0len;var m1,m2,m3,d1,d2;var n,prodlen,m1zero;var d1len,d2len;if((ulen+vlen)<libbcmath.MUL_BASE_DIGITS||ulen<libbcmath.MUL_SMALL_DIGITS||vlen<libbcmath.MUL_SMALL_DIGITS){return libbcmath._bc_simp_mul(u,ulen,v,vlen,full_scale);}
n=Math.floor((libbcmath.MAX(ulen,vlen)+1)/2);if(ulen<n){u1=libbcmath.bc_init_num();u0=libbcmath.new_sub_num(ulen,0,u.n_value);}else{u1=libbcmath.new_sub_num(ulen-n,0,u.n_value);u0=libbcmath.new_sub_num(n,0,u.n_value+ulen-n);}
if(vlen<n){v1=libbcmath.bc_init_num();v0=libbcmath.new_sub_num(vlen,0,v.n_value);}else{v1=libbcmath.new_sub_num(vlen-n,0,v.n_value);v0=libbcmath.new_sub_num(n,0,v.n_value+vlen-n);}
libbcmath._bc_rm_leading_zeros(u1);libbcmath._bc_rm_leading_zeros(u0);u0len=u0.n_len;libbcmath._bc_rm_leading_zeros(v1);libbcmath._bc_rm_leading_zeros(v0);v0len=v0.n_len;m1zero=libbcmath.bc_is_zero(u1)||libbcmath.bc_is_zero(v1);d1=libbcmath.bc_init_num();d2=libbcmath.bc_init_num();d1=libbcmath.bc_sub(u1,u0,0);d1len=d1.n_len;d2=libbcmath.bc_sub(v0,v1,0);d2len=d2.n_len;if(m1zero){m1=libbcmath.bc_init_num();}else{m1=libbcmath._bc_rec_mul(u1,u1.n_len,v1,v1.n_len,0);}
if(libbcmath.bc_is_zero(d1)||libbcmath.bc_is_zero(d2)){m2=libbcmath.bc_init_num();}else{m2=libbcmath._bc_rec_mul(d1,d1len,d2,d2len,0);}
if(libbcmath.bc_is_zero(u0)||libbcmath.bc_is_zero(v0)){m3=libbcmath.bc_init_num();}else{m3=libbcmath._bc_rec_mul(u0,u0.n_len,v0,v0.n_len,0);}
prodlen=ulen+vlen+1;prod=libbcmath.bc_new_num(prodlen,0);if(!m1zero){libbcmath._bc_shift_addsub(prod,m1,2*n,0);libbcmath._bc_shift_addsub(prod,m1,n,0);}
libbcmath._bc_shift_addsub(prod,m3,n,0);libbcmath._bc_shift_addsub(prod,m3,0,0);libbcmath._bc_shift_addsub(prod,m2,n,d1.n_sign!=d2.n_sign);return prod;},_bc_do_compare:function(n1,n2,use_sign,ignore_last){var n1ptr,n2ptr;var count;if(use_sign&&(n1.n_sign!=n2.n_sign)){if(n1.n_sign==libbcmath.PLUS){return(1);}else{return(-1);}}
if(n1.n_len!=n2.n_len){if(n1.n_len>n2.n_len){if(!use_sign||(n1.n_sign==libbcmath.PLUS)){return(1);}else{return(-1);}}else{if(!use_sign||(n1.n_sign==libbcmath.PLUS)){return(-1);}else{return(1);}}}
count=n1.n_len+Math.min(n1.n_scale,n2.n_scale);n1ptr=0;n2ptr=0;while((count>0)&&(n1.n_value[n1ptr]==n2.n_value[n2ptr])){n1ptr++;n2ptr++;count--;}
if(ignore_last&&(count==1)&&(n1.n_scale==n2.n_scale)){return(0);}
if(count!==0){if(n1.n_value[n1ptr]>n2.n_value[n2ptr]){if(!use_sign||n1.n_sign==libbcmath.PLUS){return(1);}else{return(-1);}}else{if(!use_sign||n1.n_sign==libbcmath.PLUS){return(-1);}else{return(1);}}}
if(n1.n_scale!=n2.n_scale){if(n1.n_scale>n2.n_scale){for(count=(n1.n_scale-n2.n_scale);count>0;count--){if(n1.n_value[n1ptr++]!==0){if(!use_sign||n1.n_sign==libbcmath.PLUS){return(1);}else{return(-1);}}}}else{for(count=(n2.n_scale-n1.n_scale);count>0;count--){if(n2.n_value[n2ptr++]!==0){if(!use_sign||n1.n_sign==libbcmath.PLUS){return(-1);}else{return(1);}}}}}
return(0);},bc_sub:function(n1,n2,scale_min){var diff;var cmp_res,res_scale;if(n1.n_sign!=n2.n_sign){diff=libbcmath._bc_do_add(n1,n2,scale_min);diff.n_sign=n1.n_sign;}else{cmp_res=libbcmath._bc_do_compare(n1,n2,false,false);switch(cmp_res){case-1:diff=libbcmath._bc_do_sub(n2,n1,scale_min);diff.n_sign=(n2.n_sign==libbcmath.PLUS?libbcmath.MINUS:libbcmath.PLUS);break;case 0:res_scale=libbcmath.MAX(scale_min,libbcmath.MAX(n1.n_scale,n2.n_scale));diff=libbcmath.bc_new_num(1,res_scale);libbcmath.memset(diff.n_value,0,0,res_scale+1);break;case 1:diff=libbcmath._bc_do_sub(n1,n2,scale_min);diff.n_sign=n1.n_sign;break;}}
return diff;},_bc_do_add:function(n1,n2,scale_min){var sum;var sum_scale,sum_digits;var n1ptr,n2ptr,sumptr;var carry,n1bytes,n2bytes;var tmp;sum_scale=libbcmath.MAX(n1.n_scale,n2.n_scale);sum_digits=libbcmath.MAX(n1.n_len,n2.n_len)+1;sum=libbcmath.bc_new_num(sum_digits,libbcmath.MAX(sum_scale,scale_min));n1bytes=n1.n_scale;n2bytes=n2.n_scale;n1ptr=(n1.n_len+n1bytes-1);n2ptr=(n2.n_len+n2bytes-1);sumptr=(sum_scale+sum_digits-1);if(n1bytes!=n2bytes){if(n1bytes>n2bytes){while(n1bytes>n2bytes){sum.n_value[sumptr--]=n1.n_value[n1ptr--];n1bytes--;}}else{while(n2bytes>n1bytes){sum.n_value[sumptr--]=n2.n_value[n2ptr--];n2bytes--;}}}
n1bytes+=n1.n_len;n2bytes+=n2.n_len;carry=0;while((n1bytes>0)&&(n2bytes>0)){tmp=n1.n_value[n1ptr--]+n2.n_value[n2ptr--]+carry;if(tmp>=libbcmath.BASE){carry=1;tmp-=libbcmath.BASE;}else{carry=0;}
sum.n_value[sumptr]=tmp;sumptr--;n1bytes--;n2bytes--;}
if(n1bytes===0){while(n2bytes-->0){tmp=n2.n_value[n2ptr--]+carry;if(tmp>=libbcmath.BASE){carry=1;tmp-=libbcmath.BASE;}else{carry=0;}
sum.n_value[sumptr--]=tmp;}}else{while(n1bytes-->0){tmp=n1.n_value[n1ptr--]+carry;if(tmp>=libbcmath.BASE){carry=1;tmp-=libbcmath.BASE;}else{carry=0;}
sum.n_value[sumptr--]=tmp;}}
if(carry==1){sum.n_value[sumptr]+=1;}
libbcmath._bc_rm_leading_zeros(sum);return sum;},_bc_do_sub:function(n1,n2,scale_min){var diff;var diff_scale,diff_len;var min_scale,min_len;var n1ptr,n2ptr,diffptr;var borrow,count,val;diff_len=libbcmath.MAX(n1.n_len,n2.n_len);diff_scale=libbcmath.MAX(n1.n_scale,n2.n_scale);min_len=libbcmath.MIN(n1.n_len,n2.n_len);min_scale=libbcmath.MIN(n1.n_scale,n2.n_scale);diff=libbcmath.bc_new_num(diff_len,libbcmath.MAX(diff_scale,scale_min));n1ptr=(n1.n_len+n1.n_scale-1);n2ptr=(n2.n_len+n2.n_scale-1);diffptr=(diff_len+diff_scale-1);borrow=0;if(n1.n_scale!=min_scale){for(count=n1.n_scale-min_scale;count>0;count--){diff.n_value[diffptr--]=n1.n_value[n1ptr--];}}else{for(count=n2.n_scale-min_scale;count>0;count--){val=0-n2.n_value[n2ptr--]-borrow;if(val<0){val+=libbcmath.BASE;borrow=1;}else{borrow=0;diff.n_value[diffptr--]=val;}}}
for(count=0;count<min_len+min_scale;count++){val=n1.n_value[n1ptr--]-n2.n_value[n2ptr--]-borrow;if(val<0){val+=libbcmath.BASE;borrow=1;}else{borrow=0;}
diff.n_value[diffptr--]=val;}
if(diff_len!=min_len){for(count=diff_len-min_len;count>0;count--){val=n1.n_value[n1ptr--]-borrow;if(val<0){val+=libbcmath.BASE;borrow=1;}else{borrow=0;}
diff.n_value[diffptr--]=val;}}
libbcmath._bc_rm_leading_zeros(diff);return diff;},bc_new_num:function(length,scale){var temp;temp=new libbcmath.bc_num();temp.n_sign=libbcmath.PLUS;temp.n_len=length;temp.n_scale=scale;temp.n_value=libbcmath.safe_emalloc(1,length+scale,0);libbcmath.memset(temp.n_value,0,0,length+scale);return temp;},safe_emalloc:function(size,len,extra){return Array((size*len)+extra);},bc_init_num:function(){return new libbcmath.bc_new_num(1,0);},_bc_rm_leading_zeros:function(num){while((num.n_value[0]===0)&&(num.n_len>1)){num.n_value.shift();num.n_len--;}},php_str2num:function(str){var p;p=str.indexOf('.');if(p==-1){return libbcmath.bc_str2num(str,0);}else{return libbcmath.bc_str2num(str,(str.length-p));}},CH_VAL:function(c){return c-'0';},BCD_CHAR:function(d){return d+'0';},isdigit:function(c){return(isNaN(parseInt(c,10))?false:true);},bc_str2num:function(str_in,scale){var str,num,ptr,digits,strscale,zero_int,nptr;str=str_in.split('');ptr=0;digits=0;strscale=0;zero_int=false;if((str[ptr]==='+')||(str[ptr]==='-')){ptr++;}
while(str[ptr]==='0'){ptr++;}
while((str[ptr])%1===0){ptr++;digits++;}
if(str[ptr]==='.'){ptr++;}
while((str[ptr])%1===0){ptr++;strscale++;}
if((str[ptr])||(digits+strscale===0)){return libbcmath.bc_init_num();}
strscale=libbcmath.MIN(strscale,scale);if(digits===0){zero_int=true;digits=1;}
num=libbcmath.bc_new_num(digits,strscale);ptr=0;if(str[ptr]==='-'){num.n_sign=libbcmath.MINUS;ptr++;}else{num.n_sign=libbcmath.PLUS;if(str[ptr]==='+'){ptr++;}}
while(str[ptr]==='0'){ptr++;}
nptr=0;if(zero_int){num.n_value[nptr++]=0;digits=0;}
for(;digits>0;digits--){num.n_value[nptr++]=libbcmath.CH_VAL(str[ptr++]);}
if(strscale>0){ptr++;for(;strscale>0;strscale--){num.n_value[nptr++]=libbcmath.CH_VAL(str[ptr++]);}}
return num;},cint:function(v){if(typeof(v)=='undefined'){v=0;}
var x=parseInt(v,10);if(isNaN(x)){x=0;}
return x;},MIN:function(a,b){return((a>b)?b:a);},MAX:function(a,b){return((a>b)?a:b);},ODD:function(a){return(a&1);},memset:function(r,ptr,chr,len){var i;for(i=0;i<len;i++){r[ptr+i]=chr;}},memcpy:function(dest,ptr,src,srcptr,len){var i;for(i=0;i<len;i++){dest[ptr+i]=src[srcptr+i];}
return true;},bc_is_zero:function(num){var count;var nptr;count=num.n_len+num.n_scale;nptr=0;while((count>0)&&(num.n_value[nptr++]===0)){count--;}
if(count!==0){return false;}else{return true;}},bc_out_of_memory:function(){throw new Error("(BC) Out of memory");}};return libbcmath;}
function abs(mixed_number){return Math.abs(mixed_number)||0;}
function acos(arg){return Math.acos(arg);}
function acosh(arg){return Math.log(arg+Math.sqrt(arg*arg-1));}
function addcslashes(str,charlist){var target='',chrs=[],i=0,j=0,c='',next='',rangeBegin='',rangeEnd='',chr='',begin=0,end=0,octalLength=0,postOctalPos=0,cca=0,escHexGrp=[],encoded='',percentHex=/%([\dA-Fa-f]+)/g;var _pad=function(n,c){if((n=n+'').length<c){return new Array(++c-n.length).join('0')+n;}
return n;};for(i=0;i<charlist.length;i++){c=charlist.charAt(i);next=charlist.charAt(i+1);if(c==='\\'&&next&&(/\d/).test(next)){rangeBegin=charlist.slice(i+1).match(/^\d+/)[0];octalLength=rangeBegin.length;postOctalPos=i+octalLength+1;if(charlist.charAt(postOctalPos)+charlist.charAt(postOctalPos+1)==='..'){begin=rangeBegin.charCodeAt(0);if((/\\\d/).test(charlist.charAt(postOctalPos+2)+charlist.charAt(postOctalPos+3))){rangeEnd=charlist.slice(postOctalPos+3).match(/^\d+/)[0];i+=1;}else if(charlist.charAt(postOctalPos+2)){rangeEnd=charlist.charAt(postOctalPos+2);}else{throw'Range with no end point';}
end=rangeEnd.charCodeAt(0);if(end>begin){for(j=begin;j<=end;j++){chrs.push(String.fromCharCode(j));}}else{chrs.push('.',rangeBegin,rangeEnd);}
i+=rangeEnd.length+2;}else{chr=String.fromCharCode(parseInt(rangeBegin,8));chrs.push(chr);}
i+=octalLength;}else if(next+charlist.charAt(i+2)==='..'){rangeBegin=c;begin=rangeBegin.charCodeAt(0);if((/\\\d/).test(charlist.charAt(i+3)+charlist.charAt(i+4))){rangeEnd=charlist.slice(i+4).match(/^\d+/)[0];i+=1;}else if(charlist.charAt(i+3)){rangeEnd=charlist.charAt(i+3);}else{throw'Range with no end point';}
end=rangeEnd.charCodeAt(0);if(end>begin){for(j=begin;j<=end;j++){chrs.push(String.fromCharCode(j));}}else{chrs.push('.',rangeBegin,rangeEnd);}
i+=rangeEnd.length+2;}else{chrs.push(c);}}
for(i=0;i<str.length;i++){c=str.charAt(i);if(chrs.indexOf(c)!==-1){target+='\\';cca=c.charCodeAt(0);if(cca<32||cca>126){switch(c){case'\n':target+='n';break;case'\t':target+='t';break;case'\u000D':target+='r';break;case'\u0007':target+='a';break;case'\v':target+='v';break;case'\b':target+='b';break;case'\f':target+='f';break;default:encoded=encodeURIComponent(c);if((escHexGrp=percentHex.exec(encoded))!==null){target+=_pad(parseInt(escHexGrp[1],16).toString(8),3);}
while((escHexGrp=percentHex.exec(encoded))!==null){target+='\\'+_pad(parseInt(escHexGrp[1],16).toString(8),3);}
break;}}else{target+=c;}}else{target+=c;}}
return target;}
function addslashes(str){return(str+'').replace(/[\\"']/g,'\\$&').replace(/\u0000/g,'\\0');}
function aggregate(obj,class_name){var p='',record={},pos=-1;var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};if(typeof class_name==='string'){class_name=this.window[class_name];}
this.php_js=this.php_js||{};this.php_js.aggregateKeys=this.php_js.aggregateKeys||[];this.php_js.aggregateRecords=this.php_js.aggregateRecords||[];this.php_js.aggregateClasses=this.php_js.aggregateClasses||[];this.php_js.aggregateClasses.push(getFuncName(class_name));for(p in class_name){if(!(p in obj)&&p!=='prototype'&&p[0]!=='_'){obj[p]=class_name[p];record[p]=class_name[p];}}
for(p in class_name.prototype){if(!(p in obj)&&p[0]!=='_'){obj[p]=class_name.prototype[p];record[p]=class_name.prototype[p];}}
if(!this.php_js.aggregateKeys.indexOf){this.php_js.aggregateKeys.indexOf=indexOf;}
pos=this.php_js.aggregateKeys.indexOf(obj);if(pos!==-1){this.php_js.aggregateRecords[pos].push(record);this.php_js.aggregateClasses[pos].push(getFuncName(class_name));}else{this.php_js.aggregateKeys.push(obj);this.php_js.aggregateRecords.push([record]);this.php_js.aggregateClasses[0]=[];this.php_js.aggregateClasses[0].push(getFuncName(class_name));}}
function aggregate_info(obj){var idx=-1,p='',infoObj={},retObj={},i=0,name='';var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};if(!this.php_js||!this.php_js.aggregateRecords||!this.php_js.aggregateKeys||!this.php_js.aggregateClasses){return false;}
if(!this.php_js.aggregateKeys.indexOf){this.php_js.aggregateKeys.indexOf=indexOf;}
idx=this.php_js.aggregateKeys.indexOf(obj);if(idx===-1){return false;}
for(i=0;i<this.php_js.aggregateClasses[idx].length;i++){name=this.php_js.aggregateClasses[idx][i];infoObj={methods:[],properties:[]};for(p in this.php_js.aggregateRecords[idx][i]){if(typeof this.php_js.aggregateRecords[idx][i][p]==='function'){infoObj.methods.push(p);}else{infoObj.properties.push(p);}}
retObj[name]=infoObj;}
return retObj;}
function aggregate_methods(obj,class_name){var p='',record={},pos=-1;var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};if(typeof class_name==='string'){class_name=this.window[class_name];}
this.php_js=this.php_js||{};this.php_js.aggregateKeys=this.php_js.aggregateKeys||[];this.php_js.aggregateRecords=this.php_js.aggregateRecords||[];this.php_js.aggregateClasses=this.php_js.aggregateClasses||[];this.php_js.aggregateClasses.push(getFuncName(class_name));for(p in class_name){if(!(p in obj)&&typeof class_name[p]==='function'&&p[0]!=='_'){obj[p]=class_name[p];record[p]=class_name[p];}}
for(p in class_name.prototype){if(!(p in obj)&&typeof class_name.prototype[p]==='function'&&p[0]!=='_'){obj[p]=class_name.prototype[p];record[p]=class_name.prototype[p];}}
if(!this.php_js.aggregateKeys.indexOf){this.php_js.aggregateKeys.indexOf=indexOf;}
pos=this.php_js.aggregateKeys.indexOf(obj);if(pos!==-1){this.php_js.aggregateRecords[pos].push(record);this.php_js.aggregateClasses[pos].push(getFuncName(class_name));}else{this.php_js.aggregateKeys.push(obj);this.php_js.aggregateRecords.push([record]);this.php_js.aggregateClasses[0]=[];this.php_js.aggregateClasses[0].push(getFuncName(class_name));}}
function aggregate_methods_by_list(obj,class_name,properties_list,exclude){var p='',i=0,record={},pos=-1;var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};if(typeof class_name==='string'){class_name=this.window[class_name];}
this.php_js=this.php_js||{};this.php_js.aggregateKeys=this.php_js.aggregateKeys||[];this.php_js.aggregateRecords=this.php_js.aggregateRecords||[];this.php_js.aggregateClasses=this.php_js.aggregateClasses||[];var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};this.php_js.aggregateClasses.push(getFuncName(class_name));if(!properties_list.indexOf){properties_list.indexOf=indexOf;}
if(exclude){for(p in class_name){if(!(p in obj)&&typeof class_name[p]==='function'&&p[0]!=='_'&&properties_list.indexOf(p)===-1){obj[p]=class_name[p];record[p]=class_name[p];}}
for(p in class_name.prototype){if(!(p in obj)&&typeof class_name.prototype[p]==='function'&&p[0]!=='_'&&properties_list.indexOf(p)===-1){obj[p]=class_name.prototype[p];record[p]=class_name.prototype[p];}}}else{for(i=0;i<properties_list.length;i++){p=properties_list[i];if(!(p in obj)&&p in class_name&&p[0]!=='_'&&typeof class_name.prototype[p]==='function'){obj[p]=class_name[p];record[p]=class_name[p];}else if(!(p in obj)&&p in class_name.prototype&&p[0]!=='_'&&typeof class_name.prototype[p]==='function'){obj[p]=class_name.prototype[p];record[p]=class_name.prototype[p];}}}
if(!this.php_js.aggregateKeys.indexOf){this.php_js.aggregateKeys.indexOf=indexOf;}
pos=this.php_js.aggregateKeys.indexOf(obj);if(pos!==-1){this.php_js.aggregateRecords[pos].push(record);this.php_js.aggregateClasses[pos].push(getFuncName(class_name));}else{this.php_js.aggregateKeys.push(obj);this.php_js.aggregateRecords.push([record]);this.php_js.aggregateClasses[0]=[];this.php_js.aggregateClasses[0].push(getFuncName(class_name));}}
function aggregate_methods_by_regexp(obj,class_name,regexp,exclude){var p='',test=false,record={},pos=-1,indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};if(typeof regexp==='string'){regexp=eval(regexp);}
if(typeof class_name==='string'){class_name=this.window[class_name];}
this.php_js=this.php_js||{};this.php_js.aggregateKeys=this.php_js.aggregateKeys||[];this.php_js.aggregateRecords=this.php_js.aggregateRecords||[];this.php_js.aggregateClasses=this.php_js.aggregateClasses||[];var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};this.php_js.aggregateClasses.push(getFuncName(class_name));for(p in class_name){test=exclude?p.search(regexp)===-1:p.search(regexp)!==-1;if(!(p in obj)&&typeof class_name[p]==='function'&&p[0]!=='_'&&test){obj[p]=class_name[p];record[p]=class_name[p];}}
for(p in class_name.prototype){test=exclude?p.search(regexp)===-1:p.search(regexp)!==-1;if(!(p in obj)&&typeof class_name.prototype[p]==='function'&&p[0]!=='_'&&test){obj[p]=class_name.prototype[p];record[p]=class_name.prototype[p];}}
if(!this.php_js.aggregateKeys.indexOf){this.php_js.aggregateKeys.indexOf=indexOf;}
pos=this.php_js.aggregateKeys.indexOf(obj);if(pos!==-1){this.php_js.aggregateRecords[pos].push(record);this.php_js.aggregateClasses[pos].push(getFuncName(class_name));}else{this.php_js.aggregateKeys.push(obj);this.php_js.aggregateRecords.push([record]);this.php_js.aggregateClasses[0]=[];this.php_js.aggregateClasses[0].push(getFuncName(class_name));}}
function aggregate_properties(obj,class_name){var p='',record={},pos=-1,indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};if(typeof class_name==='string'){class_name=this.window[class_name];}
this.php_js=this.php_js||{};this.php_js.aggregateKeys=this.php_js.aggregateKeys||[];this.php_js.aggregateRecords=this.php_js.aggregateRecords||[];this.php_js.aggregateClasses=this.php_js.aggregateClasses||[];var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};this.php_js.aggregateClasses.push(getFuncName(class_name));for(p in class_name){if(!(p in obj)&&typeof class_name[p]!=='function'&&p[0]!=='_'){obj[p]=class_name[p];record[p]=class_name[p];}}
for(p in class_name.prototype){if(!(p in obj)&&typeof class_name.prototype[p]!=='function'&&p[0]!=='_'){obj[p]=class_name.prototype[p];record[p]=class_name.prototype[p];}}
if(!this.php_js.aggregateKeys.indexOf){this.php_js.aggregateKeys.indexOf=indexOf;}
pos=this.php_js.aggregateKeys.indexOf(obj);if(pos!==-1){this.php_js.aggregateRecords[pos].push(record);this.php_js.aggregateClasses[pos].push(getFuncName(class_name));}else{this.php_js.aggregateKeys.push(obj);this.php_js.aggregateRecords.push([record]);this.php_js.aggregateClasses[0]=[];this.php_js.aggregateClasses[0].push(getFuncName(class_name));}}
function aggregate_properties_by_list(obj,class_name,properties_list,exclude){var p='',i=0,record={},pos=-1,indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};if(!properties_list.indexOf){properties_list.indexOf=indexOf;}
if(typeof class_name==='string'){class_name=this.window[class_name];}
this.php_js=this.php_js||{};this.php_js.aggregateKeys=this.php_js.aggregateKeys||[];this.php_js.aggregateRecords=this.php_js.aggregateRecords||[];this.php_js.aggregateClasses=this.php_js.aggregateClasses||[];var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};this.php_js.aggregateClasses.push(getFuncName(class_name));if(exclude){for(p in class_name){if(!(p in obj)&&typeof class_name[p]!=='function'&&p[0]!=='_'&&properties_list.indexOf(p)===-1){obj[p]=class_name[p];record[p]=class_name[p];}}
for(p in class_name.prototype){if(!(p in obj)&&typeof class_name.prototype[p]!=='function'&&p[0]!=='_'&&properties_list.indexOf(p)===-1){obj[p]=class_name.prototype[p];record[p]=class_name.prototype[p];}}}else{for(i=0;i<properties_list.length;i++){p=properties_list[i];if(!(p in obj)&&p in class_name&&p[0]!=='_'&&typeof class_name.prototype[p]!=='function'){obj[p]=class_name[p];record[p]=class_name[p];}else if(!(p in obj)&&p in class_name.prototype&&p[0]!=='_'&&typeof class_name.prototype[p]!=='function'){obj[p]=class_name.prototype[p];record[p]=class_name.prototype[p];}}}
if(!this.php_js.aggregateKeys.indexOf){this.php_js.aggregateKeys.indexOf=indexOf;}
pos=this.php_js.aggregateKeys.indexOf(obj);if(pos!==-1){this.php_js.aggregateRecords[pos].push(record);this.php_js.aggregateClasses[pos].push(getFuncName(class_name));}else{this.php_js.aggregateKeys.push(obj);this.php_js.aggregateRecords.push([record]);this.php_js.aggregateClasses[0]=[];this.php_js.aggregateClasses[0].push(getFuncName(class_name));}}
function aggregate_properties_by_regexp(obj,class_name,regexp,exclude){var p='',test=false,record={},pos=-1,indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};if(typeof regexp==='string'){regexp=eval(regexp);}
if(typeof class_name==='string'){class_name=this.window[class_name];}
this.php_js=this.php_js||{};this.php_js.aggregateKeys=this.php_js.aggregateKeys||[];this.php_js.aggregateRecords=this.php_js.aggregateRecords||[];this.php_js.aggregateClasses=this.php_js.aggregateClasses||[];var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};for(p in class_name){test=exclude?p.search(regexp)===-1:p.search(regexp)!==-1;if(!(p in obj)&&typeof class_name[p]!=='function'&&p[0]!=='_'&&test){obj[p]=class_name[p];record[p]=class_name[p];}}
for(p in class_name.prototype){test=exclude?p.search(regexp)===-1:p.search(regexp)!==-1;if(!(p in obj)&&typeof class_name.prototype[p]!=='function'&&p[0]!=='_'&&test){obj[p]=class_name.prototype[p];record[p]=class_name.prototype[p];}}
if(!this.php_js.aggregateKeys.indexOf){this.php_js.aggregateKeys.indexOf=indexOf;}
pos=this.php_js.aggregateKeys.indexOf(obj);if(pos!==-1){this.php_js.aggregateRecords[pos].push(record);this.php_js.aggregateClasses[pos].push(getFuncName(class_name));}else{this.php_js.aggregateKeys.push(obj);this.php_js.aggregateRecords.push([record]);this.php_js.aggregateClasses[0]=[];this.php_js.aggregateClasses[0].push(getFuncName(class_name));}}
function aggregation_info(obj){return this.aggregate_info(obj);}
function array(){var mainArgs=arguments,p=this.php_js=this.php_js||{},_indexOf=function(value,from,strict){for(var i=(from||0),nonstrict=!strict,length=this.length;i<length;i++){if(this[i]===value||(nonstrict&&this[i]==value)){return i;}}
return-1;};if(!p.Relator){p.Relator=function(){function _indexOf(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;}
function Relator(){var Stack=[],Array=[];if(!Stack.indexOf){Stack.indexOf=_indexOf;}
return{$:function(){return Relator();},constructor:function(that){var i=Stack.indexOf(that);~i?Array[i]:Array[Stack.push(that)-1]={};this.method(that).that=that;return this.method(that);},method:function(that){return Array[Stack.indexOf(that)];}};}
return Relator();}();}
if(p&&p.ini&&p.ini['phpjs.return_phpjs_arrays'].local_value.toLowerCase()==='on'){if(!p.PHPJS_Array){var __=p.ArrayRelator=p.ArrayRelator||p.Relator.$();p.PHPJS_Array=function PHPJS_Array(){var _=__.constructor(this),args=arguments;args=(args.length===1&&args[0]&&typeof args[0]==='object'&&args[0].length&&!args[0].propertyIsEnumerable('length'))?args[0]:args;if(!_.objectChain){_.objectChain=args;_.object={};_.keys=[];_.values=[];}
for(var i=0,argl=args.length;i<argl;i++){for(var p in args[i]){this[p]=_.object[p]=args[i][p];_.keys[_.keys.length]=p;_.values[_.values.length]=args[i][p];break;}}};var e=p.PHPJS_Array.prototype,that=this;e.change_key_case=function(cs){var _=__.method(this);var case_fn=(!cs||cs==='CASE_LOWER')?'toLowerCase':'toUpperCase';for(var i=0,kl=_.keys.length;i<kl;i++){var oldkey=_.keys[i],newkey=_.keys[i]=_.keys[i][case_fn]();this[newkey]=_.object[newkey]=_.objectChain[i][newkey]=_.values[i];this[oldkey]=_.object[oldkey]=_.objectChain[i][oldkey]=null;delete this[oldkey];delete _.object[oldkey];delete _.objectChain[i][oldkey];}
return this;};e.keys=function(search_value,argStrict){var _=__.method(this);var pos,search=typeof search_value!=='undefined',tmp_arr=[],strict=!!argStrict;if(!search){return _.keys;}
while((pos=_indexOf(_.values,pos,strict))!==-1){tmp_arr[tmp_arr.length]=_.keys[pos];}
return tmp_arr;};e.values=function(){var _=__.method(this);return _.values;};e.search=function(needle,argStrict){var _=__.method(this);var strict=!!argStrict,haystack=_.values,i,vl,val;if(typeof needle==='object'&&needle.exec){if(!strict){var flags='i'+(needle.global?'g':'')+
(needle.multiline?'m':'')+
(needle.sticky?'y':'');needle=new RegExp(needle.source,flags);}
for(i=0,vl=haystack.length;i<vl;i++){val=haystack[i];if(needle.test(val)){return _.keys[i];}}
return false;}
for(i=0,vl=haystack.length;i<vl;i++){val=haystack[i];if((strict&&val===needle)||(!strict&&val==needle)){return _.keys[i];}}
return false;};e.foreach=function(handler){var _=__.method(this);for(var i=0,kl=_.keys.length;i<kl;i++){if(handler.length===1){handler(_.values[i]);}
else{handler(_.keys[i],_.values[i]);}}
return this;};e.list=function(){var _=__.method(this);for(var i=0,argl=arguments.length;i<argl;i++){var key=_.keys[i];if(key&&key.length===parseInt(key).toString().length&&parseInt(key)<argl){that.window[arguments[key]]=_.values[key];}}
return this;};e.forEach=function(handler){var _=__.method(this);for(var i=0,kl=_.keys.length;i<kl;i++){handler(_.values[i],_.keys[i],this);}
return this;};e.$object=function(){var _=__.method(this);return _.object;};e.$objectChain=function(){var _=__.method(this);return _.objectChain;};}
function PHPJS_Array(){}
PHPJS_Array.prototype=p.PHPJS_Array.prototype;var arrInst=new PHPJS_Array();p.PHPJS_Array.apply(arrInst,mainArgs);return arrInst;}
return Array.prototype.slice.call(mainArgs);}
function array_change_key_case(array,cs){var case_fn,key,tmp_ar={};if(Object.prototype.toString.call(array)==='[object Array]'){return array;}
if(array&&typeof array==='object'&&array.change_key_case){return array.change_key_case(cs);}
if(array&&typeof array==='object'){case_fn=(!cs||cs==='CASE_LOWER')?'toLowerCase':'toUpperCase';for(key in array){tmp_ar[key[case_fn]()]=array[key];}
return tmp_ar;}
return false;}
function array_chunk(input,size,preserve_keys){var x,p='',i=0,c=-1,l=input.length||0,n=[];if(size<1){return null;}
if(Object.prototype.toString.call(input)==='[object Array]'){if(preserve_keys){while(i<l){(x=i%size)?n[c][i]=input[i]:n[++c]={},n[c][i]=input[i];i++;}}
else{while(i<l){(x=i%size)?n[c][x]=input[i]:n[++c]=[input[i]];i++;}}}
else{if(preserve_keys){for(p in input){if(input.hasOwnProperty(p)){(x=i%size)?n[c][p]=input[p]:n[++c]={},n[c][p]=input[p];i++;}}}
else{for(p in input){if(input.hasOwnProperty(p)){(x=i%size)?n[c][x]=input[p]:n[++c]=[input[p]];i++;}}}}
return n;}
function array_combine(keys,values){var new_array={},keycount=keys&&keys.length,i=0;if(typeof keys!=='object'||typeof values!=='object'||typeof keycount!=='number'||typeof values.length!=='number'||!keycount){return false;}
if(keycount!=values.length){return false;}
for(i=0;i<keycount;i++){new_array[keys[i]]=values[i];}
return new_array;}
function array_count_values(array){var tmp_arr={},key='',t='';var __getType=function(obj){var t=typeof obj;t=t.toLowerCase();if(t==="object"){t="array";}
return t;};var __countValue=function(value){switch(typeof(value)){case"number":if(Math.floor(value)!==value){return;}
case"string":if(value in this&&this.hasOwnProperty(value)){++this[value];}else{this[value]=1;}}};t=__getType(array);if(t==='array'){for(key in array){if(array.hasOwnProperty(key)){__countValue.call(tmp_arr,array[key]);}}}
return tmp_arr;}
function array_diff(arr1){var retArr={},argl=arguments.length,k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_assoc(arr1){var retArr={},argl=arguments.length,k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_key(arr1){var argl=arguments.length,retArr={},k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_uassoc(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_ukey(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_fill(start_index,num,mixed_val){var key,tmp_arr={};if(!isNaN(start_index)&&!isNaN(num)){for(key=0;key<num;key++){tmp_arr[(key+start_index)]=mixed_val;}}
return tmp_arr;}
function array_fill_keys(keys,value){var retObj={},key='';for(key in keys){retObj[keys[key]]=value;}
return retObj;}
function array_filter(arr,func){var retObj={},k;for(k in arr){if(func(arr[k])){retObj[k]=arr[k];}}
return retObj;}
function array_flip(trans){var key,tmp_ar={};for(key in trans){if(!trans.hasOwnProperty(key)){continue;}
tmp_ar[trans[key]]=key;}
return tmp_ar;}
function array_intersect(arr1){var retArr={},argl=arguments.length,arglm1=argl-1,k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]){if(i===arglm1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_assoc(arr1){var retArr={},argl=arguments.length,arglm1=argl-1,k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&k===k1){if(i===arglm1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_key(arr1){var retArr={},argl=arguments.length,arglm1=argl-1,k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(k===k1){if(i===arglm1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_uassoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&cb(k,k1)===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_ukey(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(k,k1)===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_key_exists(key,search){if(!search||(search.constructor!==Array&&search.constructor!==Object)){return false;}
return key in search;}
function array_keys(input,search_value,argStrict){var search=typeof search_value!=='undefined',tmp_arr=[],strict=!!argStrict,include=true,key='';if(input&&typeof input==='object'&&input.change_key_case){return input.keys(search_value,argStrict);}
for(key in input){if(input.hasOwnProperty(key)){include=true;if(search){if(strict&&input[key]!==search_value){include=false;}
else if(input[key]!=search_value){include=false;}}
if(include){tmp_arr[tmp_arr.length]=key;}}}
return tmp_arr;}
function array_map(callback){var argc=arguments.length,argv=arguments;var j=argv[1].length,i=0,k=1,m=0;var tmp=[],tmp_ar=[];while(i<j){while(k<argc){tmp[m++]=argv[k++][i];}
m=0;k=1;if(callback){if(typeof callback==='string'){callback=this.window[callback];}
tmp_ar[i++]=callback.apply(null,tmp);}else{tmp_ar[i++]=tmp;}
tmp=[];}
return tmp_ar;}
function array_merge(){var args=Array.prototype.slice.call(arguments),argl=args.length,arg,retObj={},k='',argil=0,j=0,i=0,ct=0,toStr=Object.prototype.toString,retArr=true;for(i=0;i<argl;i++){if(toStr.call(args[i])!=='[object Array]'){retArr=false;break;}}
if(retArr){retArr=[];for(i=0;i<argl;i++){retArr=retArr.concat(args[i]);}
return retArr;}
for(i=0,ct=0;i<argl;i++){arg=args[i];if(toStr.call(arg)==='[object Array]'){for(j=0,argil=arg.length;j<argil;j++){retObj[ct++]=arg[j];}}
else{for(k in arg){if(arg.hasOwnProperty(k)){if(parseInt(k,10)+''===k){retObj[ct++]=arg[k];}
else{retObj[k]=arg[k];}}}}}
return retObj;}
function array_merge_recursive(arr1,arr2){var idx='';if(arr1&&Object.prototype.toString.call(arr1)==='[object Array]'&&arr2&&Object.prototype.toString.call(arr2)==='[object Array]'){for(idx in arr2){arr1.push(arr2[idx]);}}else if((arr1&&(arr1 instanceof Object))&&(arr2&&(arr2 instanceof Object))){for(idx in arr2){if(idx in arr1){if(typeof arr1[idx]=='object'&&typeof arr2=='object'){arr1[idx]=this.array_merge(arr1[idx],arr2[idx]);}else{arr1[idx]=arr2[idx];}}else{arr1[idx]=arr2[idx];}}}
return arr1;}
function array_multisort(arr){var argl=arguments.length,sal=0,flags={'SORT_REGULAR':16,'SORT_NUMERIC':17,'SORT_STRING':18,'SORT_ASC':32,'SORT_DESC':40},sortArrs=[[]],sortFlag=[0],sortKeys=[[]],g=0,i=0,j=0,k='',l=0,thingsToSort=[],vkey=0,zlast=null,args=arguments,nLastSort=[],lastSort=[],lastSorts=[],tmpArray=[],elIndex=0,sortDuplicator=function(a,b){return nLastSort.shift();},sortFunctions=[[function(a,b){lastSort.push(a>b?1:(a<b?-1:0));return a>b?1:(a<b?-1:0);},function(a,b){lastSort.push(b>a?1:(b<a?-1:0));return b>a?1:(b<a?-1:0);}],[function(a,b){lastSort.push(a-b);return a-b;},function(a,b){lastSort.push(b-a);return b-a;}],[function(a,b){lastSort.push((a+'')>(b+'')?1:((a+'')<(b+'')?-1:0));return(a+'')>(b+'')?1:((a+'')<(b+'')?-1:0);},function(a,b){lastSort.push((b+'')>(a+'')?1:((b+'')<(a+'')?-1:0));return(b+'')>(a+'')?1:((b+'')<(a+'')?-1:0);}]];if(Object.prototype.toString.call(arr)==='[object Array]'){sortArrs[0]=arr;}
else if(arr&&typeof arr==='object'){for(i in arr){if(arr.hasOwnProperty(i)){sortKeys[0].push(i);sortArrs[0].push(arr[i]);}}}
else{return false;}
var arrMainLength=sortArrs[0].length,sortComponents=[0,arrMainLength];for(j=1;j<argl;j++){if(Object.prototype.toString.call(arguments[j])==='[object Array]'){sortArrs[j]=arguments[j];sortFlag[j]=0;if(arguments[j].length!==arrMainLength){return false;}}else if(arguments[j]&&typeof arguments[j]==='object'){sortKeys[j]=[];sortArrs[j]=[];sortFlag[j]=0;for(i in arguments[j]){if(arguments[j].hasOwnProperty(i)){sortKeys[j].push(i);sortArrs[j].push(arguments[j][i]);}}
if(sortArrs[j].length!==arrMainLength){return false;}}else if(typeof arguments[j]==='string'){var lFlag=sortFlag.pop();if(typeof flags[arguments[j]]==='undefined'||((((flags[arguments[j]])>>>4)&(lFlag>>>4))>0)){return false;}
sortFlag.push(lFlag+flags[arguments[j]]);}else{return false;}}
for(i=0;i!==arrMainLength;i++){thingsToSort.push(true);}
for(i in sortArrs){if(sortArrs.hasOwnProperty(i)){lastSorts=[];tmpArray=[];elIndex=0;nLastSort=[];lastSort=[];if(sortComponents.length===0){if(Object.prototype.toString.call(arguments[i])==='[object Array]'){args[i]=sortArrs[i];}else{for(k in arguments[i]){if(arguments[i].hasOwnProperty(k)){delete arguments[i][k];}}
sal=sortArrs[i].length;for(j=0,vkey=0;j<sal;j++){vkey=sortKeys[i][j];args[i][vkey]=sortArrs[i][j];}}
delete sortArrs[i];delete sortKeys[i];continue;}
var sFunction=sortFunctions[(sortFlag[i]&3)][((sortFlag[i]&8)>0)?1:0];for(l=0;l!==sortComponents.length;l+=2){tmpArray=sortArrs[i].slice(sortComponents[l],sortComponents[l+1]+1);tmpArray.sort(sFunction);lastSorts[l]=[].concat(lastSort);elIndex=sortComponents[l];for(g in tmpArray){if(tmpArray.hasOwnProperty(g)){sortArrs[i][elIndex]=tmpArray[g];elIndex++;}}}
sFunction=sortDuplicator;for(j in sortArrs){if(sortArrs.hasOwnProperty(j)){if(sortArrs[j]===sortArrs[i]){continue;}
for(l=0;l!==sortComponents.length;l+=2){tmpArray=sortArrs[j].slice(sortComponents[l],sortComponents[l+1]+1);nLastSort=[].concat(lastSorts[l]);tmpArray.sort(sFunction);elIndex=sortComponents[l];for(g in tmpArray){if(tmpArray.hasOwnProperty(g)){sortArrs[j][elIndex]=tmpArray[g];elIndex++;}}}}}
for(j in sortKeys){if(sortKeys.hasOwnProperty(j)){for(l=0;l!==sortComponents.length;l+=2){tmpArray=sortKeys[j].slice(sortComponents[l],sortComponents[l+1]+1);nLastSort=[].concat(lastSorts[l]);tmpArray.sort(sFunction);elIndex=sortComponents[l];for(g in tmpArray){if(tmpArray.hasOwnProperty(g)){sortKeys[j][elIndex]=tmpArray[g];elIndex++;}}}}}
zlast=null;sortComponents=[];for(j in sortArrs[i]){if(sortArrs[i].hasOwnProperty(j)){if(!thingsToSort[j]){if((sortComponents.length&1)){sortComponents.push(j-1);}
zlast=null;continue;}
if(!(sortComponents.length&1)){if(zlast!==null){if(sortArrs[i][j]===zlast){sortComponents.push(j-1);}else{thingsToSort[j]=false;}}
zlast=sortArrs[i][j];}else{if(sortArrs[i][j]!==zlast){sortComponents.push(j-1);zlast=sortArrs[i][j];}}}}
if(sortComponents.length&1){sortComponents.push(j);}
if(Object.prototype.toString.call(arguments[i])==='[object Array]'){args[i]=sortArrs[i];}
else{for(j in arguments[i]){if(arguments[i].hasOwnProperty(j)){delete arguments[i][j];}}
sal=sortArrs[i].length;for(j=0,vkey=0;j<sal;j++){vkey=sortKeys[i][j];args[i][vkey]=sortArrs[i][j];}}
delete sortArrs[i];delete sortKeys[i];}}
return true;}
function array_pad(input,pad_size,pad_value){var pad=[],newArray=[],newLength,diff=0,i=0;if(Object.prototype.toString.call(input)==='[object Array]'&&!isNaN(pad_size)){newLength=((pad_size<0)?(pad_size*-1):pad_size);diff=newLength-input.length;if(diff>0){for(i=0;i<diff;i++){newArray[i]=pad_value;}
pad=((pad_size<0)?newArray.concat(input):input.concat(newArray));}else{pad=input;}}
return pad;}
function array_pop(inputArr){var key='',lastKey='';if(inputArr.hasOwnProperty('length')){if(!inputArr.length){return null;}
return inputArr.pop();}else{for(key in inputArr){if(inputArr.hasOwnProperty(key)){lastKey=key;}}
if(lastKey){var tmp=inputArr[lastKey];delete(inputArr[lastKey]);return tmp;}else{return null;}}}
function array_product(input){var idx=0,product=1,il=0;if(Object.prototype.toString.call(input)!=='[object Array]'){return null;}
il=input.length;while(idx<il){product*=(!isNaN(input[idx])?input[idx]:0);idx++;}
return product;}
function array_push(inputArr){var i=0,pr='',argv=arguments,argc=argv.length,allDigits=/^\d$/,size=0,highestIdx=0,len=0;if(inputArr.hasOwnProperty('length')){for(i=1;i<argc;i++){inputArr[inputArr.length]=argv[i];}
return inputArr.length;}
for(pr in inputArr){if(inputArr.hasOwnProperty(pr)){++len;if(pr.search(allDigits)!==-1){size=parseInt(pr,10);highestIdx=size>highestIdx?size:highestIdx;}}}
for(i=1;i<argc;i++){inputArr[++highestIdx]=argv[i];}
return len+i-1;}
function array_rand(input,num_req){var indexes=[];var ticks=num_req||1;var checkDuplicate=function(input,value){var exist=false,index=0,il=input.length;while(index<il){if(input[index]===value){exist=true;break;}
index++;}
return exist;};if(Object.prototype.toString.call(input)==='[object Array]'&&ticks<=input.length){while(true){var rand=Math.floor((Math.random()*input.length));if(indexes.length===ticks){break;}
if(!checkDuplicate(indexes,rand)){indexes.push(rand);}}}else{indexes=null;}
return((ticks==1)?indexes.join():indexes);}
function array_reduce(a_input,callback){var lon=a_input.length;var res=0,i=0;var tmp=[];for(i=0;i<lon;i+=2){tmp[0]=a_input[i];if(a_input[(i+1)]){tmp[1]=a_input[(i+1)];}else{tmp[1]=0;}
res+=callback.apply(null,tmp);tmp=[];}
return res;}
function array_replace(arr){var retObj={},i=0,p='',argl=arguments.length;if(argl<2){throw new Error('There should be at least 2 arguments passed to array_replace()');}
for(p in arr){retObj[p]=arr[p];}
for(i=1;i<argl;i++){for(p in arguments[i]){retObj[p]=arguments[i][p];}}
return retObj;}
function array_replace_recursive(arr){var retObj={},i=0,p='',argl=arguments.length;if(argl<2){throw new Error('There should be at least 2 arguments passed to array_replace_recursive()');}
for(p in arr){retObj[p]=arr[p];}
for(i=1;i<argl;i++){for(p in arguments[i]){if(retObj[p]&&typeof retObj[p]==='object'){retObj[p]=this.array_replace_recursive(retObj[p],arguments[i][p]);}else{retObj[p]=arguments[i][p];}}}
return retObj;}
function array_reverse(array,preserve_keys){var isArray=Object.prototype.toString.call(array)==="[object Array]",tmp_arr=preserve_keys?{}:[],key;if(isArray&&!preserve_keys){return array.slice(0).reverse();}
if(preserve_keys){var keys=[];for(key in array){keys.push(key);}
var i=keys.length;while(i--){key=keys[i];tmp_arr[key]=array[key];}}else{for(key in array){tmp_arr.unshift(array[key]);}}
return tmp_arr;}
function array_search(needle,haystack,argStrict){var strict=!!argStrict,key='';if(haystack&&typeof haystack==='object'&&haystack.change_key_case){return haystack.search(needle,argStrict);}
if(typeof needle==='object'&&needle.exec){if(!strict){var flags='i'+(needle.global?'g':'')+
(needle.multiline?'m':'')+
(needle.sticky?'y':'');needle=new RegExp(needle.source,flags);}
for(key in haystack){if(needle.test(haystack[key])){return key;}}
return false;}
for(key in haystack){if((strict&&haystack[key]===needle)||(!strict&&haystack[key]==needle)){return key;}}
return false;}
function array_shift(inputArr){var props=false,shift=undefined,pr='',allDigits=/^\d$/,int_ct=-1,_checkToUpIndices=function(arr,ct,key){if(arr[ct]!==undefined){var tmp=ct;ct+=1;if(ct===key){ct+=1;}
ct=_checkToUpIndices(arr,ct,key);arr[ct]=arr[tmp];delete arr[tmp];}
return ct;};if(inputArr.length===0){return null;}
if(inputArr.length>0){return inputArr.shift();}}
function array_slice(arr,offst,lgth,preserve_keys){var key='';if(Object.prototype.toString.call(arr)!=='[object Array]'||(preserve_keys&&offst!==0)){var lgt=0,newAssoc={};for(key in arr){lgt+=1;newAssoc[key]=arr[key];}
arr=newAssoc;offst=(offst<0)?lgt+offst:offst;lgth=lgth===undefined?lgt:(lgth<0)?lgt+lgth-offst:lgth;var assoc={};var start=false,it=-1,arrlgth=0,no_pk_idx=0;for(key in arr){++it;if(arrlgth>=lgth){break;}
if(it==offst){start=true;}
if(!start){continue;}++arrlgth;if(this.is_int(key)&&!preserve_keys){assoc[no_pk_idx++]=arr[key];}else{assoc[key]=arr[key];}}
return assoc;}
if(lgth===undefined){return arr.slice(offst);}else if(lgth>=0){return arr.slice(offst,offst+lgth);}else{return arr.slice(offst,lgth);}}
function array_splice(arr,offst,lgth,replacement){var _checkToUpIndices=function(arr,ct,key){if(arr[ct]!==undefined){var tmp=ct;ct+=1;if(ct===key){ct+=1;}
ct=_checkToUpIndices(arr,ct,key);arr[ct]=arr[tmp];delete arr[tmp];}
return ct;};if(replacement&&typeof replacement!=='object'){replacement=[replacement];}
if(lgth===undefined){lgth=offst>=0?arr.length-offst:-offst;}else if(lgth<0){lgth=(offst>=0?arr.length-offst:-offst)+lgth;}
if(Object.prototype.toString.call(arr)!=='[object Array]'){var lgt=0,ct=-1,rmvd=[],rmvdObj={},repl_ct=-1,int_ct=-1;var returnArr=true,rmvd_ct=0,rmvd_lgth=0,key='';for(key in arr){lgt+=1;}
offst=(offst>=0)?offst:lgt+offst;for(key in arr){ct+=1;if(ct<offst){if(this.is_int(key)){int_ct+=1;if(parseInt(key,10)===int_ct){continue;}
_checkToUpIndices(arr,int_ct,key);arr[int_ct]=arr[key];delete arr[key];}
continue;}
if(returnArr&&this.is_int(key)){rmvd.push(arr[key]);rmvdObj[rmvd_ct++]=arr[key];}else{rmvdObj[key]=arr[key];returnArr=false;}
rmvd_lgth+=1;if(replacement&&replacement[++repl_ct]){arr[key]=replacement[repl_ct];}else{delete arr[key];}}
return returnArr?rmvd:rmvdObj;}
if(replacement){replacement.unshift(offst,lgth);return Array.prototype.splice.apply(arr,replacement);}
return arr.splice(offst,lgth);}
function array_sum(array){var key,sum=0;if(typeof array!=='object'){return null;}
for(key in array){sum+=(array[key]*1);}
return sum;}
function array_udiff(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr='',i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_udiff_assoc(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0&&k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_udiff_uassoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],cb0=arguments[arglm2],k1='',i=1,k='',arr={};cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;cb0=(typeof cb0==='string')?this.window[cb0]:(Object.prototype.toString.call(cb0)==='[object Array]')?this.window[cb0[0]][cb0[1]]:cb0;arr1keys:for(k1 in arr1){for(i=1;i<arglm2;i++){arr=arguments[i];for(k in arr){if(cb0(arr[k],arr1[k1])===0&&cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_uintersect(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[argm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_uintersect_assoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-2,cb=arguments[arglm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(k===k1&&cb(arr[k],arr1[k1])===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_uintersect_uassoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],cb0=arguments[arglm2],k1='',i=1,k='',arr={};cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;cb0=(typeof cb0==='string')?this.window[cb0]:(Object.prototype.toString.call(cb0)==='[object Array]')?this.window[cb0[0]][cb0[1]]:cb0;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm2;i++){arr=arguments[i];for(k in arr){if(cb0(arr[k],arr1[k1])===0&&cb(k,k1)===0){if(i===arguments.length-3){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_unique(inputArr){var key='',tmp_arr2={},val='';var __array_search=function(needle,haystack){var fkey='';for(fkey in haystack){if(haystack.hasOwnProperty(fkey)){if((haystack[fkey]+'')===(needle+'')){return fkey;}}}
return false;};for(key in inputArr){if(inputArr.hasOwnProperty(key)){val=inputArr[key];if(false===__array_search(val,tmp_arr2)){tmp_arr2[key]=val;}}}
return tmp_arr2;}
function array_unshift(array){var i=arguments.length;while(--i!==0){arguments[0].unshift(arguments[i]);}
return arguments[0].length;}
function array_values(input){var tmp_arr=[],key='';if(input&&typeof input==='object'&&input.change_key_case){return input.values();}
for(key in input){tmp_arr[tmp_arr.length]=input[key];}
return tmp_arr;}
function array_walk(array,funcname,userdata){var key;if(typeof array!=='object'||array===null){return false;}
for(key in array){if(typeof(userdata)!=='undefined'){eval(funcname+'( array [key] , key , userdata  )');}else{eval(funcname+'(  userdata ) ');}}
return true;}
function array_walk_recursive(array,funcname,userdata){var key;if(typeof array!='object'){return false;}
for(key in array){if(typeof array[key]=='object'){return this.array_walk_recursive(array[key],funcname,userdata);}
if(typeof(userdata)!='undefined'){eval(funcname+'( array [key] , key , userdata  )');}else{eval(funcname+'(  userdata ) ');}}
return true;}
function arsort(inputArr,sort_flags){var valArr=[],valArrLen=0,k,i,ret,sorter,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(b,a){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return sorter(a[1],b[1]);});for(i=0,valArrLen=valArr.length;i<valArrLen;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function asin(arg){return Math.asin(arg);}
function asinh(arg){return Math.log(arg+Math.sqrt(arg*arg+1));}
function asort(inputArr,sort_flags){var valArr=[],valArrLen=0,k,i,ret,sorter,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(a,b){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return sorter(a[1],b[1]);});for(i=0,valArrLen=valArr.length;i<valArrLen;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function assert(assertion){var result=false,callback,retVal,err=undefined;this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};this.php_js.assert_values=this.php_js.assert_values||{};var getOption=function(value){if(this.php_js.assert_values[value]){return this.php_js.assert_values[value];}
if(this.php_js.ini[value]){return this.php_js.ini[value].local_value;}
switch(value){case'assert.active':return 1;case'assert.warning':throw'We have not yet implemented warnings in JavaScript (assert())';case'assert.bail':return 0;case'assert.quiet_eval':return 0;case'assert.callback':return null;default:throw'There was some problem';}};if(!getOption('assert.active')){return false;}
try{result=typeof assertion==='string'?eval(assertion):assertion;}catch(e){if(!getOption('assert.quiet_eval')){throw e;}
err=e;result=false;}
retVal=result!==false;if(retVal===false){if(getOption('assert.bail')){throw'Assertion bailed';}
callback=getOption('assert.callback');if(typeof callback==='string'){callback=this.window[callback];}
callback(this.window.location.href,err&&err.lineNumber,(typeof assertion==='string'?assertion:''));}
return retVal;}
function assert_options(what,value){this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};this.php_js.assert_values=this.php_js.assert_values||{};var ini,dflt;switch(what){case'ASSERT_ACTIVE':ini='assert.active';dflt=1;break;case'ASSERT_WARNING':ini='assert.warning';dflt=1;throw'We have not yet implemented warnings for us to throw in JavaScript (assert_options())';case'ASSERT_BAIL':ini='assert.bail';dflt=0;break;case'ASSERT_QUIET_EVAL':ini='assert.quiet_eval';dflt=0;break;case'ASSERT_CALLBACK':ini='assert.callback';dflt=null;break;default:throw'Improper type for assert_options()';}
var originalValue=this.php_js.assert_values[ini]||(this.php_js.ini[ini]&&this.php_js.ini[ini].local_value)||dflt;if(value){this.php_js.assert_values[ini]=value;}
return originalValue;}
function atan(arg){return Math.atan(arg);}
function atan2(y,x){return Math.atan2(y,x);}
function atanh(arg){return 0.5*Math.log((1+arg)/(1-arg));}
function base64_decode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,dec="",tmp_arr=[];if(!data){return data;}
data+='';do{h1=b64.indexOf(data.charAt(i++));h2=b64.indexOf(data.charAt(i++));h3=b64.indexOf(data.charAt(i++));h4=b64.indexOf(data.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;o1=bits>>16&0xff;o2=bits>>8&0xff;o3=bits&0xff;if(h3==64){tmp_arr[ac++]=String.fromCharCode(o1);}else if(h4==64){tmp_arr[ac++]=String.fromCharCode(o1,o2);}else{tmp_arr[ac++]=String.fromCharCode(o1,o2,o3);}}while(i<data.length);dec=tmp_arr.join('');dec=this.utf8_decode(dec);return dec;}
function base64_encode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc="",tmp_arr=[];if(!data){return data;}
data=this.utf8_encode(data+'');do{o1=data.charCodeAt(i++);o2=data.charCodeAt(i++);o3=data.charCodeAt(i++);bits=o1<<16|o2<<8|o3;h1=bits>>18&0x3f;h2=bits>>12&0x3f;h3=bits>>6&0x3f;h4=bits&0x3f;tmp_arr[ac++]=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4);}while(i<data.length);enc=tmp_arr.join('');var r=data.length%3;return(r?enc.slice(0,r-3):enc)+'==='.slice(r||3);}
function base_convert(number,frombase,tobase){return parseInt(number+'',frombase|0).toString(tobase|0);}
function basename(path,suffix){var b=path.replace(/^.*[\/\\]/g,'');if(typeof(suffix)=='string'&&b.substr(b.length-suffix.length)==suffix){b=b.substr(0,b.length-suffix.length);}
return b;}
function bcadd(left_operand,right_operand,scale){var libbcmath=this._phpjs_shared_bc();var first,second,result;if(typeof(scale)=='undefined'){scale=libbcmath.scale;}
scale=((scale<0)?0:scale);first=libbcmath.bc_init_num();second=libbcmath.bc_init_num();result=libbcmath.bc_init_num();first=libbcmath.php_str2num(left_operand.toString());second=libbcmath.php_str2num(right_operand.toString());result=libbcmath.bc_add(first,second,scale);if(result.n_scale>scale){result.n_scale=scale;}
return result.toString();}
function bccomp(left_operand,right_operand,scale){var libbcmath=this._phpjs_shared_bc();var first,second;if(typeof(scale)=='undefined'){scale=libbcmath.scale;}
scale=((scale<0)?0:scale);first=libbcmath.bc_init_num();second=libbcmath.bc_init_num();first=libbcmath.bc_str2num(left_operand.toString(),scale);second=libbcmath.bc_str2num(right_operand.toString(),scale);return libbcmath.bc_compare(first,second,scale);}
function bcdiv(left_operand,right_operand,scale){var libbcmath=this._phpjs_shared_bc();var first,second,result;if(typeof(scale)=='undefined'){scale=libbcmath.scale;}
scale=((scale<0)?0:scale);first=libbcmath.bc_init_num();second=libbcmath.bc_init_num();result=libbcmath.bc_init_num();first=libbcmath.php_str2num(left_operand.toString());second=libbcmath.php_str2num(right_operand.toString());result=libbcmath.bc_divide(first,second,scale);if(result===-1){throw new Error(11,"(BC) Division by zero");}
if(result.n_scale>scale){result.n_scale=scale;}
return result.toString();}
function bcmul(left_operand,right_operand,scale){var libbcmath=this._phpjs_shared_bc();var first,second,result;if(typeof(scale)=='undefined'){scale=libbcmath.scale;}
scale=((scale<0)?0:scale);first=libbcmath.bc_init_num();second=libbcmath.bc_init_num();result=libbcmath.bc_init_num();first=libbcmath.php_str2num(left_operand.toString());second=libbcmath.php_str2num(right_operand.toString());result=libbcmath.bc_multiply(first,second,scale);if(result.n_scale>scale){result.n_scale=scale;}
return result.toString();}
function bcround(val,precision){var libbcmath=this._phpjs_shared_bc();var temp,result,digit;var right_operand;temp=libbcmath.bc_init_num();temp=libbcmath.php_str2num(val.toString());if(precision>=temp.n_scale){while(temp.n_scale<precision){temp.n_value[temp.n_len+temp.n_scale]=0;temp.n_scale++;}
return temp.toString();}
digit=temp.n_value[temp.n_len+precision];right_operand=libbcmath.bc_init_num();right_operand=libbcmath.bc_new_num(1,precision);if(digit>=5){right_operand.n_value[right_operand.n_len+right_operand.n_scale-1]=1;if(temp.n_sign==libbcmath.MINUS){right_operand.n_sign=libbcmath.MINUS;}
result=libbcmath.bc_add(temp,right_operand,precision);}else{result=temp;}
if(result.n_scale>precision){result.n_scale=precision;}
return result.toString();}
function bcscale(scale){var libbcmath=this._phpjs_shared_bc();scale=parseInt(scale,10);if(isNaN(scale)){return false;}
if(scale<0){return false;}
libbcmath.scale=scale;return true;}
function bcsub(left_operand,right_operand,scale){var libbcmath=this._phpjs_shared_bc();var first,second,result;if(typeof(scale)=='undefined'){scale=libbcmath.scale;}
scale=((scale<0)?0:scale);first=libbcmath.bc_init_num();second=libbcmath.bc_init_num();result=libbcmath.bc_init_num();first=libbcmath.php_str2num(left_operand.toString());second=libbcmath.php_str2num(right_operand.toString());result=libbcmath.bc_sub(first,second,scale);if(result.n_scale>scale){result.n_scale=scale;}
return result.toString();}
function bin2hex(s){var i,f=0,a=[];s+='';f=s.length;for(i=0;i<f;i++){a[i]=s.charCodeAt(i).toString(16).replace(/^([\da-f])$/,"0$1");}
return a.join('');}
function bindec(binary_string){binary_string=(binary_string+'').replace(/[^01]/gi,'');return parseInt(binary_string,2);}
function call_user_func(cb){var func;if(typeof cb==='string'){func=(typeof this[cb]==='function')?this[cb]:func=(new Function(null,'return '+cb))();}
else if(Object.prototype.toString.call(cb)==='[object Array]'){func=(typeof cb[0]=='string')?eval(cb[0]+"['"+cb[1]+"']"):func=cb[0][cb[1]];}
else if(typeof cb==='function'){func=cb;}
if(typeof func!='function'){throw new Error(func+' is not a valid function');}
var parameters=Array.prototype.slice.call(arguments,1);return(typeof cb[0]==='string')?func.apply(eval(cb[0]),parameters):(typeof cb[0]!=='object')?func.apply(null,parameters):func.apply(cb[0],parameters);}
function call_user_func_array(cb,parameters){var func;if(typeof cb==='string'){func=(typeof this[cb]==='function')?this[cb]:func=(new Function(null,'return '+cb))();}
else if(Object.prototype.toString.call(cb)==='[object Array]'){func=(typeof cb[0]=='string')?eval(cb[0]+"['"+cb[1]+"']"):func=cb[0][cb[1]];}
else if(typeof cb==='function'){func=cb;}
if(typeof func!=='function'){throw new Error(func+' is not a valid function');}
return(typeof cb[0]==='string')?func.apply(eval(cb[0]),parameters):(typeof cb[0]!=='object')?func.apply(null,parameters):func.apply(cb[0],parameters);}
function ceil(value){return Math.ceil(value);}
function checkdate(m,d,y){return m>0&&m<13&&y>0&&y<32768&&d>0&&d<=(new Date(y,m,0)).getDate();}
function chop(str,charlist){return this.rtrim(str,charlist);}
function chr(codePt){if(codePt>0xFFFF){codePt-=0x10000;return String.fromCharCode(0xD800+(codePt>>10),0xDC00+(codePt&0x3FF));}
return String.fromCharCode(codePt);}
function chunk_split(body,chunklen,end){chunklen=parseInt(chunklen,10)||76;end=end||'\r\n';if(chunklen<1){return false;}
return body.match(new RegExp(".{0,"+chunklen+"}","g")).join(end);}
function class_alias(clss,alias,autoload){var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};if(autoload&&typeof this.window.__autoload==='function'){this.window.__autoload(clss);}
if(typeof clss==='string'){clss=this.window[clss];}
if(typeof clss==='undefined'){throw"Class '"+getFuncName(clss)+"' not found";return false;}
if(typeof clss!=='function'){throw'First argument of class_alias() must be a name of user defined class';return false;}
if(typeof this.window[alias]==='function'){throw'Cannot redeclare class '+alias;return false;}
this.window[alias]=clss;return true;}
function class_exists(cls){var i='';cls=this.window[cls];if(typeof cls!=='function'){return false;}
for(i in cls.prototype){return true;}
for(i in cls){if(i!=='prototype'){return true;}}
if(cls.toSource&&cls.toSource().match(/this\./)){return true;}
return false;}
function classkit_import(file){eval(this.file_get_contents(file));}
function classkit_method_add(classname,methodname,args,code,flags){var func,argmnts=[];switch(flags){case'CLASSKIT_ACC_PROTECTED':throw'Protected not supported';case'CLASSKIT_ACC_PRIVATE':throw'Private not supported';case'CLASSKIT_ACC_PUBLIC':default:break;}
argmnts=args.split(/,\s*/);if(typeof classname==='string'){classname=this.window[classname];}
func=Function.apply(null,argmnts.concat(code));classname.prototype[methodname]=func;return true;}
function classkit_method_copy(dClass,dMethod,sClass,sMethod){sMethod=sMethod||dMethod;if(typeof dClass==='string'){dClass=this.window[dClass];}
if(typeof sClass==='string'){sClass=this.window[sClass];}
dClass.prototype[dMethod]=sClass.prototype[sMethod];return true;}
function classkit_method_redefine(classname,methodname,args,code,flags){var argmnts=[],func;switch(flags){case'CLASSKIT_ACC_PROTECTED':throw'Protected not supported';case'CLASSKIT_ACC_PRIVATE':throw'Private not supported';case'CLASSKIT_ACC_PUBLIC':default:break;}
argmnts=args.split(/,\s*/);if(typeof classname==='string'){classname=this.window[classname];}
func=Function.apply(null,argmnts.concat(code));classname.prototype[methodname]=func;return true;}
function classkit_method_remove(classname,methodname){if(typeof classname==='string'){classname=this.window[classname];}
delete classname.prototype[methodname];return true;}
function classkit_method_rename(classname,methodname,newname){if(typeof classname==='string'){classname=this.window[classname];}
var method=classname.prototype[methodname];classname.prototype[newname]=method;delete classname.prototype[methodname];return true;}
function compact(){var matrix={},that=this;var process=function(value){var i=0,l=value.length,key_value='';for(i=0;i<l;i++){key_value=value[i];if(Object.prototype.toString.call(key_value)==='[object Array]'){process(key_value);}else{if(typeof that.window[key_value]!=='undefined'){matrix[key_value]=that.window[key_value];}}}
return true;};process(arguments);return matrix;}
function constant(name){var clssPos=0,clssCnst=null;if((clssPos=name.indexOf('::'))!==-1){clssCnst=name.slice(clssPos+2);name=name.slice(0,clssPos);}
if(this.window[name]===undefined){return null;}
if(clssCnst){return this.window[name][clssCnst];}
return this.window[name];}
function convert_cyr_string(str,from,to){var _cyr_win1251=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,154,174,190,46,159,189,46,46,179,191,180,157,46,46,156,183,46,46,182,166,173,46,46,158,163,152,164,155,46,46,46,167,225,226,247,231,228,229,246,250,233,234,235,236,237,238,239,240,242,243,244,245,230,232,227,254,251,253,255,249,248,252,224,241,193,194,215,199,196,197,214,218,201,202,203,204,205,206,207,208,210,211,212,213,198,200,195,222,219,221,223,217,216,220,192,209,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,184,186,32,179,191,32,32,32,32,32,180,162,32,32,32,32,168,170,32,178,175,32,32,32,32,32,165,161,169,254,224,225,246,228,229,244,227,245,232,233,234,235,236,237,238,239,255,240,241,242,243,230,226,252,251,231,248,253,249,247,250,222,192,193,214,196,197,212,195,213,200,201,202,203,204,205,206,207,223,208,209,210,211,198,194,220,219,199,216,221,217,215,218],_cyr_cp866=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,225,226,247,231,228,229,246,250,233,234,235,236,237,238,239,240,242,243,244,245,230,232,227,254,251,253,255,249,248,252,224,241,193,194,215,199,196,197,214,218,201,202,203,204,205,206,207,208,35,35,35,124,124,124,124,43,43,124,124,43,43,43,43,43,43,45,45,124,45,43,124,124,43,43,45,45,124,45,43,45,45,45,45,43,43,43,43,43,43,43,43,35,35,124,124,35,210,211,212,213,198,200,195,222,219,221,223,217,216,220,192,209,179,163,180,164,183,167,190,174,32,149,158,32,152,159,148,154,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,205,186,213,241,243,201,32,245,187,212,211,200,190,32,247,198,199,204,181,240,242,185,32,244,203,207,208,202,216,32,246,32,238,160,161,230,164,165,228,163,229,168,169,170,171,172,173,174,175,239,224,225,226,227,166,162,236,235,167,232,237,233,231,234,158,128,129,150,132,133,148,131,149,136,137,138,139,140,141,142,143,159,144,145,146,147,134,130,156,155,135,152,157,153,151,154],_cyr_iso88595=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,179,32,32,32,32,32,32,32,32,32,32,32,32,32,32,225,226,247,231,228,229,246,250,233,234,235,236,237,238,239,240,242,243,244,245,230,232,227,254,251,253,255,249,248,252,224,241,193,194,215,199,196,197,214,218,201,202,203,204,205,206,207,208,210,211,212,213,198,200,195,222,219,221,223,217,216,220,192,209,32,163,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,241,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,161,32,32,32,32,32,32,32,32,32,32,32,32,238,208,209,230,212,213,228,211,229,216,217,218,219,220,221,222,223,239,224,225,226,227,214,210,236,235,215,232,237,233,231,234,206,176,177,198,180,181,196,179,197,184,185,186,187,188,189,190,191,207,192,193,194,195,182,178,204,203,183,200,205,201,199,202],_cyr_mac=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,225,226,247,231,228,229,246,250,233,234,235,236,237,238,239,240,242,243,244,245,230,232,227,254,251,253,255,249,248,252,224,241,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,179,163,209,193,194,215,199,196,197,214,218,201,202,203,204,205,206,207,208,210,211,212,213,198,200,195,222,219,221,223,217,216,220,192,255,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,160,161,162,222,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,221,180,181,182,183,184,185,186,187,188,189,190,191,254,224,225,246,228,229,244,227,245,232,233,234,235,236,237,238,239,223,240,241,242,243,230,226,252,251,231,248,253,249,247,250,158,128,129,150,132,133,148,131,149,136,137,138,139,140,141,142,143,159,144,145,146,147,134,130,156,155,135,152,157,153,151,154];var from_table=null,to_table=null,tmp,i=0,retStr='';switch(from.toUpperCase()){case'W':from_table=_cyr_win1251;break;case'A':case'D':from_table=_cyr_cp866;break;case'I':from_table=_cyr_iso88595;break;case'M':from_table=_cyr_mac;break;case'K':break;default:throw'Unknown source charset: '+from;}
switch(to.toUpperCase()){case'W':to_table=_cyr_win1251;break;case'A':case'D':to_table=_cyr_cp866;break;case'I':to_table=_cyr_iso88595;break;case'M':to_table=_cyr_mac;break;case'K':break;default:throw'Unknown destination charset: '+to;}
if(!str){return str;}
for(i=0;i<str.length;i++){tmp=(from_table===null)?str.charAt(i):String.fromCharCode(from_table[str.charAt(i).charCodeAt(0)]);retStr+=(to_table===null)?tmp:String.fromCharCode(to_table[tmp.charCodeAt(0)+256]);}
return retStr;}
function convert_uuencode(str){var chr=function(c){return String.fromCharCode(c);};if(!str||str==""){return chr(0);}else if(!this.is_scalar(str)){return false;}
var c=0,u=0,i=0,a=0;var encoded="",tmp1="",tmp2="",bytes={};var chunk=function(){bytes=str.substr(u,45);for(i in bytes){bytes[i]=bytes[i].charCodeAt(0);}
if(bytes.length!=0){return bytes.length;}else{return 0;}};while(chunk()!==0){c=chunk();u+=45;encoded+=chr(c+32);for(i in bytes){tmp1=bytes[i].charCodeAt(0).toString(2);while(tmp1.length<8){tmp1="0"+tmp1;}
tmp2+=tmp1;}
while(tmp2.length%6){tmp2=tmp2+"0";}
for(i=0;i<=(tmp2.length/6)-1;i++){tmp1=tmp2.substr(a,6);if(tmp1=="000000"){encoded+=chr(96);}else{encoded+=chr(parseInt(tmp1,2)+32);}
a+=6;}
a=0;tmp2="";encoded+="\n";}
encoded+=chr(96)+"\n";return encoded;}
function cos(arg){return Math.cos(arg);}
function cosh(arg){return(Math.exp(arg)+Math.exp(-arg))/2;}
function count(mixed_var,mode){var key,cnt=0;if(mixed_var===null||typeof mixed_var==='undefined'){return 0;}else if(mixed_var.constructor!==Array&&mixed_var.constructor!==Object){return 1;}
if(mode==='COUNT_RECURSIVE'){mode=1;}
if(mode!=1){mode=0;}
for(key in mixed_var){if(mixed_var.hasOwnProperty(key)){cnt++;if(mode==1&&mixed_var[key]&&(mixed_var[key].constructor===Array||mixed_var[key].constructor===Object)){cnt+=this.count(mixed_var[key],1);}}}
return cnt;}
function count_chars(str,mode){var result={},resultArr=[],i;str=(''+str).split('').sort().join('').match(/(.)\1*/g);if((mode&1)==0){for(i=0;i!=256;i++){result[i]=0;}}
if(mode===2||mode===4){for(i=0;i!=str.length;i+=1){delete result[str[i].charCodeAt(0)];}
for(i in result){result[i]=(mode===4)?String.fromCharCode(i):0;}}else if(mode===3){for(i=0;i!=str.length;i+=1){result[i]=str[i].slice(0,1);}}else{for(i=0;i!=str.length;i+=1){result[str[i].charCodeAt(0)]=str[i].length;}}
if(mode<3){return result;}
for(i in result){resultArr.push(result[i]);}
return resultArr.join('');}
function crc32(str){str=this.utf8_encode(str);var table="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";var crc=0;var x=0;var y=0;crc=crc^(-1);for(var i=0,iTop=str.length;i<iTop;i++){y=(crc^str.charCodeAt(i))&0xFF;x="0x"+table.substr(y*9,8);crc=(crc>>>8)^x;}
return crc^(-1);}
function create_function(args,code){try{return Function.apply(null,args.split(',').concat(code));}catch(e){return false;}}
function ctype_alnum(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.an)!==-1;}
function ctype_alpha(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.al)!==-1;}
function ctype_cntrl(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.ct)!==-1;}
function ctype_digit(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.dg)!==-1;}
function ctype_graph(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.gr)!==-1;}
function ctype_lower(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.lw)!==-1;}
function ctype_print(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.pr)!==-1;}
function ctype_punct(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.pu)!==-1;}
function ctype_space(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.sp)!==-1;}
function ctype_upper(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.up)!==-1;}
function ctype_xdigit(text){if(typeof text!=='string'){return false;}
this.setlocale('LC_ALL',0);return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.xd)!==-1;}
function current(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);var cursor=pointers[arrpos+1];if(Object.prototype.toString.call(arr)==='[object Array]'){return arr[cursor]||false;}
var ct=0;for(var k in arr){if(ct===cursor){return arr[k];}
ct++;}
return false;}
function date(format,timestamp){var that=this,jsdate,f,formatChr=/\\?([a-z])/gi,formatChrCb,_pad=function(n,c){if((n=n+'').length<c){return new Array((++c)-n.length).join('0')+n;}
return n;},txt_words=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"];formatChrCb=function(t,s){return f[t]?f[t]():s;};f={d:function(){return _pad(f.j(),2);},D:function(){return f.l().slice(0,3);},j:function(){return jsdate.getDate();},l:function(){return txt_words[f.w()]+'day';},N:function(){return f.w()||7;},S:function(){var j=f.j();return j>4&&j<21?'th':{1:'st',2:'nd',3:'rd'}[j%10]||'th';},w:function(){return jsdate.getDay();},z:function(){var a=new Date(f.Y(),f.n()-1,f.j()),b=new Date(f.Y(),0,1);return Math.round((a-b)/864e5)+1;},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3),b=new Date(a.getFullYear(),0,4);return _pad(1+Math.round((a-b)/864e5/7),2);},F:function(){return txt_words[6+f.n()];},m:function(){return _pad(f.n(),2);},M:function(){return f.F().slice(0,3);},n:function(){return jsdate.getMonth()+1;},t:function(){return(new Date(f.Y(),f.n(),0)).getDate();},L:function(){return new Date(f.Y(),1,29).getMonth()===1|0;},o:function(){var n=f.n(),W=f.W(),Y=f.Y();return Y+(n===12&&W<9?-1:n===1&&W>9);},Y:function(){return jsdate.getFullYear();},y:function(){return(f.Y()+"").slice(-2);},a:function(){return jsdate.getHours()>11?"pm":"am";},A:function(){return f.a().toUpperCase();},B:function(){var H=jsdate.getUTCHours()*36e2,i=jsdate.getUTCMinutes()*60,s=jsdate.getUTCSeconds();return _pad(Math.floor((H+i+s+36e2)/86.4)%1e3,3);},g:function(){return f.G()%12||12;},G:function(){return jsdate.getHours();},h:function(){return _pad(f.g(),2);},H:function(){return _pad(f.G(),2);},i:function(){return _pad(jsdate.getMinutes(),2);},s:function(){return _pad(jsdate.getSeconds(),2);},u:function(){return _pad(jsdate.getMilliseconds()*1000,6);},e:function(){throw'Not supported (see source code of date() for timezone on how to add support)';},I:function(){var a=new Date(f.Y(),0),c=Date.UTC(f.Y(),0),b=new Date(f.Y(),6),d=Date.UTC(f.Y(),6);return 0+((a-c)!==(b-d));},O:function(){var tzo=jsdate.getTimezoneOffset(),a=Math.abs(tzo);return(tzo>0?"-":"+")+_pad(Math.floor(a/60)*100+a%60,4);},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2));},T:function(){return'UTC';},Z:function(){return-jsdate.getTimezoneOffset()*60;},c:function(){return'Y-m-d\\Th:i:sP'.replace(formatChr,formatChrCb);},r:function(){return'D, d M Y H:i:s O'.replace(formatChr,formatChrCb);},U:function(){return jsdate.getTime()/1000|0;}};this.date=function(format,timestamp){that=this;jsdate=((typeof timestamp==='undefined')?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000));return format.replace(formatChr,formatChrCb);};return this.date(format,timestamp);}
function date_default_timezone_get(){var tal={},abbr='',i=0,curr_offset=-(new Date()).getTimezoneOffset()*60;if(this.php_js){if(this.php_js.default_timezone){return this.php_js.default_timezone;}
if(this.php_js.ENV&&this.php_js.ENV.TZ){return this.php_js.ENV.TZ;}
if(this.php_js.ini&&this.php_js.ini['date.timezone']){return this.php_js.ini['date.timezone'].local_value?this.php_js.ini['date.timezone'].local_value:this.php_js.ini['date.timezone'].global_value;}}
tal=this.timezone_abbreviations_list();for(abbr in tal){for(i=0;i<tal[abbr].length;i++){if(tal[abbr][i].offset===curr_offset){return tal[abbr][i].timezone_id;}}}
return'UTC';}
function date_default_timezone_set(tz){var tal={},abbr='',i=0;this.php_js=this.php_js||{};tal=this.timezone_abbreviations_list();for(abbr in tal){for(i=0;i<tal[abbr].length;i++){if(tal[abbr][i].timezone_id===tz){this.php_js.default_timezone=tz;return true;}}}
return false;}
function date_parse(date){this.php_js=this.php_js||{};var warningsOffset=this.php_js.warnings?this.php_js.warnings.length:null;var errorsOffset=this.php_js.errors?this.php_js.errors.length:null;try{var ts=this.strtotime(date);}finally{if(!ts){return false;}}
var dt=new Date(ts*1000);var retObj={warning_count:warningsOffset!==null?this.php_js.warnings.slice(warningsOffset).length:0,warnings:warningsOffset!==null?this.php_js.warnings.slice(warningsOffset):[],error_count:errorsOffset!==null?this.php_js.errors.slice(errorsOffset).length:0,errors:errorsOffset!==null?this.php_js.errors.slice(errorsOffset):[]};retObj.year=dt.getFullYear();retObj.month=dt.getMonth()+1;retObj.day=dt.getDate();retObj.hour=dt.getHours();retObj.minute=dt.getMinutes();retObj.second=dt.getSeconds();retObj.fraction=parseFloat('0.'+dt.getMilliseconds());retObj.is_localtime=dt.getTimezoneOffset!==0;return retObj;}
function deaggregate(obj,class_name){var p='',idx=-1,pos=-1,i=0,indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;},getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};if(!this.php_js||!this.php_js.aggregateRecords||!this.php_js.aggregateKeys||!this.php_js.aggregateClasses){return;}
if(!this.php_js.aggregateKeys.indexOf){this.php_js.aggregateKeys.indexOf=indexOf;}
idx=this.php_js.aggregateKeys.indexOf(obj);if(idx===-1){return;}
if(class_name){if(typeof class_name==='string'){class_name=this.window[class_name];}
if(!this.php_js.aggregateClasses[idx].indexOf){this.php_js.aggregateClasses[idx].indexOf=indexOf;}
pos=this.php_js.aggregateClasses[idx].indexOf(getFuncName(class_name));if(pos!==-1){for(p in this.php_js.aggregateRecords[idx][pos]){delete obj[p];}
this.php_js.aggregateClasses[idx].splice(pos,1);this.php_js.aggregateRecords[idx].splice(pos,1);}}else{for(i=0;i<this.php_js.aggregateClasses[idx].length;i++){for(p in this.php_js.aggregateRecords[idx][i]){delete obj[p];}}
this.php_js.aggregateClasses.splice(idx,1);this.php_js.aggregateRecords.splice(idx,1);}}
function decbin(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(2);}
function dechex(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(16);}
function decoct(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(8);}
function define(name,value){var defn,replace,script,that=this,d=this.window.document;var toString=function(name,value){return'const '+name+'='+(/^(null|true|false|(\+|\-)?\d+(\.\d+)?)$/.test(value=String(value))?value:'"'+replace(value)+'"');};try{eval('const e=1');replace=function(value){var replace={"\x08":"b","\x0A":"\\n","\x0B":"v","\x0C":"f","\x0D":"\\r",'"':'"',"\\":"\\"};return value.replace(/\x08|[\x0A-\x0D]|"|\\/g,function(value){return"\\"+replace[value];});};defn=function(name,value){if(d.createElementNS){script=d.createElementNS('http://www.w3.org/1999/xhtml','script');}else{script=d.createElement('script');}
script.type='text/javascript';script.appendChild(d.createTextNode(toString(name,value)));d.documentElement.appendChild(script);d.documentElement.removeChild(script);};}catch(e){replace=function(value){var replace={"\x0A":"\\n","\x0D":"\\r"};return value.replace(/"/g,'""').replace(/\n|\r/g,function(value){return replace[value];});};defn=(this.execScript?function(name,value){that.execScript(toString(name,value),'VBScript');}:function(name,value){eval(toString(name,value).substring(6));});}
defn(name,value);}
function defined(constant_name){var tmp=this.window[constant_name];this.window[constant_name]=this.window[constant_name]?'changed'+this.window[constant_name].toString():'changed';var returnval=this.window[constant_name]===tmp;if(!returnval){this.window[constant_name]=tmp;}
return returnval;}
function deg2rad(angle){return(angle/180)*Math.PI;}
function dirname(path){return path.replace(/\\/g,'/').replace(/\/[^\/]*\/?$/,'');}
function doubleval(mixed_var){return this.floatval(mixed_var);}
function each(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);var cursor=pointers[arrpos+1];var pos=0;if(Object.prototype.toString.call(arr)!=='[object Array]'){var ct=0;for(var k in arr){if(ct===cursor){pointers[arrpos+1]+=1;if(each.returnArrayOnly){return[k,arr[k]];}else{return{1:arr[k],value:arr[k],0:k,key:k};}}
ct++;}
return false;}
if(arr.length===0||cursor===arr.length){return false;}
pos=cursor;pointers[arrpos+1]+=1;if(each.returnArrayOnly){return[pos,arr[pos]];}else{return{1:arr[pos],value:arr[pos],0:pos,key:pos};}}
function echo(){var arg='',argc=arguments.length,argv=arguments,i=0,holder,win=this.window,d=win.document,ns_xhtml='http://www.w3.org/1999/xhtml',ns_xul='http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';var stringToDOM=function(str,parent,ns,container){var extraNSs='';if(ns===ns_xul){extraNSs=' xmlns:html="'+ns_xhtml+'"';}
var stringContainer='<'+container+' xmlns="'+ns+'"'+extraNSs+'>'+str+'</'+container+'>';var dils=win.DOMImplementationLS,dp=win.DOMParser,ax=win.ActiveXObject;if(dils&&dils.createLSInput&&dils.createLSParser){var lsInput=dils.createLSInput();lsInput.stringData=stringContainer;var lsParser=dils.createLSParser(1,null);return lsParser.parse(lsInput).firstChild;}else if(dp){try{var fc=new dp().parseFromString(stringContainer,'text/xml');if(fc&&fc.documentElement&&fc.documentElement.localName!=='parsererror'&&fc.documentElement.namespaceURI!=='http://www.mozilla.org/newlayout/xml/parsererror.xml'){return fc.documentElement.firstChild;}}catch(e){}}else if(ax){var axo=new ax('MSXML2.DOMDocument');axo.loadXML(str);return axo.documentElement;}
if(d.createElementNS&&(d.documentElement.namespaceURI||d.documentElement.nodeName.toLowerCase()!=='html'||(d.contentType&&d.contentType!=='text/html'))){holder=d.createElementNS(ns,container);}else{holder=d.createElement(container);}
holder.innerHTML=str;while(holder.firstChild){parent.appendChild(holder.firstChild);}
return false;};var ieFix=function(node){if(node.nodeType===1){var newNode=d.createElement(node.nodeName);var i,len;if(node.attributes&&node.attributes.length>0){for(i=0,len=node.attributes.length;i<len;i++){newNode.setAttribute(node.attributes[i].nodeName,node.getAttribute(node.attributes[i].nodeName));}}
if(node.childNodes&&node.childNodes.length>0){for(i=0,len=node.childNodes.length;i<len;i++){newNode.appendChild(ieFix(node.childNodes[i]));}}
return newNode;}else{return d.createTextNode(node.nodeValue);}};var replacer=function(s,m1,m2){if(m1!=='\\'){return m1+eval(m2);}else{return s;}};this.php_js=this.php_js||{};var phpjs=this.php_js,ini=phpjs.ini,obs=phpjs.obs;for(i=0;i<argc;i++){arg=argv[i];if(ini&&ini['phpjs.echo_embedded_vars']){arg=arg.replace(/(.?)\{?\$(\w*?\}|\w*)/g,replacer);}
if(!phpjs.flushing&&obs&&obs.length){obs[obs.length-1].buffer+=arg;continue;}
if(d.appendChild){if(d.body){if(win.navigator.appName==='Microsoft Internet Explorer'){d.body.appendChild(stringToDOM(ieFix(arg)));}else{var unappendedLeft=stringToDOM(arg,d.body,ns_xhtml,'div').cloneNode(true);if(unappendedLeft){d.body.appendChild(unappendedLeft);}}}else{d.documentElement.appendChild(stringToDOM(arg,d.documentElement,ns_xul,'description'));}}else if(d.write){d.write(arg);}}}
function empty(mixed_var){var key;if(mixed_var===""||mixed_var===0||mixed_var==="0"||mixed_var===null||mixed_var===false||typeof mixed_var==='undefined'){return true;}
if(typeof mixed_var=='object'){for(key in mixed_var){return false;}
return true;}
return false;}
function end(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);if(Object.prototype.toString.call(arr)!=='[object Array]'){var ct=0;for(var k in arr){ct++;var val=arr[k];}
if(ct===0){return false;}
pointers[arrpos+1]=ct-1;return val;}
if(arr.length===0){return false;}
pointers[arrpos+1]=arr.length-1;return arr[pointers[arrpos+1]];}
function error_get_last(){return this.php_js&&this.php_js.last_error?this.php_js.last_error:null;}
function error_reporting(level){return this.ini_set('error_reporting',level);}
function escapeshellarg(arg){var ret='';ret=arg.replace(/[^\\]'/g,function(m,i,s){return m.slice(0,1)+'\\\'';});return"'"+ret+"'";}
function exp(arg){return Math.exp(arg);}
function explode(delimiter,string,limit){var emptyArray={0:''};if(arguments.length<2||typeof arguments[0]=='undefined'||typeof arguments[1]=='undefined'){return null;}
if(delimiter===''||delimiter===false||delimiter===null){return false;}
if(typeof delimiter=='function'||typeof delimiter=='object'||typeof string=='function'||typeof string=='object'){return emptyArray;}
if(delimiter===true){delimiter='1';}
if(!limit){return string.toString().split(delimiter.toString());}
var splitted=string.toString().split(delimiter.toString());var partA=splitted.splice(0,limit-1);var partB=splitted.join(delimiter.toString());partA.push(partB);return partA;}
function expm1(x){var ret=0,n=50;var factorial=function factorial(n){if((n===0)||(n===1)){return 1;}else{var result=(n*factorial(n-1));return result;}};for(var i=1;i<n;i++){ret+=Math.pow(x,i)/factorial(i);}
return ret;}
function extract(arr,type,prefix){if(Object.prototype.toString.call(arr)==='[object Array]'&&(type!=='EXTR_PREFIX_ALL'&&type!=='EXTR_PREFIX_INVALID')){return 0;}
var targetObj=this.window;if(this.php_js&&this.php_js.ini&&this.php_js.ini['phpjs.extractTargetObj']&&this.php_js.ini['phpjs.extractTargetObj'].local_value){targetObj=this.php_js.ini['phpjs.extractTargetObj'].local_value;}
var chng=0;for(var i in arr){var validIdent=/^[_a-zA-Z$][\w|$]*$/;var prefixed=prefix+'_'+i;try{switch(type){case'EXTR_PREFIX_SAME'||2:if(targetObj[i]!==undefined){if(prefixed.match(validIdent)!==null){targetObj[prefixed]=arr[i];++chng;}}else{targetObj[i]=arr[i];++chng;}
break;case'EXTR_SKIP'||1:if(targetObj[i]===undefined){targetObj[i]=arr[i];++chng;}
break;case'EXTR_PREFIX_ALL'||3:if(prefixed.match(validIdent)!==null){targetObj[prefixed]=arr[i];++chng;}
break;case'EXTR_PREFIX_INVALID'||4:if(i.match(validIdent)!==null){if(prefixed.match(validIdent)!==null){targetObj[prefixed]=arr[i];++chng;}}else{targetObj[i]=arr[i];++chng;}
break;case'EXTR_IF_EXISTS'||6:if(targetObj[i]!==undefined){targetObj[i]=arr[i];++chng;}
break;case'EXTR_PREFIX_IF_EXISTS'||5:if(targetObj[i]!==undefined&&prefixed.match(validIdent)!==null){targetObj[prefixed]=arr[i];++chng;}
break;case'EXTR_REFS'||256:throw'The EXTR_REFS type will not work in JavaScript';case'EXTR_OVERWRITE'||0:default:targetObj[i]=arr[i];++chng;break;}}catch(e){}}
return chng;}
function fclose(handle){if(!handle||handle.opener!=='fopen'){return false;}
try{delete this.php_js.resourceDataPointer[handle.id];delete this.php_js.resourceData[handle.id];}catch(e){return false;}
return true;}
function feof(handle){if(!handle||!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer){return true;}
return!this.php_js.resourceData[handle.id][this.php_js.resourceDataPointer[handle.id]];}
function fgetc(handle){if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer){return false;}
var start=this.php_js.resourceDataPointer[handle.id];if(start===undefined||!this.php_js.resourceData[handle.id][start]){return false;}
var length=1;this.php_js.resourceDataPointer[handle.id]+=length;var chr=this.php_js.resourceData[handle.id].substr(start,length);var nextChr=this.php_js.resourceData[handle.id].substr(start+1,1);var prevChr=start===0?false:this.php_js.resourceData[handle.id].substr(start-1,1);var code=chr.charCodeAt(0);if(0xD800<=code&&code<=0xDBFF){if(!nextChr){throw'High surrogate without following low surrogate (fgetc)';}
var next=nextChr.charCodeAt(0);if(0xDC00>next||next>0xDFFF){throw'High surrogate without following low surrogate (fgetc)';}
this.php_js.resourceDataPointer[handle.id]+=length;return chr+nextChr;}else if(0xDC00<=code&&code<=0xDFFF){if(prevChr===false){throw'Low surrogate without preceding high surrogate (fgetc)';}
var prev=prevChr.charCodeAt(0);if(0xD800>prev||prev>0xDBFF){throw'Low surrogate without preceding high surrogate (fgetc)';}
return prevChr+chr;}
return chr;}
function fgetcsv(handle,length,delimiter,enclosure,escape){var start=0,fullline='';if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer||length!==undefined&&!length){return false;}
start=this.php_js.resourceDataPointer[handle.id];if(start===undefined||!this.php_js.resourceData[handle.id][start]){return false;}
fullline=this.php_js.resourceData[handle.id].slice(start,this.php_js.resourceData[handle.id].indexOf('\n',start)+1);if(fullline===''){fullline=this.php_js.resourceData[handle.id].slice(start);}
length=(length===undefined||fullline.length<length)?fullline.length:Math.floor(length/2)||1;this.php_js.resourceDataPointer[handle.id]+=length;return this.str_getcsv(this.php_js.resourceData[handle.id].substr(start,length),delimiter,enclosure,escape);}
function fgets(handle,length){var start=0,fullline='',endlinePos=-1,content='';if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer||length!==undefined&&!length){return false;}
start=this.php_js.resourceDataPointer[handle.id];if(start===undefined||!this.php_js.resourceData[handle.id][start]){return false;}
content=this.php_js.resourceData[handle.id].slice(start);endlinePos=content.search(/\r\n?|\n/)+start+1;fullline=this.php_js.resourceData[handle.id].slice(start,endlinePos+1);if(fullline===''){fullline=this.php_js.resourceData[handle.id].slice(start);}
length=(length===undefined||fullline.length<length)?fullline.length:Math.floor(length/2)||1;this.php_js.resourceDataPointer[handle.id]+=length;return this.php_js.resourceData[handle.id].substr(start,length);}
function fgetss(handle,length,allowable_tags){var start=0,fullline='';if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer||length!==undefined&&!length){return false;}
start=this.php_js.resourceDataPointer[handle.id];if(start===undefined||!this.php_js.resourceData[handle.id][start]){return false;}
fullline=this.php_js.resourceData[handle.id].slice(start,this.php_js.resourceData[handle.id].indexOf('\n',start)+1);if(fullline===''){fullline=this.php_js.resourceData[handle.id].slice(start);}
length=(length===undefined||fullline.length<length)?fullline.length:Math.floor(length/2)||1;this.php_js.resourceDataPointer[handle.id]+=length-1;return this.strip_tags(this.php_js.resourceData[handle.id].substr(start,length),allowable_tags);}
function file(url){var req=this.window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
req.open("GET",url,false);req.send(null);return req.responseText.split('\n');}
function file_exists(url){var req=this.window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
req.open('HEAD',url,false);req.send(null);if(req.status==200){return true;}
return false;}
function file_get_contents(url,flags,context,offset,maxLen){var tmp,headers=[],newTmp=[],k=0,i=0,href='',pathPos=-1,flagNames=0,content=null,http_stream=false;var func=function(value){return value.substring(1)!=='';};this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};var ini=this.php_js.ini;context=context||this.php_js.default_streams_context||null;if(!flags){flags=0;}
var OPTS={FILE_USE_INCLUDE_PATH:1,FILE_TEXT:32,FILE_BINARY:64};if(typeof flags==='number'){flagNames=flags;}else{flags=[].concat(flags);for(i=0;i<flags.length;i++){if(OPTS[flags[i]]){flagNames=flagNames|OPTS[flags[i]];}}}
if(flagNames&OPTS.FILE_BINARY&&(flagNames&OPTS.FILE_TEXT)){throw'You cannot pass both FILE_BINARY and FILE_TEXT to file_get_contents()';}
if((flagNames&OPTS.FILE_USE_INCLUDE_PATH)&&ini.include_path&&ini.include_path.local_value){var slash=ini.include_path.local_value.indexOf('/')!==-1?'/':'\\';url=ini.include_path.local_value+slash+url;}else if(!/^(https?|file):/.test(url)){href=this.window.location.href;pathPos=url.indexOf('/')===0?href.indexOf('/',8)-1:href.lastIndexOf('/');url=href.slice(0,pathPos+1)+url;}
if(context){var http_options=context.stream_options&&context.stream_options.http;http_stream=!!http_options;}
if(!context||http_stream){var req=this.window.ActiveXObject?new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
var method=http_stream?http_options.method:'GET';var async=!!(context&&context.stream_params&&context.stream_params['phpjs.async']);if(ini['phpjs.ajaxBypassCache']&&ini['phpjs.ajaxBypassCache'].local_value){url+=(url.match(/\?/)==null?"?":"&")+(new Date()).getTime();}
req.open(method,url,async);if(async){var notification=context.stream_params.notification;if(typeof notification==='function'){if(0&&req.addEventListener){}else{req.onreadystatechange=function(aEvt){var objContext={responseText:req.responseText,responseXML:req.responseXML,status:req.status,statusText:req.statusText,readyState:req.readyState,evt:aEvt};var bytes_transferred;switch(req.readyState){case 0:notification.call(objContext,0,0,'',0,0,0);break;case 1:notification.call(objContext,0,0,'',0,0,0);break;case 2:notification.call(objContext,0,0,'',0,0,0);break;case 3:bytes_transferred=req.responseText.length*2;notification.call(objContext,7,0,'',0,bytes_transferred,0);break;case 4:if(req.status>=200&&req.status<400){bytes_transferred=req.responseText.length*2;notification.call(objContext,8,0,'',req.status,bytes_transferred,0);}else if(req.status===403){notification.call(objContext,10,2,'',req.status,0,0);}else{notification.call(objContext,9,2,'',req.status,0,0);}
break;default:throw'Unrecognized ready state for file_get_contents()';}}}}}
if(http_stream){var sendHeaders=http_options.header&&http_options.header.split(/\r?\n/);var userAgentSent=false;for(i=0;i<sendHeaders.length;i++){var sendHeader=sendHeaders[i];var breakPos=sendHeader.search(/:\s*/);var sendHeaderName=sendHeader.substring(0,breakPos);req.setRequestHeader(sendHeaderName,sendHeader.substring(breakPos+1));if(sendHeaderName==='User-Agent'){userAgentSent=true;}}
if(!userAgentSent){var user_agent=http_options.user_agent||(ini.user_agent&&ini.user_agent.local_value);if(user_agent){req.setRequestHeader('User-Agent',user_agent);}}
content=http_options.content||null;}
if(flagNames&OPTS.FILE_TEXT){var content_type='text/html';if(http_options&&http_options['phpjs.override']){content_type=http_options['phpjs.override'];}else{var encoding=(ini['unicode.stream_encoding']&&ini['unicode.stream_encoding'].local_value)||'UTF-8';if(http_options&&http_options.header&&(/^content-type:/im).test(http_options.header)){content_type=http_options.header.match(/^content-type:\s*(.*)$/im)[1];}
if(!(/;\s*charset=/).test(content_type)){content_type+='; charset='+encoding;}}
req.overrideMimeType(content_type);}
else if(flagNames&OPTS.FILE_BINARY){req.overrideMimeType('text/plain; charset=x-user-defined');}
if(http_options&&http_options['phpjs.sendAsBinary']){req.sendAsBinary(content);}else{req.send(content);}
tmp=req.getAllResponseHeaders();if(tmp){tmp=tmp.split('\n');for(k=0;k<tmp.length;k++){if(func(tmp[k])){newTmp.push(tmp[k]);}}
tmp=newTmp;for(i=0;i<tmp.length;i++){headers[i]=tmp[i];}
this.$http_response_header=headers;}
if(offset||maxLen){if(maxLen){return req.responseText.substr(offset||0,maxLen);}
return req.responseText.substr(offset);}
return req.responseText;}
return false;}
function filemtime(file){var headers={};headers=this.get_headers(file,1);return(headers&&headers['Last-Modified']&&Date.parse(headers['Last-Modified'])/1000)||false;}
function filesize(url){var req=this.window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
req.open('HEAD',url,false);req.send(null);if(!req.getResponseHeader){try{throw new Error('No getResponseHeader!');}catch(e){return false;}}else if(!req.getResponseHeader('Content-Length')){try{throw new Error('No Content-Length!');}catch(e2){return false;}}else{return req.getResponseHeader('Content-Length');}}
function floatval(mixed_var){return(parseFloat(mixed_var)||0);}
function floor(value){return Math.floor(value);}
function fmod(x,y){var tmp,tmp2,p=0,pY=0,l=0.0,l2=0.0;tmp=x.toExponential().match(/^.\.?(.*)e(.+)$/);p=parseInt(tmp[2],10)-(tmp[1]+'').length;tmp=y.toExponential().match(/^.\.?(.*)e(.+)$/);pY=parseInt(tmp[2],10)-(tmp[1]+'').length;if(pY>p){p=pY;}
tmp2=(x%y);if(p<-100||p>20){l=Math.round(Math.log(tmp2)/Math.log(10));l2=Math.pow(10,l);return(tmp2/l2).toFixed(l-p)*l2;}else{return parseFloat(tmp2.toFixed(-p));}}
function fopen(filename,mode,use_include_path,context){var resource={},i=0,that=this;var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var file_get_contents=function(url){var req=that.window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
if(!(/^http/).test(url)){url=that.window.location.href+'/'+url;}
req.open("GET",url,false);req.send(null);return req.responseText;};if(use_include_path===1||use_include_path==='1'||use_include_path===true){}
if(context){}
for(i=0;i<mode.length;i++){if(mode.charAt(i)==='r'&&(!mode.charAt(i+1)||mode.charAt(i+1)!=='+')){continue;}
switch(mode.charAt(i)){case'r':case'w':case'a':case'x':throw'Writing is not implemented';case'b':case't':throw'Windows-only modes are not supported';default:throw'Unrecognized file mode passed to '+getFuncName(arguments.caller)+'()';}}
this.php_js=this.php_js||{};this.php_js.resourceData=this.php_js.resourceData||{};this.php_js.resourceDataPointer=this.php_js.resourceDataPointer||{};this.php_js.resourceIdCounter=this.php_js.resourceIdCounter||0;function PHPJS_Resource(type,id,opener){this.type=type;this.id=id;this.opener=opener;}
PHPJS_Resource.prototype.toString=function(){return'Resource id #'+this.id;};PHPJS_Resource.prototype.get_resource_type=function(){return this.type;};PHPJS_Resource.prototype.var_dump=function(){return'resource('+this.id+') of type ('+this.type+')';};this.php_js.resourceIdCounter++;this.php_js.resourceData[this.php_js.resourceIdCounter]=this.file_get_contents(filename);this.php_js.resourceDataPointer[this.php_js.resourceIdCounter]=0;resource=new PHPJS_Resource('stream',this.php_js.resourceIdCounter,'fopen');resource.mode=mode;return resource;}
function forward_static_call(cb,parameters){var func;if(typeof cb=='string'){if(typeof this[cb]=='function'){func=this[cb];}else{func=(new Function(null,'return '+cb))();}}
else if(Object.prototype.toString.call(cb)==='[object Array]'){func=eval(cb[0]+"['"+cb[1]+"']");}
if(typeof func!='function'){throw new Error(func+' is not a valid function');}
return func.apply(null,Array.prototype.slice.call(arguments,1));}
function forward_static_call_array(cb,parameters){var func;if(typeof cb=='string'){if(typeof this[cb]=='function'){func=this[cb];}else{func=(new Function(null,'return '+cb))();}}
else if(Object.prototype.toString.call(cb)==='[object Array]'){func=eval(cb[0]+"['"+cb[1]+"']");}
if(typeof func!='function'){throw new Error(func+' is not a valid function');}
return func.apply(null,parameters);}
function fpassthru(handle){if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer||!handle||!handle.id){return false;}
var chrs=this.php_js.resourceData[handle.id].slice(this.php_js.resourceDataPointer[handle.id]);this.echo(chrs);this.php_js.resourceDataPointer[handle.id]=this.php_js.resourceData[handle.id].length;return chrs;}
function fread(handle,length){if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer){return false;}
length=length<8192?(Math.floor(length/2)||1):4096;var start=this.php_js.resourceDataPointer[handle.id];if(start===undefined){return false;}
if(!this.php_js.resourceData[handle.id][start]){return'';}
this.php_js.resourceDataPointer[handle.id]+=length;return this.php_js.resourceData[handle.id].substr(start,length);}
function fscanf(handle,format){var mixed;mixed=this.sscanf.apply(this,[fgets(handle),format].concat(Array.prototype.slice.call(arguments,2)));return mixed;}
function fseek(handle,offset,whence){var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer||!handle||!handle.constructor||getFuncName(handle.constructor)!=='PHPJS_Resource'){return-1;}
switch(whence){case undefined:case'SEEK_SET':this.php_js.resourceDataPointer[handle.id]=offset/2+1;break;case'SEEK_CUR':this.php_js.resourceDataPointer[handle.id]+=offset/2+1;break;case'SEEK_END':this.php_js.resourceDataPointer[handle.id]=this.php_js.resourceData[handle.id].length+offset/2+1;break;default:throw'Unrecognized whence value for fseek()';}
return 0;}
function ftell(handle){var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer||!handle||!handle.constructor||getFuncName(handle.constructor)!=='PHPJS_Resource'){return false;}
return this.php_js.resourceDataPointer[handle.id]*2-1;}
function func_get_arg(num){if(!arguments.callee.caller){try{throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');}catch(e){return false;}}
if(num>arguments.callee.caller.arguments.length-1){try{throw new Error('Argument number is greater than the number of arguments actually passed');}catch(e2){return false;}}
return arguments.callee.caller.arguments[num];}
function func_get_args(){if(!arguments.callee.caller){try{throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');}catch(e){return false;}}
return Array.prototype.slice.call(arguments.callee.caller.arguments);}
function func_num_args(){if(!arguments.callee.caller){try{throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');}catch(e){return false;}}
return arguments.callee.caller.arguments.length;}
function function_exists(func_name){if(typeof func_name==='string'){func_name=this.window[func_name];}
return typeof func_name==='function';}
function get_cfg_var(varname){if(this.php_js&&this.php_js.ini&&this.php_js.ini[varname].global_value!==undefined){if(this.php_js.ini[varname].global_value===null){return'';}
return this.php_js.ini[varname].global_value;}
return'';}
function get_class(obj){if(obj&&typeof obj==='object'&&Object.prototype.toString.call(obj)!=='[object Array]'&&obj.constructor&&obj!=this.window){var arr=obj.constructor.toString().match(/function\s*(\w+)/);if(arr&&arr.length==2){return arr[1];}}
return false;}
function get_class_methods(name){var constructor,retArr={},method='';if(typeof name==='function'){constructor=name;}else if(typeof name==='string'){constructor=this.window[name];}else if(typeof name==='object'){constructor=name;for(method in constructor.constructor){if(typeof constructor.constructor[method]==='function'){retArr[method]=constructor.constructor[method];}}}
for(method in constructor){if(typeof constructor[method]==='function'){retArr[method]=constructor[method];}}
for(method in constructor.prototype){if(typeof constructor.prototype[method]==='function'){retArr[method]=constructor.prototype[method];}}
return retArr;}
function get_class_vars(name){var constructor,retArr={},prop='';if(typeof name==='function'){constructor=name;}else if(typeof name==='string'){constructor=this.window[name];}
for(prop in constructor){if(typeof constructor[prop]!=='function'&&prop!=='prototype'){retArr[prop]=constructor[prop];}}
if(constructor.prototype){for(prop in constructor.prototype){if(typeof constructor.prototype[prop]!=='function'){retArr[prop]=constructor.prototype[prop];}}}
return retArr;}
function get_declared_classes(){var i='',j='',arr=[],already={};for(i in this.window){try{if(typeof this.window[i]==='function'){if(!already[i]&&this.class_exists(i)){already[i]=1;arr.push(i);}}else if(typeof this.window[i]==='object'){for(j in this.window[i]){if(typeof this.window[j]==='function'&&this.window[j]&&!already[j]&&this.class_exists(j)){already[j]=1;arr.push(j);}}}}catch(e){}}
return arr;}
function get_defined_constants(categorize){var ext='',cnst='',constObj={},flatConstObj={},win,thisExt=false;constObj={'internal':{'E_ERROR':1,'E_RECOVERABLE_ERROR':4096,'E_WARNING':2,'E_PARSE':4,'E_NOTICE':8,'E_STRICT':2048,'E_CORE_ERROR':16,'E_CORE_WARNING':32,'E_COMPILE_ERROR':64,'E_COMPILE_WARNING':128,'E_USER_ERROR':256,'E_USER_WARNING':512,'E_USER_NOTICE':1024,'E_ALL':6143,'ZEND_THREAD_SAFE':true,'PHP_VERSION':'5.2.6','PHP_OS':'WINNT','PHP_SAPI':'apache2handler','DEFAULT_INCLUDE_PATH':'.;C:\\php5\\pear','PEAR_INSTALL_DIR':'C:\\php5\\pear','PEAR_EXTENSION_DIR':'C:\\php5','PHP_EXTENSION_DIR':'C:\\php5','PHP_PREFIX':'C:\\php5','PHP_BINDIR':'C:\\php5','PHP_LIBDIR':'C:\\php5','PHP_DATADIR':'C:\\php5','PHP_SYSCONFDIR':'C:\\php5','PHP_LOCALSTATEDIR':'C:\\php5','PHP_CONFIG_FILE_PATH':'C:\\Windows','PHP_CONFIG_FILE_SCAN_DIR':'','PHP_SHLIB_SUFFIX':'dll','PHP_EOL':'\n','PHP_INT_MAX':2147483647,'PHP_INT_SIZE':4,'PHP_OUTPUT_HANDLER_START':1,'PHP_OUTPUT_HANDLER_CONT':2,'PHP_OUTPUT_HANDLER_END':4,'UPLOAD_ERR_OK':0,'UPLOAD_ERR_INI_SIZE':1,'UPLOAD_ERR_FORM_SIZE':2,'UPLOAD_ERR_PARTIAL':3,'UPLOAD_ERR_NO_FILE':4,'UPLOAD_ERR_NO_TMP_DIR':6,'UPLOAD_ERR_CANT_WRITE':7,'UPLOAD_ERR_EXTENSION':8},'pcre':{'PREG_PATTERN_ORDER':1,'PREG_SET_ORDER':2,'PREG_OFFSET_CAPTURE':256,'PREG_SPLIT_NO_EMPTY':1,'PREG_SPLIT_DELIM_CAPTURE':2,'PREG_SPLIT_OFFSET_CAPTURE':4,'PREG_GREP_INVERT':1,'PREG_NO_ERROR':0,'PREG_INTERNAL_ERROR':1,'PREG_BACKTRACK_LIMIT_ERROR':2,'PREG_RECURSION_LIMIT_ERROR':3,'PREG_BAD_UTF8_ERROR':4,'PCRE_VERSION':'7.6 2008-01-28'},'session':{'DATE_ATOM':'Y-m-d\\TH:i:sP','DATE_COOKIE':'l, d-M-y H:i:s T','DATE_ISO8601':'Y-m-d\\TH:i:sO','DATE_RFC822':'D, d M y H:i:s O','DATE_RFC850':'l, d-M-y H:i:s T','DATE_RFC1036':'D, d M y H:i:s O','DATE_RFC1123':'D, d M Y H:i:s O','DATE_RFC2822':'D, d M Y H:i:s O','DATE_RFC3339':'Y-m-d\\TH:i:sP','DATE_RSS':'D, d M Y H:i:s O','DATE_W3C':'Y-m-d\\TH:i:sP','SUNFUNCS_RET_TIMESTAMP':0,'SUNFUNCS_RET_STRING':1,'SUNFUNCS_RET_DOUBLE':2},'standard':{'CONNECTION_ABORTED':1,'CONNECTION_NORMAL':0,'CONNECTION_TIMEOUT':2,'INI_USER':1,'INI_PERDIR':2,'INI_SYSTEM':4,'INI_ALL':7,'PHP_URL_SCHEME':0,'PHP_URL_HOST':1,'PHP_URL_PORT':2,'PHP_URL_USER':3,'PHP_URL_PASS':4,'PHP_URL_PATH':5,'PHP_URL_QUERY':6,'PHP_URL_FRAGMENT':7,'M_E':2.718281828459,'M_LOG2E':1.442695040889,'M_LOG10E':0.43429448190325,'M_LN2':0.69314718055995,'M_LN10':2.302585092994,'M_PI':3.1415926535898,'M_PI_2':1.5707963267949,'M_PI_4':0.78539816339745,'M_1_PI':0.31830988618379,'M_2_PI':0.63661977236758,'M_SQRTPI':1.7724538509055,'M_2_SQRTPI':1.1283791670955,'M_LNPI':1.1447298858494,'M_EULER':0.57721566490153,'M_SQRT2':1.4142135623731,'M_SQRT1_2':0.70710678118655,'M_SQRT3':1.7320508075689,'INF':Number.POSITIVE_INFINITY,'NAN':0,'INFO_GENERAL':1,'INFO_CREDITS':2,'INFO_CONFIGURATION':4,'INFO_MODULES':8,'INFO_ENVIRONMENT':16,'INFO_VARIABLES':32,'INFO_LICENSE':64,'INFO_ALL':-1,'CREDITS_GROUP':1,'CREDITS_GENERAL':2,'CREDITS_SAPI':4,'CREDITS_MODULES':8,'CREDITS_DOCS':16,'CREDITS_FULLPAGE':32,'CREDITS_QA':64,'CREDITS_ALL':-1,'HTML_SPECIALCHARS':0,'HTML_ENTITIES':1,'ENT_COMPAT':2,'ENT_QUOTES':3,'ENT_NOQUOTES':0,'STR_PAD_LEFT':0,'STR_PAD_RIGHT':1,'STR_PAD_BOTH':2,'PATHINFO_DIRNAME':1,'PATHINFO_BASENAME':2,'PATHINFO_EXTENSION':4,'PATHINFO_FILENAME':8,'CHAR_MAX':127,'LC_CTYPE':2,'LC_NUMERIC':4,'LC_TIME':5,'LC_COLLATE':1,'LC_MONETARY':3,'LC_ALL':0,'SEEK_SET':0,'SEEK_CUR':1,'SEEK_END':2,'LOCK_SH':1,'LOCK_EX':2,'LOCK_UN':3,'LOCK_NB':4,'STREAM_NOTIFY_CONNECT':2,'STREAM_NOTIFY_AUTH_REQUIRED':3,'STREAM_NOTIFY_AUTH_RESULT':10,'STREAM_NOTIFY_MIME_TYPE_IS':4,'STREAM_NOTIFY_FILE_SIZE_IS':5,'STREAM_NOTIFY_REDIRECTED':6,'STREAM_NOTIFY_PROGRESS':7,'STREAM_NOTIFY_FAILURE':9,'STREAM_NOTIFY_COMPLETED':8,'STREAM_NOTIFY_RESOLVE':1,'STREAM_NOTIFY_SEVERITY_INFO':0,'STREAM_NOTIFY_SEVERITY_WARN':1,'STREAM_NOTIFY_SEVERITY_ERR':2,'STREAM_FILTER_READ':1,'STREAM_FILTER_WRITE':2,'STREAM_FILTER_ALL':3,'STREAM_CLIENT_PERSISTENT':1,'STREAM_CLIENT_ASYNC_CONNECT':2,'STREAM_CLIENT_CONNECT':4,'STREAM_CRYPTO_METHOD_SSLv2_CLIENT':0,'STREAM_CRYPTO_METHOD_SSLv3_CLIENT':1,'STREAM_CRYPTO_METHOD_SSLv23_CLIENT':2,'STREAM_CRYPTO_METHOD_TLS_CLIENT':3,'STREAM_CRYPTO_METHOD_SSLv2_SERVER':4,'STREAM_CRYPTO_METHOD_SSLv3_SERVER':5,'STREAM_CRYPTO_METHOD_SSLv23_SERVER':6,'STREAM_CRYPTO_METHOD_TLS_SERVER':7,'STREAM_SHUT_RD':0,'STREAM_SHUT_WR':1,'STREAM_SHUT_RDWR':2,'STREAM_PF_INET':2,'STREAM_PF_INET6':23,'STREAM_PF_UNIX':1,'STREAM_IPPROTO_IP':0,'STREAM_IPPROTO_TCP':6,'STREAM_IPPROTO_UDP':17,'STREAM_IPPROTO_ICMP':1,'STREAM_IPPROTO_RAW':255,'STREAM_SOCK_STREAM':1,'STREAM_SOCK_DGRAM':2,'STREAM_SOCK_RAW':3,'STREAM_SOCK_SEQPACKET':5,'STREAM_SOCK_RDM':4,'STREAM_PEEK':2,'STREAM_OOB':1,'STREAM_SERVER_BIND':4,'STREAM_SERVER_LISTEN':8,'FILE_USE_INCLUDE_PATH':1,'FILE_IGNORE_NEW_LINES':2,'FILE_SKIP_EMPTY_LINES':4,'FILE_APPEND':8,'FILE_NO_DEFAULT_CONTEXT':16,'PSFS_PASS_ON':2,'PSFS_FEED_ME':1,'PSFS_ERR_FATAL':0,'PSFS_FLAG_NORMAL':0,'PSFS_FLAG_FLUSH_INC':1,'PSFS_FLAG_FLUSH_CLOSE':2,'CRYPT_SALT_LENGTH':12,'CRYPT_STD_DES':1,'CRYPT_EXT_DES':0,'CRYPT_MD5':1,'CRYPT_BLOWFISH':0,'DIRECTORY_SEPARATOR':'\\','PATH_SEPARATOR':';','GLOB_BRACE':128,'GLOB_MARK':8,'GLOB_NOSORT':32,'GLOB_NOCHECK':16,'GLOB_NOESCAPE':4096,'GLOB_ERR':4,'GLOB_ONLYDIR':1073741824,'GLOB_AVAILABLE_FLAGS':1073746108,'LOG_EMERG':1,'LOG_ALERT':1,'LOG_CRIT':1,'LOG_ERR':4,'LOG_WARNING':5,'LOG_NOTICE':6,'LOG_INFO':6,'LOG_DEBUG':6,'LOG_KERN':0,'LOG_USER':8,'LOG_MAIL':16,'LOG_DAEMON':24,'LOG_AUTH':32,'LOG_SYSLOG':40,'LOG_LPR':48,'LOG_NEWS':56,'LOG_UUCP':64,'LOG_CRON':72,'LOG_AUTHPRIV':80,'LOG_PID':1,'LOG_CONS':2,'LOG_ODELAY':4,'LOG_NDELAY':8,'LOG_NOWAIT':16,'LOG_PERROR':32,'EXTR_OVERWRITE':0,'EXTR_SKIP':1,'EXTR_PREFIX_SAME':2,'EXTR_PREFIX_ALL':3,'EXTR_PREFIX_INVALID':4,'EXTR_PREFIX_IF_EXISTS':5,'EXTR_IF_EXISTS':6,'EXTR_REFS':256,'SORT_ASC':4,'SORT_DESC':3,'SORT_REGULAR':0,'SORT_NUMERIC':1,'SORT_STRING':2,'SORT_LOCALE_STRING':5,'CASE_LOWER':0,'CASE_UPPER':1,'COUNT_NORMAL':0,'COUNT_RECURSIVE':1,'ASSERT_ACTIVE':1,'ASSERT_CALLBACK':2,'ASSERT_BAIL':3,'ASSERT_WARNING':4,'ASSERT_QUIET_EVAL':5,'STREAM_USE_PATH':1,'STREAM_IGNORE_URL':2,'STREAM_ENFORCE_SAFE_MODE':4,'STREAM_REPORT_ERRORS':8,'STREAM_MUST_SEEK':16,'STREAM_URL_STAT_LINK':1,'STREAM_URL_STAT_QUIET':2,'STREAM_MKDIR_RECURSIVE':1,'STREAM_IS_URL':1,'IMAGETYPE_GIF':1,'IMAGETYPE_JPEG':2,'IMAGETYPE_PNG':3,'IMAGETYPE_SWF':4,'IMAGETYPE_PSD':5,'IMAGETYPE_BMP':6,'IMAGETYPE_TIFF_II':7,'IMAGETYPE_TIFF_MM':8,'IMAGETYPE_JPC':9,'IMAGETYPE_JP2':10,'IMAGETYPE_JPX':11,'IMAGETYPE_JB2':12,'IMAGETYPE_SWC':13,'IMAGETYPE_IFF':14,'IMAGETYPE_WBMP':15,'IMAGETYPE_JPEG2000':9,'IMAGETYPE_XBM':16}};if(this.php_js&&this.php_js.ini&&this.php_js.ini['phpjs.get_defined_constants.setConstants']&&this.php_js.ini['phpjs.get_defined_constants.setConstants'].local_value){if(this.php_js.ini['phpjs.get_defined_constants.setConstants'].local_value==='this'){win=this;}else if(this.php_js.ini['phpjs.get_defined_constants.setConstants'].local_value==='thisExt'){win=this;thisExt=true;}else{win=this.window;}
for(ext in constObj){if(thisExt){for(cnst in constObj[ext]){if(!win[ext]){win[ext]={};}
win[ext][cnst]=constObj[ext][cnst];}}else{for(cnst in constObj[ext]){if(this===this.window){this.define(cnst,constObj[ext][cnst]);}else{win[cnst]=constObj[ext][cnst];}}}}}
if(typeof categorize!=='undefined'){return constObj;}
for(ext in constObj){for(cnst in constObj[ext]){flatConstObj[cnst]=constObj[ext][cnst];}}
return flatConstObj;}
function get_defined_functions(){var i='',arr=[],already={};for(i in this.window){try{if(typeof this.window[i]==='function'){if(!already[i]){already[i]=1;arr.push(i);}}else if(typeof this.window[i]==='object'){for(var j in this.window[i]){if(typeof this.window[j]==='function'&&this.window[j]&&!already[j]){already[j]=1;arr.push(j);}}}}catch(e){}}
return arr;}
function get_defined_vars(){var i='',arr=[],already={};for(i in this.window){try{if(typeof this.window[i]==='object'){for(var j in this.window[i]){if(this.window[j]&&!already[j]){already[j]=1;arr.push(j);}}}else if(!already[i]){already[i]=1;arr.push(i);}}catch(e){if(!already[i]){already[i]=1;arr.push(i);}}}
return arr;}
function get_extension_funcs(module_name){this.php_js=this.php_js||{};this.php_js.exts=this.php_js.exts||{array:['array_change_key_case','array_chunk','array_combine','array_count_values','array_diff_assoc','array_diff_key','array_diff_uassoc','array_diff_ukey','array_diff','array_fill_keys','array_fill','array_filter','array_flip','array_intersect_assoc','array_intersect_key','array_intersect_uassoc','array_intersect_ukey','array_intersect','array_key_exists','array_keys','array_map','array_merge_recursive','array_merge','array_multisort','array_pad','array_pop','array_product','array_push','array_rand','array_reduce','array_replace_recursive','array_replace','array_reverse','array_search','array_shift','array_slice','array_splice','array_sum','array_udiff_assoc','array_udiff_uassoc','array_udiff','array_uintersect_assoc','array_uintersect_uassoc','array_uintersect','array_unique','array_unshift','array_values','array_walk_recursive','array_walk','array','arsort','asort','compact','count','current','each','end','extract','in_array','key','krsort','ksort','list','natcasesort','natsort','next','pos','prev','range','reset','rsort','shuffle','sizeof','sort','uasort','uksort','usort'],bc:['bcadd','bccomp','bcdiv','bcmod','bcmul','bcpow','bcpowmod','bcscale','bcsqrt','bcsub'],classkit:['classkit_import','classkit_method_add','classkit_method_copy','classkit_method_redefine','classkit_method_remove','classkit_method_rename'],classobj:['call_user_method_array','call_user_method','class_alias','class_exists','get_called_class','get_class_methods','get_class_vars','get_class','get_declared_classes','get_declared_interfaces','get_object_vars','get_parent_class','interface_exists','is_a','is_subclass_of','method_exists','property_exists'],ctype:['ctype_alnum','ctype_alpha','ctype_cntrl','ctype_digit','ctype_graph','ctype_lower','ctype_print','ctype_punct','ctype_space','ctype_upper','ctype_xdigit'],datetime:['checkdate','date_add','date_create_from_format','date_create','date_date_set','date_default_timezone_get','date_default_timezone_set','date_diff','date_format','date_get_last_errors','date_interval_create_from_date_string','date_interval_format','date_isodate_set','date_modify','date_offset_get','date_parse_from_format','date_parse','date_sub','date_sun_info','date_sunrise','date_sunset','date_time_set','date_timestamp_get','date_timestamp_set','date_timezone_get','date_timezone_set','date','getdate','gettimeofday','gmdate','gmmktime','gmstrftime','idate','localtime','microtime','mktime','strftime','strptime','strtotime','time','timezone_abbreviations_list','timezone_identifiers_list','timezone_location_get','timezone_name_from_abbr','timezone_name_get','timezone_offset_get','timezone_open','timezone_transitions_get','timezone_version_get'],dir:['chdir','chroot','dir','closedir','getcwd','opendir','readdir','rewinddir','scandir'],errorfunc:['debug_backtrace','debug_print_backtrace','error_get_last','error_log','error_reporting','restore_error_handler','restore_exception_handler','set_error_handler','set_exception_handler','trigger_error','user_error'],exec:['escapeshellarg','escapeshellcmd','exec','passthru','proc_close','proc_get_status','proc_nice','proc_open','proc_terminate','shell_exec','system'],filesystem:['basename','chgrp','chmod','chown','clearstatcache','copy','delete','dirname','disk_free_space','disk_total_space','diskfreespace','fclose','feof','fflush','fgetc','fgetcsv','fgets','fgetss','file_exists','file_get_contents','file_put_contents','file','fileatime','filectime','filegroup','fileinode','filemtime','fileowner','fileperms','filesize','filetype','flock','fnmatch','fopen','fpassthru','fputcsv','fputs','fread','fscanf','fseek','fstat','ftell','ftruncate','fwrite','glob','is_dir','is_executable','is_file','is_link','is_readable','is_uploaded_file','is_writable','is_writeable','lchgrp','lchown','link','linkinfo','lstat','mkdir','move_uploaded_file','parse_ini_file','parse_ini_string','pathinfo','pclose','popen','readfile','readlink','realpath','rename','rewind','rmdir','set_file_buffer','stat','symlink','tempnam','tmpfile','touch','umask','unlink'],funchand:['call_user_func_array','call_user_func','create_function','forward_static_call_array','forward_static_call','func_get_arg','func_get_args','func_num_args','function_exists','get_defined_functions','register_shutdown_function','register_tick_function','unregister_tick_function'],i18n:['locale_get_default','locale_set_default'],inclued:['inclued_get_data'],info:['assert_options','assert','dl','extension_loaded','gc_collect_cycles','gc_disable','gc_enable','gc_enabled','get_cfg_var','get_current_user','get_defined_constants','get_extension_funcs','get_include_path','get_included_files','get_loaded_extensions','get_magic_quotes_gpc','get_magic_quotes_runtime','get_required_files','getenv','getlastmod','getmygid','getmyinode','getmypid','getmyuid','getopt','getrusage','ini_alter','ini_get_all','ini_get','ini_restore','ini_set','magic_quotes_runtime','main','memory_get_peak_usage','memory_get_usage','php_ini_loaded_file','php_ini_scanned_files','php_logo_guid','php_sapi_name','php_uname','phpcredits','phpinfo','phpversion','putenv','restore_include_path','set_include_path','set_magic_quotes_runtime','set_time_limit','sys_get_temp_dir','version_compare','zend_logo_guid','zend_thread_id','zend_version'],json:['json_decode','json_encode','json_last_error'],language:['at','clone','declare','foreach','goto','include','include_once','php_user_filter','require','require_once','stdClass','ErrorException','Exception','HEREDOC','$_SESSION','__CLASS__','__DIR__','__FILE__','__FUNCTION__','__LINE__','__METHOD__'],math:['abs','acos','acosh','asin','asinh','atan2','atan','atanh','base_convert','bindec','ceil','cos','cosh','decbin','dechex','decoct','deg2rad','exp','expm1','floor','fmod','getrandmax','hexdec','hypot','is_finite','is_infinite','is_nan','lcg_value','log10','log1p','log','max','min','mt_getrandmax','mt_rand','mt_srand','octdec','pi','pow','rad2deg','rand','round','sin','sinh','sqrt','srand','tan','tanh'],misc:['connection_aborted','connection_status','connection_timeout','constant','define','defined','die','eval','exit','get_browser','__halt_compiler','highlight_file','highlight_string','ignore_user_abort','pack','php_check_syntax','php_strip_whitespace','show_source','sleep','sys_getloadavg','time_nanosleep','time_sleep_until','uniqid','unpack','usleep'],'net-gopher':['gopher_parsedir'],network:['checkdnsrr','closelog','define_syslog_variables','dns_check_record','dns_get_mx','dns_get_record','fsockopen','gethostbyaddr','gethostbyname','gethostbynamel','gethostname','getmxrr','getprotobyname','getprotobynumber','getservbyname','getservbyport','header_remove','header','headers_list','headers_sent','inet_ntop','inet_pton','ip2long','long2ip','openlog','pfsockopen','setcookie','setrawcookie','socket_get_status','socket_set_blocking','socket_set_timeout','syslog'],objaggregation:['aggregate_info','aggregate_methods_by_list','aggregate_methods_by_regexp','aggregate_methods','aggregate_properties_by_list','aggregate_properties_by_regexp','aggregate_properties','aggregate','aggregation_info','deaggregate'],outcontrol:['flush','ob_clean','ob_end_clean','ob_end_flush','ob_flush','ob_get_clean','ob_get_contents','ob_get_flush','ob_get_length','ob_get_level','ob_get_status','ob_gzhandler','ob_implicit_flush','ob_list_handlers','ob_start','output_add_rewrite_var','output_reset_rewrite_vars'],overload:['overload'],pcre:['preg_filter','preg_grep','preg_last_error','preg_match_all','preg_match','preg_quote','preg_replace_callback','preg_replace','preg_split'],runkit:['Runkit_Sandbox','Runkit_Sandbox_Parent','runkit_class_adopt','runkit_class_emancipate','runkit_constant_add','runkit_constant_redefine','runkit_constant_remove','runkit_function_add','runkit_function_copy','runkit_function_redefine','runkit_function_remove','runkit_function_rename','runkit_import','runkit_lint_file','runkit_lint','runkit_method_add','runkit_method_copy','runkit_method_redefine','runkit_method_remove','runkit_method_rename','runkit_return_value_used','runkit_sandbox_output_handler','runkit_superglobals'],session:['session_cache_expire','session_cache_limiter','session_commit','session_decode','session_destroy','session_encode','session_get_cookie_params','session_id','session_is_registered','session_module_name','session_name','session_regenerate_id','session_register','session_save_path','session_set_cookie_params','session_set_save_handler','session_start','session_unregister','session_unset','session_write_close'],stream:['set_socket_blocking','stream_bucket_append','stream_bucket_make_writeable','stream_bucket_new','stream_bucket_prepend','stream_context_create','stream_context_get_default','stream_context_get_options','stream_context_get_params','stream_context_set_default','stream_context_set_option','stream_context_set_params','stream_copy_to_stream','stream_encoding','stream_filter_append','stream_filter_prepend','stream_filter_register','stream_filter_remove','stream_get_contents','stream_get_filters','stream_get_line','stream_get_meta_data','stream_get_transports','stream_get_wrappers','stream_is_local','stream_notification_callback','stream_register_wrapper','stream_resolve_include_path','stream_select','stream_set_blocking','stream_set_timeout','stream_set_write_buffer','stream_socket_accept','stream_socket_client','stream_socket_enable_crypto','stream_socket_get_name','stream_socket_pair','stream_socket_recvfrom','stream_socket_sendto','stream_socket_server','stream_socket_shutdown','stream_supports_lock','stream_wrapper_register','stream_wrapper_restore','stream_wrapper_unregister'],strings:['addcslashes','addslashes','bin2hex','chop','chr','chunk_split','convert_cyr_string','convert_uudecode','convert_uuencode','count_chars','crc32','crypt','echo','explode','fprintf','get_html_translation_table','hebrev','hebrevc','html_entity_decode','htmlentities','htmlspecialchars_decode','htmlspecialchars','implode','join','lcfirst','levenshtein','localeconv','ltrim','md5_file','md5','metaphone','money_format','nl_langinfo','nl2br','number_format','ord','parse_str','print','printf','quoted_printable_decode','quoted_printable_encode','quotemeta','rtrim','setlocale','sha1_file','sha1','similar_text','soundex','sprintf','sscanf','str_getcsv','str_ireplace','str_pad','str_repeat','str_replace','str_rot13','str_shuffle','str_split','str_word_count','strcasecmp','strchr','strcmp','strcoll','strcspn','strip_tags','stripcslashes','stripos','stripslashes','stristr','strlen','strnatcasecmp','strnatcmp','strncasecmp','strncmp','strpbrk','strpos','strrchr','strrev','strripos','strrpos','strspn','strstr','strtok','strtolower','strtoupper','strtr','substr_compare','substr_count','substr_replace','substr','trim','ucfirst','ucwords','vfprintf','vprintf','vsprintf','wordwrap'],tokenizer:['token_get_all','token_name'],url:['base64_decode','base64_encode','get_headers','get_meta_tags','http_build_query','parse_url','rawurldecode','rawurlencode','urldecode','urlencode'],'var':['debug_zval_dump','doubleval','empty','floatval','get_defined_vars','get_resource_type','gettype','import_request_variables','intval','is_array','is_binary','is_bool','is_buffer','is_callable','is_double','is_float','is_int','is_integer','is_long','is_null','is_numeric','is_object','is_real','is_resource','is_scalar','is_string','is_unicode','isset','print_r','serialize','settype','strval','unserialize','unset','var_dump','var_export'],xml:['utf8_decode','utf8_encode','xml_error_string','xml_get_current_byte_index','xml_get_current_column_number','xml_get_current_line_number','xml_get_error_code','xml_parse_into_struct','xml_parse','xml_parser_create_ns','xml_parser_create','xml_parser_free','xml_parser_get_option','xml_parser_set_option','xml_set_character_data_handler','xml_set_default_handler','xml_set_element_handler','xml_set_end_namespace_decl_handler','xml_set_external_entity_ref_handler','xml_set_notation_decl_handler','xml_set_object','xml_set_processing_instruction_handler','xml_set_start_namespace_decl_handler','xml_set_unparsed_entity_decl_handler'],xmlreader:['XMLReader'],xmlwriter:['xmlwriter_end_attribute','xmlwriter_end_cdata','xmlwriter_end_comment','xmlwriter_end_document','xmlwriter_end_dtd_attlist','xmlwriter_end_dtd_element','xmlwriter_end_dtd_entity','xmlwriter_end_dtd','xmlwriter_end_element','xmlwriter_end_pi','xmlwriter_flush','xmlwriter_full_end_element','xmlwriter_open_memory','xmlwriter_open_uri','xmlwriter_output_memory','xmlwriter_set_indent_string','xmlwriter_set_indent','xmlwriter_start_attribute_ns','xmlwriter_start_attribute','xmlwriter_start_cdata','xmlwriter_start_comment','xmlwriter_start_document','xmlwriter_start_dtd_attlist','xmlwriter_start_dtd_element','xmlwriter_start_dtd_entity','xmlwriter_start_dtd','xmlwriter_start_element_ns','xmlwriter_start_element','xmlwriter_start_pi','xmlwriter_text','xmlwriter_write_attribute_ns','xmlwriter_write_attribute','xmlwriter_write_cdata','xmlwriter_write_comment','xmlwriter_write_dtd_attlist','xmlwriter_write_dtd_element','xmlwriter_write_dtd_entity','xmlwriter_write_dtd','xmlwriter_write_element_ns','xmlwriter_write_element','xmlwriter_write_pi','xmlwriter_write_raw']};return this.php_js.exts[module_name]||false;}
function get_headers(url,format){var req=this.window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
var tmp,headers,pair,i,j=0;req.open('HEAD',url,false);req.send(null);if(req.readyState<3){return false;}
tmp=req.getAllResponseHeaders();tmp=tmp.split('\n');tmp=this.array_filter(tmp,function(value){return value.substring(1)!=='';});headers=format?{}:[];for(i in tmp){if(format){pair=tmp[i].split(':');headers[pair.splice(0,1)]=pair.join(':').substring(1);}else{headers[j++]=tmp[i];}}
return headers;}
function get_html_translation_table(table,quote_style){var entities={},hash_map={},decimal;var constMappingTable={},constMappingQuoteStyle={};var useTable={},useQuoteStyle={};constMappingTable[0]='HTML_SPECIALCHARS';constMappingTable[1]='HTML_ENTITIES';constMappingQuoteStyle[0]='ENT_NOQUOTES';constMappingQuoteStyle[2]='ENT_COMPAT';constMappingQuoteStyle[3]='ENT_QUOTES';useTable=!isNaN(table)?constMappingTable[table]:table?table.toUpperCase():'HTML_SPECIALCHARS';useQuoteStyle=!isNaN(quote_style)?constMappingQuoteStyle[quote_style]:quote_style?quote_style.toUpperCase():'ENT_COMPAT';if(useTable!=='HTML_SPECIALCHARS'&&useTable!=='HTML_ENTITIES'){throw new Error("Table: "+useTable+' not supported');}
entities['38']='&amp;';if(useTable==='HTML_ENTITIES'){entities['160']='&nbsp;';entities['161']='&iexcl;';entities['162']='&cent;';entities['163']='&pound;';entities['164']='&curren;';entities['165']='&yen;';entities['166']='&brvbar;';entities['167']='&sect;';entities['168']='&uml;';entities['169']='&copy;';entities['170']='&ordf;';entities['171']='&laquo;';entities['172']='&not;';entities['173']='&shy;';entities['174']='&reg;';entities['175']='&macr;';entities['176']='&deg;';entities['177']='&plusmn;';entities['178']='&sup2;';entities['179']='&sup3;';entities['180']='&acute;';entities['181']='&micro;';entities['182']='&para;';entities['183']='&middot;';entities['184']='&cedil;';entities['185']='&sup1;';entities['186']='&ordm;';entities['187']='&raquo;';entities['188']='&frac14;';entities['189']='&frac12;';entities['190']='&frac34;';entities['191']='&iquest;';entities['192']='&Agrave;';entities['193']='&Aacute;';entities['194']='&Acirc;';entities['195']='&Atilde;';entities['196']='&Auml;';entities['197']='&Aring;';entities['198']='&AElig;';entities['199']='&Ccedil;';entities['200']='&Egrave;';entities['201']='&Eacute;';entities['202']='&Ecirc;';entities['203']='&Euml;';entities['204']='&Igrave;';entities['205']='&Iacute;';entities['206']='&Icirc;';entities['207']='&Iuml;';entities['208']='&ETH;';entities['209']='&Ntilde;';entities['210']='&Ograve;';entities['211']='&Oacute;';entities['212']='&Ocirc;';entities['213']='&Otilde;';entities['214']='&Ouml;';entities['215']='&times;';entities['216']='&Oslash;';entities['217']='&Ugrave;';entities['218']='&Uacute;';entities['219']='&Ucirc;';entities['220']='&Uuml;';entities['221']='&Yacute;';entities['222']='&THORN;';entities['223']='&szlig;';entities['224']='&agrave;';entities['225']='&aacute;';entities['226']='&acirc;';entities['227']='&atilde;';entities['228']='&auml;';entities['229']='&aring;';entities['230']='&aelig;';entities['231']='&ccedil;';entities['232']='&egrave;';entities['233']='&eacute;';entities['234']='&ecirc;';entities['235']='&euml;';entities['236']='&igrave;';entities['237']='&iacute;';entities['238']='&icirc;';entities['239']='&iuml;';entities['240']='&eth;';entities['241']='&ntilde;';entities['242']='&ograve;';entities['243']='&oacute;';entities['244']='&ocirc;';entities['245']='&otilde;';entities['246']='&ouml;';entities['247']='&divide;';entities['248']='&oslash;';entities['249']='&ugrave;';entities['250']='&uacute;';entities['251']='&ucirc;';entities['252']='&uuml;';entities['253']='&yacute;';entities['254']='&thorn;';entities['255']='&yuml;';}
if(useQuoteStyle!=='ENT_NOQUOTES'){entities['34']='&quot;';}
if(useQuoteStyle==='ENT_QUOTES'){entities['39']='&#39;';}
entities['60']='&lt;';entities['62']='&gt;';for(decimal in entities){if(entities.hasOwnProperty(decimal)){hash_map[String.fromCharCode(decimal)]=entities[decimal];}}
return hash_map;}
function get_include_path(){if(this.php_js&&this.php_js.ini&&this.php_js.ini.include_path&&this.php_js.ini.include_path.local_value){return this.php_js.ini.include_path.local_value;}
return'';}
function get_included_files(){var cur_file={};cur_file[this.window.location.href]=1;if(!this.php_js){this.php_js={};}
if(!this.php_js.includes){this.php_js.includes=cur_file;}
var includes=[];var i=0;for(var key in this.php_js.includes){includes[i]=key;i++;}
return includes;}
function get_meta_tags(file){var fulltxt='';if(false){fulltxt='<meta name="author" content="name">'+'<meta name="keywords" content="php documentation">'+'<meta name="DESCRIPTION" content="a php manual">'+'<meta name="geo.position" content="49.33;-86.59">'+'</head>';}else{fulltxt=this.file_get_contents(file).match(/^[\s\S]*<\/head>/i);}
var patt=/<meta[^>]*?>/gim;var patt1=/<meta\s+.*?name\s*=\s*(['"]?)(.*?)\1\s+.*?content\s*=\s*(['"]?)(.*?)\3/gim;var patt2=/<meta\s+.*?content\s*=\s*(['"?])(.*?)\1\s+.*?name\s*=\s*(['"]?)(.*?)\3/gim;var txt,match,name,arr={};while((txt=patt.exec(fulltxt))!==null){while((match=patt1.exec(txt))!==null){name=match[2].replace(/\W/g,'_').toLowerCase();arr[name]=match[4];}
while((match=patt2.exec(txt))!==null){name=match[4].replace(/\W/g,'_').toLowerCase();arr[name]=match[2];}}
return arr;}
function get_object_vars(obj){var retArr={},prop='';for(prop in obj){if(typeof obj[prop]!=='function'&&prop!=='prototype'){retArr[prop]=obj[prop];}}
for(prop in obj.prototype){if(typeof obj.prototype[prop]!=='function'){retArr[prop]=obj.prototype[prop];}}
return retArr;}
function get_required_files(){return this.get_included_files();}
function get_resource_type(handle){var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};if(!handle||typeof handle!=='object'||!handle.constructor||getFuncName(handle.constructor)!=='PHPJS_Resource'){return false;}
return handle.get_resource_type();}
function getdate(timestamp){var _w=['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];var _m=['January','February','March','April','May','June','July','August','September','October','November','December'];var d=((typeof(timestamp)=='undefined')?new Date():(typeof(timestamp)=='object')?new Date(timestamp):new Date(timestamp*1000));var w=d.getDay();var m=d.getMonth();var y=d.getFullYear();var r={};r.seconds=d.getSeconds();r.minutes=d.getMinutes();r.hours=d.getHours();r.mday=d.getDate();r.wday=w;r.mon=m+1;r.year=y;r.yday=Math.floor((d-(new Date(y,0,1)))/86400000);r.weekday=_w[w]+'day';r.month=_m[m];r['0']=parseInt(d.getTime()/1000,10);return r;}
function getenv(varname){if(!this.php_js||!this.php_js.ENV||!this.php_js.ENV[varname]){return false;}
return this.php_js.ENV[varname];}
function getlastmod(){return new Date(this.window.document.lastModified).getTime()/1000;}
function getrandmax(){return 2147483647;}
function gettimeofday(return_float){var t=new Date(),y=0;if(return_float){return t.getTime()/1000;}
y=t.getFullYear();return{sec:t.getUTCSeconds(),usec:t.getUTCMilliseconds()*1000,minuteswest:t.getTimezoneOffset(),dsttime:0+(((new Date(y,0))-Date.UTC(y,0))!==((new Date(y,6))-Date.UTC(y,6)))};}
function gettype(mixed_var){var s=typeof mixed_var,name;var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};if(s==='object'){if(mixed_var!==null){if(typeof mixed_var.length==='number'&&!(mixed_var.propertyIsEnumerable('length'))&&typeof mixed_var.splice==='function'){s='array';}else if(mixed_var.constructor&&getFuncName(mixed_var.constructor)){name=getFuncName(mixed_var.constructor);if(name==='Date'){s='date';}else if(name==='RegExp'){s='regexp';}else if(name==='PHPJS_Resource'){s='resource';}}}else{s='null';}}else if(s==='number'){s=this.is_float(mixed_var)?'double':'integer';}
return s;}
function gmdate(format,timestamp){var dt=typeof timestamp==='undefined'?new Date():typeof timestamp==='object'?new Date(timestamp):new Date(timestamp*1000);timestamp=Date.parse(dt.toUTCString().slice(0,-4))/1000;return this.date(format,timestamp);}
function gmmktime(){var d=new Date(),r=arguments,i=0,e=['Hours','Minutes','Seconds','Month','Date','FullYear'];for(i=0;i<e.length;i++){if(typeof r[i]==='undefined'){r[i]=d['getUTC'+e[i]]();r[i]+=(i===3);}else{r[i]=parseInt(r[i],10);if(isNaN(r[i])){return false;}}}
r[5]+=(r[5]>=0?(r[5]<=69?2e3:(r[5]<=100?1900:0)):0);d.setUTCFullYear(r[5],r[3]-1,r[4]);d.setUTCHours(r[0],r[1],r[2]);return(d.getTime()/1e3>>0)-(d.getTime()<0);}
function gmstrftime(format,timestamp){var dt=((typeof(timestamp)=='undefined')?new Date():(typeof(timestamp)=='object')?new Date(timestamp):new Date(timestamp*1000));timestamp=Date.parse(dt.toUTCString().slice(0,-4))/1000;return this.strftime(format,timestamp);}
function gopher_parsedir(dirent){var entryPattern=/^(.)(.*?)\t(.*?)\t(.*?)\t(.*?)\u000d\u000a$/;var entry=dirent.match(entryPattern);if(entry===null){throw'Could not parse the directory entry';}
var type=entry[1];switch(type){case'i':type=255;break;case'1':type=1;break;case'0':type=0;break;case'4':type=4;break;case'5':type=5;break;case'6':type=6;break;case'9':type=9;break;case'h':type=254;break;default:return{type:-1,data:dirent};}
return{type:type,title:entry[2],path:entry[3],host:entry[4],port:entry[5]};}
function hexdec(hex_string){hex_string=(hex_string+'').replace(/[^a-f0-9]/gi,'');return parseInt(hex_string,16);}
function html_entity_decode(string,quote_style){var hash_map={},symbol='',tmp_str='',entity='';tmp_str=string.toString();if(false===(hash_map=this.get_html_translation_table('HTML_ENTITIES',quote_style))){return false;}
delete(hash_map['&']);hash_map['&']='&amp;';for(symbol in hash_map){entity=hash_map[symbol];tmp_str=tmp_str.split(entity).join(symbol);}
tmp_str=tmp_str.split('&#039;').join("'");return tmp_str;}
function htmlentities(string,quote_style,charset,double_encode){var hash_map=this.get_html_translation_table('HTML_ENTITIES',quote_style),symbol='';string=string==null?'':string+'';if(!hash_map){return false;}
if(quote_style&&quote_style==='ENT_QUOTES'){hash_map["'"]='&#039;';}
if(!!double_encode||double_encode==null){for(symbol in hash_map){if(hash_map.hasOwnProperty(symbol)){string=string.split(symbol).join(hash_map[symbol]);}}}else{string=string.replace(/([\s\S]*?)(&(?:#\d+|#x[\da-f]+|[a-zA-Z][\da-z]*);|$)/g,function(ignore,text,entity){for(symbol in hash_map){if(hash_map.hasOwnProperty(symbol)){text=text.split(symbol).join(hash_map[symbol]);}}
return text+entity;});}
return string;}
function htmlspecialchars(string,quote_style,charset,double_encode){var optTemp=0,i=0,noquotes=false;if(typeof quote_style==='undefined'||quote_style===null){quote_style=2;}
string=string.toString();if(double_encode!==false){string=string.replace(/&/g,'&amp;');}
string=string.replace(/</g,'&lt;').replace(/>/g,'&gt;');var OPTS={'ENT_NOQUOTES':0,'ENT_HTML_QUOTE_SINGLE':1,'ENT_HTML_QUOTE_DOUBLE':2,'ENT_COMPAT':2,'ENT_QUOTES':3,'ENT_IGNORE':4};if(quote_style===0){noquotes=true;}
if(typeof quote_style!=='number'){quote_style=[].concat(quote_style);for(i=0;i<quote_style.length;i++){if(OPTS[quote_style[i]]===0){noquotes=true;}
else if(OPTS[quote_style[i]]){optTemp=optTemp|OPTS[quote_style[i]];}}
quote_style=optTemp;}
if(quote_style&OPTS.ENT_HTML_QUOTE_SINGLE){string=string.replace(/'/g,'&#039;');}
if(!noquotes){string=string.replace(/"/g,'&quot;');}
return string;}
function htmlspecialchars_decode(string,quote_style){var optTemp=0,i=0,noquotes=false;if(typeof quote_style==='undefined'){quote_style=2;}
string=string.toString().replace(/&lt;/g,'<').replace(/&gt;/g,'>');var OPTS={'ENT_NOQUOTES':0,'ENT_HTML_QUOTE_SINGLE':1,'ENT_HTML_QUOTE_DOUBLE':2,'ENT_COMPAT':2,'ENT_QUOTES':3,'ENT_IGNORE':4};if(quote_style===0){noquotes=true;}
if(typeof quote_style!=='number'){quote_style=[].concat(quote_style);for(i=0;i<quote_style.length;i++){if(OPTS[quote_style[i]]===0){noquotes=true;}else if(OPTS[quote_style[i]]){optTemp=optTemp|OPTS[quote_style[i]];}}
quote_style=optTemp;}
if(quote_style&OPTS.ENT_HTML_QUOTE_SINGLE){string=string.replace(/&#0*39;/g,"'");}
if(!noquotes){string=string.replace(/&quot;/g,'"');}
string=string.replace(/&amp;/g,'&');return string;}
function http_build_query(formdata,numeric_prefix,arg_separator){var value,key,tmp=[],that=this;var _http_build_query_helper=function(key,val,arg_separator){var k,tmp=[];if(val===true){val="1";}else if(val===false){val="0";}
if(val!==null&&typeof(val)==="object"){for(k in val){if(val[k]!==null){tmp.push(_http_build_query_helper(key+"["+k+"]",val[k],arg_separator));}}
return tmp.join(arg_separator);}else if(typeof(val)!=="function"){return that.urlencode(key)+"="+that.urlencode(val);}else{throw new Error('There was an error processing for http_build_query().');}};if(!arg_separator){arg_separator="&";}
for(key in formdata){value=formdata[key];if(numeric_prefix&&!isNaN(key)){key=String(numeric_prefix)+key;}
tmp.push(_http_build_query_helper(key,value,arg_separator));}
return tmp.join(arg_separator);}
function hypot(x,y){return Math.sqrt(x*x+y*y)||0;}
function i18n_loc_get_default(){this.php_js=this.php_js||{};return this.php_js.i18nLocale||(i18n_loc_set_default('en_US_POSIX'),'en_US_POSIX');}
function i18n_loc_set_default(name){this.php_js=this.php_js||{};this.php_js.i18nLocales={en_US_POSIX:{sorting:function(str1,str2){return(str1==str2)?0:((str1>str2)?1:-1);}}};this.php_js.i18nLocale=name;return true;}
function idate(format,timestamp){if(format===undefined){throw'idate() expects at least 1 parameter, 0 given';}
if(!format.length||format.length>1){throw'idate format is one char';}
var date=((typeof timestamp==='undefined')?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000)),a;switch(format){case'B':return Math.floor(((date.getUTCHours()*36e2)+(date.getUTCMinutes()*60)+date.getUTCSeconds()+36e2)/86.4)%1e3;case'd':return date.getDate();case'h':return date.getHours()%12||12;case'H':return date.getHours();case'i':return date.getMinutes();case'I':a=date.getFullYear();return 0+(((new Date(a,0))-Date.UTC(a,0))!==((new Date(a,6))-Date.UTC(a,6)));case'L':a=date.getFullYear();return(!(a&3)&&(a%1e2||!(a%4e2)))?1:0;case'm':return date.getMonth()+1;case's':return date.getSeconds();case't':return(new Date(date.getFullYear(),date.getMonth()+1,0)).getDate();case'U':return Math.round(date.getTime()/1000);case'w':return date.getDay();case'W':a=new Date(date.getFullYear(),date.getMonth(),date.getDate()-(date.getDay()||7)+3);return 1+Math.round((a-(new Date(a.getFullYear(),0,4)))/864e5/7);case'y':return parseInt((date.getFullYear()+'').slice(2),10);case'Y':return date.getFullYear();case'z':return Math.floor((date-new Date(date.getFullYear(),0,1))/864e5);case'Z':return-date.getTimezoneOffset()*60;default:throw'Unrecognized date format token';}}
function implode(glue,pieces){var i='',retVal='',tGlue='';if(arguments.length===1){pieces=glue;glue='';}
if(typeof(pieces)==='object'){if(Object.prototype.toString.call(pieces)==='[object Array]'){return pieces.join(glue);}
for(i in pieces){retVal+=tGlue+pieces[i];tGlue=glue;}
return retVal;}
return pieces;}
function import_request_variables(types,prefix){var i=0,current='',url='',vars='',arrayBracketPos=-1,arrName='',win=this.window,requestObj=this.window,getObj=false,cookieObj=false;prefix=prefix||'';var that=this;var _ini_get=function(ini){if(that.php_js&&that.php_js.ini&&that.php_js.ini[ini]&&that.php_js.ini[ini].local_value){return that.php_js.ini[ini].local_value;}
return false;};requestObj=_ini_get('phpjs.requestVarsObj')||requestObj;if(/g/i.test(types)){getObj=_ini_get('phpjs.getVarsObj')||getObj;for(i=0,url=win.location.href,vars=url.substring(url.lastIndexOf('?')+1,url.length).split('&');i<vars.length;i++){current=vars[i].split('=');current[1]=decodeURIComponent(current[1]);arrayBracketPos=current[0].indexOf('[');if(arrayBracketPos!==-1){arrName=current[0].substring(0,arrayBracketPos);arrName=decodeURIComponent(arrName);if(!requestObj[prefix+arrName]){requestObj[prefix+arrName]=[];}
requestObj[prefix+arrName].push(current[1]||null);if(getObj){if(!getObj[prefix+arrName]){getObj[prefix+arrName]=[];}
getObj[prefix+arrName].push(current[1]||null);}}else{current[0]=decodeURIComponent(current[0]);requestObj[prefix+current[0]]=current[1]||null;if(getObj){getObj[prefix+current[0]]=current[1]||null;}}}}
if(/c/i.test(types)){cookieObj=_ini_get('phpjs.cookieVarsObj')||cookieObj;for(i=0,vars=win.document.cookie.split("&");i<vars.length;i++){current=vars[i].split("=");requestObj[prefix+current[0]]=current[1].split(";")[0]||null;if(cookieObj){cookieObj[prefix+current[0]]=current[1].split(";")[0]||null;}}}}
function in_array(needle,haystack,argStrict){var key='',strict=!!argStrict;if(strict){for(key in haystack){if(haystack[key]===needle){return true;}}}else{for(key in haystack){if(haystack[key]==needle){return true;}}}
return false;}
function include(filename){var d=this.window.document;var isXML=d.documentElement.nodeName!=='HTML'||!d.write;var js=d.createElementNS&&isXML?d.createElementNS('http://www.w3.org/1999/xhtml','script'):d.createElement('script');js.setAttribute('type','text/javascript');js.setAttribute('src',filename);js.setAttribute('defer','defer');d.getElementsByTagNameNS&&isXML?(d.getElementsByTagNameNS('http://www.w3.org/1999/xhtml','head')[0]?d.getElementsByTagNameNS('http://www.w3.org/1999/xhtml','head')[0].appendChild(js):d.documentElement.insertBefore(js,d.documentElement.firstChild)):d.getElementsByTagName('head')[0].appendChild(js);var cur_file={};cur_file[this.window.location.href]=1;this.php_js=this.php_js||{};if(!this.php_js.includes){this.php_js.includes=cur_file;}
if(!this.php_js.includes[filename]){this.php_js.includes[filename]=1;}else{this.php_js.includes[filename]++;}
return this.php_js.includes[filename];}
function include_once(filename){var cur_file={};cur_file[this.window.location.href]=1;try{php_js_shared;}catch(e){php_js_shared={};}
if(!php_js_shared.includes){php_js_shared.includes=cur_file;}
if(!php_js_shared.includes[filename]){if(this.include(filename)){return true;}}else{return true;}
return false;}
function inet_ntop(a){var i=0,m='',c=[];a+='';if(a.length===4){return[a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2),a.charCodeAt(3)].join('.');}else if(a.length===16){for(i=0;i<16;i++){c.push(((a.charCodeAt(i++)<<8)+a.charCodeAt(i)).toString(16));}
return c.join(':').replace(/((^|:)0(?=:|$))+:?/g,function(t){m=(t.length>m.length)?t:m;return t;}).replace(m||' ','::');}else{return false;}}
function inet_pton(a){var r,m,x,i,j,f=String.fromCharCode;m=a.match(/^(?:\d{1,3}(?:\.|$)){4}/);if(m){m=m[0].split('.');m=f(m[0])+f(m[1])+f(m[2])+f(m[3]);return m.length===4?m:false;}
r=/^((?:[\da-f]{1,4}(?::|)){0,8})(::)?((?:[\da-f]{1,4}(?::|)){0,8})$/;m=a.match(r);if(m){for(j=1;j<4;j++){if(j===2||m[j].length===0){continue;}
m[j]=m[j].split(':');for(i=0;i<m[j].length;i++){m[j][i]=parseInt(m[j][i],16);if(isNaN(m[j][i])){return false;}
m[j][i]=f(m[j][i]>>8)+f(m[j][i]&0xFF);}
m[j]=m[j].join('');}
x=m[1].length+m[3].length;if(x===16){return m[1]+m[3];}else if(x<16&&m[2].length>0){return m[1]+(new Array(16-x+1)).join('\x00')+m[3];}}
return false;}
function ini_alter(varname,newvalue){return this.ini_set(varname,newvalue);}
function ini_get(varname){if(this.php_js&&this.php_js.ini&&this.php_js.ini[varname]&&this.php_js.ini[varname].local_value!==undefined){if(this.php_js.ini[varname].local_value===null){return'';}
return this.php_js.ini[varname].local_value;}
return'';}
function ini_get_all(extension,details){var key='',ini={},noDetails={},extPattern;this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};if(extension){extPattern=new RegExp('^'+extension+'\\.');for(key in this.php_js.ini){extPattern.lastIndex=0;if(extPattern.test(key)){ini[key]=this.php_js.ini[key];}}}else{for(key in this.php_js.ini){ini[key]=this.php_js.ini[key];}}
if(details!==false){return ini;}
for(key in ini){noDetails[key]=ini[key].local_value;}
return noDetails;}
function ini_restore(varname){if(this.php_js&&this.php_js.ini&&this.php_js.ini[varname]){this.php_js.ini[varname].local_value=this.php_js.ini[varname].global_value;}}
function ini_set(varname,newvalue){var oldval='',that=this;this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};this.php_js.ini[varname]=this.php_js.ini[varname]||{};oldval=this.php_js.ini[varname].local_value;var _setArr=function(oldval){if(typeof oldval==='undefined'){that.php_js.ini[varname].local_value=[];}
that.php_js.ini[varname].local_value.push(newvalue);};switch(varname){case'extension':if(typeof this.dl==='function'){this.dl(newvalue);}
_setArr(oldval,newvalue);break;default:this.php_js.ini[varname].local_value=newvalue;break;}
return oldval;}
function intval(mixed_var,base){var tmp;var type=typeof(mixed_var);if(type==='boolean'){return+mixed_var;}else if(type==='string'){tmp=parseInt(mixed_var,base||10);return(isNaN(tmp)||!isFinite(tmp))?0:tmp;}else if(type==='number'&&isFinite(mixed_var)){return mixed_var|0;}else{return 0;}}
function ip2long(IP){var i=0;IP=IP.match(/^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i);if(!IP){return false;}
IP[0]=0;for(i=1;i<5;i+=1){IP[0]+=!!((IP[i]||'').length);IP[i]=parseInt(IP[i])||0;}
IP.push(256,256,256,256);IP[4+IP[0]]*=Math.pow(256,4-IP[0]);if(IP[1]>=IP[5]||IP[2]>=IP[6]||IP[3]>=IP[7]||IP[4]>=IP[8]){return false;}
return IP[1]*(IP[0]===1||16777216)+IP[2]*(IP[0]<=2||65536)+IP[3]*(IP[0]<=3||256)+IP[4]*1;}
function is_array(mixed_var){var ini,_getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];},_isArray=function(mixed_var){if(!mixed_var||typeof mixed_var!=='object'||typeof mixed_var.length!=='number'){return false;}
var len=mixed_var.length;mixed_var[mixed_var.length]='bogus';if(len!==mixed_var.length){mixed_var.length-=1;return true;}
delete mixed_var[mixed_var.length];return false;};if(!mixed_var||typeof mixed_var!=='object'){return false;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};ini=this.php_js.ini['phpjs.objectsAsArrays'];return _isArray(mixed_var)||((!ini||((parseInt(ini.local_value,10)!==0&&(!ini.local_value.toLowerCase||ini.local_value.toLowerCase()!=='off'))))&&(Object.prototype.toString.call(mixed_var)==='[object Object]'&&_getFuncName(mixed_var.constructor)==='Object'));}
function is_binary(vr){return typeof vr==='string';}
function is_bool(mixed_var){return(typeof mixed_var==='boolean');}
function is_buffer(vr){return typeof vr==='string';}
function is_callable(v,syntax_only,callable_name){var name='',obj={},method='';var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};if(typeof v==='string'){obj=this.window;method=v;name=v;}
else if(Object.prototype.toString.call(v)==='[object Array]'&&v.length===2&&typeof v[0]==='object'&&typeof v[1]==='string'){obj=v[0];method=v[1];name=(obj.constructor&&getFuncName(obj.constructor))+'::'+method;}
else{return false;}
if(syntax_only||typeof obj[method]==='function'){if(callable_name){this.window[callable_name]=name;}
return true;}
return false;}
function is_double(mixed_var){return this.is_float(mixed_var);}
function is_finite(val){var warningType='';if(val===Infinity||val===-Infinity){return false;}
if(typeof val=='object'){warningType=(Object.prototype.toString.call(val)==='[object Array]'?'array':'object');}else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_finite() expects parameter 1 to be double, '+warningType+' given');}
return true;}
function is_float(mixed_var){return+mixed_var===mixed_var&&!!(mixed_var%1);}
function is_infinite(val){var warningType='';if(val===Infinity||val===-Infinity){return true;}
if(typeof val=='object'){warningType=(Object.prototype.toString.call(val)==='[object Array]'?'array':'object');}else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_infinite() expects parameter 1 to be double, '+warningType+' given');}
return false;}
function is_int(mixed_var){return mixed_var===~~mixed_var;}
function is_integer(mixed_var){return this.is_int(mixed_var);}
function is_long(mixed_var){return this.is_float(mixed_var);}
function is_nan(val){var warningType='';if(typeof val=='number'&&isNaN(val)){return true;}
if(typeof val=='object'){warningType=(Object.prototype.toString.call(val)==='[object Array]'?'array':'object');}
else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_nan() expects parameter 1 to be double, '+warningType+' given');}
return false;}
function is_null(mixed_var){return(mixed_var===null);}
function is_numeric(mixed_var){return(typeof(mixed_var)==='number'||typeof(mixed_var)==='string')&&mixed_var!==''&&!isNaN(mixed_var);}
function is_object(mixed_var){if(Object.prototype.toString.call(mixed_var)==='[object Array]'){return false;}
return mixed_var!==null&&typeof mixed_var=='object';}
function is_real(mixed_var){return this.is_float(mixed_var);}
function is_resource(handle){var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};return!(!handle||typeof handle!=='object'||!handle.constructor||getFuncName(handle.constructor)!=='PHPJS_Resource');}
function is_scalar(mixed_var){return(/boolean|number|string/).test(typeof mixed_var);}
function is_string(mixed_var){return(typeof(mixed_var)=='string');}
function is_unicode(vr){if(typeof vr!=='string'){return false;}
var arr=[],any='([\s\S])',highSurrogate='[\uD800-\uDBFF]',lowSurrogate='[\uDC00-\uDFFF]',highSurrogateBeforeAny=new RegExp(highSurrogate+any,'g'),lowSurrogateAfterAny=new RegExp(any+lowSurrogate,'g'),singleLowSurrogate=new RegExp('^'+lowSurrogate+'$'),singleHighSurrogate=new RegExp('^'+highSurrogate+'$');while((arr=highSurrogateBeforeAny.exec(vr))!==null){if(!arr[1]||!arr[1].match(singleLowSurrogate)){return false;}}
while((arr=lowSurrogateAfterAny.exec(vr))!==null){if(!arr[1]||!arr[1].match(singleHighSurrogate)){return false;}}
return true;}
function isset(){var a=arguments,l=a.length,i=0,undef;if(l===0){throw new Error('Empty isset');}
while(i!==l){if(a[i]===undef||a[i]===null){return false;}
i++;}
return true;}
function join(glue,pieces){return this.implode(glue,pieces);}
function json_decode(str_json){var json=this.window.JSON;if(typeof json==='object'&&typeof json.parse==='function'){try{return json.parse(str_json);}catch(err){if(!(err instanceof SyntaxError)){throw new Error('Unexpected error type in json_decode()');}
this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null;}}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var j;var text=str_json;cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if((/^[\],:{}\s]*$/).test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return j;}
this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null;}
function json_encode(mixed_val){var retVal,json=this.window.JSON;try{if(typeof json==='object'&&typeof json.stringify==='function'){retVal=json.stringify(mixed_val);if(retVal===undefined){throw new SyntaxError('json_encode');}
return retVal;}
var value=mixed_val;var quote=function(string){var escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';};var str=function(key,holder){var gap='';var indent='    ';var i=0;var k='';var v='';var length=0;var mind=gap;var partial=[];var value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
if((this.PHPJS_Resource&&value instanceof this.PHPJS_Resource)||(window.PHPJS_Resource&&value instanceof window.PHPJS_Resource)){throw new SyntaxError('json_encode');}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;case'undefined':case'function':default:throw new SyntaxError('json_encode');}};return str('',{'':value});}catch(err){if(!(err instanceof SyntaxError)){throw new Error('Unexpected error type in json_encode()');}
this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null;}}
function json_last_error(){return this.php_js&&this.php_js.last_error_json?this.php_js.last_error_json:0;}
function key(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var cursor=pointers[pointers.indexOf(arr)+1];if(Object.prototype.toString.call(arr)!=='[object Array]'){var ct=0;for(var k in arr){if(ct===cursor){return k;}
ct++;}
return false;}
if(arr.length===0){return false;}
return cursor;}
function krsort(inputArr,sort_flags){var tmp_arr={},keys=[],sorter,i,k,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(b-a);};break;case'SORT_REGULAR':default:sorter=function(b,a){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
for(k in inputArr){if(inputArr.hasOwnProperty(k)){keys.push(k);}}
keys.sort(sorter);this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<keys.length;i++){k=keys[i];tmp_arr[k]=inputArr[k];if(strictForIn){delete inputArr[k];}}
for(i in tmp_arr){if(tmp_arr.hasOwnProperty(i)){populateArr[i]=tmp_arr[i];}}
return strictForIn||populateArr;}
function ksort(inputArr,sort_flags){var tmp_arr={},keys=[],sorter,i,k,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return((a+0)-(b+0));};break;default:sorter=function(a,b){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
for(k in inputArr){if(inputArr.hasOwnProperty(k)){keys.push(k);}}
keys.sort(sorter);this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<keys.length;i++){k=keys[i];tmp_arr[k]=inputArr[k];if(strictForIn){delete inputArr[k];}}
for(i in tmp_arr){if(tmp_arr.hasOwnProperty(i)){populateArr[i]=tmp_arr[i];}}
return strictForIn||populateArr;}
function lcfirst(str){str+='';var f=str.charAt(0).toLowerCase();return f+str.substr(1);}
function lcg_value(){return Math.random();}
function levenshtein(s1,s2){if(s1==s2){return 0;}
var s1_len=s1.length;var s2_len=s2.length;if(s1_len===0){return s2_len;}
if(s2_len===0){return s1_len;}
var split=false;try{split=!('0')[0];}catch(e){split=true;}
if(split){s1=s1.split('');s2=s2.split('');}
var v0=new Array(s1_len+1);var v1=new Array(s1_len+1);var s1_idx=0,s2_idx=0,cost=0;for(s1_idx=0;s1_idx<s1_len+1;s1_idx++){v0[s1_idx]=s1_idx;}
var char_s1='',char_s2='';for(s2_idx=1;s2_idx<=s2_len;s2_idx++){v1[0]=s2_idx;char_s2=s2[s2_idx-1];for(s1_idx=0;s1_idx<s1_len;s1_idx++){char_s1=s1[s1_idx];cost=(char_s1==char_s2)?0:1;var m_min=v0[s1_idx+1]+1;var b=v1[s1_idx]+1;var c=v0[s1_idx]+cost;if(b<m_min){m_min=b;}
if(c<m_min){m_min=c;}
v1[s1_idx+1]=m_min;}
var v_tmp=v0;v0=v1;v1=v_tmp;}
return v0[s1_len];}
function localeconv(){var arr={},prop='';this.setlocale('LC_ALL',0);for(prop in this.php_js.locales[this.php_js.localeCategories.LC_NUMERIC].LC_NUMERIC){arr[prop]=this.php_js.locales[this.php_js.localeCategories.LC_NUMERIC].LC_NUMERIC[prop];}
for(prop in this.php_js.locales[this.php_js.localeCategories.LC_MONETARY].LC_MONETARY){arr[prop]=this.php_js.locales[this.php_js.localeCategories.LC_MONETARY].LC_MONETARY[prop];}
return arr;}
function localtime(timestamp,is_assoc){var t,yday,x,o={};if(timestamp===undefined){t=new Date();}else if(timestamp instanceof Date){t=timestamp;}else{t=new Date(timestamp*1000);}
x=function(t,m){var a=(new Date(t.getFullYear(),0,m,0,0,0,0)).toUTCString();return t-new Date(a.slice(0,a.lastIndexOf(' ')-1));};yday=Math.floor((t-new Date(t.getFullYear(),0,1))/86400000);o={'tm_sec':t.getSeconds(),'tm_min':t.getMinutes(),'tm_hour':t.getHours(),'tm_mday':t.getDate(),'tm_mon':t.getMonth(),'tm_year':t.getFullYear()-1900,'tm_wday':t.getDay(),'tm_yday':yday,'tm_isdst':+(x(t,1)!=x(t,6))};return is_assoc?o:[o.tm_sec,o.tm_min,o.tm_hour,o.tm_mday,o.tm_mon,o.tm_year,o.tm_wday,o.tm_yday,o.tm_isdst];}
function log(arg,base){return(typeof base==='undefined')?Math.log(arg):Math.log(arg)/Math.log(base);}
function log10(arg){return Math.log(arg)/2.302585092994046;}
function log1p(x){var ret=0,n=50;if(x<=-1){return'-INF';}
if(x<0||x>1){return Math.log(1+x);}
for(var i=1;i<n;i++){if((i%2)===0){ret-=Math.pow(x,i)/i;}else{ret+=Math.pow(x,i)/i;}}
return ret;}
function long2ip(proper_address){var output=false;if(!isNaN(proper_address)&&(proper_address>=0||proper_address<=4294967295)){output=Math.floor(proper_address/Math.pow(256,3))+'.'+Math.floor((proper_address%Math.pow(256,3))/Math.pow(256,2))+'.'+Math.floor(((proper_address%Math.pow(256,3))%Math.pow(256,2))/Math.pow(256,1))+'.'+Math.floor((((proper_address%Math.pow(256,3))%Math.pow(256,2))%Math.pow(256,1))/Math.pow(256,0));}
return output;}
function ltrim(str,charlist){charlist=!charlist?' \\s\u00A0':(charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');var re=new RegExp('^['+charlist+']+','g');return(str+'').replace(re,'');}
function mail(to,subject,message,additional_headers,additional_parameters){var _append=function(sm,prop,value){if(!sm[prop]){sm[prop]='';sm[prop]+=value;}else{sm[prop]+=','+value;}};if(this.window.SendMail){var sm=new this.window.SendMail();var from=this.php_js&&this.php_js.ini&&this.php_js.ini.sendmail_from&&this.php_js.ini.sendmail_from.local_value;sm.To=to;sm.Subject=subject;sm.Body=message;sm.From=from;if(additional_headers){var headers=additional_headers.trim().split(/\r?\n/);for(var i=0;i<headers.length;i++){var header=headers[i];var colonPos=header.indexOf(':');if(colonPos===-1){throw new Error('Malformed headers');}
var prop=header.slice(0,colonPos).trim();var value=header.slice(colonPos+1).trim();switch(prop){case'Bcc':case'Cc':case'To':_append(sm,prop,value);break;case'Subject':break;case'Body':break;case'From':default:sm[prop]=value;break;}}}
if(!sm.From){throw new Error('Warning: mail(): "sendmail_from" not set in php.ini');}
return sm.send();}
return false;}
function max(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(Object.prototype.toString.call(obj)==='[object Array]'){return obj;}
else{var ar=[];for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i]);}}
return ar;}},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next){return 0;}
else if(typeof current==='object'){if(typeof next==='object'){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1;}
else if(nl<cl){return-1;}
for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1;}
else if(tmp==-1){return-1;}}
return 0;}
return-1;}
else if(typeof next=='object'){return 1;}
else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0;}
return(current<0?1:-1);}
else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0;}
return(next>0?1:-1);}
if(next==current){return 0;}
return(next>current?1:-1);};if(argc===0){throw new Error('At least one value should be passed to max()');}
else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0]);}
else{throw new Error('Wrong parameter count for max()');}
if(ar.length===0){throw new Error('Array must contain at least one element for max()');}}
else{ar=argv;}
retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==1){retVal=ar[i];}}
return retVal;}
function md5(str){var xl;var rotateLeft=function(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));};var addUnsigned=function(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}
if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}};var _F=function(x,y,z){return(x&y)|((~x)&z);};var _G=function(x,y,z){return(x&z)|(y&(~z));};var _H=function(x,y,z){return(x^y^z);};var _I=function(x,y,z){return(y^(x|(~z)));};var _FF=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_F(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _GG=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_G(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _HH=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_H(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _II=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_I(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var convertToWordArray=function(str){var lWordCount;var lMessageLength=str.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=new Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(str.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}
lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;};var wordToHex=function(lValue){var wordToHexValue="",wordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;wordToHexValue_temp="0"+lByte.toString(16);wordToHexValue=wordToHexValue+wordToHexValue_temp.substr(wordToHexValue_temp.length-2,2);}
return wordToHexValue;};var x=[],k,AA,BB,CC,DD,a,b,c,d,S11=7,S12=12,S13=17,S14=22,S21=5,S22=9,S23=14,S24=20,S31=4,S32=11,S33=16,S34=23,S41=6,S42=10,S43=15,S44=21;str=this.utf8_encode(str);x=convertToWordArray(str);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;xl=x.length;for(k=0;k<xl;k+=16){AA=a;BB=b;CC=c;DD=d;a=_FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=_FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=_FF(c,d,a,b,x[k+2],S13,0x242070DB);b=_FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=_FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=_FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=_FF(c,d,a,b,x[k+6],S13,0xA8304613);b=_FF(b,c,d,a,x[k+7],S14,0xFD469501);a=_FF(a,b,c,d,x[k+8],S11,0x698098D8);d=_FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=_FF(a,b,c,d,x[k+12],S11,0x6B901122);d=_FF(d,a,b,c,x[k+13],S12,0xFD987193);c=_FF(c,d,a,b,x[k+14],S13,0xA679438E);b=_FF(b,c,d,a,x[k+15],S14,0x49B40821);a=_GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=_GG(d,a,b,c,x[k+6],S22,0xC040B340);c=_GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=_GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=_GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=_GG(d,a,b,c,x[k+10],S22,0x2441453);c=_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=_GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=_GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=_GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=_GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=_GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=_GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=_GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=_HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=_HH(d,a,b,c,x[k+8],S32,0x8771F681);c=_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=_HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=_HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=_HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=_HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=_HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=_HH(b,c,d,a,x[k+6],S34,0x4881D05);a=_HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=_HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=_II(a,b,c,d,x[k+0],S41,0xF4292244);d=_II(d,a,b,c,x[k+7],S42,0x432AFF97);c=_II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=_II(b,c,d,a,x[k+5],S44,0xFC93A039);a=_II(a,b,c,d,x[k+12],S41,0x655B59C3);d=_II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=_II(b,c,d,a,x[k+1],S44,0x85845DD1);a=_II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=_II(c,d,a,b,x[k+6],S43,0xA3014314);b=_II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=_II(a,b,c,d,x[k+4],S41,0xF7537E82);d=_II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=_II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=_II(b,c,d,a,x[k+9],S44,0xEB86D391);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD);}
var temp=wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);return temp.toLowerCase();}
function md5_file(str_filename){var buf='';buf=this.file_get_contents(str_filename);if(!buf){return false;}
return this.md5(buf);}
function metaphone(word,phones){word=(word==null?'':word+'').toUpperCase();function isVowel(a){return'AEIOU'.indexOf(a)!==-1;}
function removeDuplicates(word){var wordlength=word.length,char1=word.charAt(0),char2,rebuilt=char1;for(var i=1;i<wordlength;i++){char2=word.charAt(i);if(char2!==char1||char2==='C'||char2==='G'){rebuilt+=char2;}
char1=char2;}
return rebuilt;}
word=removeDuplicates(word);var wordlength=word.length,x=0,metaword='';if(word.substr(0,2)==='WH'){word='W'+word.substr(2);}
var cc=word.charAt(0);var pc='';var nc=word.charAt(1);var nnc='';if(1<=wordlength){switch(cc){case'A':if(nc==='E'){metaword+='E';}else{metaword+='A';}
x+=1;break;case'E':case'I':case'O':case'U':metaword+=cc;x+=1;break;case'G':case'K':case'P':if(nc==='N'){x+=1;}
break;case'W':if(nc==='R'){x+=1;}
break;}}
for(;x<wordlength;x++){cc=word.charAt(x);pc=word.charAt(x-1);nc=word.charAt(x+1);nnc=word.charAt(x+2);if(!isVowel(cc)){switch(cc){case'B':if(pc!=='M'){metaword+='B';}
break;case'C':if(x+1<=wordlength){if(word.substr(x-1,3)!=='SCH'){if(x===0&&(x+2<=wordlength)&&isVowel(nnc)){metaword+='K';}else{metaword+='X';}}else if(word.substr(x+1,2)==='IA'){metaword+='X';}else if('IEY'.indexOf(nc)!==-1){if(x>0){if(pc!=='S'){metaword+='S';}}else{metaword+='S';}}else{metaword+='K';}}else{metaword+='K';}
break;case'D':if(x+2<=wordlength&&nc==='G'&&'EIY'.indexOf(nnc)!==-1){metaword+='J';x+=2;}else{metaword+='T';}
break;case'F':metaword+='F';break;case'G':if(x<wordlength){if((nc==='N'&&x+1===wordlength-1)||(nc==='N'&&nnc==='S'&&x+2===wordlength-1)){break;}
if(word.substr(x+1,3)==='NED'&&x+3===wordlength-1){break;}
if(word.substr(x-2,3)==='ING'&&x===wordlength-1){break;}
if(x+1<=wordlength-1&&word.substr(x-2,4)==='OUGH'){metaword+='F';break;}
if(nc==='H'&&x+2<=wordlength){if(isVowel(nnc)){metaword+='K';}}else if(x+1===wordlength){if(nc!=='N'){metaword+='K';}}else if(x+3===wordlength){if(word.substr(x+1,3)!=='NED'){metaword+='K';}}else if(x+1<=wordlength){if('EIY'.indexOf(nc)!==-1){if(pc!='G'){metaword+='J';}}else if(x===0||pc!=='D'||'EIY'.indexOf(nc)===-1){metaword+='K';}}else{metaword+='K';}}else{metaword+='K';}
break;case'M':case'J':case'N':case'R':case'L':metaword+=cc;break;case'Q':metaword+='K';break;case'V':metaword+='F';break;case'Z':metaword+='S';break;case'X':metaword+=(x===0)?'S':'KS';break;case'K':if(x===0||pc!=='C'){metaword+='K';}
break;case'P':if(x+1<=wordlength&&nc==='H'){metaword+='F';}else{metaword+='P';}
break;case'Y':if(x+1>wordlength||isVowel(nc)){metaword+='Y';}
break;case'H':if(x===0||'CSPTG'.indexOf(pc)===-1){if(isVowel(nc)===true){metaword+='H';}}
break;case'S':if(x+1<=wordlength){if(nc==='H'){metaword+='X';}else if(x+2<=wordlength&&nc==='I'&&'AO'.indexOf(nnc)!==-1){metaword+='X';}else{metaword+='S';}}else{metaword+='S';}
break;case'T':if(x+1<=wordlength){if(nc==='H'){metaword+='0';}else if(x+2<=wordlength&&nc==='I'&&'AO'.indexOf(nnc)!==-1){metaword+='X';}else{metaword+='T';}}else{metaword+='T';}
break;case'W':if(x+1<=wordlength&&isVowel(nc)){metaword+='W';}
break;}}}
phones=parseInt(phones,10);if(metaword.length>phones){return metaword.substr(0,phones);}
return metaword;}
function method_exists(obj,method){if(typeof obj==='string'){return this.window[obj]&&typeof this.window[obj][method]==='function';}
return typeof obj[method]==='function';}
function microtime(get_as_float){var now=new Date().getTime()/1000;var s=parseInt(now,10);return(get_as_float)?now:(Math.round((now-s)*1000)/1000)+' '+s;}
function min(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(Object.prototype.toString.call(obj)==='[object Array]'){return obj;}
var ar=[];for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i]);}}
return ar;},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next){return 0;}
else if(typeof current==='object'){if(typeof next==='object'){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1;}
else if(nl<cl){return-1;}
for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1;}
else if(tmp==-1){return-1;}}
return 0;}
return-1;}
else if(typeof next=='object'){return 1;}
else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0;}
return(current<0?1:-1);}
else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0;}
return(next>0?1:-1);}
if(next==current){return 0;}
return(next>current?1:-1);};if(argc===0){throw new Error('At least one value should be passed to min()');}
else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0]);}
else{throw new Error('Wrong parameter count for min()');}
if(ar.length===0){throw new Error('Array must contain at least one element for min()');}}
else{ar=argv;}
retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==-1){retVal=ar[i];}}
return retVal;}
function mktime(){var d=new Date(),r=arguments,i=0,e=['Hours','Minutes','Seconds','Month','Date','FullYear'];for(i=0;i<e.length;i++){if(typeof r[i]==='undefined'){r[i]=d['get'+e[i]]();r[i]+=(i===3);}else{r[i]=parseInt(r[i],10);if(isNaN(r[i])){return false;}}}
r[5]+=(r[5]>=0?(r[5]<=69?2e3:(r[5]<=100?1900:0)):0);d.setFullYear(r[5],r[3]-1,r[4]);d.setHours(r[0],r[1],r[2]);return(d.getTime()/1e3>>0)-(d.getTime()<0);}
function money_format(format,number){if(typeof number!=='number'){return null;}
var regex=/%((=.|[+^(!-])*?)(\d*?)(#(\d+))?(\.(\d+))?([in%])/g;this.setlocale('LC_ALL',0);var monetary=this.php_js.locales[this.php_js.localeCategories['LC_MONETARY']]['LC_MONETARY'];var doReplace=function(n0,flags,n2,width,n4,left,n6,right,conversion){var value='',repl='';if(conversion==='%'){return'%';}
var fill=flags&&(/=./).test(flags)?flags.match(/=(.)/)[1]:' ';var showCurrSymbol=!flags||flags.indexOf('!')===-1;width=parseInt(width,10)||0;var neg=number<0;number=number+'';number=neg?number.slice(1):number;var decpos=number.indexOf('.');var integer=decpos!==-1?number.slice(0,decpos):number;var fraction=decpos!==-1?number.slice(decpos+1):'';var _str_splice=function(integerStr,idx,thous_sep){var integerArr=integerStr.split('');integerArr.splice(idx,0,thous_sep);return integerArr.join('');};var init_lgth=integer.length;left=parseInt(left,10);var filler=init_lgth<left;if(filler){var fillnum=left-init_lgth;integer=new Array(fillnum+1).join(fill)+integer;}
if(flags.indexOf('^')===-1){var thous_sep=monetary.mon_thousands_sep;var mon_grouping=monetary.mon_grouping;if(mon_grouping[0]<integer.length){for(var i=0,idx=integer.length;i<mon_grouping.length;i++){idx-=mon_grouping[i];if(idx<0){break;}
if(filler&&idx<fillnum){thous_sep=fill;}
integer=_str_splice(integer,idx,thous_sep);}}
if(mon_grouping[i-1]>0){while(idx>mon_grouping[i-1]){idx-=mon_grouping[i-1];if(filler&&idx<fillnum){thous_sep=fill;}
integer=_str_splice(integer,idx,thous_sep);}}}
if(right==='0'){value=integer;}else{var dec_pt=monetary.mon_decimal_point;if(right===''||right===undefined){right=conversion==='i'?monetary.int_frac_digits:monetary.frac_digits;}
right=parseInt(right,10);if(right===0){fraction='';dec_pt='';}else if(right<fraction.length){fraction=Math.round(parseFloat(fraction.slice(0,right)+'.'+fraction.substr(right,1),10))+'';}else if(right>fraction.length){fraction+=new Array(right-fraction.length+1).join('0');}
value=integer+dec_pt+fraction;}
var symbol='';if(showCurrSymbol){symbol=conversion==='i'?monetary.int_curr_symbol:monetary.currency_symbol;}
var sign_posn=neg?monetary.n_sign_posn:monetary.p_sign_posn;var sep_by_space=neg?monetary.n_sep_by_space:monetary.p_sep_by_space;var cs_precedes=neg?monetary.n_cs_precedes:monetary.p_cs_precedes;if(flags.indexOf('(')!==-1){repl=(cs_precedes?symbol+(sep_by_space===1?' ':''):'')+value+(!cs_precedes?(sep_by_space===1?' ':'')+symbol:'');if(neg){repl='('+repl+')';}else{repl=' '+repl+' ';}}else{var pos_sign=monetary.positive_sign;var neg_sign=monetary.negative_sign;var sign=neg?(neg_sign):(pos_sign);var otherSign=neg?(pos_sign):(neg_sign);var signPadding='';if(sign_posn){signPadding=new Array(otherSign.length-sign.length+1).join(' ');}
var valueAndCS='';switch(sign_posn){case 0:valueAndCS=cs_precedes?symbol+(sep_by_space===1?' ':'')+value:value+(sep_by_space===1?' ':'')+symbol;repl='('+valueAndCS+')';break;case 1:valueAndCS=cs_precedes?symbol+(sep_by_space===1?' ':'')+value:value+(sep_by_space===1?' ':'')+symbol;repl=signPadding+sign+(sep_by_space===2?' ':'')+valueAndCS;break;case 2:valueAndCS=cs_precedes?symbol+(sep_by_space===1?' ':'')+value:value+(sep_by_space===1?' ':'')+symbol;repl=valueAndCS+(sep_by_space===2?' ':'')+sign+signPadding;break;case 3:repl=cs_precedes?signPadding+sign+(sep_by_space===2?' ':'')+symbol+(sep_by_space===1?' ':'')+value:value+(sep_by_space===1?' ':'')+sign+signPadding+(sep_by_space===2?' ':'')+symbol;break;case 4:repl=cs_precedes?symbol+(sep_by_space===2?' ':'')+signPadding+sign+(sep_by_space===1?' ':'')+value:value+(sep_by_space===1?' ':'')+symbol+(sep_by_space===2?' ':'')+sign+signPadding;break;}}
var padding=width-repl.length;if(padding>0){padding=new Array(padding+1).join(' ');if(flags.indexOf('-')!==-1){repl+=padding;}else{repl=padding+repl;}}
return repl;};return format.replace(regex,doReplace);}
function mt_getrandmax(){return 2147483647;}
function mt_rand(min,max){var argc=arguments.length;if(argc===0){min=0;max=2147483647;}else if(argc===1){throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');}
return Math.floor(Math.random()*(max-min+1))+min;}
function natcasesort(inputArr){var valArr=[],k,i,ret,that=this,strictForIn=false,populateArr={};this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return that.strnatcasecmp(a[1],b[1]);});for(i=0;i<valArr.length;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function natsort(inputArr){var valArr=[],k,i,ret,that=this,strictForIn=false,populateArr={};this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return that.strnatcmp(a[1],b[1]);});for(i=0;i<valArr.length;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function next(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);var cursor=pointers[arrpos+1];if(Object.prototype.toString.call(arr)!=='[object Array]'){var ct=0;for(var k in arr){if(ct===cursor+1){pointers[arrpos+1]+=1;return arr[k];}
ct++;}
return false;}
if(arr.length===0||cursor===(arr.length-1)){return false;}
pointers[arrpos+1]+=1;return arr[pointers[arrpos+1]];}
function nl2br(str,is_xhtml){var breakTag=(is_xhtml||typeof is_xhtml==='undefined')?'<br />':'<br>';return(str+'').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+breakTag+'$2');}
function nl_langinfo(item){this.setlocale('LC_ALL',0);var loc=this.php_js.locales[this.php_js.localeCategories.LC_TIME];if(item.indexOf('ABDAY_')===0){return loc.LC_TIME.a[parseInt(item.replace(/^ABDAY_/,''),10)-1];}else if(item.indexOf('DAY_')===0){return loc.LC_TIME.A[parseInt(item.replace(/^DAY_/,''),10)-1];}else if(item.indexOf('ABMON_')===0){return loc.LC_TIME.b[parseInt(item.replace(/^ABMON_/,''),10)-1];}else if(item.indexOf('MON_')===0){return loc.LC_TIME.B[parseInt(item.replace(/^MON_/,''),10)-1];}else{switch(item){case'AM_STR':return loc.LC_TIME.p[0];case'PM_STR':return loc.LC_TIME.p[1];case'D_T_FMT':return loc.LC_TIME.c;case'D_FMT':return loc.LC_TIME.x;case'T_FMT':return loc.LC_TIME.X;case'T_FMT_AMPM':return loc.LC_TIME.r;case'ERA':case'ERA_YEAR':case'ERA_D_T_FMT':case'ERA_D_FMT':case'ERA_T_FMT':return loc.LC_TIME[item];}
loc=this.php_js.locales[this.php_js.localeCategories.LC_MONETARY];if(item==='CRNCYSTR'){item='CURRENCY_SYMBOL';}
switch(item){case'INT_CURR_SYMBOL':case'CURRENCY_SYMBOL':case'MON_DECIMAL_POINT':case'MON_THOUSANDS_SEP':case'POSITIVE_SIGN':case'NEGATIVE_SIGN':case'INT_FRAC_DIGITS':case'FRAC_DIGITS':case'P_CS_PRECEDES':case'P_SEP_BY_SPACE':case'N_CS_PRECEDES':case'N_SEP_BY_SPACE':case'P_SIGN_POSN':case'N_SIGN_POSN':return loc.LC_MONETARY[item.toLowerCase()];case'MON_GROUPING':return loc.LC_MONETARY[item.toLowerCase()];}
loc=this.php_js.locales[this.php_js.localeCategories.LC_NUMERIC];switch(item){case'RADIXCHAR':case'DECIMAL_POINT':return loc.LC_NUMERIC[item.toLowerCase()];case'THOUSEP':case'THOUSANDS_SEP':return loc.LC_NUMERIC[item.toLowerCase()];case'GROUPING':return loc.LC_NUMERIC[item.toLowerCase()];}
loc=this.php_js.locales[this.php_js.localeCategories.LC_MESSAGES];switch(item){case'YESEXPR':case'NOEXPR':case'YESSTR':case'NOSTR':return loc.LC_MESSAGES[item];}
loc=this.php_js.locales[this.php_js.localeCategories.LC_CTYPE];if(item==='CODESET'){return loc.LC_CTYPE[item];}
return false;}}
function number_format(number,decimals,dec_point,thousands_sep){number=(number+'').replace(/[^0-9+\-Ee.]/g,'');var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),sep=(typeof thousands_sep==='undefined')?',':thousands_sep,dec=(typeof dec_point==='undefined')?'.':dec_point,s='',toFixedFix=function(n,prec){var k=Math.pow(10,prec);return''+Math.round(n*k)/k;};s=(prec?toFixedFix(n,prec):''+Math.round(n)).split('.');if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep);}
if((s[1]||'').length<prec){s[1]=s[1]||'';s[1]+=new Array(prec-s[1].length+1).join('0');}
return s.join(dec);}
function ob_clean(){var PHP_OUTPUT_HANDLER_START=1,PHP_OUTPUT_HANDLER_CONT=2;this.php_js=this.php_js||{};var phpjs=this.php_js,obs=phpjs.obs;if(!obs||!obs.length){return;}
var flags=0,ob=obs[obs.length-1],buffer=ob.buffer;if(ob.callback){if(!ob.status){flags|=PHP_OUTPUT_HANDLER_START;}
flags|=PHP_OUTPUT_HANDLER_CONT;ob.status=1;buffer=ob.callback(buffer,flags);}
ob.buffer='';}
function ob_end_clean(){var PHP_OUTPUT_HANDLER_START=1,PHP_OUTPUT_HANDLER_END=4;this.php_js=this.php_js||{};var phpjs=this.php_js,obs=phpjs.obs;if(!obs||!obs.length){return false;}
var flags=0,ob=obs[obs.length-1],buffer=ob.buffer;if(ob.callback){if(!ob.status){flags|=PHP_OUTPUT_HANDLER_START;}
flags|=PHP_OUTPUT_HANDLER_END;ob.status=2;buffer=ob.callback(buffer,flags);}
obs.pop();return true;}
function ob_end_flush(){var PHP_OUTPUT_HANDLER_START=1,PHP_OUTPUT_HANDLER_END=4;this.php_js=this.php_js||{};var obs=this.php_js.obs;if(!obs||!obs.length){return false;}
var flags=0,ob=obs[obs.length-1],buffer=ob.buffer;if(ob.callback){if(!ob.status){flags|=PHP_OUTPUT_HANDLER_START;}
flags|=PHP_OUTPUT_HANDLER_END;ob.status=2;buffer=ob.callback(buffer,flags);}
obs.pop();if(obs.length){ob=obs[obs.length-1];ob.buffer+=buffer;}else{this.echo(buffer);}
return true;}
function ob_flush(){var PHP_OUTPUT_HANDLER_START=1,PHP_OUTPUT_HANDLER_CONT=2;this.php_js=this.php_js||{};var phpjs=this.php_js,obs=phpjs.obs;if(!obs||!obs.length){return;}
var flags=0,ob=obs[obs.length-1],buffer=ob.buffer;if(ob.callback){if(!ob.status){flags|=PHP_OUTPUT_HANDLER_START;}
flags|=PHP_OUTPUT_HANDLER_CONT;ob.status=1;buffer=ob.callback(buffer,flags);}
if(obs.length>1){obs[obs.length-2].buffer+=buffer;}else{var flushing=this.php_js.flushing;this.php_js.flushing=true;this.echo(buffer);this.php_js.flushing=flushing;}
ob.buffer='';}
function ob_get_clean(){var PHP_OUTPUT_HANDLER_START=1,PHP_OUTPUT_HANDLER_END=4;this.php_js=this.php_js||{};var phpjs=this.php_js,obs=phpjs.obs;if(!obs||!obs.length){return false;}
var flags=0,ob=obs[obs.length-1],buffer=ob.buffer;if(ob.callback){if(!ob.status){flags|=PHP_OUTPUT_HANDLER_START;}
flags|=PHP_OUTPUT_HANDLER_END;ob.status=2;buffer=ob.callback(buffer,flags);}
obs.pop();return buffer;}
function ob_get_contents(){this.php_js=this.php_js||{};var phpjs=this.php_js,ini=phpjs.ini,obs=phpjs.obs;if(!obs||!obs.length){return(ini&&ini.output_buffering&&(typeof ini.output_buffering.local_value!=='string'||ini.output_buffering.local_value.toLowerCase()!=='off'))?'':false;}
return obs[obs.length-1].buffer;}
function ob_get_flush(){var PHP_OUTPUT_HANDLER_START=1,PHP_OUTPUT_HANDLER_END=4;this.php_js=this.php_js||{};var phpjs=this.php_js,obs=phpjs.obs;if(!obs||!obs.length){return false;}
var flags=0,ob=obs[obs.length-1],buffer=ob.buffer;if(ob.callback){if(!ob.status){flags|=PHP_OUTPUT_HANDLER_START;}
flags|=PHP_OUTPUT_HANDLER_END;ob.status=2;buffer=ob.callback(buffer,flags);}
obs.pop();if(obs.length){ob=obs[obs.length-1];ob.buffer+=buffer;}else{this.echo(buffer);}
return buffer;}
function ob_get_length(){this.php_js=this.php_js||{};var phpjs=this.php_js,ini=phpjs.ini,obs=phpjs.obs;if(!obs||!obs.length){return(ini&&ini['output_buffering']&&(typeof ini['output_buffering'].local_value!=='string'||ini['output_buffering'].local_value.toLowerCase()!=='off'))?0:false;}
return obs[obs.length-1].buffer.length;}
function ob_get_level(){this.php_js=this.php_js||{};var phpjs=this.php_js,ini=phpjs.ini,obs=phpjs.obs;if(!obs||!obs.length){return(ini&&ini['output_buffering']&&(typeof ini['output_buffering'].local_value!=='string'||ini['output_buffering'].local_value.toLowerCase()!=='off'))?1:0;}
return obs.length;}
function ob_get_status(full_status){var i=0,retObj={},ob={},retArr=[],name='';var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};this.php_js=this.php_js||{};var phpjs=this.php_js,ini=phpjs.ini,obs=phpjs.obs;if(!obs||!obs.length){if(ini&&ini.output_buffering&&(typeof ini.output_buffering.local_value!=='string'||ini.output_buffering.local_value.toLowerCase()!=='off')){retObj={type:1,status:0,name:'default output handler',del:true};if(full_status){retObj.chunk_size=4096;return[retObj];}else{retObj.level=1;return retObj;}}
return retArr;}
if(full_status){for(i=0;i<obs.length;i++){ob=obs[i];name=ob.callback&&getFuncName(ob.callback)?(getFuncName(ob.callback)==='URLRewriter'?'URL-Rewriter':getFuncName(ob.callback)):undefined;retObj={chunk_size:ob.chunk_size,name:name,del:ob.erase,type:ob.type,status:ob.status};if(ob.size){retObj.size=ob.size;}
if(ob.block_size){retObj.block_size=ob.block_size;}
retArr.push(retObj);}
return retArr;}
ob=obs[phpjs.obs.length-1];name=getFuncName(ob.callback);return{level:phpjs.obs.length,name:name,del:ob.erase,type:ob.type,status:ob.status};}
function ob_list_handlers(){var i=0,arr=[],name='',cbname='';var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};this.php_js=this.php_js||{};var phpjs=this.php_js,ini=phpjs.ini;if(!phpjs.obs||!phpjs.obs.length){if(ini&&ini['output_buffering']&&(typeof ini['output_buffering'].local_value!=='string'||ini['output_buffering'].local_value.toLowerCase()!=='off')){return['default output handler'];}
return arr;}
for(i=0;i<phpjs.obs.length;i++){cbname=getFuncName(phpjs.obs[i].callback);name=cbname===''?'default output handler':cbname==='URLRewriter'?'URL-Rewriter':cbname;arr.push(name);}
return arr;}
function ob_start(output_callback,chunk_size,erase){var bufferObj={},internalType=false,extra=false;erase=!(erase===false);chunk_size=chunk_size===1?4096:(chunk_size||0);this.php_js=this.php_js||{};this.php_js.obs=this.php_js.obs||[];var phpjs=this.php_js,ini=phpjs.ini,obs=phpjs.obs;if(!obs&&(ini&&ini.output_buffering&&(typeof ini.output_buffering.local_value!=='string'||ini.output_buffering.local_value.toLowerCase()!=='off'))){extra=true;}
if(typeof output_callback==='string'){if(output_callback==='URL-Rewriter'){internalType=true;output_callback=function URLRewriter(){};}
if(typeof this.window[output_callback]==='function'){output_callback=this.window[output_callback];}else{return false;}}
bufferObj={erase:erase,chunk_size:chunk_size,callback:output_callback,type:1,status:0,buffer:''};if(internalType){bufferObj.type=0;}
obs.push(bufferObj);if(extra){return this.ob_start();}
return true;}
function octdec(oct_string){oct_string=(oct_string+'').replace(/[^0-7]/gi,'');return parseInt(oct_string,8);}
function ord(string){var str=string+'',code=str.charCodeAt(0);if(0xD800<=code&&code<=0xDBFF){var hi=code;if(str.length===1){return code;}
var low=str.charCodeAt(1);return((hi-0xD800)*0x400)+(low-0xDC00)+0x10000;}
if(0xDC00<=code&&code<=0xDFFF){return code;}
return code;}
function pack(format){var formatPointer=0,argumentPointer=1,result='',argument='',i=0,r=[],instruction,quantifier,word,precisionBits,exponentBits,extraNullCount;var bias,minExp,maxExp,minUnnormExp,status,exp,len,bin,signal,n,intPart,floatPart,lastBit,rounded,j,k,tmpResult;while(formatPointer<format.length){instruction=format[formatPointer];quantifier='';formatPointer++;while((formatPointer<format.length)&&(format[formatPointer].match(/[\d\*]/)!==null)){quantifier+=format[formatPointer];formatPointer++;}
if(quantifier===''){quantifier='1';}
switch(instruction){case'a':case'A':if(typeof arguments[argumentPointer]==='undefined'){throw new Error('Warning:  pack() Type '+instruction+': not enough arguments');}else{argument=String(arguments[argumentPointer]);}
if(quantifier==='*'){quantifier=argument.length;}
for(i=0;i<quantifier;i++){if(typeof argument[i]==='undefined'){if(instruction==='a'){result+=String.fromCharCode(0);}else{result+=' ';}}else{result+=argument[i];}}
argumentPointer++;break;case'h':case'H':if(typeof arguments[argumentPointer]==='undefined'){throw new Error('Warning: pack() Type '+instruction+': not enough arguments');}else{argument=arguments[argumentPointer];}
if(quantifier==='*'){quantifier=argument.length;}
if(quantifier>argument.length){throw new Error('Warning: pack() Type '+instruction+': not enough characters in string');}
for(i=0;i<quantifier;i+=2){word=argument[i];if(((i+1)>=quantifier)||typeof(argument[i+1])==='undefined'){word+='0';}else{word+=argument[i+1];}
if(instruction==='h'){word=word[1]+word[0];}
result+=String.fromCharCode(parseInt(word,16));}
argumentPointer++;break;case'c':case'C':if(quantifier==='*'){quantifier=arguments.length-argumentPointer;}
if(quantifier>(arguments.length-argumentPointer)){throw new Error('Warning:  pack() Type '+instruction+': too few arguments');}
for(i=0;i<quantifier;i++){result+=String.fromCharCode(arguments[argumentPointer]);argumentPointer++;}
break;case's':case'S':case'v':if(quantifier==='*'){quantifier=arguments.length-argumentPointer;}
if(quantifier>(arguments.length-argumentPointer)){throw new Error('Warning:  pack() Type '+instruction+': too few arguments');}
for(i=0;i<quantifier;i++){result+=String.fromCharCode(arguments[argumentPointer]&0xFF);result+=String.fromCharCode(arguments[argumentPointer]>>8&0xFF);argumentPointer++;}
break;case'n':if(quantifier==='*'){quantifier=arguments.length-argumentPointer;}
if(quantifier>(arguments.length-argumentPointer)){throw new Error('Warning:  pack() Type '+instruction+': too few arguments');}
for(i=0;i<quantifier;i++){result+=String.fromCharCode(arguments[argumentPointer]>>8&0xFF);result+=String.fromCharCode(arguments[argumentPointer]&0xFF);argumentPointer++;}
break;case'i':case'I':case'l':case'L':case'V':if(quantifier==='*'){quantifier=arguments.length-argumentPointer;}
if(quantifier>(arguments.length-argumentPointer)){throw new Error('Warning:  pack() Type '+instruction+': too few arguments');}
for(i=0;i<quantifier;i++){result+=String.fromCharCode(arguments[argumentPointer]&0xFF);result+=String.fromCharCode(arguments[argumentPointer]>>8&0xFF);result+=String.fromCharCode(arguments[argumentPointer]>>16&0xFF);result+=String.fromCharCode(arguments[argumentPointer]>>24&0xFF);argumentPointer++;}
break;case'N':if(quantifier==='*'){quantifier=arguments.length-argumentPointer;}
if(quantifier>(arguments.length-argumentPointer)){throw new Error('Warning:  pack() Type '+instruction+': too few arguments');}
for(i=0;i<quantifier;i++){result+=String.fromCharCode(arguments[argumentPointer]>>24&0xFF);result+=String.fromCharCode(arguments[argumentPointer]>>16&0xFF);result+=String.fromCharCode(arguments[argumentPointer]>>8&0xFF);result+=String.fromCharCode(arguments[argumentPointer]&0xFF);argumentPointer++;}
break;case'f':case'd':precisionBits=23;exponentBits=8;if(instruction==='d'){precisionBits=52;exponentBits=11;}
if(quantifier==='*'){quantifier=arguments.length-argumentPointer;}
if(quantifier>(arguments.length-argumentPointer)){throw new Error('Warning:  pack() Type '+instruction+': too few arguments');}
for(i=0;i<quantifier;i++){argument=arguments[argumentPointer];bias=Math.pow(2,exponentBits-1)-1;minExp=-bias+1;maxExp=bias;minUnnormExp=minExp-precisionBits;status=isNaN(n=parseFloat(argument))||n===-Infinity||n===+Infinity?n:0;exp=0;len=2*bias+1+precisionBits+3;bin=new Array(len);signal=(n=status!==0?0:n)<0;n=Math.abs(n);intPart=Math.floor(n);floatPart=n-intPart;for(k=len;k;){bin[--k]=0;}
for(k=bias+2;intPart&&k;){bin[--k]=intPart%2;intPart=Math.floor(intPart/2);}
for(k=bias+1;floatPart>0&&k;--floatPart){(bin[++k]=((floatPart*=2)>=1)-0);}
for(k=-1;++k<len&&!bin[k];){}
if(bin[(lastBit=precisionBits-1+(k=(exp=bias+1-k)>=minExp&&exp<=maxExp?k+1:bias+1-(exp=minExp-1)))+1]){if(!(rounded=bin[lastBit])){for(j=lastBit+2;!rounded&&j<len;rounded=bin[j++]){}}
for(j=lastBit+1;rounded&&--j>=0;(bin[j]=!bin[j]-0)&&(rounded=0)){}}
for(k=k-2<0?-1:k-3;++k<len&&!bin[k];){}
if((exp=bias+1-k)>=minExp&&exp<=maxExp){++k;}else{if(exp<minExp){if(exp!==bias+1-len&&exp<minUnnormExp){}
k=bias+1-(exp=minExp-1);}}
if(intPart||status!==0){exp=maxExp+1;k=bias+2;if(status===-Infinity){signal=1;}else if(isNaN(status)){bin[k]=1;}}
n=Math.abs(exp+bias);tmpResult='';for(j=exponentBits+1;--j;){tmpResult=(n%2)+tmpResult;n=n>>=1;}
n=0;j=0;k=(tmpResult=(signal?'1':'0')+tmpResult+bin.slice(k,k+precisionBits).join('')).length;r=[];for(;k;){n+=(1<<j)*tmpResult.charAt(--k);if(j===7){r[r.length]=String.fromCharCode(n);n=0;}
j=(j+1)%8;}
r[r.length]=n?String.fromCharCode(n):'';result+=r.join('');argumentPointer++;}
break;case'x':if(quantifier==='*'){throw new Error('Warning: pack(): Type x: \'*\' ignored');}
for(i=0;i<quantifier;i++){result+=String.fromCharCode(0);}
break;case'X':if(quantifier==='*'){throw new Error('Warning: pack(): Type X: \'*\' ignored');}
for(i=0;i<quantifier;i++){if(result.length===0){throw new Error('Warning: pack(): Type X:'+' outside of string');}else{result=result.substring(0,result.length-1);}}
break;case'@':if(quantifier==='*'){throw new Error('Warning: pack(): Type X: \'*\' ignored');}
if(quantifier>result.length){extraNullCount=quantifier-result.length;for(i=0;i<extraNullCount;i++){result+=String.fromCharCode(0);}}
if(quantifier<result.length){result=result.substring(0,quantifier);}
break;default:throw new Error('Warning:  pack() Type '+instruction+': unknown format code');}}
if(argumentPointer<arguments.length){throw new Error('Warning: pack(): '+(arguments.length-argumentPointer)+' arguments unused');}
return result;}
function parse_str(str,array){var glue1='=',glue2='&',array2=String(str).replace(/^&?([\s\S]*?)&?$/,'$1').split(glue2),i,j,chr,tmp,key,value,bracket,keys,evalStr,that=this,fixStr=function(str){return that.urldecode(str).replace(/([\\"'])/g,'\\$1').replace(/\n/g,'\\n').replace(/\r/g,'\\r');};if(!array){array=this.window;}
for(i=0;i<array2.length;i++){tmp=array2[i].split(glue1);if(tmp.length<2){tmp=[tmp,''];}
key=fixStr(tmp[0]);value=fixStr(tmp[1]);while(key.charAt(0)===' '){key=key.substr(1);}
if(key.indexOf('\0')!==-1){key=key.substr(0,key.indexOf('\0'));}
if(key&&key.charAt(0)!=='['){keys=[];bracket=0;for(j=0;j<key.length;j++){if(key.charAt(j)==='['&&!bracket){bracket=j+1;}else if(key.charAt(j)===']'){if(bracket){if(!keys.length){keys.push(key.substr(0,bracket-1));}
keys.push(key.substr(bracket,j-bracket));bracket=0;if(key.charAt(j+1)!=='['){break;}}}}
if(!keys.length){keys=[key];}
for(j=0;j<keys[0].length;j++){chr=keys[0].charAt(j);if(chr===' '||chr==='.'||chr==='['){keys[0]=keys[0].substr(0,j)+'_'+keys[0].substr(j+1);}
if(chr==='['){break;}}
evalStr='array';for(j=0;j<keys.length;j++){key=keys[j];if((key!==''&&key!==' ')||j===0){key="'"+key+"'";}else{key=eval(evalStr+'.push([]);')-1;}
evalStr+='['+key+']';if(j!==keys.length-1&&eval('typeof '+evalStr)==='undefined'){eval(evalStr+' = [];');}}
evalStr+=" = '"+value+"';\n";eval(evalStr);}}}
function parse_url(str,component){var key=['source','scheme','authority','userInfo','user','pass','host','port','relative','path','directory','file','query','fragment'],ini=(this.php_js&&this.php_js.ini)||{},mode=(ini['phpjs.parse_url.mode']&&ini['phpjs.parse_url.mode'].local_value)||'php',parser={php:/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};var m=parser[mode].exec(str),uri={},i=14;while(i--){if(m[i]){uri[key[i]]=m[i];}}
if(component){return uri[component.replace('PHP_URL_','').toLowerCase()];}
if(mode!=='php'){var name=(ini['phpjs.parse_url.queryKey']&&ini['phpjs.parse_url.queryKey'].local_value)||'queryKey';parser=/(?:^|&)([^&=]*)=?([^&]*)/g;uri[name]={};uri[key[12]].replace(parser,function($0,$1,$2){if($1){uri[name][$1]=$2;}});}
delete uri.source;return uri;}
function pathinfo(path,options){var opt='',optName='',optTemp=0,tmp_arr={},cnt=0,i=0;var have_basename=false,have_extension=false,have_filename=false;if(!path){return false;}
if(!options){options='PATHINFO_ALL';}
var OPTS={'PATHINFO_DIRNAME':1,'PATHINFO_BASENAME':2,'PATHINFO_EXTENSION':4,'PATHINFO_FILENAME':8,'PATHINFO_ALL':0};for(optName in OPTS){OPTS.PATHINFO_ALL=OPTS.PATHINFO_ALL|OPTS[optName];}
if(typeof options!=='number'){options=[].concat(options);for(i=0;i<options.length;i++){if(OPTS[options[i]]){optTemp=optTemp|OPTS[options[i]];}}
options=optTemp;}
var __getExt=function(path){var str=path+'';var dotP=str.lastIndexOf('.')+1;return str.substr(dotP);};if(options&OPTS.PATHINFO_DIRNAME){tmp_arr.dirname=this.dirname(path);}
if(options&OPTS.PATHINFO_BASENAME){if(false===have_basename){have_basename=this.basename(path);}
tmp_arr.basename=have_basename;}
if(options&OPTS.PATHINFO_EXTENSION){if(false===have_basename){have_basename=this.basename(path);}
if(false===have_extension){have_extension=__getExt(have_basename);}
tmp_arr.extension=have_extension;}
if(options&OPTS.PATHINFO_FILENAME){if(false===have_basename){have_basename=this.basename(path);}
if(false===have_extension){have_extension=__getExt(have_basename);}
if(false===have_filename){have_filename=have_basename.substr(0,(have_basename.length-have_extension.length)-1);}
tmp_arr.filename=have_filename;}
cnt=0;for(opt in tmp_arr){cnt++;}
if(cnt==1){return tmp_arr[opt];}
return tmp_arr;}
function pclose(handle){if(!handle||handle.opener!=='popen'){return false;}
try{delete this.php_js.resourceDataPointer[handle.id];delete this.php_js.resourceData[handle.id];}catch(e){return false;}
return true;}
function php_ini_loaded_file(){if(!this.php_js||!this.php_js.ini_loaded_file){return false;}
return this.php_js.ini_loaded_file;}
function php_ini_scanned_files(){if(!this.php_js||!this.php_js.ini_scanned_files){return false;}
return this.php_js.ini_scanned_files;}
function php_strip_whitespace(file){try{var str=this.file_get_contents(file);}catch(e){return'';}
return str.replace(/\/\/.*?\n/g,'').replace(/\/\*[\s\S]*?\*\//g,'').replace(/[ \f\r\t\v\u00A0\u2028\u2029]+/g,' ').replace(/\s*\n+/g,'\n').replace(/^\s+/gm,'').replace(/\s*$/gm,'');}
function phpversion(){var xhtml=true,s={},firstScript={},d=this.window.document,c='createElement',cn='createElementNS',xn='http://www.w3.org/1999/xhtml',g='getElementsByTagName',gn='getElementsByTagNameNS';this.php_js=this.php_js||{};var getVersion=function(app){var att='',minVers=0,versionString='',temp_jsversion=undefined;if(this.php_js.jsversion!==undefined){return this.php_js.jsversion;}
while(this.php_js.jsversion===temp_jsversion&&minVers<10){temp_jsversion='1.'+minVers;if(gn){firstScript=d[gn](xn,'script')[0];}
if(!firstScript){firstScript=d[g]('script')[0];xhtml=false;}
if(d[cn]&&xhtml){s=d[cn](xn,'script');}else{s=d[c]('script');}
if(app){att='type';versionString='application/javascript;version=1.';}else{att='language';versionString='JavaScript1.';}
s.setAttribute(att,versionString+minVers);s.appendChild(d.createTextNode("this.php_js.jsversion="+"'1."+minVers+"'"));firstScript.parentNode.insertBefore(s,firstScript);s.parentNode.removeChild(s);minVers++;}
return this.php_js.jsversion;};getVersion(true);getVersion(false);return this.php_js.jsversion;}
function pi(){return 3.141592653589793;}
function popen(filename,mode,use_include_path,context){var resource={},i=0,that=this;var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var file_get_contents=function(url){var req=that.window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
if(!(/^http/).test(url)){url=that.window.location.href+'/'+url;}
req.open("GET",url,false);req.send(null);return req.responseText;};if(use_include_path===1||use_include_path==='1'||use_include_path===true){}
if(context){}
for(i=0;i<mode.length;i++){switch(mode.charAt(i)){case'r':if(!mode.charAt(i+1)||mode.charAt(i+1)!=='+'){break;}
case'w':case'a':case'x':throw'Writing is not implemented';case'b':case't':throw'Windows-only modes are not supported';default:throw'Unrecognized file mode passed to '+getFuncName(arguments.caller)+'()';}}
this.php_js=this.php_js||{};this.php_js.resourceData=this.php_js.resourceData||{};this.php_js.resourceDataPointer=this.php_js.resourceDataPointer||{};this.php_js.resourceIdCounter=this.php_js.resourceIdCounter||0;function PHPJS_Resource(type,id,opener){this.type=type;this.id=id;this.opener=opener;}
PHPJS_Resource.prototype.toString=function(){return'Resource id #'+this.id;};PHPJS_Resource.prototype.get_resource_type=function(){return this.type;};PHPJS_Resource.prototype.var_dump=function(){return'resource('+this.id+') of type ('+this.type+')';};this.php_js.resourceIdCounter++;this.php_js.resourceData[this.php_js.resourceIdCounter]=this.file_get_contents(filename);this.php_js.resourceDataPointer[this.php_js.resourceIdCounter]=0;resource=new PHPJS_Resource('stream',this.php_js.resourceIdCounter,'popen');resource.mode=mode;return resource;}
function pos(arr){return this.current(arr);}
function pow(base,exp){return Math.pow(base,exp);}
function preg_grep(pattern,input,flags){var p='',retObj={};var invert=(flags===1||flags==='PREG_GREP_INVERT');if(typeof pattern==='string'){pattern=eval(pattern);}
if(invert){for(p in input){if(input[p].search(pattern)===-1){retObj[p]=input[p];}}}else{for(p in input){if(input[p].search(pattern)!==-1){retObj[p]=input[p];}}}
return retObj;}
function preg_quote(str,delimiter){return(str+'').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\'+(delimiter||'')+'-]','g'),'\\$&');}
function prev(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
var arrpos=pointers.indexOf(arr);var cursor=pointers[arrpos+1];if(pointers.indexOf(arr)===-1||cursor===0){return false;}
if(Object.prototype.toString.call(arr)!=='[object Array]'){var ct=0;for(var k in arr){if(ct===cursor-1){pointers[arrpos+1]-=1;return arr[k];}
ct++;}}
if(arr.length===0){return false;}
pointers[arrpos+1]-=1;return arr[pointers[arrpos+1]];}
function print_r(array,return_val){var output='',pad_char=' ',pad_val=4,d=this.window.document,getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];},repeat_char=function(len,pad_char){var str='';for(var i=0;i<len;i++){str+=pad_char;}
return str;},formatArray=function(obj,cur_depth,pad_val,pad_char){if(cur_depth>0){cur_depth++;}
var base_pad=repeat_char(pad_val*cur_depth,pad_char);var thick_pad=repeat_char(pad_val*(cur_depth+1),pad_char);var str='';if(typeof obj==='object'&&obj!==null&&obj.constructor&&getFuncName(obj.constructor)!=='PHPJS_Resource'){str+='Array\n'+base_pad+'(\n';for(var key in obj){if(Object.prototype.toString.call(obj[key])==='[object Array]'){str+=thick_pad+'['+key+'] => '+formatArray(obj[key],cur_depth+1,pad_val,pad_char);}
else{str+=thick_pad+'['+key+'] => '+obj[key]+'\n';}}
str+=base_pad+')\n';}
else if(obj===null||obj===undefined){str='';}
else{str=obj.toString();}
return str;};output=formatArray(array,0,pad_val,pad_char);if(return_val!==true){if(d.body){this.echo(output);}
else{try{d=XULDocument;this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+'</pre>');}catch(e){this.echo(output);}}
return true;}
return output;}
function printf(){var body,elmt,d=this.window.document;var ret='';var HTMLNS='http://www.w3.org/1999/xhtml';body=d.getElementsByTagNameNS?(d.getElementsByTagNameNS(HTMLNS,'body')[0]?d.getElementsByTagNameNS(HTMLNS,'body')[0]:d.documentElement.lastChild):d.getElementsByTagName('body')[0];if(!body){return false;}
ret=this.sprintf.apply(this,arguments);elmt=d.createTextNode(ret);body.appendChild(elmt);return ret.length;}
function property_exists(cls,prop){cls=(typeof cls==='string')?this.window[cls]:cls;if(typeof cls==='function'&&cls.toSource&&cls.toSource().match(new RegExp('this\\.'+prop+'\\s'))){return true;}
return(cls[prop]!==undefined&&typeof cls[prop]!=='function')||(cls.prototype!==undefined&&cls.prototype[prop]!==undefined&&typeof cls.prototype[prop]!=='function')||(cls.constructor&&cls.constructor[prop]!==undefined&&typeof cls.constructor[prop]!=='function');}
function putenv(setting){this.php_js=this.php_js||{};this.php_js.ENV=this.php_js.ENV||{};var pos=setting.indexOf('=');this.php_js.ENV[setting.slice(0,pos)]=setting.slice(pos+1);return true;}
function quoted_printable_decode(str){var RFC2045Decode1=/=\r\n/gm,RFC2045Decode2IN=/=([0-9A-F]{2})/gim,RFC2045Decode2OUT=function(sMatch,sHex){return String.fromCharCode(parseInt(sHex,16));};return str.replace(RFC2045Decode1,'').replace(RFC2045Decode2IN,RFC2045Decode2OUT);}
function quoted_printable_encode(str){var hexChars=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'],RFC2045Encode1IN=/ \r\n|\r\n|[^!-<>-~ ]/gm,RFC2045Encode1OUT=function(sMatch){if(sMatch.length>1){return sMatch.replace(' ','=20');}
var chr=sMatch.charCodeAt(0);return'='+hexChars[((chr>>>4)&15)]+hexChars[(chr&15)];},RFC2045Encode2IN=/.{1,72}(?!\r\n)[^=]{0,3}/g,RFC2045Encode2OUT=function(sMatch){if(sMatch.substr(sMatch.length-2)==='\r\n'){return sMatch;}
return sMatch+'=\r\n';};str=str.replace(RFC2045Encode1IN,RFC2045Encode1OUT).replace(RFC2045Encode2IN,RFC2045Encode2OUT);return str.substr(0,str.length-3);}
function quotemeta(str){return(str+'').replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g,'\\$1');}
function rad2deg(angle){return angle*57.29577951308232;}
function rand(min,max){var argc=arguments.length;if(argc===0){min=0;max=2147483647;}else if(argc===1){throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');}
return Math.floor(Math.random()*(max-min+1))+min;}
function range(low,high,step){var matrix=[];var inival,endval,plus;var walker=step||1;var chars=false;if(!isNaN(low)&&!isNaN(high)){inival=low;endval=high;}else if(isNaN(low)&&isNaN(high)){chars=true;inival=low.charCodeAt(0);endval=high.charCodeAt(0);}else{inival=(isNaN(low)?0:low);endval=(isNaN(high)?0:high);}
plus=((inival>endval)?false:true);if(plus){while(inival<=endval){matrix.push(((chars)?String.fromCharCode(inival):inival));inival+=walker;}}else{while(inival>=endval){matrix.push(((chars)?String.fromCharCode(inival):inival));inival-=walker;}}
return matrix;}
function rawurldecode(str){return decodeURIComponent(str+'');}
function rawurlencode(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A');}
function readfile(filename,use_include_path,context){var read_data=this.file_get_contents(filename,use_include_path,context);this.echo(read_data);return read_data;}
function realpath(path){var p=0,arr=[];var r=this.window.location.href;path=(path+'').replace('\\','/');if(path.indexOf('://')!==-1){p=1;}
if(!p){path=r.substring(0,r.lastIndexOf('/')+1)+path;}
arr=path.split('/');path=[];for(var k in arr){if(arr[k]=='.'){continue;}
if(arr[k]=='..'){if(path.length>3){path.pop();}}
else{if((path.length<2)||(arr[k]!=='')){path.push(arr[k]);}}}
return path.join('/');}
function register_shutdown_function(cb){var args=[],_addEvent=function(el,type,handler,capturing){if(el.addEventListener){el.addEventListener(type,handler,!!capturing);}else if(el.attachEvent){el.attachEvent('on'+type,handler);}else{el['on'+type]=handler;}};args=Array.prototype.slice.call(arguments,1);_addEvent(this.window,'unload',function(){cb.apply(null,args);},false);}
function require(filename){var d=this.window.document;var isXML=d.documentElement.nodeName!=='HTML'||!d.write;var js_code=this.file_get_contents(filename);var script_block=d.createElementNS&&isXML?d.createElementNS('http://www.w3.org/1999/xhtml','script'):d.createElement('script');script_block.type='text/javascript';var client_pc=navigator.userAgent.toLowerCase();if((client_pc.indexOf('msie')!==-1)&&(client_pc.indexOf('opera')===-1)){script_block.text=js_code;}else{script_block.appendChild(d.createTextNode(js_code));}
if(typeof(script_block)!=='undefined'){d.getElementsByTagNameNS&&isXML?(d.getElementsByTagNameNS('http://www.w3.org/1999/xhtml','head')[0]?d.getElementsByTagNameNS('http://www.w3.org/1999/xhtml','head')[0].appendChild(script_block):d.documentElement.insertBefore(script_block,d.documentElement.firstChild)):d.getElementsByTagName('head')[0].appendChild(script_block);var cur_file={};cur_file[this.window.location.href]=1;this.php_js=this.php_js||{};if(!this.php_js.includes){this.php_js.includes=cur_file;}
if(!this.php_js.includes[filename]){this.php_js.includes[filename]=1;return 1;}else{return++this.php_js.includes[filename];}}
return 0;}
function require_once(filename){var cur_file={};cur_file[this.window.location.href]=1;try{php_js_shared;}catch(e){php_js_shared={};}
if(!php_js_shared.includes){php_js_shared.includes=cur_file;}
if(!php_js_shared.includes[filename]){if(this.require(filename)){return true;}}else{return true;}
return false;}
function reset(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);if(Object.prototype.toString.call(arr)!=='[object Array]'){for(var k in arr){if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}else{pointers[arrpos+1]=0;}
return arr[k];}
return false;}
if(arr.length===0){return false;}
pointers[arrpos+1]=0;return arr[pointers[arrpos+1]];}
function restore_include_path(){if(this.php_js&&this.php_js.ini&&this.php_js.ini.include_path){this.php_js.ini.include_path.local_value=this.php_js.ini.include_path.global_value;}}
function rewind(handle){var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer||!handle||!handle.constructor||getFuncName(handle.constructor)!=='PHPJS_Resource'){return false;}
this.php_js.resourceDataPointer[handle.id]=0;return true;}
function round(value,precision,mode){var m,f,isHalf,sgn;precision|=0;m=Math.pow(10,precision);value*=m;sgn=(value>0)|-(value<0);isHalf=value%1===0.5*sgn;f=Math.floor(value);if(isHalf){switch(mode){case'PHP_ROUND_HALF_DOWN':value=f+(sgn<0);break;case'PHP_ROUND_HALF_EVEN':value=f+(f%2*sgn);break;case'PHP_ROUND_HALF_ODD':value=f+!(f%2);break;default:value=f+(sgn>0);}}
return(isHalf?value:Math.round(value))/m;}
function rsort(inputArr,sort_flags){var valArr=[],k='',i=0,sorter=false,that=this,strictForIn=false,populateArr=[];switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(b-a);};break;case'SORT_REGULAR':default:sorter=function(b,a){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(sorter);for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function rtrim(str,charlist){charlist=!charlist?' \\s\u00A0':(charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'\\$1');var re=new RegExp('['+charlist+']+$','g');return(str+'').replace(re,'');}
function runkit_class_adopt(classname,parentname){if(typeof this.window[classname]!=='function'||typeof this.window[parentname]!=='function'){return false;}
this.window[classname].prototype=new this.window[parentname]();this.window[classname].constructor=this.window[classname];return true;}
function runkit_class_emancipate(classname){if(typeof this.window[classname]!=='function'){return false;}
for(var p in this.window[classname].prototype){delete this.window[classname].prototype[p];}
return true;}
function runkit_function_add(funcname,arglist,code){if(this.window[funcname]!==undefined){return false;}
try{this.window[funcname]=Function.apply(null,arglist.split(',').concat(code));}catch(e){return false;}
return true;}
function runkit_function_copy(funcname,targetname){if(typeof this.window[funcname]!=='function'||this.window[targetname]!==undefined){return false;}
this.window[targetname]=this.window[funcname];return true;}
function runkit_function_redefine(funcname,arglist,code){if(this.window[funcname]===undefined){return false;}
try{this.window[funcname]=Function.apply(null,arglist.split(',').concat(code));}catch(e){return false;}
return true;}
function runkit_function_remove(funcname){if(this.window[funcname]===undefined){return false;}
try{this.window[funcname]=undefined;}catch(e){return false;}
return true;}
function runkit_function_rename(funcname,newname){if(typeof this.window[newname]!=='function'||this.window[funcname]!==undefined){return false;}
this.window[newname]=this.window[funcname];this.window[funcname]=undefined;return true;}
function runkit_import(file,flags){if(flags){throw'Flags not supported for runkit_import';}
eval(this.file_get_contents(file));}
function runkit_method_add(classname,methodname,args,code,flags){var func,argmnts=[];switch(flags){case'RUNKIT_ACC_PROTECTED':throw'Protected not supported';case'RUNKIT_ACC_PRIVATE':throw'Private not supported';case'RUNKIT_ACC_PUBLIC':default:break;}
argmnts=args.split(/,\s*/);if(typeof classname==='string'){classname=this.window[classname];}
func=Function.apply(null,argmnts.concat(code));classname.prototype[methodname]=func;return true;}
function runkit_method_copy(dClass,dMethod,sClass,sMethod){sMethod=sMethod||dMethod;if(typeof dClass==='string'){dClass=this.window[dClass];}
if(typeof sClass==='string'){sClass=this.window[sClass];}
dClass.prototype[dMethod]=sClass.prototype[sMethod];return true;}
function runkit_method_redefine(classname,methodname,args,code,flags){var argmnts=[],func;var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};switch(flags){case'RUNKIT_ACC_PROTECTED':throw'Protected not supported';case'RUNKIT_ACC_PRIVATE':throw'Private not supported';case'RUNKIT_ACC_PUBLIC':default:break;}
argmnts=args.split(/,\s*/);if(typeof classname==='string'){classname=this.window[classname];}
if(getFuncName(classname)!=='PHP_JS'||(this.php_js&&this.php_js.ini&&this.php_js.ini['runkit.internal_override']&&(this.php_js.ini['runkit.internal_override'].local_value===true||this.php_js.ini['runkit.internal_override'].local_value===1||this.php_js.ini['runkit.internal_override'].local_value==='1'||this.php_js.ini['runkit.internal_override'].local_value==='true'))){func=Function.apply(null,argmnts.concat(code));classname.prototype[methodname]=func;return true;}
return false;}
function runkit_method_remove(classname,methodname){if(typeof classname==='string'){classname=this.window[classname];}
if(getFuncName(classname)!=='PHP_JS'||(this.php_js&&this.php_js.ini&&this.php_js.ini['runkit.internal_override']&&(this.php_js.ini['runkit.internal_override'].local_value===true||this.php_js.ini['runkit.internal_override'].local_value===1||this.php_js.ini['runkit.internal_override'].local_value==='1'||this.php_js.ini['runkit.internal_override'].local_value==='true'))){delete classname.prototype[methodname];return true;}
return false;}
function runkit_method_rename(classname,methodname,newname){var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};if(typeof classname==='string'){classname=this.window[classname];}
if(getFuncName(classname)!=='PHP_JS'||(this.php_js&&this.php_js.ini&&this.php_js.ini['runkit.internal_override']&&(this.php_js.ini['runkit.internal_override'].local_value===true||this.php_js.ini['runkit.internal_override'].local_value===1||this.php_js.ini['runkit.internal_override'].local_value==='1'||this.php_js.ini['runkit.internal_override'].local_value==='true'))){var method=classname.prototype[methodname];classname.prototype[newname]=method;delete classname.prototype[methodname];return true;}
return false;}
function runkit_superglobals(){var superglobal={},p='',arr=[];var superglobals=['$_GET','$_POST','$_REQUEST','$_COOKIE','$_SESSION','$_SERVER','$_ENV','$_FILES'];for(var i=0;i<superglobals.length;i++){superglobal=this.window[superglobals[i]];for(p in superglobal){arr.push(superglobal[p]);}}
return arr;}
function serialize(mixed_value){var _utf8Size=function(str){var size=0,i=0,l=str.length,code='';for(i=0;i<l;i++){code=str.charCodeAt(i);if(code<0x0080){size+=1;}else if(code<0x0800){size+=2;}else{size+=3;}}
return size;};var _getType=function(inp){var type=typeof inp,match;var key;if(type==='object'&&!inp){return'null';}
if(type==="object"){if(!inp.constructor){return'object';}
var cons=inp.constructor.toString();match=cons.match(/(\w+)\(/);if(match){cons=match[1].toLowerCase();}
var types=["boolean","number","string","array"];for(key in types){if(cons==types[key]){type=types[key];break;}}}
return type;};var type=_getType(mixed_value);var val,ktype='';switch(type){case"function":val="";break;case"boolean":val="b:"+(mixed_value?"1":"0");break;case"number":val=(Math.round(mixed_value)==mixed_value?"i":"d")+":"+mixed_value;break;case"string":val="s:"+_utf8Size(mixed_value)+":\""+mixed_value+"\"";break;case"array":case"object":val="a";var count=0;var vals="";var okey;var key;for(key in mixed_value){if(mixed_value.hasOwnProperty(key)){ktype=_getType(mixed_value[key]);if(ktype==="function"){continue;}
okey=(key.match(/^[0-9]+$/)?parseInt(key,10):key);vals+=this.serialize(okey)+this.serialize(mixed_value[key]);count++;}}
val+=":"+count+":{"+vals+"}";break;case"undefined":default:val="N";break;}
if(type!=="object"&&type!=="array"){val+=";";}
return val;}
function set_include_path(new_include_path){this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};var old_path=this.php_js.ini.include_path&&this.php_js.ini.include_path.local_value;if(!old_path){this.php_js.ini.include_path={global_value:new_include_path,local_value:new_include_path};}else{this.php_js.ini.include_path.global_value=new_include_path;this.php_js.ini.include_path.local_value=new_include_path;}
return old_path;}
function set_time_limit(seconds){this.php_js=this.php_js||{};this.window.setTimeout(function(){if(!this.php_js.timeoutStatus){this.php_js.timeoutStatus=true;}
throw'Maximum execution time exceeded';},seconds*1000);}
function setcookie(name,value,expires,path,domain,secure){return this.setrawcookie(name,encodeURIComponent(value),expires,path,domain,secure);}
function setlocale(category,locale){var categ='',cats=[],i=0,d=this.window.document;var _copy=function _copy(orig){if(orig instanceof RegExp){return new RegExp(orig);}else if(orig instanceof Date){return new Date(orig);}
var newObj={};for(var i in orig){if(typeof orig[i]==='object'){newObj[i]=_copy(orig[i]);}else{newObj[i]=orig[i];}}
return newObj;};var _nplurals1=function(n){return 0;};var _nplurals2a=function(n){return n!==1?1:0;};var _nplurals2b=function(n){return n>1?1:0;};var _nplurals2c=function(n){return n%10===1&&n%100!==11?0:1;};var _nplurals3a=function(n){return n%10===1&&n%100!==11?0:n!==0?1:2;};var _nplurals3b=function(n){return n===1?0:n===2?1:2;};var _nplurals3c=function(n){return n===1?0:(n===0||(n%100>0&&n%100<20))?1:2;};var _nplurals3d=function(n){return n%10===1&&n%100!==11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2;};var _nplurals3e=function(n){return n%10===1&&n%100!==11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2;};var _nplurals3f=function(n){return n===1?0:n>=2&&n<=4?1:2;};var _nplurals3g=function(n){return n===1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2;};var _nplurals3h=function(n){return n%10===1?0:n%10===2?1:2;};var _nplurals4a=function(n){return n%100===1?0:n%100===2?1:n%100===3||n%100===4?2:3;};var _nplurals4b=function(n){return n===1?0:n===0||(n%100&&n%100<=10)?1:n%100>=11&&n%100<=19?2:3;};var _nplurals5=function(n){return n===1?0:n===2?1:n>=3&&n<=6?2:n>=7&&n<=10?3:4;};var _nplurals6=function(n){return n===0?5:n===1?0:n===2?1:n%100>=3&&n%100<=10?2:n%100>=11&&n%100<=99?3:4;};this.php_js=this.php_js||{};var phpjs=this.php_js;if(!phpjs.locales){phpjs.locales={};phpjs.locales.en={'LC_COLLATE':function(str1,str2){return(str1==str2)?0:((str1>str2)?1:-1);},'LC_CTYPE':{an:/^[A-Za-z\d]+$/g,al:/^[A-Za-z]+$/g,ct:/^[\u0000-\u001F\u007F]+$/g,dg:/^[\d]+$/g,gr:/^[\u0021-\u007E]+$/g,lw:/^[a-z]+$/g,pr:/^[\u0020-\u007E]+$/g,pu:/^[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/g,sp:/^[\f\n\r\t\v ]+$/g,up:/^[A-Z]+$/g,xd:/^[A-Fa-f\d]+$/g,CODESET:'UTF-8',lower:'abcdefghijklmnopqrstuvwxyz',upper:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'},'LC_TIME':{a:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],A:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],b:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],B:['January','February','March','April','May','June','July','August','September','October','November','December'],c:'%a %d %b %Y %r %Z',p:['AM','PM'],P:['am','pm'],r:'%I:%M:%S %p',x:'%m/%d/%Y',X:'%r',alt_digits:'',ERA:'',ERA_YEAR:'',ERA_D_T_FMT:'',ERA_D_FMT:'',ERA_T_FMT:''},'LC_MONETARY':{int_curr_symbol:'USD',currency_symbol:'$',mon_decimal_point:'.',mon_thousands_sep:',',mon_grouping:[3],positive_sign:'',negative_sign:'-',int_frac_digits:2,frac_digits:2,p_cs_precedes:1,p_sep_by_space:0,n_cs_precedes:1,n_sep_by_space:0,p_sign_posn:3,n_sign_posn:0},'LC_NUMERIC':{decimal_point:'.',thousands_sep:',',grouping:[3]},'LC_MESSAGES':{YESEXPR:'^[yY].*',NOEXPR:'^[nN].*',YESSTR:'',NOSTR:''},nplurals:_nplurals2a};phpjs.locales.en_US=_copy(phpjs.locales.en);phpjs.locales.en_US.LC_TIME.c='%a %d %b %Y %r %Z';phpjs.locales.en_US.LC_TIME.x='%D';phpjs.locales.en_US.LC_TIME.X='%r';phpjs.locales.en_US.LC_MONETARY.int_curr_symbol='USD ';phpjs.locales.en_US.LC_MONETARY.p_sign_posn=1;phpjs.locales.en_US.LC_MONETARY.n_sign_posn=1;phpjs.locales.en_US.LC_MONETARY.mon_grouping=[3,3];phpjs.locales.en_US.LC_NUMERIC.thousands_sep='';phpjs.locales.en_US.LC_NUMERIC.grouping=[];phpjs.locales.en_GB=_copy(phpjs.locales.en);phpjs.locales.en_GB.LC_TIME.r='%l:%M:%S %P %Z';phpjs.locales.en_AU=_copy(phpjs.locales.en_GB);phpjs.locales.C=_copy(phpjs.locales.en);phpjs.locales.C.LC_CTYPE.CODESET='ANSI_X3.4-1968';phpjs.locales.C.LC_MONETARY={int_curr_symbol:'',currency_symbol:'',mon_decimal_point:'',mon_thousands_sep:'',mon_grouping:[],p_cs_precedes:127,p_sep_by_space:127,n_cs_precedes:127,n_sep_by_space:127,p_sign_posn:127,n_sign_posn:127,positive_sign:'',negative_sign:'',int_frac_digits:127,frac_digits:127};phpjs.locales.C.LC_NUMERIC={decimal_point:'.',thousands_sep:'',grouping:[]};phpjs.locales.C.LC_TIME.c='%a %b %e %H:%M:%S %Y';phpjs.locales.C.LC_TIME.x='%m/%d/%y';phpjs.locales.C.LC_TIME.X='%H:%M:%S';phpjs.locales.C.LC_MESSAGES.YESEXPR='^[yY]';phpjs.locales.C.LC_MESSAGES.NOEXPR='^[nN]';phpjs.locales.fr=_copy(phpjs.locales.en);phpjs.locales.fr.nplurals=_nplurals2b;phpjs.locales.fr.LC_TIME.a=['dim','lun','mar','mer','jeu','ven','sam'];phpjs.locales.fr.LC_TIME.A=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];phpjs.locales.fr.LC_TIME.b=['jan','f\u00E9v','mar','avr','mai','jun','jui','ao\u00FB','sep','oct','nov','d\u00E9c'];phpjs.locales.fr.LC_TIME.B=['janvier','f\u00E9vrier','mars','avril','mai','juin','juillet','ao\u00FBt','septembre','octobre','novembre','d\u00E9cembre'];phpjs.locales.fr.LC_TIME.c='%a %d %b %Y %T %Z';phpjs.locales.fr.LC_TIME.p=['',''];phpjs.locales.fr.LC_TIME.P=['',''];phpjs.locales.fr.LC_TIME.x='%d.%m.%Y';phpjs.locales.fr.LC_TIME.X='%T';phpjs.locales.fr_CA=_copy(phpjs.locales.fr);phpjs.locales.fr_CA.LC_TIME.x='%Y-%m-%d';}
if(!phpjs.locale){phpjs.locale='en_US';var NS_XHTML='http://www.w3.org/1999/xhtml';var NS_XML='http://www.w3.org/XML/1998/namespace';if(d.getElementsByTagNameNS&&d.getElementsByTagNameNS(NS_XHTML,'html')[0]){if(d.getElementsByTagNameNS(NS_XHTML,'html')[0].getAttributeNS&&d.getElementsByTagNameNS(NS_XHTML,'html')[0].getAttributeNS(NS_XML,'lang')){phpjs.locale=d.getElementsByTagName(NS_XHTML,'html')[0].getAttributeNS(NS_XML,'lang');}else if(d.getElementsByTagNameNS(NS_XHTML,'html')[0].lang){phpjs.locale=d.getElementsByTagNameNS(NS_XHTML,'html')[0].lang;}}else if(d.getElementsByTagName('html')[0]&&d.getElementsByTagName('html')[0].lang){phpjs.locale=d.getElementsByTagName('html')[0].lang;}}
phpjs.locale=phpjs.locale.replace('-','_');if(!(phpjs.locale in phpjs.locales)){if(phpjs.locale.replace(/_[a-zA-Z]+$/,'')in phpjs.locales){phpjs.locale=phpjs.locale.replace(/_[a-zA-Z]+$/,'');}}
if(!phpjs.localeCategories){phpjs.localeCategories={'LC_COLLATE':phpjs.locale,'LC_CTYPE':phpjs.locale,'LC_MONETARY':phpjs.locale,'LC_NUMERIC':phpjs.locale,'LC_TIME':phpjs.locale,'LC_MESSAGES':phpjs.locale};}
if(locale===null||locale===''){locale=this.getenv(category)||this.getenv('LANG');}else if(Object.prototype.toString.call(locale)==='[object Array]'){for(i=0;i<locale.length;i++){if(!(locale[i]in this.php_js.locales)){if(i===locale.length-1){return false;}
continue;}
locale=locale[i];break;}}
if(locale==='0'||locale===0){if(category==='LC_ALL'){for(categ in this.php_js.localeCategories){cats.push(categ+'='+this.php_js.localeCategories[categ]);}
return cats.join(';');}
return this.php_js.localeCategories[category];}
if(!(locale in this.php_js.locales)){return false;}
if(category==='LC_ALL'){for(categ in this.php_js.localeCategories){this.php_js.localeCategories[categ]=locale;}}else{this.php_js.localeCategories[category]=locale;}
return locale;}
function setrawcookie(name,value,expires,path,domain,secure){if(typeof expires==='string'&&(/^\d+$/).test(expires)){expires=parseInt(expires,10);}
if(expires instanceof Date){expires=expires.toGMTString();}else if(typeof(expires)==='number'){expires=(new Date(expires*1e3)).toGMTString();}
var r=[name+'='+value],s={},i='';s={expires:expires,path:path,domain:domain};for(i in s){if(s.hasOwnProperty(i)){s[i]&&r.push(i+'='+s[i]);}}
return secure&&r.push('secure'),this.window.document.cookie=r.join(";"),true;}
function settype(vr,type){var is_array=function(arr){return typeof arr==='object'&&typeof arr.length==='number'&&!(arr.propertyIsEnumerable('length'))&&typeof arr.splice==='function';};var v,mtch,i,obj;v=this[vr]?this[vr]:vr;try{switch(type){case'boolean':if(is_array(v)&&v.length===0){this[vr]=false;}else if(v==='0'){this[vr]=false;}else if(typeof v==='object'&&!is_array(v)){var lgth=false;for(i in v){lgth=true;}
this[vr]=lgth;}else{this[vr]=!!v;}
break;case'integer':if(typeof v==='number'){this[vr]=parseInt(v,10);}else if(typeof v==='string'){mtch=v.match(/^([+\-]?)(\d+)/);if(!mtch){this[vr]=0;}else{this[vr]=parseInt(v,10);}}else if(v===true){this[vr]=1;}else if(v===false||v===null){this[vr]=0;}else if(is_array(v)&&v.length===0){this[vr]=0;}else if(typeof v==='object'){this[vr]=1;}
break;case'float':if(typeof v==='string'){mtch=v.match(/^([+\-]?)(\d+(\.\d+)?|\.\d+)([eE][+\-]?\d+)?/);if(!mtch){this[vr]=0;}else{this[vr]=parseFloat(v,10);}}else if(v===true){this[vr]=1;}else if(v===false||v===null){this[vr]=0;}else if(is_array(v)&&v.length===0){this[vr]=0;}else if(typeof v==='object'){this[vr]=1;}
break;case'string':if(v===null||v===false){this[vr]='';}else if(is_array(v)){this[vr]='Array';}else if(typeof v==='object'){this[vr]='Object';}else if(v===true){this[vr]='1';}else{this[vr]+='';}
break;case'array':if(v===null){this[vr]=[];}else if(typeof v!=='object'){this[vr]=[v];}
break;case'object':if(v===null){this[vr]={};}else if(is_array(v)){for(i=0,obj={};i<v.length;i++){obj[i]=v;}
this[vr]=obj;}else if(typeof v!=='object'){this[vr]={scalar:v};}
break;case'null':delete this[vr];break;}
return true;}catch(e){return false;}}
function sha1(str){var rotate_left=function(n,s){var t4=(n<<s)|(n>>>(32-s));return t4;};var cvt_hex=function(val){var str="";var i;var v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;str+=v.toString(16);}
return str;};var blockstart;var i,j;var W=new Array(80);var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;str=this.utf8_encode(str);var str_len=str.length;var word_array=[];for(i=0;i<str_len-3;i+=4){j=str.charCodeAt(i)<<24|str.charCodeAt(i+1)<<16|str.charCodeAt(i+2)<<8|str.charCodeAt(i+3);word_array.push(j);}
switch(str_len%4){case 0:i=0x080000000;break;case 1:i=str.charCodeAt(str_len-1)<<24|0x0800000;break;case 2:i=str.charCodeAt(str_len-2)<<24|str.charCodeAt(str_len-1)<<16|0x08000;break;case 3:i=str.charCodeAt(str_len-3)<<24|str.charCodeAt(str_len-2)<<16|str.charCodeAt(str_len-1)<<8|0x80;break;}
word_array.push(i);while((word_array.length%16)!=14){word_array.push(0);}
word_array.push(str_len>>>29);word_array.push((str_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++){W[i]=word_array[blockstart+i];}
for(i=16;i<=79;i++){W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);}
A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff;}
temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase();}
function sha1_file(str_filename){var buf=this.file_get_contents(str_filename);return this.sha1(buf);}
function shuffle(inputArr){var valArr=[],k='',i=0,strictForIn=false,populateArr=[];for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(){return 0.5-Math.random();});this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function similar_text(first,second){if(first===null||second===null||typeof first==='undefined'||typeof second==='undefined'){return 0;}
first+='';second+='';var pos1=0,pos2=0,max=0,firstLength=first.length,secondLength=second.length,p,q,l,sum;max=0;for(p=0;p<firstLength;p++){for(q=0;q<secondLength;q++){for(l=0;(p+l<firstLength)&&(q+l<secondLength)&&(first.charAt(p+l)===second.charAt(q+l));l++);if(l>max){max=l;pos1=p;pos2=q;}}}
sum=max;if(sum){if(pos1&&pos2){sum+=this.similar_text(first.substr(0,pos2),second.substr(0,pos2));}
if((pos1+max<firstLength)&&(pos2+max<secondLength)){sum+=this.similar_text(first.substr(pos1+max,firstLength-pos1-max),second.substr(pos2+max,secondLength-pos2-max));}}
return sum;}
function sin(arg){return Math.sin(arg);}
function sinh(arg){return(Math.exp(arg)-Math.exp(-arg))/2;}
function sizeof(mixed_var,mode){return this.count(mixed_var,mode);}
function sort(inputArr,sort_flags){var valArr=[],keyArr=[],k='',i=0,sorter=false,that=this,strictForIn=false,populateArr=[];switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(a,b){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(sorter);for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function soundex(str){str=(str+'').toUpperCase();if(!str){return'';}
var sdx=[0,0,0,0],m={B:1,F:1,P:1,V:1,C:2,G:2,J:2,K:2,Q:2,S:2,X:2,Z:2,D:3,T:3,L:4,M:5,N:5,R:6},i=0,j,s=0,c,p;while((c=str.charAt(i++))&&s<4){if(j=m[c]){if(j!==p){sdx[s++]=p=j;}}else{s+=i===1;p=0;}}
sdx[0]=str.charAt(0);return sdx.join('');}
function split(delimiter,string){return this.explode(delimiter,string);}
function sprintf(){var regex=/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;var a=arguments,i=0,format=a[i++];var pad=function(str,len,chr,leftJustify){if(!chr){chr=' ';}
var padding=(str.length>=len)?'':Array(1+len-str.length>>>0).join(chr);return leftJustify?str+padding:padding+str;};var justify=function(value,prefix,leftJustify,minWidth,zeroPad,customPadChar){var diff=minWidth-value.length;if(diff>0){if(leftJustify||!zeroPad){value=pad(value,minWidth,customPadChar,leftJustify);}else{value=value.slice(0,prefix.length)+pad('',diff,'0',true)+value.slice(prefix.length);}}
return value;};var formatBaseX=function(value,base,prefix,leftJustify,minWidth,precision,zeroPad){var number=value>>>0;prefix=prefix&&number&&{'2':'0b','8':'0','16':'0x'}[base]||'';value=prefix+pad(number.toString(base),precision||0,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);};var formatString=function(value,leftJustify,minWidth,precision,zeroPad,customPadChar){if(precision!=null){value=value.slice(0,precision);}
return justify(value,'',leftJustify,minWidth,zeroPad,customPadChar);};var doFormat=function(substring,valueIndex,flags,minWidth,_,precision,type){var number;var prefix;var method;var textTransform;var value;if(substring=='%%'){return'%';}
var leftJustify=false,positivePrefix='',zeroPad=false,prefixBaseX=false,customPadChar=' ';var flagsl=flags.length;for(var j=0;flags&&j<flagsl;j++){switch(flags.charAt(j)){case' ':positivePrefix=' ';break;case'+':positivePrefix='+';break;case'-':leftJustify=true;break;case"'":customPadChar=flags.charAt(j+1);break;case'0':zeroPad=true;break;case'#':prefixBaseX=true;break;}}
if(!minWidth){minWidth=0;}else if(minWidth=='*'){minWidth=+a[i++];}else if(minWidth.charAt(0)=='*'){minWidth=+a[minWidth.slice(1,-1)];}else{minWidth=+minWidth;}
if(minWidth<0){minWidth=-minWidth;leftJustify=true;}
if(!isFinite(minWidth)){throw new Error('sprintf: (minimum-)width must be finite');}
if(!precision){precision='fFeE'.indexOf(type)>-1?6:(type=='d')?0:undefined;}else if(precision=='*'){precision=+a[i++];}else if(precision.charAt(0)=='*'){precision=+a[precision.slice(1,-1)];}else{precision=+precision;}
value=valueIndex?a[valueIndex.slice(0,-1)]:a[i++];switch(type){case's':return formatString(String(value),leftJustify,minWidth,precision,zeroPad,customPadChar);case'c':return formatString(String.fromCharCode(+value),leftJustify,minWidth,precision,zeroPad);case'b':return formatBaseX(value,2,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'o':return formatBaseX(value,8,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'x':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'X':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad).toUpperCase();case'u':return formatBaseX(value,10,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'i':case'd':number=(+value)|0;prefix=number<0?'-':positivePrefix;value=prefix+pad(String(Math.abs(number)),precision,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);case'e':case'E':case'f':case'F':case'g':case'G':number=+value;prefix=number<0?'-':positivePrefix;method=['toExponential','toFixed','toPrecision']['efg'.indexOf(type.toLowerCase())];textTransform=['toString','toUpperCase']['eEfFgG'.indexOf(type)%2];value=prefix+Math.abs(number)[method](precision);return justify(value,prefix,leftJustify,minWidth,zeroPad)[textTransform]();default:return substring;}};return format.replace(regex,doFormat);}
function sql_regcase(str){this.setlocale('LC_ALL',0);var i=0,upper='',lower='',pos=0,retStr='';upper=this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.upper;lower=this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.lower;for(i=0;i<str.length;i++){if(((pos=upper.indexOf(str.charAt(i)))!==-1)||((pos=lower.indexOf(str.charAt(i)))!==-1)){retStr+='['+upper.charAt(pos)+lower.charAt(pos)+']';}else{retStr+=str.charAt(i);}}
return retStr;}
function sqrt(arg){return Math.sqrt(arg);}
function sscanf(str,format){var retArr=[],num=0,_NWS=/\S/,args=arguments,that=this,digit;var _setExtraConversionSpecs=function(offset){var matches=format.slice(offset).match(/%[cdeEufgosxX]/g);if(matches){var lgth=matches.length;while(lgth--){retArr.push(null);}}
return _finish();};var _finish=function(){if(args.length===2){return retArr;}
for(var i=0;i<retArr.length;++i){that.window[args[i+2]]=retArr[i];}
return i;};var _addNext=function(j,regex,cb){if(assign){var remaining=str.slice(j);var check=width?remaining.substr(0,width):remaining;var match=regex.exec(check);var testNull=retArr[digit!==undefined?digit:retArr.length]=match?(cb?cb.apply(null,match):match[0]):null;if(testNull===null){throw'No match in string';}
return j+match[0].length;}
return j;};if(arguments.length<2){throw'Not enough arguments passed to sscanf';}
for(var i=0,j=0;i<format.length;i++){var width=0,assign=true;if(format.charAt(i)==='%'){if(format.charAt(i+1)==='%'){if(str.charAt(j)==='%'){++i,++j;continue;}
return _setExtraConversionSpecs(i+2);}
var prePattern=new RegExp('^(?:(\\d+)\\$)?(\\*)?(\\d*)([hlL]?)','g');var preConvs=prePattern.exec(format.slice(i+1));var tmpDigit=digit;if(tmpDigit&&preConvs[1]===undefined){throw'All groups in sscanf() must be expressed as numeric if any have already been used';}
digit=preConvs[1]?parseInt(preConvs[1],10)-1:undefined;assign=!preConvs[2];width=parseInt(preConvs[3],10);var sizeCode=preConvs[4];i+=prePattern.lastIndex;if(sizeCode){switch(sizeCode){case'h':case'l':case'L':break;default:throw'Unexpected size specifier in sscanf()!';break;}}
try{switch(format.charAt(i+1)){case'F':break;case'g':break;case'G':break;case'b':break;case'i':j=_addNext(j,/([+-])?(?:(?:0x([\da-fA-F]+))|(?:0([0-7]+))|(\d+))/,function(num,sign,hex,oct,dec){return hex?parseInt(num,16):oct?parseInt(num,8):parseInt(num,10);});break;case'n':retArr[digit!==undefined?digit:retArr.length-1]=j;break;case'c':j=_addNext(j,new RegExp('.{1,'+(width||1)+'}'));break;case'D':case'd':j=_addNext(j,/([+-])?(?:0*)(\d+)/,function(num,sign,dec){var decInt=parseInt((sign||'')+dec,10);if(decInt<0){return decInt<-2147483648?-2147483648:decInt;}else{return decInt<2147483647?decInt:2147483647;}});break;case'f':case'E':case'e':j=_addNext(j,/([+-])?(?:0*)(\d*\.?\d*(?:[eE]?\d+)?)/,function(num,sign,dec){if(dec==='.'){return null;}
return parseFloat((sign||'')+dec);});break;case'u':j=_addNext(j,/([+-])?(?:0*)(\d+)/,function(num,sign,dec){var decInt=parseInt(dec,10);if(sign==='-'){return 4294967296-decInt;}else{return decInt<4294967295?decInt:4294967295;}});break;case'o':j=_addNext(j,/([+-])?(?:0([0-7]+))/,function(num,sign,oct){return parseInt(num,8);});break;case's':j=_addNext(j,/\S+/);break;case'X':case'x':j=_addNext(j,/([+-])?(?:(?:0x)?([\da-fA-F]+))/,function(num,sign,hex){return parseInt(num,16);});break;case'':throw'Missing character after percent mark in sscanf() format argument';default:throw'Unrecognized character after percent mark in sscanf() format argument';}}catch(e){if(e==='No match in string'){return _setExtraConversionSpecs(i+2);}}++i;}else if(format.charAt(i)!==str.charAt(j)){_NWS.lastIndex=0;if((_NWS).test(str.charAt(j))||str.charAt(j)===''){return _setExtraConversionSpecs(i+1);}else{str=str.slice(0,j)+str.slice(j+1);i--;}}else{j++;}}
return _finish();}
function str_getcsv(input,delimiter,enclosure,escape){var output=[];var backwards=function(str){return str.split('').reverse().join('');};var pq=function(str){return(str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1");};delimiter=delimiter||',';enclosure=enclosure||'"';escape=escape||'\\';input=input.replace(new RegExp('^\\s*'+pq(enclosure)),'').replace(new RegExp(pq(enclosure)+'\\s*$'),'');input=backwards(input).split(new RegExp(pq(enclosure)+'\\s*'+pq(delimiter)+'\\s*'+pq(enclosure)+'(?!'+pq(escape)+')','g')).reverse();for(var i=0;i<input.length;i++){output.push(backwards(input[i]).replace(new RegExp(pq(escape)+pq(enclosure),'g'),enclosure));}
return output;}
function str_ireplace(search,replace,subject){var i,k='';var searchl=0;var reg;var escapeRegex=function(s){return s.replace(/([\\\^\$*+\[\]?{}.=!:(|)])/g,'\\$1');};search+='';searchl=search.length;if(Object.prototype.toString.call(replace)!=='[object Array]'){replace=[replace];if(Object.prototype.toString.call(search)==='[object Array]'){while(searchl>replace.length){replace[replace.length]=replace[0];}}}
if(Object.prototype.toString.call(search)!=='[object Array]'){search=[search];}
while(search.length>replace.length){replace[replace.length]='';}
if(Object.prototype.toString.call(subject)==='[object Array]'){for(k in subject){if(subject.hasOwnProperty(k)){subject[k]=str_ireplace(search,replace,subject[k]);}}
return subject;}
searchl=search.length;for(i=0;i<searchl;i++){reg=new RegExp(escapeRegex(search[i]),'gi');subject=subject.replace(reg,replace[i]);}
return subject;}
function str_pad(input,pad_length,pad_string,pad_type){var half='',pad_to_go;var str_pad_repeater=function(s,len){var collect='',i;while(collect.length<len){collect+=s;}
collect=collect.substr(0,len);return collect;};input+='';pad_string=pad_string!==undefined?pad_string:' ';if(pad_type!='STR_PAD_LEFT'&&pad_type!='STR_PAD_RIGHT'&&pad_type!='STR_PAD_BOTH'){pad_type='STR_PAD_RIGHT';}
if((pad_to_go=pad_length-input.length)>0){if(pad_type=='STR_PAD_LEFT'){input=str_pad_repeater(pad_string,pad_to_go)+input;}else if(pad_type=='STR_PAD_RIGHT'){input=input+str_pad_repeater(pad_string,pad_to_go);}else if(pad_type=='STR_PAD_BOTH'){half=str_pad_repeater(pad_string,Math.ceil(pad_to_go/2));input=half+input+half;input=input.substr(0,pad_length);}}
return input;}
function str_repeat(input,multiplier){return new Array(multiplier+1).join(input);}
function str_replace(search,replace,subject,count){var i=0,j=0,temp='',repl='',sl=0,fl=0,f=[].concat(search),r=[].concat(replace),s=subject,ra=Object.prototype.toString.call(r)==='[object Array]',sa=Object.prototype.toString.call(s)==='[object Array]';s=[].concat(s);if(count){this.window[count]=0;}
for(i=0,sl=s.length;i<sl;i++){if(s[i]===''){continue;}
for(j=0,fl=f.length;j<fl;j++){temp=s[i]+'';repl=ra?(r[j]!==undefined?r[j]:''):r[0];s[i]=(temp).split(f[j]).join(repl);if(count&&s[i]!==temp){this.window[count]+=(temp.length-s[i].length)/f[j].length;}}}
return sa?s:s[0];}
function str_rot13(str){return(str+'').replace(/[a-z]/gi,function(s){return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13));});}
function str_shuffle(str){if(str==undefined){throw'Wrong parameter count for str_shuffle()';}
var getRandomInt=function(max){return Math.floor(Math.random()*(max+1));};var newStr='',rand=0;while(str.length){rand=getRandomInt(str.length-1);newStr+=str.charAt(rand);str=str.substring(0,rand)+str.substr(rand+1);}
return newStr;}
function str_split(string,split_length){if(split_length===null){split_length=1;}
if(string===null||split_length<1){return false;}
string+='';var chunks=[],pos=0,len=string.length;while(pos<len){chunks.push(string.slice(pos,pos+=split_length));}
return chunks;}
function str_word_count(str,format,charlist){var len=str.length,cl=charlist&&charlist.length,chr='',tmpStr='',i=0,c='',wArr=[],wC=0,assoc={},aC=0,reg='',match=false;var _preg_quote=function(str){return(str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g,'\\$1');},_getWholeChar=function(str,i){var code=str.charCodeAt(i);if(code<0xD800||code>0xDFFF){return str.charAt(i);}
if(0xD800<=code&&code<=0xDBFF){if(str.length<=(i+1)){throw'High surrogate without following low surrogate';}
var next=str.charCodeAt(i+1);if(0xDC00>next||next>0xDFFF){throw'High surrogate without following low surrogate';}
return str.charAt(i)+str.charAt(i+1);}
if(i===0){throw'Low surrogate without preceding high surrogate';}
var prev=str.charCodeAt(i-1);if(0xD800>prev||prev>0xDBFF){throw'Low surrogate without preceding high surrogate';}
return false;};if(cl){reg='^('+_preg_quote(_getWholeChar(charlist,0));for(i=1;i<cl;i++){if((chr=_getWholeChar(charlist,i))===false){continue;}
reg+='|'+_preg_quote(chr);}
reg+=')$';reg=new RegExp(reg);}
for(i=0;i<len;i++){if((c=_getWholeChar(str,i))===false){continue;}
match=this.ctype_alpha(c)||(reg&&c.search(reg)!==-1)||((i!==0&&i!==len-1)&&c==='-')||(i!==0&&c==="'");if(match){if(tmpStr===''&&format===2){aC=i;}
tmpStr=tmpStr+c;}
if(i===len-1||!match&&tmpStr!==''){if(format!==2){wArr[wArr.length]=tmpStr;}else{assoc[aC]=tmpStr;}
tmpStr='';wC++;}}
if(!format){return wC;}else if(format===1){return wArr;}else if(format===2){return assoc;}
throw'You have supplied an incorrect format';}
function strcasecmp(f_string1,f_string2){var string1=(f_string1+'').toLowerCase();var string2=(f_string2+'').toLowerCase();if(string1>string2){return 1;}else if(string1==string2){return 0;}
return-1;}
function strchr(haystack,needle,bool){return this.strstr(haystack,needle,bool);}
function strcmp(str1,str2){return((str1==str2)?0:((str1>str2)?1:-1));}
function strcoll(str1,str2){this.setlocale('LC_ALL',0);var cmp=this.php_js.locales[this.php_js.localeCategories.LC_COLLATE].LC_COLLATE;return cmp(str1,str2);}
function strcspn(str,mask,start,length){start=start?start:0;var count=(length&&((start+length)<str.length))?start+length:str.length;strct:for(var i=start,lgth=0;i<count;i++){for(var j=0;j<mask.length;j++){if(str.charAt(i).indexOf(mask[j])!==-1){continue strct;}}++lgth;}
return lgth;}
function stream_context_create(options,params){var resource={};options=options||{};this.php_js=this.php_js||{};this.php_js.resourceIdCounter=this.php_js.resourceIdCounter||0;function PHPJS_Resource(type,id,opener){this.type=type;this.id=id;this.opener=opener;}
PHPJS_Resource.prototype.toString=function(){return'Resource id #'+this.id;};PHPJS_Resource.prototype.get_resource_type=function(){return this.type;};PHPJS_Resource.prototype.var_dump=function(){return'resource('+this.id+') of type ('+this.type+')';};this.php_js.resourceIdCounter++;resource=new PHPJS_Resource('stream-context',this.php_js.resourceIdCounter,'stream_context_create');resource.stream_options=options;resource.stream_params=params;return resource;}
function stream_context_get_default(options){this.php_js=this.php_js||{};if(!this.php_js.default_streams_context){this.php_js.default_streams_context=this.stream_context_create(options);}
if(options){this.php_js.default_streams_context.stream_options=options;}
return this.php_js.default_streams_context;}
function stream_context_get_options(stream_or_context){return stream_or_context.stream_options;}
function stream_context_get_params(stream_or_context){return stream_or_context.stream_params;}
function stream_context_set_default(options){this.php_js=this.php_js||{};if(!this.php_js.default_streams_context){this.php_js.default_streams_context=this.stream_context_create(options);}
this.php_js.default_streams_context.stream_options=options;return this.php_js.default_streams_context;}
function stream_context_set_option(stream_or_context,optionsOrWrapper,option,value){if(option){if(!stream_or_context.stream_options[optionsOrWrapper]){stream_or_context.stream_options[optionsOrWrapper]={};}
stream_or_context.stream_options[optionsOrWrapper][option]=value;}else{stream_or_context.stream_options=optionsOrWrapper;}
return true;}
function stream_context_set_params(stream_or_context,params){var param='';for(param in params){if(param==='options'){stream_or_context.stream_options=params[param];}else{stream_or_context.stream_params[param]=params[param];}}
return true;}
function stream_get_contents(handle,maxLength,offset){if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer||!handle||!handle.id){return false;}
offset=offset||0;this.php_js.resourceDataPointer[handle.id]+=offset;var chrs=this.php_js.resourceData[handle.id].slice(this.php_js.resourceDataPointer[handle.id]);chrs=maxLength>=0?chrs.substr(0,maxLength):chrs;this.echo(chrs);this.php_js.resourceDataPointer[handle.id]+=chrs.length;return chrs;}
function stream_get_line(handle,length,ending){var start=0,fullline='';if(!this.php_js||!this.php_js.resourceData||!this.php_js.resourceDataPointer||length!==undefined&&!length){return false;}
start=this.php_js.resourceDataPointer[handle.id];if(start===undefined||!this.php_js.resourceData[handle.id][start]){return false;}
fullline=this.php_js.resourceData[handle.id].slice(start,this.php_js.resourceData[handle.id].indexOf(ending,start)+1);if(fullline===''){fullline=this.php_js.resourceData[handle.id].slice(start);}
length=(length===undefined||fullline.length<length)?fullline.length:Math.floor(length/2)||1;this.php_js.resourceDataPointer[handle.id]+=length;return this.php_js.resourceData[handle.id].substr(start,length-(fullline&&ending&&ending.length?ending.length:0));}
function stream_is_local(stream_or_url){if(typeof stream_or_url==='string'){return((/^(https?|ftps?|ssl|tls):/).test(stream_or_url))?false:true;}
return stream_or_url.is_local?true:false;}
function strftime(fmt,timestamp){this.php_js=this.php_js||{};this.setlocale('LC_ALL',0);var phpjs=this.php_js;var _xPad=function(x,pad,r){if(typeof r==='undefined'){r=10;}
for(;parseInt(x,10)<r&&r>1;r/=10){x=pad.toString()+x;}
return x.toString();};var locale=phpjs.localeCategories.LC_TIME;var locales=phpjs.locales;var lc_time=locales[locale].LC_TIME;var _formats={a:function(d){return lc_time.a[d.getDay()];},A:function(d){return lc_time.A[d.getDay()];},b:function(d){return lc_time.b[d.getMonth()];},B:function(d){return lc_time.B[d.getMonth()];},C:function(d){return _xPad(parseInt(d.getFullYear()/100,10),0);},d:['getDate','0'],e:['getDate',' '],g:function(d){return _xPad(parseInt(this.G(d)/100,10),0);},G:function(d){var y=d.getFullYear();var V=parseInt(_formats.V(d),10);var W=parseInt(_formats.W(d),10);if(W>V){y++;}else if(W===0&&V>=52){y--;}
return y;},H:['getHours','0'],I:function(d){var I=d.getHours()%12;return _xPad(I===0?12:I,0);},j:function(d){var ms=d-new Date(''+d.getFullYear()+'/1/1 GMT');ms+=d.getTimezoneOffset()*60000;var doy=parseInt(ms/60000/60/24,10)+1;return _xPad(doy,0,100);},k:['getHours','0'],l:function(d){var l=d.getHours()%12;return _xPad(l===0?12:l,' ');},m:function(d){return _xPad(d.getMonth()+1,0);},M:['getMinutes','0'],p:function(d){return lc_time.p[d.getHours()>=12?1:0];},P:function(d){return lc_time.P[d.getHours()>=12?1:0];},s:function(d){return Date.parse(d)/1000;},S:['getSeconds','0'],u:function(d){var dow=d.getDay();return((dow===0)?7:dow);},U:function(d){var doy=parseInt(_formats.j(d),10);var rdow=6-d.getDay();var woy=parseInt((doy+rdow)/7,10);return _xPad(woy,0);},V:function(d){var woy=parseInt(_formats.W(d),10);var dow1_1=(new Date(''+d.getFullYear()+'/1/1')).getDay();var idow=woy+(dow1_1>4||dow1_1<=1?0:1);if(idow===53&&(new Date(''+d.getFullYear()+'/12/31')).getDay()<4){idow=1;}else if(idow===0){idow=_formats.V(new Date(''+(d.getFullYear()-1)+'/12/31'));}
return _xPad(idow,0);},w:'getDay',W:function(d){var doy=parseInt(_formats.j(d),10);var rdow=7-_formats.u(d);var woy=parseInt((doy+rdow)/7,10);return _xPad(woy,0,10);},y:function(d){return _xPad(d.getFullYear()%100,0);},Y:'getFullYear',z:function(d){var o=d.getTimezoneOffset();var H=_xPad(parseInt(Math.abs(o/60),10),0);var M=_xPad(o%60,0);return(o>0?'-':'+')+H+M;},Z:function(d){return d.toString().replace(/^.*\(([^)]+)\)$/,'$1');},'%':function(d){return'%';}};var _date=((typeof(timestamp)=='undefined')?new Date():(typeof(timestamp)=='object')?new Date(timestamp):new Date(timestamp*1000));var _aggregates={c:'locale',D:'%m/%d/%y',F:'%y-%m-%d',h:'%b',n:'\n',r:'locale',R:'%H:%M',t:'\t',T:'%H:%M:%S',x:'locale',X:'locale'};while(fmt.match(/%[cDFhnrRtTxX]/)){fmt=fmt.replace(/%([cDFhnrRtTxX])/g,function(m0,m1){var f=_aggregates[m1];return(f==='locale'?lc_time[m1]:f);});}
var str=fmt.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g,function(m0,m1){var f=_formats[m1];if(typeof f==='string'){return _date[f]();}else if(typeof f==='function'){return f(_date);}else if(typeof f==='object'&&typeof(f[0])==='string'){return _xPad(_date[f[0]](),f[1]);}else{return m1;}});return str;}
function strip_tags(input,allowed){allowed=(((allowed||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join('');var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return input.replace(commentsAndPhpTags,'').replace(tags,function($0,$1){return allowed.indexOf('<'+$1.toLowerCase()+'>')>-1?$0:'';});}
function stripos(f_haystack,f_needle,f_offset){var haystack=(f_haystack+'').toLowerCase();var needle=(f_needle+'').toLowerCase();var index=0;if((index=haystack.indexOf(needle,f_offset))!==-1){return index;}
return false;}
function stripslashes(str){return(str+'').replace(/\\(.?)/g,function(s,n1){switch(n1){case'\\':return'\\';case'0':return'\u0000';case'':return'';default:return n1;}});}
function stristr(haystack,needle,bool){var pos=0;haystack+='';pos=haystack.toLowerCase().indexOf((needle+'').toLowerCase());if(pos==-1){return false;}else{if(bool){return haystack.substr(0,pos);}else{return haystack.slice(pos);}}}
function strlen(string){var str=string+'';var i=0,chr='',lgth=0;if(!this.php_js||!this.php_js.ini||!this.php_js.ini['unicode.semantics']||this.php_js.ini['unicode.semantics'].local_value.toLowerCase()!=='on'){return string.length;}
var getWholeChar=function(str,i){var code=str.charCodeAt(i);var next='',prev='';if(0xD800<=code&&code<=0xDBFF){if(str.length<=(i+1)){throw'High surrogate without following low surrogate';}
next=str.charCodeAt(i+1);if(0xDC00>next||next>0xDFFF){throw'High surrogate without following low surrogate';}
return str.charAt(i)+str.charAt(i+1);}else if(0xDC00<=code&&code<=0xDFFF){if(i===0){throw'Low surrogate without preceding high surrogate';}
prev=str.charCodeAt(i-1);if(0xD800>prev||prev>0xDBFF){throw'Low surrogate without preceding high surrogate';}
return false;}
return str.charAt(i);};for(i=0,lgth=0;i<str.length;i++){if((chr=getWholeChar(str,i))===false){continue;}
lgth++;}
return lgth;}
function strnatcasecmp(str1,str2){var a=(str1+'').toLowerCase();var b=(str2+'').toLowerCase();var isWhitespaceChar=function(a){return a.charCodeAt(0)<=32;};var isDigitChar=function(a){var charCode=a.charCodeAt(0);return(charCode>=48&&charCode<=57);};var compareRight=function(a,b){var bias=0;var ia=0;var ib=0;var ca;var cb;for(var cnt=0;true;ia++,ib++){ca=a.charAt(ia);cb=b.charAt(ib);if(!isDigitChar(ca)&&!isDigitChar(cb)){return bias;}else if(!isDigitChar(ca)){return-1;}else if(!isDigitChar(cb)){return 1;}else if(ca<cb){if(bias===0){bias=-1;}}else if(ca>cb){if(bias===0){bias=1;}}else if(ca==='0'&&cb==='0'){return bias;}}};var ia=0,ib=0;var nza=0,nzb=0;var ca,cb;var result;while(true){nza=nzb=0;ca=a.charAt(ia);cb=b.charAt(ib);while(isWhitespaceChar(ca)||ca==='0'){if(ca==='0'){nza++;}else{nza=0;}
ca=a.charAt(++ia);}
while(isWhitespaceChar(cb)||cb==='0'){if(cb==='0'){nzb++;}else{nzb=0;}
cb=b.charAt(++ib);}
if(isDigitChar(ca)&&isDigitChar(cb)){if((result=compareRight(a.substring(ia),b.substring(ib)))!==0){return result;}}
if(ca==='0'&&cb==='0'){return nza-nzb;}
if(ca<cb){return-1;}else if(ca>cb){return+1;}
++ia;++ib;}}
function strnatcmp(f_string1,f_string2,f_version){var i=0;if(f_version==undefined){f_version=false;}
var __strnatcmp_split=function(f_string){var result=[];var buffer='';var chr='';var i=0,f_stringl=0;var text=true;f_stringl=f_string.length;for(i=0;i<f_stringl;i++){chr=f_string.substring(i,i+1);if(chr.match(/\d/)){if(text){if(buffer.length>0){result[result.length]=buffer;buffer='';}
text=false;}
buffer+=chr;}else if((text==false)&&(chr=='.')&&(i<(f_string.length-1))&&(f_string.substring(i+1,i+2).match(/\d/))){result[result.length]=buffer;buffer='';}else{if(text==false){if(buffer.length>0){result[result.length]=parseInt(buffer,10);buffer='';}
text=true;}
buffer+=chr;}}
if(buffer.length>0){if(text){result[result.length]=buffer;}else{result[result.length]=parseInt(buffer,10);}}
return result;};var array1=__strnatcmp_split(f_string1+'');var array2=__strnatcmp_split(f_string2+'');var len=array1.length;var text=true;var result=-1;var r=0;if(len>array2.length){len=array2.length;result=1;}
for(i=0;i<len;i++){if(isNaN(array1[i])){if(isNaN(array2[i])){text=true;if((r=this.strcmp(array1[i],array2[i]))!=0){return r;}}else if(text){return 1;}else{return-1;}}else if(isNaN(array2[i])){if(text){return-1;}else{return 1;}}else{if(text||f_version){if((r=(array1[i]-array2[i]))!=0){return r;}}else{if((r=this.strcmp(array1[i].toString(),array2[i].toString()))!=0){return r;}}
text=false;}}
return result;}
function strncasecmp(argStr1,argStr2,len){var diff,i=0;var str1=(argStr1+'').toLowerCase().substr(0,len);var str2=(argStr2+'').toLowerCase().substr(0,len);if(str1.length!==str2.length){if(str1.length<str2.length){len=str1.length;if(str2.substr(0,str1.length)==str1){return str1.length-str2.length;}}else{len=str2.length;if(str1.substr(0,str2.length)==str2){return str1.length-str2.length;}}}else{len=str1.length;}
for(diff=0,i=0;i<len;i++){diff=str1.charCodeAt(i)-str2.charCodeAt(i);if(diff!==0){return diff;}}
return 0;}
function strncmp(str1,str2,lgth){var s1=(str1+'').substr(0,lgth);var s2=(str2+'').substr(0,lgth);return((s1==s2)?0:((s1>s2)?1:-1));}
function strpbrk(haystack,char_list){for(var i=0,len=haystack.length;i<len;++i){if(char_list.indexOf(haystack.charAt(i))>=0){return haystack.slice(i);}}
return false;}
function strpos(haystack,needle,offset){var i=(haystack+'').indexOf(needle,(offset||0));return i===-1?false:i;}
function strptime(dateStr,format){var retObj={tm_sec:0,tm_min:0,tm_hour:0,tm_mday:0,tm_mon:0,tm_year:0,tm_wday:0,tm_yday:0,unparsed:''},that=this,amPmOffset=0,prevHour=false,_date=function(){var o=retObj;return _reset(new Date(Date.UTC(o.tm_year+1900,o.tm_mon,o.tm_mday||1,o.tm_hour,o.tm_min,o.tm_sec)),o.tm_mday);},_reset=function(dateObj,realMday){var o=retObj;var d=dateObj;o.tm_sec=d.getUTCSeconds();o.tm_min=d.getUTCMinutes();o.tm_hour=d.getUTCHours();o.tm_mday=realMday===0?realMday:d.getUTCDate();o.tm_mon=d.getUTCMonth();o.tm_year=d.getUTCFullYear()-1900;o.tm_wday=realMday===0?(d.getUTCDay()>0?d.getUTCDay()-1:6):d.getUTCDay();var jan1=new Date(Date.UTC(d.getUTCFullYear(),0,1));o.tm_yday=Math.ceil((d-jan1)/(1000*60*60*24));};var _NWS=/\S/,_WS=/\s/;var _aggregates={c:'locale',D:'%m/%d/%y',F:'%y-%m-%d',r:'locale',R:'%H:%M',T:'%H:%M:%S',x:'locale',X:'locale'};var _preg_quote=function(str){return(str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g,'\\$1');};this.php_js=this.php_js||{};this.setlocale('LC_ALL',0);var phpjs=this.php_js;var locale=phpjs.localeCategories.LC_TIME;var locales=phpjs.locales;var lc_time=locales[locale].LC_TIME;while(format.match(/%[cDFhnrRtTxX]/)){format=format.replace(/%([cDFhnrRtTxX])/g,function(m0,m1){var f=_aggregates[m1];return(f==='locale'?lc_time[m1]:f);});}
var _addNext=function(j,regex,cb){if(typeof regex==='string'){regex=new RegExp('^'+regex,'i');}
var check=dateStr.slice(j);var match=regex.exec(check);var testNull=match?cb.apply(null,match):null;if(testNull===null){throw'No match in string';}
return j+match[0].length;};var _addLocalized=function(j,formatChar,category){return _addNext(j,that.array_map(_preg_quote,lc_time[formatChar]).join('|'),function(m){var match=lc_time[formatChar].search(new RegExp('^'+_preg_quote(m)+'$','i'));if(match){retObj[category]=match[0];}});};for(var i=0,j=0;i<format.length;i++){if(format.charAt(i)==='%'){var literalPos=['%','n','t'].indexOf(format.charAt(i+1));if(literalPos!==-1){if(['%','\n','\t'].indexOf(dateStr.charAt(j))===literalPos){++i,++j;continue;}
return false;}
var formatChar=format.charAt(i+1);try{switch(formatChar){case'a':case'A':j=_addLocalized(j,formatChar,'tm_wday');break;case'h':case'b':j=_addLocalized(j,'b','tm_mon');_date();break;case'B':j=_addLocalized(j,formatChar,'tm_mon');_date();break;case'C':j=_addNext(j,/^\d?\d/,function(d){var year=(parseInt(d,10)-19)*100;retObj.tm_year=year;_date();if(!retObj.tm_yday){retObj.tm_yday=-1;}});break;case'd':case'e':j=_addNext(j,formatChar==='d'?/^(0[1-9]|[1-2]\d|3[0-1])/:/^([1-2]\d|3[0-1]|[1-9])/,function(d){var dayMonth=parseInt(d,10);retObj.tm_mday=dayMonth;_date();});break;case'g':break;case'G':break;case'H':j=_addNext(j,/^([0-1]\d|2[0-3])/,function(d){var hour=parseInt(d,10);retObj.tm_hour=hour;});break;case'l':case'I':j=_addNext(j,formatChar==='l'?/^([1-9]|1[0-2])/:/^(0[1-9]|1[0-2])/,function(d){var hour=parseInt(d,10)-1+amPmOffset;retObj.tm_hour=hour;prevHour=true;});break;case'j':j=_addNext(j,/^(00[1-9]|0[1-9]\d|[1-2]\d\d|3[0-6][0-6])/,function(d){var dayYear=parseInt(d,10)-1;retObj.tm_yday=dayYear;});break;case'm':j=_addNext(j,/^(0[1-9]|1[0-2])/,function(d){var month=parseInt(d,10)-1;retObj.tm_mon=month;_date();});break;case'M':j=_addNext(j,/^[0-5]\d/,function(d){var minute=parseInt(d,10);retObj.tm_min=minute;});break;case'P':return false;case'p':j=_addNext(j,/^(am|pm)/i,function(d){amPmOffset=(/a/).test(d)?0:12;if(prevHour){retObj.tm_hour+=amPmOffset;}});break;case's':j=_addNext(j,/^\d+/,function(d){var timestamp=parseInt(d,10);var date=new Date(Date.UTC(timestamp*1000));_reset(date);});break;case'S':j=_addNext(j,/^[0-5]\d/,function(d){var second=parseInt(d,10);retObj.tm_sec=second;});break;case'u':case'w':j=_addNext(j,/^\d/,function(d){retObj.tm_wday=d-(formatChar==='u');});break;case'U':case'V':case'W':break;case'y':j=_addNext(j,/^\d?\d/,function(d){d=parseInt(d,10);var year=d>=69?d:d+100;retObj.tm_year=year;_date();if(!retObj.tm_yday){retObj.tm_yday=-1;}});break;case'Y':j=_addNext(j,/^\d{1,4}/,function(d){var year=(parseInt(d,10))-1900;retObj.tm_year=year;_date();if(!retObj.tm_yday){retObj.tm_yday=-1;}});break;case'z':break;case'Z':break;default:throw'Unrecognized formatting character in strptime()';break;}}catch(e){if(e==='No match in string'){return false;}}++i;}else if(format.charAt(i)!==dateStr.charAt(j)){if(dateStr.charAt(j).search(_WS)!==-1){j++;i--;}else if(format.charAt(i).search(_NWS)!==-1){return false;}else{}}else{j++;}}
retObj.unparsed=dateStr.slice(j);return retObj;}
function strrchr(haystack,needle){var pos=0;if(typeof needle!=='string'){needle=String.fromCharCode(parseInt(needle,10));}
needle=needle.charAt(0);pos=haystack.lastIndexOf(needle);if(pos===-1){return false;}
return haystack.substr(pos);}
function strrev(string){string=string+'';var grapheme_extend=/(.)([\uDC00-\uDFFF\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065E\u0670\u06D6-\u06DC\u06DE-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAA\u1C24-\u1C37\u1DC0-\u1DE6\u1DFE\u1DFF\u20D0-\u20F0\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA67C\uA67D\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA926-\uA92D\uA947-\uA953\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uFB1E\uFE00-\uFE0F\uFE20-\uFE26]+)/g;string=string.replace(grapheme_extend,'$2$1');return string.split('').reverse().join('');}
function strripos(haystack,needle,offset){haystack=(haystack+'').toLowerCase();needle=(needle+'').toLowerCase();var i=-1;if(offset){i=(haystack+'').slice(offset).lastIndexOf(needle);if(i!==-1){i+=offset;}}else{i=(haystack+'').lastIndexOf(needle);}
return i>=0?i:false;}
function strrpos(haystack,needle,offset){var i=-1;if(offset){i=(haystack+'').slice(offset).lastIndexOf(needle);if(i!==-1){i+=offset;}}else{i=(haystack+'').lastIndexOf(needle);}
return i>=0?i:false;}
function strspn(str1,str2,start,lgth){var found;var stri;var strj;var j=0;var i=0;start=start?(start<0?(str1.length+start):start):0;lgth=lgth?((lgth<0)?(str1.length+lgth-start):lgth):str1.length-start;str1=str1.substr(start,lgth);for(i=0;i<str1.length;i++){found=0;stri=str1.substring(i,i+1);for(j=0;j<=str2.length;j++){strj=str2.substring(j,j+1);if(stri==strj){found=1;break;}}
if(found!=1){return i;}}
return i;}
function strstr(haystack,needle,bool){var pos=0;haystack+='';pos=haystack.indexOf(needle);if(pos==-1){return false;}else{if(bool){return haystack.substr(0,pos);}else{return haystack.slice(pos);}}}
function strtok(str,tokens){this.php_js=this.php_js||{};if(tokens===undefined){tokens=str;str=this.php_js.strtokleftOver;}
if(str.length===0){return false;}
if(tokens.indexOf(str.charAt(0))!==-1){return this.strtok(str.substr(1),tokens);}
for(var i=0;i<str.length;i++){if(tokens.indexOf(str.charAt(i))!==-1){break;}}
this.php_js.strtokleftOver=str.substr(i+1);return str.substring(0,i);}
function strtolower(str){return(str+'').toLowerCase();}
function strtotime(str,now){var i,match,s,strTmp='',parse='';strTmp=str;strTmp=strTmp.replace(/\s{2,}|^\s|\s$/g,' ');strTmp=strTmp.replace(/[\t\r\n]/g,'');if(strTmp=='now'){return(new Date()).getTime()/1000;}else if(!isNaN(parse=Date.parse(strTmp))){return(parse/1000);}else if(now){now=new Date(now*1000);}else{now=new Date();}
strTmp=strTmp.toLowerCase();var __is={day:{'sun':0,'mon':1,'tue':2,'wed':3,'thu':4,'fri':5,'sat':6},mon:{'jan':0,'feb':1,'mar':2,'apr':3,'may':4,'jun':5,'jul':6,'aug':7,'sep':8,'oct':9,'nov':10,'dec':11}};var process=function(m){var ago=(m[2]&&m[2]=='ago');var num=(num=m[0]=='last'?-1:1)*(ago?-1:1);switch(m[0]){case'last':case'next':switch(m[1].substring(0,3)){case'yea':now.setFullYear(now.getFullYear()+num);break;case'mon':now.setMonth(now.getMonth()+num);break;case'wee':now.setDate(now.getDate()+(num*7));break;case'day':now.setDate(now.getDate()+num);break;case'hou':now.setHours(now.getHours()+num);break;case'min':now.setMinutes(now.getMinutes()+num);break;case'sec':now.setSeconds(now.getSeconds()+num);break;default:var day;if(typeof(day=__is.day[m[1].substring(0,3)])!='undefined'){var diff=day-now.getDay();if(diff==0){diff=7*num;}else if(diff>0){if(m[0]=='last'){diff-=7;}}else{if(m[0]=='next'){diff+=7;}}
now.setDate(now.getDate()+diff);}}
break;default:if(/\d+/.test(m[0])){num*=parseInt(m[0],10);switch(m[1].substring(0,3)){case'yea':now.setFullYear(now.getFullYear()+num);break;case'mon':now.setMonth(now.getMonth()+num);break;case'wee':now.setDate(now.getDate()+(num*7));break;case'day':now.setDate(now.getDate()+num);break;case'hou':now.setHours(now.getHours()+num);break;case'min':now.setMinutes(now.getMinutes()+num);break;case'sec':now.setSeconds(now.getSeconds()+num);break;}}else{return false;}
break;}
return true;};match=strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);if(match!=null){if(!match[2]){match[2]='00:00:00';}else if(!match[3]){match[2]+=':00';}
s=match[1].split(/-/g);for(i in __is.mon){if(__is.mon[i]==s[1]-1){s[1]=i;}}
s[0]=parseInt(s[0],10);s[0]=(s[0]>=0&&s[0]<=69)?'20'+(s[0]<10?'0'+s[0]:s[0]+''):(s[0]>=70&&s[0]<=99)?'19'+s[0]:s[0]+'';return parseInt(this.strtotime(s[2]+' '+s[1]+' '+s[0]+' '+match[2])+(match[4]?match[4]/1000:''),10);}
var regex='([+-]?\\d+\\s'+'(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+'|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday'+'|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)'+'|(last|next)\\s'+'(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+'|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday'+'|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))'+'(\\sago)?';match=strTmp.match(new RegExp(regex,'gi'));if(match==null){return false;}
for(i=0;i<match.length;i++){if(!process(match[i].split(' '))){return false;}}
return(now.getTime()/1000);}
function strtoupper(str){return(str+'').toUpperCase();}
function strtr(str,from,to){var fr='',i=0,j=0,lenStr=0,lenFrom=0,tmpStrictForIn=false,fromTypeStr='',toTypeStr='',istr='';var tmpFrom=[];var tmpTo=[];var ret='';var match=false;if(typeof from==='object'){tmpStrictForIn=this.ini_set('phpjs.strictForIn',false);from=this.krsort(from);this.ini_set('phpjs.strictForIn',tmpStrictForIn);for(fr in from){if(from.hasOwnProperty(fr)){tmpFrom.push(fr);tmpTo.push(from[fr]);}}
from=tmpFrom;to=tmpTo;}
lenStr=str.length;lenFrom=from.length;fromTypeStr=typeof from==='string';toTypeStr=typeof to==='string';for(i=0;i<lenStr;i++){match=false;if(fromTypeStr){istr=str.charAt(i);for(j=0;j<lenFrom;j++){if(istr==from.charAt(j)){match=true;break;}}}else{for(j=0;j<lenFrom;j++){if(str.substr(i,from[j].length)==from[j]){match=true;i=(i+from[j].length)-1;break;}}}
if(match){ret+=toTypeStr?to.charAt(j):to[j];}else{ret+=str.charAt(i);}}
return ret;}
function strval(str){var type='';if(str===null){return'';}
type=this.gettype(str);switch(type){case'boolean':if(str===true){return'1';}
return'';case'array':return'Array';case'object':return'Object';}
return str;}
function substr(str,start,len){var i=0,allBMP=true,es=0,el=0,se=0,ret='';str+='';var end=str.length;this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};switch((this.php_js.ini['unicode.semantics']&&this.php_js.ini['unicode.semantics'].local_value.toLowerCase())){case'on':for(i=0;i<str.length;i++){if(/[\uD800-\uDBFF]/.test(str.charAt(i))&&/[\uDC00-\uDFFF]/.test(str.charAt(i+1))){allBMP=false;break;}}
if(!allBMP){if(start<0){for(i=end-1,es=(start+=end);i>=es;i--){if(/[\uDC00-\uDFFF]/.test(str.charAt(i))&&/[\uD800-\uDBFF]/.test(str.charAt(i-1))){start--;es--;}}}else{var surrogatePairs=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;while((surrogatePairs.exec(str))!=null){var li=surrogatePairs.lastIndex;if(li-2<start){start++;}else{break;}}}
if(start>=end||start<0){return false;}
if(len<0){for(i=end-1,el=(end+=len);i>=el;i--){if(/[\uDC00-\uDFFF]/.test(str.charAt(i))&&/[\uD800-\uDBFF]/.test(str.charAt(i-1))){end--;el--;}}
if(start>end){return false;}
return str.slice(start,end);}else{se=start+len;for(i=start;i<se;i++){ret+=str.charAt(i);if(/[\uD800-\uDBFF]/.test(str.charAt(i))&&/[\uDC00-\uDFFF]/.test(str.charAt(i+1))){se++;}}
return ret;}
break;}
case'off':default:if(start<0){start+=end;}
end=typeof len==='undefined'?end:(len<0?len+end:len+start);return start>=str.length||start<0||start>end?!1:str.slice(start,end);}
return undefined;}
function substr_compare(main_str,str,offset,length,case_insensitivity){if(!offset&&offset!==0){throw'Missing offset for substr_compare()';}
if(offset<0){offset=main_str.length+offset;}
if(length&&length>(main_str.length-offset)){return false;}
length=length||main_str.length-offset;main_str=main_str.substr(offset,length);str=str.substr(0,length);if(case_insensitivity){main_str=(main_str+'').toLowerCase();str=(str+'').toLowerCase();if(main_str==str){return 0;}
return(main_str>str)?1:-1;}
return((main_str==str)?0:((main_str>str)?1:-1));}
function substr_count(haystack,needle,offset,length){var pos=0,cnt=0;haystack+='';needle+='';if(isNaN(offset)){offset=0;}
if(isNaN(length)){length=0;}
offset--;while((offset=haystack.indexOf(needle,offset+1))!=-1){if(length>0&&(offset+needle.length)>length){return false;}else{cnt++;}}
return cnt;}
function substr_replace(str,replace,start,length){if(start<0){start=start+str.length;}
length=length!==undefined?length:str.length;if(length<0){length=length+str.length-start;}
return str.slice(0,start)+replace.substr(0,length)+replace.slice(length)+str.slice(start+length);}
function tan(arg){return Math.tan(arg);}
function tanh(arg){return(Math.exp(arg)-Math.exp(-arg))/(Math.exp(arg)+Math.exp(-arg));}
function time(){return Math.floor(new Date().getTime()/1000);}
function time_sleep_until(timestamp){while(new Date()<timestamp*1000){}
return true;}
function timezone_abbreviations_list(){var list={},i=0,j=0,len=0,jlen=0,indice='',curr='',currSub='',currSubPrefix='',timezone_id='',tzo=0,dst=false;try{php_js_shared;}catch(e){php_js_shared={};}
if(!php_js_shared.tz_abbrs){php_js_shared.tz_abbrs=[[[1,14,"Porto_Acre",9],[1,14,"Eirunepe",9],[1,14,"Rio_Branco",9],[1,14,"Acre",15]],[[0,11,"Porto_Acre",9],[0,11,"Eirunepe",9],[0,11,"Rio_Branco",9],[0,11,"Acre",15]],[[1,25,"Goose_Bay",9],[1,25,"Pangnirtung",9]],[[1,22,"Halifax",9],[1,22,"Barbados",9],[1,22,"Blanc-Sablon",9],[1,22,"Glace_Bay",9],[1,22,"Goose_Bay",9],[1,22,"Martinique",9],[1,22,"Moncton",9],[1,22,"Pangnirtung",9],[1,22,"Thule",9],[1,22,"Bermuda",13],[1,22,"Atlantic",16],[1,51,"Baghdad",12]],[[0,52,"Kabul",12]],[[1,6,"Anchorage",9],[1,6,"Alaska"]],[[0,4,"Anchorage",9],[0,4,"Adak",9],[0,4,"Atka",9],[0,4,"Alaska"],[0,4,"Aleutian"]],[[1,7,"Anchorage",9],[1,7,"Juneau",9],[1,7,"Nome",9],[1,7,"Yakutat",9],[1,7,"Alaska"]],[[0,6,"Anchorage",9],[0,6,"Juneau",9],[0,6,"Nome",9],[0,6,"Yakutat",9],[0,6,"Alaska"]],[[1,57,"Aqtobe",12]],[[0,51,"Aqtobe",12],[0,54,"Aqtobe",12],[0,57,"Aqtobe",12]],[[1,59,"Almaty",12]],[[0,54,"Almaty",12],[0,57,"Almaty",12]],[[1,51,"Yerevan",12],[1,54,"Yerevan",12],[1,22,"Boa_Vista",9],[1,22,"Campo_Grande",9],[1,22,"Cuiaba",9],[1,22,"Manaus",9],[1,22,"Porto_Velho",9],[1,22,"West",15]],[[0,47,"Yerevan",12],[0,51,"Yerevan",12],[0,14,"Boa_Vista",9],[0,14,"Campo_Grande",9],[0,14,"Cuiaba",9],[0,14,"Manaus",9],[0,14,"Porto_Velho",9],[0,14,"West",15],[0,32,"Amsterdam",18]],[[1,76,"Anadyr",12],[1,79,"Anadyr",12],[1,81,"Anadyr",12]],[[0,74,"Anadyr",12],[0,76,"Anadyr",12],[0,79,"Anadyr",12]],[[0,13,"Curacao",9],[0,13,"Aruba",9]],[[1,22,"Halifax",9],[1,22,"Blanc-Sablon",9],[1,22,"Glace_Bay",9],[1,22,"Moncton",9],[1,22,"Pangnirtung",9],[1,22,"Puerto_Rico",9],[1,22,"Atlantic",16]],[[1,54,"Aqtau",12],[1,57,"Aqtau",12],[1,57,"Aqtobe",12]],[[0,51,"Aqtau",12],[0,54,"Aqtau",12],[0,54,"Aqtobe",12]],[[1,22,"Buenos_Aires",9],[1,25,"Buenos_Aires",9],[1,22,"Buenos_Aires",2],[1,22,"Catamarca",2],[1,22,"ComodRivadavia",2],[1,22,"Cordoba",2],[1,22,"Jujuy",2],[1,22,"La_Rioja",2],[1,22,"Mendoza",2],[1,22,"Rio_Gallegos",2],[1,22,"San_Juan",2],[1,22,"Tucuman",2],[1,22,"Ushuaia",2],[1,22,"Catamarca",9],[1,22,"Cordoba",9],[1,22,"Jujuy",9],[1,22,"Mendoza",9],[1,22,"Rosario",9],[1,22,"Palmer",10],[1,25,"Buenos_Aires",2],[1,25,"Catamarca",2],[1,25,"ComodRivadavia",2],[1,25,"Cordoba",2],[1,25,"Jujuy",2],[1,25,"La_Rioja",2],[1,25,"Mendoza",2],[1,25,"Rio_Gallegos",2],[1,25,"San_Juan",2],[1,25,"Tucuman",2],[1,25,"Ushuaia",2],[1,25,"Catamarca",9],[1,25,"Cordoba",9],[1,25,"Jujuy",9],[1,25,"Mendoza",9],[1,25,"Rosario",9],[1,25,"Palmer",10]],[[0,22,"Buenos_Aires",9],[0,14,"Buenos_Aires",9],[0,22,"Buenos_Aires",2],[0,22,"Catamarca",2],[0,22,"ComodRivadavia",2],[0,22,"Cordoba",2],[0,22,"Jujuy",2],[0,22,"La_Rioja",2],[0,22,"Mendoza",2],[0,22,"Rio_Gallegos",2],[0,22,"San_Juan",2],[0,22,"Tucuman",2],[0,22,"Ushuaia",2],[0,22,"Catamarca",9],[0,22,"Cordoba",9],[0,22,"Jujuy",9],[0,22,"Mendoza",9],[0,22,"Rosario",9],[0,22,"Palmer",10],[0,14,"Buenos_Aires",2],[0,14,"Catamarca",2],[0,14,"ComodRivadavia",2],[0,14,"Cordoba",2],[0,14,"Jujuy",2],[0,14,"La_Rioja",2],[0,14,"Mendoza",2],[0,14,"Rio_Gallegos",2],[0,14,"San_Juan",2],[0,14,"Tucuman",2],[0,14,"Ushuaia",2],[0,14,"Catamarca",9],[0,14,"Cordoba",9],[0,14,"Jujuy",9],[0,14,"Mendoza",9],[0,14,"Rosario",9],[0,14,"Palmer",10]],[[1,54,"Ashkhabad",12],[1,57,"Ashkhabad",12],[1,54,"Ashgabat",12],[1,57,"Ashgabat",12]],[[0,51,"Ashkhabad",12],[0,54,"Ashkhabad",12],[0,51,"Ashgabat",12],[0,54,"Ashgabat",12]],[[0,47,"Riyadh",12],[0,14,"Anguilla",9],[0,14,"Antigua",9],[0,14,"Aruba",9],[0,14,"Barbados",9],[0,14,"Blanc-Sablon",9],[0,14,"Curacao",9],[0,14,"Dominica",9],[0,14,"Glace_Bay",9],[0,14,"Goose_Bay",9],[0,14,"Grenada",9],[0,14,"Guadeloupe",9],[0,14,"Halifax",9],[0,14,"Martinique",9],[0,14,"Miquelon",9],[0,14,"Moncton",9],[0,14,"Montserrat",9],[0,14,"Pangnirtung",9],[0,14,"Port_of_Spain",9],[0,14,"Puerto_Rico",9],[0,14,"Santo_Domingo",9],[0,14,"St_Kitts",9],[0,14,"St_Lucia",9],[0,14,"St_Thomas",9],[0,14,"St_Vincent",9],[0,14,"Thule",9],[0,14,"Tortola",9],[0,14,"Virgin",9],[0,14,"Bermuda",13],[0,14,"Atlantic",16],[0,47,"Aden",12],[0,47,"Baghdad",12],[0,47,"Bahrain",12],[0,47,"Kuwait",12],[0,47,"Qatar",12]],[[1,22,"Halifax",9],[1,22,"Blanc-Sablon",9],[1,22,"Glace_Bay",9],[1,22,"Moncton",9],[1,22,"Pangnirtung",9],[1,22,"Puerto_Rico",9],[1,22,"Atlantic",16]],[[1,31,"Azores",13]],[[1,28,"Azores",13],[1,31,"Azores",13]],[[0,28,"Azores",13],[0,25,"Azores",13]],[[1,51,"Baku",12],[1,54,"Baku",12]],[[0,47,"Baku",12],[0,51,"Baku",12]],[[1,51,"Baku",12],[1,54,"Baku",12]],[[0,47,"Baku",12],[0,51,"Baku",12]],[[1,42,"London",18],[1,42,"Belfast",18],[1,42,"Gibraltar",18],[1,42,"Guernsey",18],[1,42,"Isle_of_Man",18],[1,42,"Jersey",18],[1,42,"GB"],[1,42,"GB-Eire"]],[[1,4,"Adak",9],[1,4,"Atka",9],[1,4,"Nome",9],[1,4,"Aleutian"],[0,57,"Dacca",12],[0,57,"Dhaka",12]],[[0,43,"Mogadishu"],[0,43,"Kampala"],[0,43,"Nairobi"]],[[0,46,"Nairobi"],[0,46,"Dar_es_Salaam"],[0,46,"Kampala"]],[[0,15,"Barbados",9],[0,27,"Banjul"],[0,41,"Tiraspol",18],[0,41,"Chisinau",18]],[[0,63,"Brunei",12],[0,65,"Brunei",12]],[[1,66,"Kuching",12]],[[0,63,"Kuching",12],[0,65,"Kuching",12]],[[1,19,"La_Paz",9]],[[0,14,"La_Paz",9]],[[1,25,"Sao_Paulo",9],[1,25,"Araguaina",9],[1,25,"Bahia",9],[1,25,"Belem",9],[1,25,"Fortaleza",9],[1,25,"Maceio",9],[1,25,"Recife",9],[1,25,"East",15]],[[0,22,"Sao_Paulo",9],[0,22,"Araguaina",9],[0,22,"Bahia",9],[0,22,"Belem",9],[0,22,"Fortaleza",9],[0,22,"Maceio",9],[0,22,"Recife",9],[0,22,"East",15]],[[0,35,"London",18],[1,35,"London",18],[0,2,"Adak",9],[0,2,"Atka",9],[0,2,"Nome",9],[0,2,"Midway",21],[0,2,"Pago_Pago",21],[0,2,"Samoa",21],[0,2,"Aleutian"],[0,2,"Samoa"],[0,35,"Belfast",18],[0,35,"Guernsey",18],[0,35,"Isle_of_Man",18],[0,35,"Jersey",18],[0,35,"GB"],[0,35,"GB-Eire"],[1,35,"Eire"],[1,35,"Belfast",18],[1,35,"Dublin",18],[1,35,"Gibraltar",18],[1,35,"Guernsey",18],[1,35,"Isle_of_Man",18],[1,35,"Jersey",18],[1,35,"GB"],[1,35,"GB-Eire"]],[[0,57,"Thimbu",12],[0,57,"Thimphu",12]],[[0,58,"Calcutta",12],[0,58,"Dacca",12],[0,58,"Dhaka",12],[0,58,"Rangoon",12]],[[0,28,"Canary",13]],[[1,6,"Anchorage",9],[1,6,"Alaska"]],[[0,70,"Adelaide",14],[1,47,"Gaborone"],[1,47,"Khartoum"]],[[0,4,"Anchorage",9],[0,4,"Alaska"],[0,42,"Khartoum"],[0,42,"Blantyre"],[0,42,"Gaborone"],[0,42,"Harare"],[0,42,"Kigali"],[0,42,"Lusaka"],[0,42,"Maputo"],[0,42,"Windhoek"]],[[1,6,"Anchorage",9],[1,6,"Alaska"]],[[1,14,"Rankin_Inlet",9]],[[1,11,"Chicago",9],[1,14,"Havana",9],[1,14,"Cuba"],[1,11,"Atikokan",9],[1,11,"Belize",9],[1,11,"Cambridge_Bay",9],[1,11,"Cancun",9],[1,11,"Chihuahua",9],[1,11,"Coral_Harbour",9],[1,11,"Costa_Rica",9],[1,11,"El_Salvador",9],[1,11,"Fort_Wayne",9],[1,11,"Guatemala",9],[1,11,"Indianapolis",4],[1,11,"Knox",4],[1,11,"Marengo",4],[1,11,"Petersburg",4],[1,11,"Vevay",4],[1,11,"Vincennes",4],[1,11,"Winamac",4],[1,11,"Indianapolis",9],[1,11,"Iqaluit",9],[1,11,"Louisville",6],[1,11,"Monticello",6],[1,11,"Knox_IN",9],[1,11,"Louisville",9],[1,11,"Managua",9],[1,11,"Menominee",9],[1,11,"Merida",9],[1,11,"Mexico_City",9],[1,11,"Monterrey",9],[1,11,"Center",8],[1,11,"New_Salem",8],[1,11,"Pangnirtung",9],[1,11,"Rainy_River",9],[1,11,"Rankin_Inlet",9],[1,11,"Tegucigalpa",9],[1,11,"Winnipeg",9],[1,11,"Central",16],[1,11,"CST6CDT"],[1,11,"General",20],[1,11,"Central"],[1,11,"East-Indiana"],[1,11,"Indiana-Starke"],[1,69,"Shanghai",12],[1,69,"Chongqing",12],[1,69,"Chungking",12],[1,69,"Harbin",12],[1,69,"Kashgar",12],[1,69,"Taipei",12],[1,69,"Urumqi",12],[1,69,"PRC"],[1,69,"ROC"]],[[1,47,"Berlin",18],[1,47,"CET"]],[[1,42,"Berlin",18],[1,47,"Kaliningrad",18],[1,42,"Algiers"],[1,42,"Ceuta"],[1,42,"Tripoli"],[1,42,"Tunis"],[1,42,"Longyearbyen",11],[1,42,"Jan_Mayen",13],[1,42,"CET"],[1,42,"Amsterdam",18],[1,42,"Andorra",18],[1,42,"Athens",18],[1,42,"Belgrade",18],[1,42,"Bratislava",18],[1,42,"Brussels",18],[1,42,"Budapest",18],[1,42,"Chisinau",18],[1,42,"Copenhagen",18],[1,42,"Gibraltar",18],[1,42,"Kaliningrad",18],[1,42,"Kiev",18],[1,42,"Lisbon",18],[1,42,"Ljubljana",18],[1,42,"Luxembourg",18],[1,42,"Madrid",18],[1,42,"Malta",18],[1,42,"Minsk",18],[1,42,"Monaco",18],[1,42,"Oslo",18],[1,42,"Paris",18],[1,42,"Podgorica",18],[1,42,"Prague",18],[1,42,"Riga",18],[1,42,"Rome",18],[1,42,"San_Marino",18],[1,42,"Sarajevo",18],[1,42,"Simferopol",18],[1,42,"Skopje",18],[1,42,"Sofia",18],[1,42,"Stockholm",18],[1,42,"Tallinn",18],[1,42,"Tirane",18],[1,42,"Tiraspol",18],[1,42,"Uzhgorod",18],[1,42,"Vaduz",18],[1,42,"Vatican",18],[1,42,"Vienna",18],[1,42,"Vilnius",18],[1,42,"Warsaw",18],[1,42,"Zagreb",18],[1,42,"Zaporozhye",18],[1,42,"Zurich",18],[1,42,"Libya"],[1,42,"Poland"],[1,42,"Portugal"],[1,42,"WET"]],[[0,35,"Berlin",18],[0,35,"Algiers"],[0,35,"Casablanca"],[0,35,"Ceuta"],[0,35,"Tripoli"],[0,35,"Tunis"],[0,35,"Longyearbyen",11],[0,35,"Jan_Mayen",13],[0,35,"CET"],[0,35,"Amsterdam",18],[0,35,"Andorra",18],[0,35,"Athens",18],[0,35,"Belgrade",18],[0,35,"Bratislava",18],[0,35,"Brussels",18],[0,35,"Budapest",18],[0,35,"Chisinau",18],[0,35,"Copenhagen",18],[0,35,"Gibraltar",18],[0,35,"Kaliningrad",18],[0,35,"Kiev",18],[0,35,"Lisbon",18],[0,35,"Ljubljana",18],[0,35,"Luxembourg",18],[0,35,"Madrid",18],[0,35,"Malta",18],[0,35,"Minsk",18],[0,35,"Monaco",18],[0,35,"Oslo",18],[0,35,"Paris",18],[0,35,"Podgorica",18],[0,35,"Prague",18],[0,35,"Riga",18],[0,35,"Rome",18],[0,35,"San_Marino",18],[0,35,"Sarajevo",18],[0,35,"Simferopol",18],[0,35,"Skopje",18],[0,35,"Sofia",18],[0,35,"Stockholm",18],[0,35,"Tallinn",18],[0,35,"Tirane",18],[0,35,"Tiraspol",18],[0,35,"Uzhgorod",18],[0,35,"Vaduz",18],[0,35,"Vatican",18],[0,35,"Vienna",18],[0,35,"Vilnius",18],[0,35,"Warsaw",18],[0,35,"Zagreb",18],[0,35,"Zaporozhye",18],[0,35,"Zurich",18],[0,35,"Libya"],[0,35,"Poland"],[0,35,"Portugal"],[0,35,"WET"],[0,42,"Kaliningrad",18]],[[1,28,"Scoresbysund",9]],[[0,25,"Scoresbysund",9]],[[1,80,"Chatham",21],[1,80,"NZ-CHAT"]],[[0,78,"Chatham",21],[0,78,"NZ-CHAT"]],[[0,67,"Harbin",12],[0,69,"Harbin",12]],[[1,10,"Belize",9]],[[1,72,"Choibalsan",12]],[[0,69,"Choibalsan",12]],[[0,65,"Dili",12],[0,65,"Makassar",12],[0,65,"Pontianak",12],[0,65,"Ujung_Pandang",12]],[[0,69,"Sakhalin",12]],[[1,5,"Rarotonga",21]],[[0,4,"Rarotonga",21]],[[1,22,"Santiago",9],[1,14,"Santiago",9],[1,22,"Palmer",10],[1,22,"Continental",17],[1,14,"Continental",17]],[[0,14,"Santiago",9],[0,11,"Santiago",9],[0,14,"Palmer",10],[0,14,"Continental",17],[0,11,"Continental",17]],[[1,14,"Bogota",9]],[[0,11,"Bogota",9]],[[1,11,"Chicago",9],[1,11,"Atikokan",9],[1,11,"Coral_Harbour",9],[1,11,"Fort_Wayne",9],[1,11,"Indianapolis",4],[1,11,"Knox",4],[1,11,"Marengo",4],[1,11,"Petersburg",4],[1,11,"Vevay",4],[1,11,"Vincennes",4],[1,11,"Winamac",4],[1,11,"Indianapolis",9],[1,11,"Louisville",6],[1,11,"Monticello",6],[1,11,"Knox_IN",9],[1,11,"Louisville",9],[1,11,"Menominee",9],[1,11,"Rainy_River",9],[1,11,"Rankin_Inlet",9],[1,11,"Winnipeg",9],[1,11,"Central",16],[1,11,"CST6CDT"],[1,11,"Central"],[1,11,"East-Indiana"],[1,11,"Indiana-Starke"]],[[0,9,"Chicago",9],[0,11,"Havana",9],[0,11,"Cuba"],[0,9,"Atikokan",9],[0,9,"Belize",9],[0,9,"Cambridge_Bay",9],[0,9,"Cancun",9],[0,9,"Chihuahua",9],[0,9,"Coral_Harbour",9],[0,9,"Costa_Rica",9],[0,9,"Detroit",9],[0,9,"El_Salvador",9],[0,9,"Fort_Wayne",9],[0,9,"Guatemala",9],[0,9,"Hermosillo",9],[0,9,"Indianapolis",4],[0,9,"Knox",4],[0,9,"Marengo",4],[0,9,"Petersburg",4],[0,9,"Vevay",4],[0,9,"Vincennes",4],[0,9,"Winamac",4],[0,9,"Indianapolis",9],[0,9,"Iqaluit",9],[0,9,"Louisville",6],[0,9,"Monticello",6],[0,9,"Knox_IN",9],[0,9,"Louisville",9],[0,9,"Managua",9],[0,9,"Mazatlan",9],[0,9,"Menominee",9],[0,9,"Merida",9],[0,9,"Mexico_City",9],[0,9,"Monterrey",9],[0,9,"Center",8],[0,9,"New_Salem",8],[0,9,"Pangnirtung",9],[0,9,"Rainy_River",9],[0,9,"Rankin_Inlet",9],[0,9,"Regina",9],[0,9,"Swift_Current",9],[0,9,"Tegucigalpa",9],[0,9,"Winnipeg",9],[0,9,"Central",16],[0,9,"East-Saskatchewan",16],[0,9,"Saskatchewan",16],[0,9,"CST6CDT"],[0,9,"BajaSur",20],[0,9,"General",20],[0,9,"Central"],[0,9,"East-Indiana"],[0,9,"Indiana-Starke"],[0,9,"Michigan"],[0,65,"Chongqing",12],[0,65,"Chungking",12],[0,65,"Harbin",12],[0,65,"Kashgar",12],[0,65,"Macao",12],[0,65,"Macau",12],[0,65,"Shanghai",12],[0,65,"Taipei",12],[0,65,"Urumqi",12],[0,65,"PRC"],[0,65,"ROC"],[0,70,"Jayapura",12],[0,70,"Adelaide",14],[0,70,"Broken_Hill",14],[0,70,"Darwin",14],[0,70,"North",14],[0,70,"South",14],[0,70,"Yancowinna",14],[1,73,"Adelaide",14],[1,73,"Broken_Hill",14],[1,73,"Darwin",14],[1,73,"North",14],[1,73,"South",14],[1,73,"Yancowinna",14]],[[1,28,"Cape_Verde",13]],[[0,28,"Cape_Verde",13],[0,25,"Cape_Verde",13]],[[0,68,"Eucla",14],[1,71,"Eucla",14]],[[1,11,"Chicago",9],[1,11,"Atikokan",9],[1,11,"Coral_Harbour",9],[1,11,"Fort_Wayne",9],[1,11,"Indianapolis",4],[1,11,"Knox",4],[1,11,"Marengo",4],[1,11,"Petersburg",4],[1,11,"Vevay",4],[1,11,"Vincennes",4],[1,11,"Winamac",4],[1,11,"Indianapolis",9],[1,11,"Louisville",6],[1,11,"Monticello",6],[1,11,"Knox_IN",9],[1,11,"Louisville",9],[1,11,"Menominee",9],[1,11,"Mexico_City",9],[1,11,"Rainy_River",9],[1,11,"Rankin_Inlet",9],[1,11,"Winnipeg",9],[1,11,"Central",16],[1,11,"CST6CDT"],[1,11,"General",20],[1,11,"Central"],[1,11,"East-Indiana"],[1,11,"Indiana-Starke"]],[[0,72,"Guam",21],[0,72,"Saipan",21]],[[0,57,"Dacca",12],[0,57,"Dhaka",12]],[[0,59,"Davis",10]],[[0,72,"DumontDUrville",10]],[[1,57,"Dushanbe",12],[1,59,"Dushanbe",12]],[[0,54,"Dushanbe",12],[0,57,"Dushanbe",12]],[[1,11,"EasterIsland",17],[1,9,"EasterIsland",17],[1,11,"Easter",21],[1,9,"Easter",21]],[[0,9,"EasterIsland",17],[0,8,"EasterIsland",17],[0,9,"Easter",21],[0,8,"Easter",21],[1,51,"Antananarivo",19]],[[0,47,"Khartoum"],[0,47,"Addis_Ababa"],[0,47,"Asmara"],[0,47,"Asmera"],[0,47,"Dar_es_Salaam"],[0,47,"Djibouti"],[0,47,"Kampala"],[0,47,"Mogadishu"],[0,47,"Nairobi"],[0,47,"Antananarivo",19],[0,47,"Comoro",19],[0,47,"Mayotte",19]],[[0,11,"Guayaquil",9],[0,11,"Galapagos",21]],[[1,22,"Iqaluit",9]],[[1,14,"New_York",9],[1,14,"Cancun",9],[1,14,"Detroit",9],[1,14,"Fort_Wayne",9],[1,14,"Grand_Turk",9],[1,14,"Indianapolis",4],[1,14,"Marengo",4],[1,14,"Vevay",4],[1,14,"Vincennes",4],[1,14,"Winamac",4],[1,14,"Indianapolis",9],[1,14,"Iqaluit",9],[1,14,"Jamaica",9],[1,14,"Louisville",6],[1,14,"Monticello",6],[1,14,"Louisville",9],[1,14,"Montreal",9],[1,14,"Nassau",9],[1,14,"Nipigon",9],[1,14,"Pangnirtung",9],[1,14,"Port-au-Prince",9],[1,14,"Santo_Domingo",9],[1,14,"Thunder_Bay",9],[1,14,"Toronto",9],[1,14,"Eastern",16],[1,14,"EST"],[1,14,"EST5EDT"],[1,14,"Jamaica"],[1,14,"East-Indiana"],[1,14,"Eastern"],[1,14,"Michigan"]],[[1,47,"Helsinki",18],[1,47,"Cairo"],[1,47,"Amman",12],[1,47,"Beirut",12],[1,47,"Damascus",12],[1,47,"Gaza",12],[1,47,"Istanbul",12],[1,47,"Nicosia",12],[1,47,"EET"],[1,47,"Egypt"],[1,47,"Athens",18],[1,47,"Bucharest",18],[1,47,"Chisinau",18],[1,47,"Istanbul",18],[1,47,"Kaliningrad",18],[1,47,"Kiev",18],[1,47,"Mariehamn",18],[1,47,"Minsk",18],[1,47,"Moscow",18],[1,47,"Nicosia",18],[1,47,"Riga",18],[1,47,"Simferopol",18],[1,47,"Sofia",18],[1,47,"Tallinn",18],[1,47,"Tiraspol",18],[1,47,"Uzhgorod",18],[1,47,"Vilnius",18],[1,47,"Warsaw",18],[1,47,"Zaporozhye",18],[1,47,"Poland"],[1,47,"Turkey"],[1,47,"W-SU"]],[[0,42,"Helsinki",18],[1,47,"Gaza",12],[0,42,"Cairo"],[0,42,"Tripoli"],[0,42,"Amman",12],[0,42,"Beirut",12],[0,42,"Damascus",12],[0,42,"Gaza",12],[0,42,"Istanbul",12],[0,42,"Nicosia",12],[0,42,"EET"],[0,42,"Egypt"],[0,42,"Athens",18],[0,42,"Bucharest",18],[0,42,"Chisinau",18],[0,42,"Istanbul",18],[0,42,"Kaliningrad",18],[0,42,"Kiev",18],[0,42,"Mariehamn",18],[0,42,"Minsk",18],[0,42,"Moscow",18],[0,42,"Nicosia",18],[0,42,"Riga",18],[0,42,"Simferopol",18],[0,42,"Sofia",18],[0,42,"Tallinn",18],[0,42,"Tiraspol",18],[0,42,"Uzhgorod",18],[0,42,"Vilnius",18],[0,42,"Warsaw",18],[0,42,"Zaporozhye",18],[0,42,"Libya"],[0,42,"Poland"],[0,42,"Turkey"],[0,42,"W-SU"]],[[1,31,"Scoresbysund",9]],[[0,28,"Scoresbysund",9]],[[1,13,"Santo_Domingo",9]],[[0,69,"Jayapura",12]],[[1,14,"New_York",9],[1,14,"Detroit",9],[1,14,"Iqaluit",9],[1,14,"Montreal",9],[1,14,"Nipigon",9],[1,14,"Thunder_Bay",9],[1,14,"Toronto",9],[1,14,"Eastern",16],[1,14,"EST"],[1,14,"EST5EDT"],[1,14,"Eastern"],[1,14,"Michigan"]],[[0,11,"New_York",9],[0,11,"Antigua",9],[0,11,"Atikokan",9],[0,11,"Cambridge_Bay",9],[0,11,"Cancun",9],[0,11,"Cayman",9],[0,11,"Chicago",9],[0,11,"Coral_Harbour",9],[0,11,"Detroit",9],[0,11,"Fort_Wayne",9],[0,11,"Grand_Turk",9],[0,11,"Indianapolis",4],[0,11,"Knox",4],[0,11,"Marengo",4],[0,11,"Petersburg",4],[0,11,"Vevay",4],[0,11,"Vincennes",4],[0,11,"Winamac",4],[0,11,"Indianapolis",9],[0,11,"Iqaluit",9],[0,11,"Jamaica",9],[0,11,"Louisville",6],[0,11,"Monticello",6],[0,11,"Knox_IN",9],[0,11,"Louisville",9],[0,11,"Managua",9],[0,11,"Menominee",9],[0,11,"Merida",9],[0,11,"Montreal",9],[0,11,"Nassau",9],[0,11,"Nipigon",9],[0,11,"Panama",9],[0,11,"Pangnirtung",9],[0,11,"Port-au-Prince",9],[0,11,"Rankin_Inlet",9],[0,11,"Santo_Domingo",9],[0,11,"Thunder_Bay",9],[0,11,"Toronto",9],[0,11,"Eastern",16],[0,11,"EST"],[0,11,"EST5EDT"],[0,11,"Jamaica"],[0,11,"Central"],[0,11,"East-Indiana"],[0,11,"Eastern"],[0,11,"Indiana-Starke"],[0,11,"Michigan"],[0,72,"ACT",14],[0,72,"Brisbane",14],[0,72,"Canberra",14],[0,72,"Currie",14],[0,72,"Hobart",14],[0,72,"Lindeman",14],[0,72,"Melbourne",14],[0,72,"NSW",14],[0,72,"Queensland",14],[0,72,"Sydney",14],[0,72,"Tasmania",14],[0,72,"Victoria",14],[1,74,"Melbourne",14],[1,74,"ACT",14],[1,74,"Brisbane",14],[1,74,"Canberra",14],[1,74,"Currie",14],[1,74,"Hobart",14],[1,74,"Lindeman",14],[1,74,"NSW",14],[1,74,"Queensland",14],[1,74,"Sydney",14],[1,74,"Tasmania",14],[1,74,"Victoria",14]],[[1,14,"New_York",9],[1,14,"Detroit",9],[1,14,"Iqaluit",9],[1,14,"Montreal",9],[1,14,"Nipigon",9],[1,14,"Thunder_Bay",9],[1,14,"Toronto",9],[1,14,"Eastern",16],[1,14,"EST"],[1,14,"EST5EDT"],[1,14,"Eastern"],[1,14,"Michigan"]],[[1,79,"Fiji",21]],[[0,76,"Fiji",21]],[[1,22,"Stanley",13],[1,25,"Stanley",13]],[[0,22,"Stanley",13],[0,14,"Stanley",13]],[[1,28,"Noronha",9],[1,28,"DeNoronha",15]],[[0,25,"Noronha",9],[0,25,"DeNoronha",15]],[[0,51,"Aqtau",12],[0,54,"Aqtau",12]],[[1,57,"Bishkek",12],[1,59,"Bishkek",12]],[[0,54,"Bishkek",12],[0,57,"Bishkek",12]],[[0,9,"Galapagos",21]],[[0,6,"Gambier",21]],[[0,16,"Guyana",9]],[[1,51,"Tbilisi",12],[1,54,"Tbilisi",12]],[[0,47,"Tbilisi",12],[0,51,"Tbilisi",12]],[[0,22,"Cayenne",9],[0,14,"Cayenne",9]],[[1,33,"Accra"]],[[0,31,"Abidjan"],[0,31,"Accra"],[0,31,"Bamako"],[0,31,"Banjul"],[0,31,"Bissau"],[0,31,"Conakry"],[0,31,"Dakar"],[0,31,"Freetown"],[0,31,"Malabo"],[0,31,"Monrovia"],[0,31,"Niamey"],[0,31,"Nouakchott"],[0,31,"Ouagadougou"],[0,31,"Porto-Novo"],[0,31,"Sao_Tome"],[0,31,"Timbuktu"],[0,31,"Danmarkshavn",9],[0,31,"Reykjavik",13],[0,31,"St_Helena",13],[0,31,"Eire"],[0,31,"Belfast",18],[0,31,"Dublin",18],[0,31,"Gibraltar",18],[0,31,"Guernsey",18],[0,31,"Isle_of_Man",18],[0,31,"Jersey",18],[0,31,"London",18],[0,31,"GB"],[0,31,"GB-Eire"],[0,31,"Iceland"]],[[0,51,"Dubai",12],[0,51,"Bahrain",12],[0,51,"Muscat",12],[0,51,"Qatar",12]],[[0,22,"Guyana",9],[0,16,"Guyana",9],[0,14,"Guyana",9]],[[1,6,"Adak",9],[1,6,"Atka",9],[1,6,"Aleutian"]],[[0,4,"Adak",9],[0,4,"Atka",9],[0,4,"Aleutian"]],[[1,5,"Honolulu",21],[1,5,"HST"],[1,5,"Hawaii"]],[[1,69,"Hong_Kong",12],[1,69,"Hongkong"]],[[0,65,"Hong_Kong",12],[0,65,"Hongkong"]],[[1,65,"Hovd",12]],[[0,57,"Hovd",12],[0,59,"Hovd",12]],[[1,5,"Honolulu",21],[1,5,"HST"],[1,5,"Hawaii"]],[[0,4,"Honolulu",21],[0,3,"Honolulu",21],[0,4,"HST"],[0,4,"Hawaii"],[0,3,"HST"],[0,3,"Hawaii"]],[[1,5,"Honolulu",21],[1,5,"HST"],[1,5,"Hawaii"]],[[0,59,"Bangkok",12],[0,59,"Phnom_Penh",12],[0,59,"Saigon",12],[0,59,"Vientiane",12],[0,65,"Phnom_Penh",12],[0,65,"Saigon",12],[0,65,"Vientiane",12]],[[1,51,"Jerusalem",12],[1,51,"Tel_Aviv",12],[1,51,"Israel"]],[[1,47,"Jerusalem",12],[1,47,"Gaza",12],[1,47,"Tel_Aviv",12],[1,47,"Israel"]],[[1,57,"Colombo",12]],[[0,54,"Chagos",19],[0,57,"Chagos",19]],[[1,52,"Tehran",12],[1,54,"Tehran",12],[1,52,"Iran"],[1,54,"Iran"]],[[1,65,"Irkutsk",12],[1,69,"Irkutsk",12]],[[0,59,"Irkutsk",12],[0,65,"Irkutsk",12]],[[0,49,"Tehran",12],[0,51,"Tehran",12],[0,49,"Iran"],[0,51,"Iran"]],[[1,31,"Reykjavik",13],[1,31,"Iceland"]],[[0,42,"Jerusalem",12],[0,28,"Reykjavik",13],[0,28,"Iceland"],[0,55,"Calcutta",12],[0,55,"Colombo",12],[0,55,"Dacca",12],[0,55,"Dhaka",12],[0,55,"Karachi",12],[0,55,"Katmandu",12],[0,55,"Thimbu",12],[0,55,"Thimphu",12],[1,34,"Eire"],[1,34,"Dublin",18],[1,58,"Calcutta",12],[1,58,"Colombo",12],[1,58,"Karachi",12],[0,35,"Eire"],[0,35,"Dublin",18],[1,35,"Eire"],[1,35,"Dublin",18],[0,42,"Gaza",12],[0,42,"Tel_Aviv",12],[0,42,"Israel"]],[[0,62,"Jakarta",12]],[[1,72,"Tokyo",12],[1,72,"Japan"]],[[0,69,"Tokyo",12],[0,69,"Dili",12],[0,69,"Jakarta",12],[0,69,"Kuala_Lumpur",12],[0,69,"Kuching",12],[0,69,"Makassar",12],[0,69,"Manila",12],[0,69,"Pontianak",12],[0,69,"Rangoon",12],[0,69,"Sakhalin",12],[0,69,"Singapore",12],[0,69,"Ujung_Pandang",12],[0,69,"Japan"],[0,69,"Nauru",21],[0,69,"Singapore"]],[[0,54,"Karachi",12]],[[0,54,"Kashgar",12],[0,55,"Kashgar",12]],[[1,69,"Seoul",12],[1,72,"Seoul",12],[1,69,"ROK"],[1,72,"ROK"]],[[1,57,"Bishkek",12]],[[0,54,"Bishkek",12],[0,57,"Bishkek",12]],[[1,57,"Qyzylorda",12]],[[0,51,"Qyzylorda",12],[0,54,"Qyzylorda",12],[0,57,"Qyzylorda",12]],[[0,38,"Vilnius",18]],[[0,74,"Kosrae",21],[0,76,"Kosrae",21]],[[1,59,"Krasnoyarsk",12],[1,65,"Krasnoyarsk",12]],[[0,57,"Krasnoyarsk",12],[0,59,"Krasnoyarsk",12]],[[0,65,"Seoul",12],[0,67,"Seoul",12],[0,69,"Seoul",12],[0,65,"Pyongyang",12],[0,65,"ROK"],[0,67,"Pyongyang",12],[0,67,"ROK"],[0,69,"Pyongyang",12],[0,69,"ROK"]],[[1,47,"Samara",18],[1,51,"Samara",18],[1,54,"Samara",18]],[[0,47,"Samara",18],[0,51,"Samara",18]],[[0,0,"Kwajalein",21],[0,0,"Kwajalein"]],[[0,73,"Lord_Howe",14],[1,74,"Lord_Howe",14],[1,75,"Lord_Howe",14],[0,73,"LHI",14],[1,74,"LHI",14],[1,75,"LHI",14]],[[0,4,"Kiritimati",21],[0,81,"Kiritimati",21]],[[0,57,"Colombo",12],[0,58,"Colombo",12]],[[0,59,"Chongqing",12],[0,59,"Chungking",12]],[[0,29,"Monrovia"]],[[1,45,"Riga",18]],[[1,35,"Madeira",13]],[[1,31,"Madeira",13]],[[0,28,"Madeira",13]],[[1,74,"Magadan",12],[1,76,"Magadan",12]],[[0,72,"Magadan",12],[0,74,"Magadan",12]],[[1,62,"Singapore",12],[1,62,"Kuala_Lumpur",12],[1,62,"Singapore"]],[[0,59,"Singapore",12],[0,62,"Singapore",12],[0,63,"Singapore",12],[0,59,"Kuala_Lumpur",12],[0,59,"Singapore"],[0,62,"Kuala_Lumpur",12],[0,62,"Singapore"],[0,63,"Kuala_Lumpur",12],[0,63,"Singapore"]],[[0,5,"Marquesas",21]],[[0,57,"Mawson",10]],[[1,11,"Cambridge_Bay",9],[1,11,"Yellowknife",9]],[[1,53,"Moscow",18],[1,53,"W-SU"]],[[1,9,"Denver",9],[1,9,"Boise",9],[1,9,"Cambridge_Bay",9],[1,9,"Chihuahua",9],[1,9,"Edmonton",9],[1,9,"Hermosillo",9],[1,9,"Inuvik",9],[1,9,"Mazatlan",9],[1,9,"Center",8],[1,9,"New_Salem",8],[1,9,"Phoenix",9],[1,9,"Regina",9],[1,9,"Shiprock",9],[1,9,"Swift_Current",9],[1,9,"Yellowknife",9],[1,9,"East-Saskatchewan",16],[1,9,"Mountain",16],[1,9,"Saskatchewan",16],[1,9,"BajaSur",20],[1,9,"MST"],[1,9,"MST7MDT"],[1,9,"Navajo"],[1,9,"Arizona"],[1,9,"Mountain"]],[[1,42,"MET"]],[[0,35,"MET"]],[[0,76,"Kwajalein",21],[0,76,"Kwajalein"],[0,76,"Majuro",21]],[[0,44,"Moscow",18],[0,58,"Rangoon",12],[0,64,"Makassar",12],[0,64,"Ujung_Pandang",12],[0,44,"W-SU"]],[[1,69,"Macao",12],[1,69,"Macau",12]],[[0,65,"Macao",12],[0,65,"Macau",12]],[[1,9,"Denver",9],[1,9,"Boise",9],[1,9,"Cambridge_Bay",9],[1,9,"Edmonton",9],[1,9,"Center",8],[1,9,"New_Salem",8],[1,9,"Regina",9],[1,9,"Shiprock",9],[1,9,"Swift_Current",9],[1,9,"Yellowknife",9],[1,9,"East-Saskatchewan",16],[1,9,"Mountain",16],[1,9,"Saskatchewan",16],[1,9,"MST"],[1,9,"MST7MDT"],[1,9,"Navajo"],[1,9,"Mountain"],[0,72,"Saipan",21]],[[1,51,"Moscow",18],[1,54,"Moscow",18],[1,51,"Chisinau",18],[1,51,"Kaliningrad",18],[1,51,"Kiev",18],[1,51,"Minsk",18],[1,51,"Riga",18],[1,51,"Simferopol",18],[1,51,"Tallinn",18],[1,51,"Tiraspol",18],[1,51,"Uzhgorod",18],[1,51,"Vilnius",18],[1,51,"Zaporozhye",18],[1,51,"W-SU"],[1,54,"W-SU"]],[[0,47,"Moscow",18],[0,47,"Chisinau",18],[0,47,"Kaliningrad",18],[0,47,"Kiev",18],[0,47,"Minsk",18],[0,47,"Riga",18],[0,47,"Simferopol",18],[0,47,"Tallinn",18],[0,47,"Tiraspol",18],[0,47,"Uzhgorod",18],[0,47,"Vilnius",18],[0,47,"Zaporozhye",18],[0,47,"W-SU"]],[[0,8,"Denver",9],[0,8,"Boise",9],[0,8,"Cambridge_Bay",9],[0,8,"Chihuahua",9],[0,8,"Dawson_Creek",9],[0,8,"Edmonton",9],[0,8,"Ensenada",9],[0,8,"Hermosillo",9],[0,8,"Inuvik",9],[0,8,"Mazatlan",9],[0,8,"Mexico_City",9],[0,8,"Center",8],[0,8,"New_Salem",8],[0,8,"Phoenix",9],[0,8,"Regina",9],[0,8,"Shiprock",9],[0,8,"Swift_Current",9],[0,8,"Tijuana",9],[0,8,"Yellowknife",9],[0,8,"East-Saskatchewan",16],[0,8,"Mountain",16],[0,8,"Saskatchewan",16],[0,8,"BajaNorte",20],[0,8,"BajaSur",20],[0,8,"General",20],[0,8,"MST"],[0,8,"MST7MDT"],[0,8,"Navajo"],[0,8,"Arizona"],[0,8,"Mountain"],[1,50,"Moscow",18],[1,50,"W-SU"]],[[0,51,"Mauritius",19]],[[0,54,"Maldives",19]],[[1,9,"Denver",9],[1,9,"Boise",9],[1,9,"Cambridge_Bay",9],[1,9,"Edmonton",9],[1,9,"Center",8],[1,9,"New_Salem",8],[1,9,"Phoenix",9],[1,9,"Regina",9],[1,9,"Shiprock",9],[1,9,"Swift_Current",9],[1,9,"Yellowknife",9],[1,9,"East-Saskatchewan",16],[1,9,"Mountain",16],[1,9,"Saskatchewan",16],[1,9,"MST"],[1,9,"MST7MDT"],[1,9,"Navajo"],[1,9,"Arizona"],[1,9,"Mountain"]],[[0,65,"Kuala_Lumpur",12],[0,65,"Kuching",12]],[[1,76,"Noumea",21]],[[0,74,"Noumea",21]],[[1,26,"St_Johns",9],[1,26,"Newfoundland",16]],[[1,24,"St_Johns",9],[1,23,"St_Johns",9],[1,4,"Midway",21],[1,24,"Goose_Bay",9],[1,24,"Newfoundland",16],[1,23,"Goose_Bay",9],[1,23,"Newfoundland",16]],[[0,21,"Paramaribo",9]],[[1,37,"Amsterdam",18]],[[0,33,"Amsterdam",18]],[[0,75,"Norfolk",21]],[[1,59,"Novosibirsk",12],[1,65,"Novosibirsk",12]],[[0,57,"Novosibirsk",12],[0,59,"Novosibirsk",12]],[[1,24,"St_Johns",9],[1,4,"Adak",9],[1,4,"Atka",9],[1,4,"Nome",9],[1,4,"Aleutian"],[1,24,"Goose_Bay",9],[1,24,"Newfoundland",16],[0,56,"Katmandu",12]],[[0,75,"Nauru",21],[0,76,"Nauru",21]],[[0,21,"St_Johns",9],[0,20,"St_Johns",9],[0,21,"Goose_Bay",9],[0,21,"Newfoundland",16],[0,20,"Goose_Bay",9],[0,20,"Newfoundland",16],[0,2,"Adak",9],[0,2,"Atka",9],[0,2,"Nome",9],[0,2,"Midway",21],[0,2,"Pago_Pago",21],[0,2,"Samoa",21],[0,2,"Aleutian"],[0,2,"Samoa"],[1,36,"Amsterdam",18]],[[0,2,"Niue",21],[0,1,"Niue",21]],[[1,24,"St_Johns",9],[1,4,"Adak",9],[1,4,"Atka",9],[1,4,"Nome",9],[1,4,"Aleutian"],[1,24,"Goose_Bay",9],[1,24,"Newfoundland",16]],[[1,79,"Auckland",21],[1,79,"McMurdo",10],[1,79,"South_Pole",10],[1,79,"NZ"]],[[0,75,"Auckland",21],[0,75,"NZ"]],[[0,76,"Auckland",21],[1,76,"Auckland",21],[1,77,"Auckland",21],[0,76,"McMurdo",10],[0,76,"South_Pole",10],[0,76,"NZ"],[1,76,"NZ"],[1,77,"NZ"]],[[1,57,"Omsk",12],[1,59,"Omsk",12]],[[0,54,"Omsk",12],[0,57,"Omsk",12]],[[1,54,"Oral",12]],[[0,51,"Oral",12],[0,54,"Oral",12]],[[1,9,"Inuvik",9]],[[1,8,"Los_Angeles",9],[1,8,"Boise",9],[1,8,"Dawson",9],[1,8,"Dawson_Creek",9],[1,8,"Ensenada",9],[1,8,"Inuvik",9],[1,8,"Juneau",9],[1,8,"Tijuana",9],[1,8,"Vancouver",9],[1,8,"Whitehorse",9],[1,8,"Pacific",16],[1,8,"Yukon",16],[1,8,"BajaNorte",20],[1,8,"PST8PDT"],[1,8,"Pacific"],[1,8,"Pacific-New"]],[[1,14,"Lima",9]],[[1,76,"Kamchatka",12],[1,79,"Kamchatka",12]],[[0,74,"Kamchatka",12],[0,76,"Kamchatka",12]],[[0,11,"Lima",9]],[[0,2,"Enderbury",21],[0,79,"Enderbury",21]],[[1,69,"Manila",12]],[[0,65,"Manila",12]],[[1,57,"Karachi",12]],[[0,54,"Karachi",12]],[[1,25,"Miquelon",9]],[[0,22,"Miquelon",9]],[[0,18,"Paramaribo",9],[0,17,"Paramaribo",9],[0,61,"Pontianak",12],[0,72,"DumontDUrville",10]],[[1,8,"Los_Angeles",9],[1,8,"Dawson_Creek",9],[1,8,"Ensenada",9],[1,8,"Inuvik",9],[1,8,"Juneau",9],[1,8,"Tijuana",9],[1,8,"Vancouver",9],[1,8,"Pacific",16],[1,8,"BajaNorte",20],[1,8,"PST8PDT"],[1,8,"Pacific"],[1,8,"Pacific-New"]],[[0,7,"Los_Angeles",9],[0,7,"Boise",9],[0,7,"Dawson",9],[0,7,"Dawson_Creek",9],[0,7,"Ensenada",9],[0,7,"Hermosillo",9],[0,7,"Inuvik",9],[0,7,"Juneau",9],[0,7,"Mazatlan",9],[0,7,"Tijuana",9],[0,7,"Vancouver",9],[0,7,"Whitehorse",9],[0,7,"Pacific",16],[0,7,"Yukon",16],[0,7,"BajaNorte",20],[0,7,"BajaSur",20],[0,7,"Pitcairn",21],[0,7,"PST8PDT"],[0,7,"Pacific"],[0,7,"Pacific-New"]],[[1,8,"Los_Angeles",9],[1,8,"Dawson_Creek",9],[1,8,"Ensenada",9],[1,8,"Inuvik",9],[1,8,"Juneau",9],[1,8,"Tijuana",9],[1,8,"Vancouver",9],[1,8,"Pacific",16],[1,8,"BajaNorte",20],[1,8,"PST8PDT"],[1,8,"Pacific"],[1,8,"Pacific-New"]],[[1,22,"Asuncion",9]],[[0,22,"Asuncion",9],[0,14,"Asuncion",9]],[[1,59,"Qyzylorda",12]],[[0,54,"Qyzylorda",12],[0,57,"Qyzylorda",12]],[[0,51,"Reunion",19]],[[0,39,"Riga",18]],[[0,22,"Rothera",10]],[[1,74,"Sakhalin",12],[1,76,"Sakhalin",12]],[[0,72,"Sakhalin",12],[0,74,"Sakhalin",12]],[[1,57,"Samarkand",12],[1,54,"Samara",18]],[[0,51,"Samarkand",12],[0,54,"Samarkand",12],[0,1,"Apia",21],[0,1,"Pago_Pago",21],[0,1,"Samoa",21],[0,1,"Samoa"],[0,47,"Samara",18],[0,51,"Samara",18]],[[1,47,"Johannesburg"],[0,42,"Johannesburg"],[1,47,"Maseru"],[1,47,"Windhoek"],[0,42,"Maseru"],[0,42,"Mbabane"],[0,42,"Windhoek"]],[[0,74,"Guadalcanal",21]],[[0,51,"Mahe",19]],[[0,63,"Singapore",12],[0,65,"Singapore",12],[0,63,"Singapore"],[0,65,"Singapore"]],[[1,57,"Aqtau",12]],[[0,54,"Aqtau",12],[0,57,"Aqtau",12]],[[1,30,"Freetown"],[1,35,"Freetown"]],[[0,60,"Saigon",12],[0,12,"Santiago",9],[0,12,"Continental",17],[0,60,"Phnom_Penh",12],[0,60,"Vientiane",12]],[[0,22,"Paramaribo",9],[0,21,"Paramaribo",9]],[[0,2,"Samoa",21],[0,2,"Midway",21],[0,2,"Pago_Pago",21],[0,2,"Samoa"]],[[0,47,"Volgograd",18],[0,51,"Volgograd",18]],[[1,54,"Yekaterinburg",12],[1,57,"Yekaterinburg",12]],[[0,51,"Yekaterinburg",12],[0,54,"Yekaterinburg",12]],[[0,47,"Syowa",10]],[[0,4,"Tahiti",21]],[[1,59,"Samarkand",12],[1,57,"Tashkent",12],[1,59,"Tashkent",12]],[[0,57,"Samarkand",12],[0,54,"Tashkent",12],[0,57,"Tashkent",12]],[[1,51,"Tbilisi",12],[1,54,"Tbilisi",12]],[[0,47,"Tbilisi",12],[0,51,"Tbilisi",12]],[[0,54,"Kerguelen",19]],[[0,54,"Dushanbe",12]],[[0,65,"Dili",12],[0,69,"Dili",12]],[[0,48,"Tehran",12],[0,48,"Iran"],[0,51,"Ashgabat",12],[0,51,"Ashkhabad",12],[0,54,"Ashgabat",12],[0,54,"Ashkhabad",12],[0,40,"Tallinn",18]],[[1,81,"Tongatapu",21]],[[0,79,"Tongatapu",21]],[[1,51,"Istanbul",18],[1,51,"Istanbul",12],[1,51,"Turkey"]],[[0,47,"Istanbul",18],[0,47,"Istanbul",12],[0,47,"Turkey"]],[[0,47,"Volgograd",18]],[[1,69,"Ulaanbaatar",12],[1,69,"Ulan_Bator",12]],[[0,59,"Ulaanbaatar",12],[0,65,"Ulaanbaatar",12],[0,59,"Choibalsan",12],[0,59,"Ulan_Bator",12],[0,65,"Choibalsan",12],[0,65,"Ulan_Bator",12]],[[1,54,"Oral",12],[1,57,"Oral",12]],[[0,51,"Oral",12],[0,54,"Oral",12],[0,57,"Oral",12]],[[0,57,"Urumqi",12]],[[1,22,"Montevideo",9],[1,24,"Montevideo",9]],[[1,25,"Montevideo",9]],[[0,22,"Montevideo",9],[0,21,"Montevideo",9]],[[1,57,"Samarkand",12],[1,57,"Tashkent",12]],[[0,54,"Samarkand",12],[0,54,"Tashkent",12]],[[0,14,"Caracas",9],[0,13,"Caracas",9]],[[1,72,"Vladivostok",12]],[[0,69,"Vladivostok",12],[1,74,"Vladivostok",12]],[[0,69,"Vladivostok",12],[0,72,"Vladivostok",12]],[[1,51,"Volgograd",18],[1,54,"Volgograd",18]],[[0,47,"Volgograd",18],[0,51,"Volgograd",18]],[[0,57,"Vostok",10]],[[1,76,"Efate",21]],[[0,74,"Efate",21]],[[1,22,"Mendoza",9],[1,22,"Jujuy",2],[1,22,"Mendoza",2],[1,22,"Jujuy",9]],[[0,14,"Mendoza",9],[0,14,"Catamarca",2],[0,14,"ComodRivadavia",2],[0,14,"Cordoba",2],[0,14,"Jujuy",2],[0,14,"La_Rioja",2],[0,14,"Mendoza",2],[0,14,"Rio_Gallegos",2],[0,14,"San_Juan",2],[0,14,"Tucuman",2],[0,14,"Ushuaia",2],[0,14,"Catamarca",9],[0,14,"Cordoba",9],[0,14,"Jujuy",9],[0,14,"Rosario",9]],[[1,42,"Windhoek"],[1,42,"Ndjamena"]],[[0,28,"Dakar"],[0,28,"Bamako"],[0,28,"Banjul"],[0,28,"Bissau"],[0,28,"Conakry"],[0,28,"El_Aaiun"],[0,28,"Freetown"],[0,28,"Niamey"],[0,28,"Nouakchott"],[0,28,"Timbuktu"],[0,31,"Freetown"],[0,35,"Brazzaville"],[0,35,"Bangui"],[0,35,"Douala"],[0,35,"Lagos"],[0,35,"Libreville"],[0,35,"Luanda"],[0,35,"Malabo"],[0,35,"Ndjamena"],[0,35,"Niamey"],[0,35,"Porto-Novo"],[0,35,"Windhoek"]],[[1,42,"Lisbon",18],[1,42,"Madrid",18],[1,42,"Monaco",18],[1,42,"Paris",18],[1,42,"Portugal"],[1,42,"WET"]],[[1,35,"Paris",18],[1,35,"Algiers"],[1,35,"Casablanca"],[1,35,"Ceuta"],[1,35,"Canary",13],[1,35,"Faeroe",13],[1,35,"Faroe",13],[1,35,"Madeira",13],[1,35,"Brussels",18],[1,35,"Lisbon",18],[1,35,"Luxembourg",18],[1,35,"Madrid",18],[1,35,"Monaco",18],[1,35,"Portugal"],[1,35,"WET"],[1,42,"Luxembourg",18]],[[0,31,"Paris",18],[0,31,"Algiers"],[0,31,"Casablanca"],[0,31,"Ceuta"],[0,31,"El_Aaiun"],[0,31,"Azores",13],[0,31,"Canary",13],[0,31,"Faeroe",13],[0,31,"Faroe",13],[0,31,"Madeira",13],[0,31,"Brussels",18],[0,31,"Lisbon",18],[0,31,"Luxembourg",18],[0,31,"Madrid",18],[0,31,"Monaco",18],[0,31,"Portugal"],[0,31,"WET"],[0,35,"Luxembourg",18]],[[1,25,"Godthab",9],[1,25,"Danmarkshavn",9]],[[0,22,"Godthab",9],[0,22,"Danmarkshavn",9]],[[0,59,"Jakarta",12],[0,63,"Jakarta",12],[0,65,"Jakarta",12],[0,59,"Pontianak",12],[0,63,"Pontianak",12],[0,65,"Pontianak",12]],[[0,65,"Perth",14],[1,69,"Perth",14],[0,2,"Apia",21],[0,65,"Casey",10],[0,65,"West",14],[1,69,"West",14]],[[1,69,"Yakutsk",12],[1,72,"Yakutsk",12]],[[0,65,"Yakutsk",12],[0,69,"Yakutsk",12]],[[1,8,"Dawson",9],[1,8,"Whitehorse",9],[1,8,"Yukon",16]],[[1,7,"Dawson",9],[1,7,"Whitehorse",9],[1,7,"Yakutat",9],[1,7,"Yukon",16]],[[1,57,"Yekaterinburg",12]],[[0,54,"Yekaterinburg",12]],[[1,51,"Yerevan",12],[1,54,"Yerevan",12]],[[0,47,"Yerevan",12],[0,51,"Yerevan",12]],[[1,7,"Dawson",9],[1,7,"Whitehorse",9],[1,7,"Yakutat",9],[1,7,"Yukon",16]],[[0,6,"Anchorage",9],[0,6,"Dawson",9],[0,6,"Juneau",9],[0,6,"Nome",9],[0,6,"Whitehorse",9],[0,6,"Yakutat",9],[0,6,"Yukon",16],[0,6,"Alaska"]],[[1,7,"Dawson",9],[1,7,"Whitehorse",9],[1,7,"Yakutat",9],[1,7,"Yukon",16]],[[0,35]],[[0,42]],[[0,47]],[[0,51]],[[0,54]],[[0,57]],[[0,59]],[[0,65]],[[0,69]],[[0,72]],[[0,74]],[[0,76]],[[0,28]],[[0,25]],[[0,22]],[[0,14]],[[0,11]],[[0,9]],[[0,8]],[[0,31,"UTC"]],[[0,7]],[[0,6]],[[0,4]],[[0,2]],[[0,0]],[[0,31,"Davis",10],[0,31,"DumontDUrville",10]],[[0,31]]];}
if(!php_js_shared.tz_abbreviations){php_js_shared.tz_abbreviations=["acst","act","addt","adt","aft","ahdt","ahst","akdt","akst","aktst","aktt","almst","almt","amst","amt","anast","anat","ant","apt","aqtst","aqtt","arst","art","ashst","asht","ast","awt","azomt","azost","azot","azst","azt","bakst","bakt","bdst","bdt","beat","beaut","bmt","bnt","bortst","bort","bost","bot","brst","brt","bst","btt","burt","cant","capt","cast","cat","cawt","cddt","cdt","cemt","cest","cet","cgst","cgt","chadt","chast","chat","chdt","chost","chot","cit","cjt","ckhst","ckt","clst","clt","cost","cot","cpt","cst","cvst","cvt","cwst","cwt","chst","dact","davt","ddut","dusst","dust","easst","east","eat","ect","eddt","edt","eest","eet","egst","egt","ehdt","eit","ept","est","ewt","fjst","fjt","fkst","fkt","fnst","fnt","fort","frust","frut","galt","gamt","gbgt","gest","get","gft","ghst","gmt","gst","gyt","hadt","hast","hdt","hkst","hkt","hovst","hovt","hpt","hst","hwt","ict","iddt","idt","ihst","iot","irdt","irkst","irkt","irst","isst","ist","javt","jdt","jst","kart","kast","kdt","kgst","kgt","kizst","kizt","kmt","kost","krast","krat","kst","kuyst","kuyt","kwat","lhst","lint","lkt","lont","lrt","lst","madmt","madst","madt","magst","magt","malst","malt","mart","mawt","mddt","mdst","mdt","mest","met","mht","mmt","most","mot","mpt","msd","msk","mst","mut","mvt","mwt","myt","ncst","nct","nddt","ndt","negt","nest","net","nft","novst","novt","npt","nrt","nst","nut","nwt","nzdt","nzmt","nzst","omsst","omst","orast","orat","pddt","pdt","pest","petst","pett","pet","phot","phst","pht","pkst","pkt","pmdt","pmst","pmt","ppt","pst","pwt","pyst","pyt","qyzst","qyzt","ret","rmt","rott","sakst","sakt","samst","samt","sast","sbt","sct","sgt","shest","shet","slst","smt","srt","sst","stat","svest","svet","syot","taht","tasst","tast","tbist","tbit","tft","tjt","tlt","tmt","tost","tot","trst","trt","tsat","ulast","ulat","urast","urat","urut","uyhst","uyst","uyt","uzst","uzt","vet","vlasst","vlast","vlat","volst","volt","vost","vust","vut","warst","wart","wast","wat","wemt","west","wet","wgst","wgt","wit","wst","yakst","yakt","yddt","ydt","yekst","yekt","yerst","yert","ypt","yst","ywt","a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","utc","u","v","w","x","y","zzz","z"];}
if(!php_js_shared.tz_offsets){php_js_shared.tz_offsets=[-43200,-41400,-39600,-37800,-36000,-34200,-32400,-28800,-25200,-21600,-19800,-18000,-16966,-16200,-14400,-14308,-13500,-13252,-13236,-12756,-12652,-12600,-10800,-9052,-9000,-7200,-5400,-3996,-3600,-2670,-1200,0,1172,1200,2079,3600,4772,4800,5736,5784,5940,6264,7200,9000,9048,9384,9885,10800,12344,12600,12648,14400,16200,16248,18000,19800,20700,21600,23400,25200,25580,26240,26400,27000,28656,28800,30000,30600,31500,32400,34200,35100,36000,37800,39600,41400,43200,45000,45900,46800,49500,50400];}
if(!php_js_shared.tz_prefixes){php_js_shared.tz_prefixes=['Africa','America','America/Argentina','America','America/Indiana','America','America/Kentucky','America','America/North_Dakota','America','Antarctica','Arctic','Asia','Atlantic','Australia','Brazil','Canada','Chile','Europe','Indian','Mexico','Pacific'];}
var dtz=this.date_default_timezone_get();for(i=0,len=php_js_shared.tz_abbrs.length;i<len;i++){indice=php_js_shared.tz_abbreviations[i];curr=php_js_shared.tz_abbrs[i];list[indice]=[];for(j=0,jlen=curr.length;j<jlen;j++){currSub=curr[j];currSubPrefix=(currSub[3]?php_js_shared.tz_prefixes[currSub[3]]+'/':'');timezone_id=currSub[2]?(currSubPrefix+currSub[2]):null;tzo=php_js_shared.tz_offsets[currSub[1]];dst=!!currSub[0];list[indice].push({'dst':dst,'offset':tzo,'timezone_id':timezone_id});if(dtz===timezone_id){this.php_js.currentTimezoneOffset=tzo;this.php_js.currentTimezoneDST=dst;}}}
return list;}
function timezone_identifiers_list(what,country){var i=0,new_what='',returnArr=[],continents=[],codes=[],indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;},identifiers=['Africa/Abidjan','Africa/Accra','Africa/Addis_Ababa','Africa/Algiers','Africa/Asmara','Africa/Asmera','Africa/Bamako','Africa/Bangui','Africa/Banjul','Africa/Bissau','Africa/Blantyre','Africa/Brazzaville','Africa/Bujumbura','Africa/Cairo','Africa/Casablanca','Africa/Ceuta','Africa/Conakry','Africa/Dakar','Africa/Dar_es_Salaam','Africa/Djibouti','Africa/Douala','Africa/El_Aaiun','Africa/Freetown','Africa/Gaborone','Africa/Harare','Africa/Johannesburg','Africa/Kampala','Africa/Khartoum','Africa/Kigali','Africa/Kinshasa','Africa/Lagos','Africa/Libreville','Africa/Lome','Africa/Luanda','Africa/Lubumbashi','Africa/Lusaka','Africa/Malabo','Africa/Maputo','Africa/Maseru','Africa/Mbabane','Africa/Mogadishu','Africa/Monrovia','Africa/Nairobi','Africa/Ndjamena','Africa/Niamey','Africa/Nouakchott','Africa/Ouagadougou','Africa/Porto-Novo','Africa/Sao_Tome','Africa/Timbuktu','Africa/Tripoli','Africa/Tunis','Africa/Windhoek','America/Adak','America/Anchorage','America/Anguilla','America/Antigua','America/Araguaina','America/Argentina/Buenos_Aires','America/Argentina/Catamarca','America/Argentina/ComodRivadavia','America/Argentina/Cordoba','America/Argentina/Jujuy','America/Argentina/La_Rioja','America/Argentina/Mendoza','America/Argentina/Rio_Gallegos','America/Argentina/San_Juan','America/Argentina/San_Luis','America/Argentina/Tucuman','America/Argentina/Ushuaia','America/Aruba','America/Asuncion','America/Atikokan','America/Atka','America/Bahia','America/Barbados','America/Belem','America/Belize','America/Blanc-Sablon','America/Boa_Vista','America/Bogota','America/Boise','America/Buenos_Aires','America/Cambridge_Bay','America/Campo_Grande','America/Cancun','America/Caracas','America/Catamarca','America/Cayenne','America/Cayman','America/Chicago','America/Chihuahua','America/Coral_Harbour','America/Cordoba','America/Costa_Rica','America/Cuiaba','America/Curacao','America/Danmarkshavn','America/Dawson','America/Dawson_Creek','America/Denver','America/Detroit','America/Dominica','America/Edmonton','America/Eirunepe','America/El_Salvador','America/Ensenada','America/Fort_Wayne','America/Fortaleza','America/Glace_Bay','America/Godthab','America/Goose_Bay','America/Grand_Turk','America/Grenada','America/Guadeloupe','America/Guatemala','America/Guayaquil','America/Guyana','America/Halifax','America/Havana','America/Hermosillo','America/Indiana/Indianapolis','America/Indiana/Knox','America/Indiana/Marengo','America/Indiana/Petersburg','America/Indiana/Tell_City','America/Indiana/Vevay','America/Indiana/Vincennes','America/Indiana/Winamac','America/Indianapolis','America/Inuvik','America/Iqaluit','America/Jamaica','America/Jujuy','America/Juneau','America/Kentucky/Louisville','America/Kentucky/Monticello','America/Knox_IN','America/La_Paz','America/Lima','America/Los_Angeles','America/Louisville','America/Maceio','America/Managua','America/Manaus','America/Marigot','America/Martinique','America/Mazatlan','America/Mendoza','America/Menominee','America/Merida','America/Mexico_City','America/Miquelon','America/Moncton','America/Monterrey','America/Montevideo','America/Montreal','America/Montserrat','America/Nassau','America/New_York','America/Nipigon','America/Nome','America/Noronha','America/North_Dakota/Center','America/North_Dakota/New_Salem','America/Panama','America/Pangnirtung','America/Paramaribo','America/Phoenix','America/Port-au-Prince','America/Port_of_Spain','America/Porto_Acre','America/Porto_Velho','America/Puerto_Rico','America/Rainy_River','America/Rankin_Inlet','America/Recife','America/Regina','America/Resolute','America/Rio_Branco','America/Rosario','America/Santiago','America/Santo_Domingo','America/Sao_Paulo','America/Scoresbysund','America/Shiprock','America/St_Barthelemy','America/St_Johns','America/St_Kitts','America/St_Lucia','America/St_Thomas','America/St_Vincent','America/Swift_Current','America/Tegucigalpa','America/Thule','America/Thunder_Bay','America/Tijuana','America/Toronto','America/Tortola','America/Vancouver','America/Virgin','America/Whitehorse','America/Winnipeg','America/Yakutat','America/Yellowknife','Antarctica/Casey','Antarctica/Davis','Antarctica/DumontDUrville','Antarctica/Mawson','Antarctica/McMurdo','Antarctica/Palmer','Antarctica/Rothera','Antarctica/South_Pole','Antarctica/Syowa','Antarctica/Vostok','Arctic/Longyearbyen','Asia/Aden','Asia/Almaty','Asia/Amman','Asia/Anadyr','Asia/Aqtau','Asia/Aqtobe','Asia/Ashgabat','Asia/Ashkhabad','Asia/Baghdad','Asia/Bahrain','Asia/Baku','Asia/Bangkok','Asia/Beirut','Asia/Bishkek','Asia/Brunei','Asia/Calcutta','Asia/Choibalsan','Asia/Chongqing','Asia/Chungking','Asia/Colombo','Asia/Dacca','Asia/Damascus','Asia/Dhaka','Asia/Dili','Asia/Dubai','Asia/Dushanbe','Asia/Gaza','Asia/Harbin','Asia/Ho_Chi_Minh','Asia/Hong_Kong','Asia/Hovd','Asia/Irkutsk','Asia/Istanbul','Asia/Jakarta','Asia/Jayapura','Asia/Jerusalem','Asia/Kabul','Asia/Kamchatka','Asia/Karachi','Asia/Kashgar','Asia/Katmandu','Asia/Kolkata','Asia/Krasnoyarsk','Asia/Kuala_Lumpur','Asia/Kuching','Asia/Kuwait','Asia/Macao','Asia/Macau','Asia/Magadan','Asia/Makassar','Asia/Manila','Asia/Muscat','Asia/Nicosia','Asia/Novosibirsk','Asia/Omsk','Asia/Oral','Asia/Phnom_Penh','Asia/Pontianak','Asia/Pyongyang','Asia/Qatar','Asia/Qyzylorda','Asia/Rangoon','Asia/Riyadh','Asia/Saigon','Asia/Sakhalin','Asia/Samarkand','Asia/Seoul','Asia/Shanghai','Asia/Singapore','Asia/Taipei','Asia/Tashkent','Asia/Tbilisi','Asia/Tehran','Asia/Tel_Aviv','Asia/Thimbu','Asia/Thimphu','Asia/Tokyo','Asia/Ujung_Pandang','Asia/Ulaanbaatar','Asia/Ulan_Bator','Asia/Urumqi','Asia/Vientiane','Asia/Vladivostok','Asia/Yakutsk','Asia/Yekaterinburg','Asia/Yerevan','Atlantic/Azores','Atlantic/Bermuda','Atlantic/Canary','Atlantic/Cape_Verde','Atlantic/Faeroe','Atlantic/Faroe','Atlantic/Jan_Mayen','Atlantic/Madeira','Atlantic/Reykjavik','Atlantic/South_Georgia','Atlantic/St_Helena','Atlantic/Stanley','Australia/ACT','Australia/Adelaide','Australia/Brisbane','Australia/Broken_Hill','Australia/Canberra','Australia/Currie','Australia/Darwin','Australia/Eucla','Australia/Hobart','Australia/LHI','Australia/Lindeman','Australia/Lord_Howe','Australia/Melbourne','Australia/North','Australia/NSW','Australia/Perth','Australia/Queensland','Australia/South','Australia/Sydney','Australia/Tasmania','Australia/Victoria','Australia/West','Australia/Yancowinna','Brazil/Acre','Brazil/DeNoronha','Brazil/East','Brazil/West','Canada/Atlantic','Canada/Central','Canada/East-Saskatchewan','Canada/Eastern','Canada/Mountain','Canada/Newfoundland','Canada/Pacific','Canada/Saskatchewan','Canada/Yukon','CET','Chile/Continental','Chile/EasterIsland','CST6CDT','Cuba','EET','Egypt','Eire','EST','EST5EDT','Etc/GMT','Etc/GMT+0','Etc/GMT+1','Etc/GMT+10','Etc/GMT+11','Etc/GMT+12','Etc/GMT+2','Etc/GMT+3','Etc/GMT+4','Etc/GMT+5','Etc/GMT+6','Etc/GMT+7','Etc/GMT+8','Etc/GMT+9','Etc/GMT-0','Etc/GMT-1','Etc/GMT-10','Etc/GMT-11','Etc/GMT-12','Etc/GMT-13','Etc/GMT-14','Etc/GMT-2','Etc/GMT-3','Etc/GMT-4','Etc/GMT-5','Etc/GMT-6','Etc/GMT-7','Etc/GMT-8','Etc/GMT-9','Etc/GMT0','Etc/Greenwich','Etc/UCT','Etc/Universal','Etc/UTC','Etc/Zulu','Europe/Amsterdam','Europe/Andorra','Europe/Athens','Europe/Belfast','Europe/Belgrade','Europe/Berlin','Europe/Bratislava','Europe/Brussels','Europe/Bucharest','Europe/Budapest','Europe/Chisinau','Europe/Copenhagen','Europe/Dublin','Europe/Gibraltar','Europe/Guernsey','Europe/Helsinki','Europe/Isle_of_Man','Europe/Istanbul','Europe/Jersey','Europe/Kaliningrad','Europe/Kiev','Europe/Lisbon','Europe/Ljubljana','Europe/London','Europe/Luxembourg','Europe/Madrid','Europe/Malta','Europe/Mariehamn','Europe/Minsk','Europe/Monaco','Europe/Moscow','Europe/Nicosia','Europe/Oslo','Europe/Paris','Europe/Podgorica','Europe/Prague','Europe/Riga','Europe/Rome','Europe/Samara','Europe/San_Marino','Europe/Sarajevo','Europe/Simferopol','Europe/Skopje','Europe/Sofia','Europe/Stockholm','Europe/Tallinn','Europe/Tirane','Europe/Tiraspol','Europe/Uzhgorod','Europe/Vaduz','Europe/Vatican','Europe/Vienna','Europe/Vilnius','Europe/Volgograd','Europe/Warsaw','Europe/Zagreb','Europe/Zaporozhye','Europe/Zurich','Factory','GB','GB-Eire','GMT','GMT+0','GMT-0','GMT0','Greenwich','Hongkong','HST','Iceland','Indian/Antananarivo','Indian/Chagos','Indian/Christmas','Indian/Cocos','Indian/Comoro','Indian/Kerguelen','Indian/Mahe','Indian/Maldives','Indian/Mauritius','Indian/Mayotte','Indian/Reunion','Iran','Israel','Jamaica','Japan','Kwajalein','Libya','MET','Mexico/BajaNorte','Mexico/BajaSur','Mexico/General','MST','MST7MDT','Navajo','NZ','NZ-CHAT','Pacific/Apia','Pacific/Auckland','Pacific/Chatham','Pacific/Easter','Pacific/Efate','Pacific/Enderbury','Pacific/Fakaofo','Pacific/Fiji','Pacific/Funafuti','Pacific/Galapagos','Pacific/Gambier','Pacific/Guadalcanal','Pacific/Guam','Pacific/Honolulu','Pacific/Johnston','Pacific/Kiritimati','Pacific/Kosrae','Pacific/Kwajalein','Pacific/Majuro','Pacific/Marquesas','Pacific/Midway','Pacific/Nauru','Pacific/Niue','Pacific/Norfolk','Pacific/Noumea','Pacific/Pago_Pago','Pacific/Palau','Pacific/Pitcairn','Pacific/Ponape','Pacific/Port_Moresby','Pacific/Rarotonga','Pacific/Saipan','Pacific/Samoa','Pacific/Tahiti','Pacific/Tarawa','Pacific/Tongatapu','Pacific/Truk','Pacific/Wake','Pacific/Wallis','Pacific/Yap','Poland','Portugal','PRC','PST8PDT','ROC','ROK','Singapore','Turkey','UCT','Universal','US/Alaska','US/Aleutian','US/Arizona','US/Central','US/East-Indiana','US/Eastern','US/Hawaii','US/Indiana-Starke','US/Michigan','US/Mountain','US/Pacific','US/Pacific-New','US/Samoa','UTC','W-SU','WET','Zulu'];continents=['AFRICA','AMERICA','ANTARCTICA','ARCTIC','ASIA','ATLANTIC','AUSTRALIA','EUROPE','INDIAN','PACIFIC'];codes=[1,2,4,8,16,32,64,128,256,512];if(!codes.indexOf){codes.indexOf=indexOf;}
if(!continents.indexOf){continents.indexOf=indexOf;}
if(what){if(codes.indexOf(what)!==-1||continents.indexOf(what)!==-1){if(what&&what===parseInt(what,10)+''){new_what=continents[codes.indexOf(what)];}
if(what){new_what=what[0]+what.slice(1).toLowerCase();}
for(i=0;i<identifiers.length;i++){if(identifiers[i].indexOf(new_what+'/')!==-1){returnArr.push(identifiers[i]);}}
return returnArr;}else if(what==='UTC'||what===1024){throw'Unknown implementation';}else if(what==='ALL_WITH_BC'||what===4095){throw'Unknown implementation';}else if(what==='PER_COUNTRY'||what===4096){throw'Unknown implementation';}else if(what==='ALL'||what===2047){return identifiers;}}
return identifiers;}
function trigger_error(error_msg,error_type){var type=0,i=0,that=this,prepend='',append='';if(!error_type){error_type='E_USER_NOTICE';}
var ini_on=function(ini){return that.php_js.ini[ini]&&that.php_js.ini[ini].local_value&&((that.php_js.ini[ini].local_value.toString&&that.php_js.ini[ini].local_value.toString().toLowerCase&&(that.php_js.ini[ini].local_value.toString().toLowerCase()==='on'||that.php_js.ini[ini].local_value.toString().toLowerCase()==='true'))||parseInt(that.php_js.ini[ini].local_value,10)===1);};var display_errors=function(type){return that.php_js.ini.error_reporting&&(type&that.php_js.ini.error_reporting.local_value)&&ini_on('display_errors');};var TYPES={E_ERROR:1,E_WARNING:2,E_PARSE:4,E_NOTICE:8,E_CORE_ERROR:16,E_CORE_WARNING:32,E_COMPILE_ERROR:64,E_COMPILE_WARNING:128,E_USER_ERROR:256,E_USER_WARNING:512,E_USER_NOTICE:1024,E_STRICT:2048,E_RECOVERABLE_ERROR:4096,E_DEPRECATED:8192,E_USER_DEPRECATED:16384,E_ALL:30719};if(typeof error_type==='number'){type=error_type;}else{error_type=[].concat(error_type);for(i=0;i<error_type.length;i++){if(TYPES[error_type[i]]){type=type|TYPES[error_type[i]];}}}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};if(type&TYPES.E_USER_ERROR||type&TYPES.E_ERROR||type&TYPES.E_CORE_ERROR||type&TYPES.E_COMPILE_ERROR||type&TYPES.E_RECOVERABLE_ERROR||type&TYPES.E_PARSE){if(ini_on('track_errors')){this.$php_errormsg=error_msg;}
if(display_errors(type)){prepend=this.php_js.ini.error_prepend_string?this.php_js.ini.error_prepend_string:'';append=this.php_js.ini.error_append_string?this.php_js.ini.error_append_string:'';this.echo(prepend+'Error: '+error_msg+' '+append);}
var e=new Error(error_msg);e.type=type;this.php_js.last_error={message:e.message,file:e.fileName,line:e.lineNumber,type:e.type};throw e;}
if(display_errors(type)){switch(type){case TYPES.E_USER_WARNING:case TYPES.E_WARNING:case TYPES.E_CORE_WARNING:case TYPES.E_COMPILE_WARNING:this.echo('Warning: '+error_msg);break;case TYPES.E_USER_NOTICE:case TYPES.E_NOTICE:this.echo('Notice: '+error_msg);break;case TYPES.E_DEPRECATED:case TYPES.E_USER_DEPRECATED:this.echo('Deprecated: '+error_msg);break;default:throw'Unrecognized error type';}}
return true;}
function trim(str,charlist){var whitespace,l=0,i=0;str+='';if(!charlist){whitespace=" \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";}else{charlist+='';whitespace=charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');}
l=str.length;for(i=0;i<l;i++){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(i);break;}}
l=str.length;for(i=l-1;i>=0;i--){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(0,i+1);break;}}
return whitespace.indexOf(str.charAt(0))===-1?str:'';}
function uasort(inputArr,sorter){var valArr=[],tempKeyVal,tempValue,ret,k='',i=0,strictForIn=false,populateArr={};if(typeof sorter==='string'){sorter=this[sorter];}else if(Object.prototype.toString.call(sorter)==='[object Array]'){sorter=this[sorter[0]][sorter[1]];}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return sorter(a[1],b[1]);});for(i=0;i<valArr.length;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function ucfirst(str){str+='';var f=str.charAt(0).toUpperCase();return f+str.substr(1);}
function ucwords(str){return(str+'').replace(/^([a-z])|\s+([a-z])/g,function($1){return $1.toUpperCase();});}
function uksort(inputArr,sorter){var tmp_arr={},keys=[],i=0,k='',strictForIn=false,populateArr={};if(typeof sorter==='string'){sorter=this.window[sorter];}
for(k in inputArr){if(inputArr.hasOwnProperty(k)){keys.push(k);}}
try{if(sorter){keys.sort(sorter);}else{keys.sort();}}catch(e){return false;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<keys.length;i++){k=keys[i];tmp_arr[k]=inputArr[k];if(strictForIn){delete inputArr[k];}}
for(i in tmp_arr){if(tmp_arr.hasOwnProperty(i)){populateArr[i]=tmp_arr[i];}}
return strictForIn||populateArr;}
function uniqid(prefix,more_entropy){if(typeof prefix=='undefined'){prefix="";}
var retId;var formatSeed=function(seed,reqWidth){seed=parseInt(seed,10).toString(16);if(reqWidth<seed.length){return seed.slice(seed.length-reqWidth);}
if(reqWidth>seed.length){return Array(1+(reqWidth-seed.length)).join('0')+seed;}
return seed;};if(!this.php_js){this.php_js={};}
if(!this.php_js.uniqidSeed){this.php_js.uniqidSeed=Math.floor(Math.random()*0x75bcd15);}
this.php_js.uniqidSeed++;retId=prefix;retId+=formatSeed(parseInt(new Date().getTime()/1000,10),8);retId+=formatSeed(this.php_js.uniqidSeed,5);if(more_entropy){retId+=(Math.random()*10).toFixed(8).toString();}
return retId;}
function unserialize(data){var that=this;var utf8Overhead=function(chr){var code=chr.charCodeAt(0);if(code<0x0080){return 0;}
if(code<0x0800){return 1;}
return 2;};var error=function(type,msg,filename,line){throw new that.window[type](msg,filename,line);};var read_until=function(data,offset,stopchr){var buf=[];var chr=data.slice(offset,offset+1);var i=2;while(chr!=stopchr){if((i+offset)>data.length){error('Error','Invalid');}
buf.push(chr);chr=data.slice(offset+(i-1),offset+i);i+=1;}
return[buf.length,buf.join('')];};var read_chrs=function(data,offset,length){var buf;buf=[];for(var i=0;i<length;i++){var chr=data.slice(offset+(i-1),offset+i);buf.push(chr);length-=utf8Overhead(chr);}
return[buf.length,buf.join('')];};var _unserialize=function(data,offset){var readdata;var readData;var chrs=0;var ccount;var stringlength;var keyandchrs;var keys;if(!offset){offset=0;}
var dtype=(data.slice(offset,offset+1)).toLowerCase();var dataoffset=offset+2;var typeconvert=function(x){return x;};switch(dtype){case'i':typeconvert=function(x){return parseInt(x,10);};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'b':typeconvert=function(x){return parseInt(x,10)!==0;};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'd':typeconvert=function(x){return parseFloat(x);};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'n':readdata=null;break;case's':ccount=read_until(data,dataoffset,':');chrs=ccount[0];stringlength=ccount[1];dataoffset+=chrs+2;readData=read_chrs(data,dataoffset+1,parseInt(stringlength,10));chrs=readData[0];readdata=readData[1];dataoffset+=chrs+2;if(chrs!=parseInt(stringlength,10)&&chrs!=readdata.length){error('SyntaxError','String length mismatch');}
readdata=that.utf8_decode(readdata);break;case'a':readdata={};keyandchrs=read_until(data,dataoffset,':');chrs=keyandchrs[0];keys=keyandchrs[1];dataoffset+=chrs+2;for(var i=0;i<parseInt(keys,10);i++){var kprops=_unserialize(data,dataoffset);var kchrs=kprops[1];var key=kprops[2];dataoffset+=kchrs;var vprops=_unserialize(data,dataoffset);var vchrs=vprops[1];var value=vprops[2];dataoffset+=vchrs;readdata[key]=value;}
dataoffset+=1;break;default:error('SyntaxError','Unknown / Unhandled data type(s): '+dtype);break;}
return[dtype,dataoffset-offset,typeconvert(readdata)];};return _unserialize((data+''),0)[2];}
function urldecode(str){return decodeURIComponent((str+'').replace(/\+/g,'%20'));}
function urlencode(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');}
function user_error(error_msg,error_type){return this.trigger_error(error_msg,error_type);}
function usort(inputArr,sorter){var valArr=[],k='',i=0,strictForIn=false,populateArr={};if(typeof sorter==='string'){sorter=this[sorter];}else if(Object.prototype.toString.call(sorter)==='[object Array]'){sorter=this[sorter[0]][sorter[1]];}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
try{valArr.sort(sorter);}catch(e){return false;}
for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function utf8_decode(str_data){var tmp_arr=[],i=0,ac=0,c1=0,c2=0,c3=0;str_data+='';while(i<str_data.length){c1=str_data.charCodeAt(i);if(c1<128){tmp_arr[ac++]=String.fromCharCode(c1);i++;}else if(c1>191&&c1<224){c2=str_data.charCodeAt(i+1);tmp_arr[ac++]=String.fromCharCode(((c1&31)<<6)|(c2&63));i+=2;}else{c2=str_data.charCodeAt(i+1);c3=str_data.charCodeAt(i+2);tmp_arr[ac++]=String.fromCharCode(((c1&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return tmp_arr.join('');}
function utf8_encode(argString){if(argString===null||typeof argString==="undefined"){return"";}
var string=(argString+'');var utftext="",start,end,stringl=0;start=end=0;stringl=string.length;for(var n=0;n<stringl;n++){var c1=string.charCodeAt(n);var enc=null;if(c1<128){end++;}else if(c1>127&&c1<2048){enc=String.fromCharCode((c1>>6)|192)+String.fromCharCode((c1&63)|128);}else{enc=String.fromCharCode((c1>>12)|224)+String.fromCharCode(((c1>>6)&63)|128)+String.fromCharCode((c1&63)|128);}
if(enc!==null){if(end>start){utftext+=string.slice(start,end);}
utftext+=enc;start=end=n+1;}}
if(end>start){utftext+=string.slice(start,stringl);}
return utftext;}
function var_dump(){var output='',pad_char=' ',pad_val=4,lgth=0,i=0,d=this.window.document;var _getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var _repeat_char=function(len,pad_char){var str='';for(var i=0;i<len;i++){str+=pad_char;}
return str;};var _getInnerVal=function(val,thick_pad){var ret='';if(val===null){ret='NULL';}else if(typeof val==='boolean'){ret='bool('+val+')';}else if(typeof val==='string'){ret='string('+val.length+') "'+val+'"';}else if(typeof val==='number'){if(parseFloat(val)==parseInt(val,10)){ret='int('+val+')';}else{ret='float('+val+')';}}
else if(typeof val==='undefined'){ret='undefined';}else if(typeof val==='function'){var funcLines=val.toString().split('\n');ret='';for(var i=0,fll=funcLines.length;i<fll;i++){ret+=(i!==0?'\n'+thick_pad:'')+funcLines[i];}}else if(val instanceof Date){ret='Date('+val+')';}else if(val instanceof RegExp){ret='RegExp('+val+')';}else if(val.nodeName){switch(val.nodeType){case 1:if(typeof val.namespaceURI==='undefined'||val.namespaceURI==='http://www.w3.org/1999/xhtml'){ret='HTMLElement("'+val.nodeName+'")';}else{ret='XML Element("'+val.nodeName+'")';}
break;case 2:ret='ATTRIBUTE_NODE('+val.nodeName+')';break;case 3:ret='TEXT_NODE('+val.nodeValue+')';break;case 4:ret='CDATA_SECTION_NODE('+val.nodeValue+')';break;case 5:ret='ENTITY_REFERENCE_NODE';break;case 6:ret='ENTITY_NODE';break;case 7:ret='PROCESSING_INSTRUCTION_NODE('+val.nodeName+':'+val.nodeValue+')';break;case 8:ret='COMMENT_NODE('+val.nodeValue+')';break;case 9:ret='DOCUMENT_NODE';break;case 10:ret='DOCUMENT_TYPE_NODE';break;case 11:ret='DOCUMENT_FRAGMENT_NODE';break;case 12:ret='NOTATION_NODE';break;}}
return ret;};var _formatArray=function(obj,cur_depth,pad_val,pad_char){var someProp='';if(cur_depth>0){cur_depth++;}
var base_pad=_repeat_char(pad_val*(cur_depth-1),pad_char);var thick_pad=_repeat_char(pad_val*(cur_depth+1),pad_char);var str='';var val='';if(typeof obj==='object'&&obj!==null){if(obj.constructor&&_getFuncName(obj.constructor)==='PHPJS_Resource'){return obj.var_dump();}
lgth=0;for(someProp in obj){lgth++;}
str+='array('+lgth+') {\n';for(var key in obj){var objVal=obj[key];if(typeof objVal==='object'&&objVal!==null&&!(objVal instanceof Date)&&!(objVal instanceof RegExp)&&!objVal.nodeName){str+=thick_pad+'['+key+'] =>\n'+thick_pad+_formatArray(objVal,cur_depth+1,pad_val,pad_char);}else{val=_getInnerVal(objVal,thick_pad);str+=thick_pad+'['+key+'] =>\n'+thick_pad+val+'\n';}}
str+=base_pad+'}\n';}else{str=_getInnerVal(obj,thick_pad);}
return str;};output=_formatArray(arguments[0],0,pad_val,pad_char);for(i=1;i<arguments.length;i++){output+='\n'+_formatArray(arguments[i],0,pad_val,pad_char);}
if(d.body){this.echo(output);}else{try{d=XULDocument;this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+'</pre>');}catch(e){this.echo(output);}}}
function var_export(mixed_expression,bool_return){var retstr='',iret='',cnt=0,x=[],i=0,funcParts=[],idtLevel=arguments[2]||2,innerIndent='',outerIndent='';var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var _makeIndent=function(idtLevel){return(new Array(idtLevel+1)).join(' ');};var __getType=function(inp){var i=0;var match,type=typeof inp;if(type==='object'&&inp.constructor&&getFuncName(inp.constructor)==='PHPJS_Resource'){return'resource';}
if(type==='function'){return'function';}
if(type==='object'&&!inp){return'null';}
if(type==="object"){if(!inp.constructor){return'object';}
var cons=inp.constructor.toString();match=cons.match(/(\w+)\(/);if(match){cons=match[1].toLowerCase();}
var types=["boolean","number","string","array"];for(i=0;i<types.length;i++){if(cons===types[i]){type=types[i];break;}}}
return type;};var type=__getType(mixed_expression);if(type===null){retstr="NULL";}else if(type==='array'||type==='object'){outerIndent=_makeIndent(idtLevel-2);innerIndent=_makeIndent(idtLevel);for(i in mixed_expression){var value=this.var_export(mixed_expression[i],true,idtLevel+2);value=typeof value==='string'?value.replace(/</g,'&lt;').replace(/>/g,'&gt;'):value;x[cnt++]=innerIndent+i+' => '+(__getType(mixed_expression[i])==='array'?'\n':'')+value;}
iret=x.join(',\n');retstr=outerIndent+"array (\n"+iret+'\n'+outerIndent+')';}else if(type==='function'){funcParts=mixed_expression.toString().match(/function .*?\((.*?)\) \{([\s\S]*)\}/);retstr="create_function ('"+funcParts[1]+"', '"+funcParts[2].replace(new RegExp("'",'g'),"\\'")+"')";}else if(type==='resource'){retstr='NULL';}else{retstr=(typeof(mixed_expression)!=='string')?mixed_expression:"'"+mixed_expression.replace(/(["'])/g,"\\$1").replace(/\0/g,"\\0")+"'";}
if(bool_return!==true){this.echo(retstr);return null;}else{return retstr;}}
function version_compare(v1,v2,operator){this.php_js=this.php_js||{};this.php_js.ENV=this.php_js.ENV||{};var i=0,x=0,compare=0,vm={'dev':-6,'alpha':-5,'a':-5,'beta':-4,'b':-4,'RC':-3,'rc':-3,'#':-2,'p':-1,'pl':-1},prepVersion=function(v){v=(''+v).replace(/[_\-+]/g,'.');v=v.replace(/([^.\d]+)/g,'.$1.').replace(/\.{2,}/g,'.');return(!v.length?[-8]:v.split('.'));},numVersion=function(v){return!v?0:(isNaN(v)?vm[v]||-7:parseInt(v,10));};v1=prepVersion(v1);v2=prepVersion(v2);x=Math.max(v1.length,v2.length);for(i=0;i<x;i++){if(v1[i]==v2[i]){continue;}
v1[i]=numVersion(v1[i]);v2[i]=numVersion(v2[i]);if(v1[i]<v2[i]){compare=-1;break;}else if(v1[i]>v2[i]){compare=1;break;}}
if(!operator){return compare;}
switch(operator){case'>':case'gt':return(compare>0);case'>=':case'ge':return(compare>=0);case'<=':case'le':return(compare<=0);case'==':case'=':case'eq':return(compare===0);case'<>':case'!=':case'ne':return(compare!==0);case'':case'<':case'lt':return(compare<0);default:return null;}}
function vprintf(format,args){var body,elmt;var ret='',d=this.window.document;var HTMLNS='http://www.w3.org/1999/xhtml';body=d.getElementsByTagNameNS?(d.getElementsByTagNameNS(HTMLNS,'body')[0]?d.getElementsByTagNameNS(HTMLNS,'body')[0]:d.documentElement.lastChild):d.getElementsByTagName('body')[0];if(!body){return false;}
ret=this.sprintf.apply(this,[format].concat(args));elmt=d.createTextNode(ret);body.appendChild(elmt);return ret.length;}
function vsprintf(format,args){return this.sprintf.apply(this,[format].concat(args));}
function wordwrap(str,int_width,str_break,cut){var m=((arguments.length>=2)?arguments[1]:75);var b=((arguments.length>=3)?arguments[2]:"\n");var c=((arguments.length>=4)?arguments[3]:false);var i,j,l,s,r;str+='';if(m<1){return str;}
for(i=-1,l=(r=str.split(/\r\n|\n|\r/)).length;++i<l;r[i]+=s){for(s=r[i],r[i]="";s.length>m;r[i]+=s.slice(0,j)+((s=s.slice(j)).length?b:"")){j=c==2||(j=s.slice(0,m+1).match(/\S*(\s)?$/))[1]?m:j.input.length-j[0].length||c==1&&m||j.input.length+(j=s.slice(m).match(/^\S*/)).input.length;}}
return r.join("\n");}
function xdiff_string_diff(old_data,new_data,context_lines,minimal){var i=0,j=0,k=0,ori_hunk_start,new_hunk_start,ori_hunk_end,new_hunk_end,ori_hunk_line_no,new_hunk_line_no,ori_hunk_size,new_hunk_size,MAX_CONTEXT_LINES=Number.POSITIVE_INFINITY,MIN_CONTEXT_LINES=0,DEFAULT_CONTEXT_LINES=3,HEADER_PREFIX='@@ ',HEADER_SUFFIX=' @@',ORIGINAL_INDICATOR='-',NEW_INDICATOR='+',RANGE_SEPARATOR=',',CONTEXT_INDICATOR=' ',DELETION_INDICATOR='-',ADDITION_INDICATOR='+',ori_lines,new_lines,NEW_LINE='\n',trim=function(text){if(typeof text!='string'){throw Error('String parameter required');}
return text.replace(/(^\s*)|(\s*$)/g,'');},verify_type=function(type){var args=arguments,args_len=arguments.length,basic_types=['number','boolean','string','function','object','undefined'],basic_type,i,j,type_of_type=typeof type;if(type_of_type!='string'&&type_of_type!='function'){throw new Error('Bad type parameter');}
if(args_len<2){throw new Error('Too few arguments');}
if(type_of_type=='string'){type=trim(type);if(type==''){throw new Error('Bad type parameter');}
for(j=0;j<basic_types.length;j++){basic_type=basic_types[j];if(basic_type==type){for(i=1;i<args_len;i++){if(typeof args[i]!=type){throw new Error('Bad type');}}
return;}}
throw new Error('Bad type parameter');}
for(i=1;i<args_len;i++){if(!(args[i]instanceof type)){throw new Error('Bad type');}}},has_value=function(array,value){var i;verify_type(Array,array);for(i=0;i<array.length;i++){if(array[i]===value){return true;}}
return false;},are_type_of=function(type){var args=arguments,args_len=arguments.length,basic_types=['number','boolean','string','function','object','undefined'],basic_type,i,j,type_of_type=typeof type;if(type_of_type!='string'&&type_of_type!='function'){throw new Error('Bad type parameter');}
if(args_len<2){throw new Error('Too few arguments');}
if(type_of_type=='string'){type=trim(type);if(type==''){return false;}
for(j=0;j<basic_types.length;j++){basic_type=basic_types[j];if(basic_type==type){for(i=1;i<args_len;i++){if(typeof args[i]!=type){return false;}}
return true;}}
throw new Error('Bad type parameter');}
for(i=1;i<args_len;i++){if(!(args[i]instanceof type)){return false;}}
return true;},get_initialized_array=function(array_size,init_value){var array=[],i;verify_type('number',array_size);for(i=0;i<array_size;i++){array.push(init_value);}
return array;},split_into_lines=function(text){verify_type('string',text);if(text==''){return[];}
return text.split('\n');},is_empty_array=function(obj){return are_type_of(Array,obj)&&obj.length===0;},find_longest_common_sequence=function(seq1,seq2,seq1_is_in_lcs,seq2_is_in_lcs){if(!are_type_of(Array,seq1,seq2)){throw new Error('Array parameters are required');}
if(is_empty_array(seq1)||is_empty_array(seq2)){return[];}
var lcs_lens=function(xs,ys){var curr=get_initialized_array(ys.length+1,0);var prev;var i,j;for(i=0;i<xs.length;i++){prev=curr.slice(0);for(j=0;j<ys.length;j++){if(xs[i]===ys[j]){curr[j+1]=prev[j]+1;}else{curr[j+1]=Math.max(curr[j],prev[j+1]);}}}
return curr;},find_lcs=function(xs,xidx,xs_is_in,ys){var nx=xs.length;var ny=ys.length;var i;var xb,xe;var ll_b,ll_e;var pivot;var max;var yb,ye;if(nx===0){return[];}else if(nx===1){if(has_value(ys,xs[0])){xs_is_in[xidx]=true;return[xs[0]];}else{return[];}}else{i=Math.floor(nx/2);xb=xs.slice(0,i);xe=xs.slice(i);ll_b=lcs_lens(xb,ys);ll_e=lcs_lens(xe.slice(0).reverse(),ys.slice(0).reverse());pivot=0;max=0;for(j=0;j<=ny;j++){if(ll_b[j]+ll_e[ny-j]>max){pivot=j;max=ll_b[j]+ll_e[ny-j];}}
yb=ys.slice(0,pivot);ye=ys.slice(pivot);return find_lcs(xb,xidx,xs_is_in,yb).concat(find_lcs(xe,xidx+i,xs_is_in,ye));}};find_lcs(seq1,0,seq1_is_in_lcs,seq2);return find_lcs(seq2,0,seq2_is_in_lcs,seq1);};if(are_type_of('string',old_data,new_data)===false){return false;}
if(old_data==new_data){return'';}
if(typeof context_lines!='number'||context_lines>MAX_CONTEXT_LINES||context_lines<MIN_CONTEXT_LINES){context_lines=DEFAULT_CONTEXT_LINES;}
ori_lines=split_into_lines(old_data);new_lines=split_into_lines(new_data);var ori_len=ori_lines.length,new_len=new_lines.length,ori_is_in_lcs=get_initialized_array(ori_len,false),new_is_in_lcs=get_initialized_array(new_len,false),lcs_len=find_longest_common_sequence(ori_lines,new_lines,ori_is_in_lcs,new_is_in_lcs).length,unidiff='';if(lcs_len===0){unidiff=HEADER_PREFIX+ORIGINAL_INDICATOR+(ori_len>0?'1':'0')+RANGE_SEPARATOR+ori_len+' '+NEW_INDICATOR+(new_len>0?'1':'0')+RANGE_SEPARATOR+new_len+HEADER_SUFFIX;for(i=0;i<ori_len;i++){unidiff+=NEW_LINE+DELETION_INDICATOR+ori_lines[i];}
for(j=0;j<new_len;j++){unidiff+=NEW_LINE+ADDITION_INDICATOR+new_lines[j];}
return unidiff;}
var leading_context=[],trailing_context=[],actual_leading_context=[],actual_trailing_context=[],regularize_leading_context=function(context){if(context.length===0||context_lines===0){return[];}
var context_start_pos=Math.max(context.length-context_lines,0);return context.slice(context_start_pos);},regularize_trailing_context=function(context){if(context.length===0||context_lines===0){return[];}
return context.slice(0,Math.min(context_lines,context.length));};while(i<ori_len&&ori_is_in_lcs[i]===true&&new_is_in_lcs[i]===true){leading_context.push(ori_lines[i]);i++;}
j=i;k=i;ori_hunk_start=i;new_hunk_start=j;ori_hunk_end=i;new_hunk_end=j;while(i<ori_len||j<new_len){while(i<ori_len&&ori_is_in_lcs[i]===false){i++;}
ori_hunk_end=i;while(j<new_len&&new_is_in_lcs[j]===false){j++;}
new_hunk_end=j;trailing_context=[];while(i<ori_len&&ori_is_in_lcs[i]===true&&j<new_len&&new_is_in_lcs[j]===true){trailing_context.push(ori_lines[i]);k++;i++;j++;}
if(k>=lcs_len||trailing_context.length>=2*context_lines){if(trailing_context.length<2*context_lines){trailing_context=[];i=ori_len;j=new_len;ori_hunk_end=ori_len;new_hunk_end=new_len;}
actual_leading_context=regularize_leading_context(leading_context);actual_trailing_context=regularize_trailing_context(trailing_context);ori_hunk_start-=actual_leading_context.length;new_hunk_start-=actual_leading_context.length;ori_hunk_end+=actual_trailing_context.length;new_hunk_end+=actual_trailing_context.length;ori_hunk_line_no=ori_hunk_start+1;new_hunk_line_no=new_hunk_start+1;ori_hunk_size=ori_hunk_end-ori_hunk_start;new_hunk_size=new_hunk_end-new_hunk_start;unidiff+=HEADER_PREFIX+ORIGINAL_INDICATOR+ori_hunk_line_no+RANGE_SEPARATOR+ori_hunk_size+' '+NEW_INDICATOR+new_hunk_line_no+RANGE_SEPARATOR+new_hunk_size+HEADER_SUFFIX+NEW_LINE;while(ori_hunk_start<ori_hunk_end||new_hunk_start<new_hunk_end){if(ori_hunk_start<ori_hunk_end&&ori_is_in_lcs[ori_hunk_start]===true&&new_is_in_lcs[new_hunk_start]===true){unidiff+=CONTEXT_INDICATOR+ori_lines[ori_hunk_start]+NEW_LINE;ori_hunk_start++;new_hunk_start++;}else if(ori_hunk_start<ori_hunk_end&&ori_is_in_lcs[ori_hunk_start]===false){unidiff+=DELETION_INDICATOR+ori_lines[ori_hunk_start]+NEW_LINE;ori_hunk_start++;}else if(new_hunk_start<new_hunk_end&&new_is_in_lcs[new_hunk_start]===false){unidiff+=ADDITION_INDICATOR+new_lines[new_hunk_start]+NEW_LINE;new_hunk_start++;}}
ori_hunk_start=i;new_hunk_start=j;leading_context=trailing_context;}}
if(unidiff.length>0&&unidiff.charAt(unidiff.length)===NEW_LINE){unidiff=unidiff.slice(0,-1);}
return unidiff;}
function xdiff_string_patch(originalStr,patch,flags,error){var getNativeFlags=function(regex){return(regex.global?"g":"")+(regex.ignoreCase?"i":"")+(regex.multiline?"m":"")+(regex.extended?"x":"")+
(regex.sticky?"y":"");},cbSplit=function(str,s){if(!(s instanceof RegExp)){return String.prototype.split.apply(str,arguments);}
str=str+'';var output=[],lastLastIndex=0,match,lastLength,limit=Infinity;var x=s._xregexp;s=new RegExp(s.source,getNativeFlags(s)+'g');if(x){s._xregexp={source:x.source,captureNames:x.captureNames?x.captureNames.slice(0):null};}
while((match=s.exec(str))){if(s.lastIndex>lastLastIndex){output.push(str.slice(lastLastIndex,match.index));if(match.length>1&&match.index<str.length){Array.prototype.push.apply(output,match.slice(1));}
lastLength=match[0].length;lastLastIndex=s.lastIndex;if(output.length>=limit)break;}
if(s.lastIndex===match.index){s.lastIndex++;}}
if(lastLastIndex===str.length){if(!s.test("")||lastLength){output.push("");}}else{output.push(str.slice(lastLastIndex));}
return output.length>limit?output.slice(0,limit):output;},i=0,ll=0,ranges=[],lastLinePos=0,firstChar='',rangeExp=/^@@\s+-(\d+),(\d+)\s+\+(\d+),(\d+)\s+@@$/,lineBreaks=/\r?\n/,lines=cbSplit(patch.replace(/(\r?\n)+$/,''),lineBreaks),origLines=cbSplit(originalStr,lineBreaks),newStrArr=[],linePos=0,errors='',optTemp=0,OPTS={'XDIFF_PATCH_NORMAL':1,'XDIFF_PATCH_REVERSE':2,'XDIFF_PATCH_IGNORESPACE':4};if(typeof originalStr!=='string'||!patch){return false;}
if(!flags){flags='XDIFF_PATCH_NORMAL';}
if(typeof flags!=='number'){flags=[].concat(flags);for(i=0;i<flags.length;i++){if(OPTS[flags[i]]){optTemp=optTemp|OPTS[flags[i]];}}
flags=optTemp;}
if(flags&OPTS.XDIFF_PATCH_NORMAL){for(i=0,ll=lines.length;i<ll;i++){ranges=lines[i].match(rangeExp);if(ranges){lastLinePos=linePos;linePos=ranges[1]-1;while(lastLinePos<linePos){newStrArr[newStrArr.length]=origLines[lastLinePos++];}
while(lines[++i]&&(rangeExp.exec(lines[i]))==null){firstChar=lines[i].charAt(0);switch(firstChar){case'-':++linePos;break;case'+':newStrArr[newStrArr.length]=lines[i].slice(1);break;case' ':newStrArr[newStrArr.length]=origLines[linePos++];break;default:throw'Unrecognized initial character in unidiff line';}}
if(lines[i]){i--;}}}}else if(flags&OPTS.XDIFF_PATCH_REVERSE){for(i=0,ll=lines.length;i<ll;i++){ranges=lines[i].match(rangeExp);if(ranges){lastLinePos=linePos;linePos=ranges[3]-1;while(lastLinePos<linePos){newStrArr[newStrArr.length]=origLines[lastLinePos++];}
while(lines[++i]&&(rangeExp.exec(lines[i]))==null){firstChar=lines[i].charAt(0);switch(firstChar){case'-':newStrArr[newStrArr.length]=lines[i].slice(1);break;case'+':++linePos;break;case' ':newStrArr[newStrArr.length]=origLines[linePos++];break;default:throw'Unrecognized initial character in unidiff line';}}
if(lines[i]){i--;}}}}
if(typeof(error==='string')){this.window[error]=errors;}
return newStrArr.join('\n');}