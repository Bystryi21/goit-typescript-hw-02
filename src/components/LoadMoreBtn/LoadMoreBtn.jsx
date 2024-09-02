import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ loadMore }) {
  return (
    <>
      <button type="button" onClick={loadMore} className={css.button}>
        Load More
      </button>
    </>
  );
}
