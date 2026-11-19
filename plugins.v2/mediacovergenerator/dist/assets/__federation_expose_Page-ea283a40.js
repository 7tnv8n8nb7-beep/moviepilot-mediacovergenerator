import { importShared } from './__federation_fn_import-054b33c3.js';
import { _ as _export_sfc, s as styleName, p as pluginRequest } from './_plugin-vue_export-helper-23f28410.js';

const Page_vue_vue_type_style_index_0_scoped_6fd5f9c5_lang = '';

const {resolveComponent:_resolveComponent,createVNode:_createVNode,createElementVNode:_createElementVNode,toDisplayString:_toDisplayString,createTextVNode:_createTextVNode,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,withCtx:_withCtx,createBlock:_createBlock,createCommentVNode:_createCommentVNode,unref:_unref,normalizeClass:_normalizeClass} = await importShared('vue');


const _hoisted_1 = { class: "mcg-page" };
const _hoisted_2 = { class: "mcg-hero" };
const _hoisted_3 = { class: "mcg-hero-title" };
const _hoisted_4 = { class: "mcg-hero-stat" };
const _hoisted_5 = { class: "mcg-stat-num" };
const _hoisted_6 = {
  key: 0,
  class: "mcg-last"
};
const _hoisted_7 = { class: "mcg-last-msg" };
const _hoisted_8 = { class: "mcg-style-grid" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "mcg-style-no" };
const _hoisted_11 = { class: "mcg-style-name" };
const _hoisted_12 = {
  key: 0,
  class: "mcg-history"
};
const _hoisted_13 = ["title"];
const _hoisted_14 = ["src"];
const _hoisted_15 = { class: "mcg-history-label" };
const _hoisted_16 = { class: "mcg-history-time" };

const {computed,onMounted,onBeforeUnmount,reactive,ref} = await importShared('vue');


