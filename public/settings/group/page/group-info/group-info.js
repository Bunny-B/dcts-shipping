var a0_0x147ca7=a0_0x4c7e;function a0_0xea0a(){var _0x5b5a71=['21lQxRsg','error','getElementById','success','emit','updateGroupName','data','userConnected','Unable\x20to\x20get\x20Group\x20Information','token','Error\x20while\x20trying\x20to\x20save\x20settings:\x20','3418794qVtJuV','log','14657424gKeouV','style','value','2GKEQdn','block','4WfXaJD','none','info','channel_name','msg','length','9974088tOHAGf','same','8640085pqffIm','352056cKfoZI','settings_channel_save','display','24031440ZSXUEx','getGroupInfo','group-','type','1370233THPdvD'];a0_0xea0a=function(){return _0x5b5a71;};return a0_0xea0a();}(function(_0x5ca359,_0x923f43){var _0x2ed091=a0_0x4c7e,_0x2805aa=_0x5ca359();while(!![]){try{var _0x571a82=-parseInt(_0x2ed091(0x1ec))/0x1*(-parseInt(_0x2ed091(0x1fd))/0x2)+parseInt(_0x2ed091(0x208))/0x3+parseInt(_0x2ed091(0x1ff))/0x4*(-parseInt(_0x2ed091(0x207))/0x5)+-parseInt(_0x2ed091(0x1f8))/0x6*(-parseInt(_0x2ed091(0x1ed))/0x7)+-parseInt(_0x2ed091(0x1fa))/0x8+-parseInt(_0x2ed091(0x205))/0x9+parseInt(_0x2ed091(0x20b))/0xa;if(_0x571a82===_0x923f43)break;else _0x2805aa['push'](_0x2805aa['shift']());}catch(_0x3ae192){_0x2805aa['push'](_0x2805aa['shift']());}}}(a0_0xea0a,0xe3773));var channelname=document[a0_0x147ca7(0x1ef)](a0_0x147ca7(0x202)),saveButton=document[a0_0x147ca7(0x1ef)](a0_0x147ca7(0x209)),serverconfigName,editGroup={};setupNotify(),socket[a0_0x147ca7(0x1f1)](a0_0x147ca7(0x1f4),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0x147ca7(0x1f1)](a0_0x147ca7(0x20c),{'id':getID(),'token':getToken(),'group':getUrlParams('id')['replace'](a0_0x147ca7(0x1ea),'')},function(_0x25e517){var _0x52f131=a0_0x147ca7;try{console['log'](_0x25e517),channelname=document[_0x52f131(0x1ef)]('channel_name'),saveButton=document[_0x52f131(0x1ef)](_0x52f131(0x209)),serverconfigName=_0x25e517[_0x52f131(0x1f3)][_0x52f131(0x201)]['name'],channelname[_0x52f131(0x1fc)]=serverconfigName,editGroup=_0x25e517,console[_0x52f131(0x1f9)](_0x25e517);}catch(_0x4e6a7f){console['log'](_0x52f131(0x1f5)),console['log'](_0x4e6a7f),alert('Unable\x20to\x20get\x20channel\x20info.\x20Please\x20try\x20to\x20reload\x20slowly\x20until\x20it\x20works.\x20Known\x20bug!');}});function getToken(){var _0x1e70f1=a0_0x147ca7,_0x4cdca2=getCookie(_0x1e70f1(0x1f6));return _0x4cdca2==null||_0x4cdca2[_0x1e70f1(0x204)]<=0x0?null:_0x4cdca2;}function getID(){var _0x30e75c=a0_0x147ca7,_0x42b426=getCookie('id');return _0x42b426==null||_0x42b426[_0x30e75c(0x204)]!=0xc?(_0x42b426=generateId(0xc),setCookie('id',_0x42b426,0x168),_0x42b426):_0x42b426;}function a0_0x4c7e(_0x46179e,_0x2482e2){var _0xea0a48=a0_0xea0a();return a0_0x4c7e=function(_0x4c7ed6,_0x4f26f2){_0x4c7ed6=_0x4c7ed6-0x1ea;var _0xecc8d9=_0xea0a48[_0x4c7ed6];return _0xecc8d9;},a0_0x4c7e(_0x46179e,_0x2482e2);}function updatePreview(){var _0x161788=a0_0x147ca7;try{channel_name[_0x161788(0x1fc)]!=serverconfigName?(console[_0x161788(0x1f9)]('NOt\x20same'),saveButton[_0x161788(0x1fb)]['display']=_0x161788(0x1fe)):(console[_0x161788(0x1f9)](_0x161788(0x206)),saveButton[_0x161788(0x1fb)]['display']='none');}catch(_0x2a64c6){console[_0x161788(0x1f9)](_0x2a64c6);}}function saveSettings(){var _0x596c55=a0_0x147ca7;try{channelname[_0x596c55(0x1fc)]!=null&&channelname['value'][_0x596c55(0x204)]>0x0&&channelname[_0x596c55(0x1fc)]!=serverconfigName&&socket[_0x596c55(0x1f1)](_0x596c55(0x1f2),{'id':getID(),'token':getToken(),'groupId':getUrlParams('id'),'groupName':channelname['value']},function(_0x1c8478){var _0x5eb3ca=_0x596c55;_0x1c8478[_0x5eb3ca(0x1eb)]==_0x5eb3ca(0x1f0)?notify(_0x1c8478['msg'],_0x5eb3ca(0x1f0),null,!![]):notify(_0x1c8478[_0x5eb3ca(0x203)],_0x5eb3ca(0x1ee),null,!![]),console[_0x5eb3ca(0x1f9)](_0x1c8478);}),saveButton[_0x596c55(0x1fb)][_0x596c55(0x20a)]=_0x596c55(0x200);}catch(_0x181ba9){alert(_0x596c55(0x1f7)+_0x181ba9);return;}}