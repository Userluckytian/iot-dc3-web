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

import request from '@/config/axios'
import { R } from '@/config/type/types'

export const driverAttributeByDriverIdApi = (id: string) =>
    request<R>({
        url: `api/v3/manager/driver_attribute/driver_id/${id}`,
        method: 'get',
    })

export const pointAttributeByDriverIdApi = (id: string) =>
    request<R>({
        url: `api/v3/manager/point_attribute/driver_id/${id}`,
        method: 'get',
    })
