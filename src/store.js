import { mainReducer } from './reducer/mainReducer'
const { createStore } = require("redux");

const store = createStore(mainReducer)

window.store = store

export default store