/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Wid } from '..';
import { exportModule } from '../exportModule';

/** @whatsapp 57547
 * @whatsapp 69722 >= 2.2204.13
 */
export declare function sendQueryExists(contact: Wid): Promise<{
  wid: Wid;
  biz: boolean;
  bizInfo?: {
    verifiedName?: {
      isApi: boolean;
      level: string;
      name: string;
      privacyMode: any;
      serial: string;
    };
  };
  disappearingMode?: {
    duration: number;
    settingTimestamp: number;
  };
}>;

exportModule(
  exports,
  {
    sendQueryExists: [
      'queryExists', // @whatsapp >= 2.2208.7
    ],
  },
  (m) => m.queryExists && m.queryPhoneExists // @whatsapp >= 2.2211.2
);
