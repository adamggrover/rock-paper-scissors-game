*, :before, :after {
  box-sizing: border-box;
  border: 0 solid;
}

:before, :after {
  --tw-content: "";
}

html {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.5;
}

body {
  line-height: inherit;
  margin: 0;
}

hr {
  color: inherit;
  border-top-width: 1px;
  height: 0;
}

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

b, strong {
  font-weight: bolder;
}

code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub, sup {
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0;
  position: relative;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button, input, optgroup, select, textarea {
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button, select {
  text-transform: none;
}

button, [type="button"], [type="reset"], [type="submit"] {
  -webkit-appearance: button;
  background-color: #0000;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button {
  height: auto;
}

::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol, ul, menu {
  margin: 0;
  padding: 0;
  list-style: none;
}

dialog {
  padding: 0;
}

textarea {
  resize: vertical;
}

input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button, [role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img, svg, video, canvas, audio, iframe, embed, object {
  vertical-align: middle;
  display: block;
}

img, video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
}

*, :before, :after, ::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #3b82f680;
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
}

.container {
  width: 100%;
}

@media (width >= 640px) {
  .container {
    max-width: 640px;
  }
}

@media (width >= 768px) {
  .container {
    max-width: 768px;
  }
}

@media (width >= 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (width >= 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (width >= 1536px) {
  .container {
    max-width: 1536px;
  }
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mt-16 {
  margin-top: 4rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.block {
  display: block;
}

.flex {
  display: flex;
}

.h-24 {
  height: 6rem;
}

.h-28 {
  height: 7rem;
}

.h-full {
  height: 100%;
}

.min-h-screen {
  min-height: 100vh;
}

.flex-grow {
  flex-grow: 1;
}

.flex-col {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.justify-stretch {
  justify-content: stretch;
}

.gap-16 {
  gap: 4rem;
}

.gap-2 {
  gap: .5rem;
}

.gap-32 {
  gap: 8rem;
}

.bg-primary {
  --tw-bg-opacity: 1;
  background-color: rgb(230 215 14 / var(--tw-bg-opacity));
}

.bg-secondary {
  --tw-bg-opacity: 1;
  background-color: rgb(126 91 239 / var(--tw-bg-opacity));
}

.p-8 {
  padding: 2rem;
}

.text-center {
  text-align: center;
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-bold {
  font-weight: 700;
}

.text-primary {
  --tw-text-opacity: 1;
  color: rgb(230 215 14 / var(--tw-text-opacity));
}

.modal {
  z-index: 1;
  background-color: #0006;
  width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
}

.modal-content {
  background-color: #fefefe;
  border: 1px solid #888;
  width: 80%;
  margin: 15% auto;
  padding: 20px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover, .close:focus {
  color: #000;
  cursor: pointer;
  text-decoration: none;
}

/*# sourceMappingURL=index.61d3354a.css.map */
