import Header from '@editorjs/header';
import List from '@editorjs/list';
import Delimiter from '@editorjs/delimiter';
import Checklist from '@editorjs/checklist';
import Image from '@editorjs/image';


export default {
  holder: 'editor__holder',
  autofocus: true,
  placeholder: 'It\'s time to write something',

  tools: {
    header: {
      class: Header,
      shortcut: 'CTRL+SHIFT+H',
      inlineToolbar: ['bold', 'italic'],
      config: {
        placeholder: 'TITLE',
      }
    },
    list: {
      class: List,
      shortcut: 'CTRL+SHIFT+L',
      inlineToolbar: true
    },
    delimiter: {
      class: Delimiter,
      shortcut: 'CTRL+SHIFT+D'
    },
    checklist: {
      class: Checklist,
      shortcut: 'CTRL+SHIFT+C',
      inlineToolbar: true,
    },
    image: {
      class: Image,
      shortcut: 'CTRL+SHIFT+I',
      inlineToolbar: true,
      config: {
        endpoints: {
          byFile: 'http://localhost:4000/upload-image/',
          // byUrl: 'to-fetch-from-backend'
        }
      }
    },
  },
  data: {}
};