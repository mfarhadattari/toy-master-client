import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    if (title === "Home") {
      window.document.title = "Toy Master - An Education Toys and Kits Collection";
      return;
    }
    if (title === "Error") {
      window.document.title = `${title} - No Found`;
      return;
    }
    window.document.title = `${title} - Toy Master`;
  }, [title]);
};

export default useSetTitle;
