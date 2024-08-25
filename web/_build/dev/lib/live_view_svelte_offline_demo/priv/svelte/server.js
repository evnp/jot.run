var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// js/server.js
var server_exports = {};
__export(server_exports, {
  render: () => render
});
module.exports = __toCommonJS(server_exports);

// import-glob:../svelte/**/*.svelte
var __exports = {};
__export(__exports, {
  default: () => __default,
  filenames: () => filenames
});

// svelte/AccountButton.svelte
var AccountButton_exports = {};
__export(AccountButton_exports, {
  default: () => AccountButton_default
});

// node_modules/svelte/src/runtime/internal/utils.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== "function") {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback of callbacks) {
      callback(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function compute_rest_props(props, keys2) {
  const rest = {};
  keys2 = new Set(keys2);
  for (const k in props)
    if (!keys2.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}

// node_modules/svelte/src/runtime/internal/globals.js
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);

// node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
var ResizeObserverSingleton = class {
  /**
   * @private
   * @readonly
   * @type {WeakMap<Element, import('./private.js').Listener>}
   */
  _listeners = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
  /**
   * @private
   * @type {ResizeObserver}
   */
  _observer = void 0;
  /** @type {ResizeObserverOptions} */
  options;
  /** @param {ResizeObserverOptions} options */
  constructor(options) {
    this.options = options;
  }
  /**
   * @param {Element} element
   * @param {import('./private.js').Listener} listener
   * @returns {() => void}
   */
  observe(element2, listener) {
    this._listeners.set(element2, listener);
    this._getObserver().observe(element2, this.options);
    return () => {
      this._listeners.delete(element2);
      this._observer.unobserve(element2);
    };
  }
  /**
   * @private
   */
  _getObserver() {
    return this._observer ?? (this._observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        ResizeObserverSingleton.entries.set(entry.target, entry);
        this._listeners.get(entry.target)?.(entry);
      }
    }));
  }
};
ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;

// node_modules/svelte/src/runtime/internal/dom.js
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function element(name) {
  return document.createElement(name);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach(
    /** @param {Element} node */
    (node) => {
      result[node.slot || "default"] = true;
    }
  );
  return result;
}

// node_modules/svelte/src/runtime/internal/lifecycle.js
var current_component;
function set_current_component(component) {
  current_component = component;
}

// node_modules/svelte/src/runtime/internal/each.js
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}

// node_modules/svelte/src/shared/boolean_attributes.js
var _boolean_attributes = (
  /** @type {const} */
  [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]
);
var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);

// node_modules/svelte/src/shared/utils/names.js
var void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}

// node_modules/svelte/src/runtime/internal/ssr.js
var invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
function spread(args2, attrs_to_add) {
  const attributes = Object.assign({}, ...args2);
  if (attrs_to_add) {
    const classes_to_add = attrs_to_add.classes;
    const styles_to_add = attrs_to_add.styles;
    if (classes_to_add) {
      if (attributes.class == null) {
        attributes.class = classes_to_add;
      } else {
        attributes.class += " " + classes_to_add;
      }
    }
    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(
          merge_ssr_styles(attributes.style, styles_to_add)
        );
      }
    }
  }
  let str = "";
  Object.keys(attributes).forEach((name) => {
    if (invalid_attribute_name_character.test(name))
      return;
    const value = attributes[name];
    if (value === true)
      str += " " + name;
    else if (boolean_attributes.has(name.toLowerCase())) {
      if (value)
        str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
  const style_object = {};
  for (const individual_style of style_attribute.split(";")) {
    const colon_index = individual_style.indexOf(":");
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name)
      continue;
    style_object[name] = value;
  }
  for (const name in style_directive) {
    const value = style_directive[name];
    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }
  return style_object;
}
var ATTR_REGEX = /[&"]/g;
var CONTENT_REGEX = /[&<]/g;
function escape2(value, is_attr = false) {
  const str = String(value);
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last2 = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last2, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last2 = i + 1;
  }
  return escaped + str.substring(last2);
}
function escape_attribute_value(value) {
  const should_escape = typeof value === "string" || value && typeof value === "object";
  return should_escape ? escape2(value, true) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key in obj) {
    result[key] = escape_attribute_value(obj[key]);
  }
  return result;
}
function each(items, fn) {
  items = ensure_array_like(items);
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css5) => css5.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape2(value, true)}"`;
  return ` ${name}${assignment}`;
}
function add_classes(classes) {
  return classes ? ` class="${classes}"` : "";
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter((key) => style_object[key]).map((key) => `${key}: ${escape_attribute_value(style_object[key])};`).join(" ");
}
function add_styles(style_object) {
  const styles = style_object_to_string(style_object);
  return styles ? ` style="${styles}"` : "";
}

// node_modules/svelte/src/runtime/internal/Component.js
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /** The Svelte component constructor */
    $$ctor;
    /** Slots */
    $$s;
    /** The Svelte component instance */
    $$c;
    /** Whether or not the custom element is connected */
    $$cn = false;
    /** Component props data */
    $$d = {};
    /** `true` if currently in the process of reflecting component props back to attributes */
    $$r = false;
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $$p_d = {};
    /** @type {Record<string, Function[]>} Event listeners */
    $$l = {};
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    $$l_u = /* @__PURE__ */ new Map();
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return () => {
            let node;
            const obj = {
              c: function create6() {
                node = element("slot");
                if (name !== "default") {
                  attr(node, "name", name);
                }
              },
              /**
               * @param {HTMLElement} target
               * @param {HTMLElement} [anchor]
               */
              m: function mount(target, anchor) {
                insert(target, node, anchor);
              },
              d: function destroy(detaching) {
                if (detaching) {
                  detach(node);
                }
              }
            };
            return obj;
          };
        };
        await Promise.resolve();
        if (!this.$$cn) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            $$slots[name] = [create_slot(name)];
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        this.$$c = new this.$$ctor({
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$scope: {
              ctx: []
            }
          }
        });
        const reflect_attributes = () => {
          this.$$r = true;
          for (const key in this.$$p_d) {
            this.$$d[key] = this.$$c.$$.ctx[this.$$c.$$.props[key]];
            if (this.$$p_d[key].reflect) {
              const attribute_value = get_custom_element_value(
                key,
                this.$$d[key],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key].attribute || key);
              } else {
                this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
              }
            }
          }
          this.$$r = false;
        };
        this.$$c.$$.after_update.push(reflect_attributes);
        reflect_attributes();
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    attributeChangedCallback(attr2, _oldValue, newValue) {
      if (this.$$r)
        return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      this.$$c?.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn) {
          this.$$c.$destroy();
          this.$$c = void 0;
        }
      });
    }
    $$g_p(attribute_name) {
      return Object.keys(this.$$p_d).find(
        (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop, value, props_definition, transform) {
  const type = props_definition[prop]?.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}

// node_modules/svelte/src/runtime/internal/dev.js
function validate_dynamic_element(tag) {
  const is_string = typeof tag === "string";
  if (tag && !is_string) {
    throw new Error('<svelte:element> expects "this" attribute to be a string.');
  }
}

// node_modules/lucide-svelte/dist/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var defaultAttributes_default = defaultAttributes;

// node_modules/lucide-svelte/dist/Icon.svelte
var Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0)
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes_default),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(`lucide-icon lucide lucide-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      validate_dynamic_element(tag$1);
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
var Icon_default = Icon;

// node_modules/lucide-svelte/dist/icons/arrow-left.svelte
var Arrow_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "arrow-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var arrow_left_default = Arrow_left;

// node_modules/lucide-svelte/dist/icons/check.svelte
var Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var check_default = Check;

// node_modules/lucide-svelte/dist/icons/chevron-down.svelte
var Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var chevron_down_default = Chevron_down;

// node_modules/lucide-svelte/dist/icons/chevron-right.svelte
var Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "chevron-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var chevron_right_default = Chevron_right;

// node_modules/lucide-svelte/dist/icons/chevron-up.svelte
var Chevron_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m18 15-6-6-6 6" }]];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "chevron-up" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var chevron_up_default = Chevron_up;

// node_modules/lucide-svelte/dist/icons/circle-alert.svelte
var Circle_alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "8",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12.01",
        "y1": "16",
        "y2": "16"
      }
    ]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "circle-alert" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var circle_alert_default = Circle_alert;

// node_modules/lucide-svelte/dist/icons/circle-check-big.svelte
var Circle_check_big = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14"
      }
    ],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "circle-check-big" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var circle_check_big_default = Circle_check_big;

// node_modules/lucide-svelte/dist/icons/circle-ellipsis.svelte
var Circle_ellipsis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M17 12h.01" }],
    ["path", { "d": "M12 12h.01" }],
    ["path", { "d": "M7 12h.01" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "circle-ellipsis" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var circle_ellipsis_default = Circle_ellipsis;

// node_modules/lucide-svelte/dist/icons/circle-x.svelte
var Circle_x = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "m15 9-6 6" }],
    ["path", { "d": "m9 9 6 6" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "circle-x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var circle_x_default = Circle_x;

// node_modules/lucide-svelte/dist/icons/grip-horizontal.svelte
var Grip_horizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "9", "r": "1" }],
    ["circle", { "cx": "19", "cy": "9", "r": "1" }],
    ["circle", { "cx": "5", "cy": "9", "r": "1" }],
    ["circle", { "cx": "12", "cy": "15", "r": "1" }],
    ["circle", { "cx": "19", "cy": "15", "r": "1" }],
    ["circle", { "cx": "5", "cy": "15", "r": "1" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "grip-horizontal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var grip_horizontal_default = Grip_horizontal;

// node_modules/lucide-svelte/dist/icons/info.svelte
var Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "info" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var info_default = Info;

// node_modules/lucide-svelte/dist/icons/laptop.svelte
var Laptop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
      }
    ]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "laptop" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var laptop_default = Laptop;

// node_modules/lucide-svelte/dist/icons/log-out.svelte
var Log_out = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      }
    ],
    ["polyline", { "points": "16 17 21 12 16 7" }],
    [
      "line",
      {
        "x1": "21",
        "x2": "9",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "log-out" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var log_out_default = Log_out;

// node_modules/lucide-svelte/dist/icons/moon.svelte
var Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var moon_default = Moon;

// node_modules/lucide-svelte/dist/icons/move-right.svelte
var Move_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M18 8L22 12L18 16" }], ["path", { "d": "M2 12H22" }]];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "move-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var move_right_default = Move_right;

// node_modules/lucide-svelte/dist/icons/pencil.svelte
var Pencil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
      }
    ],
    ["path", { "d": "m15 5 4 4" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "pencil" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var pencil_default = Pencil;

// node_modules/lucide-svelte/dist/icons/redo-2.svelte
var Redo_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m15 14 5-5-5-5" }],
    [
      "path",
      {
        "d": "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"
      }
    ]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "redo-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var redo_2_default = Redo_2;

// node_modules/lucide-svelte/dist/icons/refresh-cw.svelte
var Refresh_cw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
      }
    ],
    ["path", { "d": "M21 3v5h-5" }],
    [
      "path",
      {
        "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
      }
    ],
    ["path", { "d": "M8 16H3v5" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "refresh-cw" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var refresh_cw_default = Refresh_cw;

// node_modules/lucide-svelte/dist/icons/settings.svelte
var Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "settings" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var settings_default = Settings;

// node_modules/lucide-svelte/dist/icons/share-2.svelte
var Share_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "18", "cy": "5", "r": "3" }],
    ["circle", { "cx": "6", "cy": "12", "r": "3" }],
    ["circle", { "cx": "18", "cy": "19", "r": "3" }],
    [
      "line",
      {
        "x1": "8.59",
        "x2": "15.42",
        "y1": "13.51",
        "y2": "17.49"
      }
    ],
    [
      "line",
      {
        "x1": "15.41",
        "x2": "8.59",
        "y1": "6.51",
        "y2": "10.49"
      }
    ]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "share-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var share_2_default = Share_2;

// node_modules/lucide-svelte/dist/icons/sun.svelte
var Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "sun" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var sun_default = Sun;

// node_modules/lucide-svelte/dist/icons/swatch-book.svelte
var Swatch_book = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"
      }
    ],
    [
      "path",
      {
        "d": "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"
      }
    ],
    ["path", { "d": "M 7 17h0.01" }],
    [
      "path",
      {
        "d": "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
      }
    ]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "swatch-book" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var swatch_book_default = Swatch_book;

// node_modules/lucide-svelte/dist/icons/trash-2.svelte
var Trash_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      {
        "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
      }
    ],
    [
      "path",
      {
        "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "11",
        "y2": "17"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "11",
        "y2": "17"
      }
    ]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "trash-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var trash_2_default = Trash_2;

// node_modules/lucide-svelte/dist/icons/triangle-alert.svelte
var Triangle_alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
      }
    ],
    ["path", { "d": "M12 9v4" }],
    ["path", { "d": "M12 17h.01" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "triangle-alert" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var triangle_alert_default = Triangle_alert;

// node_modules/lucide-svelte/dist/icons/undo-2.svelte
var Undo_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M9 14 4 9l5-5" }],
    [
      "path",
      {
        "d": "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"
      }
    ]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "undo-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var undo_2_default = Undo_2;

// node_modules/lucide-svelte/dist/icons/user-round.svelte
var User_round = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "8", "r": "5" }],
    ["path", { "d": "M20 21a8 8 0 0 0-16 0" }]
  ];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "user-round" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var user_round_default = User_round;

// node_modules/lucide-svelte/dist/icons/x.svelte
var X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]];
  return `${validate_component(Icon_default, "Icon").$$render($$result, Object.assign({}, { name: "x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var x_default = X;

// lib/hooks/useIsConnected.ts
async function useIsConnected({
  pathname = "/",
  timeout = 5e3
}) {
  try {
    const url = new URL(`${window.location.origin}${pathname}`);
    url.searchParams.set("bypass_service_worker", Date.now().toString());
    const response = await fetch(url, {
      // Timeout to prevent excessive wait time.
      signal: AbortSignal.timeout(timeout)
    });
    return response.ok;
  } catch {
    return false;
  }
}

// lib/topbar/lib/events.ts
var LOADING_START_EVENT = "phx:page-loading-start";
var LOADING_STOP_EVENT = "phx:page-loading-stop";
function showTopBar() {
  window.dispatchEvent(new CustomEvent(LOADING_START_EVENT));
}
function hideTopBar() {
  window.dispatchEvent(new CustomEvent(LOADING_STOP_EVENT));
}

// node_modules/svelte/src/runtime/store/index.js
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}

// stores/clientOnlyState.ts
var isListsOpened = writable(true);
var isTodoOpened = writable(true);
var itemToProcessId = writable("");
var newList = writable("");
var newTodo = writable("");
var openedMenuId = writable("");
var selectedListId = writable("");
var urlHash = writable("");

// stores/toast.ts
var toast = writable({
  show: false,
  kind: "info",
  title: "",
  msg: ""
});

// svelte/DataClearer.svelte
var DataClearer_exports = {};
__export(DataClearer_exports, {
  clearUserData: () => clearUserData,
  default: () => DataClearer_default,
  indexedDBName: () => indexedDBName
});

// svelte/ServiceWorker.svelte
var ServiceWorker_exports = {};
__export(ServiceWorker_exports, {
  default: () => ServiceWorker_default,
  requestAssetDeletion: () => requestAssetDeletion
});

// node_modules/svelte/src/runtime/ssr.js
function onMount2() {
}

// lib/assets.ts
var privateAssets = ["/app"];
var publicAssets = [
  "/favicon.ico",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/browserconfig.xml",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/mstile-150x150.png",
  "/og.png",
  "/safari-pinned-tab.svg",
  "/screenshot-narrow-light.png",
  "/screenshot-narrow-dark.png",
  "/screenshot-wide-light.png",
  "/screenshot-wide-dark.png",
  "/site.webmanifest",
  // Note: This route should only be cached after login so that
  // DataClearer does not run.
  "/offline"
];

// svelte/ServiceWorker.svelte
function getAppJsAndCss() {
  const appJsScript = document.querySelector("script[phx-track-static]");
  const appJsUrl = new URL(appJsScript.src);
  const appJs = `${appJsUrl.pathname}${appJsUrl.search}`;
  const appCssLink = document.querySelector("link[phx-track-static]");
  const appCssUrl = new URL(appCssLink.href);
  const appCss = `${appCssUrl.pathname}${appCssUrl.search}`;
  return { appJs, appCss };
}
function requestAssetCaching(assets) {
  navigator.serviceWorker?.controller?.postMessage({
    type: "request_asset_caching",
    payload: { assets }
  });
}
function requestAssetDeletion(assets) {
  navigator.serviceWorker?.controller?.postMessage({
    type: "request_asset_deletion",
    payload: { assets }
  });
}
function requestServiceWorkerVersion() {
  navigator.serviceWorker?.controller?.postMessage({ type: "request_service_worker_version" });
}
var ServiceWorker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { serviceWorkerVersion } = $$props;
  onMount2(() => {
    navigator.serviceWorker?.addEventListener("message", (event) => {
      switch (event.data.type) {
        case "request_skip_waiting":
          window.location.reload();
          break;
        case "request_service_worker_version":
          serviceWorkerVersion = event.data.payload.serviceWorkerVersion;
          break;
        default:
          console.error("Unknown message type received from service worker.", event.data);
      }
    });
  });
  onMount2(() => {
    useIsConnected({ timeout: 1e4 }).then((isConnected) => {
      if (isConnected) {
        const { appJs, appCss } = getAppJsAndCss();
        requestAssetCaching([...privateAssets, ...publicAssets, appJs, appCss]);
      }
    });
  });
  onMount2(() => {
    requestServiceWorkerVersion();
  });
  if ($$props.serviceWorkerVersion === void 0 && $$bindings.serviceWorkerVersion && serviceWorkerVersion !== void 0)
    $$bindings.serviceWorkerVersion(serviceWorkerVersion);
  return ``;
});
var ServiceWorker_default = ServiceWorker;

// svelte/DataClearer.svelte
var indexedDBName = "ToDo";
function clearUserData() {
  localStorage.clear();
  sessionStorage.clear();
  requestAssetDeletion(privateAssets);
  const DBDeleteRequest = window.indexedDB.deleteDatabase(indexedDBName);
  DBDeleteRequest.onerror = () => {
    console.error("Error deleting database.");
  };
}
var DataClearer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { live = void 0 } = $$props;
  live;
  onMount2(() => {
    clearUserData();
  });
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  return ``;
});
var DataClearer_default = DataClearer;

// svelte/AccountButton.svelte
var accountMenuId = "account-menu-id";
var AccountButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openedMenuId, $$unsubscribe_openedMenuId;
  let $toast, $$unsubscribe_toast;
  let $urlHash, $$unsubscribe_urlHash;
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  validate_store(toast, "toast");
  $$unsubscribe_toast = subscribe(toast, (value) => $toast = value);
  validate_store(urlHash, "urlHash");
  $$unsubscribe_urlHash = subscribe(urlHash, (value) => $urlHash = value);
  let { currentUserEmail } = $$props;
  let { serviceWorkerVersion } = $$props;
  let { isClientStateRestored } = $$props;
  let { menuClass: menuClass2 } = $$props;
  let isLogOutLoading = false;
  let isSettingsLoading = false;
  let disabled = false;
  let focusFirstElement = false;
  function showAbout() {
    set_store_value(urlHash, $urlHash = "about", $urlHash);
    history.pushState({}, "", `/app#${$urlHash}`);
    window.scrollTo(0, 0);
  }
  async function showSettings() {
    disabled = true;
    isSettingsLoading = true;
    showTopBar();
    const isConnected = await useIsConnected({});
    if (!isConnected) {
      set_store_value(
        toast,
        $toast = {
          show: true,
          kind: "error",
          title: "Whoops, can't connect to server...",
          msg: "You must be connected to view settings. Please check your connection or try refreshing."
        },
        $toast
      );
      hideTopBar();
      isSettingsLoading = false;
      disabled = false;
      return;
    }
    set_store_value(openedMenuId, $openedMenuId = "", $openedMenuId);
    window.location.href = "/users/settings";
  }
  async function logOutUser() {
    disabled = true;
    isLogOutLoading = true;
    showTopBar();
    const isConnected = await useIsConnected({});
    if (!isConnected) {
      set_store_value(
        toast,
        $toast = {
          show: true,
          kind: "error",
          title: "Whoops, can't connect to server...",
          msg: "You must be connected to logout. Please check your connection or try refreshing."
        },
        $toast
      );
      hideTopBar();
      isLogOutLoading = false;
      disabled = false;
      return;
    }
    isClientStateRestored = false;
    clearUserData();
    const logOutLink = document.getElementById("log-out-link");
    try {
      logOutLink.click();
    } catch (error) {
      console.error(error);
      alert("Error logging out. Please try again.");
    }
  }
  if ($$props.currentUserEmail === void 0 && $$bindings.currentUserEmail && currentUserEmail !== void 0)
    $$bindings.currentUserEmail(currentUserEmail);
  if ($$props.serviceWorkerVersion === void 0 && $$bindings.serviceWorkerVersion && serviceWorkerVersion !== void 0)
    $$bindings.serviceWorkerVersion(serviceWorkerVersion);
  if ($$props.isClientStateRestored === void 0 && $$bindings.isClientStateRestored && isClientStateRestored !== void 0)
    $$bindings.isClientStateRestored(isClientStateRestored);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass2 !== void 0)
    $$bindings.menuClass(menuClass2);
  $: {
    if ($openedMenuId !== accountMenuId) {
      focusFirstElement = false;
    }
  }
  $$unsubscribe_openedMenuId();
  $$unsubscribe_toast();
  $$unsubscribe_urlHash();
  return `<div class="${escape2(menuClass2, true) + " relative"}"><button class="my-1 btn btn-circle btn-neutral focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " aria-label="Account Menu." title="Click to open account menu.">${validate_component(user_round_default, "UserRound").$$render($$result, {}, {}, {})}</button> ${$openedMenuId === accountMenuId ? `<div class="menu bg-base-200 border border-neutral rounded-box absolute right-0"><div class="px-4 py-2 font-bold border-b border-neutral rounded-none mb-1.5">${escape2(currentUserEmail)} <div title="Current service worker version." class="${["text-xs font-normal h-4", !serviceWorkerVersion ? "skeleton" : ""].join(" ").trim()}">${escape2(serviceWorkerVersion)}</div></div> <ul><li><a data-focusindex="0" class="flex gap-2 focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " href="/app#about">${validate_component(info_default, "Info").$$render($$result, { class: "h-4 w-4" }, {}, {})}
            About</a></li> <li><a data-focusindex="1" class="${[
    "flex gap-2 focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ",
    disabled ? "pointer-events-none" : ""
  ].join(" ").trim()}" href="/users/settings">${validate_component(settings_default, "Settings").$$render($$result, { class: "h-4 w-4" }, {}, {})}
            Settings
            <span class="${["loading loading-dots loading-xs", !isSettingsLoading ? "hidden" : ""].join(" ").trim()}"></span></a></li> <li><button data-focusindex="2" class="flex gap-2 focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " ${disabled ? "disabled" : ""}>${validate_component(log_out_default, "LogOut").$$render($$result, { class: "h-4 w-4" }, {}, {})}
            Log out
            <span class="${["loading loading-dots loading-xs", !isLogOutLoading ? "hidden" : ""].join(" ").trim()}"></span></button></li></ul></div>` : ``}</div>`;
});
var AccountButton_default = AccountButton;

// svelte/App.svelte
var App_exports = {};
__export(App_exports, {
  default: () => App_default
});

// svelte/AppInfo.svelte
var AppInfo_exports = {};
__export(AppInfo_exports, {
  default: () => AppInfo_default
});

// node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var faGithub = {
  prefix: "fab",
  iconName: "github",
  icon: [496, 512, [], "f09b", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]
};

// node_modules/svelte-fa/dist/utils.js
function setCustomFontSize(element2, size) {
  if (size && size !== "lg" && size !== "sm" && size !== "xs") {
    element2.style.fontSize = size.replace("x", "em");
  } else {
    element2.style.fontSize = "";
  }
}
function getTransform(scale2, translateX, translateY, rotate, flip2, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip2) {
    if (flip2 == "horizontal") {
      flipX = -1;
    } else if (flip2 == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  if (typeof scale2 === "string") {
    scale2 = parseFloat(scale2);
  }
  if (typeof translateX === "string") {
    translateX = parseFloat(translateX);
  }
  if (typeof translateY === "string") {
    translateY = parseFloat(translateY);
  }
  const x = `${translateX * translateTimes}${translateUnit}`;
  const y = `${translateY * translateTimes}${translateUnit}`;
  let output = `translate(${x},${y}) scale(${flipX * scale2},${flipY * scale2})`;
  if (rotate) {
    output += ` rotate(${rotate}${rotateUnit})`;
  }
  return output;
}

// node_modules/svelte-fa/dist/fa.svelte
var css = {
  code: ".svelte-fa-base{height:1em;overflow:visible;transform-origin:center;vertical-align:-0.125em}.svelte-fa-fw{text-align:center;width:1.25em}.svelte-fa-pull-left.svelte-bvo74f{float:left}.svelte-fa-pull-right.svelte-bvo74f{float:right}.svelte-fa-size-lg.svelte-bvo74f{font-size:1.33333em;line-height:0.75em;vertical-align:-0.225em}.svelte-fa-size-sm.svelte-bvo74f{font-size:0.875em}.svelte-fa-size-xs.svelte-bvo74f{font-size:0.75em}.spin.svelte-bvo74f{animation:svelte-bvo74f-spin 2s 0s infinite linear}.pulse.svelte-bvo74f{animation:svelte-bvo74f-spin 1s infinite steps(8)}@keyframes svelte-bvo74f-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"fa.svelte","sources":["fa.svelte"],"sourcesContent":["<script>import { getTransform, setCustomFontSize } from \\"./utils.js\\";\\nlet clazz = void 0;\\nexport { clazz as class };\\nexport let id = void 0;\\nexport let style = void 0;\\nexport let icon;\\nexport let size = void 0;\\nexport let color = void 0;\\nexport let fw = false;\\nexport let pull = void 0;\\nexport let scale = 1;\\nexport let translateX = 0;\\nexport let translateY = 0;\\nexport let rotate = void 0;\\nexport let flip = void 0;\\nexport let spin = false;\\nexport let pulse = false;\\nexport let primaryColor = \\"\\";\\nexport let secondaryColor = \\"\\";\\nexport let primaryOpacity = 1;\\nexport let secondaryOpacity = 0.4;\\nexport let swapOpacity = false;\\nlet svgElement;\\n$:\\n  svgElement && size && setCustomFontSize(svgElement, size);\\n$:\\n  i = icon && icon.icon || [0, 0, \\"\\", [], \\"\\"];\\n$:\\n  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);\\n</script>\\n\\n{#if i[4]}\\n  <!-- eslint-disable svelte/no-inline-styles -- Only styles passed to this component should be included -->\\n  <svg\\n    {id}\\n    class=\\"svelte-fa svelte-fa-base {clazz}\\"\\n    class:pulse\\n    class:svelte-fa-size-lg={size === \\"lg\\"}\\n    class:svelte-fa-size-sm={size === \\"sm\\"}\\n    class:svelte-fa-size-xs={size === \\"xs\\"}\\n    class:svelte-fa-fw={fw}\\n    class:svelte-fa-pull-left={pull === \\"left\\"}\\n    class:svelte-fa-pull-right={pull === \\"right\\"}\\n    class:spin\\n    bind:this={svgElement}\\n    {style}\\n    viewBox=\\"0 0 {i[0]} {i[1]}\\"\\n    aria-hidden=\\"true\\"\\n    role=\\"img\\"\\n    xmlns=\\"http://www.w3.org/2000/svg\\"\\n  >\\n    <!-- eslint-enable -->\\n    <g transform=\\"translate({i[0] / 2} {i[1] / 2})\\" transform-origin=\\"{i[0] / 4} 0\\">\\n      <g {transform}>\\n        {#if typeof i[4] == \\"string\\"}\\n          <path\\n            d={i[4]}\\n            fill={color || primaryColor || \\"currentColor\\"}\\n            transform=\\"translate({i[0] / -2} {i[1] / -2})\\"\\n          />\\n        {:else}\\n          <!-- Duotone icons -->\\n          <path\\n            d={i[4][0]}\\n            fill={secondaryColor || color || \\"currentColor\\"}\\n            fill-opacity={swapOpacity != false ? primaryOpacity : secondaryOpacity}\\n            transform=\\"translate({i[0] / -2} {i[1] / -2})\\"\\n          />\\n          <path\\n            d={i[4][1]}\\n            fill={primaryColor || color || \\"currentColor\\"}\\n            fill-opacity={swapOpacity != false ? secondaryOpacity : primaryOpacity}\\n            transform=\\"translate({i[0] / -2} {i[1] / -2})\\"\\n          />\\n        {/if}\\n      </g>\\n    </g>\\n  </svg>\\n{/if}\\n\\n<style>\\n  :global(.svelte-fa-base) {\\n    height: 1em;\\n    overflow: visible;\\n    transform-origin: center;\\n    vertical-align: -0.125em;\\n  }\\n\\n  :global(.svelte-fa-fw) {\\n    text-align: center;\\n    width: 1.25em;\\n  }\\n\\n  .svelte-fa-pull-left {\\n    float: left;\\n  }\\n\\n  .svelte-fa-pull-right {\\n    float: right;\\n  }\\n\\n  .svelte-fa-size-lg {\\n    font-size: 1.33333em;\\n    line-height: 0.75em;\\n    vertical-align: -0.225em;\\n  }\\n\\n  .svelte-fa-size-sm {\\n    font-size: 0.875em;\\n  }\\n\\n  .svelte-fa-size-xs {\\n    font-size: 0.75em;\\n  }\\n\\n  .spin {\\n    animation: spin 2s 0s infinite linear;\\n  }\\n\\n  .pulse {\\n    animation: spin 1s infinite steps(8);\\n  }\\n\\n  @keyframes spin {\\n    0% {\\n      transform: rotate(0deg);\\n    }\\n    100% {\\n      transform: rotate(360deg);\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiFU,eAAiB,CACvB,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,OAAO,CACjB,gBAAgB,CAAE,MAAM,CACxB,cAAc,CAAE,QAClB,CAEQ,aAAe,CACrB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,MACT,CAEA,kCAAqB,CACnB,KAAK,CAAE,IACT,CAEA,mCAAsB,CACpB,KAAK,CAAE,KACT,CAEA,gCAAmB,CACjB,SAAS,CAAE,SAAS,CACpB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,QAClB,CAEA,gCAAmB,CACjB,SAAS,CAAE,OACb,CAEA,gCAAmB,CACjB,SAAS,CAAE,MACb,CAEA,mBAAM,CACJ,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,EAAE,CAAC,QAAQ,CAAC,MACjC,CAEA,oBAAO,CACL,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAAC,CACrC,CAEA,WAAW,kBAAK,CACd,EAAG,CACD,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,IAAK,CACH,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF"}'
};
var Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let i;
  let transform;
  let { class: clazz = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { style = void 0 } = $$props;
  let { icon } = $$props;
  let { size = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { fw = false } = $$props;
  let { pull = void 0 } = $$props;
  let { scale: scale2 = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = void 0 } = $$props;
  let { flip: flip2 = void 0 } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let svgElement;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id2 !== void 0)
    $$bindings.id(id2);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale2 !== void 0)
    $$bindings.scale(scale2);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip2 !== void 0)
    $$bindings.flip(flip2);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css);
  svgElement && size && setCustomFontSize(svgElement, size);
  i = icon && icon.icon || [0, 0, "", [], ""];
  transform = getTransform(scale2, translateX, translateY, rotate, flip2, 512);
  return `${i[4] ? ` <svg${add_attribute("id", id2, 0)} class="${[
    "svelte-fa svelte-fa-base " + escape2(clazz, true) + " svelte-bvo74f",
    (pulse ? "pulse" : "") + " " + (size === "lg" ? "svelte-fa-size-lg" : "") + " " + (size === "sm" ? "svelte-fa-size-sm" : "") + " " + (size === "xs" ? "svelte-fa-size-xs" : "") + " " + (fw ? "svelte-fa-fw" : "") + " " + (pull === "left" ? "svelte-fa-pull-left" : "") + " " + (pull === "right" ? "svelte-fa-pull-right" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", style, 0)} viewBox="${"0 0 " + escape2(i[0], true) + " " + escape2(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"${add_attribute("this", svgElement, 0)}><g transform="${"translate(" + escape2(i[0] / 2, true) + " " + escape2(i[1] / 2, true) + ")"}" transform-origin="${escape2(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape2(i[0] / -2, true) + " " + escape2(i[1] / -2, true) + ")"}"></path>` : ` <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape2(i[0] / -2, true) + " " + escape2(i[1] / -2, true) + ")"}"></path> <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape2(i[0] / -2, true) + " " + escape2(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
var fa_default = Fa;

// node_modules/svelte-fa/dist/fa-layers.svelte
var css2 = {
  code: ".svelte-fa-layers.svelte-1sinijc{display:inline-block;position:relative}.svelte-fa-layers.svelte-1sinijc .svelte-fa{position:absolute;bottom:0;left:0;right:0;top:0;margin:auto;text-align:center}.svelte-fa-layers.svelte-1sinijc .svelte-fa-layers-text{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.svelte-fa-layers.svelte-1sinijc .svelte-fa-layers-text span{display:inline-block}.svelte-fa-pull-left.svelte-1sinijc{float:left}.svelte-fa-pull-right.svelte-1sinijc{float:right}.svelte-fa-size-lg.svelte-1sinijc{font-size:1.33333em;line-height:0.75em;vertical-align:-0.225em}.svelte-fa-size-sm.svelte-1sinijc{font-size:0.875em}.svelte-fa-size-xs.svelte-1sinijc{font-size:0.75em}",
  map: '{"version":3,"file":"fa-layers.svelte","sources":["fa-layers.svelte"],"sourcesContent":["<script>import { setCustomFontSize } from \\"./utils.js\\";\\nlet clazz = void 0;\\nexport { clazz as class };\\nexport let id = void 0;\\nexport let style = void 0;\\nexport let size = void 0;\\nexport let pull = void 0;\\nlet containerElement;\\n$:\\n  containerElement && size && setCustomFontSize(containerElement, size);\\n</script>\\n\\n<!-- eslint-disable svelte/no-inline-styles -- Only styles passed to this component should be included -->\\n<span\\n  {id}\\n  class=\\"svelte-fa-layers svelte-fa-base svelte-fa-fw {clazz}\\"\\n  class:svelte-fa-pull-left={pull === \\"left\\"}\\n  class:svelte-fa-pull-right={pull === \\"right\\"}\\n  class:svelte-fa-size-lg={size === \\"lg\\"}\\n  class:svelte-fa-size-sm={size === \\"sm\\"}\\n  class:svelte-fa-size-xs={size === \\"xs\\"}\\n  bind:this={containerElement}\\n  {style}\\n>\\n  <!-- eslint-enable -->\\n  <slot />\\n</span>\\n\\n<style>\\n  .svelte-fa-layers {\\n    display: inline-block;\\n    position: relative;\\n  }\\n\\n  .svelte-fa-layers :global(.svelte-fa) {\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    top: 0;\\n    margin: auto;\\n    text-align: center;\\n  }\\n\\n  .svelte-fa-layers :global(.svelte-fa-layers-text) {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n  }\\n\\n  .svelte-fa-layers :global(.svelte-fa-layers-text span) {\\n    display: inline-block;\\n  }\\n\\n  .svelte-fa-pull-left {\\n    float: left;\\n  }\\n\\n  .svelte-fa-pull-right {\\n    float: right;\\n  }\\n\\n  .svelte-fa-size-lg {\\n    font-size: 1.33333em;\\n    line-height: 0.75em;\\n    vertical-align: -0.225em;\\n  }\\n\\n  .svelte-fa-size-sm {\\n    font-size: 0.875em;\\n  }\\n\\n  .svelte-fa-size-xs {\\n    font-size: 0.75em;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA6BE,gCAAkB,CAChB,OAAO,CAAE,YAAY,CACrB,QAAQ,CAAE,QACZ,CAEA,gCAAiB,CAAS,UAAY,CACpC,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,GAAG,CAAE,CAAC,CACN,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,MACd,CAEA,gCAAiB,CAAS,sBAAwB,CAChD,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CACjC,CAEA,gCAAiB,CAAS,2BAA6B,CACrD,OAAO,CAAE,YACX,CAEA,mCAAqB,CACnB,KAAK,CAAE,IACT,CAEA,oCAAsB,CACpB,KAAK,CAAE,KACT,CAEA,iCAAmB,CACjB,SAAS,CAAE,SAAS,CACpB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,QAClB,CAEA,iCAAmB,CACjB,SAAS,CAAE,OACb,CAEA,iCAAmB,CACjB,SAAS,CAAE,MACb"}'
};
var Fa_layers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { style = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { pull = void 0 } = $$props;
  let containerElement;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id2 !== void 0)
    $$bindings.id(id2);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  $$result.css.add(css2);
  containerElement && size && setCustomFontSize(containerElement, size);
  return ` <span${add_attribute("id", id2, 0)} class="${[
    "svelte-fa-layers svelte-fa-base svelte-fa-fw " + escape2(clazz, true) + " svelte-1sinijc",
    (pull === "left" ? "svelte-fa-pull-left" : "") + " " + (pull === "right" ? "svelte-fa-pull-right" : "") + " " + (size === "lg" ? "svelte-fa-size-lg" : "") + " " + (size === "sm" ? "svelte-fa-size-sm" : "") + " " + (size === "xs" ? "svelte-fa-size-xs" : "")
  ].join(" ").trim()}"${add_attribute("style", style, 0)}${add_attribute("this", containerElement, 0)}> ${slots.default ? slots.default({}) : ``} </span>`;
});

// node_modules/svelte-fa/dist/fa-layers-text.svelte
var css3 = {
  code: ".container.svelte-1x0c3df{display:inline-block;height:auto}.svelte-fa-size-lg.svelte-1x0c3df{font-size:1.33333em;line-height:0.75em;vertical-align:-0.225em}.svelte-fa-size-sm.svelte-1x0c3df{font-size:0.875em}.svelte-fa-size-xs.svelte-1x0c3df{font-size:0.75em}",
  map: '{"version":3,"file":"fa-layers-text.svelte","sources":["fa-layers-text.svelte"],"sourcesContent":["<script>import { getTransform, setCustomFontSize } from \\"./utils.js\\";\\nlet clazz = void 0;\\nexport { clazz as class };\\nexport let id = void 0;\\nexport let style = void 0;\\nexport let size = void 0;\\nexport let color = \\"\\";\\nexport let scale = 1;\\nexport let translateX = 0;\\nexport let translateY = 0;\\nexport let rotate = void 0;\\nexport let flip = void 0;\\nlet containerElement;\\n$:\\n  containerElement && size && setCustomFontSize(containerElement, size);\\n$:\\n  containerElement && color && (containerElement.style.color = color);\\n$:\\n  transform = getTransform(scale, translateX, translateY, rotate, flip, 1, \\"em\\", \\"deg\\");\\n$:\\n  containerElement && transform && (containerElement.style.transform = transform);\\n</script>\\n\\n<span {id} class=\\"svelte-fa-layers-text {clazz}\\">\\n  <!-- eslint-disable svelte/no-inline-styles -- Only styles passed to this component should be included -->\\n  <span\\n    class=\\"svelte-fa-base container\\"\\n    class:svelte-fa-size-lg={size === \\"lg\\"}\\n    class:svelte-fa-size-sm={size === \\"sm\\"}\\n    class:svelte-fa-size-xs={size === \\"xs\\"}\\n    bind:this={containerElement}\\n    {style}\\n  >\\n    <!-- eslint-enable -->\\n    <slot />\\n  </span>\\n</span>\\n\\n<style>\\n  .container {\\n    display: inline-block;\\n    height: auto;\\n  }\\n\\n  .svelte-fa-size-lg {\\n    font-size: 1.33333em;\\n    line-height: 0.75em;\\n    vertical-align: -0.225em;\\n  }\\n\\n  .svelte-fa-size-sm {\\n    font-size: 0.875em;\\n  }\\n\\n  .svelte-fa-size-xs {\\n    font-size: 0.75em;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAuCE,yBAAW,CACT,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,IACV,CAEA,iCAAmB,CACjB,SAAS,CAAE,SAAS,CACpB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,QAClB,CAEA,iCAAmB,CACjB,SAAS,CAAE,OACb,CAEA,iCAAmB,CACjB,SAAS,CAAE,MACb"}'
};
var Fa_layers_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let transform;
  let { class: clazz = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { style = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { color = "" } = $$props;
  let { scale: scale2 = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = void 0 } = $$props;
  let { flip: flip2 = void 0 } = $$props;
  let containerElement;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id2 !== void 0)
    $$bindings.id(id2);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.scale === void 0 && $$bindings.scale && scale2 !== void 0)
    $$bindings.scale(scale2);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip2 !== void 0)
    $$bindings.flip(flip2);
  $$result.css.add(css3);
  containerElement && color && (containerElement.style.color = color);
  transform = getTransform(scale2, translateX, translateY, rotate, flip2, 1, "em", "deg");
  containerElement && transform && (containerElement.style.transform = transform);
  containerElement && size && setCustomFontSize(containerElement, size);
  return `<span${add_attribute("id", id2, 0)} class="${"svelte-fa-layers-text " + escape2(clazz, true) + " svelte-1x0c3df"}"> <span class="${[
    "svelte-fa-base container svelte-1x0c3df",
    (size === "lg" ? "svelte-fa-size-lg" : "") + " " + (size === "sm" ? "svelte-fa-size-sm" : "") + " " + (size === "xs" ? "svelte-fa-size-xs" : "")
  ].join(" ").trim()}"${add_attribute("style", style, 0)}${add_attribute("this", containerElement, 0)}> ${slots.default ? slots.default({}) : ``}</span> </span>`;
});

