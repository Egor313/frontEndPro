export function initWebsocket() {

    const ws = new WebSocket('ws://localhost:4000/chat');
    const container = document.querySelector('.chatContainer')

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
            container.insertAdjacentHTML('beforeend', `<p>${data.username}: ${data.message}</p>`)
        } catch (error) {
            throw new Error('Error parsing JSON:' + error)
        }
    }
    
    ws.onopen = function (event) {
        console.log('onopen', event)
    
        ws.send('New user connected')
    }

    return ws;
}