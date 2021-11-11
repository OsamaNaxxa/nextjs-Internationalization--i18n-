import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { createPopper } from "@popperjs/core";
import { useTranslation } from 'next-i18next';

const PagesDropdown = () => {

  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation('header');

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <Link href={router.pathname} locale={locale === "en" ? "ar" : "en"} >
        <a className="outline-none focus:outline-none text-sm pb-0 px-4 whitespace-nowrap bg-transparent lg:text-white ">
          {locale === "en" ? "AR" : "EN"}
        </a>
      </Link>
      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {t("demoPages")}
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >

        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Auth Layout
        </span>
        {
          false ?
            <button
              className="uppercase outline-none focus:outline-none text-sm pt-2 pb-0 px-4 font-bold block whitespace-nowrap bg-transparent text-lightBlue-600"
              type="button"
              onClick={() => { }}
            >
              <i className="fas fa-sign-out-alt"></i> Sign out
            </button>
            :
            <>
              <Link href="/auth/signin">
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  }
                >
                  Signin
                </a>
              </Link>
              <Link href="/auth/signup">
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  }
                >
                  Signup
                </a>
              </Link>
            </>
        }
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          No Layout
        </span>
        <Link href="/landing">
          <a className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"}>
            Landing
          </a>
        </Link>
        {
          true &&
          <Link href="/profile">
            <a className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"}>
              Profile
            </a>
          </Link>
        }
      </div>
    </>
  );
};

export default PagesDropdown;
