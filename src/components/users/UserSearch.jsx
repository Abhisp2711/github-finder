import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUser, clearUser } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please Enter Something", "error");
    } else {
      searchUser(text);

      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2  gap-4">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-600 rounded p-2 text-black placeholder:text-white placeholder:italic focus:outline-pink-900 "
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
              onClick={clearUser}
              className="bg-pink-700 p-2 rounded w-1/3 text-center font-semibold text-white hover:opacity-90 cursor-pointer transition-all duration-100"
            >
              Clear
            </button>
            <div className="italic text-purple-600 ">
              <p>Search Items : {users.length}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
