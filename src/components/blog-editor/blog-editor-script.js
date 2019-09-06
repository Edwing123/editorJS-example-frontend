import EditorJS from '@editorjs/editorjs';
import editorSettings from './blog-editor-settings';
import axios from 'axios';
import swal from 'sweetalert';


export default {
  name: 'blog-editor',

  data() {
    return {
      editorSettings,
    };
  },

  methods: {
    createEditor() {
      window.editor = new EditorJS(this.editorSettings);
    },

    saveEditorData() {
      window.editor.save()
        .then( data => {
          if (data.blocks.length === 0) alert('Write something');
          else {
            const postName = window.prompt('Enter post name', '');
            data.postName = postName;
            if (postName) this.submitPost(data);
            else alert('A name is required');
          }
        })
        .catch( errors => {
          console.log(errors);
        });
    },

    async submitPost(post) {
      const endpoint = 'http://localhost:4000/upload-post/';
      const response = await axios.post(endpoint, post)
        .catch( errors => {
          console.log(errors.response);
        });
      swal({
        title: 'Notification',
        icon: 'success',
        text: response.data.result.message
      });
      if (response.data.ok) window.editor.clear();
    }
  },

  mounted() {
    this.createEditor();
  }
};