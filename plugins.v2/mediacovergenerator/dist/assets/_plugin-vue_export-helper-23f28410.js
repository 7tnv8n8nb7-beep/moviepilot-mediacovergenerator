const PLUGIN_ID = 'MediaCoverGenerator';

function pluginPath(path = '') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/api/v1/plugin/${PLUGIN_ID}${normalized}`
}

async function pluginRequest(api, path, options = {}) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const apiPath = `plugin/${PLUGIN_ID}${normalized}`;
  const method = (options.method || 'GET').toUpperCase();
  const payload = options.body ?? options.payload ?? undefined;

  if (method === 'POST' && api?.post) {
    return api.post(apiPath, payload || {}, options)
  }
  if (method === 'GET' && api?.get) {
    return api.get(apiPath, options)
  }

  const response = await fetch(pluginPath(normalized), {
    method,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    body: method === 'POST' ? JSON.stringify(payload || {}) : undefined,
  });
  return response.json()
}

const STYLE_NAMES = {
  1: '序幕', 2: '巨幕', 3: '流光', 4: '预告',
  5: '拼贴', 6: '榜单', 7: '详情', 8: '轮播',
};

function styleName(index) {
  return STYLE_NAMES[index] || `风格 ${index}`
}

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

export { _export_sfc as _, pluginRequest as p, styleName as s };
