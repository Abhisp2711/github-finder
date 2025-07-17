import { useContext } from "react";
import { motion } from "framer-motion";
import Spinner from "../layout/Spinner";
import UserItems from "./UserItems";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (loading) return <Spinner />;

  return (
    <motion.div
      className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {users.map((user) => (
        <UserItems key={user.id} user={user} />
      ))}
    </motion.div>
  );
}

export default UserResults;
