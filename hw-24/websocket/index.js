import { initForm, renderData } from "./formModule.js";
import { initWebsocket } from "./websocketModule.js";


const ws = initWebsocket({ renderData});
initForm({ onSubmit: (data) => ws.send(data) })