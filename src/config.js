'use strict';


module.exports=function (set, get, has){
   set ('web.port', 3000);
   set ('web.session.secret','test');
   set ('web.session.redis',{
     host: '127.0.0.1',
     port: 6379,
   });
   // limiter redis connection
   set('limiter.redis', {
    host: '127.0.0.1',
    port: 6379,
    prefix: 'L:',
   });
};
