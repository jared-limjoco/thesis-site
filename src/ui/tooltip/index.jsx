import React, { useState, useRef, useEffect } from 'react';

export default function Tooltip({ children }) {
  const [open, setstate] = useState(false);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
         * Alert if clicked on outside of element
         */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setstate(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <button type="button" ref={wrapperRef} onClick={() => { setstate(true); }} className="relative inline-block group mr-1">
      <div className="relative flex flex-col items-center group">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        <div className={`absolute bottom-0 flex flex-col items-center mb-6 group-hover:flex ${open ? 'flex' : 'hidden'}`}>
          <span className="relative z-10 p-2 text-xs w-28 leading-none text-white whitespace-no-wrap bg-black shadow-lg">{children}</span>
          <div className="w-3 h-3 -mt-2 transform rotate-45 bg-black" />
        </div>
      </div>
    </button>
  );
}
