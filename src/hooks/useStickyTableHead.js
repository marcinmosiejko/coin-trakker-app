import { useState, useEffect, useRef, useCallback } from 'react';

const useStickyTableHead = (defaultSticky = false) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const tableRef = useRef(null);
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

    const handleScroll = () => {
      const tableDomRect = tableRef.current.getBoundingClientRect();
      toggleSticky(tableDomRect);
      setLeftPosition(tableDomRect.x);
    };
    // Scrolls on entire page for rendering / removing sticky header
    window.addEventListener('scroll', handleScroll);
    // Horizontal position adjustment when window resize
    window.addEventListener('resize', handleScroll);
    // Horizontal position adjustment when table overflows table container and table container is being scrolled
    tableContainer.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      tableContainer.addEventListener('scroll', handleScroll);
    };
  }, [toggleSticky]);

  return { tableRef, tableContainerRef, isSticky, leftPosition };
};

export default useStickyTableHead;
