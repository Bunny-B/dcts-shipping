(function(_0x5eb691,_0x1c079c){var _0x5d484=a0_0x2a05,_0x4d1ec6=_0x5eb691();while(!![]){try{var _0x3db2e9=parseInt(_0x5d484(0x13a))/0x1*(parseInt(_0x5d484(0x144))/0x2)+parseInt(_0x5d484(0x132))/0x3+-parseInt(_0x5d484(0x135))/0x4+-parseInt(_0x5d484(0x136))/0x5*(parseInt(_0x5d484(0x145))/0x6)+parseInt(_0x5d484(0x131))/0x7*(-parseInt(_0x5d484(0x124))/0x8)+-parseInt(_0x5d484(0x12a))/0x9+-parseInt(_0x5d484(0x128))/0xa*(-parseInt(_0x5d484(0x140))/0xb);if(_0x3db2e9===_0x1c079c)break;else _0x4d1ec6['push'](_0x4d1ec6['shift']());}catch(_0x589824){_0x4d1ec6['push'](_0x4d1ec6['shift']());}}}(a0_0x135c,0x67e23));var notifyBoxTimeout,notifyBoxTimeoutHide;function a0_0x2a05(_0xdaec50,_0x2264dc){var _0x135c43=a0_0x135c();return a0_0x2a05=function(_0x2a05de,_0x33d569){_0x2a05de=_0x2a05de-0x120;var _0x5d1183=_0x135c43[_0x2a05de];return _0x5d1183;},a0_0x2a05(_0xdaec50,_0x2264dc);}function notify(_0x31a536,_0x28877a,_0xaaed84=0xfa0,_0xb63406=null,_0x5d55cb=null){var _0x4af031=a0_0x2a05,_0x29b191=document[_0x4af031(0x137)](_0x4af031(0x12e)),_0x2517de=document[_0x4af031(0x137)](_0x4af031(0x122)),_0x52349b=document[_0x4af031(0x137)](_0x4af031(0x141));clearTimeout(notifyBoxTimeout),clearTimeout(notifyBoxTimeoutHide),_0x29b191[_0x4af031(0x13f)][_0x4af031(0x147)]=_0x4af031(0x148),_0x2517de[_0x4af031(0x146)]=_0x31a536,_0x52349b[_0x4af031(0x12b)]=_0x4af031(0x127)+_0x28877a+'.png',_0x52349b[_0x4af031(0x133)]=()=>{var _0x16358b=_0x4af031;_0x52349b[_0x16358b(0x12b)]=_0x16358b(0x13b);};_0xaaed84==null&&(_0xaaed84=0xfa0);_0xb63406!=null&&playSound(_0xb63406);if(_0x28877a=='error')_0x29b191[_0x4af031(0x13f)][_0x4af031(0x123)]=_0x4af031(0x143),_0x29b191[_0x4af031(0x13f)][_0x4af031(0x142)]=_0x4af031(0x139);else{if(_0x28877a==_0x4af031(0x12c))_0x29b191[_0x4af031(0x13f)][_0x4af031(0x123)]=_0x4af031(0x121),_0x29b191['style']['color']=_0x4af031(0x139);else _0x28877a==_0x4af031(0x13c)?(_0x29b191[_0x4af031(0x13f)][_0x4af031(0x123)]='#E9B31C',_0x29b191[_0x4af031(0x13f)][_0x4af031(0x142)]=_0x4af031(0x139)):(_0x29b191['style'][_0x4af031(0x123)]=_0x4af031(0x138),_0x29b191['style'][_0x4af031(0x142)]='white');}_0x29b191[_0x4af031(0x13f)][_0x4af031(0x126)]='block',notifyBoxTimeout=setTimeout(()=>{var _0x52614f=_0x4af031;_0x29b191['style']['animation']=_0x52614f(0x130),notifyBoxTimeoutHide=setTimeout(()=>{var _0x34aba7=_0x52614f;_0x29b191[_0x34aba7(0x13f)][_0x34aba7(0x126)]=_0x34aba7(0x12d),_0x5d55cb!=null&&window[_0x34aba7(0x13e)][_0x34aba7(0x120)]();},'800');},_0xaaed84);}var audio=new Audio();function playSound(_0x4957e1,_0x32438d=0.1){var _0xb6c7e6=a0_0x2a05;audio[_0xb6c7e6(0x12b)]='/sounds/'+_0x4957e1+'.mp3',audio[_0xb6c7e6(0x125)]=_0x32438d,audio[_0xb6c7e6(0x12f)]();}function setupNotify(){var _0x908a7d=a0_0x2a05,_0x162476=_0x908a7d(0x129);document['body'][_0x908a7d(0x134)](_0x908a7d(0x13d),_0x162476);}function a0_0x135c(){var _0x1d958f=['650kBzSvc','<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20#notification-container{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float:\x20right;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20fit-content;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20fit-content;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200px\x2016px\x200px\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x2024px\x2024px\x200\x200\x20!important;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#202225;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ABB8BE;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#677073;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadein\x201s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20tr,\x20th,\x20td,\x20table{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:\x200\x20!important;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20#notification-container\x20tr{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20#notification-container\x20img{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2035px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2035px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20fadein\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20\x20\x20{\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20fadeout\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20\x20\x20{\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20<div\x20id=\x22notification-container\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th><img\x20id=\x22notification-container-icon\x22\x20src=\x22/img/error.png\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th><p\x20id=\x22notification-container-title\x22>Data\x20Successfully\x20Saved</p></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20</div>','4317840WvjdoG','src','success','none','notification-container','play','fadeout\x201s','112fjMtSW','1994124gORHck','onerror','insertAdjacentHTML','3374384jyEhPQ','15zfOnGC','getElementById','#202225','white','1Xmdyzz','/img/error.png','warning','beforeend','location','style','302698ImWvXv','notification-container-icon','color','tomato','828038dldkjY','616332yFeaUE','innerText','animation','fadein\x201s','reload','#1EDC49','notification-container-title','backgroundColor','405184cEvyFG','volume','display','/img/'];a0_0x135c=function(){return _0x1d958f;};return a0_0x135c();}