---
sidebar_position: 1
---
## Instalación y Configuración Inicial
Crea un bot para interactuar en un servidor
## Minecraft interactivo
Puede configurar el bot para definir su nombre del bot
Ip del server puerto y comando inicial
Para los comando coloque 
Su nombre del jugador minecraft
Aqui le muestro la sintaxis de minecraft 
```
chat:
  - "/tellraw @a {\"text\":\"uniqueId : comment \", \"color\":\"green\"}"
  - "/execute at playername run summon minecraft:sheep ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
likes:
  default:
    - "/execute at playername run summon minecraft:zombie ~ ~ ~"
    - "/title @a title {\"text\":\" 50 likes \"}"
    - "/title @a subtitle {\"text\":\" uniqueId envio {likes} likes \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run give @a minecraft:golden_apple 1"
gift:
  default:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run summon minecraft:zombie ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
    - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"
    - "/execute at playername run give @a minecraft:golden_apple 1"
    - "/title @a title {\"text\":\"uniqueId \"}"
  Taco :
    - "/execute at playername run fill ~-1 ~ ~-1 ~ ~1 ~ minecraft:tnt hollow"
    - "/execute at playername run give @p diamond_leggings{Enchantments:[{id:\"minecraft:protection\",lvl:10}]} 1"
    - "/execute at playername run summon minecraft:creeper ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
    - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"       
  TikTok:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run summon minecraft:skeleton ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
    - "/title @a title {\"text\":\"uniqueId \"}"
  Rose:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run give @a minecraft:golden_apple 1"
  GG:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run summon minecraft:creeper ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
    - "/title @a title {\"text\":\"uniqueId \"}"
envelope:
  - "/tellraw @a {\"text\":\"uniqueId  comment cofreeeee \", \"color\":\"gold\"}"
  - "/say uniqueId  comment cofreeeee"
  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"
subscribe:
  - "/tellraw @a {\"text\":\"uniqueId  subscribe \", \"color\":\"gold\"}"
  - "/say uniqueId  subscribe subscribe"
  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"
follow:
  - "/tellraw @a {\"text\":\"uniqueId  te sige \", \"color\":\"gold\"}"
  - "/execute at playername run summon minecraft:villager ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
  - "/title @a title {\"text\":\"uniqueId \"}"
  - "/title @a subtitle {\"text\":\"te sige \",\"bold\":true,\"color\":\"gold\"}"
welcome:
  - "/say join uniqueId"
  - "/execute at playername run give @a minecraft:golden_apple 1"
share:
  - "/tellraw @a {\"text\":\"uniqueId  compartio \", \"color\":\"gold\"}"
  - "/title @a title {\"text\":\"uniqueId \"}"
  - "/title @a subtitle {\"text\":\"compartio \",\"bold\":true,\"color\":\"gold\"}"
```
Eventos como chat gift follow share
Tambien en caso de comentarios
Es para mobs o items para el chat