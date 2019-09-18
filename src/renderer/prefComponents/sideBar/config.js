import GeneralIcon from '@/assets/icons/pref_general.svg'
import EditorIcon from '@/assets/icons/pref_editor.svg'
import MarkdownIcon from '@/assets/icons/pref_markdown.svg'
import ThemeIcon from '@/assets/icons/pref_theme.svg'
import ImageIcon from '@/assets/icons/pref_image.svg'
import ImageUploaderIcon from '@/assets/icons/pref_image_uploader.svg'

const preferences = {
  autoSave: {
    description: 'General--Automatically save the content being edited.',
    type: 'boolean'
  },
  autoSaveDelay: {
    description: 'General--The time in ms after a change that the file is saved.',
    type: 'number',
    minimum: 1000
  },
  titleBarStyle: {
    description: 'General--The title bar style (Windows and Linux system only).',
    enum: [
      'custom',
      'native'
    ]
  },
  openFilesInNewWindow: {
    description: 'General--Open files in a new window.',
    type: 'boolean'
  },
  openFolderInNewWindow: {
    description: 'General--Open folder via menu in a new window.',
    type: 'boolean'
  },
  hideScrollbar: {
    description: 'General--Whether to hide scrollbars.',
    type: 'boolean',
    default: false
  },
  aidou: {
    description: 'General--Enable aidou',
    type: 'boolean'
  },
  fileSortBy: {
    description: 'General--Sort files in opened folder by created time, modified time and title.',
    enum: [
      'modified',
      'created',
      'title'
    ]
  },
  startUpAction: {
    description: 'General--The action after Mark Text startup, open the last edited content, open the specified folder or blank page',
    enum: [
      'folder',
      'lastState',
      'blank'
    ]
  },
  defaultDirectoryToOpen: {
    description: 'General--The default directory that should be opened on startup when startUp=folder.',
    type: 'string'
  },
  language: {
    description: 'General--The language Mark Text use.',
    type: 'string'
  },
  editorFontFamily: {
    description: 'Editor--editor font family',
    enum: [
      'Open Sans',
      'Clear Sans',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif'
    ]
  },
  fontSize: {
    description: 'Editor--Font size in pixels',
    type: 'number',
    maximum: 32,
    minimum: 12,
    default: 16
  },
  lineHeight: {
    description: 'Editor--Line Height',
    type: 'number',
    maximum: 2,
    minimum: 1.2,
    default: 1.6
  },
  editorLineWidth: {
    description: 'Editor--Defines the maximum editor area width. An empty string or suffixes of ch (characters), px (pixels) or % (percentage) are allowed.',
    type: 'string',
    pattern: '^(?:$|[0-9]+(?:ch|px|%)$)'
  },
  codeFontSize: {
    description: 'Editor--Font size in code Block, the range is 12 ~ 18',
    type: 'number',
    maximum: 28,
    minimum: 12,
    default: 14
  },
  codeFontFamily: {
    description: 'Editor--Font family used in code block',
    enum: [
      'DejaVu Sans Mono',
      'Source Code Pro',
      'Droid Sans Mono',
      'monospace'
    ]
  },

  autoPairBracket: {
    description: 'Editor--Automatically brackets when editing',
    type: 'boolean'
  },
  autoPairMarkdownSyntax: {
    description: 'Editor--Autocomplete markdown syntax',
    type: 'boolean'
  },
  autoPairQuote: {
    description: 'Editor--Automatic completion of quotes',
    type: 'boolean'
  },
  endOfLine: {
    description: 'Editor--The newline character used at the end of each line. The default value is default, which will be selected according to your system intelligence.',
    enum: [
      'default',
      'lf',
      'crlf'
    ]
  },
  textDirection: {
    description: 'Editor--The writing text direction',
    enum: [
      'ltr',
      'rtl'
    ]
  },
  hideQuickInsertHint: {
    description: 'Editor--Hide hint for quickly creating paragraphs',
    type: 'boolean'
  },
  preferLooseListItem: {
    description: 'Markdown--The preferred list type',
    type: 'boolean'
  },
  bulletListMarker: {
    description: 'Markdown--The marker used in bullet list',
    enum: [
      '-',
      '*',
      '+'
    ]
  },
  orderListDelimiter: {
    description: 'Markdown--The dilimiter used in order list',
    enum: [
      '.',
      ')'
    ]
  },
  preferHeadingStyle: {
    description: 'Markdown--The preferred heading style in Mark Text',
    enum: [
      'atx',
      'setext'
    ]
  },
  tabSize: {
    description: 'Markdown--Replace the tab with x spaces',
    type: 'number'
  },
  listIndentation: {
    description: 'Markdown--Select the indent of list',
    enum: [
      'dfm',
      'tab',
      1,
      2,
      3,
      4
    ]
  },
  theme: {
    description: 'Theme--Select the theme used in Mark Text',
    type: 'string'
  },
  imageInsertAction: {
    description: 'Image--The default behavior after insert image from local folder',
    enum: [
      'upload',
      'folder',
      'path'
    ]
  },
  sideBarVisibility: {
    description: 'View--Whether the side bar is visible.',
    type: 'boolean'
  },
  tabBarVisibility: {
    description: 'View--Whether the tabs are shown.',
    type: 'boolean'
  },
  sourceCodeModeEnabled: {
    description: 'View--Whether the source-code mode is enabled by default.',
    type: 'boolean'
  },
  searchExclusions: {
    description: 'Searcher--List of glob patterns to exclude from search.',
    type: 'array',
    items: {
      type: 'string'
    }
  },
  searchMaxFileSize: {
    description: 'Searcher--The maximal file size (<maxFileSize><suffix>). Suffixes of K, M or G are allowed if not suffix is given the number is treated as bytes.',
    type: 'string',
    pattern: '^(?:$|[0-9]+(?:K|M|G)?$)'
  },
  searchIncludeHidden: {
    description: 'Searcher--Whether to search in hidden files and directories.',
    type: 'boolean'
  },
  searchNoIgnore: {
    description: 'Searcher--Whether to ignore ignore files like .gitignore.',
    type: 'boolean'
  },
  searchFollowSymlinks: {
    description: 'Searcher--Whether symlinks should be followed.',
    type: 'boolean'
  },
  watcherUsePolling: {
    description: 'Watcher--Whether to use polling. Polling may leads to high CPU utilization but is necessary to watch files over a network.',
    type: 'boolean'
  }
}

export const category = [{
  name: 'General',
  label: 'general',
  icon: GeneralIcon,
  path: '/preference/general'
}, {
  name: 'Editor',
  label: 'editor',
  icon: EditorIcon,
  path: '/preference/editor'
}, {
  name: 'Markdown',
  label: 'markdown',
  icon: MarkdownIcon,
  path: '/preference/markdown'
}, {
  name: 'Theme',
  label: 'theme',
  icon: ThemeIcon,
  path: '/preference/theme'
}, {
  name: 'Image',
  label: 'image',
  icon: ImageIcon,
  path: '/preference/image'
}, {
  name: 'Image Uploader',
  label: 'imageUploader',
  icon: ImageUploaderIcon,
  path: '/preference/imageUploader'
}]

export const searchContent = Object.keys(preferences).map(k => {
  const { description, enum: emums } = preferences[k]
  let [category, preference] = description.split('--')
  if (Array.isArray(emums)) {
    preference += ` optional values: ${emums.join(', ')}`
  }
  return {
    category,
    preference
  }
})
  .filter(({ category: ca }) => category.some(c => c.label === ca.toLowerCase()))
