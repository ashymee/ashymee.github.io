const useDateHelper = () => {
  const converDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });

  return {
    converDate,
  };
};

export default useDateHelper;
