'use strict';
import path from 'path';
import ProjectCore from 'project-core';
import createDebug from 'debug';

const $ = global.$=new ProjectCore();

$.createDebug=function (name) {
  return createDebug ('my:'+name);
}

const debug=$.createDebug('server');

$.init.add((done)=>{
  $.config.load(path.resolve(__dirname,'config.js'))
  const env=process.env.NODE_ENV || null;
  if (env) {
    debug('load env: %s', env);
    $.config.load(path.resolve(__dirname, '../config', env+'.js'));
  }
  $.env=env;
  done();
});

$.init.load(path.resolve(__dirname,'init','mongodb.js'));
$.init.load(path.resolve(__dirname,'models'));
$.init.load(path.resolve(__dirname,'init','express.js'));
$.init.load(path.resolve(__dirname,'routes'));


$.init((err) =>{
  if (err) {
    console.error(err);
    process.exit(-1);
  } else {
    console.log('inited [env=%s]', $.env);
  }
/**
  const item = new $.model.User ({
    name: 'test',
    password: '123456',
    nickname: 'test',
  });
  item.save(console.log);
*/
});
