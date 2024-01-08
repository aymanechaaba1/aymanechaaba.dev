function ReactIcon() {
  return (
    <div className="3xl:flex-1 flex align-center">
      <a
        className="active:scale-95 overflow-hidden transition-transform relative items-center text-primary dark:text-primary-dark p-1 whitespace-nowrap outline-link rounded-full 3xl:rounded-xl inline-flex text-lg font-normal gap-2"
        href="/"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="-10.5 -9.45 21 18.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-cyan-500 text-sm me-0 w-5 h-5 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
        >
          <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
          <g stroke="currentColor" stroke-width="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
        <span className="sr-only 3xl:not-sr-only">React</span>
      </a>
    </div>
  );
}

export default ReactIcon;