const _sfc_main = {
  __name: 'Page',
  props: {
  api: { type: Object, default: () => ({}) },
  initialConfig: { type: Object, default: () => ({}) },
},
  setup(__props) {

const props = __props;

const state = reactive({ libraries: [], warnings: [], history: [], style_index: 1, style_count: 8, task: {} });
const busy = reactive({ state: false, generate: false });
const toast = reactive({ show: false, text: '', color: 'success' });
let timer = null;

const isRunning = computed(() => !!(state.task && state.task.running));
const progress = computed(() => {
  const t = state.task || {};
  return t.total ? Math.round((t.done || 0) / t.total * 100) : 0
});
const currentStyleLabel = computed(() => `${state.style_variant === 'animated' ? '动态' : '静态'} · ${styleName(state.style_index)}`);

function notify(text, color = 'success') {
  toast.text = text;
  toast.color = color;
  toast.show = true;
}

function coverUrl(file) {
  return `/api/v1/plugin/MediaCoverGenerator/saved_cover_image?file=${encodeURIComponent(file || '')}`
}

async function loadState() {
  busy.state = true;
  try {
    const res = await pluginRequest(props.api, '/state', { method: 'GET' });
    if (res?.success && res?.data) Object.assign(state, res.data);
    else if (res?.data) Object.assign(state, res.data);
  } catch (e) {
    notify('加载状态失败：' + (e?.message || e), 'error');
  } finally {
    busy.state = false;
  }
}

async function generate(library) {
  busy.generate = true;
  try {
    const query = library ? `?library=${encodeURIComponent(library)}` : '';
    const res = await pluginRequest(props.api, `/generate_now${query}`, { method: 'POST' });
    if (res?.success === false) notify(res.message || '启动失败', 'error');
    else {
      notify('封面生成任务已启动', 'success');
      state.task = { running: true, total: 0, done: 0, current: '' };
    }
  } catch (e) {
    notify('启动失败：' + (e?.message || e), 'error');
  } finally {
    busy.generate = false;
  }
}

async function stopTask() {
  try {
    const res = await pluginRequest(props.api, '/stop_task', { method: 'POST', payload: {} });
    notify(res?.message || '已发送停止请求', 'info');
    setTimeout(loadState, 800);
  } catch (e) {
    notify('停止失败：' + (e?.message || e), 'error');
  }
}

async function selectStyle(n) {
  try {
    const res = await pluginRequest(props.api, `/select_style?index=${n}`, { method: 'POST' });
    if (res?.success === false) notify(res.message || '设置失败', 'error');
    else {
      notify(`已选择 ${styleName(n)}`, 'success');
      state.style_index = n;
    }
  } catch (e) {
    notify('设置失败：' + (e?.message || e), 'error');
  }
}

onMounted(() => {
  loadState();
  timer = setInterval(loadState, 10000);
});
onBeforeUnmount(() => { if (timer) clearInterval(timer); });

return (_ctx, _cache) => {
  const _component_v_icon = _resolveComponent("v-icon");
  const _component_v_alert = _resolveComponent("v-alert");
  const _component_v_btn = _resolveComponent("v-btn");
  const _component_v_spacer = _resolveComponent("v-spacer");
  const _component_v_card_text = _resolveComponent("v-card-text");
  const _component_v_progress_linear = _resolveComponent("v-progress-linear");
  const _component_v_card = _resolveComponent("v-card");
  const _component_v_chip = _resolveComponent("v-chip");
  const _component_v_card_title = _resolveComponent("v-card-title");
  const _component_v_list_item_title = _resolveComponent("v-list-item-title");
  const _component_v_list_item_subtitle = _resolveComponent("v-list-item-subtitle");
  const _component_v_list_item = _resolveComponent("v-list-item");
  const _component_v_list = _resolveComponent("v-list");
  const _component_v_snackbar = _resolveComponent("v-snackbar");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode(_component_v_icon, {
          icon: "mdi-animation-play",
          size: "34"
        }),
        _cache[2] || (_cache[2] = _createElementVNode("div", null, [
          _createElementVNode("div", { class: "mcg-h1" }, "动态封面工坊"),
          _createElementVNode("div", { class: "mcg-sub" }, "让媒体库封面动起来 · 8 款动态风格")
        ], -1))
      ]),
      _createElementVNode("div", _hoisted_4, [
        _createElementVNode("div", _hoisted_5, [
          _createTextVNode(_toDisplayString(state.library_active || 0), 1),
          _createElementVNode("span", null, "/" + _toDisplayString((state.libraries || []).length), 1)
        ]),
        _cache[3] || (_cache[3] = _createElementVNode("div", { class: "mcg-stat-label" }, "已选媒体库", -1))
      ])
    ]),
    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(state.warnings || [], (w, i) => {
      return (_openBlock(), _createBlock(_component_v_alert, {
        key: 'w' + i,
        type: "warning",
        density: "compact",
        class: "mb-3",
        variant: "tonal"
      }, {
        default: _withCtx(() => [
          _createTextVNode(_toDisplayString(w), 1)
        ]),
        _: 2
      }, 1024))
    }), 128)),
    _createVNode(_component_v_card, {
      class: "mcg-card mb-4",
      variant: "tonal"
    }, {
      default: _withCtx(() => [
        _createVNode(_component_v_card_text, { class: "d-flex flex-wrap align-center ga-3 py-3" }, {
          default: _withCtx(() => [
            _createVNode(_component_v_btn, {
              color: "primary",
              "prepend-icon": "mdi-play",
              loading: busy.generate,
              disabled: isRunning.value,
              onClick: _cache[0] || (_cache[0] = $event => (generate('')))
            }, {
              default: _withCtx(() => [...(_cache[4] || (_cache[4] = [
                _createTextVNode(" 生成全部封面 ", -1)
              ]))]),
              _: 1
            }, 8, ["loading", "disabled"]),
            _createVNode(_component_v_btn, {
              color: "error",
              variant: "tonal",
              "prepend-icon": "mdi-stop",
              disabled: !isRunning.value,
              onClick: stopTask
            }, {
              default: _withCtx(() => [...(_cache[5] || (_cache[5] = [
                _createTextVNode(" 停止任务 ", -1)
              ]))]),
              _: 1
            }, 8, ["disabled"]),
            _createVNode(_component_v_btn, {
              variant: "text",
              "prepend-icon": "mdi-refresh",
              loading: busy.state,
              onClick: loadState
            }, {
              default: _withCtx(() => [...(_cache[6] || (_cache[6] = [
                _createTextVNode(" 刷新状态 ", -1)
              ]))]),
              _: 1
            }, 8, ["loading"]),
            _createVNode(_component_v_spacer),
            (state.last_run_text)
              ? (_openBlock(), _createElementBlock("div", _hoisted_6, [
                  _createTextVNode(" 上次运行：" + _toDisplayString(state.last_run_text) + " ", 1),
                  _createElementVNode("div", _hoisted_7, _toDisplayString(state.last_result), 1)
                ]))
              : _createCommentVNode("", true)
          ]),
          _: 1
        }),
        (isRunning.value)
          ? (_openBlock(), _createBlock(_component_v_progress_linear, {
              key: 0,
              "model-value": progress.value,
              color: "primary",
              height: "6",
              indeterminate: ""
            }, null, 8, ["model-value"]))
          : _createCommentVNode("", true)
      ]),
      _: 1
    }),
    _createVNode(_component_v_card, {
      class: "mcg-card mb-4",
      variant: "tonal"
    }, {
      default: _withCtx(() => [
        _createVNode(_component_v_card_title, { class: "mcg-section-title" }, {
          default: _withCtx(() => [
            _createVNode(_component_v_icon, {
              icon: "mdi-palette",
              start: ""
            }),
            _cache[7] || (_cache[7] = _createTextVNode(" 封面风格 ", -1)),
            _createVNode(_component_v_chip, {
              size: "small",
              class: "ml-2",
              color: "primary",
              variant: "tonal"
            }, {
              default: _withCtx(() => [
                _createTextVNode(_toDisplayString(currentStyleLabel.value), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _createVNode(_component_v_card_text, null, {
          default: _withCtx(() => [
            _createElementVNode("div", _hoisted_8, [
              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList((state.style_count || 8), (n) => {
                return (_openBlock(), _createElementBlock("button", {
                  key: n,
                  class: _normalizeClass(["mcg-style-item", { active: state.style_index === n }]),
                  onClick: $event => (selectStyle(n))
                }, [
                  _createElementVNode("div", _hoisted_10, _toDisplayString(n), 1),
                  _createElementVNode("div", _hoisted_11, _toDisplayString(_unref(styleName)(n)), 1)
                ], 10, _hoisted_9))
              }), 128))
            ]),
            _cache[8] || (_cache[8] = _createElementVNode("div", { class: "mcg-style-hint" }, "点击风格即可设为默认；生成新封面后生效。", -1))
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    _createVNode(_component_v_card, {
      class: "mcg-card mb-4",
      variant: "tonal"
    }, {
      default: _withCtx(() => [
        _createVNode(_component_v_card_title, { class: "mcg-section-title" }, {
          default: _withCtx(() => [
            _createVNode(_component_v_icon, {
              icon: "mdi-folder-multiple",
              start: ""
            }),
            _cache[9] || (_cache[9] = _createTextVNode(" 媒体库", -1))
          ]),
          _: 1
        }),
        ((state.libraries || []).length)
          ? (_openBlock(), _createBlock(_component_v_list, {
              key: 0,
              lines: "two",
              class: "mcg-list"
            }, {
              default: _withCtx(() => [
                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(state.libraries, (lib) => {
                  return (_openBlock(), _createBlock(_component_v_list_item, {
                    key: lib.key
                  }, {
                    prepend: _withCtx(() => [
                      _createVNode(_component_v_icon, {
                        icon: lib.active ? 'mdi-check-circle' : 'mdi-circle-outline',
                        color: lib.active ? 'success' : ''
                      }, null, 8, ["icon", "color"])
                    ]),
                    append: _withCtx(() => [
                      _createVNode(_component_v_btn, {
                        size: "small",
                        variant: "tonal",
                        color: "primary",
                        disabled: isRunning.value,
                        onClick: $event => (generate(lib.key))
                      }, {
                        default: _withCtx(() => [...(_cache[10] || (_cache[10] = [
                          _createTextVNode(" 生成 ", -1)
                        ]))]),
                        _: 1
                      }, 8, ["disabled", "onClick"])
                    ]),
                    default: _withCtx(() => [
                      _createVNode(_component_v_list_item_title, null, {
                        default: _withCtx(() => [
                          _createTextVNode(_toDisplayString(lib.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _createVNode(_component_v_list_item_subtitle, null, {
                        default: _withCtx(() => [
                          _createTextVNode(_toDisplayString(lib.server) + " · " + _toDisplayString(lib.key), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024))
                }), 128))
              ]),
              _: 1
            }))
          : (_openBlock(), _createBlock(_component_v_card_text, {
              key: 1,
              class: "text-medium-emphasis"
            }, {
              default: _withCtx(() => [...(_cache[11] || (_cache[11] = [
                _createTextVNode(" 未读取到媒体库，请先在插件设置中选择媒体服务器并保存。 ", -1)
              ]))]),
              _: 1
            }))
      ]),
      _: 1
    }),
    _createVNode(_component_v_card, {
      class: "mcg-card",
      variant: "tonal"
    }, {
      default: _withCtx(() => [
        _createVNode(_component_v_card_title, { class: "mcg-section-title" }, {
          default: _withCtx(() => [
            _createVNode(_component_v_icon, {
              icon: "mdi-history",
              start: ""
            }),
            _cache[12] || (_cache[12] = _createTextVNode(" 最近封面", -1))
          ]),
          _: 1
        }),
        ((state.history || []).length)
          ? (_openBlock(), _createElementBlock("div", _hoisted_12, [
              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(state.history.slice(0, 12), (h) => {
                return (_openBlock(), _createElementBlock("div", {
                  key: h.name,
                  class: "mcg-history-item",
                  title: h.name
                }, [
                  _createElementVNode("img", {
                    src: coverUrl(h.file),
                    loading: "lazy"
                  }, null, 8, _hoisted_14),
                  _createElementVNode("div", _hoisted_15, _toDisplayString(h.library || '封面'), 1),
                  _createElementVNode("div", _hoisted_16, _toDisplayString(h.mtime), 1)
                ], 8, _hoisted_13))
              }), 128))
            ]))
          : (_openBlock(), _createBlock(_component_v_card_text, {
              key: 1,
              class: "text-medium-emphasis"
            }, {
              default: _withCtx(() => [...(_cache[13] || (_cache[13] = [
                _createTextVNode("还没有生成过封面。", -1)
              ]))]),
              _: 1
            }))
      ]),
      _: 1
    }),
    _createVNode(_component_v_snackbar, {
      modelValue: toast.show,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((toast.show) = $event)),
      color: toast.color,
      timeout: "3000",
      location: "top"
    }, {
      default: _withCtx(() => [
        _createTextVNode(_toDisplayString(toast.text), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "color"])
  ]))
}
}

};
const Page = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-6fd5f9c5"]]);

export { Page as default };
