let defaultCardSourceBody = `<body class="card card1 isMac nightMode night_mode macos-dark-mode fancy">
<div id="qa" style="opacity: 1;">
  <style>
    @import "style.css";
  </style>
  <div class="notes">
    这是什么意思?
  </div>
  <div class="question">
    <ruby>护士<rt>hù shi</rt></ruby>
    <ruby>每隔<rt>měi gé</rt></ruby>
    <ruby>几<rt>jǐ</rt></ruby>
    <ruby>小时<rt>xiǎo shí</rt></ruby>
    <ruby>就<rt>jiù</rt></ruby>
    <ruby>为<rt>wéi</rt></ruby>
    <ruby>他<rt>tā</rt></ruby>
    <ruby>量<rt>liàng</rt></ruby>
    <ruby>一次<rt>yī cì</rt></ruby>
    <ruby>体温<rt>tǐ wēn</rt></ruby>
  </div>

  <script src="color-pinyin-ruby.js"></script>
  <hr id="answer">
  <div class="answer">
    <div align="left">
      <p>the nurse checked his temperature every few hours </p>
    </div>
    <plecoentry c="00000000" d="504f3245" e="2aacbb00" x="12"></plecoentry>
    <br/>
  </div>
</div>
</body>`;

let defaultCardSourceTemplate = `<html dir="ltr" hascustombackground="false" lang="en"
  class="webkit chrome chrome108 mac mac10 mac10_15 js night-mode retina orientation_landscape maxw_1920">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="_anki/css/webview.css">
  <style>
    body {
      zoom: 1;
      background-color: var(--canvas);
    }

    html {
      font-family: "Helvetica";
    }

    button {
      --canvas: #fff;
      background: var(--canvas);
      border-radius: var(--border-radius);
      padding: 3px 12px;
      border: 0.5px solid var(--border);
      box-shadow: 0px 1px 3px var(--border-subtle);
      font-family: Helvetica
    }

    .night-mode button {
      --canvas: #606060;
      --fg: #eee;
    }

    :root {
      --canvas: #f5f5f5
    }

    :root[class*=night-mode] {
      --canvas: #2c2c2c
    }
  </style>
  <link rel="stylesheet" type="text/css" href="_anki/css/reviewer.css">
</head>

{{BODY}}

</html>`;

export let defaultCardSource = {
  template: defaultCardSourceTemplate,
  body: defaultCardSourceBody
};