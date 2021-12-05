import { useEffect } from 'react';
import './paginate.css';

function Paginate({callback, currentPage}) {

    const goToNextPage = ()=>{
        callback( currentPage+=1 );
    }
    
    const goToPreviousPage = ()=>{
        callback( currentPage-=1 )
    }
    
    // Change page to the button pressed number Ex: 5 => go to page 5
    function changePage(e) {
        callback( currentPage = parseInt(e.target.textContent) );
    }
    
    let numOfPages = 500;
    let numOfBtns = 5;

    // Function return array of 5 numbers according to current page Ex: [1,2,3,4,5]
    const getPaginationBtns = () => {
        let start = Math.floor((currentPage - 1) / numOfBtns) * numOfBtns;
        return new Array(numOfBtns).fill().map((_, idx) => start + idx + 1);
    };
    
    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);
  
    return (
        <div>
  
          <div className="pagination">
            {/* Previous btn */}
            <button
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
              prev
            </button>
      
            {/* Show page numbers */}
            {getPaginationBtns().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${currentPage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </button>
            ))}
      
            {/* Next btn */}
            <button
                onClick={goToNextPage}
              className={`next ${currentPage === numOfPages ? 'disabled' : ''}`}
            >
              next
            </button>
          </div>
        </div>
    );
}

export default Paginate;