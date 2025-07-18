import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { motion } from "framer-motion";
import { searchUser } from "../../context/github/GithubActions";

function UserSearch({ onSearch }) {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please Enter Something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const user = await searchUser(text);

      dispatch({ type: "GET_USERS", payload: user });
      onSearch();
      setText("");
    }
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: users.length > 0 ? -50 : 0 }} // move up if users present
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] md:grid-cols-[2fr_1fr] gap-4 mt-4"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-600  rounded p-2 text-pink-200 font-[400] placeholder:text-white placeholder:italic focus:outline-pink-900"
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none rounded w-32 bg-purple-900 text-white font-semibold text-[20px] h-full hover:opacity-80 transition-all duration-100"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        {users.length > 0 && (
          <>
            <button
              onClick={() => dispatch({ type: "CLEAR_USER" })}
              className="bg-pink-700 p-2 rounded w-1/3 text-center font-semibold text-white hover:opacity-90 cursor-pointer transition-all duration-100"
            >
              Clear
            </button>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="italic text-purple-600"
            >
              <p>Search Items : {users.length}</p>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default UserSearch;
