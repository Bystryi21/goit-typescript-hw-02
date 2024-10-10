import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtn {
  loadMore: () => void;
}

export default function LoadMoreBtn({ loadMore }: LoadMoreBtn) {
  return (
    <>
      <button type="button" onClick={loadMore} className={css.button}>
        Load More
      </button>
    </>
  );
}
