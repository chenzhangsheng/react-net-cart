const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: '司傅驾到',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2018 Driver',
  logo: '/public/logo.svg',
  iconFontCSS: '/public/iconfont.css',
  iconFontJS: '/public/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    // userLogin: 'https://didi.nbuxinxiren.cn/app/getUser',
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    getuser: `${APIV1}/app`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
