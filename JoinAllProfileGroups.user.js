// ==UserScript==
// @name        Join All Profile Groups
// @grant       none
// @include     https://steamcommunity.com/profiles/*
// @include     https://steamcommunity.com/id/*
// @version     1.0
// @author      David Macintosh
// @description 31.08.2020, 19:50:59
// ==/UserScript==

function DFM_JG(){
  $J.get(location.href+'?xml=1').done(d=>{
    $J(d).find('groupID64').each((i,e)=>{
        $J.post('https://steamcommunity.com/gid/'+$J(e).text(),
        {action:'join',sessionID:g_sessionID})
        .done(console.log('Joined the group!')).fail('Error while joining this group!');
    });
}).fail('Error retrieving group data!');}

(()=>$J('.profile_group_links.profile_count_link_preview_ctn.responsive_groupfriends_element')
.append('<a href="javascript:DFM_JG()"class="btn_profile_action btn_medium"><span>Join all groups</span></a>'))();
