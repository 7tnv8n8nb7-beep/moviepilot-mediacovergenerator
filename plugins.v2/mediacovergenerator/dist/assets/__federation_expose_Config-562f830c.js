import { importShared } from './__federation_fn_import-054b33c3.js';
import { T as TITLE_EXAMPLE, S as STYLES, p as previewStill, a as previewMotion, F as FONT_PRESETS, c as TYPOGRAPHY_PREVIEWS, b as pluginRequest } from './official-898de614.js';

const Config_vue_vue_type_style_index_0_scoped_44f20d9a_lang = '';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const {renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,resolveComponent:_resolveComponent,createVNode:_createVNode,toDisplayString:_toDisplayString,createElementVNode:_createElementVNode,withCtx:_withCtx,normalizeClass:_normalizeClass,createTextVNode:_createTextVNode,unref:_unref,normalizeStyle:_normalizeStyle,createCommentVNode:_createCommentVNode,createBlock:_createBlock} = await importShared('vue');


const _hoisted_1 = { class: "mcg" };
const _hoisted_2 = { class: "mcg-tabs" };
const _hoisted_3 = ["for", "onClick"];
const _hoisted_4 = ["id", "checked", "onChange"];
const _hoisted_5 = { class: "mcg-section" };
const _hoisted_6 = { class: "mcg-section-head" };
const _hoisted_7 = { class: "mcg-section-mark" };
const _hoisted_8 = { class: "mcg-section" };
const _hoisted_9 = { class: "mcg-section-head" };
const _hoisted_10 = { class: "mcg-section-mark" };
const _hoisted_11 = { class: "mcg-section" };
const _hoisted_12 = { class: "mcg-section-head" };
const _hoisted_13 = { class: "mcg-section-mark" };
const _hoisted_14 = {
  class: "mcg-gallery",
  style: {"margin-top":"16px"}
};
const _hoisted_15 = ["onClick"];
const _hoisted_16 = { class: "mcg-style-media" };
const _hoisted_17 = ["src", "alt"];
const _hoisted_18 = {
  key: 1,
  class: "mcg-gif-tag"
};
const _hoisted_19 = { class: "mcg-style-tick" };
const _hoisted_20 = { class: "mcg-style-meta" };
const _hoisted_21 = { class: "mcg-style-name" };
const _hoisted_22 = {
  key: 0,
  class: "mcg-style-desc"
};
const _hoisted_23 = {
  key: 1,
  class: "mcg-style-desc"
};
const _hoisted_24 = { class: "mcg-section" };
const _hoisted_25 = { class: "mcg-section-head" };
const _hoisted_26 = { class: "mcg-section-mark" };
const _hoisted_27 = { class: "mcg-section" };
const _hoisted_28 = { class: "mcg-section-head" };
const _hoisted_29 = { class: "mcg-section-mark" };
const _hoisted_30 = { class: "mcg-section" };
const _hoisted_31 = { class: "mcg-section-head" };
const _hoisted_32 = { class: "mcg-section-mark" };
const _hoisted_33 = { class: "mcg-editor-bar" };
const _hoisted_34 = { class: "mcg-section" };
const _hoisted_35 = { class: "mcg-section-head" };
const _hoisted_36 = { class: "mcg-section-mark" };
const _hoisted_37 = { class: "mcg-gallery" };
const _hoisted_38 = ["onClick"];
const _hoisted_39 = { class: "mcg-style-media" };
const _hoisted_40 = ["src", "alt"];
const _hoisted_41 = { class: "mcg-style-tick" };
const _hoisted_42 = { class: "mcg-style-meta" };
const _hoisted_43 = { class: "mcg-style-name" };
const _hoisted_44 = {
  key: 0,
  class: "mcg-rec"
};
const _hoisted_45 = { class: "mcg-style-desc" };
const _hoisted_46 = { class: "mcg-section" };
const _hoisted_47 = { class: "mcg-section-head" };
const _hoisted_48 = { class: "mcg-section-mark" };
const _hoisted_49 = { class: "mcg-section" };
const _hoisted_50 = { class: "mcg-section-head" };
const _hoisted_51 = { class: "mcg-section-mark" };
const _hoisted_52 = { class: "mcg-notice" };
const _hoisted_53 = { class: "mcg-section" };
const _hoisted_54 = { class: "mcg-section-head" };
const _hoisted_55 = { class: "mcg-section-mark" };
const _hoisted_56 = { class: "mcg-section" };
const _hoisted_57 = { class: "mcg-section-head" };
const _hoisted_58 = { class: "mcg-section-mark" };
const _hoisted_59 = { class: "mcg-section" };
const _hoisted_60 = { class: "mcg-section-head" };
const _hoisted_61 = { class: "mcg-section-mark" };
const _hoisted_62 = { class: "mcg-savebar" };
const _hoisted_63 = ["loading"];

