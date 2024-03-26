---
sidebar_position: 5
sidebar_label: 'MixitupApp API DEVELOPMENT'
---
## MixitupAPI Chat 
Se conecta a la api de MixitupApp donde recibe los mensajes en "http://localhost:8911/api/v2/chat/message" y se envian al chat de twitch
el siguiente codigo es de public/app.js Donde se envian los comandos a Twitch
```
function enviarMensaje(message) {

    // Enviar el mensaje
    fetch("http://localhost:8911/api/v2/chat/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "Message": message, "Platform": "Twitch", "SendAsStreamer": true })
        })
        .then(function(response) {
            if (response.ok) {}
        })
        .catch(function(error) {
            console.error('Error al enviar el mensaje:', error);
        });

    lastComment = message;
    lastCommentTime = Date.now();
}
```
## MixitupAPI Commands
Pide a la API de comandos los comandos existentes `http://localhost:8911/api/v2/commands?skip=${skip}&pageSize=${pageSize}` se muestran los nombres IDs de los comandos 
```
const listaComandos = [];
const pageSize = 100;
let skip = 0;


function obtenerPaginaDeComandos() {
    fetch(`http://localhost:8911/api/v2/commands?skip=${skip}&pageSize=${pageSize}`)
        .then(response => response.json())
        .then(data => {
            if (!Array.isArray(data.Commands)) {
                throw new Error('La respuesta no contiene un array de comandos');
            }

            const comandos = data.Commands;
            listaComandos.push(...comandos);

            if (comandos.length === pageSize) {
                skip += pageSize;
                obtenerPaginaDeComandos();
            } else {
                listaComandos.forEach(cmd => {
                    if (!cmd || cmd < 1) {
                        console.error('Comando ignorado:', cmd);
                        return;
                    }
                });

                const MAX_COMMANDS = 50;
                let filterCondition;
                if (string) {
                    filterCondition = cmd => {
                        if (eventType === 'gift') {
                            console.log('Filtrando comandos para giftname. Valor de string:', string); 
                            return cmd.Name.toLowerCase().includes(string.toLowerCase());
                        } else {
                            return cmd.Name.toLowerCase().split(' ').includes(string.toLowerCase());
                        }
                    };
                } else {
                    filterCondition = () => true;
                }

                const comandosEncontrados = listaComandos.filter(filterCondition);
                if (comandosEncontrados.length === 0) {
                    console.error(`No hay comando con: ${string}`);
                    return;
                }

                const comandosLimitados = comandosEncontrados.slice(0, MAX_COMMANDS);
                }
            })
            .catch(error => {
                console.error('Error al obtener la página de comandos:', error);
            });
    }

```
Y luego si Recibe algun evento como gift Rose entonces busca el comando con ese nombre y ejecuta el comando enviando el id en `http://localhost:8911/api/commands/${comando.ID}`
- el siguiente codigo es de public/app.js Donde se envian los comandos a Twitch
```
fetch(`http://localhost:8911/api/commands/${comando.ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: comando.ID,
            name: comando.Name,
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        ultimoComandoEnviado = comando.Name;
        index++;
        enviarcomandoConRetraso();
    })
```