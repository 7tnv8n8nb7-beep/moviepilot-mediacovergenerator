import { importShared } from './__federation_fn_import-054b33c3.js';
import { _ as _export_sfc, p as pluginRequest } from './_plugin-vue_export-helper-23f28410.js';

const Config_vue_vue_type_style_index_0_scoped_1929b2b9_lang = '';

const {resolveComponent:_resolveComponent,createVNode:_createVNode,createTextVNode:_createTextVNode,withCtx:_withCtx,createElementVNode:_createElementVNode,toDisplayString:_toDisplayString,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "mcg-config" };
const _hoisted_2 = { class: "d-flex ga-3" };

const {onMounted,reactive,ref} = await importShared('vue');


const _sfc_main = {
  __name: 'Config',
  props: { api: { type: Object, default: () => ({}) } },
  setup(__props) {

const props = __props;
const form = reactive({
  enabled: true, update_now: false, cron: '', resolution: '720p',
  animation_fps: 15, animation_duration: 12, blur_size: 50, color_ratio: 0.8,
});
const saving = ref(false);
const toast = reactive({ show: false, text: '', color: 'success' });

function notify(text, color = 'success') { toast.text = text; toast.color = color; toast.show = true; }

async function load() {
  try {
    const res = await pluginRequest(props.api, '/config', { method: 'GET' });
    const data = res?.data ?? res;
    if (data && typeof data === 'object') {
      for (const k of Object.keys(form)) if (k in data) form[k] = data[k];
    }
  } catch (e) { notify('载入失败：' + (e?.message || e), 'error'); }
}

async function save() {
  saving.value = true;
  try {
    const res = await pluginRequest(props.api, '/config', { method: 'POST', payload: { ...form } });
    if (res?.success === false) notify(res.message || '保存失败', 'error');
    else notify('配置已保存', 'success');
  } catch (e) { notify('保存失败：' + (e?.message || e), 'error'); }
  finally { saving.value = false; }
}

onMounted(load);

return (_ctx, _cache) => {
  const _component_v_icon = _resolveComponent("v-icon");
  const _component_v_card_title = _resolveComponent("v-card-title");
  const _component_v_alert = _resolveComponent("v-alert");
  const _component_v_switch = _resolveComponent("v-switch");
  const _component_v_text_field = _resolveComponent("v-text-field");
  const _component_v_select = _resolveComponent("v-select");
  const _component_v_slider = _resolveComponent("v-slider");
  const _component_v_btn = _resolveComponent("v-btn");
  const _component_v_card_text = _resolveComponent("v-card-text");
  const _component_v_card = _resolveComponent("v-card");
  const _component_v_snackbar = _resolveComponent("v-snackbar");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_v_card, {
      class: "mcg-card",
      variant: "tonal"
    }, {
      default: _withCtx(() => [
        _createVNode(_component_v_card_title, { class: "mcg-section-title" }, {
          default: _withCtx(() => [
            _createVNode(_component_v_icon, {
              icon: "mdi-cog",
              start: ""
            }),
            _cache[9] || (_cache[9] = _createTextVNode(" 动态封面工坊 · 配置", -1))
          ]),
          _: 1
        }),
        _createVNode(_component_v_card_text, null, {
          default: _withCtx(() => [
            _createVNode(_component_v_alert, {
              type: "info",
              density: "compact",
              variant: "tonal",
              class: "mb-4"
            }, {
              default: _withCtx(() => [...(_cache[10] || (_cache[10] = [
                _createTextVNode(" 这里只显示常用配置。完整设置（字体、贴图、标题映射等）仍可在插件设置页中调整。 ", -1)
              ]))]),
              _: 1
            }),
            _createVNode(_component_v_switch, {
              modelValue: form.enabled,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((form.enabled) = $event)),
              label: "启用插件",
              color: "primary",
              "hide-details": "",
              class: "mb-3"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_v_switch, {
              modelValue: form.update_now,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((form.update_now) = $event)),
              label: "保存后立即生成一次封面",
              color: "primary",
              "hide-details": "",
              class: "mb-4"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_v_text_field, {
              modelValue: form.cron,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((form.cron) = $event)),
              label: "定时生成 Cron（留空则不定时）",
              placeholder: "0 8 * * *",
              variant: "outlined",
              density: "compact",
              class: "mb-3"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_v_select, {
              modelValue: form.resolution,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((form.resolution) = $event)),
              items: ['480p', '720p', '1080p'],
              label: "封面分辨率",
              variant: "outlined",
              density: "compact",
              class: "mb-3"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_v_slider, {
              modelValue: form.animation_fps,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((form.animation_fps) = $event)),
              label: "动图帧率",
              min: 5,
              max: 30,
              step: "1",
              "thumb-label": "",
              class: "mb-2"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_v_slider, {
              modelValue: form.animation_duration,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((form.animation_duration) = $event)),
              label: "动图时长（秒）",
              min: 3,
              max: 30,
              step: "1",
              "thumb-label": "",
              class: "mb-3"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_v_slider, {
              modelValue: form.blur_size,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((form.blur_size) = $event)),
              label: "背景模糊",
              min: 0,
              max: 100,
              step: "1",
              "thumb-label": "",
              class: "mb-2"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_v_slider, {
              modelValue: form.color_ratio,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((form.color_ratio) = $event)),
              label: "色彩强度",
              min: 0,
              max: 1,
              step: "0.05",
              "thumb-label": "",
              class: "mb-4"
            }, null, 8, ["modelValue"]),
            _createElementVNode("div", _hoisted_2, [
              _createVNode(_component_v_btn, {
                color: "primary",
                "prepend-icon": "mdi-content-save",
                loading: saving.value,
                onClick: save
              }, {
                default: _withCtx(() => [...(_cache[11] || (_cache[11] = [
                  _createTextVNode("保存配置", -1)
                ]))]),
                _: 1
              }, 8, ["loading"]),
              _createVNode(_component_v_btn, {
                variant: "text",
                "prepend-icon": "mdi-refresh",
                onClick: load
              }, {
                default: _withCtx(() => [...(_cache[12] || (_cache[12] = [
                  _createTextVNode("重新载入", -1)
                ]))]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    _createVNode(_component_v_snackbar, {
      modelValue: toast.show,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((toast.show) = $event)),
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
const Config = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-1929b2b9"]]);

export { Config as default };
