import css from "./NotePreview.module.css";
import { fetchNoteById } from "@/lib/api";
import BackBtn from "./NotePreview.client";
import Modal from "@/components/Modal/Modal";
import { createPortal } from "react-dom";

type Props = {
  params: Promise<{ id: string; onClose: () => void }>;
};

const PreviewPage = async ({ params }: Props) => {
  const { id, onClose } = await params;
  const note = await fetchNoteById(id);

  return createPortal(
    <Modal onClose={onClose} aria-label="Note Preview">
      <BackBtn>Close</BackBtn>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{note.createdAt}</p>
        </div>
      </div>
    </Modal>
  );
};

export default PreviewPage;
