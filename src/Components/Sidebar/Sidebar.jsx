import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className="min-h-[100vh] inline-flex flex-col justify-between bg-slate-400">
        <div className="">
          <span className="  ">
            <CiMenuBurger></CiMenuBurger>{" "}
          </span>
          <div className="newChat">
            <span>
              <FaPlus></FaPlus>
            </span>
          </div>
          <div className="recent">
            <p className="recent-title">recent</p>
            <div className="recent-entry">
              <span>
                <MdMessage />
              </span>
              <p>What is react...</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <span><FaQuestion /></span>
            <p>Help</p>
          </div>
          <div className="bottom-item recent-entry">
            <span><FaHistory />
</span>
            <p>Activity</p>
          </div>
          <div className="bottom-item recent-entry">
            <span><IoIosSettings />
</span>
            <p>Settings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
