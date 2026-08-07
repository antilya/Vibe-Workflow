# Workflow builder appearance boundary

The hosted Studio applies its appearance adapter in
`packages/studio/src/components/WorkflowUI.jsx`. The adapter is scoped by
`.og-workflow-builder` and only activates inside elements marked with
`data-og-workflow-chrome`.

The source Tailwind classes remain unchanged as standalone fallbacks. The
adapter overrides color channels with `--og-*` variables while preserving the
source alpha. It changes `--tw-shadow-color` only; shadow geometry remains owned
by the original Tailwind utility.

The package Tailwind build also consumes the shared font-size and line-height
registry. All legacy arbitrary numeric font sizes were mapped to exact named
steps, and the complete `src/` tree is guarded against typography regressions.

## Adapted product chrome

- restore/loading overlay;
- top workflow toolbar and its settings menu;
- left tool rail and node-picker menus opened from it, an edge, or a context menu;
- properties panel, including its neutral fields and dropdown surfaces;
- save-workflow and edit-category dialogs;
- actions explicitly marked as contrast, accent, or accent-selection controls.

The `data-og-workflow-chrome` and `data-og-workflow-tone` attributes are CSS
metadata only. They do not add DOM elements or participate in component logic.

## Intentional exceptions and remaining debt

- ReactFlow canvas, grid, edges, connection previews, handles, and their
  blue/green/orange/yellow type identity remain exact functional colors.
- Node bodies and generated content/media remain exact in `TextNode.jsx`,
  `ImageNode.jsx`, `VideoNode.jsx`, `AudioNode.jsx`, `ApiNode.jsx`,
  `PromptConcate.jsx`, `VideoCombiner.jsx`, and `UploadNode.jsx`.
- Media players remain exact in `AudioPlayer.jsx`, `VideoPlayer.jsx`, and the
  media portions of `RenderField.jsx`.
- Node-local overlays remain exact in `NodeOptionsMenu.jsx` and
  `NodeSendButton.jsx`.
- The empty-canvas preset chooser in `NodeFlow.jsx` remains content chrome and
  is deliberately outside the product-chrome adapter. Its intro carries a
  light-host foreground hook because its translucent black surface otherwise
  erases small copy over a light canvas.
- `ChatWidget.jsx` remains on its own blue/purple assistant palette and is not
  marked as workflow product chrome. It and the other fixed-dark media/node
  surfaces expose a metadata hook that raises only low functional foregrounds
  when embedded in a light host; their dark and standalone palettes stay exact.
- Provider/model/status/danger colors are not globally remapped. Only controls
  carrying an explicit `data-og-workflow-tone` opt in to host accent colors.
- `custom-scrollbar-thin` has no local definition in this package; its geometry
  and any host-provided color remain untouched.
- Standalone consumers of `workflow-builder` keep the package's legacy palette
  unless their host supplies an equivalent scoped adapter.