const {computed,onMounted,reactive,ref} = await importShared('vue');


const _sfc_main = {
  __name: 'Config',
  props: { api: { type: Object, default: () => ({}) }, initialConfig: { type: Object, default: () => ({}) } },
  setup(__props) {

const props = __props;
const formTabs = [
  { key: 'basic', name: '基础', icon: 'mdi-tune-variant' },
  { key: 'style', name: '风格', icon: 'mdi-palette-swatch-outline' },
  { key: 'title', name: '标题', icon: 'mdi-format-title' },
  { key: 'typography', name: '排版', icon: 'mdi-format-font' },
  { key: 'motion', name: '动效', icon: 'mdi-play-box-multiple-outline' },
  { key: 'storage', name: '存储', icon: 'mdi-folder-cog-outline' },
];
const activeTab = ref('basic');
const saving = ref(false);
const toast = reactive({ show: false, text: '', color: 'success' });
const servers = ref([]);
const librariesForForm = ref([]);
const fontItems = ['auto','glowbold','glowheavy','glowcond','serifblack','notoblack','notolight','smiley','pangmen','interbold','interblack','intersemi','anton','dmserif','poppinsxb','poppinssemi','kronaone','michroma','CaveatBrush','EmblemaOne','Melete','JosefinSans'];

const DEFAULT = {
  enabled: true, update_now: false, transfer_monitor: true, notify: false, cron: '', rotate_style: false, delay: 60,
  selected_servers: [], include_libraries: [], sort_by: 'Random', title_config: '',
  cover_style: 'animated_1', cover_style_base: 'static_1', cover_style_variant: 'animated',
  zh_font_preset: 'auto', en_font_preset: 'auto', zh_font_custom: '', en_font_custom: '',
  zh_font_size: null, en_font_size: null, zh_font_offset: null, title_spacing: null, en_line_spacing: null,
  zh_letter_spacing: null, en_letter_spacing: null, blur_size: 50, color_ratio: 0.8, title_scale: 1.0,
  use_primary: 'auto', resolution: '720p', bg_color_mode: 'auto', custom_bg_color: '',
  animation_duration: 12, animation_fps: 15, animation_resolution: '400x225', animation_reduce_colors: 'medium', animation_image_count: 6,
  covers_input: '', covers_output: '', save_recent_covers: true, covers_history_limit_per_library: 10, covers_page_history_limit: 50,
};
const form = reactive({ ...DEFAULT, ...props.initialConfig });

const titleFromLibraries = computed(() => librariesForForm.value.map(l => `${l.library || l.name}:\n  - ${l.library || l.name}\n  - ${(l.library || l.name).toUpperCase()}`).join('\n') || TITLE_EXAMPLE);

function syncCoverStyle() { form.cover_style = `${form.cover_style_variant}_${String(form.cover_style_base).split('_').pop()}`; }
function isFontPreset(p) { return (!form.zh_font_custom && !form.en_font_custom) && form.zh_font_preset === p.values.zh_font_preset && form.en_font_preset === p.values.en_font_preset }
function applyFontPreset(p) {
  Object.assign(form, p.values);
  if (p.key === 'auto') {
    for (const k of ['zh_font_size','en_font_size','zh_font_offset','title_spacing','en_line_spacing','zh_letter_spacing','en_letter_spacing']) form[k] = null;
    form.title_scale = 1;
  }
  form.zh_font_custom = ''; form.en_font_custom = '';
}
function notify(text, color = 'success') { toast.text = text; toast.color = color; toast.show = true; }
async function load() {
  try {
    const res = await pluginRequest(props.api, '/config', { method: 'GET' });
    const d = res?.data ?? res;
    if (d && typeof d === 'object') for (const k of Object.keys(form)) if (k in d) form[k] = d[k];
    const s = await pluginRequest(props.api, '/state', { method: 'GET' });
    const sd = s?.data ?? s;
    if (sd && sd.libraries) librariesForForm.value = sd.libraries.map(l => ({ title: l.name, value: l.key, library: l.name, name: l.name, server: l.server }));
    servers.value = [...new Set((sd?.libraries || []).map(l => l.server))].filter(Boolean);
  } catch (e) { notify('载入失败：' + (e?.message || e), 'error'); }
}
async function save() {
  saving.value = true;
  try {
    const payload = { ...form };
    const res = await pluginRequest(props.api, '/config', { method: 'POST', payload });
    if (res?.success === false) notify(res.message || '保存失败', 'error');
    else notify('配置已保存', 'success');
  } catch (e) { notify('保存失败：' + (e?.message || e), 'error'); }
  finally { saving.value = false; }
}
onMounted(load);

return (_ctx, _cache) => {
  const _component_v_icon = _resolveComponent("v-icon");
  const _component_v_switch = _resolveComponent("v-switch");
  const _component_v_col = _resolveComponent("v-col");
  const _component_v_text_field = _resolveComponent("v-text-field");
  const _component_v_row = _resolveComponent("v-row");
  const _component_v_select = _resolveComponent("v-select");
  const _component_v_btn = _resolveComponent("v-btn");
  const _component_v_btn_toggle = _resolveComponent("v-btn-toggle");
  const _component_v_textarea = _resolveComponent("v-textarea");
  const _component_v_snackbar = _resolveComponent("v-snackbar");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      (_openBlock(), _createElementBlock(_Fragment, null, _renderList(formTabs, (t) => {
        return _createElementVNode("label", {
          class: "mcg-tab",
          key: t.key,
          for: 'cfg-tab-' + t.key,
          onClick: $event => (activeTab.value = t.key)
        }, [
          _createVNode(_component_v_icon, {
            icon: t.icon,
            size: "16"
          }, null, 8, ["icon"]),
          _createElementVNode("span", null, _toDisplayString(t.name), 1)
        ], 8, _hoisted_3)
      }), 64))
    ]),
    (_openBlock(), _createElementBlock(_Fragment, null, _renderList(formTabs, (t) => {
      return _createElementVNode("input", {
        type: "radio",
        class: "mcg-radio",
        name: "cfg-tab",
        key: t.key,
        id: 'cfg-tab-' + t.key,
        checked: activeTab.value === t.key,
        onChange: $event => (activeTab.value = t.key)
      }, null, 40, _hoisted_4)
    }), 64)),
    _createElementVNode("div", {
      class: _normalizeClass(["mcg-panel mcg-when-on", { 'mcg-when-on': activeTab.value === 'basic' }])
    }, [
      _createElementVNode("div", _hoisted_5, [
        _createElementVNode("div", _hoisted_6, [
          _createElementVNode("div", _hoisted_7, [
            _createVNode(_component_v_icon, {
              icon: "mdi-power",
              size: "17"
            })
          ]),
          _cache[43] || (_cache[43] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "运行"),
            _createElementVNode("div", { class: "mcg-section-note" }, "启用插件并决定什么时候更新封面")
          ], -1))
        ]),
        _createVNode(_component_v_row, null, {
          default: _withCtx(() => [
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_switch, {
                  modelValue: form.enabled,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((form.enabled) = $event)),
                  label: "启用插件",
                  color: "#C49A5C"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_switch, {
                  modelValue: form.transfer_monitor,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((form.transfer_monitor) = $event)),
                  label: "入库后自动更新",
                  color: "#C49A5C",
                  hint: "媒体入库后刷新其所在媒体库的封面",
                  "persistent-hint": ""
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_switch, {
                  modelValue: form.notify,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((form.notify) = $event)),
                  label: "任务完成时通知",
                  color: "#C49A5C",
                  hint: "手动或定时任务结束后发送消息",
                  "persistent-hint": ""
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_switch, {
                  modelValue: form.update_now,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((form.update_now) = $event)),
                  label: "保存后立即更新一次",
                  color: "#C49A5C"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.delay,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((form.delay) = $event)),
                  modelModifiers: { number: true },
                  label: "入库后等待（秒）",
                  hint: "等待媒体服务器扫描完成，多次入库会合并处理",
                  "persistent-hint": "",
                  type: "number",
                  min: "0",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.cron,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((form.cron) = $event)),
                  label: "定时更新",
                  placeholder: "5 位 cron 表达式，留空不启用",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "12"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_switch, {
                  modelValue: form.rotate_style,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((form.rotate_style) = $event)),
                  label: "定时轮换风格",
                  color: "#C49A5C",
                  hint: "每次定时更新换下一款风格，所有媒体库保持统一；单独设置过风格的媒体库不变",
                  "persistent-hint": ""
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _createElementVNode("div", _hoisted_8, [
        _createElementVNode("div", _hoisted_9, [
          _createElementVNode("div", _hoisted_10, [
            _createVNode(_component_v_icon, {
              icon: "mdi-server-network",
              size: "17"
            })
          ]),
          _cache[44] || (_cache[44] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "媒体服务器"),
            _createElementVNode("div", { class: "mcg-section-note" }, "选择要更新封面的服务器和媒体库")
          ], -1))
        ]),
        _createVNode(_component_v_row, null, {
          default: _withCtx(() => [
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_select, {
                  modelValue: form.selected_servers,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((form.selected_servers) = $event)),
                  items: servers.value,
                  label: "媒体服务器",
                  multiple: "",
                  chips: "",
                  clearable: "",
                  hint: "支持 Emby 和 Jellyfin",
                  "persistent-hint": "",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue", "items"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_select, {
                  modelValue: form.sort_by,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((form.sort_by) = $event)),
                  items: [{title:'随机',value:'Random'},{title:'最新入库',value:'DateCreated'},{title:'最新发行',value:'PremiereDate'}],
                  label: "选图顺序",
                  hint: "决定从媒体库里挑选哪些条目的图片",
                  "persistent-hint": "",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "12"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_select, {
                  modelValue: form.include_libraries,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ((form.include_libraries) = $event)),
                  items: librariesForForm.value,
                  label: "批量更新的媒体库",
                  multiple: "",
                  chips: "",
                  clearable: "",
                  hint: "留空表示全部媒体库；电视直播不包含在内，需要时单独勾选",
                  "persistent-hint": "",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue", "items"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ], 2),
    _createElementVNode("div", {
      class: _normalizeClass(["mcg-panel", { 'mcg-when-on': activeTab.value === 'style' }])
    }, [
      _createElementVNode("div", _hoisted_11, [
        _createElementVNode("div", _hoisted_12, [
          _createElementVNode("div", _hoisted_13, [
            _createVNode(_component_v_icon, {
              icon: "mdi-palette-swatch-outline",
              size: "17"
            })
          ]),
          _cache[45] || (_cache[45] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "封面风格"),
            _createElementVNode("div", { class: "mcg-section-note" }, "这里是所有媒体库的默认风格。想给某个媒体库单独设置，到插件详情页「风格」页上方选择媒体库")
          ], -1))
        ]),
        _cache[48] || (_cache[48] = _createElementVNode("div", { class: "mcg-toggle-label" }, "输出类型", -1)),
        _createVNode(_component_v_btn_toggle, {
          modelValue: form.cover_style_variant,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => ((form.cover_style_variant) = $event)),
          mandatory: "",
          divided: "",
          density: "comfortable",
          color: "#C49A5C",
          variant: "outlined",
          style: {"width":"100%","max-width":"380px"}
        }, {
          default: _withCtx(() => [
            _createVNode(_component_v_btn, {
              value: "animated",
              style: {"flex":"1"},
              class: "text-none"
            }, {
              default: _withCtx(() => [...(_cache[46] || (_cache[46] = [
                _createTextVNode("GIF 动态封面", -1)
              ]))]),
              _: 1
            }),
            _createVNode(_component_v_btn, {
              value: "static",
              style: {"flex":"1"},
              class: "text-none"
            }, {
              default: _withCtx(() => [...(_cache[47] || (_cache[47] = [
                _createTextVNode("静态图片", -1)
              ]))]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _createElementVNode("div", _hoisted_14, [
          (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(STYLES), (s) => {
            return (_openBlock(), _createElementBlock("div", {
              key: s.index,
              class: _normalizeClass(["mcg-style", { 'mcg-style-on': form.cover_style_base === 'static_' + s.index }]),
              onClick: $event => {form.cover_style_base = 'static_' + s.index; syncCoverStyle();}
            }, [
              _createElementVNode("div", _hoisted_16, [
                _createElementVNode("img", {
                  src: _unref(previewStill)(s.index),
                  alt: s.name,
                  loading: "lazy"
                }, null, 8, _hoisted_17),
                (form.cover_style_variant === 'animated')
                  ? (_openBlock(), _createElementBlock("div", {
                      key: 0,
                      class: "mcg-style-motion",
                      style: _normalizeStyle({ backgroundImage: 'url(' + _unref(previewMotion)(s.index) + ')' })
                    }, null, 4))
                  : _createCommentVNode("", true),
                (form.cover_style_variant === 'animated')
                  ? (_openBlock(), _createElementBlock("span", _hoisted_18, "GIF"))
                  : _createCommentVNode("", true)
              ]),
              _createElementVNode("div", _hoisted_19, [
                _createVNode(_component_v_icon, {
                  icon: "mdi-check",
                  size: "16"
                })
              ]),
              _createElementVNode("div", _hoisted_20, [
                _createElementVNode("div", _hoisted_21, [
                  _createElementVNode("span", null, _toDisplayString(s.name), 1)
                ]),
                (form.cover_style_variant === 'animated')
                  ? (_openBlock(), _createElementBlock("div", _hoisted_22, "动态：" + _toDisplayString(s.motion), 1))
                  : (_openBlock(), _createElementBlock("div", _hoisted_23, _toDisplayString(s.desc), 1))
              ])
            ], 10, _hoisted_15))
          }), 128))
        ])
      ]),
      _createElementVNode("div", _hoisted_24, [
        _createElementVNode("div", _hoisted_25, [
          _createElementVNode("div", _hoisted_26, [
            _createVNode(_component_v_icon, {
              icon: "mdi-image-outline",
              size: "17"
            })
          ]),
          _cache[49] || (_cache[49] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "选图与输出"),
            _createElementVNode("div", { class: "mcg-section-note" }, "自动匹配：每个画框选比例合适的图，围绕人物取景。只有海报时完整显示海报，不把人物切开")
          ], -1))
        ]),
        _createVNode(_component_v_row, null, {
          default: _withCtx(() => [
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _cache[53] || (_cache[53] = _createElementVNode("div", { class: "mcg-toggle-label" }, "素材图片", -1)),
                _createVNode(_component_v_btn_toggle, {
                  modelValue: form.use_primary,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ((form.use_primary) = $event)),
                  mandatory: "",
                  divided: "",
                  density: "comfortable",
                  color: "#C49A5C",
                  variant: "outlined",
                  style: {"width":"100%"}
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_btn, {
                      value: "auto",
                      style: {"flex":"1"},
                      class: "text-none"
                    }, {
                      default: _withCtx(() => [...(_cache[50] || (_cache[50] = [
                        _createTextVNode("自动匹配", -1)
                      ]))]),
                      _: 1
                    }),
                    _createVNode(_component_v_btn, {
                      value: true,
                      style: {"flex":"1"},
                      class: "text-none"
                    }, {
                      default: _withCtx(() => [...(_cache[51] || (_cache[51] = [
                        _createTextVNode("只用海报", -1)
                      ]))]),
                      _: 1
                    }),
                    _createVNode(_component_v_btn, {
                      value: false,
                      style: {"flex":"1"},
                      class: "text-none"
                    }, {
                      default: _withCtx(() => [...(_cache[52] || (_cache[52] = [
                        _createTextVNode("只用背景图", -1)
                      ]))]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_select, {
                  modelValue: form.resolution,
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => ((form.resolution) = $event)),
                  items: [{title:'1080p（1920×1080）',value:'1080p'},{title:'720p（1280×720）',value:'720p'},{title:'480p（854×480）',value:'480p'}],
                  label: "静态图分辨率",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _createElementVNode("div", _hoisted_27, [
        _createElementVNode("div", _hoisted_28, [
          _createElementVNode("div", _hoisted_29, [
            _createVNode(_component_v_icon, {
              icon: "mdi-palette-outline",
              size: "17"
            })
          ]),
          _cache[54] || (_cache[54] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "点缀色"),
            _createElementVNode("div", { class: "mcg-section-note" }, "标题线条、胶囊标签等处使用的颜色。默认每款风格有自己的颜色，同一排封面看起来更统一")
          ], -1))
        ]),
        _createVNode(_component_v_row, null, {
          default: _withCtx(() => [
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_select, {
                  modelValue: form.bg_color_mode,
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => ((form.bg_color_mode) = $event)),
                  items: [{title:'风格默认',value:'auto'},{title:'从图片提取',value:'image'},{title:'统一使用自定义颜色',value:'custom'},{title:'从标题配置读取',value:'config'}],
                  label: "颜色来源",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.color_ratio,
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => ((form.color_ratio) = $event)),
                  modelModifiers: { number: true },
                  label: "底色和压暗强度",
                  hint: "0 到 1，默认 0.8。越大底色越贴近图片色调，图上的压暗也越重",
                  "persistent-hint": "",
                  type: "number",
                  min: "0",
                  max: "1",
                  step: "0.05",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            (form.bg_color_mode === 'custom')
              ? (_openBlock(), _createBlock(_component_v_col, {
                  key: 0,
                  cols: "12"
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_text_field, {
                      modelValue: form.custom_bg_color,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => ((form.custom_bg_color) = $event)),
                      label: "自定义颜色",
                      hint: "支持 #十六进制、rgb(...)、颜色英文名",
                      "persistent-hint": "",
                      placeholder: "#58DDA3",
                      density: "comfortable",
                      variant: "outlined"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }))
              : _createCommentVNode("", true)
          ]),
          _: 1
        })
      ])
    ], 2),
    _createElementVNode("div", {
      class: _normalizeClass(["mcg-panel", { 'mcg-when-on': activeTab.value === 'title' }])
    }, [
      _createElementVNode("div", _hoisted_30, [
        _createElementVNode("div", _hoisted_31, [
          _createElementVNode("div", _hoisted_32, [
            _createVNode(_component_v_icon, {
              icon: "mdi-format-title",
              size: "17"
            })
          ]),
          _cache[55] || (_cache[55] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "封面标题"),
            _createElementVNode("div", { class: "mcg-section-note" }, "未配置的媒体库直接使用媒体库名称，副标题留空")
          ], -1))
        ]),
        _createElementVNode("div", _hoisted_33, [
          _createElementVNode("button", {
            class: "v-btn mcg-btn mcg-btn-quiet",
            onClick: _cache[16] || (_cache[16] = $event => (form.title_config = titleFromLibraries.value))
          }, [
            _createVNode(_component_v_icon, {
              icon: "mdi-auto-fix",
              start: ""
            }),
            _cache[56] || (_cache[56] = _createTextVNode("按我的媒体库生成", -1))
          ]),
          _createElementVNode("button", {
            class: "v-btn mcg-btn mcg-btn-quiet",
            onClick: _cache[17] || (_cache[17] = $event => (form.title_config = _unref(TITLE_EXAMPLE)))
          }, [
            _createVNode(_component_v_icon, {
              icon: "mdi-text-box-outline",
              start: ""
            }),
            _cache[57] || (_cache[57] = _createTextVNode("填入示例", -1))
          ])
        ]),
        _createVNode(_component_v_textarea, {
          modelValue: form.title_config,
          "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => ((form.title_config) = $event)),
          label: "标题配置（YAML）",
          rows: "16",
          variant: "outlined",
          density: "comfortable",
          style: {"font-family":"monospace","font-size":"13px"}
        }, null, 8, ["modelValue"])
      ])
    ], 2),
    _createElementVNode("div", {
      class: _normalizeClass(["mcg-panel", { 'mcg-when-on': activeTab.value === 'typography' }])
    }, [
      _createElementVNode("div", _hoisted_34, [
        _createElementVNode("div", _hoisted_35, [
          _createElementVNode("div", _hoisted_36, [
            _createVNode(_component_v_icon, {
              icon: "mdi-auto-fix",
              size: "17"
            })
          ]),
          _cache[58] || (_cache[58] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "字体搭配"),
            _createElementVNode("div", { class: "mcg-section-note" }, "每款风格都有设计好的字体和字号。想换字体可以点这里，字号和间距仍然跟随风格")
          ], -1))
        ]),
        _createElementVNode("div", _hoisted_37, [
          (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(FONT_PRESETS), (p) => {
            return (_openBlock(), _createElementBlock("div", {
              key: p.key,
              class: _normalizeClass(["mcg-style", { 'mcg-style-on': isFontPreset(p) }]),
              onClick: $event => (applyFontPreset(p))
            }, [
              _createElementVNode("div", _hoisted_39, [
                _createElementVNode("img", {
                  src: _unref(TYPOGRAPHY_PREVIEWS)[p.key],
                  alt: p.name,
                  loading: "lazy"
                }, null, 8, _hoisted_40)
              ]),
              _createElementVNode("div", _hoisted_41, [
                _createVNode(_component_v_icon, {
                  icon: "mdi-check",
                  size: "16"
                })
              ]),
              _createElementVNode("div", _hoisted_42, [
                _createElementVNode("div", _hoisted_43, [
                  _createElementVNode("span", null, _toDisplayString(p.name), 1),
                  (p.recommended)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_44, "推荐"))
                    : _createCommentVNode("", true)
                ]),
                _createElementVNode("div", _hoisted_45, _toDisplayString(p.desc), 1)
              ])
            ], 10, _hoisted_38))
          }), 128))
        ])
      ]),
      _createElementVNode("div", _hoisted_46, [
        _createElementVNode("div", _hoisted_47, [
          _createElementVNode("div", _hoisted_48, [
            _createVNode(_component_v_icon, {
              icon: "mdi-format-font",
              size: "17"
            })
          ]),
          _cache[59] || (_cache[59] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "字体"),
            _createElementVNode("div", { class: "mcg-section-note" }, "内置字体会自动下载；也可以填字体链接或容器内的本地路径")
          ], -1))
        ]),
        _createVNode(_component_v_row, null, {
          default: _withCtx(() => [
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_select, {
                  modelValue: form.zh_font_preset,
                  "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => ((form.zh_font_preset) = $event)),
                  items: fontItems,
                  label: "主标题字体",
                  hint: "标题含中文时请选中文字体",
                  "persistent-hint": "",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_select, {
                  modelValue: form.en_font_preset,
                  "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => ((form.en_font_preset) = $event)),
                  items: fontItems,
                  label: "副标题字体",
                  hint: "副标题含中文而字体不支持时，会自动换成能显示的字体",
                  "persistent-hint": "",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.zh_font_custom,
                  "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => ((form.zh_font_custom) = $event)),
                  label: "自定义主标题字体",
                  hint: "链接或路径，留空使用上面的选择",
                  "persistent-hint": "",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.en_font_custom,
                  "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => ((form.en_font_custom) = $event)),
                  label: "自定义副标题字体",
                  hint: "链接或路径，留空使用上面的选择",
                  "persistent-hint": "",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _createElementVNode("div", _hoisted_49, [
        _createElementVNode("div", _hoisted_50, [
          _createElementVNode("div", _hoisted_51, [
            _createVNode(_component_v_icon, {
              icon: "mdi-format-size",
              size: "17"
            })
          ]),
          _cache[60] || (_cache[60] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "精细调整"),
            _createElementVNode("div", { class: "mcg-section-note" }, "以 1080p 为基准，其他分辨率会等比缩放。全部留空就是每款风格的原始设计，填了才覆盖")
          ], -1))
        ]),
        _createVNode(_component_v_row, null, {
          default: _withCtx(() => [
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.title_scale,
                  "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => ((form.title_scale) = $event)),
                  label: "整体缩放",
                  hint: "默认 1.0，同时缩放字号和间距",
                  "persistent-hint": "",
                  type: "number",
                  step: "0.05",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.zh_font_size,
                  "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => ((form.zh_font_size) = $event)),
                  label: "主标题字号",
                  hint: "留空跟随风格",
                  "persistent-hint": "",
                  type: "number",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.en_font_size,
                  "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => ((form.en_font_size) = $event)),
                  label: "副标题字号",
                  hint: "留空跟随风格",
                  "persistent-hint": "",
                  type: "number",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.zh_letter_spacing,
                  "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => ((form.zh_letter_spacing) = $event)),
                  label: "主标题字距",
                  hint: "字号的百分比，可以为负",
                  "persistent-hint": "",
                  type: "number",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.en_letter_spacing,
                  "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => ((form.en_letter_spacing) = $event)),
                  label: "副标题字距",
                  hint: "字号的百分比，可以为负",
                  "persistent-hint": "",
                  type: "number",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.title_spacing,
                  "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => ((form.title_spacing) = $event)),
                  label: "主副标题间距",
                  hint: "留空跟随风格",
                  "persistent-hint": "",
                  type: "number",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.en_line_spacing,
                  "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => ((form.en_line_spacing) = $event)),
                  label: "副标题行距",
                  hint: "留空跟随风格",
                  "persistent-hint": "",
                  type: "number",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.zh_font_offset,
                  "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => ((form.zh_font_offset) = $event)),
                  label: "标题上下偏移",
                  hint: "上移填负值，默认 0",
                  "persistent-hint": "",
                  type: "number",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.blur_size,
                  "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => ((form.blur_size) = $event)),
                  label: "背景虚化强度",
                  hint: "默认 50",
                  "persistent-hint": "",
                  type: "number",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ], 2),
    _createElementVNode("div", {
      class: _normalizeClass(["mcg-panel", { 'mcg-when-on': activeTab.value === 'motion' }])
    }, [
      _createElementVNode("div", _hoisted_52, [
        _createVNode(_component_v_icon, { icon: "mdi-information-outline" }),
        _cache[61] || (_cache[61] = _createElementVNode("div", null, "Hills、yamby、小幻影视都能播放。客户端请求的宽度小于动图宽度时，Emby 会把它压成静态图，所以尺寸越小越容易动起来。首帧就是完整封面，只显示静态图的客户端也能看到成品。需要容器内有 ffmpeg，没有时自动生成静态封面。", -1))
      ]),
      _createElementVNode("div", _hoisted_53, [
        _createElementVNode("div", _hoisted_54, [
          _createElementVNode("div", _hoisted_55, [
            _createVNode(_component_v_icon, {
              icon: "mdi-play-box-multiple-outline",
              size: "17"
            })
          ]),
          _cache[62] || (_cache[62] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "GIF 动图"),
            _createElementVNode("div", { class: "mcg-section-note" }, "只有使用动态封面时才生效。画面大部分时间静止、只在转场时运动，320×180 一张通常 1.5 到 3 MB")
          ], -1))
        ]),
        _createVNode(_component_v_row, null, {
          default: _withCtx(() => [
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_select, {
                  modelValue: form.animation_resolution,
                  "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => ((form.animation_resolution) = $event)),
                  items: [{title:'480×270（最清晰，部分客户端会变静态）',value:'480x270'},{title:'400×225（推荐）',value:'400x225'},{title:'320×180（体积最小，兼容最好）',value:'320x180'}],
                  label: "尺寸",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_select, {
                  modelValue: form.animation_reduce_colors,
                  "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => ((form.animation_reduce_colors) = $event)),
                  items: [{title:'256 色（画质最好）',value:'off'},{title:'192 色（推荐）',value:'medium'},{title:'96 色（体积最小）',value:'strong'}],
                  label: "颜色数量",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.animation_image_count,
                  "onUpdate:modelValue": _cache[34] || (_cache[34] = $event => ((form.animation_image_count) = $event)),
                  modelModifiers: { number: true },
                  label: "轮播图片数量",
                  hint: "3 到 12 张，默认 6",
                  "persistent-hint": "",
                  type: "number",
                  min: "3",
                  max: "12",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.animation_duration,
                  "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => ((form.animation_duration) = $event)),
                  modelModifiers: { number: true },
                  label: "循环时长（秒）",
                  hint: "默认 12",
                  "persistent-hint": "",
                  type: "number",
                  min: "1",
                  max: "60",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.animation_fps,
                  "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => ((form.animation_fps) = $event)),
                  modelModifiers: { number: true },
                  label: "帧率",
                  hint: "默认 15，GIF 不需要更高",
                  "persistent-hint": "",
                  type: "number",
                  min: "1",
                  max: "30",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ], 2),
    _createElementVNode("div", {
      class: _normalizeClass(["mcg-panel", { 'mcg-when-on': activeTab.value === 'storage' }])
    }, [
      _createElementVNode("div", _hoisted_56, [
        _createElementVNode("div", _hoisted_57, [
          _createElementVNode("div", _hoisted_58, [
            _createVNode(_component_v_icon, {
              icon: "mdi-folder-image",
              size: "17"
            })
          ]),
          _cache[63] || (_cache[63] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "自定义图片"),
            _createElementVNode("div", { class: "mcg-section-note" }, "不想用媒体库图片时，可以指定自己的素材。电视直播通常只有台标，建议在这里放图")
          ], -1))
        ]),
        _createVNode(_component_v_text_field, {
          modelValue: form.covers_input,
          "onUpdate:modelValue": _cache[37] || (_cache[37] = $event => ((form.covers_input) = $event)),
          label: "自定义图片目录",
          hint: "放在与媒体库同名的子目录，如 /mnt/custom/电影/a.jpg，填 /mnt/custom。插件不会改动该目录",
          "persistent-hint": "",
          clearable: "",
          density: "comfortable",
          variant: "outlined"
        }, null, 8, ["modelValue"])
      ]),
      _createElementVNode("div", _hoisted_59, [
        _createElementVNode("div", _hoisted_60, [
          _createElementVNode("div", _hoisted_61, [
            _createVNode(_component_v_icon, {
              icon: "mdi-history",
              size: "17"
            })
          ]),
          _cache[64] || (_cache[64] = _createElementVNode("div", null, [
            _createElementVNode("div", { class: "mcg-section-title" }, "历史封面"),
            _createElementVNode("div", { class: "mcg-section-note" }, "生成结果的本地备份，可在详情页查看和删除")
          ], -1))
        ]),
        _createVNode(_component_v_row, null, {
          default: _withCtx(() => [
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_switch, {
                  modelValue: form.save_recent_covers,
                  "onUpdate:modelValue": _cache[38] || (_cache[38] = $event => ((form.save_recent_covers) = $event)),
                  label: "保存生成的封面",
                  color: "#C49A5C"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.covers_history_limit_per_library,
                  "onUpdate:modelValue": _cache[39] || (_cache[39] = $event => ((form.covers_history_limit_per_library) = $event)),
                  modelModifiers: { number: true },
                  label: "每个媒体库保留",
                  hint: "1 到 100 张，默认 10",
                  "persistent-hint": "",
                  type: "number",
                  min: "1",
                  max: "100",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.covers_page_history_limit,
                  "onUpdate:modelValue": _cache[40] || (_cache[40] = $event => ((form.covers_page_history_limit) = $event)),
                  modelModifiers: { number: true },
                  label: "详情页最多显示",
                  hint: "1 到 500 张，默认 50",
                  "persistent-hint": "",
                  type: "number",
                  min: "1",
                  max: "500",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_col, {
              cols: "12",
              md: "12"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_text_field, {
                  modelValue: form.covers_output,
                  "onUpdate:modelValue": _cache[41] || (_cache[41] = $event => ((form.covers_output) = $event)),
                  label: "保存目录",
                  hint: "留空保存到插件数据目录；清理缓存时只删除插件生成的文件",
                  "persistent-hint": "",
                  clearable: "",
                  density: "comfortable",
                  variant: "outlined"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ], 2),
    _createElementVNode("div", _hoisted_62, [
      _createElementVNode("button", {
        class: "v-btn mcg-btn mcg-btn-gold",
        loading: saving.value,
        onClick: save
      }, [
        _createVNode(_component_v_icon, {
          icon: "mdi-content-save",
          start: ""
        }),
        _cache[65] || (_cache[65] = _createTextVNode("保存配置", -1))
      ], 8, _hoisted_63),
      _createElementVNode("button", {
        class: "v-btn mcg-btn mcg-btn-quiet",
        onClick: load
      }, [
        _createVNode(_component_v_icon, {
          icon: "mdi-refresh",
          start: ""
        }),
        _cache[66] || (_cache[66] = _createTextVNode("重新载入", -1))
      ])
    ]),
    _createVNode(_component_v_snackbar, {
      modelValue: toast.show,
      "onUpdate:modelValue": _cache[42] || (_cache[42] = $event => ((toast.show) = $event)),
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
const Config = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-44f20d9a"]]);

export { Config as default };
