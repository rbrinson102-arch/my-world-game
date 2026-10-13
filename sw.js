/* My Block push alerts */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(x){d={title:'My Block',body:e.data?e.data.text():''}}
  e.waitUntil(self.registration.showNotification(d.title||'My Block',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',tag:'myblock',renotify:true}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c)return c.focus()}return self.clients.openWindow('./')}))});
