export default {
  "space": [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  "fonts": {
    "body": "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
    "heading": "inherit",
    "monospace": "Menlo, monospace"
  },
  "fontSizes": [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  "fontWeights": {
    "body": 400,
    "heading": 700,
    "bold": 700
  },
  "lineHeights": {
    "body": 1.5,
    "heading": 1.125
  },
  "colors": {
    "text": "#fff",
    "background": "#000",
    "primary": "yellow",
    "secondary": "#30c",
    "muted": "#eee",
    "modes": {
      "light": {
        "background": "rgb(1,2,200)",
      },
    }
  },
  "styles": {
    "root": {
      "fontFamily": "body",
      "lineHeight": "body",
      "fontWeight": "body",
    },
    "h1": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 90
    },
    "h2": {
      "color": "primary",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 75
    },
    "h3": {
      "color": "primary",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 60
    },
    "p": {
      "color": "text",
      "fontFamily": "body",
      "fontWeight": "body",
      "lineHeight": "body",
      "fontSize": 40,
      "maxWidth": '70vw'
    },
    "a": {
      "color": "primary"
    },
    "pre": {
      "fontFamily": "monospace",
      "overflowX": "auto",
      "code": {
        "color": "inherit"
      }
    },
    "code": {
      "fontFamily": "monospace",
      "fontSize": "inherit"
    },
    "table": {
      "width": "100%",
      "borderCollapse": "separate",
      "borderSpacing": 0
    },
    "th": {
      "textAlign": "left",
      "borderBottomStyle": "solid"
    },
    "td": {
      "textAlign": "left",
      "borderBottomStyle": "solid"
    },
    "img": {
      "maxWidth": "100%"
    },
    "li": {
      "fontSize": 30,
    }
  }
}