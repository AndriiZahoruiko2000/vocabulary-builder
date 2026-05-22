"use client";
import { Word } from "@/types/categories";
import css from "./RecommendWordItem.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addWord } from "@/services/words";

interface RecommendWordItemProps {
  word: Word;
}

const RecommendWordItem = ({ word }: RecommendWordItemProps) => {
  const queryClient = useQueryClient();

  const addWordMutation = useMutation({
    mutationKey: ["addWord"],
    mutationFn: () => addWord(word._id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getWords"],
      });
    },
  });

  return (
    <>
      <tr className={css["recommend-row"]}>
        <td className={css["recommend-item"]}>{word.en}</td>
        <td className={css["recommend-item"]}>{word.ua}</td>
        <td className={css["recommend-item"]}>{word.category}</td>
        <td className={css["recommend-item"]}>
          <button
            className={css["add-btn"]}
            onClickCapture={() => {
              addWordMutation.mutate();
            }}
          >
            Add to dictionary
          </button>
        </td>
      </tr>
    </>
  );
};

export default RecommendWordItem;
