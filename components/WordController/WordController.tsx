"use client";

import Link from "next/link";
import css from "./WordController.module.css";
import { useQuery } from "@tanstack/react-query";
import { getWordsStatistics } from "@/services/words";
import { useState } from "react";
import Modal from "../Modal/Modal";
import CreateFormWord from "../CreateFormWord/CreateFormWord";

const WordController = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const wordsStatisticsQuery = useQuery({
    queryKey: ["getWordsStatistics"],
    queryFn: () => getWordsStatistics(),
  });

  const statistic = wordsStatisticsQuery.data?.totalCount;

  return (
    <div className={css["word-controller"]}>
      <p className={css["statistic"]}>
        To study: <span>{statistic}</span>
      </p>
      <button className={css["add-word-box"]} onClick={openModal}>
        <span className={css["add-word-text"]}>Add word</span>
        <span>+</span>
      </button>
      <Link href={"/"} className={css["word-train-link-box"]}>
        <span className={css["word-train-text"]}>Train oneself</span>
        <span>{"->"}</span>
      </Link>
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <CreateFormWord closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default WordController;
