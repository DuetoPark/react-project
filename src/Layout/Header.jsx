import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Layout/header.css";
import Wrapper from "./Wrapper";
import { FcHome, FcTodoList } from "react-icons/fc";
import ThemeBtn from "../Todo/Component/ThemeBtn";

export default function Header() {
  const _pages = [
    { address: "", text: "홈", icon: <FcHome /> },
    { address: "todo", text: "투두 리스트", icon: <FcTodoList /> },
  ];

  const [_curPage, setCurPage] = useState(document.location.pathname.slice(1));

  return (
    <nav className="global-header">
      <h2 className="visually-hidden">메뉴</h2>

      <Wrapper>
        <div className="left-box">
          <ul className="global-menu-list">
            {_pages.map(({ address, text, icon }) => (
              <li key={text} className="global-menu-list">
                <Link
                  to={`/${address}`}
                  className={`global-menu-link${
                    _curPage === address ? " is-active" : ""
                  }`}
                  onClick={() => {
                    setCurPage(address);
                  }}
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-box">
          <ThemeBtn />
        </div>
      </Wrapper>
    </nav>
  );
}
