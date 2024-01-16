import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, Supported_Languages } from "../utils/constants";
import { removeMovies, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uID: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
    dispatch(removeMovies());
  };

  const languageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="  absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row  md:justify-between   ">
      <img className="w-44  mx-auto  md:mx-0" alt="logo " src={LOGO} />

      {user && (
        <div className="p-4  flex justify-center ">
          {gptSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-2 rounded-sm"
              onChange={languageChange}
            >
              {Supported_Languages.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          {
            <button
              onClick={handleGptSearch}
              className="px-2 mr-3 bg-purple-800 text-white rounded-md"
            >
              {gptSearch ? "Home Page" : "GPT Search"}
            </button>
          }
          <img
            className="w-12 h-12  hidden md:block"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAb1BMVEUNfoD///8Ae30Adnj7/f0AcHLt9PSiw8P2+vpTnZ7y+Pjl8PCBsrMAdHdMl5kxioy+29upzc7U5OS91tdaoqN3qKmIr7CJubqSvb6x0dIxhIZEjI48h4hhoKGaxMXO5OR6tbZvrrA9k5Uah4nK2tuXb2ZTAAAD90lEQVR4nO3bYXeqIBwGcAVyJqaJOTGHpvb9P+PVWlsmnVZ4cTvn+b2698X47xkIKug4AAAAAAAAAAAAAAAAAAAAAAAAALMiJwuVduYs3Te1L6Oo3DvW8/QFP8r1jKVJrKraZ8ytKxVbjUOcOEu4y1hQS9XNUZmqred+YmlmMQ1xDttLZZcnETVvMePuFR46ttKQuPKuS4udaZpNOGrQdb3cUt+QfeWPS/O1WRqiuHuDZ5bChP5taVGalCZdetug625jK2kiMS2dmIwK2kw6pp8FQith5LSyy00mAVpoWnQTG3PAvtZUZm+blxsk8VbTosuNhu4PS3/oKrvp639HOr38T9YWwuy0lUX7epgs0Da5sxDmoA8TIczgFw6z18OQWDeluIGNCaDUhtka3G4SzZrZt7i3MTVrB0Vhss7c3pmd2Fk0K01lrgzCaMeZwbh9pnSk6ZrUqEnaTLrGt9MxuvnM9LZ5k9/Mzqyy9giQsHHpQL1+M3NukuSjvvEqO/fMQ+m4GD0EeKFhlr7JzU58dQ4TIbX52CzFV+d42/VqhjZpm6fCY77PU9nafaFBoreU+z7zRBrG5q8ATm1SJ8re399VZ7FbLqU71VfOIme+0oTQwRJvAZerDAAAAAAAAAAAAPAyQpc6WDk7Qh2VZdEyceat2reWFdzzRD7L4cYni9Ouo/NsQQz6XknPO5yBnK3RHxdvi1qkajNLnP5aUenX7p3RfvMraHPaamNFa77XRVZOU1/vBkrb4+yyd+fldGN08fRRwpsd9MpumFVyVTuPXp0L+ol4r6aH96qZf9sH6OhwpZeo54+LD0fm96oSbJLFz+xeM/TmpCirpSqf2JPsr3inVPl2cnh2aCuxtnN/Nhpmn3PQUWYtofRRD532TjsVJrX+bFhgO4tDWs3flHl1kqto79xLNORwulKFw2a5NonrFZn9NZNK3VmofrxzkVZStR1drVb0YkOH/5IuyvIqFVx/9nD46bTpNkvczSjtqduhg3yfcyGORXU4NOvBrjmEb4kQgnuBP73gvweYiq19hTBCSHzQnBcfhQqCwDvp/8HuhzjjibL/7c51HO25u5fwsF2mU77jbEhzb7A9I0h3q0UulUmcXRHcmZl+hAVCtjPefZuhq07W92baB3xey/g3dMq34VhSdXw6TyCOcoFDVA+R4YFEFj/uoGE1SsL28e3CQvrFvWszmaTi7pL4iR8LmamY/NYkZ6c3K3GUhbLY8v5p/mptYaxfcXgfowqzqOxm/cT0/yHDiHPijzJSTZiHb2cyzA9KReXH/g++Tbp8Wfz1W5PPL37/VgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi9/gH7gDBYPxaZ2QAAAABJRU5ErkJggg=="
            alt="signin logo"
          />
          <button
            onClick={handleSignOut}
            className="pl-4  -mt-2 font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
