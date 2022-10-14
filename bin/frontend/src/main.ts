import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as dotenv from "dotenv";
const app = createApp(App);

try{
  app.use(router);
  app.mount("#app");
} catch(error){
  console.log(error);
}


