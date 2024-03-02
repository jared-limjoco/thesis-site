import { useState } from 'react';

import styles from './styles.module.css';

export default function HelpItem({ children, heading }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="border-b">
      <div className="border-l-2 border-transparent">
        <button type="button" onClick={() => { setOpen(!open); }} className="transition-all ease-in-out flex w-full active:outline-none focus:outline-none justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none relative z-10">
          <h2 className="text-gray-800 text-left font-thin text-xl">
            {heading}
          </h2>
          <div className={`rounded-full border border-black w-7 h-7 flex items-center justify-center transform transition-transform ease-in-out bg-black ${open ? 'rotate-180' : ''}`}>
            <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </button>
        <div>
          <div className={`${styles.contentItem} ${open ? styles.contentItemOpen : styles.contentItemClose} `}>
            <div className="pl-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