// node_modules/svelte-fa/dist/index.js
var dist_default = fa_default;

// svelte/Link.svelte
var Link_exports = {};
__export(Link_exports, {
  default: () => Link_default
});
var Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { external = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  return `<a${add_attribute("href", href, 0)}${add_attribute("target", external ? "_blank" : void 0, 0)}${add_attribute("rel", external ? "noopener noreferrer" : void 0, 0)} class="font-semibold underline underline-offset-4 hover:no-underline rounded focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ">${slots.default ? slots.default({}) : ``}</a>`;
});
var Link_default = Link;

// svelte/AppInfo.svelte
var AppInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { live = void 0 } = $$props;
  live;
  let { showAuthLinks = false } = $$props;
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  if ($$props.showAuthLinks === void 0 && $$bindings.showAuthLinks && showAuthLinks !== void 0)
    $$bindings.showAuthLinks(showAuthLinks);
  return `<div class="max-w-md mx-auto px-4 md:p-0"><h1 class="text-5xl font-black my-5" data-svelte-h="svelte-14zpjxm">Local-First LiveView Svelte ToDo App</h1> <p>This to-do app is a demo of an installable
    ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://www.phoenixframework.org/",
      external: true
    },
    {},
    {
      default: () => {
        return `Phoenix`;
      }
    }
  )}
    Progressive Web App (${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
      external: true
    },
    {},
    {
      default: () => {
        return `PWA`;
      }
    }
  )}) that can sync real-time across multiple devices while also being able to work locally
    offline.</p> <h2 class="text-3xl font-bold my-3" data-svelte-h="svelte-1fpbgn0">Video Walkthrough</h2> <iframe class="w-full aspect-video my-6" src="https://www.youtube.com/embed/PX9-lq0LL9Q?si=xdd3inTC72OvVV0G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> ${showAuthLinks ? `<h2 class="text-3xl font-bold my-3" data-svelte-h="svelte-179z0bx">Try it out</h2> <ul class="flex gap-2"><li><a${add_attribute("href", "/users/register", 0)} class="btn btn-accent border border-neutral" data-svelte-h="svelte-17q6svo">Register</a></li> <li><a${add_attribute("href", "/users/log_in", 0)} class="btn btn-accent border border-neutral" data-svelte-h="svelte-r5fsav">Log in</a></li></ul>` : ``} <div class="my-6"><h2 class="text-3xl font-bold my-3" data-svelte-h="svelte-12kmvz6">Technologies used</h2> <ul class="list-disc pl-4"><li>Phoenix
        ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://github.com/phoenixframework/phoenix_live_view",
      external: true
    },
    {},
    {
      default: () => {
        return `LiveView`;
      }
    }
  )},
        ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://hexdocs.pm/phoenix/channels.html#pubsub",
      external: true
    },
    {},
    {
      default: () => {
        return `PubSub`;
      }
    }
  )}, and
        ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://github.com/elixir-ecto/ecto/tree/v3.11.1",
      external: true
    },
    {},
    {
      default: () => {
        return `Ecto`;
      }
    }
  )}/${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://www.postgresql.org/",
      external: true
    },
    {},
    {
      default: () => {
        return `PostgreSQL`;
      }
    }
  )} for real-time syncing and data persistence.</li> <li>${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://svelte.dev/",
      external: true
    },
    {},
    {
      default: () => {
        return `Svelte`;
      }
    }
  )}
        (via ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://github.com/woutdp/live_svelte",
      external: true
    },
    {},
    {
      default: () => {
        return `live_svelte`;
      }
    }
  )}) for the
        frontend UI and state management.</li> <li>${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",
      external: true
    },
    {},
    {
      default: () => {
        return `Service Workers`;
      }
    }
  )},
        ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
      external: true
    },
    {},
    {
      default: () => {
        return `Web Storage`;
      }
    }
  )}, and
        ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",
      external: true
    },
    {},
    {
      default: () => {
        return `IndexedDB`;
      }
    }
  )}
        (via ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://github.com/yjs/y-indexeddb",
      external: true
    },
    {},
    {
      default: () => {
        return `y-indexeddb`;
      }
    }
  )}) for
        offline support.</li> <li>${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://crdt.tech/",
      external: true
    },
    {},
    {
      default: () => {
        return `CRDTs`;
      }
    }
  )}
        (via ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://github.com/yjs/yjs",
      external: true
    },
    {},
    {
      default: () => {
        return `Yjs`;
      }
    }
  )}) to resolve conflicts
        between distributed app states.</li></ul></div> <div class="my-6"><h2 class="text-3xl font-bold my-3" data-svelte-h="svelte-ix4mde">Inspired by</h2> <ul class="list-disc pl-4"><li>Wout De Puysseleir -
        ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://www.youtube.com/watch?v=JMkvbW35QvA",
      external: true
    },
    {},
    {
      default: () => {
        return `LiveSvelte - Render Svelte directly into Phoenix LiveView with E2E reactivity.`;
      }
    }
  )}</li> <li>Ryan Cooke -
        ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://www.youtube.com/watch?v=asm2TTm035o",
      external: true
    },
    {},
    {
      default: () => {
        return `E2E Reactivity - using Svelte with Phoenix LiveView`;
      }
    }
  )}</li> <li>Daniils Petrovs -
        ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://speakerdeck.com/danirukun/svelte-hololive-fan-booth-project",
      external: true
    },
    {},
    {
      default: () => {
        return `SvelteKit: From landing page to offline PWAs`;
      }
    }
  )}</li></ul></div> <div class="my-6"><h2 class="text-3xl font-bold my-3" data-svelte-h="svelte-pezf5j">Contact</h2>

    Created by
    ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "https://tonydang.blog",
      external: true
    },
    {},
    {
      default: () => {
        return `Tony Dang`;
      }
    }
  )}. Please feel free send any
    questions or feedback to
    ${validate_component(Link_default, "Link").$$render(
    $$result,
    {
      href: "mailto:tony@tonydang.blog",
      external: true
    },
    {},
    {
      default: () => {
        return `tony@tonydang.blog`;
      }
    }
  )}.</div> <div class="my-6"><h2 class="text-3xl font-bold my-3" data-svelte-h="svelte-don52t">Source Code</h2> <a href="https://github.com/tonydangblog/liveview-svelte-pwa" aria-label="Github" target="_blank" rel="noopener noreferrer" class="inline-block hover:opacity-75 rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ">${validate_component(dist_default, "Fa").$$render($$result, { icon: faGithub, size: "3x" }, {}, {})}</a></div></div>`;
});
var AppInfo_default = AppInfo;

// svelte/AppSkeleton.svelte
var AppSkeleton_exports = {};
__export(AppSkeleton_exports, {
  default: () => AppSkeleton_default
});
var AppSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-screen h-screen max-w-2xl mx-auto flex flex-col px-2 md:p-0"><div class="flex justify-between mt-3 mb-2"><div class="skeleton w-1/3 h-12"></div> <div class="flex gap-2"><div class="skeleton w-12 h-12 rounded-full shrink-0"></div> <div class="skeleton w-12 h-12 rounded-full shrink-0"></div></div></div> <div class="skeleton w-full h-16 mb-3"></div> <div class="skeleton w-full h-full mb-3"></div></div>`;
});
var AppSkeleton_default = AppSkeleton;

// svelte/ClickOutsideClassHandler.svelte
var ClickOutsideClassHandler_exports = {};
__export(ClickOutsideClassHandler_exports, {
  default: () => ClickOutsideClassHandler_default
});
var ClickOutsideClassHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  let { callbackFunction } = $$props;
  function clickOutsideClassHandler(event) {
    if (!(event.target instanceof Node))
      return;
    const elementsToIgnore = document.getElementsByClassName(className);
    for (const element2 of elementsToIgnore) {
      if (element2.contains(event.target)) {
        return;
      }
    }
    callbackFunction(event);
  }
  onMount2(() => {
    document.documentElement.addEventListener("click", clickOutsideClassHandler);
    return () => {
      document.documentElement.removeEventListener("click", clickOutsideClassHandler);
    };
  });
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.callbackFunction === void 0 && $$bindings.callbackFunction && callbackFunction !== void 0)
    $$bindings.callbackFunction(callbackFunction);
  return ``;
});
var ClickOutsideClassHandler_default = ClickOutsideClassHandler;

// svelte/ClientOnlyStateManagement.svelte
var ClientOnlyStateManagement_exports = {};
__export(ClientOnlyStateManagement_exports, {
  default: () => ClientOnlyStateManagement_default,
  getParsedValueFromLocalStorage: () => getParsedValueFromLocalStorage,
  getParsedValueFromSessionStorage: () => getParsedValueFromSessionStorage
});
function getParsedValueFromLocalStorage(key, expectedType, defaultValue) {
  const jsonString = localStorage.getItem(key);
  return getParsedValueFromJsonString(jsonString, expectedType, defaultValue);
}
function getParsedValueFromSessionStorage(key, expectedType, defaultValue) {
  const jsonString = sessionStorage.getItem(key);
  return getParsedValueFromJsonString(jsonString, expectedType, defaultValue);
}
function getParsedValueFromJsonString(jsonString, expectedType, defaultValue) {
  if (!jsonString)
    return defaultValue;
  try {
    const parsedValue = JSON.parse(jsonString);
    return typeof parsedValue === expectedType ? parsedValue : defaultValue;
  } catch {
    return defaultValue;
  }
}
var ClientOnlyStateManagement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openedMenuId, $$unsubscribe_openedMenuId;
  let $newTodo, $$unsubscribe_newTodo;
  let $newList, $$unsubscribe_newList;
  let $itemToProcessId, $$unsubscribe_itemToProcessId;
  let $isTodoOpened, $$unsubscribe_isTodoOpened;
  let $isListsOpened, $$unsubscribe_isListsOpened;
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  validate_store(newTodo, "newTodo");
  $$unsubscribe_newTodo = subscribe(newTodo, (value) => $newTodo = value);
  validate_store(newList, "newList");
  $$unsubscribe_newList = subscribe(newList, (value) => $newList = value);
  validate_store(itemToProcessId, "itemToProcessId");
  $$unsubscribe_itemToProcessId = subscribe(itemToProcessId, (value) => $itemToProcessId = value);
  validate_store(isTodoOpened, "isTodoOpened");
  $$unsubscribe_isTodoOpened = subscribe(isTodoOpened, (value) => $isTodoOpened = value);
  validate_store(isListsOpened, "isListsOpened");
  $$unsubscribe_isListsOpened = subscribe(isListsOpened, (value) => $isListsOpened = value);
  let { isClientStateRestored } = $$props;
  onMount2(() => {
    set_store_value(isListsOpened, $isListsOpened = getParsedValueFromSessionStorage("isListsOpened", "boolean", $isListsOpened), $isListsOpened);
    set_store_value(isTodoOpened, $isTodoOpened = getParsedValueFromSessionStorage("isTodoOpened", "boolean", $isTodoOpened), $isTodoOpened);
    set_store_value(itemToProcessId, $itemToProcessId = getParsedValueFromSessionStorage("itemToProcessId", "string", $itemToProcessId), $itemToProcessId);
    set_store_value(newList, $newList = getParsedValueFromSessionStorage("newList", "string", $newList), $newList);
    set_store_value(newTodo, $newTodo = getParsedValueFromSessionStorage("newTodo", "string", $newTodo), $newTodo);
    set_store_value(openedMenuId, $openedMenuId = getParsedValueFromSessionStorage("openedMenuId", "string", $openedMenuId), $openedMenuId);
    isClientStateRestored = true;
  });
  if ($$props.isClientStateRestored === void 0 && $$bindings.isClientStateRestored && isClientStateRestored !== void 0)
    $$bindings.isClientStateRestored(isClientStateRestored);
  $: {
    if (isClientStateRestored) {
      sessionStorage.setItem("isListsOpened", JSON.stringify($isListsOpened));
      sessionStorage.setItem("isTodoOpened", JSON.stringify($isTodoOpened));
      sessionStorage.setItem("itemToProcessId", JSON.stringify($itemToProcessId));
      sessionStorage.setItem("newList", JSON.stringify($newList));
      sessionStorage.setItem("newTodo", JSON.stringify($newTodo));
      sessionStorage.setItem("openedMenuId", JSON.stringify($openedMenuId));
    }
  }
  $$unsubscribe_openedMenuId();
  $$unsubscribe_newTodo();
  $$unsubscribe_newList();
  $$unsubscribe_itemToProcessId();
  $$unsubscribe_isTodoOpened();
  $$unsubscribe_isListsOpened();
  return ``;
});
var ClientOnlyStateManagement_default = ClientOnlyStateManagement;

// svelte/Header.svelte
var Header_exports = {};
__export(Header_exports, {
  default: () => Header_default
});

// svelte/SessionsBadge.svelte
var SessionsBadge_exports = {};
__export(SessionsBadge_exports, {
  default: () => SessionsBadge_default
});

// stores/liveViewSocket.ts
var liveView = writable();
var serverDocument = writable();
var sessionCount = writable();

// stores/syncState.ts
var syncState = writable("Not Synced");
window.addEventListener("phx-disconnected", () => {
  syncState.set("Not Synced");
});

// svelte/SessionsBadge.svelte
var SessionsBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sessionCount, $$unsubscribe_sessionCount;
  let $syncState, $$unsubscribe_syncState;
  validate_store(sessionCount, "sessionCount");
  $$unsubscribe_sessionCount = subscribe(sessionCount, (value) => $sessionCount = value);
  validate_store(syncState, "syncState");
  $$unsubscribe_syncState = subscribe(syncState, (value) => $syncState = value);
  $$unsubscribe_sessionCount();
  $$unsubscribe_syncState();
  return `${$sessionCount && $syncState === "Synced" ? `<div id="sessions-badge" title="Number of active sessions." class="badge badge-xs transition-none p-2">${escape2($sessionCount)} Session${escape2($sessionCount > 1 ? "s" : "")}</div>` : ``}`;
});
var SessionsBadge_default = SessionsBadge;

// svelte/ShareButton.svelte
var ShareButton_exports = {};
__export(ShareButton_exports, {
  default: () => ShareButton_default
});
var ShareButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let message;
  async function copyAppLink() {
    const url = new URL(window.location.href);
    try {
      await navigator.clipboard.writeText(url.origin);
      message = "App link copied!";
    } catch {
      message = "Copy to clipboard failed.";
    }
    setTimeout(
      () => {
        message = "";
      },
      2e3
    );
  }
  return `<button class="my-1 btn btn-circle btn-neutral focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " aria-label="Share app link." title="Click to copy app link." ${Boolean(message) ? "disabled" : ""}><div class="${[
    "tooltip-left tooltip-primary",
    (Boolean(message) ? "tooltip" : "") + " " + (Boolean(message) ? "tooltip-open" : "")
  ].join(" ").trim()}"${add_attribute("data-tip", message, 0)}><div class="swap swap-rotate"><input type="checkbox" class="hidden" ${Boolean(message) ? "checked" : ""}> ${validate_component(share_2_default, "Share2").$$render($$result, { class: "swap-off" }, {}, {})} ${validate_component(check_default, "Check").$$render($$result, { class: "swap-on" }, {}, {})}</div></div></button>`;
});
var ShareButton_default = ShareButton;

// svelte/SyncStatusBadge.svelte
var SyncStatusBadge_exports = {};
__export(SyncStatusBadge_exports, {
  default: () => SyncStatusBadge_default
});

// svelte/StateManagement.svelte
var StateManagement_exports = {};
__export(StateManagement_exports, {
  default: () => StateManagement_default,
  reconnectLiveViewIfDisconnected: () => reconnectLiveViewIfDisconnected,
  syncDocumentToServer: () => syncDocumentToServer
});

// node_modules/js-base64/base64.mjs
var _hasatob = typeof atob === "function";
var _hasbtoa = typeof btoa === "function";
var _hasBuffer = typeof Buffer === "function";
var _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
var b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var b64chs = Array.prototype.slice.call(b64ch);
var b64tab = ((a) => {
  let tab = {};
  a.forEach((c, i) => tab[c] = i);
  return tab;
})(b64chs);
var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
var _fromCC = String.fromCharCode.bind(String);
var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
var _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
var _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, "");
var btoaPolyfill = (bin) => {
  let u32, c0, c1, c2, asc = "";
  const pad = bin.length % 3;
  for (let i = 0; i < bin.length; ) {
    if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255)
      throw new TypeError("invalid character found");
    u32 = c0 << 16 | c1 << 8 | c2;
    asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
  }
  return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
var _btoa = _hasbtoa ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
var _fromUint8Array = _hasBuffer ? (u8a) => Buffer.from(u8a).toString("base64") : (u8a) => {
  const maxargs = 4096;
  let strs = [];
  for (let i = 0, l = u8a.length; i < l; i += maxargs) {
    strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
  }
  return _btoa(strs.join(""));
};
var fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
var atobPolyfill = (asc) => {
  asc = asc.replace(/\s+/g, "");
  if (!b64re.test(asc))
    throw new TypeError("malformed base64.");
  asc += "==".slice(2 - (asc.length & 3));
  let u24, bin = "", r1, r2;
  for (let i = 0; i < asc.length; ) {
    u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
    bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
  }
  return bin;
};
var _atob = _hasatob ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
var _toUint8Array = _hasBuffer ? (a) => _U8Afrom(Buffer.from(a, "base64")) : (a) => _U8Afrom(_atob(a).split("").map((c) => c.charCodeAt(0)));
var toUint8Array = (a) => _toUint8Array(_unURI(a));
var _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));

// node_modules/lib0/map.js
var create = () => /* @__PURE__ */ new Map();
var copy = (m) => {
  const r = create();
  m.forEach((v, k) => {
    r.set(k, v);
  });
  return r;
};
var setIfUndefined = (map, key, createT) => {
  let set = map.get(key);
  if (set === void 0) {
    map.set(key, set = createT());
  }
  return set;
};
var any = (m, f) => {
  for (const [key, value] of m) {
    if (f(value, key)) {
      return true;
    }
  }
  return false;
};

// node_modules/lib0/set.js
var create2 = () => /* @__PURE__ */ new Set();

// node_modules/lib0/array.js
var last = (arr) => arr[arr.length - 1];
var appendTo = (dest, src) => {
  for (let i = 0; i < src.length; i++) {
    dest.push(src[i]);
  }
};
var from = Array.from;
var isArray = Array.isArray;

// node_modules/lib0/observable.js
var Observable = class {
  constructor() {
    this._observers = create();
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  on(name, f) {
    setIfUndefined(this._observers, name, create2).add(f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  once(name, f) {
    const _f = (...args2) => {
      this.off(name, _f);
      f(...args2);
    };
    this.on(name, _f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @param {N} name The event name.
   * @param {Array<any>} args The arguments that are applied to the event listener.
   */
  emit(name, args2) {
    return from((this._observers.get(name) || create()).values()).forEach((f) => f(...args2));
  }
  destroy() {
    this._observers = create();
  }
};

// node_modules/lib0/math.js
var floor = Math.floor;
var abs = Math.abs;
var min = (a, b) => a < b ? a : b;
var max = (a, b) => a > b ? a : b;
var isNaN2 = Number.isNaN;
var isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;

// node_modules/lib0/binary.js
var BIT1 = 1;
var BIT2 = 2;
var BIT3 = 4;
var BIT4 = 8;
var BIT6 = 32;
var BIT7 = 64;
var BIT8 = 128;
var BIT18 = 1 << 17;
var BIT19 = 1 << 18;
var BIT20 = 1 << 19;
var BIT21 = 1 << 20;
var BIT22 = 1 << 21;
var BIT23 = 1 << 22;
var BIT24 = 1 << 23;
var BIT25 = 1 << 24;
var BIT26 = 1 << 25;
var BIT27 = 1 << 26;
var BIT28 = 1 << 27;
var BIT29 = 1 << 28;
var BIT30 = 1 << 29;
var BIT31 = 1 << 30;
var BIT32 = 1 << 31;
var BITS5 = 31;
var BITS6 = 63;
var BITS7 = 127;
var BITS17 = BIT18 - 1;
var BITS18 = BIT19 - 1;
var BITS19 = BIT20 - 1;
var BITS20 = BIT21 - 1;
var BITS21 = BIT22 - 1;
var BITS22 = BIT23 - 1;
var BITS23 = BIT24 - 1;
var BITS24 = BIT25 - 1;
var BITS25 = BIT26 - 1;
var BITS26 = BIT27 - 1;
var BITS27 = BIT28 - 1;
var BITS28 = BIT29 - 1;
var BITS29 = BIT30 - 1;
var BITS30 = BIT31 - 1;
var BITS31 = 2147483647;

// node_modules/lib0/number.js
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
var LOWEST_INT32 = 1 << 31;
var isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
var isNaN3 = Number.isNaN;
var parseInt2 = Number.parseInt;

// node_modules/lib0/string.js
var fromCharCode = String.fromCharCode;
var fromCodePoint = String.fromCodePoint;
var MAX_UTF16_CHARACTER = fromCharCode(65535);
var toLowerCase = (s) => s.toLowerCase();
var trimLeftRegex = /^\s*/g;
var trimLeft = (s) => s.replace(trimLeftRegex, "");
var fromCamelCaseRegex = /([A-Z])/g;
var fromCamelCase = (s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match) => `${separator}${toLowerCase(match)}`));
var _encodeUtf8Polyfill = (str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buf[i] = /** @type {number} */
    encodedString.codePointAt(i);
  }
  return buf;
};
var utf8TextEncoder = (
  /** @type {TextEncoder} */
  typeof TextEncoder !== "undefined" ? new TextEncoder() : null
);
var _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
var encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
  utf8TextDecoder = null;
}

// node_modules/lib0/encoding.js
var Encoder = class {
  constructor() {
    this.cpos = 0;
    this.cbuf = new Uint8Array(100);
    this.bufs = [];
  }
};
var createEncoder = () => new Encoder();
var length = (encoder) => {
  let len = encoder.cpos;
  for (let i = 0; i < encoder.bufs.length; i++) {
    len += encoder.bufs[i].length;
  }
  return len;
};
var toUint8Array2 = (encoder) => {
  const uint8arr = new Uint8Array(length(encoder));
  let curPos = 0;
  for (let i = 0; i < encoder.bufs.length; i++) {
    const d = encoder.bufs[i];
    uint8arr.set(d, curPos);
    curPos += d.length;
  }
  uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
  return uint8arr;
};
var verifyLen = (encoder, len) => {
  const bufferLen = encoder.cbuf.length;
  if (bufferLen - encoder.cpos < len) {
    encoder.bufs.push(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos));
    encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
    encoder.cpos = 0;
  }
};
var write = (encoder, num) => {
  const bufferLen = encoder.cbuf.length;
  if (encoder.cpos === bufferLen) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(bufferLen * 2);
    encoder.cpos = 0;
  }
  encoder.cbuf[encoder.cpos++] = num;
};
var writeUint8 = write;
var writeVarUint = (encoder, num) => {
  while (num > BITS7) {
    write(encoder, BIT8 | BITS7 & num);
    num = floor(num / 128);
  }
  write(encoder, BITS7 & num);
};
var writeVarInt = (encoder, num) => {
  const isNegative = isNegativeZero(num);
  if (isNegative) {
    num = -num;
  }
  write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
  num = floor(num / 64);
  while (num > 0) {
    write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
    num = floor(num / 128);
  }
};
var _strBuffer = new Uint8Array(3e4);
var _maxStrBSize = _strBuffer.length / 3;
var _writeVarStringNative = (encoder, str) => {
  if (str.length < _maxStrBSize) {
    const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
    writeVarUint(encoder, written);
    for (let i = 0; i < written; i++) {
      write(encoder, _strBuffer[i]);
    }
  } else {
    writeVarUint8Array(encoder, encodeUtf8(str));
  }
};
var _writeVarStringPolyfill = (encoder, str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    write(
      encoder,
      /** @type {number} */
      encodedString.codePointAt(i)
    );
  }
};
var writeVarString = utf8TextEncoder && /** @type {any} */
utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
var writeUint8Array = (encoder, uint8Array) => {
  const bufferLen = encoder.cbuf.length;
  const cpos = encoder.cpos;
  const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
  const rightCopyLen = uint8Array.length - leftCopyLen;
  encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
  encoder.cpos += leftCopyLen;
  if (rightCopyLen > 0) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
    encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
    encoder.cpos = rightCopyLen;
  }
};
var writeVarUint8Array = (encoder, uint8Array) => {
  writeVarUint(encoder, uint8Array.byteLength);
  writeUint8Array(encoder, uint8Array);
};
var writeOnDataView = (encoder, len) => {
  verifyLen(encoder, len);
  const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
  encoder.cpos += len;
  return dview;
};
var writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
var writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
var writeBigInt64 = (encoder, num) => (
  /** @type {any} */
  writeOnDataView(encoder, 8).setBigInt64(0, num, false)
);
var floatTestBed = new DataView(new ArrayBuffer(4));
var isFloat32 = (num) => {
  floatTestBed.setFloat32(0, num);
  return floatTestBed.getFloat32(0) === num;
};
var writeAny = (encoder, data) => {
  switch (typeof data) {
    case "string":
      write(encoder, 119);
      writeVarString(encoder, data);
      break;
    case "number":
      if (isInteger(data) && abs(data) <= BITS31) {
        write(encoder, 125);
        writeVarInt(encoder, data);
      } else if (isFloat32(data)) {
        write(encoder, 124);
        writeFloat32(encoder, data);
      } else {
        write(encoder, 123);
        writeFloat64(encoder, data);
      }
      break;
    case "bigint":
      write(encoder, 122);
      writeBigInt64(encoder, data);
      break;
    case "object":
      if (data === null) {
        write(encoder, 126);
      } else if (isArray(data)) {
        write(encoder, 117);
        writeVarUint(encoder, data.length);
        for (let i = 0; i < data.length; i++) {
          writeAny(encoder, data[i]);
        }
      } else if (data instanceof Uint8Array) {
        write(encoder, 116);
        writeVarUint8Array(encoder, data);
      } else {
        write(encoder, 118);
        const keys2 = Object.keys(data);
        writeVarUint(encoder, keys2.length);
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          writeVarString(encoder, key);
          writeAny(encoder, data[key]);
        }
      }
      break;
    case "boolean":
      write(encoder, data ? 120 : 121);
      break;
    default:
      write(encoder, 127);
  }
};
var RleEncoder = class extends Encoder {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(writer) {
    super();
    this.w = writer;
    this.s = null;
    this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      if (this.count > 0) {
        writeVarUint(this, this.count - 1);
      }
      this.count = 1;
      this.w(this, v);
      this.s = v;
    }
  }
};
var flushUintOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
var UintOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      flushUintOptRleEncoder(this);
      this.count = 1;
      this.s = v;
    }
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    flushUintOptRleEncoder(this);
    return toUint8Array2(this.encoder);
  }
};
var flushIntDiffOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
    writeVarInt(encoder.encoder, encodedDiff);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
var IntDiffOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.diff === v - this.s) {
      this.s = v;
      this.count++;
    } else {
      flushIntDiffOptRleEncoder(this);
      this.count = 1;
      this.diff = v - this.s;
      this.s = v;
    }
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    flushIntDiffOptRleEncoder(this);
    return toUint8Array2(this.encoder);
  }
};
var StringEncoder = class {
  constructor() {
    this.sarr = [];
    this.s = "";
    this.lensE = new UintOptRleEncoder();
  }
  /**
   * @param {string} string
   */
  write(string) {
    this.s += string;
    if (this.s.length > 19) {
      this.sarr.push(this.s);
      this.s = "";
    }
    this.lensE.write(string.length);
  }
  toUint8Array() {
    const encoder = new Encoder();
    this.sarr.push(this.s);
    this.s = "";
    writeVarString(encoder, this.sarr.join(""));
    writeUint8Array(encoder, this.lensE.toUint8Array());
    return toUint8Array2(encoder);
  }
};

// node_modules/lib0/error.js
var create3 = (s) => new Error(s);
var methodUnimplemented = () => {
  throw create3("Method unimplemented");
};
var unexpectedCase = () => {
  throw create3("Unexpected case");
};

// node_modules/lib0/decoding.js
var errorUnexpectedEndOfArray = create3("Unexpected end of array");
var errorIntegerOutOfRange = create3("Integer out of Range");
var Decoder = class {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(uint8Array) {
    this.arr = uint8Array;
    this.pos = 0;
  }
};
var createDecoder = (uint8Array) => new Decoder(uint8Array);
var hasContent = (decoder) => decoder.pos !== decoder.arr.length;
var readUint8Array = (decoder, len) => {
  const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
  decoder.pos += len;
  return view;
};
var readVarUint8Array = (decoder) => readUint8Array(decoder, readVarUint(decoder));
var readUint8 = (decoder) => decoder.arr[decoder.pos++];
var readVarUint = (decoder) => {
  let num = 0;
  let mult = 1;
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    const r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
var readVarInt = (decoder) => {
  let r = decoder.arr[decoder.pos++];
  let num = r & BITS6;
  let mult = 64;
  const sign = (r & BIT7) > 0 ? -1 : 1;
  if ((r & BIT8) === 0) {
    return sign * num;
  }
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return sign * num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
var _readVarStringPolyfill = (decoder) => {
  let remainingLen = readVarUint(decoder);
  if (remainingLen === 0) {
    return "";
  } else {
    let encodedString = String.fromCodePoint(readUint8(decoder));
    if (--remainingLen < 100) {
      while (remainingLen--) {
        encodedString += String.fromCodePoint(readUint8(decoder));
      }
    } else {
      while (remainingLen > 0) {
        const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
        const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
        decoder.pos += nextLen;
        encodedString += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          bytes
        );
        remainingLen -= nextLen;
      }
    }
    return decodeURIComponent(escape(encodedString));
  }
};
var _readVarStringNative = (decoder) => (
  /** @type any */
  utf8TextDecoder.decode(readVarUint8Array(decoder))
);
var readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
var readFromDataView = (decoder, len) => {
  const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
  decoder.pos += len;
  return dv;
};
var readFloat32 = (decoder) => readFromDataView(decoder, 4).getFloat32(0, false);
var readFloat64 = (decoder) => readFromDataView(decoder, 8).getFloat64(0, false);
var readBigInt64 = (decoder) => (
  /** @type {any} */
  readFromDataView(decoder, 8).getBigInt64(0, false)
);
var readAnyLookupTable = [
  (decoder) => void 0,
  // CASE 127: undefined
  (decoder) => null,
  // CASE 126: null
  readVarInt,
  // CASE 125: integer
  readFloat32,
  // CASE 124: float32
  readFloat64,
  // CASE 123: float64
  readBigInt64,
  // CASE 122: bigint
  (decoder) => false,
  // CASE 121: boolean (false)
  (decoder) => true,
  // CASE 120: boolean (true)
  readVarString,
  // CASE 119: string
  (decoder) => {
    const len = readVarUint(decoder);
    const obj = {};
    for (let i = 0; i < len; i++) {
      const key = readVarString(decoder);
      obj[key] = readAny(decoder);
    }
    return obj;
  },
  (decoder) => {
    const len = readVarUint(decoder);
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(readAny(decoder));
    }
    return arr;
  },
  readVarUint8Array
  // CASE 116: Uint8Array
];
var readAny = (decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder);
var RleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(uint8Array, reader) {
    super(uint8Array);
    this.reader = reader;
    this.s = null;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = this.reader(this);
      if (hasContent(this)) {
        this.count = readVarUint(this) + 1;
      } else {
        this.count = -1;
      }
    }
    this.count--;
    return (
      /** @type {T} */
      this.s
    );
  }
};
var UintOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = readVarInt(this);
      const isNegative = isNegativeZero(this.s);
      this.count = 1;
      if (isNegative) {
        this.s = -this.s;
        this.count = readVarUint(this) + 2;
      }
    }
    this.count--;
    return (
      /** @type {number} */
      this.s
    );
  }
};
var IntDiffOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const diff = readVarInt(this);
      const hasCount = diff & 1;
      this.diff = floor(diff / 2);
      this.count = 1;
      if (hasCount) {
        this.count = readVarUint(this) + 2;
      }
    }
    this.s += this.diff;
    this.count--;
    return this.s;
  }
};
var StringDecoder = class {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    this.decoder = new UintOptRleDecoder(uint8Array);
    this.str = readVarString(this.decoder);
    this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const end = this.spos + this.decoder.read();
    const res = this.str.slice(this.spos, end);
    this.spos = end;
    return res;
  }
};

// node_modules/lib0/webcrypto.node.js
var import_node_crypto = require("node:crypto");
var subtle = (
  /** @type {any} */
  import_node_crypto.webcrypto.subtle
);
var getRandomValues = (
  /** @type {any} */
  import_node_crypto.webcrypto.getRandomValues.bind(import_node_crypto.webcrypto)
);

// node_modules/lib0/random.js
var uint32 = () => getRandomValues(new Uint32Array(1))[0];
var uuidv4Template = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
var uuidv4 = () => uuidv4Template.replace(
  /[018]/g,
  /** @param {number} c */
  (c) => (c ^ uint32() & 15 >> c / 4).toString(16)
);

// node_modules/lib0/time.js
var getUnixTime = Date.now;

// node_modules/lib0/promise.js
var create4 = (f) => (
  /** @type {Promise<T>} */
  new Promise(f)
);
var all = Promise.all.bind(Promise);

// node_modules/lib0/conditions.js
var undefinedToNull = (v) => v === void 0 ? null : v;

// node_modules/lib0/storage.js
var VarStoragePolyfill = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(key, newValue) {
    this.map.set(key, newValue);
  }
  /**
   * @param {string} key
   */
  getItem(key) {
    return this.map.get(key);
  }
};
var _localStorage = new VarStoragePolyfill();
var usePolyfill = true;
try {
  if (typeof localStorage !== "undefined" && localStorage) {
    _localStorage = localStorage;
    usePolyfill = false;
  }
} catch (e) {
}
var varStorage = _localStorage;

// node_modules/lib0/object.js
var assign2 = Object.assign;
var keys = Object.keys;
var forEach = (obj, f) => {
  for (const key in obj) {
    f(obj[key], key);
  }
};
var length2 = (obj) => keys(obj).length;
var isEmpty = (obj) => {
  for (const _k in obj) {
    return false;
  }
  return true;
};
var every = (obj, f) => {
  for (const key in obj) {
    if (!f(obj[key], key)) {
      return false;
    }
  }
  return true;
};
var hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
var equalFlat = (a, b) => a === b || length2(a) === length2(b) && every(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && b[key] === val);

// node_modules/lib0/function.js
var callAll = (fs, args2, i = 0) => {
  try {
    for (; i < fs.length; i++) {
      fs[i](...args2);
    }
  } finally {
    if (i < fs.length) {
      callAll(fs, args2, i + 1);
    }
  }
};
var id = (a) => a;
var isOneOf = (value, options) => options.includes(value);

// node_modules/lib0/environment.js
var isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
var isMac = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
var params;
var args = [];
var computeParams = () => {
  if (params === void 0) {
    if (isNode) {
      params = create();
      const pargs = process.argv;
      let currParamName = null;
      for (let i = 0; i < pargs.length; i++) {
        const parg = pargs[i];
        if (parg[0] === "-") {
          if (currParamName !== null) {
            params.set(currParamName, "");
          }
          currParamName = parg;
        } else {
          if (currParamName !== null) {
            params.set(currParamName, parg);
            currParamName = null;
          } else {
            args.push(parg);
          }
        }
      }
      if (currParamName !== null) {
        params.set(currParamName, "");
      }
    } else if (typeof location === "object") {
      params = create();
      (location.search || "?").slice(1).split("&").forEach((kv) => {
        if (kv.length !== 0) {
          const [key, value] = kv.split("=");
          params.set(`--${fromCamelCase(key, "-")}`, value);
          params.set(`-${fromCamelCase(key, "-")}`, value);
        }
      });
    } else {
      params = create();
    }
  }
  return params;
};
var hasParam = (name) => computeParams().has(name);
var getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase()]) : undefinedToNull(varStorage.getItem(name));
var hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
var production = hasConf("production");
var forceColor = isNode && isOneOf(process.env.FORCE_COLOR, ["true", "1", "2"]);
var supportsColor = !hasParam("no-colors") && (!isNode || process.stdout.isTTY || forceColor) && (!isNode || hasParam("color") || forceColor || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));

// node_modules/lib0/buffer.js
var createUint8ArrayFromLen = (len) => new Uint8Array(len);
var copyUint8Array = (uint8Array) => {
  const newBuf = createUint8ArrayFromLen(uint8Array.byteLength);
  newBuf.set(uint8Array);
  return newBuf;
};

// node_modules/lib0/symbol.js
var create5 = Symbol;

// node_modules/lib0/logging.common.js
var BOLD = create5();
var UNBOLD = create5();
var BLUE = create5();
var GREY = create5();
var GREEN = create5();
var RED = create5();
var PURPLE = create5();
var ORANGE = create5();
var UNCOLOR = create5();
var computeNoColorLoggingArgs = (args2) => {
  const strBuilder = [];
  const logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (arg.constructor === String || arg.constructor === Number) {
      strBuilder.push(arg);
    } else if (arg.constructor === Object) {
      logArgs.push(JSON.stringify(arg));
    }
  }
  return logArgs;
};
var lastLoggingTime = getUnixTime();

// node_modules/lib0/logging.node.js
var _nodeStyleMap = {
  [BOLD]: "\x1B[1m",
  [UNBOLD]: "\x1B[2m",
  [BLUE]: "\x1B[34m",
  [GREEN]: "\x1B[32m",
  [GREY]: "\x1B[37m",
  [RED]: "\x1B[31m",
  [PURPLE]: "\x1B[35m",
  [ORANGE]: "\x1B[38;5;208m",
  [UNCOLOR]: "\x1B[0m"
};
var computeNodeLoggingArgs = (args2) => {
  const strBuilder = [];
  const logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    const style = _nodeStyleMap[arg];
    if (style !== void 0) {
      strBuilder.push(style);
    } else {
      if (arg.constructor === String || arg.constructor === Number) {
        strBuilder.push(arg);
      } else {
        break;
      }
    }
  }
  if (i > 0) {
    strBuilder.push("\x1B[0m");
    logArgs.push(strBuilder.join(""));
  }
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
var computeLoggingArgs = supportsColor ? computeNodeLoggingArgs : computeNoColorLoggingArgs;
var print = (...args2) => {
  console.log(...computeLoggingArgs(args2));
};

// node_modules/lib0/iterator.js
var createIterator = (next) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next
});
var iteratorFilter = (iterator, filter) => createIterator(() => {
  let res;
  do {
    res = iterator.next();
  } while (!res.done && !filter(res.value));
  return res;
});
var iteratorMap = (iterator, fmap) => createIterator(() => {
  const { done, value } = iterator.next();
  return { done, value: done ? void 0 : fmap(value) };
});

