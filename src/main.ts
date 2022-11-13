/*
 * Copyright 2022 Pnoker All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createApp } from 'vue'

import axios from '@/config/axios'
import vueAxios from 'vue-axios'

import router from '@/config/router'
import store from '@/config/store'

import App from '@/App.vue'

import plugins from '@/config/plugins/index'

// config app
const app = createApp(App)
app.use(vueAxios, axios)
app.use(router)
app.use(store)
plugins(app)
app.mount('#app')

export default app
