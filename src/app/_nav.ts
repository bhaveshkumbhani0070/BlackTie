export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fa fa-home fa-lg ',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  
  //CLIENT MANAGEMENT
  {
    title: true,
    name: 'CLIENT MANAGEMENT'
  },
  {
      divider: true
  },
  {
    name: 'Flight Enquiries',
    url: '/client/flight',
    icon: 'fa fa-fighter-jet fa-lg',
    badge: {
      variant: 'info',
      text: localStorage.getItem('totalFlight')
    }
  },
  {
    name:'Package Bookings',
    url:'/client/package',
    icon:'fa fa-dollar fa-lg ',
    badge: {
      variant: 'info',
      text: localStorage.getItem('totalPackage')
    }
  },
  {
    name:'Flying Hours',
    url:'/client/manage',
    icon:'fa fa-clock-o fa-lg ',
    // badge: {
    //   variant: 'info',
    //   text: localStorage.getItem('totalManagement')
    // }
  },
  {
    name:'Send Notifications',
    url:'/client/notification',
    icon:'fa fa-bell fa-lg ',
    badge: {
      variant: 'info',
      text: localStorage.getItem('totalNotification')
    }
  },
  {
    name:'Add New Account',
    url:'/client/account',
    icon:'fa fa-user-plus fa-lg'
  },
  {
    name:'Account Requests',
    url:'/client/accountRequest',
    icon:'fa fa-address-book fa-lg'
  },
  {
    name:'Flight Requests',
    url:'/client/manageRequest',
    icon:'fa fa-plus-circle fa-lg',
    // children: [
    //   {
    //     name: 'Requested Flights',
    //     url: '/buttons/buttons',
    //     icon: 'icon-cursor'
    //   },
    //   {
    //     name: 'Upcoming Flights',
    //     url: '/buttons/dropdowns',
    //     icon: 'icon-cursor'
    //   },
    //   {
    //     name: 'Completed Flights',
    //     url: '/buttons/social-buttons',
    //     icon: 'icon-cursor'
    //   }
    // ]
  },
  {
    name:'New Enquiries',
    url:'/client/newEnquiries',
    icon:'fa fa-question-circle fa-lg'
  },
  
  
  //APP MANAGEMENT
  {
    title: true,
    name: 'APP MANAGEMENT'
  },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  {
    name: 'Airplane Menu',
    url: '/app/airplane',
    icon: 'fa fa-plane fa-lg '
  },
  {
    name: 'Slider Banners',
    url: '/app/slider',
    icon: 'fa fa-file-image-o fa-lg '
  },
  {
    name: 'Our Packages',
    url: '/app/package',
    icon: 'fa fa-file-image-o fa-lg '
  },
  {
    name: 'How It Works',
    url: '/app/works',
    icon: 'fa fa-question-circle fa-lg '
  },
  {
    name: 'Flying Tips',
    url: '/app/tips',
    icon: 'fa fa-bars fa-lg'
  },
  {
    name: 'Manage Promotions',
    url: '/app/promotions',
    icon: 'fa fa-tag fa-lg'
  },
  // {
  //   name: 'Login',
  //   url: '/pages/login',
  //   icon: 'icon-star'
  // },

  // {
  //   name: 'Base',
  //   url: '/client',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/client/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/client/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/client/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/client/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/client/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/client/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/client/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/client/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/client/tables',
  //       icon: 'icon-puzzle'
  //     },
          // {
          //   name: 'Tabs',
          //   url: '/client/tabs',
          //   icon: 'icon-puzzle'
          // },
          // {
          //   name: 'Tooltips',
          //   url: '/client/tooltips',
          //   icon: 'icon-puzzle'
          // },
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Social Buttons',
  //       url: '/buttons/social-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/pages/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/pages/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/pages/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/pages/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success'
  // },
  {
    name: 'Logout',
    url: '/pages/login',
    icon: 'fa fa-sign-out fa-lg',
    // variant: 'danger'
  }
  // {
  //         name: 'Forms',
  //         url: '/client/forms',
  //         icon: 'icon-puzzle'
  //       }
];
