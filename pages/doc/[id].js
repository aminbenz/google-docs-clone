import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
//firebase
import { getDoc, doc as firebaseDoc } from '@firebase/firestore';
//components
import TinyEditor from '../../components/TinyEditor';
import db from '../../firebase';

const Doc = ({ session }) => {
  const router = useRouter();
  const { id } = router.query;
  const [doc, setDoc] = useState(null);
  const componentRef = useRef(null);
  const docRef = firebaseDoc(db, 'userDocs', session?.user.email, 'docs', id);

  useEffect(() => {
    if (!session) return;

    getDoc(docRef)
      .then((data) => {
        if (data.data()) {
          setDoc({ ...data.data() });
        } else {
          router.replace('/');
        }
      })
      .catch((err) => aler(err));
  }, [id, session]);

  return (
    <div>
      <Head>
        <title>{doc?.fileName} - Docs</title>
      </Head>
      <div>
        {/* <header className="flex justify-between items-center p-3">
          <span
            onClick={() => router.push('/')}
            className="cursor-pointer text-5xl text-[#2196f3] grid place-items-center"
          >
            <DescriptionIcon fontSize="inherit" />
          </span>

          <div className="flex-grow px-2">
            <h2 className="text-gray-600">{doc?.fileName}</h2>
            <div className="flex items-center text-sm space-x-2 -ml-1 h-8 text-gray-500 cursor-pointer">
              <p className="">File</p>
              <p className="">Edit</p>
              <p className="">View</p>
              <p className="">Insert</p>
              <p className="">Format</p>
              <ReactToPrint
                trigger={() => <p>Print</p>}
                content={() => componentRef.current}
              />
            </div>
          </div>

          <div className="idRight hidden md:inline-flex items-center">
            <Button>
              <PeopleIcon /> SHARE
            </Button>
            <img
              src={session?.user.image}
              className="rounded-full h-10 w-10 ml-2"
              alt=""
            />
          </div>
        </header> */}

        {/* <Editor /> */}
        {/* {doc && <TextEditor doc={doc} componentRef={componentRef} />} */}
        {doc && <TinyEditor doc={doc} componentRef={componentRef} />}
      </div>
    </div>
  );
};

export default Doc;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
