const PORT          = ':8081',
      PROTOCOL      = 'http://',
      HOST          = 'localhost',
      API           = '/api';

const Config = {
  Site: `${PROTOCOL}${HOST}${PORT}`
  Api: {
    __default: `${Config.Site}${API}`,
    Chat: `${Config.Api.__default}/conversations`
  }
}

export default Config;