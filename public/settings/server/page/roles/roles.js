var a0_0x305977=a0_0x3eb5;(function(_0x117417,_0x34fcfd){var _0x1616cd=a0_0x3eb5,_0x834937=_0x117417();while(!![]){try{var _0x2a1cd6=parseInt(_0x1616cd(0x1b9))/0x1*(-parseInt(_0x1616cd(0x1ae))/0x2)+parseInt(_0x1616cd(0x1fe))/0x3*(-parseInt(_0x1616cd(0x1e0))/0x4)+-parseInt(_0x1616cd(0x1da))/0x5*(parseInt(_0x1616cd(0x201))/0x6)+parseInt(_0x1616cd(0x1b3))/0x7*(parseInt(_0x1616cd(0x1d9))/0x8)+-parseInt(_0x1616cd(0x1b4))/0x9+parseInt(_0x1616cd(0x1c4))/0xa*(parseInt(_0x1616cd(0x1eb))/0xb)+parseInt(_0x1616cd(0x1ac))/0xc*(parseInt(_0x1616cd(0x1d4))/0xd);if(_0x2a1cd6===_0x34fcfd)break;else _0x834937['push'](_0x834937['shift']());}catch(_0x99b084){_0x834937['push'](_0x834937['shift']());}}}(a0_0x3b82,0x71e6d));function a0_0x3eb5(_0x154b1c,_0x232337){var _0x3b826c=a0_0x3b82();return a0_0x3eb5=function(_0x3eb50c,_0x345148){_0x3eb50c=_0x3eb50c-0x1a6;var _0xd79de1=_0x3b826c[_0x3eb50c];return _0xd79de1;},a0_0x3eb5(_0x154b1c,_0x232337);}var rolelist=document[a0_0x305977(0x1c0)](a0_0x305977(0x1b8)),roleColor=document['getElementById'](a0_0x305977(0x1c3)),roleName=document[a0_0x305977(0x1c0)]('roleName'),serverRoleResponse='',editedServerRoleResponse=[],editedPermissions={},currentRoleId='';socket[a0_0x305977(0x1cc)](a0_0x305977(0x1de),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket['emit'](a0_0x305977(0x1ba),{'id':getID(),'token':getToken(),'permission':[a0_0x305977(0x1b6),a0_0x305977(0x1d0)]},function(_0x2b1da9){var _0x3497ba=a0_0x305977;_0x2b1da9['permission']==_0x3497ba(0x1a7)?window[_0x3497ba(0x1a9)]['href']=window[_0x3497ba(0x1a9)][_0x3497ba(0x1b1)]+'/settings/server':document[_0x3497ba(0x1c0)](_0x3497ba(0x1f2))[_0x3497ba(0x1d5)]['display']='block';});function saveNumber(_0x57cb76){var _0x175397=a0_0x305977;editedServerRoleResponse[currentRoleId]['permissions'][_0x57cb76['id']]=_0x57cb76[_0x175397(0x1f6)],console[_0x175397(0x1c8)](editedServerRoleResponse[currentRoleId][_0x175397(0x1bd)]),document[_0x175397(0x1c0)](_0x175397(0x1d1))[_0x175397(0x1d5)][_0x175397(0x1c1)]=_0x175397(0x1b7),document[_0x175397(0x1c0)](_0x175397(0x1ed))[_0x175397(0x1d5)][_0x175397(0x1c1)]=_0x175397(0x1b7);}socket[a0_0x305977(0x1cc)]('getServerRoles',{'id':getID(),'token':getToken()},function(_0x3ace61){var _0x573fbb=a0_0x305977;rolelist=document[_0x573fbb(0x1c0)](_0x573fbb(0x1b8)),roleColor=document[_0x573fbb(0x1c0)]('roleColor'),roleName=document[_0x573fbb(0x1c0)]('roleName'),console[_0x573fbb(0x1c8)](_0x3ace61),serverRoleResponse=_0x3ace61,editedServerRoleResponse=_0x3ace61;var _0x13bf18=[];Object['keys'](_0x3ace61)[_0x573fbb(0x1ef)]()[_0x573fbb(0x1be)](function(_0x135dc6){var _0x1bccde=_0x573fbb;console[_0x1bccde(0x1c8)](_0x3ace61);var _0x3d03d6=_0x3ace61[_0x135dc6][_0x1bccde(0x1ec)][_0x1bccde(0x1ca)],_0x55fd6c=_0x3ace61[_0x135dc6][_0x1bccde(0x1ec)][_0x1bccde(0x1f5)];_0x13bf18[_0x3ace61[_0x135dc6][_0x1bccde(0x1ec)][_0x1bccde(0x1dd)]]=_0x3ace61[_0x135dc6];});var _0x48c41f='';_0x13bf18=_0x13bf18['reverse'](),console[_0x573fbb(0x1c8)](_0x13bf18),_0x13bf18[_0x573fbb(0x1be)](_0x5e7530=>{var _0xa3366d=_0x573fbb;_0x48c41f+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22role-entry-container\x22\x20id=\x22'+_0x5e7530[_0xa3366d(0x1ec)]['id']+_0xa3366d(0x1c9)+_0x5e7530[_0xa3366d(0x1ec)]['id']+_0xa3366d(0x1e4)+_0x5e7530[_0xa3366d(0x1ec)]['id']+')\x22\x20style=\x22background-image:\x20url(\x27/img/down.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22role-entry\x22\x20onclick=\x22loadRolePerms(\x27'+_0x5e7530[_0xa3366d(0x1ec)]['id']+'\x27)\x22\x20id=\x22'+_0x5e7530['info']['id']+_0xa3366d(0x1e2)+_0x5e7530['info'][_0xa3366d(0x1ca)]+_0xa3366d(0x1d2)+_0x5e7530[_0xa3366d(0x1ec)]['name']+_0xa3366d(0x1c7);}),rolelist[_0x573fbb(0x1b2)]('beforeend',_0x48c41f);});function saveAppearance(){var _0x35d062=a0_0x305977;serverRoleResponse[currentRoleId]['info'][_0x35d062(0x1f5)]=roleName[_0x35d062(0x1f6)],serverRoleResponse[currentRoleId]['info']['color']=roleColor[_0x35d062(0x1f6)],document[_0x35d062(0x1c0)]('displaySeperate')[_0x35d062(0x1e1)]==!![]?serverRoleResponse[currentRoleId][_0x35d062(0x1ec)][_0x35d062(0x1d7)]=0x1:serverRoleResponse[currentRoleId][_0x35d062(0x1ec)][_0x35d062(0x1d7)]=0x0,socket[_0x35d062(0x1cc)](_0x35d062(0x1dc),{'id':getID(),'token':getToken(),'roleId':currentRoleId,'data':serverRoleResponse[currentRoleId]},function(_0x11269a){var _0xee70e6=_0x35d062;alert(_0x11269a[_0xee70e6(0x1c2)]),window[_0xee70e6(0x1a9)]['reload']();});}function appearanceChanged(){var _0x5475d5=a0_0x305977;document[_0x5475d5(0x1c0)](_0x5475d5(0x202))[_0x5475d5(0x1d5)][_0x5475d5(0x1c1)]=_0x5475d5(0x1b7),document[_0x5475d5(0x1c0)](_0x5475d5(0x1e3))[_0x5475d5(0x1d5)][_0x5475d5(0x1c1)]=_0x5475d5(0x1b7);}function saveSorting(){var _0x405f66=a0_0x305977,_0x30d276=document[_0x405f66(0x203)]('.role-entry-container'),_0x18f429=[];_0x30d276[_0x405f66(0x1be)](_0x4cb60e=>{var _0xfcaf5d=_0x405f66;_0x18f429[_0xfcaf5d(0x1a6)](_0x4cb60e['id']);}),socket[_0x405f66(0x1cc)](_0x405f66(0x1e7),{'id':getID(),'token':getToken(),'sorted':_0x18f429},function(_0x8d477){var _0x4f85e7=_0x405f66;alert(_0x8d477[_0x4f85e7(0x1c2)]),window[_0x4f85e7(0x1a9)][_0x4f85e7(0x1d8)]();});}function removeFromRole(_0x10a91a,_0xef24b4){var _0x40723f=a0_0x305977;console[_0x40723f(0x1c8)]('Removing\x20user\x20'+_0xef24b4+_0x40723f(0x1a8)),socket[_0x40723f(0x1cc)](_0x40723f(0x1df),{'id':getID(),'token':getToken(),'role':_0x10a91a,'target':_0xef24b4},function(_0x46d8df){var _0x5a78ca=_0x40723f;alert(_0x46d8df[_0x5a78ca(0x1c2)]),window[_0x5a78ca(0x1a9)][_0x5a78ca(0x1d8)]();});}function a0_0x3b82(){var _0x229d73=['39WXwlXJ','checkPermission','after','length','permissions','forEach','innerText','getElementById','display','msg','roleColor','250AuINQn','resolveMember','members','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','log','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleUp(','color','permissionlist','emit','deleteRole','checked\x20element','The\x20user\x20id\x20(12\x20character\x20long\x20number)\x20you\x27ve\x20entered\x20is\x20incorrect.','manageGroup','saveButton',';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x27);\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-pfp\x22\x20style=\x22background-image:\x20url(\x27','299gqoYTY','style','saveRolePermissions','displaySeperate','reload','1008lZpNZx','10uyxpjm','#permissionlist\x20p\x20input','updateRoleAppearance','sortId','userConnected','removeUserFromRole','72bRAaBp','checked','\x22\x20style=\x22display:\x20inline-block;color:\x20','cancelAppearanceButton',')\x22\x20style=\x22background-image:\x20url(\x27/img/up.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleDown(','Please\x20enter\x20the\x20user\x20id\x20of\x20the\x20account\x20you\x20want\x20to\x20add','addUserToRole','updateRoleHierarchy','backgroundColor','keys','</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20onclick=\x22removeFromRole(','78859WJmHOy','info','cancelButton','before','reverse','transparent','\x20input','pagebody','\x27);\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-username\x22>','type','name','value','.role-entry-container','number','memberlist','permheader','<div\x20class=\x22memberlist-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-banner\x22\x20style=\x22background-image:\x20url(\x27','icon','data','52047jeUusF','createRole','saveSortingButton','464934FtSxuo','saveAppearanceButton','querySelectorAll','cancelSortingButton','banner','#292B2F','push','denied','\x20from\x20role\x20','location','.role-entry','Saviong','554100qVckcU','innerHTML','31790eLGUgj','Permissions\x20-\x20','beforeend','origin','insertAdjacentHTML','27741cLKXpm','1681938miTVfF','block','manageRoles','inline-block','rolelist'];a0_0x3b82=function(){return _0x229d73;};return a0_0x3b82();}function savePermissions(){var _0x22ff3f=a0_0x305977;console[_0x22ff3f(0x1c8)](_0x22ff3f(0x1ab)),console['log'](editedServerRoleResponse[currentRoleId][_0x22ff3f(0x1bd)]),socket['emit'](_0x22ff3f(0x1d6),{'id':getID(),'token':getToken(),'role':currentRoleId,'permissions':editedServerRoleResponse[currentRoleId]['permissions']},function(_0x3e9f84){var _0x4ec14c=_0x22ff3f;alert(_0x3e9f84['msg']),window[_0x4ec14c(0x1a9)][_0x4ec14c(0x1d8)]();});}function addToRole(){var _0x39857a=a0_0x305977,_0x5c61d0=prompt(_0x39857a(0x1e5));if(_0x5c61d0[_0x39857a(0x1bc)]!=0xc||isNaN(_0x5c61d0)==!![]){alert(_0x39857a(0x1cf));return;}socket[_0x39857a(0x1cc)](_0x39857a(0x1e6),{'id':getID(),'token':getToken(),'role':currentRoleId,'target':_0x5c61d0},function(_0x8aba8b){var _0x37b20b=_0x39857a;alert(_0x8aba8b[_0x37b20b(0x1c2)]),window['location']['reload']();});}function createRole(){var _0x1a3317=a0_0x305977;socket[_0x1a3317(0x1cc)](_0x1a3317(0x1ff),{'id':getID(),'token':getToken()},function(_0x187e7c){var _0x13b51d=_0x1a3317;alert(_0x187e7c[_0x13b51d(0x1c2)]),window[_0x13b51d(0x1a9)][_0x13b51d(0x1d8)]();});}function moveRoleUp(_0x444819){var _0x2e1850=a0_0x305977;document[_0x2e1850(0x1c0)](_0x2e1850(0x200))['style'][_0x2e1850(0x1c1)]=_0x2e1850(0x1b7),document['getElementById'](_0x2e1850(0x204))[_0x2e1850(0x1d5)][_0x2e1850(0x1c1)]='inline-block';var _0x635ab3=document[_0x2e1850(0x203)](_0x2e1850(0x1f7));for(let _0x3949fd=0x0;_0x3949fd<_0x635ab3['length'];_0x3949fd++){_0x635ab3[_0x3949fd]['id']==_0x444819&&_0x635ab3[_0x3949fd-0x1][_0x2e1850(0x1ee)](_0x635ab3[_0x3949fd]);}}function moveRoleDown(_0x5030c3){var _0x1c08fa=a0_0x305977;document['getElementById'](_0x1c08fa(0x200))[_0x1c08fa(0x1d5)][_0x1c08fa(0x1c1)]='inline-block',document[_0x1c08fa(0x1c0)]('cancelSortingButton')['style'][_0x1c08fa(0x1c1)]='inline-block';var _0x2cbc24=document[_0x1c08fa(0x203)](_0x1c08fa(0x1f7));for(let _0x3faacb=0x0;_0x3faacb<_0x2cbc24[_0x1c08fa(0x1bc)];_0x3faacb++){_0x2cbc24[_0x3faacb]['id']==_0x5030c3&&_0x2cbc24[_0x3faacb+0x1][_0x1c08fa(0x1bb)](_0x2cbc24[_0x3faacb]);}}function tickSetting(_0x6e7319){var _0x200057=a0_0x305977;document[_0x200057(0x1c0)]('saveButton')[_0x200057(0x1d5)]['display']='inline-block',document['getElementById']('cancelButton')['style'][_0x200057(0x1c1)]=_0x200057(0x1b7);var _0x484e27=document['querySelectorAll']('#'+_0x6e7319['id']+_0x200057(0x1f1));_0x484e27[0x0][_0x200057(0x1e1)]=!_0x484e27[0x0][_0x200057(0x1e1)],Object['keys'](serverRoleResponse[currentRoleId][_0x200057(0x1bd)])[_0x200057(0x1be)](function(_0x4e0411){var _0x4918e8=_0x200057;editedPermissions[_0x4e0411]=serverRoleResponse[currentRoleId][_0x4918e8(0x1bd)][_0x4e0411],console['log'](_0x4e0411);}),console['log']('\x20'),_0x484e27[0x0][_0x200057(0x1e1)]==!![]?editedServerRoleResponse[currentRoleId][_0x200057(0x1bd)][_0x6e7319['id']]=0x1:editedServerRoleResponse[currentRoleId]['permissions'][_0x6e7319['id']]=0x0,console[_0x200057(0x1c8)](serverRoleResponse[currentRoleId][_0x200057(0x1bd)]);}function deleteRole(){var _0x467718=a0_0x305977;socket[_0x467718(0x1cc)](_0x467718(0x1cd),{'id':getID(),'token':getToken(),'roleId':currentRoleId},function(_0x56b23f){var _0x328ada=_0x467718;alert(_0x56b23f[_0x328ada(0x1c2)]),window[_0x328ada(0x1a9)][_0x328ada(0x1d8)]();});}function loadRolePerms(_0x2e560e){var _0xc14111=a0_0x305977,_0x24ba93=document['querySelectorAll'](_0xc14111(0x1aa));_0x24ba93[_0xc14111(0x1be)](_0x5d5f79=>{var _0x4df1d5=_0xc14111;_0x5d5f79['id']==_0x2e560e?_0x5d5f79['style'][_0x4df1d5(0x1e8)]=_0x4df1d5(0x206):_0x5d5f79['style'][_0x4df1d5(0x1e8)]=_0x4df1d5(0x1f0);});var _0x2d5fae=serverRoleResponse[_0x2e560e][_0xc14111(0x1bd)];document[_0xc14111(0x1c0)](_0xc14111(0x1fa))[_0xc14111(0x1bf)]=_0xc14111(0x1af)+serverRoleResponse[_0x2e560e]['info'][_0xc14111(0x1f5)],document[_0xc14111(0x1c0)](_0xc14111(0x1cb))[_0xc14111(0x1d5)][_0xc14111(0x1c1)]=_0xc14111(0x1b5),document['getElementById'](_0xc14111(0x1cd))['style'][_0xc14111(0x1c1)]=_0xc14111(0x1b5),currentRoleId=_0x2e560e,roleColor['value']=serverRoleResponse[_0x2e560e][_0xc14111(0x1ec)][_0xc14111(0x1ca)],roleName[_0xc14111(0x1f6)]=serverRoleResponse[_0x2e560e][_0xc14111(0x1ec)]['name'],permListPage=document[_0xc14111(0x203)](_0xc14111(0x1db)),permListPage[_0xc14111(0x1be)](_0x10448b=>{var _0x3ba2c3=_0xc14111;_0x10448b[_0x3ba2c3(0x1e1)]=![];}),Object[_0xc14111(0x1e9)](_0x2d5fae)[_0xc14111(0x1be)](function(_0x551c10){var _0x3cc049=_0xc14111;children=document[_0x3cc049(0x203)]('#'+_0x551c10+'\x20input'),console['log']('#'+_0x551c10+_0x3cc049(0x1f1)),_0x2d5fae[_0x551c10]==0x1?(console['log'](children[0x0]),console['log'](_0x3cc049(0x1ce)),children[0x0][_0x3cc049(0x1e1)]=!![]):children[0x0][_0x3cc049(0x1f4)]==_0x3cc049(0x1f8)?children[0x0]['value']=_0x2d5fae[_0x551c10]:children[0x0][_0x3cc049(0x1e1)]=![];});serverRoleResponse[_0x2e560e][_0xc14111(0x1ec)]['displaySeperate']==0x1?(console[_0xc14111(0x1c8)](_0xc14111(0x1ce)),document[_0xc14111(0x1c0)]('displaySeperate')[_0xc14111(0x1e1)]=!![]):document[_0xc14111(0x1c0)](_0xc14111(0x1d7))['checked']=![];var _0x2af589=document[_0xc14111(0x1c0)](_0xc14111(0x1f9));_0x2af589[_0xc14111(0x1ad)]='',console[_0xc14111(0x1c8)](serverRoleResponse[currentRoleId][_0xc14111(0x1c6)]),Object[_0xc14111(0x1e9)](serverRoleResponse[currentRoleId][_0xc14111(0x1c6)])['reverse']()[_0xc14111(0x1be)](function(_0x2b85e9){var _0x30e630=_0xc14111;console[_0x30e630(0x1c8)]('member:'),console[_0x30e630(0x1c8)](_0x2b85e9),console[_0x30e630(0x1c8)](serverRoleResponse[currentRoleId]['members'][_0x2b85e9]),socket[_0x30e630(0x1cc)](_0x30e630(0x1c5),{'id':getID(),'token':getToken(),'target':serverRoleResponse[currentRoleId][_0x30e630(0x1c6)][_0x2b85e9]},function(_0xe31de1){var _0x100b0d=_0x30e630,_0x3c053c=_0x100b0d(0x1fb)+_0xe31de1[_0x100b0d(0x1fd)][_0x100b0d(0x205)]+_0x100b0d(0x1d3)+_0xe31de1[_0x100b0d(0x1fd)][_0x100b0d(0x1fc)]+_0x100b0d(0x1f3)+_0xe31de1[_0x100b0d(0x1fd)][_0x100b0d(0x1f5)]+_0x100b0d(0x1ea)+currentRoleId+',\x20'+_0xe31de1['data']['id']+')\x22\x20type=\x22button\x22\x20value=\x22Remove\x20from\x20Role\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';_0x2af589['insertAdjacentHTML'](_0x100b0d(0x1b0),_0x3c053c);});});}