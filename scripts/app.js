!function(e){"use strict";var o=e.querySelector("#app");if(o.baseUrl="/",""===window.location.port,o.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),window.addEventListener("paper-header-transform",function(o){var a=Polymer.dom(e).querySelector("#mainToolbar .app-name"),n=Polymer.dom(e).querySelector("#mainToolbar .middle-container"),r=Polymer.dom(e).querySelector("#mainToolbar .bottom-container"),t=o.detail,i=t.height-t.condensedHeight,l=Math.min(1,t.y/i),c=.5,s=i-t.y,d=i/(1-c),m=Math.max(c,s/d+c),u=1-l;Polymer.Base.transform("translate3d(0,"+100*l+"%,0)",n),Polymer.Base.transform("scale("+u+") translateZ(0)",r),Polymer.Base.transform("scale("+m+") translateZ(0)",a)}),o.scrollPageToTop=function(){o.$.headerPanelMain.scrollToTop(!0)},o.closeDrawer=function(){o.$.paperDrawerPanel.closeDrawer()},window.DeviceMotionEvent){var a,n=20,r=0;window.addEventListener("devicemotion",function(e){a=e.acceleration;var t=Math.abs(a.x),i=Math.abs(a.y),l=Math.abs(a.z),c=2*n;(t+i>c||t+l>c||i+l>c)&&(setTimeout(function(){r--,0===r&&o.$.todoList.fire("shake")},100),r++)},!1)}}(document);