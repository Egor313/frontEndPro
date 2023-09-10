import { initForm } from "./formModule.js";
import { initWebsocket } from "./websocketModule.js";

const ws = initWebsocket();
const form = document.querySelector('#chatForm');
initForm(ws, form)