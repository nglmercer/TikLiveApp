"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[856],{3635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(4848),i=n(8453);const r={sidebar_position:1},o=void 0,l={id:"Tiktok-Src/Minecraft Live",title:"Minecraft Live",description:"Instalaci\xf3n y Configuraci\xf3n Inicial",source:"@site/docs/Tiktok-Src/Minecraft Live.md",sourceDirName:"Tiktok-Src",slug:"/Tiktok-Src/Minecraft Live",permalink:"/TikLiveApp-DOCS/docs/Tiktok-Src/Minecraft Live",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tiktok-Src/Minecraft Live.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MinecraftLive",permalink:"/TikLiveApp-DOCS/docs/category/minecraftlive"},next:{title:"Minecraft Archived",permalink:"/TikLiveApp-DOCS/docs/Tiktok-Src/Minecraft Archived"}},u={},c=[{value:"Instalaci\xf3n y Configuraci\xf3n Inicial",id:"instalaci\xf3n-y-configuraci\xf3n-inicial",level:2},{value:"Minecraft interactivo",id:"minecraft-interactivo",level:2}];function s(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"instalaci\xf3n-y-configuraci\xf3n-inicial",children:"Instalaci\xf3n y Configuraci\xf3n Inicial"}),"\n",(0,a.jsx)(t.p,{children:"Crea un bot para interactuar en un servidor"}),"\n",(0,a.jsx)(t.h2,{id:"minecraft-interactivo",children:"Minecraft interactivo"}),"\n",(0,a.jsx)(t.p,{children:"Puede configurar el bot para definir su nombre del bot\nIp del server puerto y comando inicial\nPara los comando coloque\nSu nombre del jugador minecraft\nAqui le muestro la sintaxis de minecraft"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'chat:\n  - "/tellraw @a {\\"text\\":\\"uniqueId : comment \\", \\"color\\":\\"green\\"}"\n  - "/execute at playername run summon minecraft:sheep ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\nlikes:\n  default:\n    - "/execute at playername run summon minecraft:zombie ~ ~ ~"\n    - "/title @a title {\\"text\\":\\" 50 likes \\"}"\n    - "/title @a subtitle {\\"text\\":\\" uniqueId envio {likes} likes \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run give @a minecraft:golden_apple 1"\ngift:\n  default:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run summon minecraft:zombie ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n    - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"\n    - "/execute at playername run give @a minecraft:golden_apple 1"\n    - "/title @a title {\\"text\\":\\"uniqueId \\"}"\n  Taco :\n    - "/execute at playername run fill ~-1 ~ ~-1 ~ ~1 ~ minecraft:tnt hollow"\n    - "/execute at playername run give @p diamond_leggings{Enchantments:[{id:\\"minecraft:protection\\",lvl:10}]} 1"\n    - "/execute at playername run summon minecraft:creeper ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n    - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"       \n  TikTok:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run summon minecraft:skeleton ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n    - "/title @a title {\\"text\\":\\"uniqueId \\"}"\n  Rose:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run give @a minecraft:golden_apple 1"\n  GG:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run summon minecraft:creeper ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n    - "/title @a title {\\"text\\":\\"uniqueId \\"}"\nenvelope:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  comment cofreeeee \\", \\"color\\":\\"gold\\"}"\n  - "/say uniqueId  comment cofreeeee"\n  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"\nsubscribe:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  subscribe \\", \\"color\\":\\"gold\\"}"\n  - "/say uniqueId  subscribe subscribe"\n  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"\nfollow:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  te sige \\", \\"color\\":\\"gold\\"}"\n  - "/execute at playername run summon minecraft:villager ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n  - "/title @a title {\\"text\\":\\"uniqueId \\"}"\n  - "/title @a subtitle {\\"text\\":\\"te sige \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\nwelcome:\n  - "/say join uniqueId"\n  - "/execute at playername run give @a minecraft:golden_apple 1"\nshare:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  compartio \\", \\"color\\":\\"gold\\"}"\n  - "/title @a title {\\"text\\":\\"uniqueId \\"}"\n  - "/title @a subtitle {\\"text\\":\\"compartio \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Eventos como chat gift follow share\nTambien en caso de comentarios\nEs para mobs o items para el chat"})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var a=n(6540);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);