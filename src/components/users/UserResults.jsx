import { useContext } from "react";

import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/GithubContext";
import UserCard from "./UserCard";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (loading) return <Spinner />;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 px-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserResults;
