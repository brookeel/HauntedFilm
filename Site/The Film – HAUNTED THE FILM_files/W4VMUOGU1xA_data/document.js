(()=>{"use strict";(()=>{let e,t="";const n=e=>{window.postMessage(Object.assign({source:"sponsorblock"},e),"/")};function i(e){const t=e.detail.pageType;if(t){const n={type:"navigation",pageType:t,videoID:null};if("shorts"===t||"watch"===t){const i=e.detail.endpoint;if(!i)return null;n.videoID=("shorts"===t?i.reelWatchEndpoint:i.watchEndpoint).videoId}return n}return null}function d(){if(!e)return;const i=e.getVideoData();i&&i.video_id!==t&&(t=i.video_id,n({type:"data",videoID:i.video_id,isLive:i.isLive,isPremiere:i.isPremiere}))}document.addEventListener("yt-player-updated",(function(t){e||(e=t.detail,d(),t.detail.addEventListener("onAdStart",(()=>n({type:"ad",playing:!0}))),t.detail.addEventListener("onAdFinish",(()=>n({type:"ad",playing:!1}))))})),document.addEventListener("yt-navigate-start",(function(e){const t=i(e);t&&n(t)})),document.addEventListener("yt-navigate-finish",(function(e){var t,o,a;d();const s=null===(a=null===(o=null===(t=e.detail)||void 0===t?void 0:t.response)||void 0===o?void 0:o.playerResponse)||void 0===a?void 0:a.videoDetails;s&&n(Object.assign({channelID:s.channelId,channelTitle:s.author},i(e)))}))})()})();