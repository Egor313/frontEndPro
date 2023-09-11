import { initForm } from "./formModule.js";

export function initWebsocket({ renderData }) {

    const ws = new WebSocket('ws://localhost:4000/chat');


    ws.onclose = function (event) {
        console.log('onclose', event)
    }
    
    ws.onerror = function (event) {
        console.log('onerror', event)
    }
    
    ws.onmessage = function (event) {
        console.log('onmessage', event)

        try {
            const data = JSON.parse(event.data)
            renderData(data, container)
        } catch (error) {
            throw new Error(error)
        }
    }
    
    ws.onopen = function (event) {4
        console.log('onopen', event)
    
        ws.send('New user')
    }

    return ws;
}