import { precacheAndRoute } from 'workbox-precaching';

const VERSION = '01';

// manifest import will be autogenerated by webpack
precacheAndRoute(self.__WB_MANIFEST || []);