export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: '金融分析',
      icon: 'icon-graph',
      children: [{
        name: '公募产品',
        url: '/public_founds',
        icon: 'icon-star',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }, {
        name: '私募产品',
        url: '/private_founds',
        icon: 'icon-star',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }
      ]
    }
  ]
};
