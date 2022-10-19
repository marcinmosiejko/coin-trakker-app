import { useState, useEffect, useRef, useCallback } from 'react';

// Source: https://blog.logrocket.com/using-react-hooks-to-create-sticky-headers/

const useStickyTableHead = ({ tableRef, defaultSticky = false }) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const tableContainerRef = useRef(null);
  const [leftPosition, setLeftPosition] = useState(null);

  const toggleSticky = useCallback(
    ({ top, bottom }) => {
      if (top <= 0 && bottom > 2 * 40) {
        !isSticky && setIsSticky(true);
      } else {
        isSticky && setIsSticky(false);
      }
    },
    [isSticky]
  );

  useEffect(() => {
    const tableContainer = tableContainerRef.current;

    const handlePageScroll = () => {
      const tableDomRect = tableRef.current.getBoundingClientRect();
      toggleSticky(tableDomRect);
      setLeftPosition(tableDomRect.x);
    };

    const handleTableScrollAndWindowResize = () => {
      const tableDomRect = tableRef.current.getBoundingClientRect();
      setLeftPosition(tableDomRect.x);
    };

    // Scrolls on entire page for rendering / removing sticky header
    window.addEventListener('scroll', handlePageScroll);
    // Horizontal position adjustment when table overflows table container and table container is being scrolled
    tableContainer.addEventListener('scroll', handleTableScrollAndWindowResize);
    // Horizontal position adjustment when window resize
    window.addEventListener('resize', handleTableScrollAndWindowResize);

    return () => {
      window.removeEventListener('scroll', handlePageScroll);
      tableContainer.addEventListener(
        'scroll',
        handleTableScrollAndWindowResize
      );
      window.removeEventListener('resize', handleTableScrollAndWindowResize);
    };
  }, [toggleSticky, tableRef]);

  return { tableContainerRef, isSticky, leftPosition };
};

export default useStickyTableHead;
