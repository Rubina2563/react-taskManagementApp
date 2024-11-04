import React from 'react';

const Header = (props) => {
  const loggedOutUser = () => {
  props.changedUser('')
   //window.location.reload()
  }
  return (
    <div className="bg-slate-400 border-none rounded-xl flex justify-between p-4 items-end">
      <h1>
        Hello<br />
        <span className="text-lg font-bold text-red-900">
          {props.data?.firstname || "Admin"}
        </span>
      </h1>
      <button className="bg-orange-600 border-none rounded-md p-2 text-slate-300 font-bold" onClick={loggedOutUser}>
        Log Out
      </button>
    </div>
  );
};

export default Header;
