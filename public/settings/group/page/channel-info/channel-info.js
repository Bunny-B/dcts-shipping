var a0_0xe05cb8=a0_0x2fd6;(function(_0x5eb6f0,_0x2e7ea1){var _0x35f4d4=a0_0x2fd6,_0x40ed70=_0x5eb6f0();while(!![]){try{var _0x5e8595=-parseInt(_0x35f4d4(0x120))/0x1+parseInt(_0x35f4d4(0x116))/0x2*(parseInt(_0x35f4d4(0x102))/0x3)+-parseInt(_0x35f4d4(0x10d))/0x4*(parseInt(_0x35f4d4(0x10b))/0x5)+parseInt(_0x35f4d4(0x115))/0x6+-parseInt(_0x35f4d4(0x11b))/0x7+parseInt(_0x35f4d4(0x11e))/0x8*(-parseInt(_0x35f4d4(0x106))/0x9)+parseInt(_0x35f4d4(0x119))/0xa;if(_0x5e8595===_0x2e7ea1)break;else _0x40ed70['push'](_0x40ed70['shift']());}catch(_0x29e571){_0x40ed70['push'](_0x40ed70['shift']());}}}(a0_0x3ed9,0x5f0dd));var channelname=document[a0_0xe05cb8(0x108)](a0_0xe05cb8(0x10f)),saveButton=document[a0_0xe05cb8(0x108)]('settings_channel_save'),serverconfigName,editChannel={};socket[a0_0xe05cb8(0x107)]('userConnected',{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0xe05cb8(0x107)](a0_0xe05cb8(0x110),{'id':getID(),'token':getToken(),'channel':getUrlParams('id')},function(_0x519d47){var _0x402e43=a0_0xe05cb8;try{channelname=document[_0x402e43(0x108)](_0x402e43(0x10f)),saveButton=document[_0x402e43(0x108)](_0x402e43(0x111)),serverconfigName=_0x519d47[_0x402e43(0x10e)][_0x402e43(0x11d)],channelname[_0x402e43(0x11f)]=serverconfigName,editChannel=_0x519d47,console[_0x402e43(0x103)](_0x519d47);}catch(_0x2786fa){console[_0x402e43(0x103)](_0x402e43(0x109)),console[_0x402e43(0x103)](_0x2786fa),alert('Unable\x20to\x20get\x20channel\x20info.\x20Please\x20try\x20to\x20reload\x20slowly\x20until\x20it\x20works.\x20Known\x20bug!');}});function a0_0x2fd6(_0x3a5a9c,_0x4ab8e8){var _0x3ed93d=a0_0x3ed9();return a0_0x2fd6=function(_0x2fd6d5,_0x8d42d5){_0x2fd6d5=_0x2fd6d5-0x102;var _0xff3ae8=_0x3ed93d[_0x2fd6d5];return _0xff3ae8;},a0_0x2fd6(_0x3a5a9c,_0x4ab8e8);}function getToken(){var _0x4cdb94=a0_0xe05cb8,_0x445b18=getCookie(_0x4cdb94(0x113));return _0x445b18==null||_0x445b18['length']<=0x0?null:_0x445b18;}function getID(){var _0x979637=getCookie('id');return _0x979637==null||_0x979637['length']!=0xc?(_0x979637=generateId(0xc),setCookie('id',_0x979637,0x168),_0x979637):_0x979637;}function a0_0x3ed9(){var _0x5d0c60=['token','display','1521822jJIhOq','366998IKwdwT','msg','length','10315020xGicFt','style','416136wXQQPy','same','name','8ZWkiud','value','506033ChrCZr','6vUGTmT','log','Error\x20while\x20trying\x20to\x20save\x20settings:\x20','NOt\x20same','1151955ybpJRH','emit','getElementById','Unable\x20to\x20get\x20Channel\x20Information','updateChannelName','355825uOsMuN','block','32OkDrlk','data','channel_name','getChannelInfo','settings_channel_save','none'];a0_0x3ed9=function(){return _0x5d0c60;};return a0_0x3ed9();}function updatePreview(){var _0x263b6c=a0_0xe05cb8;try{channel_name[_0x263b6c(0x11f)]!=serverconfigName?(console['log'](_0x263b6c(0x105)),saveButton[_0x263b6c(0x11a)][_0x263b6c(0x114)]=_0x263b6c(0x10c)):(console[_0x263b6c(0x103)](_0x263b6c(0x11c)),saveButton[_0x263b6c(0x11a)]['display']=_0x263b6c(0x112));}catch(_0x48bf19){console[_0x263b6c(0x103)](_0x48bf19);}}function saveSettings(){var _0x70f38e=a0_0xe05cb8;try{channelname[_0x70f38e(0x11f)]!=null&&channelname['value'][_0x70f38e(0x118)]>0x0&&channelname[_0x70f38e(0x11f)]!=serverconfigName&&socket['emit'](_0x70f38e(0x10a),{'id':getID(),'token':getToken(),'channel':getUrlParams('id'),'name':channelname[_0x70f38e(0x11f)]},function(_0x23759b){var _0x2780ed=_0x70f38e;console[_0x2780ed(0x103)](_0x23759b),alert(_0x23759b[_0x2780ed(0x117)]);}),saveButton[_0x70f38e(0x11a)]['display']=_0x70f38e(0x112);}catch(_0x4f368e){alert(_0x70f38e(0x104)+_0x4f368e);return;}}