// node_modules/yjs/dist/yjs.mjs
var DeleteItem = class {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(clock, len) {
    this.clock = clock;
    this.len = len;
  }
};
var DeleteSet = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
};
var iterateDeletedStructs = (transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    transaction.doc.store.clients.get(clientid)
  );
  for (let i = 0; i < deletes.length; i++) {
    const del2 = deletes[i];
    iterateStructs(transaction, structs, del2.clock, del2.len, f);
  }
});
var findIndexDS = (dis, clock) => {
  let left = 0;
  let right = dis.length - 1;
  while (left <= right) {
    const midindex = floor((left + right) / 2);
    const mid = dis[midindex];
    const midclock = mid.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.len) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
  }
  return null;
};
var isDeleted = (ds, id2) => {
  const dis = ds.clients.get(id2.client);
  return dis !== void 0 && findIndexDS(dis, id2.clock) !== null;
};
var sortAndMergeDeleteSet = (ds) => {
  ds.clients.forEach((dels) => {
    dels.sort((a, b) => a.clock - b.clock);
    let i, j;
    for (i = 1, j = 1; i < dels.length; i++) {
      const left = dels[j - 1];
      const right = dels[i];
      if (left.clock + left.len >= right.clock) {
        left.len = max(left.len, right.clock + right.len - left.clock);
      } else {
        if (j < i) {
          dels[j] = right;
        }
        j++;
      }
    }
    dels.length = j;
  });
};
var mergeDeleteSets = (dss) => {
  const merged = new DeleteSet();
  for (let dssI = 0; dssI < dss.length; dssI++) {
    dss[dssI].clients.forEach((delsLeft, client) => {
      if (!merged.clients.has(client)) {
        const dels = delsLeft.slice();
        for (let i = dssI + 1; i < dss.length; i++) {
          appendTo(dels, dss[i].clients.get(client) || []);
        }
        merged.clients.set(client, dels);
      }
    });
  }
  sortAndMergeDeleteSet(merged);
  return merged;
};
var addToDeleteSet = (ds, client, clock, length3) => {
  setIfUndefined(ds.clients, client, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new DeleteItem(clock, length3));
};
var createDeleteSet = () => new DeleteSet();
var createDeleteSetFromStructStore = (ss) => {
  const ds = createDeleteSet();
  ss.clients.forEach((structs, client) => {
    const dsitems = [];
    for (let i = 0; i < structs.length; i++) {
      const struct = structs[i];
      if (struct.deleted) {
        const clock = struct.id.clock;
        let len = struct.length;
        if (i + 1 < structs.length) {
          for (let next = structs[i + 1]; i + 1 < structs.length && next.deleted; next = structs[++i + 1]) {
            len += next.length;
          }
        }
        dsitems.push(new DeleteItem(clock, len));
      }
    }
    if (dsitems.length > 0) {
      ds.clients.set(client, dsitems);
    }
  });
  return ds;
};
var writeDeleteSet = (encoder, ds) => {
  writeVarUint(encoder.restEncoder, ds.clients.size);
  from(ds.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, dsitems]) => {
    encoder.resetDsCurVal();
    writeVarUint(encoder.restEncoder, client);
    const len = dsitems.length;
    writeVarUint(encoder.restEncoder, len);
    for (let i = 0; i < len; i++) {
      const item = dsitems[i];
      encoder.writeDsClock(item.clock);
      encoder.writeDsLen(item.len);
    }
  });
};
var readDeleteSet = (decoder) => {
  const ds = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    if (numberOfDeletes > 0) {
      const dsField = setIfUndefined(ds.clients, client, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let i2 = 0; i2 < numberOfDeletes; i2++) {
        dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
      }
    }
  }
  return ds;
};
var readAndApplyDeleteSet = (decoder, transaction, store) => {
  const unappliedDS = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    const structs = store.clients.get(client) || [];
    const state = getState(store, client);
    for (let i2 = 0; i2 < numberOfDeletes; i2++) {
      const clock = decoder.readDsClock();
      const clockEnd = clock + decoder.readDsLen();
      if (clock < state) {
        if (state < clockEnd) {
          addToDeleteSet(unappliedDS, client, state, clockEnd - state);
        }
        let index = findIndexSS(structs, clock);
        let struct = structs[index];
        if (!struct.deleted && struct.id.clock < clock) {
          structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
          index++;
        }
        while (index < structs.length) {
          struct = structs[index++];
          if (struct.id.clock < clockEnd) {
            if (!struct.deleted) {
              if (clockEnd < struct.id.clock + struct.length) {
                structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
              }
              struct.delete(transaction);
            }
          } else {
            break;
          }
        }
      } else {
        addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
      }
    }
  }
  if (unappliedDS.clients.size > 0) {
    const ds = new UpdateEncoderV2();
    writeVarUint(ds.restEncoder, 0);
    writeDeleteSet(ds, unappliedDS);
    return ds.toUint8Array();
  }
  return null;
};
var generateNewClientId = uint32;
var Doc = class extends Observable {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
    super();
    this.gc = gc;
    this.gcFilter = gcFilter;
    this.clientID = generateNewClientId();
    this.guid = guid;
    this.collectionid = collectionid;
    this.share = /* @__PURE__ */ new Map();
    this.store = new StructStore();
    this._transaction = null;
    this._transactionCleanups = [];
    this.subdocs = /* @__PURE__ */ new Set();
    this._item = null;
    this.shouldLoad = shouldLoad;
    this.autoLoad = autoLoad;
    this.meta = meta;
    this.isLoaded = false;
    this.isSynced = false;
    this.whenLoaded = create4((resolve) => {
      this.on("load", () => {
        this.isLoaded = true;
        resolve(this);
      });
    });
    const provideSyncedPromise = () => create4((resolve) => {
      const eventHandler = (isSynced) => {
        if (isSynced === void 0 || isSynced === true) {
          this.off("sync", eventHandler);
          resolve();
        }
      };
      this.on("sync", eventHandler);
    });
    this.on("sync", (isSynced) => {
      if (isSynced === false && this.isSynced) {
        this.whenSynced = provideSyncedPromise();
      }
      this.isSynced = isSynced === void 0 || isSynced === true;
      if (this.isSynced && !this.isLoaded) {
        this.emit("load", []);
      }
    });
    this.whenSynced = provideSyncedPromise();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const item = this._item;
    if (item !== null && !this.shouldLoad) {
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          transaction.subdocsLoaded.add(this);
        },
        null,
        true
      );
    }
    this.shouldLoad = true;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(from(this.subdocs).map((doc2) => doc2.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(f, origin = null) {
    return transact(this, f, origin);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `y.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `y.define(name, Y.Array) === y.define(name, Y.Array)`
   *
   * After this method is called, the type is also available on `y.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Yjs instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @example
   *   const y = new Y(..)
   *   const appState = {
   *     document: y.getText('document')
   *     comments: y.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Function} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {AbstractType<any>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(name, TypeConstructor = AbstractType) {
    const type = setIfUndefined(this.share, name, () => {
      const t = new TypeConstructor();
      t._integrate(this, null);
      return t;
    });
    const Constr = type.constructor;
    if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
      if (Constr === AbstractType) {
        const t = new TypeConstructor();
        t._map = type._map;
        type._map.forEach(
          /** @param {Item?} n */
          (n) => {
            for (; n !== null; n = n.left) {
              n.parent = t;
            }
          }
        );
        t._start = type._start;
        for (let n = t._start; n !== null; n = n.right) {
          n.parent = t;
        }
        t._length = type._length;
        this.share.set(name, t);
        t._integrate(this, null);
        return t;
      } else {
        throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
      }
    }
    return type;
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(name = "") {
    return this.get(name, YArray);
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(name = "") {
    return this.get(name, YText);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(name = "") {
    return this.get(name, YMap);
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(name = "") {
    return this.get(name, YXmlFragment);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const doc2 = {};
    this.share.forEach((value, key) => {
      doc2[key] = value.toJSON();
    });
    return doc2;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    from(this.subdocs).forEach((subdoc) => subdoc.destroy());
    const item = this._item;
    if (item !== null) {
      this._item = null;
      const content = (
        /** @type {ContentDoc} */
        item.content
      );
      content.doc = new Doc({ guid: this.guid, ...content.opts, shouldLoad: false });
      content.doc._item = item;
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          const doc2 = content.doc;
          if (!item.deleted) {
            transaction.subdocsAdded.add(doc2);
          }
          transaction.subdocsRemoved.add(this);
        },
        null,
        true
      );
    }
    this.emit("destroyed", [true]);
    this.emit("destroy", [this]);
    super.destroy();
  }
  /**
   * @param {string} eventName
   * @param {function(...any):any} f
   */
  on(eventName, f) {
    super.on(eventName, f);
  }
  /**
   * @param {string} eventName
   * @param {function} f
   */
  off(eventName, f) {
    super.off(eventName, f);
  }
};
var DSDecoderV1 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number}
   */
  readDsLen() {
    return readVarUint(this.restDecoder);
  }
};
var UpdateDecoderV1 = class extends DSDecoderV1 {
  /**
   * @return {ID}
   */
  readLeftID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return readUint8(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readString() {
    return readVarString(this.restDecoder);
  }
  /**
   * @return {boolean} isKey
   */
  readParentInfo() {
    return readVarUint(this.restDecoder) === 1;
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readTypeRef() {
    return readVarUint(this.restDecoder);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number} len
   */
  readLen() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return copyUint8Array(readVarUint8Array(this.restDecoder));
  }
  /**
   * Legacy implementation uses JSON parse. We use any-decoding in v2.
   *
   * @return {any}
   */
  readJSON() {
    return JSON.parse(readVarString(this.restDecoder));
  }
  /**
   * @return {string}
   */
  readKey() {
    return readVarString(this.restDecoder);
  }
};
var DSDecoderV2 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.dsCurrVal = 0;
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    this.dsCurrVal += readVarUint(this.restDecoder);
    return this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const diff = readVarUint(this.restDecoder) + 1;
    this.dsCurrVal += diff;
    return diff;
  }
};
var UpdateDecoderV2 = class extends DSDecoderV2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    super(decoder);
    this.keys = [];
    readVarUint(decoder);
    this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
    this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return readVarUint8Array(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const keyClock = this.keyClockDecoder.read();
    if (keyClock < this.keys.length) {
      return this.keys[keyClock];
    } else {
      const key = this.stringDecoder.read();
      this.keys.push(key);
      return key;
    }
  }
};
var DSEncoderV1 = class {
  constructor() {
    this.restEncoder = createEncoder();
  }
  toUint8Array() {
    return toUint8Array2(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    writeVarUint(this.restEncoder, clock);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    writeVarUint(this.restEncoder, len);
  }
};
var UpdateEncoderV1 = class extends DSEncoderV1 {
  /**
   * @param {ID} id
   */
  writeLeftID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(client) {
    writeVarUint(this.restEncoder, client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    writeUint8(this.restEncoder, info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    writeVarString(this.restEncoder, s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    writeVarUint(this.restEncoder, isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    writeVarUint(this.restEncoder, info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    writeVarUint(this.restEncoder, len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * @param {any} embed
   */
  writeJSON(embed) {
    writeVarString(this.restEncoder, JSON.stringify(embed));
  }
  /**
   * @param {string} key
   */
  writeKey(key) {
    writeVarString(this.restEncoder, key);
  }
};
var DSEncoderV2 = class {
  constructor() {
    this.restEncoder = createEncoder();
    this.dsCurrVal = 0;
  }
  toUint8Array() {
    return toUint8Array2(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    const diff = clock - this.dsCurrVal;
    this.dsCurrVal = clock;
    writeVarUint(this.restEncoder, diff);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    if (len === 0) {
      unexpectedCase();
    }
    writeVarUint(this.restEncoder, len - 1);
    this.dsCurrVal += len;
  }
};
var UpdateEncoderV2 = class extends DSEncoderV2 {
  constructor() {
    super();
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyClock = 0;
    this.keyClockEncoder = new IntDiffOptRleEncoder();
    this.clientEncoder = new UintOptRleEncoder();
    this.leftClockEncoder = new IntDiffOptRleEncoder();
    this.rightClockEncoder = new IntDiffOptRleEncoder();
    this.infoEncoder = new RleEncoder(writeUint8);
    this.stringEncoder = new StringEncoder();
    this.parentInfoEncoder = new RleEncoder(writeUint8);
    this.typeRefEncoder = new UintOptRleEncoder();
    this.lenEncoder = new UintOptRleEncoder();
  }
  toUint8Array() {
    const encoder = createEncoder();
    writeVarUint(encoder, 0);
    writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array2(this.infoEncoder));
    writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array2(this.parentInfoEncoder));
    writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
    writeUint8Array(encoder, toUint8Array2(this.restEncoder));
    return toUint8Array2(encoder);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(id2) {
    this.clientEncoder.write(id2.client);
    this.leftClockEncoder.write(id2.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id2) {
    this.clientEncoder.write(id2.client);
    this.rightClockEncoder.write(id2.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(client) {
    this.clientEncoder.write(client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    this.infoEncoder.write(info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    this.stringEncoder.write(s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    this.parentInfoEncoder.write(isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    this.typeRefEncoder.write(info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    this.lenEncoder.write(len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(embed) {
    writeAny(this.restEncoder, embed);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(key) {
    const clock = this.keyMap.get(key);
    if (clock === void 0) {
      this.keyClockEncoder.write(this.keyClock++);
      this.stringEncoder.write(key);
    } else {
      this.keyClockEncoder.write(clock);
    }
  }
};
var writeStructs = (encoder, structs, client, clock) => {
  clock = max(clock, structs[0].id.clock);
  const startNewStructs = findIndexSS(structs, clock);
  writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
  encoder.writeClient(client);
  writeVarUint(encoder.restEncoder, clock);
  const firstStruct = structs[startNewStructs];
  firstStruct.write(encoder, clock - firstStruct.id.clock);
  for (let i = startNewStructs + 1; i < structs.length; i++) {
    structs[i].write(encoder, 0);
  }
};
var writeClientsStructs = (encoder, store, _sm) => {
  const sm = /* @__PURE__ */ new Map();
  _sm.forEach((clock, client) => {
    if (getState(store, client) > clock) {
      sm.set(client, clock);
    }
  });
  getStateVector(store).forEach((_clock, client) => {
    if (!_sm.has(client)) {
      sm.set(client, 0);
    }
  });
  writeVarUint(encoder.restEncoder, sm.size);
  from(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeStructs(
      encoder,
      /** @type {Array<GC|Item>} */
      store.clients.get(client),
      client,
      clock
    );
  });
};
var readClientsStructRefs = (decoder, doc2) => {
  const clientRefs = create();
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const refs = new Array(numberOfStructs);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    clientRefs.set(client, { i: 0, refs });
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      switch (BITS5 & info) {
        case 0: {
          const len = decoder.readLen();
          refs[i2] = new GC(createID(client, clock), len);
          clock += len;
          break;
        }
        case 10: {
          const len = readVarUint(decoder.restDecoder);
          refs[i2] = new Skip(createID(client, clock), len);
          clock += len;
          break;
        }
        default: {
          const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
          const struct = new Item(
            createID(client, clock),
            null,
            // leftd
            (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
            // origin
            null,
            // right
            (info & BIT7) === BIT7 ? decoder.readRightID() : null,
            // right origin
            cantCopyParentInfo ? decoder.readParentInfo() ? doc2.get(decoder.readString()) : decoder.readLeftID() : null,
            // parent
            cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
            // parentSub
            readItemContent(decoder, info)
            // item content
          );
          refs[i2] = struct;
          clock += struct.length;
        }
      }
    }
  }
  return clientRefs;
};
var integrateStructs = (transaction, store, clientsStructRefs) => {
  const stack = [];
  let clientsStructRefsIds = from(clientsStructRefs.keys()).sort((a, b) => a - b);
  if (clientsStructRefsIds.length === 0) {
    return null;
  }
  const getNextStructTarget = () => {
    if (clientsStructRefsIds.length === 0) {
      return null;
    }
    let nextStructsTarget = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1])
    );
    while (nextStructsTarget.refs.length === nextStructsTarget.i) {
      clientsStructRefsIds.pop();
      if (clientsStructRefsIds.length > 0) {
        nextStructsTarget = /** @type {{i:number,refs:Array<GC|Item>}} */
        clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
      } else {
        return null;
      }
    }
    return nextStructsTarget;
  };
  let curStructsTarget = getNextStructTarget();
  if (curStructsTarget === null) {
    return null;
  }
  const restStructs = new StructStore();
  const missingSV = /* @__PURE__ */ new Map();
  const updateMissingSv = (client, clock) => {
    const mclock = missingSV.get(client);
    if (mclock == null || mclock > clock) {
      missingSV.set(client, clock);
    }
  };
  let stackHead = (
    /** @type {any} */
    curStructsTarget.refs[
      /** @type {any} */
      curStructsTarget.i++
    ]
  );
  const state = /* @__PURE__ */ new Map();
  const addStackToRestSS = () => {
    for (const item of stack) {
      const client = item.id.client;
      const unapplicableItems = clientsStructRefs.get(client);
      if (unapplicableItems) {
        unapplicableItems.i--;
        restStructs.clients.set(client, unapplicableItems.refs.slice(unapplicableItems.i));
        clientsStructRefs.delete(client);
        unapplicableItems.i = 0;
        unapplicableItems.refs = [];
      } else {
        restStructs.clients.set(client, [item]);
      }
      clientsStructRefsIds = clientsStructRefsIds.filter((c) => c !== client);
    }
    stack.length = 0;
  };
  while (true) {
    if (stackHead.constructor !== Skip) {
      const localClock = setIfUndefined(state, stackHead.id.client, () => getState(store, stackHead.id.client));
      const offset = localClock - stackHead.id.clock;
      if (offset < 0) {
        stack.push(stackHead);
        updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
        addStackToRestSS();
      } else {
        const missing = stackHead.getMissing(transaction, store);
        if (missing !== null) {
          stack.push(stackHead);
          const structRefs = clientsStructRefs.get(
            /** @type {number} */
            missing
          ) || { refs: [], i: 0 };
          if (structRefs.refs.length === structRefs.i) {
            updateMissingSv(
              /** @type {number} */
              missing,
              getState(store, missing)
            );
            addStackToRestSS();
          } else {
            stackHead = structRefs.refs[structRefs.i++];
            continue;
          }
        } else if (offset === 0 || offset < stackHead.length) {
          stackHead.integrate(transaction, offset);
          state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
        }
      }
    }
    if (stack.length > 0) {
      stackHead = /** @type {GC|Item} */
      stack.pop();
    } else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) {
      stackHead = /** @type {GC|Item} */
      curStructsTarget.refs[curStructsTarget.i++];
    } else {
      curStructsTarget = getNextStructTarget();
      if (curStructsTarget === null) {
        break;
      } else {
        stackHead = /** @type {GC|Item} */
        curStructsTarget.refs[curStructsTarget.i++];
      }
    }
  }
  if (restStructs.clients.size > 0) {
    const encoder = new UpdateEncoderV2();
    writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
    writeVarUint(encoder.restEncoder, 0);
    return { missing: missingSV, update: encoder.toUint8Array() };
  }
  return null;
};
var writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
var readUpdateV2 = (decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc, (transaction) => {
  transaction.local = false;
  let retry = false;
  const doc2 = transaction.doc;
  const store = doc2.store;
  const ss = readClientsStructRefs(structDecoder, doc2);
  const restStructs = integrateStructs(transaction, store, ss);
  const pending = store.pendingStructs;
  if (pending) {
    for (const [client, clock] of pending.missing) {
      if (clock < getState(store, client)) {
        retry = true;
        break;
      }
    }
    if (restStructs) {
      for (const [client, clock] of restStructs.missing) {
        const mclock = pending.missing.get(client);
        if (mclock == null || mclock > clock) {
          pending.missing.set(client, clock);
        }
      }
      pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
    }
  } else {
    store.pendingStructs = restStructs;
  }
  const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
  if (store.pendingDs) {
    const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store.pendingDs));
    readVarUint(pendingDSUpdate.restDecoder);
    const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
    if (dsRest && dsRest2) {
      store.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
    } else {
      store.pendingDs = dsRest || dsRest2;
    }
  } else {
    store.pendingDs = dsRest;
  }
  if (retry) {
    const update = (
      /** @type {{update: Uint8Array}} */
      store.pendingStructs.update
    );
    store.pendingStructs = null;
    applyUpdateV2(transaction.doc, update);
  }
}, transactionOrigin, false);
var applyUpdateV2 = (ydoc, update, transactionOrigin, YDecoder = UpdateDecoderV2) => {
  const decoder = createDecoder(update);
  readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
};
var applyUpdate = (ydoc, update, transactionOrigin) => applyUpdateV2(ydoc, update, transactionOrigin, UpdateDecoderV1);
var writeStateAsUpdate = (encoder, doc2, targetStateVector = /* @__PURE__ */ new Map()) => {
  writeClientsStructs(encoder, doc2.store, targetStateVector);
  writeDeleteSet(encoder, createDeleteSetFromStructStore(doc2.store));
};
var encodeStateAsUpdateV2 = (doc2, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
  const targetStateVector = decodeStateVector(encodedTargetStateVector);
  writeStateAsUpdate(encoder, doc2, targetStateVector);
  const updates = [encoder.toUint8Array()];
  if (doc2.store.pendingDs) {
    updates.push(doc2.store.pendingDs);
  }
  if (doc2.store.pendingStructs) {
    updates.push(diffUpdateV2(doc2.store.pendingStructs.update, encodedTargetStateVector));
  }
  if (updates.length > 1) {
    if (encoder.constructor === UpdateEncoderV1) {
      return mergeUpdates(updates.map((update, i) => i === 0 ? update : convertUpdateFormatV2ToV1(update)));
    } else if (encoder.constructor === UpdateEncoderV2) {
      return mergeUpdatesV2(updates);
    }
  }
  return updates[0];
};
var encodeStateAsUpdate = (doc2, encodedTargetStateVector) => encodeStateAsUpdateV2(doc2, encodedTargetStateVector, new UpdateEncoderV1());
var readStateVector = (decoder) => {
  const ss = /* @__PURE__ */ new Map();
  const ssLength = readVarUint(decoder.restDecoder);
  for (let i = 0; i < ssLength; i++) {
    const client = readVarUint(decoder.restDecoder);
    const clock = readVarUint(decoder.restDecoder);
    ss.set(client, clock);
  }
  return ss;
};
var decodeStateVector = (decodedState) => readStateVector(new DSDecoderV1(createDecoder(decodedState)));
var EventHandler = class {
  constructor() {
    this.l = [];
  }
};
var createEventHandler = () => new EventHandler();
var addEventHandlerListener = (eventHandler, f) => eventHandler.l.push(f);
var removeEventHandlerListener = (eventHandler, f) => {
  const l = eventHandler.l;
  const len = l.length;
  eventHandler.l = l.filter((g) => f !== g);
  if (len === eventHandler.l.length) {
    console.error("[yjs] Tried to remove event handler that doesn't exist.");
  }
};
var callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
var ID = class {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(client, clock) {
    this.client = client;
    this.clock = clock;
  }
};
var compareIDs = (a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
var createID = (client, clock) => new ID(client, clock);
var findRootTypeKey = (type) => {
  for (const [key, value] of type.doc.share.entries()) {
    if (value === type) {
      return key;
    }
  }
  throw unexpectedCase();
};
var Snapshot = class {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(ds, sv) {
    this.ds = ds;
    this.sv = sv;
  }
};
var createSnapshot = (ds, sm) => new Snapshot(ds, sm);
var emptySnapshot = createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
var isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
var splitSnapshotAffectedStructs = (transaction, snapshot) => {
  const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create2);
  const store = transaction.doc.store;
  if (!meta.has(snapshot)) {
    snapshot.sv.forEach((clock, client) => {
      if (clock < getState(store, client)) {
        getItemCleanStart(transaction, createID(client, clock));
      }
    });
    iterateDeletedStructs(transaction, snapshot.ds, (_item) => {
    });
    meta.add(snapshot);
  }
};
var StructStore = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
    this.pendingStructs = null;
    this.pendingDs = null;
  }
};
var getStateVector = (store) => {
  const sm = /* @__PURE__ */ new Map();
  store.clients.forEach((structs, client) => {
    const struct = structs[structs.length - 1];
    sm.set(client, struct.id.clock + struct.length);
  });
  return sm;
};
var getState = (store, client) => {
  const structs = store.clients.get(client);
  if (structs === void 0) {
    return 0;
  }
  const lastStruct = structs[structs.length - 1];
  return lastStruct.id.clock + lastStruct.length;
};
var addStruct = (store, struct) => {
  let structs = store.clients.get(struct.id.client);
  if (structs === void 0) {
    structs = [];
    store.clients.set(struct.id.client, structs);
  } else {
    const lastStruct = structs[structs.length - 1];
    if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
      throw unexpectedCase();
    }
  }
  structs.push(struct);
};
var findIndexSS = (structs, clock) => {
  let left = 0;
  let right = structs.length - 1;
  let mid = structs[right];
  let midclock = mid.id.clock;
  if (midclock === clock) {
    return right;
  }
  let midindex = floor(clock / (midclock + mid.length - 1) * right);
  while (left <= right) {
    mid = structs[midindex];
    midclock = mid.id.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.length) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
    midindex = floor((left + right) / 2);
  }
  throw unexpectedCase();
};
var find = (store, id2) => {
  const structs = store.clients.get(id2.client);
  return structs[findIndexSS(structs, id2.clock)];
};
var getItem = (
  /** @type {function(StructStore,ID):Item} */
  find
);
var findIndexCleanStart = (transaction, structs, clock) => {
  const index = findIndexSS(structs, clock);
  const struct = structs[index];
  if (struct.id.clock < clock && struct instanceof Item) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
    return index + 1;
  }
  return index;
};
var getItemCleanStart = (transaction, id2) => {
  const structs = (
    /** @type {Array<Item>} */
    transaction.doc.store.clients.get(id2.client)
  );
  return structs[findIndexCleanStart(transaction, structs, id2.clock)];
};
var getItemCleanEnd = (transaction, store, id2) => {
  const structs = store.clients.get(id2.client);
  const index = findIndexSS(structs, id2.clock);
  const struct = structs[index];
  if (id2.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, id2.clock - struct.id.clock + 1));
  }
  return struct;
};
var replaceStruct = (store, struct, newStruct) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    store.clients.get(struct.id.client)
  );
  structs[findIndexSS(structs, struct.id.clock)] = newStruct;
};
var iterateStructs = (transaction, structs, clockStart, len, f) => {
  if (len === 0) {
    return;
  }
  const clockEnd = clockStart + len;
  let index = findIndexCleanStart(transaction, structs, clockStart);
  let struct;
  do {
    struct = structs[index++];
    if (clockEnd < struct.id.clock + struct.length) {
      findIndexCleanStart(transaction, structs, clockEnd);
    }
    f(struct);
  } while (index < structs.length && structs[index].id.clock < clockEnd);
};
var Transaction = class {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(doc2, origin, local) {
    this.doc = doc2;
    this.deleteSet = new DeleteSet();
    this.beforeState = getStateVector(doc2.store);
    this.afterState = /* @__PURE__ */ new Map();
    this.changed = /* @__PURE__ */ new Map();
    this.changedParentTypes = /* @__PURE__ */ new Map();
    this._mergeStructs = [];
    this.origin = origin;
    this.meta = /* @__PURE__ */ new Map();
    this.local = local;
    this.subdocsAdded = /* @__PURE__ */ new Set();
    this.subdocsRemoved = /* @__PURE__ */ new Set();
    this.subdocsLoaded = /* @__PURE__ */ new Set();
    this._needFormattingCleanup = false;
  }
};
var writeUpdateMessageFromTransaction = (encoder, transaction) => {
  if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
    return false;
  }
  sortAndMergeDeleteSet(transaction.deleteSet);
  writeStructsFromTransaction(encoder, transaction);
  writeDeleteSet(encoder, transaction.deleteSet);
  return true;
};
var addChangedTypeToTransaction = (transaction, type, parentSub) => {
  const item = type._item;
  if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
    setIfUndefined(transaction.changed, type, create2).add(parentSub);
  }
};
var tryToMergeWithLefts = (structs, pos) => {
  let right = structs[pos];
  let left = structs[pos - 1];
  let i = pos;
  for (; i > 0; right = left, left = structs[--i - 1]) {
    if (left.deleted === right.deleted && left.constructor === right.constructor) {
      if (left.mergeWith(right)) {
        if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */
        right.parent._map.get(right.parentSub) === right) {
          right.parent._map.set(
            right.parentSub,
            /** @type {Item} */
            left
          );
        }
        continue;
      }
    }
    break;
  }
  const merged = pos - i;
  if (merged) {
    structs.splice(pos + 1 - merged, merged);
  }
  return merged;
};
var tryGcDeleteSet = (ds, store, gcFilter) => {
  for (const [client, deleteItems] of ds.clients.entries()) {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const endDeleteItemClock = deleteItem.clock + deleteItem.len;
      for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
        const struct2 = structs[si];
        if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
          break;
        }
        if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
          struct2.gc(store, false);
        }
      }
    }
  }
};
var tryMergeDeleteSet = (ds, store) => {
  ds.clients.forEach((deleteItems, client) => {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
      for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]) {
        si -= 1 + tryToMergeWithLefts(structs, si);
      }
    }
  });
};
var cleanupTransactions = (transactionCleanups, i) => {
  if (i < transactionCleanups.length) {
    const transaction = transactionCleanups[i];
    const doc2 = transaction.doc;
    const store = doc2.store;
    const ds = transaction.deleteSet;
    const mergeStructs = transaction._mergeStructs;
    try {
      sortAndMergeDeleteSet(ds);
      transaction.afterState = getStateVector(transaction.doc.store);
      doc2.emit("beforeObserverCalls", [transaction, doc2]);
      const fs = [];
      transaction.changed.forEach(
        (subs, itemtype) => fs.push(() => {
          if (itemtype._item === null || !itemtype._item.deleted) {
            itemtype._callObserver(transaction, subs);
          }
        })
      );
      fs.push(() => {
        transaction.changedParentTypes.forEach((events, type) => {
          if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
            events = events.filter(
              (event) => event.target._item === null || !event.target._item.deleted
            );
            events.forEach((event) => {
              event.currentTarget = type;
              event._path = null;
            });
            events.sort((event1, event2) => event1.path.length - event2.path.length);
            callEventHandlerListeners(type._dEH, events, transaction);
          }
        });
      });
      fs.push(() => doc2.emit("afterTransaction", [transaction, doc2]));
      callAll(fs, []);
      if (transaction._needFormattingCleanup) {
        cleanupYTextAfterTransaction(transaction);
      }
    } finally {
      if (doc2.gc) {
        tryGcDeleteSet(ds, store, doc2.gcFilter);
      }
      tryMergeDeleteSet(ds, store);
      transaction.afterState.forEach((clock, client) => {
        const beforeClock = transaction.beforeState.get(client) || 0;
        if (beforeClock !== clock) {
          const structs = (
            /** @type {Array<GC|Item>} */
            store.clients.get(client)
          );
          const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
          for (let i2 = structs.length - 1; i2 >= firstChangePos; ) {
            i2 -= 1 + tryToMergeWithLefts(structs, i2);
          }
        }
      });
      for (let i2 = mergeStructs.length - 1; i2 >= 0; i2--) {
        const { client, clock } = mergeStructs[i2].id;
        const structs = (
          /** @type {Array<GC|Item>} */
          store.clients.get(client)
        );
        const replacedStructPos = findIndexSS(structs, clock);
        if (replacedStructPos + 1 < structs.length) {
          if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) {
            continue;
          }
        }
        if (replacedStructPos > 0) {
          tryToMergeWithLefts(structs, replacedStructPos);
        }
      }
      if (!transaction.local && transaction.afterState.get(doc2.clientID) !== transaction.beforeState.get(doc2.clientID)) {
        print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
        doc2.clientID = generateNewClientId();
      }
      doc2.emit("afterTransactionCleanup", [transaction, doc2]);
      if (doc2._observers.has("update")) {
        const encoder = new UpdateEncoderV1();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("update", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      if (doc2._observers.has("updateV2")) {
        const encoder = new UpdateEncoderV2();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
      if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
        subdocsAdded.forEach((subdoc) => {
          subdoc.clientID = doc2.clientID;
          if (subdoc.collectionid == null) {
            subdoc.collectionid = doc2.collectionid;
          }
          doc2.subdocs.add(subdoc);
        });
        subdocsRemoved.forEach((subdoc) => doc2.subdocs.delete(subdoc));
        doc2.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc2, transaction]);
        subdocsRemoved.forEach((subdoc) => subdoc.destroy());
      }
      if (transactionCleanups.length <= i + 1) {
        doc2._transactionCleanups = [];
        doc2.emit("afterAllTransactions", [doc2, transactionCleanups]);
      } else {
        cleanupTransactions(transactionCleanups, i + 1);
      }
    }
  }
};
var transact = (doc2, f, origin = null, local = true) => {
  const transactionCleanups = doc2._transactionCleanups;
  let initialCall = false;
  let result = null;
  if (doc2._transaction === null) {
    initialCall = true;
    doc2._transaction = new Transaction(doc2, origin, local);
    transactionCleanups.push(doc2._transaction);
    if (transactionCleanups.length === 1) {
      doc2.emit("beforeAllTransactions", [doc2]);
    }
    doc2.emit("beforeTransaction", [doc2._transaction, doc2]);
  }
  try {
    result = f(doc2._transaction);
  } finally {
    if (initialCall) {
      const finishCleanup = doc2._transaction === transactionCleanups[0];
      doc2._transaction = null;
      if (finishCleanup) {
        cleanupTransactions(transactionCleanups, 0);
      }
    }
  }
  return result;
};
function* lazyStructReaderGenerator(decoder) {
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      if (info === 10) {
        const len = readVarUint(decoder.restDecoder);
        yield new Skip(createID(client, clock), len);
        clock += len;
      } else if ((BITS5 & info) !== 0) {
        const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
        const struct = new Item(
          createID(client, clock),
          null,
          // left
          (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
          // origin
          null,
          // right
          (info & BIT7) === BIT7 ? decoder.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null,
          // parent
          cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
          // parentSub
          readItemContent(decoder, info)
          // item content
        );
        yield struct;
        clock += struct.length;
      } else {
        const len = decoder.readLen();
        yield new GC(createID(client, clock), len);
        clock += len;
      }
    }
  }
}
var LazyStructReader = class {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(decoder, filterSkips) {
    this.gen = lazyStructReaderGenerator(decoder);
    this.curr = null;
    this.done = false;
    this.filterSkips = filterSkips;
    this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do {
      this.curr = this.gen.next().value || null;
    } while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
    return this.curr;
  }
};
var LazyStructWriter = class {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(encoder) {
    this.currClient = 0;
    this.startClock = 0;
    this.written = 0;
    this.encoder = encoder;
    this.clientStructs = [];
  }
};
var mergeUpdates = (updates) => mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1);
var sliceStruct = (left, diff) => {
  if (left.constructor === GC) {
    const { client, clock } = left.id;
    return new GC(createID(client, clock + diff), left.length - diff);
  } else if (left.constructor === Skip) {
    const { client, clock } = left.id;
    return new Skip(createID(client, clock + diff), left.length - diff);
  } else {
    const leftItem = (
      /** @type {Item} */
      left
    );
    const { client, clock } = leftItem.id;
    return new Item(
      createID(client, clock + diff),
      null,
      createID(client, clock + diff - 1),
      null,
      leftItem.rightOrigin,
      leftItem.parent,
      leftItem.parentSub,
      leftItem.content.splice(diff)
    );
  }
};
var mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  if (updates.length === 1) {
    return updates[0];
  }
  const updateDecoders = updates.map((update) => new YDecoder(createDecoder(update)));
  let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
  let currWrite = null;
  const updateEncoder = new YEncoder();
  const lazyStructEncoder = new LazyStructWriter(updateEncoder);
  while (true) {
    lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
    lazyStructDecoders.sort(
      /** @type {function(any,any):number} */
      (dec1, dec2) => {
        if (dec1.curr.id.client === dec2.curr.id.client) {
          const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
          if (clockDiff === 0) {
            return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
          } else {
            return clockDiff;
          }
        } else {
          return dec2.curr.id.client - dec1.curr.id.client;
        }
      }
    );
    if (lazyStructDecoders.length === 0) {
      break;
    }
    const currDecoder = lazyStructDecoders[0];
    const firstClient = (
      /** @type {Item | GC} */
      currDecoder.curr.id.client
    );
    if (currWrite !== null) {
      let curr = (
        /** @type {Item | GC | null} */
        currDecoder.curr
      );
      let iterated = false;
      while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
        curr = currDecoder.next();
        iterated = true;
      }
      if (curr === null || // current decoder is empty
      curr.id.client !== firstClient || // check whether there is another decoder that has has updates from `firstClient`
      iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) {
        continue;
      }
      if (firstClient !== currWrite.struct.id.client) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = { struct: curr, offset: 0 };
        currDecoder.next();
      } else {
        if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
          if (currWrite.struct.constructor === Skip) {
            currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
          } else {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
            const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
            currWrite = { struct, offset: 0 };
          }
        } else {
          const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
          if (diff > 0) {
            if (currWrite.struct.constructor === Skip) {
              currWrite.struct.length -= diff;
            } else {
              curr = sliceStruct(curr, diff);
            }
          }
          if (!currWrite.struct.mergeWith(
            /** @type {any} */
            curr
          )) {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            currWrite = { struct: curr, offset: 0 };
            currDecoder.next();
          }
        }
      }
    } else {
      currWrite = { struct: (
        /** @type {Item | GC} */
        currDecoder.curr
      ), offset: 0 };
      currDecoder.next();
    }
    for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
      writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
      currWrite = { struct: next, offset: 0 };
    }
  }
  if (currWrite !== null) {
    writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
    currWrite = null;
  }
  finishLazyStructWriting(lazyStructEncoder);
  const dss = updateDecoders.map((decoder) => readDeleteSet(decoder));
  const ds = mergeDeleteSets(dss);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
var diffUpdateV2 = (update, sv, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  const state = decodeStateVector(sv);
  const encoder = new YEncoder();
  const lazyStructWriter = new LazyStructWriter(encoder);
  const decoder = new YDecoder(createDecoder(update));
  const reader = new LazyStructReader(decoder, false);
  while (reader.curr) {
    const curr = reader.curr;
    const currClient = curr.id.client;
    const svClock = state.get(currClient) || 0;
    if (reader.curr.constructor === Skip) {
      reader.next();
      continue;
    }
    if (curr.id.clock + curr.length > svClock) {
      writeStructToLazyStructWriter(lazyStructWriter, curr, max(svClock - curr.id.clock, 0));
      reader.next();
      while (reader.curr && reader.curr.id.client === currClient) {
        writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
        reader.next();
      }
    } else {
      while (reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock) {
        reader.next();
      }
    }
  }
  finishLazyStructWriting(lazyStructWriter);
  const ds = readDeleteSet(decoder);
  writeDeleteSet(encoder, ds);
  return encoder.toUint8Array();
};
var flushLazyStructWriter = (lazyWriter) => {
  if (lazyWriter.written > 0) {
    lazyWriter.clientStructs.push({ written: lazyWriter.written, restEncoder: toUint8Array2(lazyWriter.encoder.restEncoder) });
    lazyWriter.encoder.restEncoder = createEncoder();
    lazyWriter.written = 0;
  }
};
var writeStructToLazyStructWriter = (lazyWriter, struct, offset) => {
  if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) {
    flushLazyStructWriter(lazyWriter);
  }
  if (lazyWriter.written === 0) {
    lazyWriter.currClient = struct.id.client;
    lazyWriter.encoder.writeClient(struct.id.client);
    writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
  }
  struct.write(lazyWriter.encoder, offset);
  lazyWriter.written++;
};
var finishLazyStructWriting = (lazyWriter) => {
  flushLazyStructWriter(lazyWriter);
  const restEncoder = lazyWriter.encoder.restEncoder;
  writeVarUint(restEncoder, lazyWriter.clientStructs.length);
  for (let i = 0; i < lazyWriter.clientStructs.length; i++) {
    const partStructs = lazyWriter.clientStructs[i];
    writeVarUint(restEncoder, partStructs.written);
    writeUint8Array(restEncoder, partStructs.restEncoder);
  }
};
var convertUpdateFormat = (update, blockTransformer, YDecoder, YEncoder) => {
  const updateDecoder = new YDecoder(createDecoder(update));
  const lazyDecoder = new LazyStructReader(updateDecoder, false);
  const updateEncoder = new YEncoder();
  const lazyWriter = new LazyStructWriter(updateEncoder);
  for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
    writeStructToLazyStructWriter(lazyWriter, blockTransformer(curr), 0);
  }
  finishLazyStructWriting(lazyWriter);
  const ds = readDeleteSet(updateDecoder);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
