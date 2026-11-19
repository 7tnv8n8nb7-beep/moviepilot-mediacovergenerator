import { importShared } from './__federation_fn_import-054b33c3.js';
import { s as styleLabel, P as PAGE_TABS, S as STYLES, p as previewStill, a as previewMotion, b as pluginRequest } from './official-898de614.js';

const {unref:_unref,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,normalizeStyle:_normalizeStyle,createCommentVNode:_createCommentVNode,createElementVNode:_createElementVNode,resolveComponent:_resolveComponent,createVNode:_createVNode,createTextVNode:_createTextVNode,toDisplayString:_toDisplayString,normalizeClass:_normalizeClass,withCtx:_withCtx} = await importShared('vue');


const _hoisted_1 = { class: "mcg" };
const _hoisted_2 = ["id", "checked", "onChange"];
const _hoisted_3 = { class: "mcg-hero" };
const _hoisted_4 = { class: "mcg-hero-body" };
const _hoisted_5 = { class: "mcg-hero-actions" };
const _hoisted_6 = { class: "mcg-stats" };
const _hoisted_7 = { class: "mcg-stat-label" };
const _hoisted_8 = ["title"];
const _hoisted_9 = {
  key: 1,
  class: "mcg-progress"
};
const _hoisted_10 = {
  key: 2,
  class: "mcg-progress-note"
};
const _hoisted_11 = {
  key: 3,
  class: "mcg-progress-note"
};
const _hoisted_12 = { class: "mcg-tabs" };
const _hoisted_13 = ["for", "onClick"];
const _hoisted_14 = {
  key: 0,
  class: "mcg-notice"
};
const _hoisted_15 = { class: "mcg-heading" };
const _hoisted_16 = { class: "mcg-heading-note" };
const _hoisted_17 = { class: "mcg-seg" };
const _hoisted_18 = {
  key: 1,
  class: "mcg-targets"
};
const _hoisted_19 = ["title", "onClick"];
const _hoisted_20 = {
  key: 0,
  class: "mcg-target-dot"
};
const _hoisted_21 = {
  key: 2,
  class: "mcg-target-bar mcg-local-bar"
};
const _hoisted_22 = {
  key: 0,
  class: "mcg-target-actions"
};
const _hoisted_23 = {
  key: 3,
  class: "mcg-target-bar"
};
const _hoisted_24 = { class: "mcg-gallery" };
const _hoisted_25 = ["onClick"];
const _hoisted_26 = { class: "mcg-style-media" };
const _hoisted_27 = ["src", "alt"];
const _hoisted_28 = { class: "mcg-style-tick" };
const _hoisted_29 = { class: "mcg-style-meta" };
const _hoisted_30 = { class: "mcg-style-name" };
const _hoisted_31 = { class: "mcg-style-desc" };
const _hoisted_32 = {
  key: 0,
  class: "mcg-empty"
};
const _hoisted_33 = {
  key: 1,
  class: "mcg-libs"
};
const _hoisted_34 = ["src", "alt"];
const _hoisted_35 = {
  key: 1,
  class: "mcg-lib-art"
};
const _hoisted_36 = { class: "mcg-lib-info" };
const _hoisted_37 = ["title"];
const _hoisted_38 = ["title"];
const _hoisted_39 = { class: "mcg-lib-chips" };
const _hoisted_40 = {
  key: 1,
  class: "mcg-chip"
};
const _hoisted_41 = { class: "mcg-lib-actions" };
const _hoisted_42 = ["disabled", "onClick"];
const _hoisted_43 = ["onClick"];
const _hoisted_44 = { class: "mcg-heading" };
const _hoisted_45 = { class: "mcg-heading-note" };
const _hoisted_46 = {
  key: 0,
  class: "mcg-empty"
};
const _hoisted_47 = {
  key: 1,
  class: "mcg-history"
};
const _hoisted_48 = ["src", "alt"];
const _hoisted_49 = { class: "mcg-cover-meta" };
const _hoisted_50 = { class: "mcg-cover-text" };
const _hoisted_51 = ["title"];
const _hoisted_52 = { class: "mcg-cover-sub" };
const _hoisted_53 = ["onClick"];
const _hoisted_54 = {
  key: 2,
  class: "mcg-more"
};
const _hoisted_55 = { class: "mcg-grid-2" };
const _hoisted_56 = { class: "mcg-box" };
const _hoisted_57 = {
  key: 0,
  class: "mcg-check-note"
};
const _hoisted_58 = { class: "mcg-box" };
const _hoisted_59 = { class: "mcg-box-title" };
const _hoisted_60 = { class: "mcg-chip" };
const _hoisted_61 = {
  key: 0,
  class: "mcg-confirm"
};
const _hoisted_62 = {
  class: "mcg-box",
  style: {"margin-top":"14px"}
};
const _hoisted_63 = { class: "mcg-box-title" };
const _hoisted_64 = { class: "mcg-chip" };
const _hoisted_65 = {
  key: 0,
  class: "mcg-confirm"
};

