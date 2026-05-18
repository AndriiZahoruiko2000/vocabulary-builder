export const SERVER_BASE_URL = "";

export const categories = [
  "verb",
  "participle",
  "noun",
  "adjective",
  "pronoun",
  "numerals",
  "adverb",
  "preposition",
  "conjunction",
  "phrasal verb",
  "functional phrase",
].map((item) => {
  return {
    title: item,
    value: item,
  };
});
