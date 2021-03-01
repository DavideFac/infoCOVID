import HomePage from '../pages/home.svelte';
import Faq1Page from '../pages/faq1.svelte';
import Faq2Page from '../pages/faq2.svelte';
import Faq3Page from '../pages/faq3.svelte';
import Faq4Page from '../pages/faq4.svelte';
import Faq5Page from '../pages/faq5.svelte';
import Faq6Page from '../pages/faq6.svelte';
import Faq7Page from '../pages/faq7.svelte';
var routes = [

  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/faq1/',
    component: Faq1Page,
  },
  {
    path: '/faq2/',
    component: Faq2Page,
  },
  {
    path: '/faq3/',
    component: Faq3Page,
  },
  {
    path: '/faq4/',
    component: Faq4Page,
  },
  {
    path: '/faq5/',
    component: Faq5Page,
  },
  {
    path: '/faq6/',
    component: Faq6Page,
  },
  {
    path: '/faq7/',
    component: Faq7Page,
  },
];

export default routes;