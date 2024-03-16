const LoadMoreBtn = ({ onLoadMore, hasMoreImages }) => {
  if (!hasMoreImages) {
    return null;
  }

  return (
    <button onClick={onLoadMore} style={{ marginTop: "20px" }}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
