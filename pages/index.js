import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Login from '../components/Login';
import { getSession } from 'next-auth/client';
import { Button, IconButton } from '@material-ui/core';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Image from 'next/image';
import db from '../firebase';
import {
  getDocs,
  getDoc,
  collection,
  query,
  orderBy,
  doc,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from '@firebase/firestore';
import DocumentRow from '../components/DocumentRow';
import CreateDocModal from '../components/CreateDocModal';
import Header from '../components/Header';

export default function Home({ session }) {
  //state
  const [showModal, setShowModal] = useState(false);
  const [docs, setDocs] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [docId, setDocId] = useState(null);
  //refs
  const docNameFieldRef = useRef(null);
  const router = useRouter();

  if (!session) return <Login />;

  const templateCollectionRef = collection(db, 'templates');
  const userDocs = collection(db, 'userDocs', session?.user?.email, 'docs');
  const q = query(userDocs, orderBy('timestamp', 'desc'));

  // get Templates
  const getTemplates = async () => {
    const data = await getDocs(templateCollectionRef);
    const templates = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setTemplates(templates);
  };

  useEffect(() => {
    getTemplates();
  }, []);

  const setSelectedTemplate = async (id) => {
    try {
      const choosenTemplate = await getDoc(doc(db, 'templates', id));
      await addDoc(userDocs, {
        ...choosenTemplate.data(),
        timestamp: serverTimestamp(),
      });
      setDocId(id);
    } catch (error) {
      console.log(error);
    }
  };

  // real time collection
  useEffect(() => {
    const unsub = onSnapshot(q, (snapshot) => {
      setDocs(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (docId) {
      // router.push('/doc/' + docId, undefined, { shallow: true });
      // window.location.reload();
      // window.location.replace(`/doc/${docId}`);
    }
  }, [docId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = docNameFieldRef.current.value;

    if (inputValue && inputValue.length > 3) {
      addDoc(userDocs, {
        fileName: inputValue,
        tumbnail: '',
        timestamp: serverTimestamp(),
      })
        .then(() => {
          setShowModal(false);
          e.target.reset();
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <div className="">
      <Head>
        <title>Docs | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateDocModal
        docNameFieldRef={docNameFieldRef}
        handleSubmit={handleSubmit}
        setShowModal={setShowModal}
        showModal={showModal}
      />

      <section className="bg-[#F0F3F4] py-5 text-gray-600 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-700">Start a new document</p>

            <div className="newDoc-btns flex items-center space-x-2">
              <Button>
                Template gallery
                <UnfoldMoreIcon />
              </Button>
              <div className="border-l h-7 bg-gray-600 border-gray-300"></div>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className="flex gap-5 overflow-hidden">
            <div className="" style={{ marginRight: 'auto' }}>
              <div
                onClick={() => setShowModal(true)}
                className="relative h-52 w-40 border cursor-pointer hover:border-blue-700 rounded-md overflow-hidden"
              >
                <Image
                  src={
                    'https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png'
                  }
                  layout="fill"
                />
              </div>
              <p className="ml-2 mt-2 text-sm">Blank</p>
            </div>
            {templates.map(({ fileName, thumbnail, id }) => (
              <div key={id} onClick={() => setSelectedTemplate(id)}>
                <div>
                  <div className="relative h-52 w-40 border cursor-pointer hover:border-blue-700 rounded-md overflow-hidden">
                    {thumbnail ? (
                      <Image
                        objectPosition="top center"
                        src={thumbnail}
                        width={'210mm'}
                        height={'297mm'}
                      />
                    ) : (
                      <FolderOpenIcon />
                    )}
                  </div>
                  <p className="ml-2 mt-2 text-sm">{fileName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 text-gray-600 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between pb-5 text-sm">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date created</p>
            <FolderOpenIcon />
          </div>

          {docs?.map((doc) => (
            <DocumentRow key={doc.id} doc={doc} session={session} db={db} />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