var convertUpdateFormatV2ToV1 = (update) => convertUpdateFormat(update, id, UpdateDecoderV2, UpdateEncoderV1);
var errorComputeChanges = "You must not compute changes after the event-handler fired.";
var YEvent = class {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(target, transaction) {
    this.target = target;
    this.currentTarget = target;
    this.transaction = transaction;
    this._changes = null;
    this._keys = null;
    this._delta = null;
    this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = getPathTo(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(struct) {
    return isDeleted(this.transaction.deleteSet, struct.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create3(errorComputeChanges);
      }
      const keys2 = /* @__PURE__ */ new Map();
      const target = this.target;
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      changed.forEach((key) => {
        if (key !== null) {
          const item = (
            /** @type {Item} */
            target._map.get(key)
          );
          let action;
          let oldValue;
          if (this.adds(item)) {
            let prev = item.left;
            while (prev !== null && this.adds(prev)) {
              prev = prev.left;
            }
            if (this.deletes(item)) {
              if (prev !== null && this.deletes(prev)) {
                action = "delete";
                oldValue = last(prev.content.getContent());
              } else {
                return;
              }
            } else {
              if (prev !== null && this.deletes(prev)) {
                action = "update";
                oldValue = last(prev.content.getContent());
              } else {
                action = "add";
                oldValue = void 0;
              }
            }
          } else {
            if (this.deletes(item)) {
              action = "delete";
              oldValue = last(
                /** @type {Item} */
                item.content.getContent()
              );
            } else {
              return;
            }
          }
          keys2.set(key, { action, oldValue });
        }
      });
      this._keys = keys2;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(struct) {
    return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let changes = this._changes;
    if (changes === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create3(errorComputeChanges);
      }
      const target = this.target;
      const added = create2();
      const deleted = create2();
      const delta = [];
      changes = {
        added,
        deleted,
        delta,
        keys: this.keys
      };
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      if (changed.has(null)) {
        let lastOp = null;
        const packOp = () => {
          if (lastOp) {
            delta.push(lastOp);
          }
        };
        for (let item = target._start; item !== null; item = item.right) {
          if (item.deleted) {
            if (this.deletes(item) && !this.adds(item)) {
              if (lastOp === null || lastOp.delete === void 0) {
                packOp();
                lastOp = { delete: 0 };
              }
              lastOp.delete += item.length;
              deleted.add(item);
            }
          } else {
            if (this.adds(item)) {
              if (lastOp === null || lastOp.insert === void 0) {
                packOp();
                lastOp = { insert: [] };
              }
              lastOp.insert = lastOp.insert.concat(item.content.getContent());
              added.add(item);
            } else {
              if (lastOp === null || lastOp.retain === void 0) {
                packOp();
                lastOp = { retain: 0 };
              }
              lastOp.retain += item.length;
            }
          }
        }
        if (lastOp !== null && lastOp.retain === void 0) {
          packOp();
        }
      }
      this._changes = changes;
    }
    return (
      /** @type {any} */
      changes
    );
  }
};
var getPathTo = (parent, child) => {
  const path = [];
  while (child._item !== null && child !== parent) {
    if (child._item.parentSub !== null) {
      path.unshift(child._item.parentSub);
    } else {
      let i = 0;
      let c = (
        /** @type {AbstractType<any>} */
        child._item.parent._start
      );
      while (c !== child._item && c !== null) {
        if (!c.deleted) {
          i++;
        }
        c = c.right;
      }
      path.unshift(i);
    }
    child = /** @type {AbstractType<any>} */
    child._item.parent;
  }
  return path;
};
var maxSearchMarker = 80;
var globalSearchMarkerTimestamp = 0;
var ArraySearchMarker = class {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(p, index) {
    p.marker = true;
    this.p = p;
    this.index = index;
    this.timestamp = globalSearchMarkerTimestamp++;
  }
};
var refreshMarkerTimestamp = (marker) => {
  marker.timestamp = globalSearchMarkerTimestamp++;
};
var overwriteMarker = (marker, p, index) => {
  marker.p.marker = false;
  marker.p = p;
  p.marker = true;
  marker.index = index;
  marker.timestamp = globalSearchMarkerTimestamp++;
};
var markPosition = (searchMarker, p, index) => {
  if (searchMarker.length >= maxSearchMarker) {
    const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
    overwriteMarker(marker, p, index);
    return marker;
  } else {
    const pm = new ArraySearchMarker(p, index);
    searchMarker.push(pm);
    return pm;
  }
};
var findMarker = (yarray, index) => {
  if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
    return null;
  }
  const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index - a.index) < abs(index - b.index) ? a : b);
  let p = yarray._start;
  let pindex = 0;
  if (marker !== null) {
    p = marker.p;
    pindex = marker.index;
    refreshMarkerTimestamp(marker);
  }
  while (p.right !== null && pindex < index) {
    if (!p.deleted && p.countable) {
      if (index < pindex + p.length) {
        break;
      }
      pindex += p.length;
    }
    p = p.right;
  }
  while (p.left !== null && pindex > index) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  while (p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  if (marker !== null && abs(marker.index - pindex) < /** @type {YText|YArray<any>} */
  p.parent.length / maxSearchMarker) {
    overwriteMarker(marker, p, pindex);
    return marker;
  } else {
    return markPosition(yarray._searchMarker, p, pindex);
  }
};
var updateMarkerChanges = (searchMarker, index, len) => {
  for (let i = searchMarker.length - 1; i >= 0; i--) {
    const m = searchMarker[i];
    if (len > 0) {
      let p = m.p;
      p.marker = false;
      while (p && (p.deleted || !p.countable)) {
        p = p.left;
        if (p && !p.deleted && p.countable) {
          m.index -= p.length;
        }
      }
      if (p === null || p.marker === true) {
        searchMarker.splice(i, 1);
        continue;
      }
      m.p = p;
      p.marker = true;
    }
    if (index < m.index || len > 0 && index === m.index) {
      m.index = max(index, m.index + len);
    }
  }
};
var callTypeObservers = (type, transaction, event) => {
  const changedType = type;
  const changedParentTypes = transaction.changedParentTypes;
  while (true) {
    setIfUndefined(changedParentTypes, type, () => []).push(event);
    if (type._item === null) {
      break;
    }
    type = /** @type {AbstractType<any>} */
    type._item.parent;
  }
  callEventHandlerListeners(changedType._eH, event, transaction);
};
var AbstractType = class {
  constructor() {
    this._item = null;
    this._map = /* @__PURE__ */ new Map();
    this._start = null;
    this.doc = null;
    this._length = 0;
    this._eH = createEventHandler();
    this._dEH = createEventHandler();
    this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(y, item) {
    this.doc = y;
    this._item = item;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw methodUnimplemented();
  }
  /**
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw methodUnimplemented();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(_encoder) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let n = this._start;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, _parentSubs) {
    if (!transaction.local && this._searchMarker) {
      this._searchMarker.length = 0;
    }
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(f) {
    addEventHandlerListener(this._eH, f);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(f) {
    addEventHandlerListener(this._dEH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(f) {
    removeEventHandlerListener(this._eH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(f) {
    removeEventHandlerListener(this._dEH, f);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
};
var typeListSlice = (type, start, end) => {
  if (start < 0) {
    start = type._length + start;
  }
  if (end < 0) {
    end = type._length + end;
  }
  let len = end - start;
  const cs = [];
  let n = type._start;
  while (n !== null && len > 0) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      if (c.length <= start) {
        start -= c.length;
      } else {
        for (let i = start; i < c.length && len > 0; i++) {
          cs.push(c[i]);
          len--;
        }
        start = 0;
      }
    }
    n = n.right;
  }
  return cs;
};
var typeListToArray = (type) => {
  const cs = [];
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        cs.push(c[i]);
      }
    }
    n = n.right;
  }
  return cs;
};
var typeListForEach = (type, f) => {
  let index = 0;
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        f(c[i], index++, type);
      }
    }
    n = n.right;
  }
};
var typeListMap = (type, f) => {
  const result = [];
  typeListForEach(type, (c, i) => {
    result.push(f(c, i, type));
  });
  return result;
};
var typeListCreateIterator = (type) => {
  let n = type._start;
  let currentContent = null;
  let currentContentIndex = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (currentContent === null) {
        while (n !== null && n.deleted) {
          n = n.right;
        }
        if (n === null) {
          return {
            done: true,
            value: void 0
          };
        }
        currentContent = n.content.getContent();
        currentContentIndex = 0;
        n = n.right;
      }
      const value = currentContent[currentContentIndex++];
      if (currentContent.length <= currentContentIndex) {
        currentContent = null;
      }
      return {
        done: false,
        value
      };
    }
  };
};
var typeListGet = (type, index) => {
  const marker = findMarker(type, index);
  let n = type._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        return n.content.getContent()[index];
      }
      index -= n.length;
    }
  }
};
var typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
  let left = referenceItem;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const store = doc2.store;
  const right = referenceItem === null ? parent._start : referenceItem.right;
  let jsonContent = [];
  const packJsonContent = () => {
    if (jsonContent.length > 0) {
      left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
      left.integrate(transaction, 0);
      jsonContent = [];
    }
  };
  content.forEach((c) => {
    if (c === null) {
      jsonContent.push(c);
    } else {
      switch (c.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          jsonContent.push(c);
          break;
        default:
          packJsonContent();
          switch (c.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(
                /** @type {Uint8Array} */
                c
              )));
              left.integrate(transaction, 0);
              break;
            case Doc:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(
                /** @type {Doc} */
                c
              ));
              left.integrate(transaction, 0);
              break;
            default:
              if (c instanceof AbstractType) {
                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                left.integrate(transaction, 0);
              } else {
                throw new Error("Unexpected content type in insert operation");
              }
          }
      }
    }
  });
  packJsonContent();
};
var lengthExceeded = () => create3("Length exceeded!");
var typeListInsertGenerics = (transaction, parent, index, content) => {
  if (index > parent._length) {
    throw lengthExceeded();
  }
  if (index === 0) {
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, index, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, null, content);
  }
  const startIndex = index;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
    if (index === 0) {
      n = n.prev;
      index += n && n.countable && !n.deleted ? n.length : 0;
    }
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index <= n.length) {
        if (index < n.length) {
          getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
        }
        break;
      }
      index -= n.length;
    }
  }
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, startIndex, content.length);
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
var typeListPushGenerics = (transaction, parent, content) => {
  const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
  let n = marker.p;
  if (n) {
    while (n.right) {
      n = n.right;
    }
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
var typeListDelete = (transaction, parent, index, length3) => {
  if (length3 === 0) {
    return;
  }
  const startIndex = index;
  const startLength = length3;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null && index > 0; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
      }
      index -= n.length;
    }
  }
  while (length3 > 0 && n !== null) {
    if (!n.deleted) {
      if (length3 < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length3));
      }
      n.delete(transaction);
      length3 -= n.length;
    }
    n = n.right;
  }
  if (length3 > 0) {
    throw lengthExceeded();
  }
  if (parent._searchMarker) {
    updateMarkerChanges(
      parent._searchMarker,
      startIndex,
      -startLength + length3
      /* in case we remove the above exception */
    );
  }
};
var typeMapDelete = (transaction, parent, key) => {
  const c = parent._map.get(key);
  if (c !== void 0) {
    c.delete(transaction);
  }
};
var typeMapSet = (transaction, parent, key, value) => {
  const left = parent._map.get(key) || null;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  let content;
  if (value == null) {
    content = new ContentAny([value]);
  } else {
    switch (value.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
        content = new ContentAny([value]);
        break;
      case Uint8Array:
        content = new ContentBinary(
          /** @type {Uint8Array} */
          value
        );
        break;
      case Doc:
        content = new ContentDoc(
          /** @type {Doc} */
          value
        );
        break;
      default:
        if (value instanceof AbstractType) {
          content = new ContentType(value);
        } else {
          throw new Error("Unexpected content type");
        }
    }
  }
  new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
};
var typeMapGet = (parent, key) => {
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
};
var typeMapGetAll = (parent) => {
  const res = {};
  parent._map.forEach((value, key) => {
    if (!value.deleted) {
      res[key] = value.content.getContent()[value.length - 1];
    }
  });
  return res;
};
var typeMapHas = (parent, key) => {
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted;
};
var typeMapGetAllSnapshot = (parent, snapshot) => {
  const res = {};
  parent._map.forEach((value, key) => {
    let v = value;
    while (v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0))) {
      v = v.left;
    }
    if (v !== null && isVisible(v, snapshot)) {
      res[key] = v.content.getContent()[v.length - 1];
    }
  });
  return res;
};
var createMapIterator = (map) => iteratorFilter(
  map.entries(),
  /** @param {any} entry */
  (entry) => !entry[1].deleted
);
var YArrayEvent = class extends YEvent {
  /**
   * @param {YArray<T>} yarray The changed type
   * @param {Transaction} transaction The transaction object
   */
  constructor(yarray, transaction) {
    super(yarray, transaction);
    this._transaction = transaction;
  }
};
var YArray = class extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
    this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(items) {
    const a = new YArray();
    a.push(items);
    return a;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new YArray();
  }
  /**
   * @return {YArray<T>}
   */
  clone() {
    const arr = new YArray();
    arr.insert(0, this.toArray().map(
      (el) => el instanceof AbstractType ? (
        /** @type {typeof el} */
        el.clone()
      ) : el
    ));
    return arr;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(
          transaction,
          this,
          index,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListPushGenerics(
          transaction,
          this,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.push(...content);
    }
  }
  /**
   * Preppends content to this YArray.
   *
   * @param {Array<T>} content Array of content to preppend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(index, length3 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length3);
      });
    } else {
      this._prelimContent.splice(index, length3);
    }
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(f) {
    return typeListMap(
      this,
      /** @type {any} */
      f
    );
  }
  /**
   * Executes a provided function once on overy element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return typeListCreateIterator(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YArrayRefID);
  }
};
var readYArray = (_decoder) => new YArray();
var YMapEvent = class extends YEvent {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(ymap, transaction, subs) {
    super(ymap, transaction);
    this.keysChanged = subs;
  }
};
var YMap = class extends AbstractType {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(entries) {
    super();
    this._prelimContent = null;
    if (entries === void 0) {
      this._prelimContent = /* @__PURE__ */ new Map();
    } else {
      this._prelimContent = new Map(entries);
    }
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this._prelimContent.forEach((value, key) => {
      this.set(key, value);
    });
    this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new YMap();
  }
  /**
   * @return {YMap<MapType>}
   */
  clone() {
    const map = new YMap();
    this.forEach((value, key) => {
      map.set(key, value instanceof AbstractType ? (
        /** @type {typeof value} */
        value.clone()
      ) : value);
    });
    return map;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    const map = {};
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        const v = item.content.getContent()[item.length - 1];
        map[key] = v instanceof AbstractType ? v.toJSON() : v;
      }
    });
    return map;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...createMapIterator(this._map)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => v[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => v[1].content.getContent()[v[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => (
        /** @type {any} */
        [v[0], v[1].content.getContent()[v[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        f(item.content.getContent()[item.length - 1], key, this);
      }
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(key) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, key);
      });
    } else {
      this._prelimContent.delete(key);
    }
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(key, value) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(
          transaction,
          this,
          key,
          /** @type {any} */
          value
        );
      });
    } else {
      this._prelimContent.set(key, value);
    }
    return value;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(key) {
    return (
      /** @type {any} */
      typeMapGet(this, key)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(key) {
    return typeMapHas(this, key);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        this.forEach(function(_value, key, map) {
          typeMapDelete(transaction, map, key);
        });
      });
    } else {
      this._prelimContent.clear();
    }
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YMapRefID);
  }
};
var readYMap = (_decoder) => new YMap();
var equalAttrs = (a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b);
var ItemTextListPosition = class {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(left, right, index, currentAttributes) {
    this.left = left;
    this.right = right;
    this.index = index;
    this.currentAttributes = currentAttributes;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    if (this.right === null) {
      unexpectedCase();
    }
    switch (this.right.content.constructor) {
      case ContentFormat:
        if (!this.right.deleted) {
          updateCurrentAttributes(
            this.currentAttributes,
            /** @type {ContentFormat} */
            this.right.content
          );
        }
        break;
      default:
        if (!this.right.deleted) {
          this.index += this.right.length;
        }
        break;
    }
    this.left = this.right;
    this.right = this.right.right;
  }
};
var findNextPosition = (transaction, pos, count2) => {
  while (pos.right !== null && count2 > 0) {
    switch (pos.right.content.constructor) {
      case ContentFormat:
        if (!pos.right.deleted) {
          updateCurrentAttributes(
            pos.currentAttributes,
            /** @type {ContentFormat} */
            pos.right.content
          );
        }
        break;
      default:
        if (!pos.right.deleted) {
          if (count2 < pos.right.length) {
            getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count2));
          }
          pos.index += pos.right.length;
          count2 -= pos.right.length;
        }
        break;
    }
    pos.left = pos.right;
    pos.right = pos.right.right;
  }
  return pos;
};
var findPosition = (transaction, parent, index, useSearchMarker) => {
  const currentAttributes = /* @__PURE__ */ new Map();
  const marker = useSearchMarker ? findMarker(parent, index) : null;
  if (marker) {
    const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
    return findNextPosition(transaction, pos, index - marker.index);
  } else {
    const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
    return findNextPosition(transaction, pos, index);
  }
};
var insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
  while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(
    negatedAttributes.get(
      /** @type {ContentFormat} */
      currPos.right.content.key
    ),
    /** @type {ContentFormat} */
    currPos.right.content.value
  ))) {
    if (!currPos.right.deleted) {
      negatedAttributes.delete(
        /** @type {ContentFormat} */
        currPos.right.content.key
      );
    }
    currPos.forward();
  }
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  negatedAttributes.forEach((val, key) => {
    const left = currPos.left;
    const right = currPos.right;
    const nextFormat = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
    nextFormat.integrate(transaction, 0);
    currPos.right = nextFormat;
    currPos.forward();
  });
};
var updateCurrentAttributes = (currentAttributes, format) => {
  const { key, value } = format;
  if (value === null) {
    currentAttributes.delete(key);
  } else {
    currentAttributes.set(key, value);
  }
};
var minimizeAttributeChanges = (currPos, attributes) => {
  while (true) {
    if (currPos.right === null) {
      break;
    } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(
      attributes[
        /** @type {ContentFormat} */
        currPos.right.content.key
      ] || null,
      /** @type {ContentFormat} */
      currPos.right.content.value
    ))
      ;
    else {
      break;
    }
    currPos.forward();
  }
};
var insertAttributes = (transaction, parent, currPos, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const negatedAttributes = /* @__PURE__ */ new Map();
  for (const key in attributes) {
    const val = attributes[key];
    const currentVal = currPos.currentAttributes.get(key) || null;
    if (!equalAttrs(currentVal, val)) {
      negatedAttributes.set(key, currentVal);
      const { left, right } = currPos;
      currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
      currPos.right.integrate(transaction, 0);
      currPos.forward();
    }
  }
  return negatedAttributes;
};
var insertText = (transaction, parent, currPos, text, attributes) => {
  currPos.currentAttributes.forEach((_val, key) => {
    if (attributes[key] === void 0) {
      attributes[key] = null;
    }
  });
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  const content = text.constructor === String ? new ContentString(
    /** @type {string} */
    text
  ) : text instanceof AbstractType ? new ContentType(text) : new ContentEmbed(text);
  let { left, right, index } = currPos;
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
  }
  right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
  right.integrate(transaction, 0);
  currPos.right = right;
  currPos.index = index;
  currPos.forward();
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
var formatText = (transaction, parent, currPos, length3, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  iterationLoop:
    while (currPos.right !== null && (length3 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
      if (!currPos.right.deleted) {
        switch (currPos.right.content.constructor) {
          case ContentFormat: {
            const { key, value } = (
              /** @type {ContentFormat} */
              currPos.right.content
            );
            const attr2 = attributes[key];
            if (attr2 !== void 0) {
              if (equalAttrs(attr2, value)) {
                negatedAttributes.delete(key);
              } else {
                if (length3 === 0) {
                  break iterationLoop;
                }
                negatedAttributes.set(key, value);
              }
              currPos.right.delete(transaction);
            } else {
              currPos.currentAttributes.set(key, value);
            }
            break;
          }
          default:
            if (length3 < currPos.right.length) {
              getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
            }
            length3 -= currPos.right.length;
            break;
        }
      }
      currPos.forward();
    }
  if (length3 > 0) {
    let newlines = "";
    for (; length3 > 0; length3--) {
      newlines += "\n";
    }
    currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
    currPos.right.integrate(transaction, 0);
    currPos.forward();
  }
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
var cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
  let end = start;
  const endFormats = create();
  while (end && (!end.countable || end.deleted)) {
    if (!end.deleted && end.content.constructor === ContentFormat) {
      const cf = (
        /** @type {ContentFormat} */
        end.content
      );
      endFormats.set(cf.key, cf);
    }
    end = end.right;
  }
  let cleanups = 0;
  let reachedCurr = false;
  while (start !== end) {
    if (curr === start) {
      reachedCurr = true;
    }
    if (!start.deleted) {
      const content = start.content;
      switch (content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            content
          );
          const startAttrValue = startAttributes.get(key) || null;
          if (endFormats.get(key) !== content || startAttrValue === value) {
            start.delete(transaction);
            cleanups++;
            if (!reachedCurr && (currAttributes.get(key) || null) === value && startAttrValue !== value) {
              if (startAttrValue === null) {
                currAttributes.delete(key);
              } else {
                currAttributes.set(key, startAttrValue);
              }
            }
          }
          if (!reachedCurr && !start.deleted) {
            updateCurrentAttributes(
              currAttributes,
              /** @type {ContentFormat} */
              content
            );
          }
          break;
        }
      }
    }
    start = /** @type {Item} */
    start.right;
  }
  return cleanups;
};
var cleanupContextlessFormattingGap = (transaction, item) => {
  while (item && item.right && (item.right.deleted || !item.right.countable)) {
    item = item.right;
  }
  const attrs = /* @__PURE__ */ new Set();
  while (item && (item.deleted || !item.countable)) {
    if (!item.deleted && item.content.constructor === ContentFormat) {
      const key = (
        /** @type {ContentFormat} */
        item.content.key
      );
      if (attrs.has(key)) {
        item.delete(transaction);
      } else {
        attrs.add(key);
      }
    }
    item = item.left;
  }
};
var cleanupYTextFormatting = (type) => {
  let res = 0;
  transact(
    /** @type {Doc} */
    type.doc,
    (transaction) => {
      let start = (
        /** @type {Item} */
        type._start
      );
      let end = type._start;
      let startAttributes = create();
      const currentAttributes = copy(startAttributes);
      while (end) {
        if (end.deleted === false) {
          switch (end.content.constructor) {
            case ContentFormat:
              updateCurrentAttributes(
                currentAttributes,
                /** @type {ContentFormat} */
                end.content
              );
              break;
            default:
              res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
              startAttributes = copy(currentAttributes);
              start = end;
              break;
          }
        }
        end = end.right;
      }
    }
  );
  return res;
};
var cleanupYTextAfterTransaction = (transaction) => {
  const needFullCleanup = /* @__PURE__ */ new Set();
  const doc2 = transaction.doc;
  for (const [client, afterClock] of transaction.afterState.entries()) {
    const clock = transaction.beforeState.get(client) || 0;
    if (afterClock === clock) {
      continue;
    }
    iterateStructs(
      transaction,
      /** @type {Array<Item|GC>} */
      doc2.store.clients.get(client),
      clock,
      afterClock,
      (item) => {
        if (!item.deleted && /** @type {Item} */
        item.content.constructor === ContentFormat && item.constructor !== GC) {
          needFullCleanup.add(
            /** @type {any} */
            item.parent
          );
        }
      }
    );
  }
  transact(doc2, (t) => {
    iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
      if (item instanceof GC || !/** @type {YText} */
      item.parent._hasFormatting || needFullCleanup.has(
        /** @type {YText} */
        item.parent
      )) {
        return;
      }
      const parent = (
        /** @type {YText} */
        item.parent
      );
      if (item.content.constructor === ContentFormat) {
        needFullCleanup.add(parent);
      } else {
        cleanupContextlessFormattingGap(t, item);
      }
    });
    for (const yText of needFullCleanup) {
      cleanupYTextFormatting(yText);
    }
  });
};
var deleteText = (transaction, currPos, length3) => {
  const startLength = length3;
  const startAttrs = copy(currPos.currentAttributes);
  const start = currPos.right;
  while (length3 > 0 && currPos.right !== null) {
    if (currPos.right.deleted === false) {
      switch (currPos.right.content.constructor) {
        case ContentType:
        case ContentEmbed:
        case ContentString:
          if (length3 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
          }
          length3 -= currPos.right.length;
          currPos.right.delete(transaction);
          break;
      }
    }
    currPos.forward();
  }
  if (start) {
    cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
  }
  const parent = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (currPos.left || currPos.right).parent
  );
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length3);
  }
  return currPos;
};
var YTextEvent = class extends YEvent {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(ytext, transaction, subs) {
    super(ytext, transaction);
    this.childListChanged = false;
    this.keysChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.keysChanged.add(sub);
      }
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const changes = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = changes;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const y = (
        /** @type {Doc} */
        this.target.doc
      );
      const delta = [];
      transact(y, (transaction) => {
        const currentAttributes = /* @__PURE__ */ new Map();
        const oldAttributes = /* @__PURE__ */ new Map();
        let item = this.target._start;
        let action = null;
        const attributes = {};
        let insert2 = "";
        let retain = 0;
        let deleteLen = 0;
        const addOp = () => {
          if (action !== null) {
            let op = null;
            switch (action) {
              case "delete":
                if (deleteLen > 0) {
                  op = { delete: deleteLen };
                }
                deleteLen = 0;
                break;
              case "insert":
                if (typeof insert2 === "object" || insert2.length > 0) {
                  op = { insert: insert2 };
                  if (currentAttributes.size > 0) {
                    op.attributes = {};
                    currentAttributes.forEach((value, key) => {
                      if (value !== null) {
                        op.attributes[key] = value;
                      }
                    });
                  }
                }
                insert2 = "";
                break;
              case "retain":
                if (retain > 0) {
                  op = { retain };
                  if (!isEmpty(attributes)) {
                    op.attributes = assign2({}, attributes);
                  }
                }
                retain = 0;
                break;
            }
            if (op)
              delta.push(op);
            action = null;
          }
        };
        while (item !== null) {
          switch (item.content.constructor) {
            case ContentType:
            case ContentEmbed:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  addOp();
                  action = "insert";
                  insert2 = item.content.getContent()[0];
                  addOp();
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += 1;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += 1;
              }
              break;
            case ContentString:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  if (action !== "insert") {
                    addOp();
                    action = "insert";
                  }
                  insert2 += /** @type {ContentString} */
                  item.content.str;
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += item.length;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += item.length;
              }
              break;
            case ContentFormat: {
              const { key, value } = (
                /** @type {ContentFormat} */
                item.content
              );
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  const curVal = currentAttributes.get(key) || null;
                  if (!equalAttrs(curVal, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (equalAttrs(value, oldAttributes.get(key) || null)) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (value !== null) {
                    item.delete(transaction);
                  }
                }
              } else if (this.deletes(item)) {
                oldAttributes.set(key, value);
                const curVal = currentAttributes.get(key) || null;
                if (!equalAttrs(curVal, value)) {
                  if (action === "retain") {
                    addOp();
                  }
                  attributes[key] = curVal;
                }
              } else if (!item.deleted) {
                oldAttributes.set(key, value);
                const attr2 = attributes[key];
                if (attr2 !== void 0) {
                  if (!equalAttrs(attr2, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (value === null) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (attr2 !== null) {
                    item.delete(transaction);
                  }
                }
              }
              if (!item.deleted) {
                if (action === "insert") {
                  addOp();
                }
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  item.content
                );
              }
              break;
            }
          }
          item = item.right;
        }
        addOp();
        while (delta.length > 0) {
          const lastOp = delta[delta.length - 1];
          if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
            delta.pop();
          } else {
            break;
          }
        }
      });
      this._delta = delta;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
};
var YText = class extends AbstractType {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(string) {
    super();
    this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
    this._searchMarker = [];
    this._hasFormatting = false;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    try {
      this._pending.forEach((f) => f());
    } catch (e) {
      console.error(e);
    }
    this._pending = null;
  }
  _copy() {
    return new YText();
  }
  /**
   * @return {YText}
   */
  clone() {
    const text = new YText();
    text.applyDelta(this.toDelta());
    return text;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    const event = new YTextEvent(this, transaction, parentSubs);
    callTypeObservers(this, transaction, event);
    if (!transaction.local && this._hasFormatting) {
      transaction._needFormattingCleanup = true;
    }
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    let str = "";
    let n = this._start;
    while (n !== null) {
      if (!n.deleted && n.countable && n.content.constructor === ContentString) {
        str += /** @type {ContentString} */
        n.content.str;
      }
      n = n.right;
    }
    return str;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {any} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(delta, { sanitize = true } = {}) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
        for (let i = 0; i < delta.length; i++) {
          const op = delta[i];
          if (op.insert !== void 0) {
            const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
            if (typeof ins !== "string" || ins.length > 0) {
              insertText(transaction, this, currPos, ins, op.attributes || {});
            }
          } else if (op.retain !== void 0) {
            formatText(transaction, this, currPos, op.retain, op.attributes || {});
          } else if (op.delete !== void 0) {
            deleteText(transaction, currPos, op.delete);
          }
        }
      });
    } else {
      this._pending.push(() => this.applyDelta(delta));
    }
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(snapshot, prevSnapshot, computeYChange) {
    const ops = [];
    const currentAttributes = /* @__PURE__ */ new Map();
    const doc2 = (
      /** @type {Doc} */
      this.doc
    );
    let str = "";
    let n = this._start;
    function packStr() {
      if (str.length > 0) {
        const attributes = {};
        let addAttributes = false;
        currentAttributes.forEach((value, key) => {
          addAttributes = true;
          attributes[key] = value;
        });
        const op = { insert: str };
        if (addAttributes) {
          op.attributes = attributes;
        }
        ops.push(op);
        str = "";
      }
    }
    const computeDelta = () => {
      while (n !== null) {
        if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) {
          switch (n.content.constructor) {
            case ContentString: {
              const cur = currentAttributes.get("ychange");
              if (snapshot !== void 0 && !isVisible(n, snapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
                }
              } else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
                }
              } else if (cur !== void 0) {
                packStr();
                currentAttributes.delete("ychange");
              }
              str += /** @type {ContentString} */
              n.content.str;
              break;
            }
            case ContentType:
            case ContentEmbed: {
              packStr();
              const op = {
                insert: n.content.getContent()[0]
              };
              if (currentAttributes.size > 0) {
                const attrs = (
                  /** @type {Object<string,any>} */
                  {}
                );
                op.attributes = attrs;
                currentAttributes.forEach((value, key) => {
                  attrs[key] = value;
                });
              }
              ops.push(op);
              break;
            }
            case ContentFormat:
              if (isVisible(n, snapshot)) {
                packStr();
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  n.content
                );
              }
              break;
          }
        }
        n = n.right;
      }
      packStr();
    };
    if (snapshot || prevSnapshot) {
      transact(doc2, (transaction) => {
        if (snapshot) {
          splitSnapshotAffectedStructs(transaction, snapshot);
        }
        if (prevSnapshot) {
          splitSnapshotAffectedStructs(transaction, prevSnapshot);
        }
        computeDelta();
      }, "cleanup");
    } else {
      computeDelta();
    }
    return ops;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(index, text, attributes) {
    if (text.length <= 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, !attributes);
        if (!attributes) {
          attributes = {};
          pos.currentAttributes.forEach((v, k) => {
            attributes[k] = v;
          });
        }
        insertText(transaction, this, pos, text, attributes);
      });
    } else {
      this._pending.push(() => this.insert(index, text, attributes));
    }
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(index, embed, attributes) {
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, !attributes);
        insertText(transaction, this, pos, embed, attributes || {});
      });
    } else {
      this._pending.push(() => this.insertEmbed(index, embed, attributes || {}));
    }
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(index, length3) {
    if (length3 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        deleteText(transaction, findPosition(transaction, this, index, true), length3);
      });
    } else {
      this._pending.push(() => this.delete(index, length3));
    }
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(index, length3, attributes) {
    if (length3 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, false);
        if (pos.right === null) {
          return;
        }
        formatText(transaction, this, pos, length3, attributes);
      });
    } else {
      this._pending.push(() => this.format(index, length3, attributes));
    }
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._pending.push(() => this.removeAttribute(attributeName));
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._pending.push(() => this.setAttribute(attributeName, attributeValue));
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return typeMapGetAll(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YTextRefID);
  }
};
var readYText = (_decoder) => new YText();
var YXmlTreeWalker = class {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(root, f = () => true) {
    this._filter = f;
    this._root = root;
    this._currentNode = /** @type {Item} */
    root._start;
    this._firstCall = true;
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let n = this._currentNode;
    let type = n && n.content && /** @type {any} */
    n.content.type;
    if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) {
      do {
        type = /** @type {any} */
        n.content.type;
        if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
          n = type._start;
        } else {
          while (n !== null) {
            if (n.right !== null) {
              n = n.right;
              break;
            } else if (n.parent === this._root) {
              n = null;
            } else {
              n = /** @type {AbstractType<any>} */
              n.parent._item;
            }
          }
        }
      } while (n !== null && (n.deleted || !this._filter(
        /** @type {ContentType} */
        n.content.type
      )));
    }
    this._firstCall = false;
    if (n === null) {
      return { value: void 0, done: true };
    }
    this._currentNode = n;
    return { value: (
      /** @type {any} */
      n.content.type
    ), done: false };
  }
};
var YXmlFragment = class extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const first = this._first;
    return first ? first.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  _copy() {
    return new YXmlFragment();
  }
  /**
   * @return {YXmlFragment}
   */
  clone() {
    const el = new YXmlFragment();
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(filter) {
    return new YXmlTreeWalker(this, filter);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(query) {
    query = query.toUpperCase();
    const iterator = new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query);
    const next = iterator.next();
    if (next.done) {
      return null;
    } else {
      return next.value;
    }
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(query) {
    query = query.toUpperCase();
    return from(new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return typeListMap(this, (xml) => xml.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const fragment = _document.createDocumentFragment();
    if (binding !== void 0) {
      binding._createAssociation(fragment, this);
    }
    typeListForEach(this, (xmlType) => {
      fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
    });
    return fragment;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(transaction, this, index, content);
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(ref, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
        typeListInsertGenericsAfter(transaction, this, refItem, content);
      });
    } else {
      const pc = (
        /** @type {Array<any>} */
        this._prelimContent
      );
      const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
      if (index === 0 && ref !== null) {
        throw create3("Reference item not found");
      }
      pc.splice(index, 0, ...content);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(index, length3 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length3);
      });
    } else {
      this._prelimContent.splice(index, length3);
    }
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(content) {
    this.insert(this.length, content);
  }
  /**
   * Preppends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to preppend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Executes a provided function on once on overy child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlFragmentRefID);
  }
};
var readYXmlFragment = (_decoder) => new YXmlFragment();
var YXmlElement = class extends YXmlFragment {
  constructor(nodeName = "UNDEFINED") {
    super();
    this.nodeName = nodeName;
    this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((value, key) => {
      this.setAttribute(key, value);
    });
    this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new YXmlElement(this.nodeName);
  }
  /**
   * @return {YXmlElement<KV>}
   */
  clone() {
    const el = new YXmlElement(this.nodeName);
    const attrs = this.getAttributes();
    forEach(attrs, (value, key) => {
      if (typeof value === "string") {
        el.setAttribute(key, value);
      }
    });
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const attrs = this.getAttributes();
    const stringBuilder = [];
    const keys2 = [];
    for (const key in attrs) {
      keys2.push(key);
    }
    keys2.sort();
    const keysLen = keys2.length;
    for (let i = 0; i < keysLen; i++) {
      const key = keys2[i];
      stringBuilder.push(key + '="' + attrs[key] + '"');
    }
    const nodeName = this.nodeName.toLocaleLowerCase();
    const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
    return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._prelimAttrs.delete(attributeName);
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._prelimAttrs.set(attributeName, attributeValue);
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapHas(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(snapshot) {
    return (
      /** @type {any} */
      snapshot ? typeMapGetAllSnapshot(this, snapshot) : typeMapGetAll(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const dom = _document.createElement(this.nodeName);
    const attrs = this.getAttributes();
    for (const key in attrs) {
      const value = attrs[key];
      if (typeof value === "string") {
        dom.setAttribute(key, value);
      }
    }
    typeListForEach(this, (yxml) => {
      dom.appendChild(yxml.toDOM(_document, hooks, binding));
    });
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlElementRefID);
    encoder.writeKey(this.nodeName);
  }
};
var readYXmlElement = (decoder) => new YXmlElement(decoder.readKey());
var YXmlEvent = class extends YEvent {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with wich the
   *                                  change was created.
   */
  constructor(target, subs, transaction) {
    super(target, transaction);
    this.childListChanged = false;
    this.attributesChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.attributesChanged.add(sub);
      }
    });
  }
};
var YXmlHook = class extends YMap {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(hookName) {
    super();
    this.hookName = hookName;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new YXmlHook(this.hookName);
  }
  /**
   * @return {YXmlHook}
   */
  clone() {
    const el = new YXmlHook(this.hookName);
    this.forEach((value, key) => {
      el.set(key, value);
    });
    return el;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const hook = hooks[this.hookName];
    let dom;
    if (hook !== void 0) {
      dom = hook.createDom(this);
    } else {
      dom = document.createElement(this.hookName);
    }
    dom.setAttribute("data-yjs-hook", this.hookName);
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlHookRefID);
    encoder.writeKey(this.hookName);
  }
};
var readYXmlHook = (decoder) => new YXmlHook(decoder.readKey());
var YXmlText = class extends YText {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  _copy() {
    return new YXmlText();
  }
  /**
   * @return {YXmlText}
   */
  clone() {
    const text = new YXmlText();
    text.applyDelta(this.toDelta());
    return text;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks, binding) {
    const dom = _document.createTextNode(this.toString());
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  toString() {
    return this.toDelta().map((delta) => {
      const nestedNodes = [];
      for (const nodeName in delta.attributes) {
        const attrs = [];
        for (const key in delta.attributes[nodeName]) {
          attrs.push({ key, value: delta.attributes[nodeName][key] });
        }
        attrs.sort((a, b) => a.key < b.key ? -1 : 1);
        nestedNodes.push({ nodeName, attrs });
      }
      nestedNodes.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
      let str = "";
      for (let i = 0; i < nestedNodes.length; i++) {
        const node = nestedNodes[i];
        str += `<${node.nodeName}`;
        for (let j = 0; j < node.attrs.length; j++) {
          const attr2 = node.attrs[j];
          str += ` ${attr2.key}="${attr2.value}"`;
        }
        str += ">";
      }
      str += delta.insert;
      for (let i = nestedNodes.length - 1; i >= 0; i--) {
        str += `</${nestedNodes[i].nodeName}>`;
      }
      return str;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlTextRefID);
  }
};
var readYXmlText = (decoder) => new YXmlText();
var AbstractStruct = class {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(id2, length3) {
    this.id = id2;
    this.length = length3;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw methodUnimplemented();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} wether this merged with right
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(encoder, offset, encodingRef) {
    throw methodUnimplemented();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    throw methodUnimplemented();
  }
};
var structGCRefNumber = 0;
var GC = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.length -= offset;
    }
    addStruct(transaction.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structGCRefNumber);
    encoder.writeLen(this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
var ContentBinary = class {
  /**
   * @param {Uint8Array} content
   */
  constructor(content) {
    this.content = content;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new ContentBinary(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
};
var readContentBinary = (decoder) => new ContentBinary(decoder.readBuf());
var ContentDeleted = class {
  /**
   * @param {number} len
   */
  constructor(len) {
    this.len = len;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new ContentDeleted(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(offset) {
    const right = new ContentDeleted(this.len - offset);
    this.len = offset;
    return right;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.len += right.len;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
    item.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeLen(this.len - offset);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
};
var readContentDeleted = (decoder) => new ContentDeleted(decoder.readLen());
var createDocFromOpts = (guid, opts) => new Doc({ guid, ...opts, shouldLoad: opts.shouldLoad || opts.autoLoad || false });
var ContentDoc = class {
  /**
   * @param {Doc} doc
   */
  constructor(doc2) {
    if (doc2._item) {
      console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
    }
    this.doc = doc2;
    const opts = {};
    this.opts = opts;
    if (!doc2.gc) {
      opts.gc = false;
    }
    if (doc2.autoLoad) {
      opts.autoLoad = true;
    }
    if (doc2.meta !== null) {
      opts.meta = doc2.meta;
    }
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.doc._item = item;
    transaction.subdocsAdded.add(this.doc);
    if (this.doc.shouldLoad) {
      transaction.subdocsLoaded.add(this.doc);
    }
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (transaction.subdocsAdded.has(this.doc)) {
      transaction.subdocsAdded.delete(this.doc);
    } else {
      transaction.subdocsRemoved.add(this.doc);
    }
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(this.doc.guid);
    encoder.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
};
var readContentDoc = (decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
var ContentEmbed = class {
  /**
   * @param {Object} embed
   */
  constructor(embed) {
    this.embed = embed;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new ContentEmbed(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
};
var readContentEmbed = (decoder) => new ContentEmbed(decoder.readJSON());
var ContentFormat = class {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new ContentFormat(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(_offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(_right) {
    return false;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(_transaction, item) {
    const p = (
      /** @type {YText} */
      item.parent
    );
    p._searchMarker = null;
    p._hasFormatting = true;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeKey(this.key);
    encoder.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
};
var readContentFormat = (decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON());
var ContentJSON = class {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new ContentJSON(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(offset) {
    const right = new ContentJSON(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeString(c === void 0 ? "undefined" : JSON.stringify(c));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
};
var readContentJSON = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    const c = decoder.readString();
    if (c === "undefined") {
      cs.push(void 0);
    } else {
      cs.push(JSON.parse(c));
    }
  }
  return new ContentJSON(cs);
};
var ContentAny = class {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new ContentAny(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(offset) {
    const right = new ContentAny(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeAny(c);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
};
var readContentAny = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    cs.push(decoder.readAny());
  }
  return new ContentAny(cs);
};
var ContentString = class {
  /**
   * @param {string} str
   */
  constructor(str) {
    this.str = str;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new ContentString(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(offset) {
    const right = new ContentString(this.str.slice(offset));
    this.str = this.str.slice(0, offset);
    const firstCharCode = this.str.charCodeAt(offset - 1);
    if (firstCharCode >= 55296 && firstCharCode <= 56319) {
      this.str = this.str.slice(0, offset - 1) + "\uFFFD";
      right.str = "\uFFFD" + right.str.slice(1);
    }
    return right;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.str += right.str;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
};
var readContentString = (decoder) => new ContentString(decoder.readString());
var typeRefs = [
  readYArray,
  readYMap,
  readYText,
  readYXmlElement,
  readYXmlFragment,
  readYXmlHook,
  readYXmlText
];
var YArrayRefID = 0;
var YMapRefID = 1;
var YTextRefID = 2;
var YXmlElementRefID = 3;
var YXmlFragmentRefID = 4;
var YXmlHookRefID = 5;
var YXmlTextRefID = 6;
var ContentType = class {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(type) {
    this.type = type;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new ContentType(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.type._integrate(transaction.doc, item);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    let item = this.type._start;
    while (item !== null) {
      if (!item.deleted) {
        item.delete(transaction);
      } else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) {
        transaction._mergeStructs.push(item);
      }
      item = item.right;
    }
    this.type._map.forEach((item2) => {
      if (!item2.deleted) {
        item2.delete(transaction);
      } else if (item2.id.clock < (transaction.beforeState.get(item2.id.client) || 0)) {
        transaction._mergeStructs.push(item2);
      }
    });
    transaction.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
    let item = this.type._start;
    while (item !== null) {
      item.gc(store, true);
      item = item.right;
    }
    this.type._start = null;
    this.type._map.forEach(
      /** @param {Item | null} item */
      (item2) => {
        while (item2 !== null) {
          item2.gc(store, true);
          item2 = item2.left;
        }
      }
    );
    this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    this.type._write(encoder);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
};
var readContentType = (decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder));
var splitItem = (transaction, leftItem, diff) => {
  const { client, clock } = leftItem.id;
  const rightItem = new Item(
    createID(client, clock + diff),
    leftItem,
    createID(client, clock + diff - 1),
    leftItem.right,
    leftItem.rightOrigin,
    leftItem.parent,
    leftItem.parentSub,
    leftItem.content.splice(diff)
  );
  if (leftItem.deleted) {
    rightItem.markDeleted();
  }
  if (leftItem.keep) {
    rightItem.keep = true;
  }
  if (leftItem.redone !== null) {
    rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
  }
  leftItem.right = rightItem;
  if (rightItem.right !== null) {
    rightItem.right.left = rightItem;
  }
  transaction._mergeStructs.push(rightItem);
  if (rightItem.parentSub !== null && rightItem.right === null) {
    rightItem.parent._map.set(rightItem.parentSub, rightItem);
  }
  leftItem.length = diff;
  return rightItem;
};
var Item = class extends AbstractStruct {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(id2, left, origin, right, rightOrigin, parent, parentSub, content) {
    super(id2, content.getLength());
    this.origin = origin;
    this.left = left;
    this.right = right;
    this.rightOrigin = rightOrigin;
    this.parent = parent;
    this.parentSub = parentSub;
    this.redone = null;
    this.content = content;
    this.info = this.content.isCountable() ? BIT2 : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(isMarked) {
    if ((this.info & BIT4) > 0 !== isMarked) {
      this.info ^= BIT4;
    }
  }
  get marker() {
    return (this.info & BIT4) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & BIT1) > 0;
  }
  set keep(doKeep) {
    if (this.keep !== doKeep) {
      this.info ^= BIT1;
    }
  }
  get countable() {
    return (this.info & BIT2) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & BIT3) > 0;
  }
  set deleted(doDelete) {
    if (this.deleted !== doDelete) {
      this.info ^= BIT3;
    }
  }
  markDeleted() {
    this.info |= BIT3;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
      return this.origin.client;
    }
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
      return this.rightOrigin.client;
    }
    if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
      return this.parent.client;
    }
    if (this.origin) {
      this.left = getItemCleanEnd(transaction, store, this.origin);
      this.origin = this.left.lastId;
    }
    if (this.rightOrigin) {
      this.right = getItemCleanStart(transaction, this.rightOrigin);
      this.rightOrigin = this.right.id;
    }
    if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
      this.parent = null;
    } else if (!this.parent) {
      if (this.left && this.left.constructor === Item) {
        this.parent = this.left.parent;
        this.parentSub = this.left.parentSub;
      }
      if (this.right && this.right.constructor === Item) {
        this.parent = this.right.parent;
        this.parentSub = this.right.parentSub;
      }
    } else if (this.parent.constructor === ID) {
      const parentItem = getItem(store, this.parent);
      if (parentItem.constructor === GC) {
        this.parent = null;
      } else {
        this.parent = /** @type {ContentType} */
        parentItem.content.type;
      }
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
      this.origin = this.left.lastId;
      this.content = this.content.splice(offset);
      this.length -= offset;
    }
    if (this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let left = this.left;
        let o;
        if (left !== null) {
          o = left.right;
        } else if (this.parentSub !== null) {
          o = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (o !== null && o.left !== null) {
            o = o.left;
          }
        } else {
          o = /** @type {AbstractType<any>} */
          this.parent._start;
        }
        const conflictingItems = /* @__PURE__ */ new Set();
        const itemsBeforeOrigin = /* @__PURE__ */ new Set();
        while (o !== null && o !== this.right) {
          itemsBeforeOrigin.add(o);
          conflictingItems.add(o);
          if (compareIDs(this.origin, o.origin)) {
            if (o.id.client < this.id.client) {
              left = o;
              conflictingItems.clear();
            } else if (compareIDs(this.rightOrigin, o.rightOrigin)) {
              break;
            }
          } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
            if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
              left = o;
              conflictingItems.clear();
            }
          } else {
            break;
          }
          o = o.right;
        }
        this.left = left;
      }
      if (this.left !== null) {
        const right = this.left.right;
        this.right = right;
        this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null) {
          r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (r !== null && r.left !== null) {
            r = r.left;
          }
        } else {
          r = /** @type {AbstractType<any>} */
          this.parent._start;
          this.parent._start = this;
        }
        this.right = r;
      }
      if (this.right !== null) {
        this.right.left = this;
      } else if (this.parentSub !== null) {
        this.parent._map.set(this.parentSub, this);
        if (this.left !== null) {
          this.left.delete(transaction);
        }
      }
      if (this.parentSub === null && this.countable && !this.deleted) {
        this.parent._length += this.length;
      }
      addStruct(transaction.doc.store, this);
      this.content.integrate(transaction, this);
      addChangedTypeToTransaction(
        transaction,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      );
      if (
        /** @type {AbstractType<any>} */
        this.parent._item !== null && /** @type {AbstractType<any>} */
        this.parent._item.deleted || this.parentSub !== null && this.right !== null
      ) {
        this.delete(transaction);
      }
    } else {
      new GC(this.id, this.length).integrate(transaction, 0);
    }
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let n = this.right;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let n = this.left;
    while (n !== null && n.deleted) {
      n = n.left;
    }
    return n;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
      const searchMarker = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      if (searchMarker) {
        searchMarker.forEach((marker) => {
          if (marker.p === right) {
            marker.p = this;
            if (!this.deleted && this.countable) {
              marker.index -= this.length;
            }
          }
        });
      }
      if (right.keep) {
        this.keep = true;
      }
      this.right = right.right;
      if (this.right !== null) {
        this.right.left = this;
      }
      this.length += right.length;
      return true;
    }
    return false;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (!this.deleted) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (this.countable && this.parentSub === null) {
        parent._length -= this.length;
      }
      this.markDeleted();
      addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
      addChangedTypeToTransaction(transaction, parent, this.parentSub);
      this.content.delete(transaction);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(store, parentGCd) {
    if (!this.deleted) {
      throw unexpectedCase();
    }
    this.content.gc(store);
    if (parentGCd) {
      replaceStruct(store, this, new GC(this.id, this.length));
    } else {
      this.content = new ContentDeleted(this.length);
    }
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(encoder, offset) {
    const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
    const rightOrigin = this.rightOrigin;
    const parentSub = this.parentSub;
    const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | // origin is defined
    (rightOrigin === null ? 0 : BIT7) | // right origin is defined
    (parentSub === null ? 0 : BIT6);
    encoder.writeInfo(info);
    if (origin !== null) {
      encoder.writeLeftID(origin);
    }
    if (rightOrigin !== null) {
      encoder.writeRightID(rightOrigin);
    }
    if (origin === null && rightOrigin === null) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (parent._item !== void 0) {
        const parentItem = parent._item;
        if (parentItem === null) {
          const ykey = findRootTypeKey(parent);
          encoder.writeParentInfo(true);
          encoder.writeString(ykey);
        } else {
          encoder.writeParentInfo(false);
          encoder.writeLeftID(parentItem.id);
        }
      } else if (parent.constructor === String) {
        encoder.writeParentInfo(true);
        encoder.writeString(parent);
      } else if (parent.constructor === ID) {
        encoder.writeParentInfo(false);
        encoder.writeLeftID(parent);
      } else {
        unexpectedCase();
      }
      if (parentSub !== null) {
        encoder.writeString(parentSub);
      }
    }
    this.content.write(encoder, offset);
  }
};
var readItemContent = (decoder, info) => contentRefs[info & BITS5](decoder);
var contentRefs = [
  () => {
    unexpectedCase();
  },
  // GC is not ItemContent
  readContentDeleted,
  // 1
  readContentJSON,
  // 2
  readContentBinary,
  // 3
  readContentString,
  // 4
  readContentEmbed,
  // 5
  readContentFormat,
  // 6
  readContentType,
  // 7
  readContentAny,
  // 8
  readContentDoc,
  // 9
  () => {
    unexpectedCase();
  }
  // 10 - Skip is not ItemContent
];
var structSkipRefNumber = 10;
var Skip = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    unexpectedCase();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structSkipRefNumber);
    writeVarUint(encoder.restEncoder, this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
var glo = (
  /** @type {any} */
  typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {}
);
var importIdentifier = "__ $YJS$ __";
if (glo[importIdentifier] === true) {
  console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
}
glo[importIdentifier] = true;

// node_modules/lib0/indexeddb.js
var rtop = (request) => create4((resolve, reject) => {
  request.onerror = (event) => reject(new Error(event.target.error));
  request.onsuccess = (event) => resolve(event.target.result);
});
var openDB = (name, initDB) => create4((resolve, reject) => {
  const request = indexedDB.open(name);
  request.onupgradeneeded = (event) => initDB(event.target.result);
  request.onerror = (event) => reject(create3(event.target.error));
  request.onsuccess = (event) => {
    const db = event.target.result;
    db.onversionchange = () => {
      db.close();
    };
    resolve(db);
  };
});
var deleteDB = (name) => rtop(indexedDB.deleteDatabase(name));
var createStores = (db, definitions) => definitions.forEach(
  (d) => (
    // @ts-ignore
    db.createObjectStore.apply(db, d)
  )
);
var transact2 = (db, stores, access = "readwrite") => {
  const transaction = db.transaction(stores, access);
  return stores.map((store) => getStore(transaction, store));
};
var count = (store, range) => rtop(store.count(range));
var get = (store, key) => rtop(store.get(key));
var del = (store, key) => rtop(store.delete(key));
var put = (store, item, key) => rtop(store.put(item, key));
var addAutoKey = (store, item) => rtop(store.add(item));
var getAll = (store, range, limit) => rtop(store.getAll(range, limit));
var queryFirst = (store, query, direction) => {
  let first = null;
  return iterateKeys(store, query, (key) => {
    first = key;
    return false;
  }, direction).then(() => first);
};
var getLastKey = (store, range = null) => queryFirst(store, range, "prev");
var iterateOnRequest = (request, f) => create4((resolve, reject) => {
  request.onerror = reject;
  request.onsuccess = async (event) => {
    const cursor = event.target.result;
    if (cursor === null || await f(cursor) === false) {
      return resolve();
    }
    cursor.continue();
  };
});
var iterateKeys = (store, keyrange, f, direction = "next") => iterateOnRequest(store.openKeyCursor(keyrange, direction), (cursor) => f(cursor.key));
var getStore = (t, store) => t.objectStore(store);
var createIDBKeyRangeUpperBound = (upper, upperOpen) => IDBKeyRange.upperBound(upper, upperOpen);
var createIDBKeyRangeLowerBound = (lower, lowerOpen) => IDBKeyRange.lowerBound(lower, lowerOpen);

// node_modules/y-indexeddb/src/y-indexeddb.js
var customStoreName = "custom";
var updatesStoreName = "updates";
var PREFERRED_TRIM_SIZE = 500;
var fetchUpdates = (idbPersistence, beforeApplyUpdatesCallback = () => {
}, afterApplyUpdatesCallback = () => {
}) => {
  const [updatesStore] = transact2(
    /** @type {IDBDatabase} */
    idbPersistence.db,
    [updatesStoreName]
  );
  return getAll(updatesStore, createIDBKeyRangeLowerBound(idbPersistence._dbref, false)).then((updates) => {
    if (!idbPersistence._destroyed) {
      beforeApplyUpdatesCallback(updatesStore);
      transact(idbPersistence.doc, () => {
        updates.forEach((val) => applyUpdate(idbPersistence.doc, val));
      }, idbPersistence, false);
      afterApplyUpdatesCallback(updatesStore);
    }
  }).then(() => getLastKey(updatesStore).then((lastKey) => {
    idbPersistence._dbref = lastKey + 1;
  })).then(() => count(updatesStore).then((cnt) => {
    idbPersistence._dbsize = cnt;
  })).then(() => updatesStore);
};
var storeState = (idbPersistence, forceStore = true) => fetchUpdates(idbPersistence).then((updatesStore) => {
  if (forceStore || idbPersistence._dbsize >= PREFERRED_TRIM_SIZE) {
    addAutoKey(updatesStore, encodeStateAsUpdate(idbPersistence.doc)).then(() => del(updatesStore, createIDBKeyRangeUpperBound(idbPersistence._dbref, true))).then(() => count(updatesStore).then((cnt) => {
      idbPersistence._dbsize = cnt;
    }));
  }
});
var IndexeddbPersistence = class extends Observable {
  /**
   * @param {string} name
   * @param {Y.Doc} doc
   */
  constructor(name, doc2) {
    super();
    this.doc = doc2;
    this.name = name;
    this._dbref = 0;
    this._dbsize = 0;
    this._destroyed = false;
    this.db = null;
    this.synced = false;
    this._db = openDB(
      name,
      (db) => createStores(db, [
        ["updates", { autoIncrement: true }],
        ["custom"]
      ])
    );
    this.whenSynced = create4((resolve) => this.on("synced", () => resolve(this)));
    this._db.then((db) => {
      this.db = db;
      const beforeApplyUpdatesCallback = (updatesStore) => addAutoKey(updatesStore, encodeStateAsUpdate(doc2));
      const afterApplyUpdatesCallback = () => {
        if (this._destroyed)
          return this;
        this.synced = true;
        this.emit("synced", [this]);
      };
      fetchUpdates(this, beforeApplyUpdatesCallback, afterApplyUpdatesCallback);
    });
    this._storeTimeout = 1e3;
    this._storeTimeoutId = null;
    this._storeUpdate = (update, origin) => {
      if (this.db && origin !== this) {
        const [updatesStore] = transact2(
          /** @type {IDBDatabase} */
          this.db,
          [updatesStoreName]
        );
        addAutoKey(updatesStore, update);
        if (++this._dbsize >= PREFERRED_TRIM_SIZE) {
          if (this._storeTimeoutId !== null) {
            clearTimeout(this._storeTimeoutId);
          }
          this._storeTimeoutId = setTimeout(() => {
            storeState(this, false);
            this._storeTimeoutId = null;
          }, this._storeTimeout);
        }
      }
    };
    doc2.on("update", this._storeUpdate);
    this.destroy = this.destroy.bind(this);
    doc2.on("destroy", this.destroy);
  }
  destroy() {
    if (this._storeTimeoutId) {
      clearTimeout(this._storeTimeoutId);
    }
    this.doc.off("update", this._storeUpdate);
    this.doc.off("destroy", this.destroy);
    this._destroyed = true;
    return this._db.then((db) => {
      db.close();
    });
  }
  /**
   * Destroys this instance and removes all data from indexeddb.
   *
   * @return {Promise<void>}
   */
  clearData() {
    return this.destroy().then(() => {
      deleteDB(this.name);
    });
  }
  /**
   * @param {String | number | ArrayBuffer | Date} key
   * @return {Promise<String | number | ArrayBuffer | Date | any>}
   */
  get(key) {
    return this._db.then((db) => {
      const [custom] = transact2(db, [customStoreName], "readonly");
      return get(custom, key);
    });
  }
  /**
   * @param {String | number | ArrayBuffer | Date} key
   * @param {String | number | ArrayBuffer | Date} value
   * @return {Promise<String | number | ArrayBuffer | Date>}
   */
  set(key, value) {
    return this._db.then((db) => {
      const [custom] = transact2(db, [customStoreName]);
      return put(custom, value, key);
    });
  }
  /**
   * @param {String | number | ArrayBuffer | Date} key
   * @return {Promise<undefined>}
   */
  del(key) {
    return this._db.then((db) => {
      const [custom] = transact2(db, [customStoreName]);
      return del(custom, key);
    });
  }
};

// stores/crdtState.ts
function isTodoItem(item) {
  return "listId" in item && typeof item.listId === "string";
}
var todoLists = writable();
var todoItems = writable();
var yTodoLists = writable();
var yTodoItems = writable();

// svelte/StateManagement.svelte
var doc = new Doc();
var clientDocumentUpdatedKey = "clientDocumentUpdated";
function getBase64Document() {
  const binaryDocument = encodeStateAsUpdate(doc);
  const base64Document = fromUint8Array(binaryDocument);
  return base64Document;
}
function notifyUserSyncingIsInProgress() {
  syncState.set("Syncing");
  setTimeout(
    () => {
      if (get_store_value(syncState) !== "Synced") {
        syncState.set("Not Synced");
      }
    },
    1e3
  );
}
async function reconnectLiveViewIfDisconnected() {
  const connected = await useIsConnected({});
  if (!connected) {
    syncState.set("Not Synced");
    return;
  }
  const live = get_store_value(liveView);
  if (!live || live.__isDisconnected) {
    window.location.reload();
  }
}
function confirmSynced(response) {
  if (response.ok) {
    syncState.set("Synced");
  }
}
async function syncDocumentToServer(live) {
  todoLists.set(get_store_value(yTodoLists).toJSON());
  todoItems.set(get_store_value(yTodoItems).toJSON());
  notifyUserSyncingIsInProgress();
  localStorage.setItem(clientDocumentUpdatedKey, JSON.stringify(Date.now()));
  live?.pushEvent("client_document_updated", { document: getBase64Document() }, confirmSynced);
  reconnectLiveViewIfDisconnected();
}
var syncStateKey = "syncState";
var StateManagement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $syncState, $$unsubscribe_syncState;
  let $selectedListId, $$unsubscribe_selectedListId;
  let $urlHash, $$unsubscribe_urlHash;
  let $todoLists, $$unsubscribe_todoLists;
  let $serverDocument, $$unsubscribe_serverDocument;
  let $liveView, $$unsubscribe_liveView;
  let $yTodoItems, $$unsubscribe_yTodoItems;
  let $todoItems, $$unsubscribe_todoItems;
  let $yTodoLists, $$unsubscribe_yTodoLists;
  validate_store(syncState, "syncState");
  $$unsubscribe_syncState = subscribe(syncState, (value) => $syncState = value);
  validate_store(selectedListId, "selectedListId");
  $$unsubscribe_selectedListId = subscribe(selectedListId, (value) => $selectedListId = value);
  validate_store(urlHash, "urlHash");
  $$unsubscribe_urlHash = subscribe(urlHash, (value) => $urlHash = value);
  validate_store(todoLists, "todoLists");
  $$unsubscribe_todoLists = subscribe(todoLists, (value) => $todoLists = value);
  validate_store(serverDocument, "serverDocument");
  $$unsubscribe_serverDocument = subscribe(serverDocument, (value) => $serverDocument = value);
  validate_store(liveView, "liveView");
  $$unsubscribe_liveView = subscribe(liveView, (value) => $liveView = value);
  validate_store(yTodoItems, "yTodoItems");
  $$unsubscribe_yTodoItems = subscribe(yTodoItems, (value) => $yTodoItems = value);
  validate_store(todoItems, "todoItems");
  $$unsubscribe_todoItems = subscribe(todoItems, (value) => $todoItems = value);
  validate_store(yTodoLists, "yTodoLists");
  $$unsubscribe_yTodoLists = subscribe(yTodoLists, (value) => $yTodoLists = value);
  let { isSyncedToIndexedDb } = $$props;
  const stateMap = doc.getMap();
  let indexedDbProvider;
  function syncWithIndexedDb() {
    indexedDbProvider = new IndexeddbPersistence(indexedDBName, doc);
    indexedDbProvider.on("synced", () => {
      set_store_value(yTodoLists, $yTodoLists = stateMap.get("lists"), $yTodoLists);
      set_store_value(yTodoItems, $yTodoItems = stateMap.get("todos"), $yTodoItems);
      set_store_value(todoLists, $todoLists = $yTodoLists ? $yTodoLists.toJSON() : [], $todoLists);
      set_store_value(todoItems, $todoItems = $yTodoItems ? $yTodoItems.toJSON() : [], $todoItems);
      isSyncedToIndexedDb = true;
    });
  }
  function syncServerToClient({ event, document: document2 }) {
    if (event === "mount")
      return;
    if (!document2) {
      if (!$yTodoLists && !$yTodoItems) {
        set_store_value(yTodoLists, $yTodoLists = new YArray(), $yTodoLists);
        stateMap.set("lists", $yTodoLists);
        set_store_value(yTodoItems, $yTodoItems = new YArray(), $yTodoItems);
        stateMap.set("todos", $yTodoItems);
      }
      $liveView.pushEvent("create_server_document", { document: getBase64Document() }, confirmSynced);
      return;
    }
    applyUpdate(doc, toUint8Array(document2));
    set_store_value(yTodoLists, $yTodoLists = stateMap.get("lists"), $yTodoLists);
    set_store_value(yTodoItems, $yTodoItems = stateMap.get("todos"), $yTodoItems);
    set_store_value(todoLists, $todoLists = $yTodoLists.toJSON(), $todoLists);
    set_store_value(todoItems, $todoItems = $yTodoItems.toJSON(), $todoItems);
    if (event === "request_server_document") {
      syncDocumentToServer($liveView);
    }
    syncAppStateWithUrl();
  }
  onMount2(() => {
    const previousSyncState = getParsedValueFromLocalStorage(syncStateKey, "string", $syncState);
    set_store_value(
      syncState,
      $syncState = previousSyncState === "Syncing" ? "Not Synced" : previousSyncState,
      $syncState
    );
  });
  onMount2(() => {
    syncWithIndexedDb();
  });
  function syncAppStateWithUrl() {
    const url = new URL(window.location.href);
    const hash = url.hash;
    switch (hash) {
      case "#about":
        set_store_value(urlHash, $urlHash = "about", $urlHash);
        set_store_value(selectedListId, $selectedListId = "", $selectedListId);
        history.replaceState({}, "", "/app");
        history.pushState({}, "", "/app#about");
        break;
      default:
        const listId = hash.replace("#", "");
        const list = $todoLists.find((list2) => list2.id === listId);
        if (list) {
          set_store_value(urlHash, $urlHash = "listId", $urlHash);
          set_store_value(selectedListId, $selectedListId = listId, $selectedListId);
          history.replaceState({}, "", "/app");
          history.pushState({}, "", `/app#${listId}`);
        } else {
          set_store_value(urlHash, $urlHash = "", $urlHash);
          set_store_value(selectedListId, $selectedListId = "", $selectedListId);
          history.replaceState({}, "", "/app");
        }
        break;
    }
  }
  if ($$props.isSyncedToIndexedDb === void 0 && $$bindings.isSyncedToIndexedDb && isSyncedToIndexedDb !== void 0)
    $$bindings.isSyncedToIndexedDb(isSyncedToIndexedDb);
  $: {
    if (isSyncedToIndexedDb && $liveView) {
      $liveView.pushEvent("request_server_document");
    }
  }
  $: {
    if (isSyncedToIndexedDb && $liveView) {
      syncServerToClient($serverDocument);
    }
  }
  $: {
    if (isSyncedToIndexedDb)
      syncAppStateWithUrl();
  }
  $: {
    if (isSyncedToIndexedDb)
      history.scrollRestoration = "auto";
  }
  $: {
    if (isSyncedToIndexedDb) {
      localStorage.setItem(syncStateKey, JSON.stringify($syncState));
    }
  }
  $$unsubscribe_syncState();
  $$unsubscribe_selectedListId();
  $$unsubscribe_urlHash();
  $$unsubscribe_todoLists();
  $$unsubscribe_serverDocument();
  $$unsubscribe_liveView();
  $$unsubscribe_yTodoItems();
  $$unsubscribe_todoItems();
  $$unsubscribe_yTodoLists();
  return ``;
});
var StateManagement_default = StateManagement;

// svelte/SyncStatusBadge.svelte
var SyncStatusBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $syncState, $$unsubscribe_syncState;
  let $liveView, $$unsubscribe_liveView;
  validate_store(syncState, "syncState");
  $$unsubscribe_syncState = subscribe(syncState, (value) => $syncState = value);
  validate_store(liveView, "liveView");
  $$unsubscribe_liveView = subscribe(liveView, (value) => $liveView = value);
  $$unsubscribe_syncState();
  $$unsubscribe_liveView();
  return `<button aria-label="Sync Status." title="Click to force sync." class="${[
    "badge w-[113px] border border-neutral focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ",
    ($syncState === "Synced" ? "badge-accent" : "") + " " + ($syncState === "Syncing" ? "badge-primary" : "") + " " + ($syncState === "Not Synced" ? "badge-secondary" : "")
  ].join(" ").trim()}" ${$syncState === "Syncing" ? "disabled" : ""}><div class="flex gap-[5px] items-center">${$syncState === "Synced" ? `${validate_component(circle_check_big_default, "CircleCheckBig").$$render($$result, { class: "w-3 h-3" }, {}, {})}` : `${$syncState === "Syncing" ? `${validate_component(refresh_cw_default, "RefreshCw").$$render($$result, { class: "w-3 h-3 animate-spin" }, {}, {})}` : `${validate_component(circle_alert_default, "CircleAlert").$$render($$result, { class: "w-3 h-3" }, {}, {})}`}`} ${escape2($syncState)}</div></button>`;
});
var SyncStatusBadge_default = SyncStatusBadge;

// svelte/ThemeButton.svelte
var ThemeButton_exports = {};
__export(ThemeButton_exports, {
  default: () => ThemeButton_default
});

// stores/currentTheme.ts
var currentTheme = writable("system");

// svelte/ThemeChoiceButton.svelte
var ThemeChoiceButton_exports = {};
__export(ThemeChoiceButton_exports, {
  default: () => ThemeChoiceButton_default,
  setTheme: () => setTheme
});
function setTheme(theme) {
  currentTheme.set(theme);
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");
    return;
  }
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", JSON.stringify(theme));
}
var ThemeChoiceButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentTheme, $$unsubscribe_currentTheme;
  validate_store(currentTheme, "currentTheme");
  $$unsubscribe_currentTheme = subscribe(currentTheme, (value) => $currentTheme = value);
  let { focusIndex } = $$props;
  let { theme } = $$props;
  if ($$props.focusIndex === void 0 && $$bindings.focusIndex && focusIndex !== void 0)
    $$bindings.focusIndex(focusIndex);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  $$unsubscribe_currentTheme();
  return `<li><button${add_attribute("data-focusindex", focusIndex, 0)} class="focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100">${theme === "system" ? `${validate_component(laptop_default, "Laptop").$$render($$result, { class: "h-4 w-4" }, {}, {})}` : `${theme === "light" ? `${validate_component(sun_default, "Sun").$$render($$result, { class: "h-4 w-4" }, {}, {})}` : `${theme === "dark" ? `${validate_component(moon_default, "Moon").$$render($$result, { class: "h-4 w-4" }, {}, {})}` : ``}`}`} <span class="first-letter:capitalize">${escape2(theme)}</span> ${theme === $currentTheme ? `${validate_component(check_default, "Check").$$render($$result, { class: "h-4 w-4" }, {}, {})}` : ``}</button></li>`;
});
var ThemeChoiceButton_default = ThemeChoiceButton;

// svelte/ThemeButton.svelte
var themeMenuId = "theme-menu-id";
var ThemeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openedMenuId, $$unsubscribe_openedMenuId;
  let $currentTheme, $$unsubscribe_currentTheme;
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  validate_store(currentTheme, "currentTheme");
  $$unsubscribe_currentTheme = subscribe(currentTheme, (value) => $currentTheme = value);
  let { menuClass: menuClass2 } = $$props;
  let focusFirstElement = false;
  onMount2(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (!theme) {
      set_store_value(currentTheme, $currentTheme = "system", $currentTheme);
    } else {
      set_store_value(currentTheme, $currentTheme = theme, $currentTheme);
    }
  });
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass2 !== void 0)
    $$bindings.menuClass(menuClass2);
  $: {
    if ($openedMenuId !== themeMenuId) {
      focusFirstElement = false;
    }
  }
  $$unsubscribe_openedMenuId();
  $$unsubscribe_currentTheme();
  return `<div class="${escape2(menuClass2, true) + " relative"}"><button class="my-1 btn btn-circle btn-neutral focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " aria-label="Theme Selector." title="Click to change the theme.">${validate_component(swatch_book_default, "SwatchBook").$$render($$result, {}, {}, {})}</button> ${$openedMenuId === themeMenuId ? `<div class="menu bg-base-200 border border-neutral rounded-box absolute right-0"><p class="px-4 py-2 font-bold border-b border-neutral rounded-none mb-1.5" data-svelte-h="svelte-z8k99v">Theme</p> <ul class="w-32">${validate_component(ThemeChoiceButton_default, "ThemeChoiceButton").$$render($$result, { focusIndex: 0, theme: "system" }, {}, {})} ${validate_component(ThemeChoiceButton_default, "ThemeChoiceButton").$$render($$result, { focusIndex: 1, theme: "light" }, {}, {})} ${validate_component(ThemeChoiceButton_default, "ThemeChoiceButton").$$render($$result, { focusIndex: 2, theme: "dark" }, {}, {})}</ul></div>` : ``}</div>`;
});
var ThemeButton_default = ThemeButton;

