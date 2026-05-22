"use client";

import { UserWord } from "@/types/categories";
import css from "./WordItem.module.css";
import Modal from "../Modal/Modal";
import EditForm from "../EditForm/EditForm";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWord } from "@/services/words";

interface WordItemProps {
  word: UserWord;
}

const WordItem = ({ word }: WordItemProps) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const openPopUp = () => {
    setIsShowPopUp(true);
  };

  const closePopUp = () => {
    setIsShowPopUp(false);
  };

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: ["deleteWord"],
    mutationFn: () => deleteWord(word._id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getWordsOwn"],
      });
    },
  });

  return (
    <>
      <tr className={css["table-row"]}>
        <td className={css["table-row-item"]}>{word.en}</td>
        <td className={css["table-row-item"]}>{word.ua}</td>
        <td className={css["table-row-item"]}>{word.category}</td>
        <td className={css["table-row-item"]}>{word.progress}</td>
        <td className={css["table-row-item"]}>
          <div className={css["pop-up-wrapper"]}>
            <button onClick={openPopUp} className={css["open-pop-up-menu"]}>
              ...
            </button>
            {isShowPopUp && (
              <div className={css["pop-up-menu"]}>
                <p
                  className={css["pop-up-item"]}
                  onClick={() => {
                    openModal();
                    closePopUp();
                  }}
                >
                  Edit
                </p>
                <p
                  className={css["pop-up-item"]}
                  onClick={() => {
                    deleteMutation.mutate();
                    closePopUp();
                  }}
                >
                  Delete
                </p>
              </div>
            )}
          </div>
        </td>
      </tr>
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <EditForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default WordItem;
