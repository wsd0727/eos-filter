import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import eosForm from '@eosine/form';
import '@eosine/form/dist/style.css';

const app = createApp(App);


app.use(eosForm, {
    getData: request,
    getConfig: getPageConfig,
    getDict: getDicts,
    uploadUrl: '/eos-api/sys/file/upload',
    uploadHeaders: {
        Authorization: 'Bearer ' + getToken(),
    },
    uploadData: {
        BILLFROM: '0',
    },
    Plugin: {},
});



app.mount('#app');

