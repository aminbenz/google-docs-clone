//next
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
//react
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
//draft
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import useEditorStyles from '../hooks/useEditorStyles';
import draftToHtmlPuri from 'draftjs-to-html';
//firebase
import db from '../firebase';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
);

const TextEditor = ({ doc, componentRef }) => {
  const [session] = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    // console.log(draftToHtmlPuri(convertToRaw(editorState.getCurrentContent())));
    // const style

    db.collection('userDocs')
      .doc(session?.user.email)
      .collection('docs')
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        {
          merge: true,
        }
      );
  };

  useEffect(() => {
    if (doc?.editorState) {
      setEditorState(
        EditorState.createWithContent(convertFromRaw(doc?.editorState))
      );
    }
  }, [doc]);

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-1 mx-auto flex flex-col gap-y-20">
      <Editor
        editorState={editorState}
        editorStyle={useEditorStyles()}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto h-20"
        editorClassName={`bg-white shadow-lg  mx-auto border`}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default TextEditor;
