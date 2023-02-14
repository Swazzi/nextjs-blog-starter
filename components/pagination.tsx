const Pagination = ({items, pageSize, currentPage, onPageChange}) => {
    const pagesCount = Math.ceil(items/pageSize);
    if (pagesCount === 1) return null;
    const pages = Array.from({length: pagesCount}, (_, i) => i+1);

    return (
        <div className="flex justify-center p-10 mx:auto">
            <nav aria-label="Page navigation">
                <ul className="flex list-style-none">
                    <li 
                        className="page-item">
                        <a className="paginationBtnDeactive hover:text-white cursor-default" 
                            onClick={() => onPageChange(newPage(-1,currentPage,pagesCount))} aria-label="Previous">«
                            </a>
                    </li>
                {pages.map((page) => (
                    <li
                        key={page}
                        >
                        <a className={`cursor-default ${page === currentPage ? 'paginationBtnActive text-white hover:text-black' : "paginationBtnDeactive text-black hover:text-white"}`} onClick={() => onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}
                    <li 
                        className="page-item">
                        <a className="paginationBtnDeactive hover:text-white cursor-default" onClick={() => onPageChange(newPage(1,currentPage,pagesCount))} aria-label="Next">»
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;

export const newPage = (updateValue, currentPage, pagesCount) => {
    if (currentPage > 1 && updateValue == -1) {
        return (currentPage - 1);
    }
    else if(currentPage < pagesCount && updateValue == 1){
        return (currentPage + 1);
    }
    else{
        return currentPage;
    }    
   };