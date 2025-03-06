function SvgIcon1(props) {
  return (
    <div className={props.className}>
      {props.isFavourite ? (
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8875 22.1312L13.75 22.2687L13.5988 22.1312C7.0675 16.205 2.75 12.2863 2.75 8.3125C2.75 5.5625 4.8125 3.5 7.5625 3.5C9.68 3.5 11.7425 4.875 12.4712 6.745H15.0288C15.7575 4.875 17.82 3.5 19.9375 3.5C22.6875 3.5 24.75 5.5625 24.75 8.3125C24.75 12.2863 20.4325 16.205 13.8875 22.1312ZM19.9375 0.75C17.545 0.75 15.2487 1.86375 13.75 3.61C12.2513 1.86375 9.955 0.75 7.5625 0.75C3.3275 0.75 0 4.06375 0 8.3125C0 13.4963 4.675 17.745 11.7563 24.1663L13.75 25.9813L15.7437 24.1663C22.825 17.745 27.5 13.4963 27.5 8.3125C27.5 4.06375 24.1725 0.75 19.9375 0.75Z"
            fill="#F76767"
          />
          <path
            d="M8.5 1.75L12 3.75L14 5.25L14.5 4.25L17.5 2.25L19.5 1.75L23 2.75L25.5 5.25C25.8333 6.58333 26.4 9.45 26 10.25C25.6 11.05 23.8333 14.25 23 15.75L13.5 23.75L5 15.75L1.5 11.25L1 7.75L2.5 5.25L4.5 2.25L8.5 1.75Z"
            fill="#F76767"
          />
        </svg>
      ) : (
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.138,24.7654l-0.138,0.138l-0.151,-0.138c-6.531,-5.926 -10.849,-9.845 -10.849,-13.819c0,-2.75 2.062,-4.812 4.812,-4.812c2.118,0 4.18,1.375 4.909,3.245h2.558c0.729,-1.87 2.791,-3.245 4.909,-3.245c2.75,0 4.812,2.062 4.812,4.812c0,3.974 -4.317,7.893 -10.862,13.819zM22.188,3.3844c-2.393,0 -4.689,1.114 -6.188,2.86c-1.499,-1.746 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.314 -7.562,7.562c0,5.184 4.675,9.433 11.756,15.854l1.994,1.815l1.994,-1.815c7.081,-6.421 11.756,-10.67 11.756,-15.854c0,-4.248 -3.327,-7.562 -7.562,-7.562z"
            fill="black"
          />
        </svg>
      )}
    </div>
  );
}

export default SvgIcon1;
