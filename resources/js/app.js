import './bootstrap';

import { createApp } from 'vue';
import router from './router';
import App from './layouts/app.vue';

const app = createApp(App);

app.use(router).mount('#app');
