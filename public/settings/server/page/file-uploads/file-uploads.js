var a0_0x1dfc5f=a0_0xb647;(function(_0x351c18,_0x37f50a){var _0x3e7144=a0_0xb647,_0x5c1aba=_0x351c18();while(!![]){try{var _0x29d029=parseInt(_0x3e7144(0x1c1))/0x1+-parseInt(_0x3e7144(0x1a4))/0x2*(-parseInt(_0x3e7144(0x1b1))/0x3)+parseInt(_0x3e7144(0x1c4))/0x4*(parseInt(_0x3e7144(0x1bd))/0x5)+-parseInt(_0x3e7144(0x1af))/0x6*(-parseInt(_0x3e7144(0x1c9))/0x7)+-parseInt(_0x3e7144(0x1bb))/0x8*(parseInt(_0x3e7144(0x1b9))/0x9)+parseInt(_0x3e7144(0x1c7))/0xa*(parseInt(_0x3e7144(0x1b5))/0xb)+parseInt(_0x3e7144(0x1a5))/0xc*(-parseInt(_0x3e7144(0x1aa))/0xd);if(_0x29d029===_0x37f50a)break;else _0x5c1aba['push'](_0x5c1aba['shift']());}catch(_0x36b2e6){_0x5c1aba['push'](_0x5c1aba['shift']());}}}(a0_0x22b7,0x6bf7e));var setting_useLocalFs=document[a0_0x1dfc5f(0x1bf)](a0_0x1dfc5f(0x1a3)),setting_localFsLimit=document['getElementById'](a0_0x1dfc5f(0x1c0)),setting_cfAccountId=document['getElementById'](a0_0x1dfc5f(0x1b4)),setting_cfAccountToken=document['getElementById'](a0_0x1dfc5f(0x1b8)),setting_cfAccountHash=document[a0_0x1dfc5f(0x1bf)](a0_0x1dfc5f(0x1c3)),saveButton=document[a0_0x1dfc5f(0x1bf)](a0_0x1dfc5f(0x1ba)),useCf,cfAccountId,cfAccountToken,cfHash,localUploadLimit,serverconfigName,serverconfigDesc;function a0_0xb647(_0x3d2170,_0x72ed9e){var _0x22b76f=a0_0x22b7();return a0_0xb647=function(_0xb64756,_0x4085d4){_0xb64756=_0xb64756-0x1a3;var _0x31ede3=_0x22b76f[_0xb64756];return _0x31ede3;},a0_0xb647(_0x3d2170,_0x72ed9e);}function a0_0x22b7(){var _0x315d47=['cfAccountHash','364EFwiRz','block','none','986780YKfzyB','display','2177LboWYn','emit','saveToLocalFileSystem','7898zVyZEk','12DnDKin','NOt\x20same','userConnected','log','pfp','13008125FRrTor','value','maxUploadStorage','useCloudflareImageCDN','banner','5178yLrjpH','Error\x20while\x20trying\x20to\x20save\x20settings:\x20','216LFtfCw','getServerInfo','style','cfAccountId','77IgmgUt','aboutme','status','cfAccountToken','198juMeRZ','settings_profile_save','231592iwlIWh','checked','11555OgtCin','msg','getElementById','localUploadLimit','625973DZNhnO','cfHash'];a0_0x22b7=function(){return _0x315d47;};return a0_0x22b7();}socket[a0_0x1dfc5f(0x1ca)](a0_0x1dfc5f(0x1a7),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket['emit'](a0_0x1dfc5f(0x1b2),{'id':getID(),'token':getToken()},function(_0x596b64){var _0x4a767c=a0_0x1dfc5f;console[_0x4a767c(0x1a8)](_0x596b64),useCf=_0x596b64[_0x4a767c(0x1ad)],cfAccountId=_0x596b64[_0x4a767c(0x1b4)],cfAccountToken=_0x596b64[_0x4a767c(0x1b8)],cfHash=_0x596b64[_0x4a767c(0x1c2)],localUploadLimit=_0x596b64[_0x4a767c(0x1ac)],setting_useLocalFs=document['getElementById'](_0x4a767c(0x1a3)),setting_localFsLimit=document[_0x4a767c(0x1bf)](_0x4a767c(0x1c0)),setting_cfAccountId=document[_0x4a767c(0x1bf)](_0x4a767c(0x1b4)),setting_cfAccountToken=document[_0x4a767c(0x1bf)]('cfAccountToken'),setting_cfAccountHash=document[_0x4a767c(0x1bf)](_0x4a767c(0x1c3)),saveButton=document[_0x4a767c(0x1bf)](_0x4a767c(0x1ba)),useCf==0x1?setting_useLocalFs['checked']=!![]:setting_useLocalFs[_0x4a767c(0x1bc)]=![],setting_localFsLimit['value']=localUploadLimit,setting_cfAccountId[_0x4a767c(0x1ab)]=cfAccountId,setting_cfAccountToken[_0x4a767c(0x1ab)]=cfAccountToken,setting_cfAccountHash[_0x4a767c(0x1ab)]=cfHash;});function isChecked(_0x1b882f){var _0x43bd4e=a0_0x1dfc5f;return _0x1b882f[_0x43bd4e(0x1bc)]?0x1:0x0;}function updatePreview(){var _0x185194=a0_0x1dfc5f;try{isChecked(setting_useLocalFs)!=useCf||setting_cfAccountId[_0x185194(0x1ab)]!=cfAccountId||setting_cfAccountHash[_0x185194(0x1ab)]!=cfHash||setting_cfAccountToken[_0x185194(0x1ab)]!=cfAccountToken||setting_localFsLimit[_0x185194(0x1ab)]!=localUploadLimit?(console[_0x185194(0x1a8)](_0x185194(0x1a6)),saveButton['style'][_0x185194(0x1c8)]=_0x185194(0x1c5)):(console['log']('same'),saveButton[_0x185194(0x1b3)][_0x185194(0x1c8)]=_0x185194(0x1c6));}catch(_0x132bff){console[_0x185194(0x1a8)](_0x132bff);}}function saveSettings(){var _0x2d8018=a0_0x1dfc5f;try{socket[_0x2d8018(0x1ca)]('saveMediaSettings',{'id':getID(),'token':getToken(),'useCloudflare':isChecked(setting_useLocalFs),'cloudflareAccountId':setting_cfAccountId[_0x2d8018(0x1ab)],'cloudflareAccountToken':setting_cfAccountToken[_0x2d8018(0x1ab)],'cloudflareHash':setting_cfAccountHash['value'],'maxLocalUpload':setting_localFsLimit[_0x2d8018(0x1ab)]},function(_0x1bea38){var _0x442777=_0x2d8018;alert(_0x1bea38[_0x442777(0x1be)]),console['log'](_0x1bea38);});}catch(_0x54251f){alert(_0x2d8018(0x1b0)+_0x54251f);return;}}function setUser(_0x10e873){setCookie('username',_0x10e873,0x168);}function setBanner(_0x42ef03){var _0x1bee11=a0_0x1dfc5f;setCookie(_0x1bee11(0x1ae),_0x42ef03,0x168);}function setStatus(_0x3cb927){var _0x5b0205=a0_0x1dfc5f;setCookie(_0x5b0205(0x1b7),_0x3cb927,0x168);}function setPFP(_0x292f7e){var _0x4e47f7=a0_0x1dfc5f;setCookie(_0x4e47f7(0x1a9),_0x292f7e,0x168);}function setAboutme(_0x53e331){var _0x180c25=a0_0x1dfc5f;setCookie(_0x180c25(0x1b6),_0x53e331,0x168);}