export const EmptyNotes = () => {
  const spanContents = `flex justify-between mb-2 @[630px]:text-base text-sm`;

  return (
    <div className="@container bg-vn-dshade-black text-vn-dshade-white  flex flex-1 flex-col justify-center items-center">
      <p>Welcome to </p>
      <h1 className="@[630px]:text-8xl text-7xl text-vn-blue uppercase font-bold">
        Vimnotes
      </h1>
      <div className="empty-notes-contents mt-2">
        <div className="w-72 ">
          <span className={spanContents}>
            <p>Open Sidebar </p>
            <svg
              width="28"
              height="25"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.61484 8.44H28.2161"
                stroke="#878A8C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.61484 16.9155H28.2161"
                stroke="#878A8C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.61484 25.3909H28.2161"
                stroke="#878A8C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={spanContents}>
            <p>Add notes</p>
            <svg
              className="self-center"
              width="30"
              height="30"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3527 8.97409H8.97506V11.3517C8.97506 11.4778 8.92496 11.5988 8.83579 11.688C8.74661 11.7771 8.62566 11.8272 8.49954 11.8272C8.37342 11.8272 8.25247 11.7771 8.16329 11.688C8.07411 11.5988 8.02401 11.4778 8.02401 11.3517V8.97409H5.64639C5.52028 8.97409 5.39932 8.92399 5.31015 8.83481C5.22097 8.74563 5.17087 8.62468 5.17087 8.49856C5.17087 8.37245 5.22097 8.25149 5.31015 8.16232C5.39932 8.07314 5.52028 8.02304 5.64639 8.02304H8.02401V5.64542C8.02401 5.5193 8.07411 5.39835 8.16329 5.30917C8.25247 5.21999 8.37342 5.16989 8.49954 5.16989C8.62566 5.16989 8.74661 5.21999 8.83579 5.30917C8.92496 5.39835 8.97506 5.5193 8.97506 5.64542V8.02304H11.3527C11.4788 8.02304 11.5998 8.07314 11.6889 8.16232C11.7781 8.25149 11.8282 8.37245 11.8282 8.49856C11.8282 8.62468 11.7781 8.74563 11.6889 8.83481C11.5998 8.92399 11.4788 8.97409 11.3527 8.97409Z"
                fill="#878A8C"
              />
            </svg>
          </span>
          <span className={spanContents}>
            <p>Vim cheatsheet</p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64999 4.23751C5.64999 3.45741 6.28239 2.82501 7.06249 2.82501H21.1875L28.25 9.88751V29.6625C28.25 30.4426 27.6176 31.075 26.8375 31.075H7.06249C6.28239 31.075 5.64999 30.4426 5.64999 29.6625V4.23751Z"
                stroke="#878A8C"
                strokeLinejoin="round"
              />
              <path
                d="M11.3 14.125H22.6"
                stroke="#878A8C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.3 19.775H22.6"
                stroke="#878A8C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={spanContents}>
            <p>Open note actions</p>

            <svg
              width="30"
              height="30"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9509 10.5943C18.1211 10.5943 19.0698 9.64568 19.0698 8.47546C19.0698 7.30525 18.1211 6.3566 16.9509 6.3566C15.7807 6.3566 14.8321 7.30525 14.8321 8.47546C14.8321 9.64568 15.7807 10.5943 16.9509 10.5943Z"
                fill="#878A8C"
              />
              <path
                d="M16.9509 19.0698C18.1211 19.0698 19.0698 18.1211 19.0698 16.9509C19.0698 15.7807 18.1211 14.8321 16.9509 14.8321C15.7807 14.8321 14.8321 15.7807 14.8321 16.9509C14.8321 18.1211 15.7807 19.0698 16.9509 19.0698Z"
                fill="#878A8C"
              />
              <path
                d="M16.9509 26.839C18.1211 26.839 19.0698 25.8903 19.0698 24.7201C19.0698 23.5499 18.1211 22.6013 16.9509 22.6013C15.7807 22.6013 14.8321 23.5499 14.8321 24.7201C14.8321 25.8903 15.7807 26.839 16.9509 26.839Z"
                fill="#878A8C"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
