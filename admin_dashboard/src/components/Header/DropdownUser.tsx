import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import UserOne from '../../images/user/user-01.png';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Milan Acharya
          </span>
          <span className="block text-xs">Full Stack Developer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src="data:image/jpeg;base64,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" alt="User" />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                    fill=""
                  />
                  <path
                    d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
                    fill=""
                  />
                </svg>
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6687 1.44374C17.1187 0.893744 16.4312 0.618744 15.675 0.618744H7.42498C6.25623 0.618744 5.25935 1.58124 5.25935 2.78437V4.12499H4.29685C3.88435 4.12499 3.50623 4.46874 3.50623 4.91562C3.50623 5.36249 3.84998 5.70624 4.29685 5.70624H5.25935V10.2781H4.29685C3.88435 10.2781 3.50623 10.6219 3.50623 11.0687C3.50623 11.4812 3.84998 11.8594 4.29685 11.8594H5.25935V16.4312H4.29685C3.88435 16.4312 3.50623 16.775 3.50623 17.2219C3.50623 17.6687 3.84998 18.0125 4.29685 18.0125H5.25935V19.25C5.25935 20.4187 6.22185 21.4156 7.42498 21.4156H15.675C17.2218 21.4156 18.4937 20.1437 18.5281 18.5969V3.47187C18.4937 2.68124 18.2187 1.95937 17.6687 1.44374ZM16.9469 18.5625C16.9469 19.2844 16.3625 19.8344 15.6406 19.8344H7.3906C7.04685 19.8344 6.77185 19.5594 6.77185 19.2156V17.875H8.6281C9.0406 17.875 9.41873 17.5312 9.41873 17.0844C9.41873 16.6375 9.07498 16.2937 8.6281 16.2937H6.77185V11.7906H8.6281C9.0406 11.7906 9.41873 11.4469 9.41873 11C9.41873 10.5875 9.07498 10.2094 8.6281 10.2094H6.77185V5.63749H8.6281C9.0406 5.63749 9.41873 5.29374 9.41873 4.84687C9.41873 4.39999 9.07498 4.05624 8.6281 4.05624H6.77185V2.74999C6.77185 2.40624 7.04685 2.13124 7.3906 2.13124H15.6406C15.9844 2.13124 16.2937 2.26874 16.5687 2.50937C16.8094 2.74999 16.9469 3.09374 16.9469 3.43749V18.5625Z"
                    fill=""
                  />
                </svg>
                My Contacts
              </Link>
            </li>
      
          </ul>
          <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            <svg
              className="fill-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                fill=""
              />
              <path
                d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                fill=""
              />
            </svg>
            Log Out
          </button>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
