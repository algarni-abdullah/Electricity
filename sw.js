var C="elec-v1",F=["./","index.html","https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return Promise.all(F.map(function(u){
 return fetch(u,{mode:u.indexOf("http")===0?"no-cors":"same-origin"}).then(function(r){return c.put(u,r)}).catch(function(){})}))}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;
 e.respondWith(fetch(e.request).then(function(r){var cp=r.clone();caches.open(C).then(function(c){c.put(e.request,cp)});return r})
 .catch(function(){return caches.match(e.request,{ignoreSearch:true}).then(function(m){return m||caches.match("index.html")})}))});