// svelte/Header.svelte
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentUserEmail } = $$props;
  let { serviceWorkerVersion } = $$props;
  let { isClientStateRestored } = $$props;
  let { menuClass: menuClass2 } = $$props;
  let scrollY;
  if ($$props.currentUserEmail === void 0 && $$bindings.currentUserEmail && currentUserEmail !== void 0)
    $$bindings.currentUserEmail(currentUserEmail);
  if ($$props.serviceWorkerVersion === void 0 && $$bindings.serviceWorkerVersion && serviceWorkerVersion !== void 0)
    $$bindings.serviceWorkerVersion(serviceWorkerVersion);
  if ($$props.isClientStateRestored === void 0 && $$bindings.isClientStateRestored && isClientStateRestored !== void 0)
    $$bindings.isClientStateRestored(isClientStateRestored);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass2 !== void 0)
    $$bindings.menuClass(menuClass2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <div class="${[
      "sticky top-0 left-0 w-full pt-2 pb-1 z-10 bg-base-100 border-neutral",
      scrollY > 0 ? "border-b" : ""
    ].join(" ").trim()}"><div class="max-w-2xl mx-auto px-2 md:p-0 flex justify-between items-center gap-3"><div>${validate_component(SyncStatusBadge_default, "SyncStatusBadge").$$render($$result, {}, {}, {})} ${validate_component(SessionsBadge_default, "SessionsBadge").$$render($$result, {}, {}, {})}</div> <div class="flex items-center gap-3">${validate_component(ShareButton_default, "ShareButton").$$render($$result, {}, {}, {})} ${validate_component(ThemeButton_default, "ThemeButton").$$render($$result, { menuClass: menuClass2 }, {}, {})} ${validate_component(AccountButton_default, "AccountButton").$$render(
      $$result,
      {
        currentUserEmail,
        serviceWorkerVersion,
        menuClass: menuClass2,
        isClientStateRestored
      },
      {
        isClientStateRestored: ($$value) => {
          isClientStateRestored = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
var Header_default = Header;

// svelte/ScrollPositionRestorer.svelte
var ScrollPositionRestorer_exports = {};
__export(ScrollPositionRestorer_exports, {
  default: () => ScrollPositionRestorer_default
});
var scrollPositionKey = "scrollPosition";
function restoreScrollPosition() {
  const scrollPosition = sessionStorage.getItem(scrollPositionKey);
  if (!scrollPosition)
    return;
  try {
    const { x, y } = JSON.parse(scrollPosition);
    if (typeof x !== "number" || typeof y !== "number")
      return;
    window.scrollTo(x, y);
  } catch (error) {
    console.error("Error restoring scroll position.", error);
  }
}
var ScrollPositionRestorer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isSyncedToIndexedDb } = $$props;
  let { isClientStateRestored } = $$props;
  let { isScrollPositionRestored } = $$props;
  let scrollX;
  let scrollY;
  if ($$props.isSyncedToIndexedDb === void 0 && $$bindings.isSyncedToIndexedDb && isSyncedToIndexedDb !== void 0)
    $$bindings.isSyncedToIndexedDb(isSyncedToIndexedDb);
  if ($$props.isClientStateRestored === void 0 && $$bindings.isClientStateRestored && isClientStateRestored !== void 0)
    $$bindings.isClientStateRestored(isClientStateRestored);
  if ($$props.isScrollPositionRestored === void 0 && $$bindings.isScrollPositionRestored && isScrollPositionRestored !== void 0)
    $$bindings.isScrollPositionRestored(isScrollPositionRestored);
  $: {
    if (isSyncedToIndexedDb && isClientStateRestored) {
      setTimeout(
        () => {
          restoreScrollPosition();
          isScrollPositionRestored = true;
        },
        0
      );
    }
  }
  $: {
    if (isScrollPositionRestored) {
      sessionStorage.setItem(scrollPositionKey, JSON.stringify({ x: scrollX, y: scrollY }));
    }
  }
  return ``;
});
var ScrollPositionRestorer_default = ScrollPositionRestorer;

