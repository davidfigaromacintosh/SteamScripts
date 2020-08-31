// ==UserScript==
// @name        Join/Leaves All Profile Groups
// @grant       none
// @include     https://steamcommunity.com/profiles/*
// @include     https://steamcommunity.com/id/*
// @version     1.0
// @author      David Macintosh
// @description 31.08.2020, 19:50:59
// ==/UserScript==

(()=>{
  
$J('.profile_group_links.profile_count_link_preview_ctn.responsive_groupfriends_element')
.append('<a id="DFM_JG"class="btn_profile_action btn_small"style="margin-top:8px"><span>Join All Groups</span></a>')
.append('<a id="DFM_LG"class="btn_profile_action btn_small"style="margin-top:8px"><span>Leave All Common Groups</span></a>')

$J('#DFM_JG').click(function(){
  $J.get(location.href+'?xml=1').done(d=>{
    $J(d).find('groupID64').each((i,e)=>{
      $J.post('https://steamcommunity.com/gid/'+$J(e).text(),
      {action:'join',sessionID:g_sessionID})
      .done(console.log('Joined the group!')).fail('Error while joining this group!');
    });
  }).fail('Error retrieving group data!');
});
      
$J('#DFM_LG').click(function(){
  $J.get(location.href+'?xml=1').done(d=>{
    $J(d).find('groupID64').each((i,e)=>{
      $J.post('https://steamcommunity.com/profiles/'+g_steamID+'/home_process',
      {groupId:$J(e).text(),action:'leaveGroup',sessionID:g_sessionID})
      .done(console.log('Left the group!')).fail('Error while joining this group!');
    });
  }).fail('Error retrieving group data!');
});

})();