const {computed,onMounted,onBeforeUnmount,reactive,ref} = await importShared('vue');


const _sfc_main = {
  __name: 'Page',
  props: { api: { type: Object, default: () => ({}) } },
  setup(__props) {

const props = __props;

const state = reactive({
  enabled: true, warnings: [], style_index: 1, style_variant: 'animated', style_target: '',
  style_count: 8, task: {}, libraries: [], library_active: 0, last_run_text: '', last_result: '',
  history: [], history_total: 0, history_limit: 10, checks: [], cache_images: '', cache_fonts: '',
  hero_image: '', local_preview: null,
});
const pageTab = ref('style');
const styleTarget = ref('');
const cleanArmed = ref('');
const toast = reactive({ show: false, text: '', color: 'success' });
let timer = null;

const isRunning = computed(() => !!(state.task && state.task.running));
const progressWidth = computed(() => {
  const t = state.task || {}, total = Math.max(1, Number(t.total) || 1), done = Math.min(total, Number(t.done) || 0);
  return Math.max(Math.round(done * 100 / total), 4) + '%'
});
const progressNote = computed(() => {
  const t = state.task || {};
  const note = t.current ? `正在处理：${t.current}` : '正在准备…';
  return `${note}（生成在后台进行，可随时关闭此窗口）`
});
const targetLibrary = computed(() => state.libraries.find(l => l.key === styleTarget.value) || null);
const currentStyleIndex = computed(() => targetLibrary.value && targetLibrary.value.own_style ? targetLibrary.value.own_index : state.style_index);
const styleVariant = computed(() => targetLibrary.value && targetLibrary.value.own_style ? targetLibrary.value.own_variant : state.style_variant);
const targetOwnStyle = computed(() => !!(targetLibrary.value && targetLibrary.value.own_style));
const targetOwnLabel = computed(() => targetLibrary.value ? styleLabel(targetLibrary.value.own_index, targetLibrary.value.own_variant) : '');
const previewSource = computed(() => targetLibrary.value || state.libraries.find(l => l.active) || null);
const heroStats = computed(() => {
  const ownStyles = state.libraries.filter(l => l.own_style).length;
  const status = isRunning.value ? `生成中 ${state.task.done || 0}/${state.task.total || 1}` : (!state.enabled ? '未启用' : '空闲');
  return [
    { label: '状态', value: status },
    { label: '默认风格', value: styleLabel(state.style_index, state.style_variant) },
    { label: '媒体库', value: state.libraries.length ? `${state.library_active} / ${state.libraries.length}${ownStyles ? ` · ${ownStyles} 个单独设置` : ''}` : '—' },
    { label: '上次运行', value: state.last_run_text || '尚未运行' },
  ]
});
const historyItems = computed(() => (state.history || []).slice(0, state.history_total || 50));

function notify(text, color = 'success') { toast.text = text; toast.color = color; toast.show = true; }
function libNote(lib) {
  const s = lib.status;
  if (s && !s.ok && s.message) return s.message
  if (s) return `${s.time || ''} · ${s.style || ''}`
  return `${lib.server || ''} · 尚未生成`
}
function ownStyleLabel(lib) { return styleLabel(lib.own_index, lib.own_variant) }
function localStill(i) { const s = state.local_preview && state.local_preview.styles && state.local_preview.styles[i]; return s ? s.still || '' : '' }
function localGif(i) { const s = state.local_preview && state.local_preview.styles && state.local_preview.styles[i]; return s ? s.gif || '' : '' }
function coverUrl(file) { return `/api/v1/plugin/MediaCoverGenerator/saved_cover_image?file=${encodeURIComponent(file || '')}` }

async function loadState() {
  try {
    const res = await pluginRequest(props.api, '/state', { method: 'GET' });
    const d = res?.data ?? res;
    if (d && typeof d === 'object') {
      Object.assign(state, d);
      if (d.style_target) styleTarget.value = d.style_target;
    }
  } catch (e) { notify('加载状态失败：' + (e?.message || e), 'error'); }
}
async function call(path, payload = {}) {
  try {
    const res = await pluginRequest(props.api, '/' + path, { method: 'POST', payload });
    if (res?.success === false) notify(res.message || '操作失败', 'error');
    else if (res?.message) notify(res.message, 'success');
    await loadState();
    return res
  } catch (e) { notify('操作失败：' + (e?.message || e), 'error'); }
}
async function generate(library) {
  const q = library ? `?library=${encodeURIComponent(library)}` : '';
  const res = await call('generate_now' + q);
  if (res?.success !== false) state.task = { running: true, total: 0, done: 0, current: '' };
}
async function selectStyle(i) {
  const q = styleTarget.value ? `&library=${encodeURIComponent(styleTarget.value)}` : '';
  await call(`select_style?index=${i}${q}`);
}
async function setVariant(v) {
  const q = styleTarget.value ? `&library=${encodeURIComponent(styleTarget.value)}` : '';
  await call(`set_style_variant?variant=${v}${q}`);
}
async function genPreview() {
  if (!previewSource.value) return
  await call(`generate_preview?library=${encodeURIComponent(previewSource.value.key)}`);
}
async function clearLibraryStyle() { await call(`clear_library_style?library=${encodeURIComponent(styleTarget.value)}`); }
async function deleteCover(item) { await call(`delete_saved_cover?file=${encodeURIComponent(item.file || item.name)}`); }
async function doClean(what) { await call(`clean_${what}`); cleanArmed.value = ''; }
function onTab(key) { if (key === 'history') call('refresh?tab=history'); }

onMounted(() => { loadState(); timer = setInterval(loadState, 8000); });
onBeforeUnmount(() => { if (timer) clearInterval(timer); });

return (_ctx, _cache) => {
  const _component_v_icon = _resolveComponent("v-icon");
  const _component_v_snackbar = _resolveComponent("v-snackbar");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(PAGE_TABS), (t) => {
      return (_openBlock(), _createElementBlock("input", {
        type: "radio",
        class: "mcg-radio",
        name: "mcg-tab",
        key: t.key,
        id: 'mcg-tab-' + t.key,
        checked: pageTab.value === t.key,
        onChange: $event => (pageTab.value = t.key)
      }, null, 40, _hoisted_2))
    }), 128)),
    _createElementVNode("div", _hoisted_3, [
      (state.hero_image)
        ? (_openBlock(), _createElementBlock("div", {
            key: 0,
            class: "mcg-hero-art",
            style: _normalizeStyle({ backgroundImage: 'url(' + state.hero_image + ')' })
          }, null, 4))
        : _createCommentVNode("", true),
      _cache[21] || (_cache[21] = _createElementVNode("div", { class: "mcg-hero-shade" }, null, -1)),
      _createElementVNode("div", _hoisted_4, [
        _cache[20] || (_cache[20] = _createElementVNode("div", null, [
          _createElementVNode("div", { class: "mcg-eyebrow" }, "ANIMATED COVER STUDIO"),
          _createElementVNode("h2", null, "动态封面工坊"),
          _createElementVNode("div", { class: "mcg-hero-sub" }, "让媒体库封面动起来。每款风格都能生成 GIF 动态封面，详细参数在右下角的齿轮设置里。")
        ], -1)),
        _createElementVNode("div", _hoisted_5, [
          (isRunning.value)
            ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                _createElementVNode("button", {
                  class: "v-btn mcg-btn mcg-btn-gold",
                  onClick: _cache[0] || (_cache[0] = $event => (call('refresh')))
                }, [
                  _createVNode(_component_v_icon, {
                    icon: "mdi-refresh",
                    start: ""
                  }),
                  _cache[16] || (_cache[16] = _createTextVNode("刷新进度", -1))
                ]),
                _createElementVNode("button", {
                  class: "v-btn mcg-btn mcg-btn-glass",
                  onClick: _cache[1] || (_cache[1] = $event => (call('stop_task')))
                }, [
                  _createVNode(_component_v_icon, {
                    icon: "mdi-stop-circle-outline",
                    start: ""
                  }),
                  _cache[17] || (_cache[17] = _createTextVNode("停止", -1))
                ])
              ], 64))
            : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                _createElementVNode("button", {
                  class: "v-btn mcg-btn mcg-btn-gold",
                  onClick: _cache[2] || (_cache[2] = $event => (generate('')))
                }, [
                  _createVNode(_component_v_icon, {
                    icon: "mdi-play",
                    start: ""
                  }),
                  _cache[18] || (_cache[18] = _createTextVNode("生成全部封面", -1))
                ]),
                _createElementVNode("button", {
                  class: "v-btn mcg-btn mcg-btn-glass",
                  onClick: _cache[3] || (_cache[3] = $event => (call('refresh')))
                }, [
                  _createVNode(_component_v_icon, {
                    icon: "mdi-refresh",
                    start: ""
                  }),
                  _cache[19] || (_cache[19] = _createTextVNode("刷新", -1))
                ])
              ], 64))
        ])
      ]),
      _createElementVNode("div", _hoisted_6, [
        (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(heroStats.value, (s) => {
          return (_openBlock(), _createElementBlock("div", {
            class: "mcg-stat",
            key: s.label
          }, [
            _createElementVNode("div", _hoisted_7, _toDisplayString(s.label), 1),
            _createElementVNode("div", {
              class: "mcg-stat-value",
              title: s.value
            }, _toDisplayString(s.value), 9, _hoisted_8)
          ]))
        }), 128))
      ]),
      (isRunning.value)
        ? (_openBlock(), _createElementBlock("div", _hoisted_9, [
            _createElementVNode("div", {
              class: "mcg-progress-bar",
              style: _normalizeStyle({ width: progressWidth.value })
            }, null, 4)
          ]))
        : _createCommentVNode("", true),
      (isRunning.value)
        ? (_openBlock(), _createElementBlock("div", _hoisted_10, _toDisplayString(progressNote.value), 1))
        : (state.last_result)
          ? (_openBlock(), _createElementBlock("div", _hoisted_11, _toDisplayString(state.last_result), 1))
          : _createCommentVNode("", true)
    ]),
    _createElementVNode("div", _hoisted_12, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(PAGE_TABS), (t) => {
        return (_openBlock(), _createElementBlock("label", {
          class: "mcg-tab",
          key: t.key,
          for: 'mcg-tab-' + t.key,
          onClick: $event => (onTab(t.key))
        }, [
          _createVNode(_component_v_icon, {
            icon: t.icon,
            size: "16"
          }, null, 8, ["icon"]),
          _createElementVNode("span", null, _toDisplayString(t.name), 1)
        ], 8, _hoisted_13))
      }), 128))
    ]),
    _createElementVNode("div", {
      class: _normalizeClass(["mcg-panel mcg-panel-style", { 'mcg-when-on': pageTab.value === 'style' }])
    }, [
      (state.warnings && state.warnings.length)
        ? (_openBlock(), _createElementBlock("div", _hoisted_14, [
            _createVNode(_component_v_icon, { icon: "mdi-information-outline" }),
            _createElementVNode("div", null, _toDisplayString(state.warnings.join('；')), 1)
          ]))
        : _createCommentVNode("", true),
      _createElementVNode("div", _hoisted_15, [
        _createElementVNode("div", null, [
          _cache[22] || (_cache[22] = _createElementVNode("div", { class: "mcg-heading-title" }, "封面风格", -1)),
          _createElementVNode("div", _hoisted_16, "点击卡片即可切换，下次生成时生效。" + _toDisplayString(state.local_preview ? '' : '预览图为示例素材。'), 1)
        ]),
        _createElementVNode("div", _hoisted_17, [
          _createElementVNode("span", {
            class: _normalizeClass(["mcg-seg-item", { 'mcg-seg-on': styleVariant.value === 'animated' }]),
            onClick: _cache[4] || (_cache[4] = $event => (setVariant('animated')))
          }, [...(_cache[23] || (_cache[23] = [
            _createElementVNode("span", null, "动态", -1),
            _createElementVNode("span", { class: "mcg-rec" }, "推荐", -1)
          ]))], 2),
          _createElementVNode("span", {
            class: _normalizeClass(["mcg-seg-item", { 'mcg-seg-on': styleVariant.value === 'static' }]),
            onClick: _cache[5] || (_cache[5] = $event => (setVariant('static')))
          }, "静态", 2)
        ])
      ]),
      (state.libraries && state.libraries.length)
        ? (_openBlock(), _createElementBlock("div", _hoisted_18, [
            _cache[24] || (_cache[24] = _createElementVNode("div", { class: "mcg-targets-label" }, "应用到", -1)),
            _createElementVNode("span", {
              class: _normalizeClass(["mcg-target", { 'mcg-target-on': !styleTarget.value }]),
              onClick: _cache[6] || (_cache[6] = $event => (styleTarget.value=''))
            }, "所有媒体库", 2),
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(state.libraries, (lib) => {
              return (_openBlock(), _createElementBlock("span", {
                key: lib.key,
                class: _normalizeClass(["mcg-target", { 'mcg-target-on': styleTarget.value === lib.key }]),
                title: lib.name,
                onClick: $event => (styleTarget.value=lib.key)
              }, [
                _createElementVNode("span", null, _toDisplayString(lib.name), 1),
                (lib.own_style)
                  ? (_openBlock(), _createElementBlock("span", _hoisted_20))
                  : _createCommentVNode("", true)
              ], 10, _hoisted_19))
            }), 128))
          ]))
        : _createCommentVNode("", true),
      (previewSource.value)
        ? (_openBlock(), _createElementBlock("div", _hoisted_21, [
            _createElementVNode("div", null, _toDisplayString(state.local_preview
              ? `下面是你的媒体库「${state.local_preview.library}」的真实效果（${state.local_preview.time} 生成）。`
              : '想看看自己的片库用上这些风格的样子？只生成预览，不会改动媒体库封面。'), 1),
            (!isRunning.value)
              ? (_openBlock(), _createElementBlock("div", _hoisted_22, [
                  (state.local_preview)
                    ? (_openBlock(), _createElementBlock("button", {
                        key: 0,
                        class: "v-btn mcg-btn mcg-btn-quiet",
                        onClick: _cache[7] || (_cache[7] = $event => (call('clear_preview')))
                      }, "看示例图"))
                    : _createCommentVNode("", true),
                  _createElementVNode("button", {
                    class: "v-btn mcg-btn mcg-btn-gold",
                    onClick: genPreview
                  }, [
                    _createVNode(_component_v_icon, {
                      icon: "mdi-image-multiple-outline",
                      start: ""
                    }),
                    _createTextVNode(_toDisplayString(state.local_preview ? `用「${previewSource.value.name}」重新生成` : `用「${previewSource.value.name}」生成预览`), 1)
                  ])
                ]))
              : _createCommentVNode("", true)
          ]))
        : _createCommentVNode("", true),
      (targetOwnStyle.value)
        ? (_openBlock(), _createElementBlock("div", _hoisted_23, [
            _createElementVNode("div", null, "「" + _toDisplayString(targetLibrary.value.name) + "」单独使用「" + _toDisplayString(targetOwnLabel.value) + "」，不受默认风格影响。", 1),
            _createElementVNode("div", { class: "mcg-target-actions" }, [
              _createElementVNode("button", {
                class: "v-btn mcg-btn mcg-btn-quiet",
                onClick: clearLibraryStyle
              }, "恢复跟随默认")
            ])
          ]))
        : _createCommentVNode("", true),
      _createElementVNode("div", _hoisted_24, [
        (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(STYLES), (entry) => {
          return (_openBlock(), _createElementBlock("div", {
            key: entry.index,
            class: _normalizeClass(["mcg-style", { 'mcg-style-on': entry.index === currentStyleIndex.value }]),
            onClick: $event => (selectStyle(entry.index))
          }, [
            _createElementVNode("div", _hoisted_26, [
              _createElementVNode("img", {
                src: localStill(entry.index) || _unref(previewStill)(entry.index),
                alt: entry.name,
                loading: "lazy"
              }, null, 8, _hoisted_27),
              (styleVariant.value === 'animated')
                ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                    _createElementVNode("div", {
                      class: "mcg-style-motion",
                      style: _normalizeStyle({ backgroundImage: 'url(' + (localGif(entry.index) || _unref(previewMotion)(entry.index)) + ')' })
                    }, null, 4),
                    _cache[25] || (_cache[25] = _createElementVNode("span", { class: "mcg-gif-tag" }, "GIF", -1))
                  ], 64))
                : _createCommentVNode("", true)
            ]),
            _createElementVNode("div", _hoisted_28, [
              _createVNode(_component_v_icon, {
                icon: "mdi-check",
                size: "16"
              })
            ]),
            _createElementVNode("div", _hoisted_29, [
              _createElementVNode("div", _hoisted_30, [
                _createElementVNode("span", null, _toDisplayString(entry.name), 1)
              ]),
              _createElementVNode("div", _hoisted_31, _toDisplayString(styleVariant.value === 'animated' ? '动态：' + entry.motion : entry.desc), 1)
            ])
          ], 10, _hoisted_25))
        }), 128))
      ])
    ], 2),
    _createElementVNode("div", {
      class: _normalizeClass(["mcg-panel mcg-panel-libraries", { 'mcg-when-on': pageTab.value === 'libraries' }])
    }, [
      _cache[27] || (_cache[27] = _createElementVNode("div", { class: "mcg-heading" }, [
        _createElementVNode("div", null, [
          _createElementVNode("div", { class: "mcg-heading-title" }, "媒体库"),
          _createElementVNode("div", { class: "mcg-heading-note" }, "每个媒体库可以用同一款风格，也可以单独设置；还可以只更新其中一个，方便试用新风格。")
        ])
      ], -1)),
      (!state.libraries || !state.libraries.length)
        ? (_openBlock(), _createElementBlock("div", _hoisted_32, [
            _createVNode(_component_v_icon, {
              icon: "mdi-folder-off-outline",
              size: "32"
            }),
            _cache[26] || (_cache[26] = _createElementVNode("div", null, "还没有可用的媒体库。请在设置中选择媒体服务器并保存。", -1))
          ]))
        : (_openBlock(), _createElementBlock("div", _hoisted_33, [
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(state.libraries, (lib) => {
              return (_openBlock(), _createElementBlock("div", {
                class: "mcg-lib",
                key: lib.key
              }, [
                (lib.thumb)
                  ? (_openBlock(), _createElementBlock("img", {
                      key: 0,
                      class: "mcg-lib-art",
                      src: lib.thumb,
                      alt: lib.name,
                      loading: "lazy"
                    }, null, 8, _hoisted_34))
                  : (_openBlock(), _createElementBlock("div", _hoisted_35, [
                      _createVNode(_component_v_icon, {
                        icon: "mdi-image-outline",
                        size: "22"
                      })
                    ])),
                _createElementVNode("div", _hoisted_36, [
                  _createElementVNode("div", {
                    class: "mcg-lib-name",
                    title: lib.name
                  }, _toDisplayString(lib.name), 9, _hoisted_37),
                  _createElementVNode("div", {
                    class: "mcg-lib-note",
                    title: (lib.status && lib.status.message) || libNote(lib)
                  }, _toDisplayString(libNote(lib)), 9, _hoisted_38),
                  _createElementVNode("div", _hoisted_39, [
                    _createElementVNode("span", {
                      class: _normalizeClass(["mcg-chip", lib.own_style ? 'mcg-chip-gold' : ''])
                    }, _toDisplayString(lib.own_style ? ownStyleLabel(lib) : '跟随默认风格'), 3),
                    (lib.status)
                      ? (_openBlock(), _createElementBlock("span", {
                          key: 0,
                          class: _normalizeClass(["mcg-chip", lib.status.ok ? 'mcg-chip-ok' : 'mcg-chip-bad'])
                        }, _toDisplayString(lib.status.ok ? '成功' : '失败'), 3))
                      : _createCommentVNode("", true),
                    (!lib.active)
                      ? (_openBlock(), _createElementBlock("span", _hoisted_40, "未纳入批量更新"))
                      : _createCommentVNode("", true)
                  ])
                ]),
                _createElementVNode("div", _hoisted_41, [
                  _createElementVNode("button", {
                    class: "v-btn mcg-btn mcg-btn-quiet",
                    disabled: isRunning.value,
                    onClick: $event => (generate(lib.key))
                  }, "生成", 8, _hoisted_42),
                  _createElementVNode("button", {
                    class: "v-btn mcg-btn mcg-btn-quiet",
                    onClick: $event => {styleTarget.value=lib.key; pageTab.value='style';}
                  }, "换风格", 8, _hoisted_43)
                ])
              ]))
            }), 128))
          ]))
    ], 2),
    _createElementVNode("div", {
      class: _normalizeClass(["mcg-panel mcg-panel-history", { 'mcg-when-on': pageTab.value === 'history' }])
    }, [
      _createElementVNode("div", _hoisted_44, [
        _createElementVNode("div", null, [
          _cache[28] || (_cache[28] = _createElementVNode("div", { class: "mcg-heading-title" }, "历史封面", -1)),
          _createElementVNode("div", _hoisted_45, "共 " + _toDisplayString(state.history_total || 0) + " 张。每个媒体库最多保留 " + _toDisplayString(state.history_limit || 10) + " 张，可在设置中调整。", 1)
        ])
      ]),
      (!historyItems.value.length)
        ? (_openBlock(), _createElementBlock("div", _hoisted_46, [
            _createVNode(_component_v_icon, {
              icon: "mdi-image-multiple-outline",
              size: "32"
            }),
            _createElementVNode("div", null, _toDisplayString(pageTab.value === 'history' || !state.history_total ? '还没有生成记录。生成一次封面后会出现在这里。' : '正在载入…'), 1)
          ]))
        : (_openBlock(), _createElementBlock("div", _hoisted_47, [
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(historyItems.value, (item) => {
              return (_openBlock(), _createElementBlock("div", {
                class: "mcg-cover",
                key: item.name
              }, [
                _createElementVNode("img", {
                  src: coverUrl(item.file),
                  alt: item.title || item.library,
                  loading: "lazy"
                }, null, 8, _hoisted_48),
                _createElementVNode("div", _hoisted_49, [
                  _createElementVNode("div", _hoisted_50, [
                    _createElementVNode("div", {
                      class: "mcg-cover-name",
                      title: item.title || item.library
                    }, _toDisplayString(item.title || item.library), 9, _hoisted_51),
                    _createElementVNode("div", _hoisted_52, _toDisplayString(item.mtime) + " · " + _toDisplayString(item.size), 1)
                  ]),
                  _createElementVNode("button", {
                    class: "v-btn",
                    icon: "mdi-delete-outline",
                    variant: "text",
                    size: "small",
                    color: "#C8664F",
                    title: "删除",
                    onClick: $event => (deleteCover(item))
                  }, null, 8, _hoisted_53)
                ])
              ]))
            }), 128))
          ])),
      ((state.history_total || 0) > historyItems.value.length)
        ? (_openBlock(), _createElementBlock("div", _hoisted_54, [
            _createElementVNode("button", {
              class: "v-btn mcg-btn mcg-btn-quiet",
              onClick: _cache[8] || (_cache[8] = $event => (call('history_more')))
            }, "显示更多（还有 " + _toDisplayString(state.history_total - historyItems.value.length) + " 张）", 1)
          ]))
        : _createCommentVNode("", true)
    ], 2),
    _createElementVNode("div", {
      class: _normalizeClass(["mcg-panel mcg-panel-maintain", { 'mcg-when-on': pageTab.value === 'maintain' }])
    }, [
      _createElementVNode("div", _hoisted_55, [
        _createElementVNode("div", _hoisted_56, [
          _cache[29] || (_cache[29] = _createElementVNode("div", { class: "mcg-box-title" }, "运行检查", -1)),
          _cache[30] || (_cache[30] = _createElementVNode("div", { class: "mcg-box-note" }, "生成失败时可以先看这里。", -1)),
          (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(state.checks || [], (c) => {
            return (_openBlock(), _createElementBlock("div", {
              key: c.title,
              class: _normalizeClass(["mcg-check", c.ok ? 'mcg-check-ok' : 'mcg-check-bad'])
            }, [
              _createVNode(_component_v_icon, {
                icon: c.ok ? 'mdi-check-circle-outline' : 'mdi-alert-circle-outline'
              }, null, 8, ["icon"]),
              _createElementVNode("div", null, [
                _createTextVNode(_toDisplayString(c.title), 1),
                (c.note)
                  ? (_openBlock(), _createElementBlock("div", _hoisted_57, _toDisplayString(c.note), 1))
                  : _createCommentVNode("", true)
              ])
            ], 2))
          }), 128))
        ]),
        _createElementVNode("div", null, [
          _createElementVNode("div", _hoisted_58, [
            _createElementVNode("div", _hoisted_59, [
              _cache[31] || (_cache[31] = _createElementVNode("span", null, "封面与素材缓存", -1)),
              _createElementVNode("span", _hoisted_60, _toDisplayString(state.cache_images), 1)
            ]),
            _cache[33] || (_cache[33] = _createElementVNode("div", { class: "mcg-box-note" }, "删除下载的素材和历史封面。媒体库里已经生效的封面不受影响；自定义保存目录中只会删除插件生成的文件。", -1)),
            (cleanArmed.value === 'images')
              ? (_openBlock(), _createElementBlock("div", _hoisted_61, [
                  _createElementVNode("button", {
                    class: "v-btn mcg-btn mcg-btn-danger",
                    onClick: _cache[9] || (_cache[9] = $event => (doClean('images')))
                  }, "确认清理，不能恢复"),
                  _createElementVNode("button", {
                    class: "v-btn mcg-btn mcg-btn-quiet",
                    onClick: _cache[10] || (_cache[10] = $event => (cleanArmed.value=''))
                  }, "取消")
                ]))
              : (_openBlock(), _createElementBlock("button", {
                  key: 1,
                  class: "v-btn mcg-btn mcg-btn-danger",
                  onClick: _cache[11] || (_cache[11] = $event => (cleanArmed.value='images'))
                }, [
                  _createVNode(_component_v_icon, {
                    icon: "mdi-image-remove-outline",
                    start: ""
                  }),
                  _cache[32] || (_cache[32] = _createTextVNode("清理", -1))
                ]))
          ]),
          _createElementVNode("div", _hoisted_62, [
            _createElementVNode("div", _hoisted_63, [
              _cache[34] || (_cache[34] = _createElementVNode("span", null, "字体缓存", -1)),
              _createElementVNode("span", _hoisted_64, _toDisplayString(state.cache_fonts), 1)
            ]),
            _cache[36] || (_cache[36] = _createElementVNode("div", { class: "mcg-box-note" }, "字体损坏或想重新下载时使用，下次生成时自动重新获取。", -1)),
            (cleanArmed.value === 'fonts')
              ? (_openBlock(), _createElementBlock("div", _hoisted_65, [
                  _createElementVNode("button", {
                    class: "v-btn mcg-btn mcg-btn-danger",
                    onClick: _cache[12] || (_cache[12] = $event => (doClean('fonts')))
                  }, "确认清理，不能恢复"),
                  _createElementVNode("button", {
                    class: "v-btn mcg-btn mcg-btn-quiet",
                    onClick: _cache[13] || (_cache[13] = $event => (cleanArmed.value=''))
                  }, "取消")
                ]))
              : (_openBlock(), _createElementBlock("button", {
                  key: 1,
                  class: "v-btn mcg-btn mcg-btn-danger",
                  onClick: _cache[14] || (_cache[14] = $event => (cleanArmed.value='fonts'))
                }, [
                  _createVNode(_component_v_icon, {
                    icon: "mdi-format-font",
                    start: ""
                  }),
                  _cache[35] || (_cache[35] = _createTextVNode("清理", -1))
                ]))
          ])
        ])
      ])
    ], 2),
    _createVNode(_component_v_snackbar, {
      modelValue: toast.show,
      "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => ((toast.show) = $event)),
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

export { _sfc_main as default };
