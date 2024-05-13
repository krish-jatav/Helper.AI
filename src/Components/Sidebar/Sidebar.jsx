import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  const [extended,setExtended] = useState(false)
  return (
    <>
      <div className="Sidebar p-4 w-50 min-h-[100vh] inline-flex flex-col justify-between bg-zinc-300 ">
        <div className="top">
          <span onClick={()=>setExtended(prev=>!prev)} className=" block ml-3 mb-8 cursor-pointer text-black text-3xl font-extrabold ">
            <CiMenuBurger></CiMenuBurger>{" "}
          </span>
          <div className="newChat inline-flex text-center gap-5 py-7 bg-slate-400 rounded-md p-4">
            <span>
              <FaPlus></FaPlus>
              {extended?<p>New chat</p>:null}
            </span>
          </div>
          {extended ?
          <div className="recent flex  flex-col ">
            <p className="recent-title mt-5 mb-6">recent</p>
            <div className="recent-entry flex items-center items-start text-xl bg-slate-400 p-3 rounded-lg  gap-5">
              <span>
                <MdMessage />
              </span>
              <p>What is react...</p>
            </div>
          </div>
: null
}
        </div>
        <div className="bottom flex gap-9 items-center">
          <div className="bottom-item recent-entry">
            <span><FaQuestion /></span>
            {extended?<p>Help</p>: null}
          </div>
          <div className="bottom-item recent-entry">
            <span><FaHistory />
</span>
            {extended ? <p>Activity</p>:null}
          </div>
          <div className="bottom-item recent-entry">
            <span><IoIosSettings />
</span>
            {extended?<p>Settings</p>:null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
