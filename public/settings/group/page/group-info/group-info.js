var a0_0x457529=a0_0x3262;(function(_0x4517bb,_0x28ab58){var _0x19b575=a0_0x3262,_0x2f9bb1=_0x4517bb();while(!![]){try{var _0x3ddcfd=parseInt(_0x19b575(0x1ad))/0x1*(-parseInt(_0x19b575(0x1a3))/0x2)+-parseInt(_0x19b575(0x196))/0x3*(-parseInt(_0x19b575(0x1b0))/0x4)+-parseInt(_0x19b575(0x197))/0x5+parseInt(_0x19b575(0x19d))/0x6+-parseInt(_0x19b575(0x1a2))/0x7*(-parseInt(_0x19b575(0x19c))/0x8)+-parseInt(_0x19b575(0x1ae))/0x9*(-parseInt(_0x19b575(0x1b4))/0xa)+parseInt(_0x19b575(0x1ab))/0xb*(parseInt(_0x19b575(0x19a))/0xc);if(_0x3ddcfd===_0x28ab58)break;else _0x2f9bb1['push'](_0x2f9bb1['shift']());}catch(_0x3c609e){_0x2f9bb1['push'](_0x2f9bb1['shift']());}}}(a0_0x3ae5,0xe4871));var channelname=document[a0_0x457529(0x1a5)](a0_0x457529(0x193)),saveButton=document[a0_0x457529(0x1a5)](a0_0x457529(0x1a0)),serverconfigName,editGroup={};function a0_0x3ae5(){var _0x1233b0=['value','none','5950uaWDQq','emit','Unable\x20to\x20get\x20channel\x20info.\x20Please\x20try\x20to\x20reload\x20slowly\x20until\x20it\x20works.\x20Known\x20bug!','Error\x20while\x20trying\x20to\x20save\x20settings:\x20','channel_name','data','group-','57cKCjOg','4956685xkTFfL','same','success','17153496WPnZyS','type','8VSVVyt','1228890WcZtsM','replace','name','settings_channel_save','display','2109541KOjFAN','3545186WTMPXo','NOt\x20same','getElementById','info','msg','error','updateGroupName','block','11YloZhh','style','1hqqdRE','5562AfvwPZ','length','294028OqSvvx','log'];a0_0x3ae5=function(){return _0x1233b0;};return a0_0x3ae5();}function a0_0x3262(_0x589a20,_0x5898bd){var _0x3ae539=a0_0x3ae5();return a0_0x3262=function(_0x326265,_0x116db1){_0x326265=_0x326265-0x190;var _0x23daff=_0x3ae539[_0x326265];return _0x23daff;},a0_0x3262(_0x589a20,_0x5898bd);}setupNotify(),socket[a0_0x457529(0x190)]('userConnected',{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0x457529(0x190)]('getGroupInfo',{'id':getID(),'token':getToken(),'group':getUrlParams('id')[a0_0x457529(0x19e)](a0_0x457529(0x195),'')},function(_0x983b8a){var _0x287001=a0_0x457529;try{console[_0x287001(0x1b1)](_0x983b8a),channelname=document[_0x287001(0x1a5)](_0x287001(0x193)),saveButton=document[_0x287001(0x1a5)](_0x287001(0x1a0)),serverconfigName=_0x983b8a[_0x287001(0x194)][_0x287001(0x1a6)][_0x287001(0x19f)],channelname['value']=serverconfigName,editGroup=_0x983b8a,console['log'](_0x983b8a);}catch(_0x2406c9){console['log']('Unable\x20to\x20get\x20Group\x20Information'),console[_0x287001(0x1b1)](_0x2406c9),alert(_0x287001(0x191));}});function getToken(){var _0x34d5b2=a0_0x457529,_0x118566=getCookie('token');return _0x118566==null||_0x118566[_0x34d5b2(0x1af)]<=0x0?null:_0x118566;}function getID(){var _0x21cc0b=a0_0x457529,_0x4f74c0=getCookie('id');return _0x4f74c0==null||_0x4f74c0[_0x21cc0b(0x1af)]!=0xc?(_0x4f74c0=generateId(0xc),setCookie('id',_0x4f74c0,0x168),_0x4f74c0):_0x4f74c0;}function updatePreview(){var _0x337ead=a0_0x457529;try{channel_name[_0x337ead(0x1b2)]!=serverconfigName?(console[_0x337ead(0x1b1)](_0x337ead(0x1a4)),saveButton[_0x337ead(0x1ac)][_0x337ead(0x1a1)]=_0x337ead(0x1aa)):(console['log'](_0x337ead(0x198)),saveButton[_0x337ead(0x1ac)][_0x337ead(0x1a1)]=_0x337ead(0x1b3));}catch(_0x3049e8){console[_0x337ead(0x1b1)](_0x3049e8);}}function saveSettings(){var _0x5d1c3f=a0_0x457529;try{channelname['value']!=null&&channelname['value'][_0x5d1c3f(0x1af)]>0x0&&channelname[_0x5d1c3f(0x1b2)]!=serverconfigName&&socket[_0x5d1c3f(0x190)](_0x5d1c3f(0x1a9),{'id':getID(),'token':getToken(),'groupId':getUrlParams('id'),'groupName':channelname[_0x5d1c3f(0x1b2)]},function(_0x4bc638){var _0x325061=_0x5d1c3f;_0x4bc638[_0x325061(0x19b)]=='success'?notify(_0x4bc638[_0x325061(0x1a7)],_0x325061(0x199),null,!![]):notify(_0x4bc638['msg'],_0x325061(0x1a8),null,!![]),console[_0x325061(0x1b1)](_0x4bc638);}),saveButton['style'][_0x5d1c3f(0x1a1)]=_0x5d1c3f(0x1b3);}catch(_0x5af963){alert(_0x5d1c3f(0x192)+_0x5af963);return;}}