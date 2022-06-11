import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import { deleteDoc, doc as firebaseDoc } from '@firebase/firestore';
import Alert from './Alert';

const DocumentRow = ({ doc, session, db }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  //refs
  const cancelButtonRef = useRef(null);
  const docRef = firebaseDoc(
    db,
    'userDocs',
    session?.user.email,
    'docs',
    doc.id
  );

  // delete UserDoc
  const handleDelete = () => {
    deleteDoc(docRef);
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const goToDoc = (event) => {
    event.stopPropagation();
    router.push(`/doc/${doc.id}`);
  };

  return (
    <div className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer text-sm border mb-2">
      <DescriptionIcon />
      <p
        onClick={(event) => goToDoc(event)}
        className="flex-grow ml-5 w-10 mr-10 truncate"
      >
        {doc?.fileName}
      </p>
      <p className="text-sm mr-6">
        {doc?.timestamp?.toDate().toLocaleDateString()}
      </p>
      <div className="right-section">
        <IconButton>
          <MoreVertIcon onClick={handleOpenModal} />
        </IconButton>
        <Alert
          open={open}
          setOpen={setOpen}
          cancelButtonRef={cancelButtonRef}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default DocumentRow;
