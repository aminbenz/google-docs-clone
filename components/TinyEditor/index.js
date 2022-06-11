//react
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
//next
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
//draft
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//firebase
import db from '../../firebase';
import {
  doc as firebaseDoc,
  updateDoc,
  serverTimestamp,
} from '@firebase/firestore';
import DescriptionIcon from '@material-ui/icons/Description';
import useEditorStyles from '../../hooks/useEditorStyles';

const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then((module) => module.Editor),
  {
    ssr: false,
  }
);

const useDarkMode = false;

export default function TinyEditor({ doc, componentRef }) {
  const [session] = useSession();
  const [editorState, setEditorState] = useState('');
  const router = useRouter();
  const { id } = router.query;
  //refs
  const editorRef = useRef(null);
  const decRef = firebaseDoc(db, 'userDocs', session?.user.email, 'docs', id);
  // styles
  const { useCssEditorStyles, setPageOffset, setLineMargin } =
    useEditorStyles();

  const onEditorStateChange = (editorState) => {
    updateDoc(
      decRef,
      {
        editorState: editorState,
        editTimestamp: serverTimestamp(),
      },
      {
        merge: true,
      }
    );
  };

  useEffect(() => {
    if (doc?.editorState) {
      setEditorState(doc?.editorState);
    }
    if (doc?.pageOffset) {
      setPageOffset(doc.pageOffset);
    }

    doc?.lineMargin && setLineMargin(doc.lineMargin);
  }, [doc, id]);

  // 0.7

  return (
    <div className="editor-wrapper">
      <span className="cursor-pointer text-5xl text-[#2196f3] flex ">
        <input
          className="ml-5 mt-2 outline-none border-none text-gray-700 text-lg"
          onChange={(e) =>
            updateDoc(decRef, {
              fileName: e.target.value,
            })
          }
          defaultValue={doc?.fileName}
        />
      </span>
      <Editor
        apiKey="ucwjaysa0tscqaae8c4eemsplchbuxoekio5rk0koyktfhlb"
        onEditorChange={(newValue, editor) => onEditorStateChange(newValue)}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={editorState}
        init={{
          selector: 'textarea#open-source-plugins',
          content_css: '../../styles/editor.css',
          plugins:
            'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
          editimage_cors_hosts: ['picsum.photos'],
          menubar: 'file edit view insert format tools table help',
          toolbar:
            'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify |  bullist numlist  | outdent indent | forecolor backcolor  | link image insertfile media print | fullscreen  preview anchor save  template codesample     | pagebreak | removeformat charmap emoticons | ltr rtl',
          toolbar_sticky: true,
          autosave_ask_before_unload: true,
          autosave_interval: '30s',
          autosave_prefix: '{path}{query}-{id}-',
          autosave_restore_when_empty: false,
          autosave_retention: '2m',
          image_advtab: true,
          link_list: [
            { title: 'My page 1', value: 'https://www.tiny.cloud' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' },
          ],
          image_list: [
            { title: 'My page 1', value: 'https://www.tiny.cloud' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' },
          ],
          image_class_list: [
            { title: 'None', value: '' },
            { title: 'Some class', value: 'class-name' },
          ],
          importcss_append: true,
          file_picker_callback: (callback, value, meta) => {
            /* Provide file and text for the link dialog */
            if (meta.filetype === 'file') {
              callback('https://www.google.com/logos/google.jpg', {
                text: 'My text',
              });
            }

            /* Provide image and alt text for the image dialog */
            if (meta.filetype === 'image') {
              callback('https://www.google.com/logos/google.jpg', {
                alt: 'My alt text',
              });
            }

            /* Provide alternative source and posted for the media dialog */
            if (meta.filetype === 'media') {
              callback('movie.mp4', {
                source2: 'alt.ogg',
                poster: 'https://www.google.com/logos/google.jpg',
              });
            }
          },
          templates: [
            {
              title: 'New Table',
              description: 'creates a new table',
              content:
                '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
            },
            {
              title: 'Starting my story',
              description: 'A cure for writers block',
              content: 'Once upon a time...',
            },
            {
              title: 'New list with dates',
              description: 'New List with dates',
              content:
                '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
            },
          ],
          template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
          template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
          height: '1300px',
          image_caption: true,
          quickbars_selection_toolbar:
            'bold italic | quicklink  | alignleft aligncenter alignright',
          // 'bold italic | quicklink h2 h3 blockquote quickimage quicktable ',
          noneditable_class: 'mceNonEditable',
          toolbar_mode: 'sliding',
          contextmenu: 'link image table',
          skin: useDarkMode ? 'oxide-dark' : 'oxide',
          content_css: useDarkMode ? 'dark' : 'default',
          content_style: useCssEditorStyles,
        }}
      />
    </div>
  );
}