// svelte/StickyHeader.svelte
var StickyHeader_exports = {};
__export(StickyHeader_exports, {
  default: () => StickyHeader_default
});

// svelte/Back.svelte
var Back_exports = {};
__export(Back_exports, {
  default: () => Back_default
});
var Back = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { live = void 0 } = $$props;
  live;
  let { href = void 0 } = $$props;
  let { ariaLabel = "Back" } = $$props;
  let { showTopBarOnNav = false } = $$props;
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.showTopBarOnNav === void 0 && $$bindings.showTopBarOnNav && showTopBarOnNav !== void 0)
    $$bindings.showTopBarOnNav(showTopBarOnNav);
  return `${href ? `<a${add_attribute("href", href, 0)}${add_attribute("aria-label", ariaLabel, 0)} class="flex rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ">${validate_component(arrow_left_default, "ArrowLeft").$$render($$result, { class: "h-10 w-10", strokeWidth: 1.75 }, {}, {})}</a>` : `<button${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("title", ariaLabel, 0)} class="flex rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ">${validate_component(arrow_left_default, "ArrowLeft").$$render($$result, { class: "h-10 w-10", strokeWidth: 1.75 }, {}, {})}</button>`}`;
});
var Back_default = Back;

// svelte/StickyHeader.svelte
var StickyHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollY;
  return ` <div class="${[
    "sticky top-0 left-0 w-full z-10 backdrop-blur border-neutral h-[68px]",
    scrollY > 0 ? "border-b" : ""
  ].join(" ").trim()}"><div class="max-w-2xl mx-auto px-2 md:p-0 h-full flex items-center">${validate_component(Back_default, "Back").$$render($$result, {}, {}, {})}</div></div>`;
});
var StickyHeader_default = StickyHeader;

// svelte/ThemeSyncManager.svelte
var ThemeSyncManager_exports = {};
__export(ThemeSyncManager_exports, {
  default: () => ThemeSyncManager_default
});
var ThemeSyncManager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { live = void 0 } = $$props;
  live;
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  return ` `;
});
var ThemeSyncManager_default = ThemeSyncManager;

// svelte/Toast.svelte
var Toast_exports = {};
__export(Toast_exports, {
  default: () => Toast_default
});
var Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toast, $$unsubscribe_toast;
  validate_store(toast, "toast");
  $$unsubscribe_toast = subscribe(toast, (value) => $toast = value);
  function dismissToast() {
    set_store_value(
      toast,
      $toast = {
        show: false,
        kind: "info",
        title: "",
        msg: ""
      },
      $toast
    );
  }
  $$unsubscribe_toast();
  return `${$toast.show ? `<div role="alert"${add_attribute(
    "class",
    `
      fixed top-2 right-2 mr-2 w-80 sm:w-96 z-50 rounded-lg p-3 shadow-md
      ${$toast.kind === "info" && "bg-success text-success-content fill-success"}
      ${$toast.kind === "error" && "bg-error text-error-content fill-error"}
    `,
    0
  )}><p class="flex items-center gap-1.5 text-sm font-semibold leading-6">${$toast.kind === "info" ? `${validate_component(info_default, "Info").$$render($$result, { class: "h-4 w-4" }, {}, {})}` : `${$toast.kind === "error" ? `${validate_component(triangle_alert_default, "TriangleAlert").$$render($$result, { class: "h-4 w-4" }, {}, {})}` : ``}`} ${escape2($toast.title)}</p> <p class="mt-2 text-sm leading-5">${escape2($toast.msg)}</p> <button class="group absolute top-1 right-1 p-2" aria-label="close">${validate_component(x_default, "X").$$render($$result, { class: "w-5 h-5" }, {}, {})}</button></div>` : ``}`;
});
var Toast_default = Toast;

// svelte/TodoApp.svelte
var TodoApp_exports = {};
__export(TodoApp_exports, {
  default: () => TodoApp_default
});

// node_modules/svelte-dnd-action/dist/index.mjs
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DRAGGED_ENTERED_EVENT_NAME = "draggedEntered";
var DRAGGED_LEFT_EVENT_NAME = "draggedLeft";
var DRAGGED_OVER_INDEX_EVENT_NAME = "draggedOverIndex";
var TRIGGERS = {
  DRAG_STARTED: "dragStarted",
  DRAGGED_ENTERED: DRAGGED_ENTERED_EVENT_NAME,
  DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
  DRAGGED_OVER_INDEX: DRAGGED_OVER_INDEX_EVENT_NAME,
  DRAGGED_LEFT: DRAGGED_LEFT_EVENT_NAME,
  DRAGGED_LEFT_ALL: "draggedLeftAll",
  DROPPED_INTO_ZONE: "droppedIntoZone",
  DROPPED_INTO_ANOTHER: "droppedIntoAnother",
  DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
  DRAG_STOPPED: "dragStopped"
};
var SOURCES = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
};
var printDebug = function printDebug2() {
};
var dzToShadowIndexToRect;
function resetIndexesCache() {
  printDebug(function() {
    return "resetting indexes cache";
  });
  dzToShadowIndexToRect = /* @__PURE__ */ new Map();
}
resetIndexesCache();
var FEATURE_FLAG_NAMES = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
var featureFlagsMap = _defineProperty({}, FEATURE_FLAG_NAMES.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, false);
var _ID_TO_INSTRUCTION;
var INSTRUCTION_IDs = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
var ID_TO_INSTRUCTION = (_ID_TO_INSTRUCTION = {}, _defineProperty(_ID_TO_INSTRUCTION, INSTRUCTION_IDs.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), _defineProperty(_ID_TO_INSTRUCTION, INSTRUCTION_IDs.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), _ID_TO_INSTRUCTION);
function createStore(initialValue) {
  var _val = initialValue;
  var subs = /* @__PURE__ */ new Set();
  return {
    get: function get2() {
      return _val;
    },
    set: function set(newVal) {
      _val = newVal;
      Array.from(subs).forEach(function(cb) {
        return cb(_val);
      });
    },
    subscribe: function subscribe2(cb) {
      subs.add(cb);
      cb(_val);
    },
    unsubscribe: function unsubscribe(cb) {
      subs["delete"](cb);
    }
  };
}
var isItemsDragDisabled = createStore(true);

// svelte/ConfirmDeletionModal.svelte
var ConfirmDeletionModal_exports = {};
__export(ConfirmDeletionModal_exports, {
  default: () => ConfirmDeletionModal_default
});
var ConfirmDeletionModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openedMenuId, $$unsubscribe_openedMenuId;
  let $itemToProcessId, $$unsubscribe_itemToProcessId;
  let $todoLists, $$unsubscribe_todoLists;
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  validate_store(itemToProcessId, "itemToProcessId");
  $$unsubscribe_itemToProcessId = subscribe(itemToProcessId, (value) => $itemToProcessId = value);
  validate_store(todoLists, "todoLists");
  $$unsubscribe_todoLists = subscribe(todoLists, (value) => $todoLists = value);
  let { listId } = $$props;
  let { menuClass: menuClass2 } = $$props;
  let { deleteItem } = $$props;
  let dialog;
  onMount2(() => {
    dialog.showModal();
    return () => dialog.close();
  });
  if ($$props.listId === void 0 && $$bindings.listId && listId !== void 0)
    $$bindings.listId(listId);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass2 !== void 0)
    $$bindings.menuClass(menuClass2);
  if ($$props.deleteItem === void 0 && $$bindings.deleteItem && deleteItem !== void 0)
    $$bindings.deleteItem(deleteItem);
  $$unsubscribe_openedMenuId();
  $$unsubscribe_itemToProcessId();
  $$unsubscribe_todoLists();
  return `<dialog class="${escape2(menuClass2, true) + " menu bg-base-200 border border-neutral rounded-box"}"${add_attribute("this", dialog, 0)}><div class="text-lg"><p class="px-4 py-2 font-bold border-b border-neutral rounded-none mb-2" data-svelte-h="svelte-5h1eb4">Confirm Deletion</p> <div class="flex justify-around"><button data-focusindex="0" class="btn border border-neutral focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " data-svelte-h="svelte-1yakxl7">Cancel</button> <button data-focusindex="1" class="btn btn-error border border-neutral" data-svelte-h="svelte-tpdj9t">Delete</button></div></div></dialog>`;
});
var ConfirmDeletionModal_default = ConfirmDeletionModal;

// svelte/ItemsContainer.svelte
var ItemsContainer_exports = {};
__export(ItemsContainer_exports, {
  default: () => ItemsContainer_default
});
var ItemsContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { totalCount } = $$props;
  let { uncompletedCount = void 0 } = $$props;
  let { isDropdownOpened } = $$props;
  let { isScrollPositionRestored } = $$props;
  const emoticons = [
    "(\u25D5\u203F\u25D5)",
    "(\uFF3E\u25BD\uFF3E)",
    "\u25C9\u203F\u25C9",
    "\u2256\u203F\u2256",
    "\u0D2E\u25E1\u0D2E",
    "\u2570(\u2594\u2200\u2594)\u256F",
    "\u2299\u25BD\u2299",
    "\u020F.\u032E\u020F",
    "\u25D9\u203F\u25D9",
    "(^\u4EBA^)",
    "\u0669(\u25D5\u203F\u25D5\uFF61)\u06F6",
    "\u0D2E\u25E1\u0D2E",
    "(*^\u203F^*)",
    "( \u203E\u0301 \u25E1 \u203E\u0301 )",
    "(\uFFE3\u4E2A\uFFE3)",
    "(*\uA4A6\u0EB4\uA4B3\uA4A6\u0EB5)",
    "(\xAC\u203F\xAC)",
    "(\u2022\u203F\u2022)"
  ];
  let emoticonIndex = 0;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.totalCount === void 0 && $$bindings.totalCount && totalCount !== void 0)
    $$bindings.totalCount(totalCount);
  if ($$props.uncompletedCount === void 0 && $$bindings.uncompletedCount && uncompletedCount !== void 0)
    $$bindings.uncompletedCount(uncompletedCount);
  if ($$props.isDropdownOpened === void 0 && $$bindings.isDropdownOpened && isDropdownOpened !== void 0)
    $$bindings.isDropdownOpened(isDropdownOpened);
  if ($$props.isScrollPositionRestored === void 0 && $$bindings.isScrollPositionRestored && isScrollPositionRestored !== void 0)
    $$bindings.isScrollPositionRestored(isScrollPositionRestored);
  $: {
    if (isDropdownOpened) {
      emoticonIndex++;
      if (emoticonIndex >= emoticons.length) {
        emoticonIndex = 0;
      }
    }
  }
  return `<div class="${[
    "collapse border border-neutral mt-2 mb-20 overflow-visible",
    isDropdownOpened ? "collapse-open" : ""
  ].join(" ").trim()}"${add_styles({
    "visibility": isScrollPositionRestored ? "visible" : "hidden"
  })}> <div class="collapse-title relative" style="cursor: default;"><div class="flex gap-2 items-center text-xl font-medium mr-5"><span style="word-break: break-word;">${escape2(title)}</span> <span${add_attribute(
    "title",
    uncompletedCount !== void 0 ? `${uncompletedCount} Uncompleted / ${totalCount} Total` : `${totalCount} Lists`,
    0
  )} class="badge badge-neutral shrink-0">${escape2(uncompletedCount !== void 0 ? `${uncompletedCount} / ${totalCount}` : totalCount)}</span></div>  <button title="Toggle collapse." aria-label="Toggle collapse." class="${[
    "swap swap-rotate absolute top-[18px] right-5 rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ",
    isDropdownOpened ? "swap-active" : ""
  ].join(" ").trim()}">${validate_component(chevron_down_default, "ChevronDown").$$render($$result, { class: "swap-off" }, {}, {})} ${validate_component(chevron_up_default, "ChevronUp").$$render($$result, { class: "swap-on" }, {}, {})}</button></div> <div class="collapse-content">${slots.default ? slots.default({}) : ``}</div></div> ${!isDropdownOpened ? `<div class="text-center text-6xl xs:text-7xl sm:text-8xl opacity-90">${escape2(emoticons[emoticonIndex])}</div>` : ``}`;
});
var ItemsContainer_default = ItemsContainer;

// svelte/MoveTodoMenu.svelte
var MoveTodoMenu_exports = {};
__export(MoveTodoMenu_exports, {
  default: () => MoveTodoMenu_default
});
var MoveTodoMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openedMenuId, $$unsubscribe_openedMenuId;
  let $itemToProcessId, $$unsubscribe_itemToProcessId;
  let $todoLists, $$unsubscribe_todoLists;
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  validate_store(itemToProcessId, "itemToProcessId");
  $$unsubscribe_itemToProcessId = subscribe(itemToProcessId, (value) => $itemToProcessId = value);
  validate_store(todoLists, "todoLists");
  $$unsubscribe_todoLists = subscribe(todoLists, (value) => $todoLists = value);
  let { itemToMove } = $$props;
  let { menuClass: menuClass2 } = $$props;
  let { moveTodo } = $$props;
  let dialog;
  onMount2(() => {
    dialog.showModal();
    return () => dialog.close();
  });
  if ($$props.itemToMove === void 0 && $$bindings.itemToMove && itemToMove !== void 0)
    $$bindings.itemToMove(itemToMove);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass2 !== void 0)
    $$bindings.menuClass(menuClass2);
  if ($$props.moveTodo === void 0 && $$bindings.moveTodo && moveTodo !== void 0)
    $$bindings.moveTodo(moveTodo);
  $$unsubscribe_openedMenuId();
  $$unsubscribe_itemToProcessId();
  $$unsubscribe_todoLists();
  return `<dialog class="${escape2(menuClass2, true) + " menu bg-base-200 border border-neutral rounded-box"}"${add_attribute("this", dialog, 0)}><div class="text-lg"><p class="pl-4 pr-14 py-2 font-bold border-b border-neutral rounded-none mb-1.5" data-svelte-h="svelte-pcffu">Select List</p> <button data-focusindex="0" class="absolute top-3.5 right-3 rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " aria-label="Close." title="Close.">${validate_component(x_default, "X").$$render($$result, { class: "w-5 h-5" }, {}, {})}</button> <ul>${each($todoLists, (list, index) => {
    return `<li><button${add_attribute("data-focusindex", index + 1, 0)} title="Move to this list." class="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " style="word-break: break-word;"><input aria-hidden="true" tabindex="-1" type="radio" class="${["radio bg-transparent", list.id === itemToMove.listId ? "radio-accent" : ""].join(" ").trim()}" ${list.id === itemToMove.listId ? "checked" : ""}> ${escape2(list.name)}</button> </li>`;
  })}</ul></div></dialog>`;
});
var MoveTodoMenu_default = MoveTodoMenu;

// svelte/NewItemForm.svelte
var NewItemForm_exports = {};
__export(NewItemForm_exports, {
  default: () => NewItemForm_default
});
var NewItemForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { addItemCallback } = $$props;
  let { value } = $$props;
  let { placeholder } = $$props;
  let { submitButtonText } = $$props;
  let { submitButtonTitle } = $$props;
  let { isScrollPositionRestored } = $$props;
  let error = "";
  function handleSubmit() {
    value = value.replace(/\s+/g, " ").trim();
    if (value === "") {
      error = "Cannot be blank!";
      return;
    }
    if (value.length > 500) {
      error = "Cannot be over 500 characters!";
      return;
    }
    addItemCallback();
  }
  if ($$props.addItemCallback === void 0 && $$bindings.addItemCallback && addItemCallback !== void 0)
    $$bindings.addItemCallback(addItemCallback);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.submitButtonText === void 0 && $$bindings.submitButtonText && submitButtonText !== void 0)
    $$bindings.submitButtonText(submitButtonText);
  if ($$props.submitButtonTitle === void 0 && $$bindings.submitButtonTitle && submitButtonTitle !== void 0)
    $$bindings.submitButtonTitle(submitButtonTitle);
  if ($$props.isScrollPositionRestored === void 0 && $$bindings.isScrollPositionRestored && isScrollPositionRestored !== void 0)
    $$bindings.isScrollPositionRestored(isScrollPositionRestored);
  return `<form class="join my-1 w-full"${add_styles({
    "visibility": isScrollPositionRestored ? "visible" : "hidden"
  })}><input type="text"${add_attribute("placeholder", placeholder, 0)} class="input input-bordered border-neutral w-full join-item focus:outline-none focus:ring-1 focus:ring-accent focus:ring-inset " required${add_attribute("value", value, 0)}> <button class="btn btn-accent join-item border border-neutral"${add_attribute("title", submitButtonTitle, 0)}>${escape2(submitButtonText)}</button></form> ${error ? `<p style="word-break: break-word;" class="text-error">${escape2(error)}</p>` : ``}`;
});
var NewItemForm_default = NewItemForm;

// svelte/TodoCheckList.svelte
var TodoCheckList_exports = {};
__export(TodoCheckList_exports, {
  default: () => TodoCheckList_default
});

// lib/hooks/useHasTouchScreen.ts
function useHasTouchScreen() {
  const navigatorExtended = navigator;
  let hasTouchScreen = false;
  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  } else if ("msMaxTouchPoints" in navigator && navigatorExtended.msMaxTouchPoints) {
    hasTouchScreen = navigatorExtended.msMaxTouchPoints > 0;
  } else {
    const mQ = matchMedia?.("(pointer:coarse)");
    if (mQ?.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches;
    } else if ("orientation" in window) {
      hasTouchScreen = true;
    } else {
      const UA = navigatorExtended.userAgent;
      hasTouchScreen = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    }
  }
  return hasTouchScreen;
}

// svelte/DragHandle.svelte
var DragHandle_exports = {};
__export(DragHandle_exports, {
  default: () => DragHandle_default
});
var DragHandle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openedMenuId, $$unsubscribe_openedMenuId;
  let $itemToProcessId, $$unsubscribe_itemToProcessId;
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  validate_store(itemToProcessId, "itemToProcessId");
  $$unsubscribe_itemToProcessId = subscribe(itemToProcessId, (value) => $itemToProcessId = value);
  let { dragDisabled } = $$props;
  let { itemId } = $$props;
  function handleStartDrag(event) {
    event.preventDefault();
    set_store_value(itemToProcessId, $itemToProcessId = itemId, $itemToProcessId);
    dragDisabled = false;
    set_store_value(openedMenuId, $openedMenuId = "", $openedMenuId);
  }
  if ($$props.dragDisabled === void 0 && $$bindings.dragDisabled && dragDisabled !== void 0)
    $$bindings.dragDisabled(dragDisabled);
  if ($$props.itemId === void 0 && $$bindings.itemId && itemId !== void 0)
    $$bindings.itemId(itemId);
  $$unsubscribe_openedMenuId();
  $$unsubscribe_itemToProcessId();
  return `<button title="Drag to reorder." aria-label="Drag to reorder." class="${[
    "rounded-lg focus:outline-none focus-visible:ring ring-accent ",
    (dragDisabled ? "cursor-grab" : "") + " " + (!dragDisabled ? "cursor-grabbing" : "")
  ].join(" ").trim()}" tabindex="-1">${validate_component(grip_horizontal_default, "GripHorizontal").$$render($$result, { class: "w-6 h-6" }, {}, {})}</button>`;
});
var DragHandle_default = DragHandle;

// svelte/EditForm.svelte
var EditForm_exports = {};
__export(EditForm_exports, {
  default: () => EditForm_default
});
var EditForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openedMenuId, $$unsubscribe_openedMenuId;
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  let { item } = $$props;
  let { updateItem } = $$props;
  let { menuClass: menuClass2 } = $$props;
  let newName = item.newName;
  let error = "";
  function commitEdits() {
    if (isTodoItem(item)) {
      updateItem({
        id: item.id,
        name: newName,
        completed: item.completed,
        listId: item.listId
      });
    } else {
      updateItem({ id: item.id, name: newName });
    }
    set_store_value(openedMenuId, $openedMenuId = "", $openedMenuId);
  }
  function discardEdits() {
    if (isTodoItem(item)) {
      updateItem({
        id: item.id,
        name: item.name,
        completed: item.completed,
        listId: item.listId
      });
    } else {
      updateItem({ id: item.id, name: item.name });
    }
    set_store_value(openedMenuId, $openedMenuId = "", $openedMenuId);
  }
  function handleSubmit() {
    newName = newName.replace(/\s+/g, " ").trim();
    if (["", item.name].includes(newName)) {
      discardEdits();
      return;
    }
    if (item.name.toLowerCase() === newName.toLowerCase()) {
      commitEdits();
      return;
    }
    if (newName.length > 500) {
      error = "Cannot be over 500 characters!";
      return;
    }
    commitEdits();
  }
  function handleEscape() {
    newName = "";
    handleSubmit();
  }
  function handleInput() {
    updateItem({ ...item, newName });
    error = "";
  }
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.updateItem === void 0 && $$bindings.updateItem && updateItem !== void 0)
    $$bindings.updateItem(updateItem);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass2 !== void 0)
    $$bindings.menuClass(menuClass2);
  $$unsubscribe_openedMenuId();
  return `<form class="${escape2(menuClass2, true) + " w-full"}"><div class="w-full join"><input data-focusindex="0" type="text" class="input input-bordered border-neutral w-full join-item focus:outline-none focus:ring-1 focus:ring-accent focus:ring-inset "${add_attribute("value", newName, 0)}> <button data-focusindex="1" class="btn btn-accent join-item border border-neutral" aria-label="Update item.">${validate_component(check_default, "Check").$$render($$result, { class: "w-5 h-5" }, {}, {})}</button></div> ${error ? `<p style="word-break: break-word;" class="text-error mt-1 text-sm">${escape2(error)}</p>` : ``}</form>`;
});
var EditForm_default = EditForm;

// svelte/OptionsMenu.svelte
var OptionsMenu_exports = {};
__export(OptionsMenu_exports, {
  default: () => OptionsMenu_default
});
var OptionsMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openedMenuId, $$unsubscribe_openedMenuId;
  let $itemToProcessId, $$unsubscribe_itemToProcessId;
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  validate_store(itemToProcessId, "itemToProcessId");
  $$unsubscribe_itemToProcessId = subscribe(itemToProcessId, (value) => $itemToProcessId = value);
  let { item } = $$props;
  let { updateItem } = $$props;
  let { deleteItem } = $$props;
  let { menuClass: menuClass2 } = $$props;
  let { moveTodoMenuId: moveTodoMenuId2 = void 0 } = $$props;
  let { confirmDeletionModalId: confirmDeletionModalId2 = void 0 } = $$props;
  let focusFirstElement = false;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.updateItem === void 0 && $$bindings.updateItem && updateItem !== void 0)
    $$bindings.updateItem(updateItem);
  if ($$props.deleteItem === void 0 && $$bindings.deleteItem && deleteItem !== void 0)
    $$bindings.deleteItem(deleteItem);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass2 !== void 0)
    $$bindings.menuClass(menuClass2);
  if ($$props.moveTodoMenuId === void 0 && $$bindings.moveTodoMenuId && moveTodoMenuId2 !== void 0)
    $$bindings.moveTodoMenuId(moveTodoMenuId2);
  if ($$props.confirmDeletionModalId === void 0 && $$bindings.confirmDeletionModalId && confirmDeletionModalId2 !== void 0)
    $$bindings.confirmDeletionModalId(confirmDeletionModalId2);
  $: {
    if ($openedMenuId !== item.id) {
      focusFirstElement = false;
    }
  }
  $$unsubscribe_openedMenuId();
  $$unsubscribe_itemToProcessId();
  return `<div class="${escape2(menuClass2, true) + " relative pointer-events-auto"}"><button class="flex items-center rounded-full focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " aria-label="Options menu." title="Click to toggle options menu."><div class="swap swap-rotate"><input type="checkbox" class="hidden" ${$openedMenuId === item.id ? "checked" : ""}> ${validate_component(circle_ellipsis_default, "CircleEllipsis").$$render($$result, { class: "swap-off" }, {}, {})} ${validate_component(circle_x_default, "CircleX").$$render($$result, { class: "swap-on" }, {}, {})}</div></button> ${$openedMenuId === item.id ? `<ul class="absolute right-8 -bottom-1 menu bg-base-200 border border-neutral rounded-box"><li><button data-focusindex="2" class="flex items-center gap-1.5 p-2 rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ">${validate_component(trash_2_default, "Trash2").$$render($$result, { class: "w-4 h-4" }, {}, {})}
          Delete</button></li> ${moveTodoMenuId2 ? `<li><button data-focusindex="1" class="flex items-center gap-1.5 p-2 rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ">${validate_component(move_right_default, "MoveRight").$$render($$result, { class: "w-4 h-4" }, {}, {})}
            Move</button></li>` : ``} <li><button data-focusindex="0" class="flex items-center gap-1.5 p-2 rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ">${validate_component(pencil_default, "Pencil").$$render($$result, { class: "w-4 h-4" }, {}, {})}
          Edit</button></li></ul>` : ``}</div>`;
});
var OptionsMenu_default = OptionsMenu;

// svelte/TodoCheckList.svelte
var TodoCheckList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $yTodoItems, $$unsubscribe_yTodoItems;
  let $itemToProcessId, $$unsubscribe_itemToProcessId;
  let $openedMenuId, $$unsubscribe_openedMenuId;
  validate_store(yTodoItems, "yTodoItems");
  $$unsubscribe_yTodoItems = subscribe(yTodoItems, (value) => $yTodoItems = value);
  validate_store(itemToProcessId, "itemToProcessId");
  $$unsubscribe_itemToProcessId = subscribe(itemToProcessId, (value) => $itemToProcessId = value);
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  let { title } = $$props;
  let { items } = $$props;
  let { toggleCompleted } = $$props;
  let { updateItem } = $$props;
  let { deleteItem } = $$props;
  let { handleConsider } = $$props;
  let { handleFinalize } = $$props;
  let { handleDragKeyDown } = $$props;
  let { dragDisabled } = $$props;
  let { flipDurationMs: flipDurationMs2 } = $$props;
  let { menuClass: menuClass2 } = $$props;
  let { moveTodoMenuId: moveTodoMenuId2 } = $$props;
  let { isScrollPositionRestored } = $$props;
  const hasTouchScreen = useHasTouchScreen();
  function updateUiOnConsider(newItems) {
    items = newItems;
  }
  function updateUiOnFinalize(newItems) {
    const oldIndex = $yTodoItems.toArray().findIndex((yMap) => yMap.get("id") === $itemToProcessId);
    const oldItem = $yTodoItems.get(oldIndex);
    const newItem = new YMap();
    newItem.set("id", oldItem.get("id"));
    newItem.set("name", oldItem.get("name"));
    newItem.set("completed", oldItem.get("completed"));
    newItem.set("listId", oldItem.get("listId"));
    $yTodoItems.doc.transact(() => {
      $yTodoItems.delete(oldIndex);
      const indexInNewItems = newItems.findIndex((list) => list.id === $itemToProcessId);
      const prevItemId = indexInNewItems === 0 ? null : newItems[indexInNewItems - 1].id;
      if (!prevItemId) {
        $yTodoItems.unshift([newItem]);
        return;
      }
      const index = $yTodoItems.toArray().findIndex((yMap) => yMap.get("id") === prevItemId) + 1;
      $yTodoItems.insert(index, [newItem]);
    });
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.toggleCompleted === void 0 && $$bindings.toggleCompleted && toggleCompleted !== void 0)
    $$bindings.toggleCompleted(toggleCompleted);
  if ($$props.updateItem === void 0 && $$bindings.updateItem && updateItem !== void 0)
    $$bindings.updateItem(updateItem);
  if ($$props.deleteItem === void 0 && $$bindings.deleteItem && deleteItem !== void 0)
    $$bindings.deleteItem(deleteItem);
  if ($$props.handleConsider === void 0 && $$bindings.handleConsider && handleConsider !== void 0)
    $$bindings.handleConsider(handleConsider);
  if ($$props.handleFinalize === void 0 && $$bindings.handleFinalize && handleFinalize !== void 0)
    $$bindings.handleFinalize(handleFinalize);
  if ($$props.handleDragKeyDown === void 0 && $$bindings.handleDragKeyDown && handleDragKeyDown !== void 0)
    $$bindings.handleDragKeyDown(handleDragKeyDown);
  if ($$props.dragDisabled === void 0 && $$bindings.dragDisabled && dragDisabled !== void 0)
    $$bindings.dragDisabled(dragDisabled);
  if ($$props.flipDurationMs === void 0 && $$bindings.flipDurationMs && flipDurationMs2 !== void 0)
    $$bindings.flipDurationMs(flipDurationMs2);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass2 !== void 0)
    $$bindings.menuClass(menuClass2);
  if ($$props.moveTodoMenuId === void 0 && $$bindings.moveTodoMenuId && moveTodoMenuId2 !== void 0)
    $$bindings.moveTodoMenuId(moveTodoMenuId2);
  if ($$props.isScrollPositionRestored === void 0 && $$bindings.isScrollPositionRestored && isScrollPositionRestored !== void 0)
    $$bindings.isScrollPositionRestored(isScrollPositionRestored);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<ul class="min-h-[40px] rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 "${add_attribute("aria-label", title, 0)}${add_styles({
      "visibility": isScrollPositionRestored ? "visible" : "hidden"
    })}>${items.length ? each(items, (item) => {
      return `<li class="flex items-center justify-between rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 "${add_attribute("aria-label", item.name, 0)}>${item.isEditing ? `${validate_component(EditForm_default, "EditForm").$$render($$result, { item, updateItem, menuClass: menuClass2 }, {}, {})}` : `<label title="Click to toggle completed." class="${[
        "flex items-center gap-3 grow px-2 py-1.5 mr-5 rounded-lg text-lg cursor-pointer active:bg-base-300",
        (item.completed ? "opacity-50" : "") + " " + ($openedMenuId ? "pointer-events-none" : "") + " " + (!hasTouchScreen ? "hover:bg-base-200" : "")
      ].join(" ").trim()}"><input type="checkbox" class="checkbox bg-transparent pointer-events-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-transparent " ${item.completed ? "checked" : ""}> <span style="word-break: break-word;"${add_classes((item.completed ? "line-through" : "").trim())}>${escape2(item.name)} </span></label> <div class="flex gap-1">${validate_component(OptionsMenu_default, "OptionsMenu").$$render(
        $$result,
        {
          item,
          updateItem,
          deleteItem,
          menuClass: menuClass2,
          moveTodoMenuId: moveTodoMenuId2
        },
        {},
        {}
      )} ${validate_component(DragHandle_default, "DragHandle").$$render(
        $$result,
        { itemId: item.id, dragDisabled },
        {
          dragDisabled: ($$value) => {
            dragDisabled = $$value;
            $$settled = false;
          }
        },
        {}
      )} </div>`} </li>`;
    }) : `<li class="flex items-center h-10 px-2 rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " data-svelte-h="svelte-1fv7iaw">This list is looking lonely! Add some items?
    </li>`}</ul>`;
  } while (!$$settled);
  $$unsubscribe_yTodoItems();
  $$unsubscribe_itemToProcessId();
  $$unsubscribe_openedMenuId();
  return $$rendered;
});
var TodoCheckList_default = TodoCheckList;

// svelte/TodoListSelector.svelte
var TodoListSelector_exports = {};
__export(TodoListSelector_exports, {
  default: () => TodoListSelector_default
});
var TodoListSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $yTodoLists, $$unsubscribe_yTodoLists;
  let $itemToProcessId, $$unsubscribe_itemToProcessId;
  let $todoLists, $$unsubscribe_todoLists;
  let $todoItems, $$unsubscribe_todoItems;
  let $openedMenuId, $$unsubscribe_openedMenuId;
  let $urlHash, $$unsubscribe_urlHash;
  let $selectedListId, $$unsubscribe_selectedListId;
  validate_store(yTodoLists, "yTodoLists");
  $$unsubscribe_yTodoLists = subscribe(yTodoLists, (value) => $yTodoLists = value);
  validate_store(itemToProcessId, "itemToProcessId");
  $$unsubscribe_itemToProcessId = subscribe(itemToProcessId, (value) => $itemToProcessId = value);
  validate_store(todoLists, "todoLists");
  $$unsubscribe_todoLists = subscribe(todoLists, (value) => $todoLists = value);
  validate_store(todoItems, "todoItems");
  $$unsubscribe_todoItems = subscribe(todoItems, (value) => $todoItems = value);
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  validate_store(urlHash, "urlHash");
  $$unsubscribe_urlHash = subscribe(urlHash, (value) => $urlHash = value);
  validate_store(selectedListId, "selectedListId");
  $$unsubscribe_selectedListId = subscribe(selectedListId, (value) => $selectedListId = value);
  let { updateItem } = $$props;
  let { deleteItem } = $$props;
  let { handleConsider } = $$props;
  let { handleFinalize } = $$props;
  let { handleDragKeyDown } = $$props;
  let { dragDisabled } = $$props;
  let { flipDurationMs: flipDurationMs2 } = $$props;
  let { menuClass: menuClass2 } = $$props;
  let { confirmDeletionModalId: confirmDeletionModalId2 } = $$props;
  let { isScrollPositionRestored } = $$props;
  const hasTouchScreen = useHasTouchScreen();
  function updateUiOnConsider(newItems) {
    set_store_value(todoLists, $todoLists = newItems, $todoLists);
  }
  function updateUiOnFinalize(newItems) {
    const oldIndex = $yTodoLists.toArray().findIndex((yMap) => yMap.get("id") === $itemToProcessId);
    const oldList = $yTodoLists.get(oldIndex);
    const newList2 = new YMap();
    let oldListId = oldList.get("id");
    if (typeof oldListId !== "string") {
      throw new Error("The list ID must be a string.");
    }
    let oldListName = oldList.get("name");
    if (typeof oldListName !== "string") {
      throw new Error("The list name must be a string.");
    }
    newList2.set("id", oldListId);
    newList2.set("name", oldListName);
    $yTodoLists.doc.transact(() => {
      $yTodoLists.delete(oldIndex);
      const index = newItems.findIndex((list) => list.id === $itemToProcessId);
      $yTodoLists.insert(index, [newList2]);
    });
  }
  if ($$props.updateItem === void 0 && $$bindings.updateItem && updateItem !== void 0)
    $$bindings.updateItem(updateItem);
  if ($$props.deleteItem === void 0 && $$bindings.deleteItem && deleteItem !== void 0)
    $$bindings.deleteItem(deleteItem);
  if ($$props.handleConsider === void 0 && $$bindings.handleConsider && handleConsider !== void 0)
    $$bindings.handleConsider(handleConsider);
  if ($$props.handleFinalize === void 0 && $$bindings.handleFinalize && handleFinalize !== void 0)
    $$bindings.handleFinalize(handleFinalize);
  if ($$props.handleDragKeyDown === void 0 && $$bindings.handleDragKeyDown && handleDragKeyDown !== void 0)
    $$bindings.handleDragKeyDown(handleDragKeyDown);
  if ($$props.dragDisabled === void 0 && $$bindings.dragDisabled && dragDisabled !== void 0)
    $$bindings.dragDisabled(dragDisabled);
  if ($$props.flipDurationMs === void 0 && $$bindings.flipDurationMs && flipDurationMs2 !== void 0)
    $$bindings.flipDurationMs(flipDurationMs2);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass2 !== void 0)
    $$bindings.menuClass(menuClass2);
  if ($$props.confirmDeletionModalId === void 0 && $$bindings.confirmDeletionModalId && confirmDeletionModalId2 !== void 0)
    $$bindings.confirmDeletionModalId(confirmDeletionModalId2);
  if ($$props.isScrollPositionRestored === void 0 && $$bindings.isScrollPositionRestored && isScrollPositionRestored !== void 0)
    $$bindings.isScrollPositionRestored(isScrollPositionRestored);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<ul class="min-h-[40px] rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " aria-label="Lists"${add_styles({
      "visibility": isScrollPositionRestored ? "visible" : "hidden"
    })}>${$todoLists.length ? each($todoLists, (list) => {
      let listItems = $todoItems.filter((item) => item.listId === list.id), uncompletedItems = listItems.filter((item) => !item.completed);
      return `<li class="flex items-center justify-between rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 "${add_attribute("aria-label", list.name, 0)}>${list.isEditing ? `${validate_component(EditForm_default, "EditForm").$$render($$result, { item: list, updateItem, menuClass: menuClass2 }, {}, {})}` : `<button title="Click to view list." class="${[
        "flex items-center gap-1 grow px-2 py-1.5 mr-5 rounded-lg text-lg text-left active:bg-base-300 focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 ",
        ($openedMenuId ? "pointer-events-none" : "") + " " + (!hasTouchScreen ? "hover:bg-base-200" : "")
      ].join(" ").trim()}"><span style="word-break: break-word;">${escape2(list.name)} <span class="badge badge-xs transition-none p-2">${escape2(uncompletedItems.length)} / ${escape2(listItems.length)} </span></span> ${validate_component(chevron_right_default, "ChevronRight").$$render($$result, { class: "shrink-0 w-4 h-4" }, {}, {})}</button> <div class="flex gap-1">${validate_component(OptionsMenu_default, "OptionsMenu").$$render(
        $$result,
        {
          item: list,
          updateItem,
          deleteItem,
          menuClass: menuClass2,
          confirmDeletionModalId: confirmDeletionModalId2
        },
        {},
        {}
      )} ${validate_component(DragHandle_default, "DragHandle").$$render(
        $$result,
        { itemId: list.id, dragDisabled },
        {
          dragDisabled: ($$value) => {
            dragDisabled = $$value;
            $$settled = false;
          }
        },
        {}
      )} </div>`} </li>`;
    }) : `<li class="flex items-center h-10 px-2 rounded-lg focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " data-svelte-h="svelte-8m9muu">No lists yet. Please create a list to get started.
    </li>`}</ul>`;
  } while (!$$settled);
  $$unsubscribe_yTodoLists();
  $$unsubscribe_itemToProcessId();
  $$unsubscribe_todoLists();
  $$unsubscribe_todoItems();
  $$unsubscribe_openedMenuId();
  $$unsubscribe_urlHash();
  $$unsubscribe_selectedListId();
  return $$rendered;
});
var TodoListSelector_default = TodoListSelector;

