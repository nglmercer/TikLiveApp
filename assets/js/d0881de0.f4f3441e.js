"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8323],{9219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(4848),r=n(8453);const o={sidebar_position:2},i="Ejemplos de MC Live",l={id:"MinecraftLive/MinecraftliveExample",title:"Ejemplos de MC Live",description:"Crea un bot para interactuar en un servidor",source:"@site/docs/MinecraftLive/MinecraftliveExample.md",sourceDirName:"MinecraftLive",slug:"/MinecraftLive/MinecraftliveExample",permalink:"/TikLiveApp/docs/MinecraftLive/MinecraftliveExample",draft:!1,unlisted:!1,editUrl:"https://github.com/nglmercer/TikLiveApp/tree/gh-pages/docs/MinecraftLive/MinecraftliveExample.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Minecraft Inicio",permalink:"/TikLiveApp/docs/MinecraftLive/MinecraftInit"},next:{title:"Comandos y Recursos",permalink:"/TikLiveApp/docs/MinecraftLive/Minecraft Comandos+"}},c={},u=[{value:"Requerimientos anteriores",id:"requerimientos-anteriores",level:2},{value:"EJEMPLO PARA Minecraft TNT",id:"ejemplo-para-minecraft-tnt",level:2},{value:"Ejemplo actualizado de tnt",id:"ejemplo-actualizado-de-tnt",level:2},{value:"Ejemplo Yaml de la version anterior",id:"ejemplo-yaml-de-la-version-anterior",level:2},{value:"Un ejemplo de mobs",id:"un-ejemplo-de-mobs",level:3},{value:"Ejemplo Antiguo en yaml para el Chat",id:"ejemplo-antiguo-en-yaml-para-el-chat",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"ejemplos-de-mc-live",children:"Ejemplos de MC Live"}),"\n",(0,a.jsx)(t.p,{children:"Crea un bot para interactuar en un servidor"}),"\n",(0,a.jsx)(t.h2,{id:"requerimientos-anteriores",children:"Requerimientos anteriores"}),"\n",(0,a.jsx)(t.p,{children:"Puede configurar el bot para definir su:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"nombre del bot"}),"\n",(0,a.jsx)(t.li,{children:"Ip del server : puerto"}),"\n",(0,a.jsx)(t.li,{children:"Su nombre del jugador minecraft"}),"\n",(0,a.jsxs)(t.li,{children:["comando inicial\n",(0,a.jsx)(t.img,{alt:"minecraftliveimg",src:n(3919).A+"",width:"841",height:"834"})]}),"\n",(0,a.jsx)(t.li,{children:"Eventos como:"}),"\n"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"chat"}),"\n",(0,a.jsx)(t.li,{children:"gift"}),"\n",(0,a.jsx)(t.li,{children:"follow"}),"\n",(0,a.jsx)(t.li,{children:"share"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"ejemplo-para-minecraft-tnt",children:"EJEMPLO PARA Minecraft TNT"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"img minecraftlive",src:n(4302).A+"",width:"607",height:"1080"}),"\nLos nuevos ejemplos estan en creaci\xf3n....."]}),"\n",(0,a.jsx)(t.h2,{id:"ejemplo-actualizado-de-tnt",children:"Ejemplo actualizado de tnt"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'chat:\n/tellraw @a {"text":"uniqueId : comment ", "color":"green"}\n/execute at playername run function wasd.tnt:explode/inverted\nlikes:\ndefault:\n/title @a title {"text":" 50 likes "}\n/title @a subtitle {"text":" uniqueId envio {likes} likes ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/underwatergift:\ndefault:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\nTaco:\n/execute at playername run fill ~-1 ~ ~-1 ~ ~1 ~ minecraft:tnt hollow\n/execute at playername run give @p diamond_leggings{Enchantments:[{id:"minecraft:protection",lvl:10}]} 1\n/execute at playername run summon minecraft:creeper ~ ~ ~ {CustomName:\'{"text":"uniqueId "}\', CustomNameVisible:1}\n/execute at playername run playsound minecraft:entity.player.levelup ambient @p\nTikTok:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run summon minecraft:skeleton ~ ~ ~ {CustomName:\'{"text":"uniqueId "}\', CustomNameVisible:1}\n/title @a title {"text":"uniqueId "}\nRose:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/underwater\nFinger Heart:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/__generated__/block/349\nRosa:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/tntnt\nHeart Me:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/fire\nDoughnut:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\nHands Heart:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/rocket\n/execute at playername run function wasd.tnt:explode/anvil\n/execute at playername run function wasd.tnt:explode/amethyst\nMishka Bear:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/meteor\nSwan:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/cow\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/meteor\nCorgi:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/cow\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/withering\n/execute at playername run function wasd.tnt:explode/meteor\nMoney Gun:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/meteor\n/gamemode survival playername\nLeon the Kitten:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/meteor\n/gamemode survival playername\nWhale diving:\n/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}\n/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/tntntnt\n/execute at playername run function wasd.tnt:explode/meteor\n/execute at playername run function wasd.tnt:explode/meteor\n/gamemode survival playernameenvelope:\n/tellraw @a {"text":"uniqueId  comment cofreeeee ", "color":"gold"}\n/say uniqueId  comment cofreeeee\n/execute at playername run playsound minecraft:entity.player.levelup ambient @p\nsubscribe:\n/tellraw @a {"text":"uniqueId  subscribe ", "color":"gold"}\n/say uniqueId  subscribe subscribe\n/execute at playername run playsound minecraft:entity.player.levelup ambient @p\nfollow:\n/tellraw @a {"text":"uniqueId  te sige ", "color":"gold"}\n/execute at playername run summon minecraft:villager ~ ~ ~ {CustomName:\'{"text":"uniqueId "}\', CustomNameVisible:1}\n/title @a title {"text":"uniqueId "}\n/title @a subtitle {"text":"te sige ","bold":true,"color":"gold"}\nwelcome:\n/say join uniqueId\n/execute at playername run give @a minecraft:golden_apple 1\nshare:\n/tellraw @a {"text":"uniqueId  compartio ", "color":"gold"}\n/title @a title {"text":"uniqueId "}\n/title @a subtitle {"text":"compartio ","bold":true,"color":"gold"}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"ejemplo-yaml-de-la-version-anterior",children:"Ejemplo Yaml de la version anterior"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'chat:\n  - "/tellraw @a {\\"text\\":\\"uniqueId : comment \\", \\"color\\":\\"green\\"}"\n  - "/execute at playername run function wasd.tnt:explode/inverted"\nlikes:\n  default:\n    - "/title @a title {\\"text\\":\\" 50 likes \\"}"\n    - "/title @a subtitle {\\"text\\":\\" uniqueId envio {likes} likes \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/underwater"\ngift:\n  default:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n  Taco :\n    - "/execute at playername run fill ~-1 ~ ~-1 ~ ~1 ~ minecraft:tnt hollow"\n    - "/execute at playername run give @p diamond_leggings{Enchantments:[{id:\\"minecraft:protection\\",lvl:10}]} 1"\n    - "/execute at playername run summon minecraft:creeper ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n    - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"       \n  TikTok:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run summon minecraft:skeleton ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n    - "/title @a title {\\"text\\":\\"uniqueId \\"}"\n  Rose:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/underwater"\n  Finger Heart:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/__generated__/block/349"\n  Rosa:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/tntnt"\n  Heart Me:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/fire"\n  Doughnut:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n  Hands Heart:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/rocket"\n    - "/execute at playername run function wasd.tnt:explode/anvil"\n    - "/execute at playername run function wasd.tnt:explode/amethyst"\n  Mishka Bear:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n  Swan:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/cow"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n  Corgi:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/cow"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/withering"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n  Money Gun:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/gamemode survival playername"\n  Leon the Kitten:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/gamemode survival playername"\n  Whale diving:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/tntntnt"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/execute at playername run function wasd.tnt:explode/meteor"\n    - "/gamemode survival playername"\nenvelope:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  comment cofreeeee \\", \\"color\\":\\"gold\\"}"\n  - "/say uniqueId  comment cofreeeee"\n  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"\nsubscribe:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  subscribe \\", \\"color\\":\\"gold\\"}"\n  - "/say uniqueId  subscribe subscribe"\n  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"\nfollow:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  te sige \\", \\"color\\":\\"gold\\"}"\n  - "/execute at playername run summon minecraft:villager ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n  - "/title @a title {\\"text\\":\\"uniqueId \\"}"\n  - "/title @a subtitle {\\"text\\":\\"te sige \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\nwelcome:\n  - "/say join uniqueId"\n  - "/execute at playername run give @a minecraft:golden_apple 1"\nshare:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  compartio \\", \\"color\\":\\"gold\\"}"\n  - "/title @a title {\\"text\\":\\"uniqueId \\"}"\n  - "/title @a subtitle {\\"text\\":\\"compartio \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n'})}),"\n",(0,a.jsx)(t.h3,{id:"un-ejemplo-de-mobs",children:"Un ejemplo de mobs"}),"\n",(0,a.jsx)(t.p,{children:"este es un ejemplo mas simple para minecraft vanilla sin mods"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'chat:\n  - "/tellraw @a {\\"text\\":\\"uniqueId : comment \\", \\"color\\":\\"green\\"}"\n  - "/execute at playername run summon minecraft:sheep ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\nlikes:\n  default:\n    - "/execute at playername run summon minecraft:zombie ~ ~ ~"\n    - "/title @a title {\\"text\\":\\" 50 likes \\"}"\n    - "/title @a subtitle {\\"text\\":\\" uniqueId envio {likes} likes \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run give @a minecraft:golden_apple 1"\ngift:\n  default:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n  Taco :\n    - "/execute at playername run fill ~-1 ~ ~-1 ~ ~1 ~ minecraft:tnt hollow"\n    - "/execute at playername run give @p diamond_leggings{Enchantments:[{id:\\"minecraft:protection\\",lvl:10}]} 1"\n    - "/execute at playername run summon minecraft:creeper ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n    - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"       \n  TikTok:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run summon minecraft:skeleton ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n    - "/title @a title {\\"text\\":\\"uniqueId \\"}"\n  Rose:\n    - "/tellraw @a {\\"text\\":\\"uniqueId  sent a giftName xrepeatCount \\", \\"color\\":\\"gold\\"}"\n    - "/title @a subtitle {\\"text\\":\\"ENVIO giftName xrepeatCount \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n    - "/execute at playername run give @a minecraft:golden_apple 1"\nenvelope:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  comment cofreeeee \\", \\"color\\":\\"gold\\"}"\n  - "/say uniqueId  comment cofreeeee"\n  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"\nsubscribe:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  subscribe \\", \\"color\\":\\"gold\\"}"\n  - "/say uniqueId  subscribe subscribe"\n  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"\nfollow:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  te sige \\", \\"color\\":\\"gold\\"}"\n  - "/execute at playername run summon minecraft:villager ~ ~ ~ {CustomName:\'{\\"text\\":\\"uniqueId \\"}\', CustomNameVisible:1}"\n  - "/title @a title {\\"text\\":\\"uniqueId \\"}"\n  - "/title @a subtitle {\\"text\\":\\"te sige \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\nwelcome:\n  - "/say join uniqueId"\n  - "/execute at playername run give @a minecraft:golden_apple 1"\nshare:\n  - "/tellraw @a {\\"text\\":\\"uniqueId  compartio \\", \\"color\\":\\"gold\\"}"\n  - "/title @a title {\\"text\\":\\"uniqueId \\"}"\n  - "/title @a subtitle {\\"text\\":\\"compartio \\",\\"bold\\":true,\\"color\\":\\"gold\\"}"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"ejemplo-antiguo-en-yaml-para-el-chat",children:"Ejemplo Antiguo en yaml para el Chat"}),"\n",(0,a.jsx)(t.p,{children:"Recibiremos lo que comententen de esto"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'keywordToGive:\n  escudo: "minecraft:shield"\n  cama: "minecraft:red_bed"\n  totem: "minecraft:totem_of_undying"\n  diamante: "minecraft:diamond 2"\n  diamantes: "minecraft:diamond 8"\n  emi: "minecraft:sugar"\n  leon: "minecraft:sand"\n  arena: "minecraft:sand"\n  madera: "minecraft:wooden"\n  azada: "minecraft:wooden_hoe"\n  azada_diamante: "minecraft:diamond_hoe"\n  azada_hierro: "minecraft:iron_hoe"\n  azada_madera: "minecraft:wooden_hoe"\n  azada_oro: "minecraft:golden_hoe"\n  azada_piedra: "minecraft:stone_hoe"\n  azucar: "minecraft:sugar"\n  cake keke: "minecraft:cake"\n  azucar ca\xf1a: "minecraft:sugar_cane"\n  azucar calabaza: "minecraft:pumpkin_seeds"\n  azucar mel\xf3n: "minecraft:melon_seeds"\n  azucar pasto: "minecraft:wheat_seeds"\n  azucar trigo: "minecraft:wheat_seeds"\n  azucar zanahoria: "minecraft:carrot"\n  azucar patata: "minecraft:potato"\n  azucar remolacha: "minecraft:beetroot_seeds"\n  azucar cacao: "minecraft:cocoa_beans"\n  azucar alga: "minecraft:kelp"\n  carb\xf3n: "minecraft:coal_block"\n  cuarzo: "minecraft:quartz_block"\n  emerald: "minecraft:emerald_block"\n  hierro: "minecraft:iron_block"\n  lapislazuli: "minecraft:lapis_block"\n  netherita: "minecraft:netherite_block"\n  netherite: "minecraft:netherite_block"\n  oro: "minecraft:gold_block"\n  redstone: "minecraft:redstone_block"\n  slime: "minecraft:slime_block"\n  piedra: "minecraft:stone"\n  obsidiana: "minecraft:obsidian"\n  terracota: "minecraft:terracotta"\n  vidrio: "minecraft:glass"\n  carbon: "minecraft:coal"\n  carne: "minecraft:beef"\n  carne_cocida: "minecraft:cooked_beef"\n  carne cerdo: "minecraft:porkchop"\n  carne cerdo_cocida: "minecraft:cooked_porkchop"\n  carne conejo: "minecraft:rabbit"\n  carne conejo_cocida: "minecraft:cooked_rabbit"\n  carne pollo: "minecraft:chicken"\n  carne pollo_cocida: "minecraft:cooked_chicken"\n  carne venado: "minecraft:deer"\n  carne venado_cocida: "minecraft:cooked_deer"\n  ca\xf1a azucar: "minecraft:sugar_cane"\n  ca\xf1a bambu: "minecraft:bamboo"\n  ca\xf1a pescar: "minecraft:fishing_rod"\n  ceniza: "minecraft:ashes"\n  cobre: "minecraft:copper_ingot"\n  cobre_puro: "minecraft:raw_copper_block"\n  cono resina: "minecraft:resin"\n  crema magma: "minecraft:magma_cream"\n  crisalida: "minecraft:chorus_fruit"\n  cristal: "minecraft:crystal"\n  cristal amatista: "minecraft:amethyst_crystal"\n  cristal hielo: "minecraft:packed_ice"\n  cristal end: "minecraft:end_crystal"\n  cristal end_destruido: "minecraft:dragon_breath"\n  cristal nether: "minecraft:nether_quartz"\n  cuenco: "minecraft:bowl"\n  cuerda: "minecraft:string"\n  arco: "minecraft:bow"\n  antorcha: "minecraft:torch"\n  redstone_glow: "minecraft:glowstone_dust"\n  redstone_luz mar: "minecraft:sea_lantern"\n  piedra_luminosa: "minecraft:stone_luminite"\n  redstone_antorcha: "minecraft:redstone_torch"\n  joya: "minecraft:diamond"\n  diamante_bruto: "minecraft:raw_diamond"\n  pepita oro: "minecraft:gold_ingot"\n  ender_perla: "minecraft:ender_pearl"\n  ender_ojo: "minecraft:ender_eye"\n  endojo: "minecraft:ender_eye"\n  redstone": "minecraft:redstone"\n  redstone_glow": "minecraft:glowstone_dust"\n  redstone_luz mar": "minecraft:sea_lantern"\n  piedra_luminosa": "minecraft:stone_luminite"\n  redstone_antorcha": "minecraft:redstone_torch"\n  joya": "minecraft:diamond"\n  diamante_bruto": "minecraft:raw_diamond"\n  pepita oro": "minecraft:gold_ingot"\n  ender_perla": "minecraft:ender_pearl"\n  ender_ojo": "minecraft:ender_eye"\n  endojo": "minecraft:ender_eye"\n  esmeralda": "minecraft:emerald"\n  esmeralda_bruta": "minecraft:raw_emerald"\n  enredadera": "minecraft:vine"\n  escama drag\xf3n": "minecraft:dragon_scale"\n  flecha": "minecraft:arrow 10"\n  flechas": "minecraft:arrow 10"\n  flecha_fuego": "minecraft:tipped_arrow"\n  flecha_perforadora": "minecraft:pointed_dripstone_arrow"\n  flecha_espectral": "minecraft:spectral_arrow"\n  flecha end": "minecraft:end_arrow"\n  flecha nether": "minecraft:nether_arrow"\n  fuego": "minecraft:fire"\n  goma": "minecraft:slime_ball"\n  globo": "minecraft:balloon"\n  galleta": "minecraft:cookie"\n  huevo": "minecraft:egg"\n  hormiga": "minecraft:ant_spawn_egg"\n  hueso": "minecraft:bone"\n  hacha": "minecraft:iron_axe"\n  pico": "minecraft:iron_pickaxe"\n  espada": "minecraft:diamond_sword{Enchantments:[{id:\\"minecraft:sharpness\\"lvl:10}{id:\\"minecraft:looting\\"lvl:3}]} 1"\n  armadura": "minecraft:diamond_leggings{Enchantments:[{id:\\"minecraft:protection\\"lvl:10}]} 1"\n  pechera": "minecraft:diamond_chet{Enchantments:[{id:\\"minecraft:protection\\"lvl:10}]} 1"\n  hierro": "minecraft:iron_ingot"\n  harina": "minecraft:flour"\n  jaula": "minecraft:cage"\n  jamon": "minecraft:ham"\n  jardin": "minecraft:garden"\n  kelp": "minecraft:kelp"\n  koi": "minecraft:koi_spawn_egg"\n  lana": "minecraft:wool"\n  lapislazuli": "minecraft:lapis_lazuli"\n  libro": "minecraft:book"\n  linterna": "minecraft:lantern"\n  leche": "minecraft:milk_bucket"\n  agua": "minecraft:water_bucket"\n  lava": "minecraft:lava_bucket"\n  manzana": "minecraft:golden_apple"\n  manzana dorada": "minecraft:enchanted_golden_apple"\n  manzana encantada": "minecraft:enchanted_golden_apple"\n  mel\xf3n": "minecraft:melon"\n  nabo": "minecraft:beetroot"\n  nugget": "minecraft:nugget"\n  nuez": "minecraft:acorn"\n  pan": "minecraft:bread"\n  panes": "minecraft:bread"\n  berries": "minecraft:sweet_berries"\n  llama": "minecraft:llama_spawn_egg"\n  oro": "minecraft:gold_ingot"\n  roca": "minecraft:stone"\n  piedra": "minecraft:cobblestone"\n  ramita": "minecraft:stick"\n  palo": "minecraft:stick"\n  ramo": "minecraft:bouquet"\n  sal": "minecraft:salt"\n  semilla": "minecraft:seed"\n  tierra": "minecraft:dirt"\n  tinta": "minecraft:ink_sac"\n  uva": "minecraft:grape"\n  vaca": "minecraft:cow_spawn_egg"\n  zanahoria": "minecraft:carrot"\n  zapato": "minecraft:shoe"\n  zorro": "minecraft:fox_spawn_egg"\n  resina": "minecraft:resin"\n  magma": "minecraft:magma_cream"\n  chorus": "minecraft:chorus_fruit"\n  amatista": "minecraft:amethyst_crystal"\n  hielo": "minecraft:packed_ice"\n  end": "minecraft:end_crystal"\n  nether": "minecraft:nether_quartz"\n  elytra": "minecraft:elytra"\n  nether_pulido": "minecraft:polished_nether_quartz"\n  nether_bruto": "minecraft:raw_nether_quartz"\n  cohete": "minecraft:firework_rocket"\n  cuarzo": "minecraft:quartz"\n  tnt": "minecraft:tnt 10"\n  mechero": "minecraft:flint_and_steel"\n  bote": "minecraft:boat"\nkeywordToMob:\n  enderman": "minecraft:enderman"\n  cerdo": "minecraft:pig"\n  oveja": "minecraft:sheep"\n  vaca": "minecraft:cow"\n  pollo": "minecraft:chicken"\n  conejo": "minecraft:rabbit"\n  caballo": "minecraft:horse"\n  burro": "minecraft:donkey"\n  mula": "minecraft:mule"\n  murci\xe9lago": "minecraft:bat"\n  lorito": "minecraft:parrot"\n  loro": "minecraft:parrot"\n  aldeano": "minecraft:villager"\n  golem hierro": "minecraft:iron_golem"\n  golem nieve": "minecraft:snow_golem"\n  abeja": "minecraft:bee"\n  gato": "minecraft:cat"\n  perro": "minecraft:dog"\n  zorro": "minecraft:fox"\n  cabr": "minecraft:goat"\n  panda": "minecraft:panda"\n  oso_polar": "minecraft:polar_bear"\n  tortuga": "minecraft:turtle"\n  delfin": "minecraft:dolphin"\n  llama": "minecraft:llama"\n  lobo": "minecraft:wolf"\n  perrito": "minecraft:wolf"\n  vindicador": "minecraft:vindicator"\n  vacahongo": "minecraft:mooshroom"\n  creeper": "minecraft:creeper"\n  esqueleto": "minecraft:skeleton"\n  zombi": "minecraft:zombie"\n  ara\xf1a": "minecraft:spider"\n  slime": "minecraft:slime"\n  ghast": "minecraft:ghast"\n  evocador": "minecraft:evoker"\n  bruja": "minecraft:witch"\n  zombi_pigman": "minecraft:zombified_piglin"\n  endermite": "minecraft:endermite"\n  lobo_manso": "minecraft:tamed_wolf"\n  esqueleto_wither": "minecraft:wither_skeleton"\n  gatito": "minecraft:tabby_cat"\n  gato_atigrado": "minecraft:tabby_cat"\n  gato_negro": "minecraft:black_cat"\n  gato_rojo": "minecraft:red_cat"\n  gato_siames": "minecraft:siamese_cat"\n  guardian": "minecraft:guardian"\n  anciano_guardian": "minecraft:elder_guardian"\n  shulker": "minecraft:shulker"\n  enderdragon": "minecraft:ender_dragon"\n  vexito": "minecraft:vex"\n  esqueleto_estrangulador": "minecraft:stray"\n  zombi_villager": "minecraft:zombie_villager"\n  husk": "minecraft:husk"\n  caballo_esqueleto": "minecraft:skeleton_horse"\n  caballo_zombi": "minecraft:zombie_horse"\n  ocelote": "minecraft:ocelot"\n  blaze": "minecraft:blaze"\n  magma_cube": "minecraft:magma_cube"\n  esqueleto_ataviado": "minecraft:armored_skeleton"\n  esqueleto_ataviado_fuego": "minecraft:burning_skeleton"\n  golem hoglin": "minecraft:hoglin"\n  pez": "minecraft:salmon"\n  zombi_vaquero": "minecraft:husk"\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},4302:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/imgminecraftTIKTOK-ef8d3f4630e90ecd114d94d6b9481760.png"},3919:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/minecraftlive-e8b70c1766f51fb2b4877db6f0e4ad68.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(6540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);