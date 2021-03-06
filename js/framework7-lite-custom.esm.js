/**
 * Framework7 5.7.12
 * Full featured mobile HTML framework for building iOS & Android apps
 * https://framework7.io/
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 3, 2020
 */

import Template7 from 'template7';
import $ from 'dom7';

// F7 Class
import Framework7 from 'framework7/components/app/app-class';

// Import Helpers
import Request from 'framework7/utils/request';
import Utils from 'framework7/utils/utils';
import Support from 'framework7/utils/support';
import Device from 'framework7/utils/device';

// Core Modules
import DeviceModule from 'framework7/modules/device/device';
import SupportModule from 'framework7/modules/support/support';
import UtilsModule from 'framework7/modules/utils/utils';
import ResizeModule from 'framework7/modules/resize/resize';
import RequestModule from 'framework7/modules/request/request';
import TouchModule from 'framework7/modules/touch/touch';
import ClicksModule from 'framework7/modules/clicks/clicks';
import RouterModule from 'framework7/modules/router/router';
import HistoryModule from 'framework7/modules/history/history';
import ServiceWorkerModule from 'framework7/modules/service-worker/service-worker';

// Core Components
import Statusbar from 'framework7/components/statusbar/statusbar';
import View from 'framework7/components/view/view';
import Navbar from 'framework7/components/navbar/navbar';
import Toolbar from 'framework7/components/toolbar/toolbar';
import Subnavbar from 'framework7/components/subnavbar/subnavbar';
import TouchRipple from 'framework7/components/touch-ripple/touch-ripple';
import Modal from 'framework7/components/modal/modal';


if ("es" !== 'es') {
  if (typeof window !== 'undefined') {
    // Template7
    if (!window.Template7) window.Template7 = Template7;

    // Dom7
    if (!window.Dom7) window.Dom7 = $;
  }
}

// Install Core Modules & Components

Framework7.use([
  DeviceModule,
  //SupportModule,
  //UtilsModule,
  //ResizeModule,
  RequestModule,
  TouchModule,
  ClicksModule,
  RouterModule,
  HistoryModule,
  ServiceWorkerModule,
  Statusbar,
  View,
  Navbar,
  Toolbar,
  Subnavbar,
  TouchRipple,
  Modal,
  ]);

export { Template7, $ as Dom7, Request, Utils, Device, Support };
export default Framework7;