// svelte/TodoApp.svelte
var confirmDeletionModalId = "confirm-deletion-modal-id";
var moveTodoMenuId = "move-todo-menu-id";
var flipDurationMs = 100;
function filterDuplicates(items) {
  const ids = [];
  return items.filter((item) => {
    if (!ids.includes(item.id)) {
      ids.push(item.id);
      return true;
    }
    return false;
  });
}
var TodoApp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedListName;
  let selectedListTodoItems;
  let selectedListUncompletedItems;
  let itemToMove;
  let $itemToProcessId, $$unsubscribe_itemToProcessId;
  let $todoItems, $$unsubscribe_todoItems;
  let $selectedListId, $$unsubscribe_selectedListId;
  let $todoLists, $$unsubscribe_todoLists;
  let $liveView, $$unsubscribe_liveView;
  let $yTodoItems, $$unsubscribe_yTodoItems;
  let $yTodoLists, $$unsubscribe_yTodoLists;
  let $newTodo, $$unsubscribe_newTodo;
  let $newList, $$unsubscribe_newList;
  let $openedMenuId, $$unsubscribe_openedMenuId;
  let $isTodoOpened, $$unsubscribe_isTodoOpened;
  let $isListsOpened, $$unsubscribe_isListsOpened;
  validate_store(itemToProcessId, "itemToProcessId");
  $$unsubscribe_itemToProcessId = subscribe(itemToProcessId, (value) => $itemToProcessId = value);
  validate_store(todoItems, "todoItems");
  $$unsubscribe_todoItems = subscribe(todoItems, (value) => $todoItems = value);
  validate_store(selectedListId, "selectedListId");
  $$unsubscribe_selectedListId = subscribe(selectedListId, (value) => $selectedListId = value);
  validate_store(todoLists, "todoLists");
  $$unsubscribe_todoLists = subscribe(todoLists, (value) => $todoLists = value);
  validate_store(liveView, "liveView");
  $$unsubscribe_liveView = subscribe(liveView, (value) => $liveView = value);
  validate_store(yTodoItems, "yTodoItems");
  $$unsubscribe_yTodoItems = subscribe(yTodoItems, (value) => $yTodoItems = value);
  validate_store(yTodoLists, "yTodoLists");
  $$unsubscribe_yTodoLists = subscribe(yTodoLists, (value) => $yTodoLists = value);
  validate_store(newTodo, "newTodo");
  $$unsubscribe_newTodo = subscribe(newTodo, (value) => $newTodo = value);
  validate_store(newList, "newList");
  $$unsubscribe_newList = subscribe(newList, (value) => $newList = value);
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  validate_store(isTodoOpened, "isTodoOpened");
  $$unsubscribe_isTodoOpened = subscribe(isTodoOpened, (value) => $isTodoOpened = value);
  validate_store(isListsOpened, "isListsOpened");
  $$unsubscribe_isListsOpened = subscribe(isListsOpened, (value) => $isListsOpened = value);
  let { menuClass: menuClass2 } = $$props;
  let { isScrollPositionRestored } = $$props;
  let dragDisabled = true;
  function addList() {
    const list = new YMap();
    list.set("id", crypto.randomUUID());
    list.set("name", $newList);
    $yTodoLists.unshift([list]);
    set_store_value(newList, $newList = "", $newList);
    syncDocumentToServer($liveView);
  }
  function addTodo() {
    const todo = new YMap();
    todo.set("id", crypto.randomUUID());
    todo.set("name", $newTodo);
    todo.set("completed", false);
    todo.set("listId", $selectedListId);
    $yTodoItems.unshift([todo]);
    set_store_value(newTodo, $newTodo = "", $newTodo);
    syncDocumentToServer($liveView);
  }
  function toggleCompleted(itemId) {
    for (const yTodo of $yTodoItems) {
      if (yTodo.get("id") === itemId) {
        yTodo.set("completed", !yTodo.get("completed"));
        syncDocumentToServer($liveView);
        return;
      }
    }
  }
  function moveTodo(itemToMove2, newListId) {
    if (itemToMove2.listId === newListId) {
      return;
    }
    const index = $yTodoItems.toArray().findIndex((yTodo) => yTodo.get("id") === itemToMove2.id);
    const todo = new YMap();
    todo.set("id", itemToMove2.id);
    todo.set("name", itemToMove2.name);
    todo.set("completed", itemToMove2.completed);
    todo.set("listId", newListId);
    $yTodoItems.doc.transact(() => {
      $yTodoItems.delete(index);
      $yTodoItems.unshift([todo]);
    });
    syncDocumentToServer($liveView);
  }
  const updateItem = (newItem) => {
    if (isTodoItem(newItem)) {
      for (const yTodo of $yTodoItems) {
        if (yTodo.get("id") === newItem.id) {
          $yTodoItems.doc.transact(() => {
            yTodo.set("name", newItem.name);
            yTodo.set("completed", newItem.completed);
            yTodo.set("listId", newItem.listId);
            newItem.newName === void 0 ? yTodo.delete("newName") : yTodo.set("newName", newItem.newName);
            newItem.isEditing === void 0 ? yTodo.delete("isEditing") : yTodo.set("isEditing", newItem.isEditing);
          });
          syncDocumentToServer($liveView);
          return;
        }
      }
    } else {
      for (const yList of $yTodoLists) {
        if (yList.get("id") === newItem.id) {
          $yTodoLists.doc.transact(() => {
            yList.set("name", newItem.name);
            newItem.newName === void 0 ? yList.delete("newName") : yList.set("newName", newItem.newName);
            newItem.isEditing === void 0 ? yList.delete("isEditing") : yList.set("isEditing", newItem.isEditing);
          });
          syncDocumentToServer($liveView);
          return;
        }
      }
    }
  };
  const deleteItem = (item) => {
    let index = 0;
    if (isTodoItem(item)) {
      for (const yTodo of $yTodoItems) {
        if (yTodo.get("id") === item.id) {
          $yTodoItems.delete(index);
          syncDocumentToServer($liveView);
          return;
        }
        index++;
      }
    } else {
      for (const yList of $yTodoLists) {
        if (yList.get("id") === item.id) {
          $yTodoLists.doc.transact(() => {
            $yTodoLists.delete(index);
            cleanOrphanedTodos(item.id);
          });
          syncDocumentToServer($liveView);
          return;
        }
        index++;
      }
    }
  };
  function cleanOrphanedTodos(listId) {
    const oldTodoListIds = $todoLists.map((list) => list.id);
    const newTodoListIds = oldTodoListIds.filter((id2) => id2 !== listId);
    let index = 0;
    $yTodoItems.forEach((yMap) => {
      let yMapListId = yMap.get("listId");
      yMapListId = typeof yMapListId === "string" ? yMapListId : "";
      if (!newTodoListIds.includes(yMapListId)) {
        $yTodoItems.delete(index);
        return;
      }
      index++;
    });
  }
  const handleConsider = (event, updateUiOnConsider) => {
    const newItems = filterDuplicates(event.detail.items);
    updateUiOnConsider(newItems);
    const { source, trigger } = event.detail.info;
    if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
      dragDisabled = true;
    }
  };
  const handleFinalize = (event, updateUiOnFinalize) => {
    const newItems = filterDuplicates(event.detail.items);
    updateUiOnFinalize(newItems);
    const { source } = event.detail.info;
    if (source === SOURCES.POINTER) {
      dragDisabled = true;
    }
    syncDocumentToServer($liveView);
  };
  function handleDragKeyDown(event, itemId) {
    if ((event.key === "Enter" || event.key === " ") && dragDisabled) {
      dragDisabled = false;
      set_store_value(itemToProcessId, $itemToProcessId = itemId, $itemToProcessId);
    }
  }
  function setSelectedListName(listId) {
    return $todoLists.find((list) => list.id === listId)?.name ?? "";
  }
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass2 !== void 0)
    $$bindings.menuClass(menuClass2);
  if ($$props.isScrollPositionRestored === void 0 && $$bindings.isScrollPositionRestored && isScrollPositionRestored !== void 0)
    $$bindings.isScrollPositionRestored(isScrollPositionRestored);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selectedListName = setSelectedListName($selectedListId);
    selectedListTodoItems = $todoItems.filter((item) => item.listId === $selectedListId);
    selectedListUncompletedItems = selectedListTodoItems.filter((item) => !item.completed);
    itemToMove = $todoItems.find((item) => item.id === $itemToProcessId);
    $$rendered = `${$itemToProcessId && $openedMenuId === confirmDeletionModalId ? `${validate_component(ConfirmDeletionModal_default, "ConfirmDeletionModal").$$render(
      $$result,
      {
        listId: $itemToProcessId,
        menuClass: menuClass2,
        deleteItem
      },
      {},
      {}
    )}` : ``} ${itemToMove && $openedMenuId === moveTodoMenuId ? `${validate_component(MoveTodoMenu_default, "MoveTodoMenu").$$render($$result, { itemToMove, menuClass: menuClass2, moveTodo }, {}, {})}` : ``} ${$selectedListId ? `${validate_component(NewItemForm_default, "NewItemForm").$$render(
      $$result,
      {
        addItemCallback: addTodo,
        placeholder: "Enter new item name",
        submitButtonText: "Add",
        submitButtonTitle: "Add item to list.",
        isScrollPositionRestored,
        value: $newTodo
      },
      {
        value: ($$value) => {
          $newTodo = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ItemsContainer_default, "ItemsContainer").$$render(
      $$result,
      {
        title: selectedListName,
        totalCount: selectedListTodoItems.length,
        uncompletedCount: selectedListUncompletedItems.length,
        isScrollPositionRestored,
        isDropdownOpened: $isTodoOpened
      },
      {
        isDropdownOpened: ($$value) => {
          $isTodoOpened = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(TodoCheckList_default, "TodoCheckList").$$render(
            $$result,
            {
              title: selectedListName,
              items: selectedListTodoItems,
              toggleCompleted,
              updateItem,
              deleteItem,
              handleConsider,
              handleFinalize,
              handleDragKeyDown,
              flipDurationMs,
              menuClass: menuClass2,
              moveTodoMenuId,
              isScrollPositionRestored,
              dragDisabled
            },
            {
              dragDisabled: ($$value) => {
                dragDisabled = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(NewItemForm_default, "NewItemForm").$$render(
      $$result,
      {
        addItemCallback: addList,
        placeholder: "Enter new list name",
        submitButtonText: "Create",
        submitButtonTitle: "Create new list.",
        isScrollPositionRestored,
        value: $newList
      },
      {
        value: ($$value) => {
          $newList = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ItemsContainer_default, "ItemsContainer").$$render(
      $$result,
      {
        title: "Lists",
        totalCount: $todoLists.length,
        isScrollPositionRestored,
        isDropdownOpened: $isListsOpened
      },
      {
        isDropdownOpened: ($$value) => {
          $isListsOpened = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(TodoListSelector_default, "TodoListSelector").$$render(
            $$result,
            {
              updateItem,
              deleteItem,
              handleConsider,
              handleFinalize,
              handleDragKeyDown,
              flipDurationMs,
              menuClass: menuClass2,
              confirmDeletionModalId,
              isScrollPositionRestored,
              dragDisabled
            },
            {
              dragDisabled: ($$value) => {
                dragDisabled = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}`}`;
  } while (!$$settled);
  $$unsubscribe_itemToProcessId();
  $$unsubscribe_todoItems();
  $$unsubscribe_selectedListId();
  $$unsubscribe_todoLists();
  $$unsubscribe_liveView();
  $$unsubscribe_yTodoItems();
  $$unsubscribe_yTodoLists();
  $$unsubscribe_newTodo();
  $$unsubscribe_newList();
  $$unsubscribe_openedMenuId();
  $$unsubscribe_isTodoOpened();
  $$unsubscribe_isListsOpened();
  return $$rendered;
});
var TodoApp_default = TodoApp;

// svelte/UpdateAlert.svelte
var UpdateAlert_exports = {};
__export(UpdateAlert_exports, {
  default: () => UpdateAlert_default
});
var UpdateAlert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newSW;
  let showAlert = false;
  let isSWUpdateAvailable = false;
  let isSWUpdateConfirmed = false;
  let width;
  async function detectSWUpdate() {
    const registration = await navigator.serviceWorker.ready;
    newSW = registration.waiting;
    if (newSW) {
      isSWUpdateAvailable = true;
      return;
    }
    registration.addEventListener("updatefound", () => {
      newSW = registration.installing;
      newSW?.addEventListener("statechange", () => {
        if (newSW.state === "installed") {
          isSWUpdateAvailable = true;
        }
      });
    });
  }
  onMount2(() => {
    detectSWUpdate();
  });
  $: {
    if (isSWUpdateAvailable) {
      useIsConnected({ timeout: 1e4 }).then((isConnected) => {
        if (isConnected) {
          showAlert = true;
        }
      });
    }
  }
  $: {
    if (isSWUpdateConfirmed) {
      newSW.postMessage({ type: "request_skip_waiting" });
    }
  }
  return `${showAlert ? `<div role="alert" class="fixed left-1/2 max-w-[90vw] xs:max-w-sm z-40 alert shadow-lg border border-neutral m-2 "${add_styles({ "margin-left": `-${width / 2}px` })}>${validate_component(info_default, "Info").$$render($$result, {}, {}, {})} <div><h3 class="font-bold" data-svelte-h="svelte-a6jdo6">Update Available</h3> <div class="text-sm" data-svelte-h="svelte-128f0ll">Reload to update?</div></div> <div><button class="btn btn-sm border border-neutral transition-none" data-svelte-h="svelte-1xraj9s">Later</button> <button class="btn btn-sm btn-accent border border-neutral" data-svelte-h="svelte-1haycr6">Update</button></div></div>` : ``}`;
});
var UpdateAlert_default = UpdateAlert;

// svelte/App.svelte
var menuClass = "menu-class";
var App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openedMenuId, $$unsubscribe_openedMenuId;
  let $urlHash, $$unsubscribe_urlHash;
  validate_store(openedMenuId, "openedMenuId");
  $$unsubscribe_openedMenuId = subscribe(openedMenuId, (value) => $openedMenuId = value);
  validate_store(urlHash, "urlHash");
  $$unsubscribe_urlHash = subscribe(urlHash, (value) => $urlHash = value);
  let { live } = $$props;
  live;
  let { currentUserEmail } = $$props;
  let isClientStateRestored = false;
  let isSyncedToIndexedDb = false;
  let isScrollPositionRestored = false;
  let serviceWorkerVersion;
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  if ($$props.currentUserEmail === void 0 && $$bindings.currentUserEmail && currentUserEmail !== void 0)
    $$bindings.currentUserEmail(currentUserEmail);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(StateManagement_default, "StateManagement").$$render(
      $$result,
      { isSyncedToIndexedDb },
      {
        isSyncedToIndexedDb: ($$value) => {
          isSyncedToIndexedDb = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ClientOnlyStateManagement_default, "ClientOnlyStateManagement").$$render(
      $$result,
      { isClientStateRestored },
      {
        isClientStateRestored: ($$value) => {
          isClientStateRestored = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ScrollPositionRestorer_default, "ScrollPositionRestorer").$$render(
      $$result,
      {
        isSyncedToIndexedDb,
        isClientStateRestored,
        isScrollPositionRestored
      },
      {
        isScrollPositionRestored: ($$value) => {
          isScrollPositionRestored = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ServiceWorker_default, "ServiceWorker").$$render(
      $$result,
      { serviceWorkerVersion },
      {
        serviceWorkerVersion: ($$value) => {
          serviceWorkerVersion = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ThemeSyncManager_default, "ThemeSyncManager").$$render($$result, {}, {}, {})} ${validate_component(ClickOutsideClassHandler_default, "ClickOutsideClassHandler").$$render(
      $$result,
      {
        className: menuClass,
        callbackFunction: () => $openedMenuId = ""
      },
      {},
      {}
    )} ${isSyncedToIndexedDb && isClientStateRestored ? `${validate_component(Toast_default, "Toast").$$render($$result, {}, {}, {})} ${validate_component(UpdateAlert_default, "UpdateAlert").$$render($$result, {}, {}, {})} ${$urlHash === "" ? `${validate_component(Header_default, "Header").$$render(
      $$result,
      {
        currentUserEmail,
        serviceWorkerVersion,
        menuClass,
        isClientStateRestored
      },
      {
        isClientStateRestored: ($$value) => {
          isClientStateRestored = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(StickyHeader_default, "StickyHeader").$$render($$result, {}, {}, {})}`} ${$urlHash === "about" ? `${validate_component(AppInfo_default, "AppInfo").$$render($$result, {}, {}, {})}` : `<div class="max-w-2xl mx-auto px-2 md:p-0">${validate_component(TodoApp_default, "TodoApp").$$render($$result, { menuClass, isScrollPositionRestored }, {}, {})}</div>`}` : `${validate_component(AppSkeleton_default, "AppSkeleton").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_openedMenuId();
  $$unsubscribe_urlHash();
  return $$rendered;
});
var App_default = App;

// svelte/ErrorLayout.svelte
var ErrorLayout_exports = {};
__export(ErrorLayout_exports, {
  default: () => ErrorLayout_default
});
var ErrorLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { live = void 0 } = $$props;
  live;
  let { title } = $$props;
  let { subtitle = void 0 } = $$props;
  let { href } = $$props;
  let { linkText } = $$props;
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.linkText === void 0 && $$bindings.linkText && linkText !== void 0)
    $$bindings.linkText(linkText);
  return `<div class="hero min-h-screen"><div class="hero-content text-center"><div class="max-w-md"><div class="mx-auto text-8xl mb-10" data-svelte-h="svelte-1oiihev">(\u25D1_\u25D1)</div> <h1 class="text-xl font-bold my-3">${escape2(title)}</h1> ${subtitle ? `<p class="my-2">${escape2(subtitle)}</p>` : ``} <a class="btn btn-accent my-2"${add_attribute("href", href, 0)}>${escape2(linkText)}</a></div></div></div>`;
});
var ErrorLayout_default = ErrorLayout;

// svelte/ExampleSvelteComponent.svelte
var ExampleSvelteComponent_exports = {};
__export(ExampleSvelteComponent_exports, {
  default: () => ExampleSvelteComponent_default
});
var css4 = {
  code: "button.svelte-1s69lyn{margin:10px;padding:10px;display:block;border:1px solid #ccc}",
  map: '{"version":3,"file":"ExampleSvelteComponent.svelte","sources":["ExampleSvelteComponent.svelte"],"sourcesContent":["<script>\\n  export let count;\\n\\n  let clientOnlyCount = count;\\n</script>\\n\\n<button phx-click=\\"increment\\">\\n  {count}\\n</button>\\n\\n<button on:click={() => clientOnlyCount++}>\\n  {clientOnlyCount}\\n</button>\\n\\n<style>\\n  button {\\n    margin: 10px;\\n    padding: 10px;\\n    display: block;\\n    border: 1px solid #ccc;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAeE,qBAAO,CACL,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACpB"}'
};
var ExampleSvelteComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { count: count2 } = $$props;
  let clientOnlyCount = count2;
  if ($$props.count === void 0 && $$bindings.count && count2 !== void 0)
    $$bindings.count(count2);
  $$result.css.add(css4);
  return `<button phx-click="increment" class="svelte-1s69lyn">${escape2(count2)}</button> <button class="svelte-1s69lyn">${escape2(clientOnlyCount)} </button>`;
});
var ExampleSvelteComponent_default = ExampleSvelteComponent;

// svelte/LiveViewSocket.svelte
var LiveViewSocket_exports = {};
__export(LiveViewSocket_exports, {
  default: () => LiveViewSocket_default
});

// svelte/VisibilityChangeTracker.svelte
var VisibilityChangeTracker_exports = {};
__export(VisibilityChangeTracker_exports, {
  default: () => VisibilityChangeTracker_default
});
var VisibilityChangeTracker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { live } = $$props;
  function pushVisibilityChangeEvent() {
    const sessionIdKey = "sessionId";
    let sessionId = sessionStorage.getItem(sessionIdKey);
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem(sessionIdKey, sessionId);
    }
    live?.pushEvent("visibility_change", {
      sessionId,
      visibilityState: document.visibilityState
    });
  }
  onMount2(() => {
    pushVisibilityChangeEvent();
  });
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  return ``;
});
var VisibilityChangeTracker_default = VisibilityChangeTracker;

// svelte/LiveViewSocket.svelte
var LiveViewSocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sessionCount, $$unsubscribe_sessionCount;
  let $serverDocument, $$unsubscribe_serverDocument;
  let $liveView, $$unsubscribe_liveView;
  validate_store(sessionCount, "sessionCount");
  $$unsubscribe_sessionCount = subscribe(sessionCount, (value) => $sessionCount = value);
  validate_store(serverDocument, "serverDocument");
  $$unsubscribe_serverDocument = subscribe(serverDocument, (value) => $serverDocument = value);
  validate_store(liveView, "liveView");
  $$unsubscribe_liveView = subscribe(liveView, (value) => $liveView = value);
  let { live } = $$props;
  set_store_value(liveView, $liveView = live, $liveView);
  let { server_document } = $$props;
  let { session_count } = $$props;
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  if ($$props.server_document === void 0 && $$bindings.server_document && server_document !== void 0)
    $$bindings.server_document(server_document);
  if ($$props.session_count === void 0 && $$bindings.session_count && session_count !== void 0)
    $$bindings.session_count(session_count);
  set_store_value(serverDocument, $serverDocument = server_document, $serverDocument);
  set_store_value(sessionCount, $sessionCount = session_count, $sessionCount);
  $$unsubscribe_sessionCount();
  $$unsubscribe_serverDocument();
  $$unsubscribe_liveView();
  return `${validate_component(VisibilityChangeTracker_default, "VisibilityChangeTracker").$$render($$result, { live }, {}, {})}`;
});
var LiveViewSocket_default = LiveViewSocket;

// svelte/Logo.svelte
var Logo_exports = {};
__export(Logo_exports, {
  default: () => Logo_default
});
var Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { live = void 0 } = $$props;
  live;
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  return `<div class="h-screen w-screen bg-accent flex justify-center items-center">${validate_component(check_default, "Check").$$render($$result, { color: "#2a323c", class: "h-96 w-96" }, {}, {})}</div>`;
});
var Logo_default = Logo;

// svelte/UndoButtons.svelte
var UndoButtons_exports = {};
__export(UndoButtons_exports, {
  default: () => UndoButtons_default
});
var UndoButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $liveView, $$unsubscribe_liveView;
  validate_store(liveView, "liveView");
  $$unsubscribe_liveView = subscribe(liveView, (value) => $liveView = value);
  let { undoManager } = $$props;
  let width;
  let undoCount = 0;
  let redoCount = 0;
  if ($$props.undoManager === void 0 && $$bindings.undoManager && undoManager !== void 0)
    $$bindings.undoManager(undoManager);
  $: {
    if (undoManager) {
      undoManager.on("stack-item-added", (event) => {
        console.log("add event:", event);
        undoCount = undoManager.undoStack.length;
        redoCount = undoManager.redoStack.length;
      });
      undoManager.on("stack-item-popped", (event) => {
        console.log("pop event:", event);
      });
    }
  }
  $$unsubscribe_liveView();
  return `<div${add_styles(merge_ssr_styles("scrollbar-gutter: stable;", { "margin-left": `-${width / 2}px` }))} class="flex gap-2 fixed left-1/2 bottom-0 z-40 m-2"><div class="indicator">${undoCount > 0 ? `<span class="indicator-item badge badge-sm">${escape2(undoCount)}</span>` : ``} <button class="my-1 btn btn-circle btn-neutral shadow-2xl focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " aria-label="Undo." title="Undo last action." ${undoCount === 0 ? "disabled" : ""}>${validate_component(undo_2_default, "Undo2").$$render($$result, { className: "w-6 h-6" }, {}, {})}</button></div> <div class="indicator">${redoCount > 0 ? `<span class="indicator-item badge badge-sm">${escape2(redoCount)}</span>` : ``} <button class="my-1 btn btn-circle btn-neutral focus:outline-none focus-visible:ring ring-accent ring-offset-1 ring-offset-base-100 " aria-label="Redo." title="Redo last action." ${redoCount === 0 ? "disabled" : ""}>${validate_component(redo_2_default, "Redo2").$$render($$result, { className: "w-6 h-6" }, {}, {})}</button></div></div>`;
});
var UndoButtons_default = UndoButtons;

// import-glob:../svelte/**/*.svelte
var modules = [AccountButton_exports, App_exports, AppInfo_exports, AppSkeleton_exports, Back_exports, ClickOutsideClassHandler_exports, ClientOnlyStateManagement_exports, ConfirmDeletionModal_exports, DataClearer_exports, DragHandle_exports, EditForm_exports, ErrorLayout_exports, ExampleSvelteComponent_exports, Header_exports, ItemsContainer_exports, Link_exports, LiveViewSocket_exports, Logo_exports, MoveTodoMenu_exports, NewItemForm_exports, OptionsMenu_exports, ScrollPositionRestorer_exports, ServiceWorker_exports, SessionsBadge_exports, ShareButton_exports, StateManagement_exports, StickyHeader_exports, SyncStatusBadge_exports, ThemeButton_exports, ThemeChoiceButton_exports, ThemeSyncManager_exports, Toast_exports, TodoApp_exports, TodoCheckList_exports, TodoListSelector_exports, UndoButtons_exports, UpdateAlert_exports, VisibilityChangeTracker_exports];
var __default = modules;
var filenames = ["../svelte/AccountButton.svelte", "../svelte/App.svelte", "../svelte/AppInfo.svelte", "../svelte/AppSkeleton.svelte", "../svelte/Back.svelte", "../svelte/ClickOutsideClassHandler.svelte", "../svelte/ClientOnlyStateManagement.svelte", "../svelte/ConfirmDeletionModal.svelte", "../svelte/DataClearer.svelte", "../svelte/DragHandle.svelte", "../svelte/EditForm.svelte", "../svelte/ErrorLayout.svelte", "../svelte/ExampleSvelteComponent.svelte", "../svelte/Header.svelte", "../svelte/ItemsContainer.svelte", "../svelte/Link.svelte", "../svelte/LiveViewSocket.svelte", "../svelte/Logo.svelte", "../svelte/MoveTodoMenu.svelte", "../svelte/NewItemForm.svelte", "../svelte/OptionsMenu.svelte", "../svelte/ScrollPositionRestorer.svelte", "../svelte/ServiceWorker.svelte", "../svelte/SessionsBadge.svelte", "../svelte/ShareButton.svelte", "../svelte/StateManagement.svelte", "../svelte/StickyHeader.svelte", "../svelte/SyncStatusBadge.svelte", "../svelte/ThemeButton.svelte", "../svelte/ThemeChoiceButton.svelte", "../svelte/ThemeSyncManager.svelte", "../svelte/Toast.svelte", "../svelte/TodoApp.svelte", "../svelte/TodoCheckList.svelte", "../svelte/TodoListSelector.svelte", "../svelte/UndoButtons.svelte", "../svelte/UpdateAlert.svelte", "../svelte/VisibilityChangeTracker.svelte"];

// ../deps/live_svelte/priv/static/live_svelte.esm.js
function normalizeComponents(components) {
  if (!Array.isArray(components.default) || !Array.isArray(components.filenames))
    return components;
  const normalized = {};
  for (const [index, module2] of components.default.entries()) {
    const Component = module2.default;
    const name = components.filenames[index].replace("../svelte/", "").replace(".svelte", "");
    normalized[name] = Component;
  }
  return normalized;
}
function getRender(components) {
  components = normalizeComponents(components);
  return function render2(name, props, slots) {
    const Component = components[name];
    const $$slots = Object.fromEntries(Object.entries(slots).map(([k, v]) => [k, () => v]));
    return Component.render(props, { $$slots });
  };
}

// js/server.js
var render = getRender(__exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  render
});
/*! Bundled license information:

lucide-svelte/dist/defaultAttributes.js:
  (**
   * @license lucide-svelte v0.365.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-svelte/dist/icons/index.js:
  (**
   * @license lucide-svelte v0.365.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/