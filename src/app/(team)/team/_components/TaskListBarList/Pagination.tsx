interface PaginationProps {
  page: number;
  totalPage: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

const Pagination = ({
  page,
  totalPage,
  onPrev,
  onNext,
  className,
}: PaginationProps) => {
  return (
    <div className={`flex items-center justify-end gap-2 ${className}`}>
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="rounded disabled:opacity-30"
      >
        &lt;
      </button>
      <span className="text-md-regular">
        {page} / {totalPage}
      </span>
      <button
        onClick={onNext}
        disabled={page === totalPage}
        className="rounded disabled:opacity-30"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
