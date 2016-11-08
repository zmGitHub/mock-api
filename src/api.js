const API = [{
  URL: '/api/user/:id(\\d+)', // 请注意如果要指明 id 为数字请添加(\\d+)
  GET: {
    'success|1': [true, false],
    result: {
      total: 10,
      'data|100': [{
        username: '@CNAME',
        'userId|+1': 1,
        clientName: '@CTITLE(2, 5)',
        'pointScore|1-99': 0,
        'freezePointScore|1-99': 0,
        registerDate: '@DATE(yyyy-MM-dd)',
        lastLogin: '@TIME(a HH:mm:ss)',
        'locked|1': [true, false],
      }],
    },
    error: '',
  },
  POST: {
    'success|1': [true, false],
    'result|+1': 1,
    error: '',
  },
}, {
  URL: '/api/user/list',
  GET: {
    'success|1': [true, false],
    result: {
      total: 10,
      'data|10': [{
        userIp: '@IP',
        'userId|+1': 1,
        given: '@TIME(a HH:mm:ss)',
        'already|1': [true, false],
      }],
    },
    error: '',
  },
}, {
  URL: '/api/keys',
  GET: {
    'success|1': [true, false],
    result: {
      total: 10,
      'data|10': [{
        ips: '@IP',
        'status|1': [true, false],
      }],
    },
    error: '',
  },
}];

export default API;
