import { 
    initForm,
    
 } from "./formModule.js";

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
            renderData(data)
        } catch (error) {
            throw new Error(error)
        }
    }
    
    ws.onopen = function (event) {
        console.log('onopen', event);

        ws.send(JSON.stringify('A new user has connected'));
    }

    return ws;
}