!function(t){"use strict";void 0===t.times&&(t.times=function(){let t,e,r,n,a,o,d,u,h=!1;const M=["January","February","March","April","May","June","July","August","September","October","November","December"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=["yyyy","yyy","yy","y","MMMM","MMM","MM","M","dddd","ddd","dd","d","hh","h","HH","H","mm","m","ss","s","tt","t"];let f=new Date,g=function(){let t=function(){var t=f.getUTCFullYear(),e=f.getUTCMonth(),r=f.getUTCDate(),n=f.getUTCDay(),a=f.getUTCHours(),o=f.getUTCMinutes(),d=f.getUTCSeconds();let u=f.getFullYear(),M=f.getMonth(),s=f.getDate(),y=f.getDay(),i=f.getHours(),l=f.getMinutes(),g=f.getSeconds(),c=f.getMilliseconds();return h&&(u=t,M=e,s=r,y=n,i=a,l=o,g=d),{year:u,month:M,day:s,dayOfWeek:y,hour:i,minute:l,second:g,milliSeconds:c}}();return{yyyy:t.year,yyy:t.year.toString().substr(-3),yy:t.year.toString().substr(-2),y:parseInt(t.year.toString().substr(-2)),MMMM:M[t.month],MMM:s[t.month],MM:String(t.month+1).padStart(2,"0"),M:t.month+1,dddd:y[t.dayOfWeek],ddd:i[t.dayOfWeek],dd:String(t.day).padStart(2,"0"),d:t.day,h:t.hour%12||12,hh:String(t.hour).padStart(2,"0"),H:t.hour,HH:String(t.hour).padStart(2,"0"),t:t.hour>=12?"P":"A",tt:t.hour>=12?"PM":"AM",m:t.minute,mm:String(t.minute).padStart(2,"0"),s:t.second,ss:String(t.second).padStart(2,"0")}},c=function(h,M){let s;M<4?s=e[h.length-1]:M<8?s=r[h.length-1]:M<12?s=n[h.length-1]:M<16?s=a[h.length-1]:M<18?s=o[h.length-1]:M<20?s=d[h.length-1]:M<22&&(s=u[h.length-1]),m(h,t).forEach(e=>{let r=e+h.length;if(e>=0){let a=t.charAt(e-1),o=t.charAt(r);var n=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;(n.test(a)&&n.test(o)||0==e||r==t.length)&&(t=t.substr(0,e)+s+t.substr(r))}})},m=function(t,e){var r=t.length;if(0==r)return[];for(var n,a=0,o=[];(n=e.indexOf(t,a))>-1;)o.push(n),a=n+r;return o},S={};return S={date:"",diff:null,Utc:function(t){return h=t,this},format:function(h,M){return void 0===M?M=h:f=new Date(h),this.date=function(h){let M=g();return t=h,e=[M.y,M.yy,M.yyy,M.yyyy],r=[M.M,M.MM,M.MMM,M.MMMM],n=[M.d,M.dd,M.ddd,M.dddd],a=[M.h,M.hh,M.H,M.HH],o=[M.m,M.mm],d=[M.s,M.ss],u=[M.t,M.tt],l.forEach(c),t}(M),f=new Date,this},dateDiff:function(t,e){return this.diff=function(t,e){let r,n,a=Date.parse(t),o=Date.parse(e);return void 0===e?(r=a>=f?a-f:f-a,n=a>=f?"+":"-"):(r=a>=o?a-o:o-a,n=a>=o?"+":"-"),{diff:r,ms:Math.floor(r%1e3),MS:Math.floor(r),s:Math.floor(r/1e3%60),S:Math.floor(r/1e3),m:Math.floor(r/6e4%60),M:Math.floor(r/6e4),h:Math.floor(r/36e5%24),H:Math.floor(r/36e5),d:Math.floor(r/864e5%30),D:Math.floor(r/864e5),mo:Math.floor(r/2592e6%12),MO:Math.floor(r/2592e6),y:Math.floor(r/864e5/365.25),signs:n}}(t,e),f=new Date,this},add_day:function(t){return f.setDate(f.getDate()+parseInt(t)),this}}}())}(window);