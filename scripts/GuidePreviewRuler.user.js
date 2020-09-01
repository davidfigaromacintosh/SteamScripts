// ==UserScript==
// @name        Guide Preview Ruler
// @icon        https://steamuserimages-a.akamaihd.net/ugc/1602673530402127490/58668E18D856CD201C249482EB142F936B6D6B6B/
// @match       https://steamcommunity.com/sharedfiles/editguidesubsection/?id=*
// @grant       none
// @version     1.2.2
// @author      David Macintosh
// @description Adds a ruler to guide section previews so you can easily format and center your guide sections.
// ==/UserScript==

(()=>{
  $J('.subSections')
  .prepend('<div style="height: 14px;"></div><a id="DFM_TRuler"class="btn_darkblue_white_innerfade btn_border_2px btn_medium"style="user-select: none;"><span>Toggle Ruler</span></a><span id="DFM_HRuler"class="Tooltip_mark"style="user-select:none;color:#66C0F4"data-tooltip-text="Click this button to switch the visibility of the ruler. It should be visible by default."> (?)</span>')
  .attr({'style':'font-family: "Motiva Sans", Arial, Helvetica, sans-serif; font-size: 14px; color: #fff;'})
  .prepend('<div id="DFM_GRuler"style="position: absolute; margin-left: 0px; width: 638px; height: 0; z-index: -1; background-color: rgba(0, 20, 40, 0.5); background-image: '+
  "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAn4AAAAICAYAAABnNPKVAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAACCUlEQVR4nO3aIYwaQRSH8W+aCmQlsqKCBFPXTSo6srLyZGVl5cmVyErkSWTlyTl3Nc1JRMVJ5Mlzr4JbZoddjktDMi/l/0vW7JLlI4HHBAagNTO6Y5/Z89cHj2+P3c+Ke45K1j9mJJsW52or+1qSzR33NSSbOO5zELQnt01I1tTOGch9c5K1tXMGct+UZLPaOaOSmcv3HuTPaDf7vMl929nnTe7bzj5vcp+5mMdjutnnt2/+9P6rXTKum31H+o6tr8ysWFMd86L1FbSvXvASREREROQ/8Pokd+mtan/9/viuuSHaJ9LuWgwneZp/Vq66L4A1cLc746vvG3AN3O/O+Oq7BJbAw+6Mn74JcEkMbb2YEblvClwQw4+KNUO5bwY0xHBVL2ZE7muAKTH8rFgz1M24ZF+ADTHc1k4q5L6vwC0xrGsnFXLfd2BFDJvaSYXc1wILYnisnTSQ7A3b745F9Xk8Jtlb4DOwdNr3nu38W3nsCzdEYEKy61P06Rc/ERERkTOhhZ+IiIjImdDCT0RERORMnGaPX+8/5w8tf3b7+/auVVM2rGplHFT2LWtlHFT2LWplHJT7HoG2XsgBuW8D+NrfB/2+9dPhS+7ztXeu0/V523vYyX1XVTsOyX3+PhvQ72urdjwnhgc8zuZODPd4/G7rxHBHf9+/M92aKoTTrKf0i5+IiIjImfgLa2ki9nBTYFUAAAAASUVORK5CYII=')"
  +'; opacity: 0.06; transition-duration: 0.3s; transition-property: opacity;"></div>');
  
})();

setInterval(()=>{
  $J('#DFM_GRuler').height($J('#previewDescription').height());
  $J('#DFM_GRuler').css({'margin-top':$J('#DFM_TRuler').height() + $J('#previewTitle').height() + 20 + 6 + 14});
}, 375);

$J(".subSections").mouseenter(()=>{
  $J('#DFM_GRuler').css({'opacity':'0.5'});
})
.mouseleave(()=>{
  $J('#DFM_GRuler').css({'opacity':'0.06'});
});

$J('#DFM_TRuler').click(()=>{
  if($J('#DFM_GRuler').css('display') == 'none') {
    $J('#DFM_GRuler').css({'display': 'block'});
    $J('.subSections').css({'color': '#fff'});
  }
  else {
    $J('#DFM_GRuler').css({'display': 'none'});
    $J('.subSections').css({'color': 'rgb(150, 150, 150)'});
  }
});
