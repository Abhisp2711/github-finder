import { useContext, useEffect, useState } from "react";
import UserSearch from "../components/users/UserSearch";
import UserResults from "../components/users/UserResults";
import { motion } from "framer-motion";
import GithubContext from "../context/github/GithubContext";

export default function Home() {
  const { users } = useContext(GithubContext);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (users.length > 0) {
      setHasSearched(true);
    }
  }, [users]);

  return (
    <div className="container mx-auto px-4 mt-24 flex flex-col items-center">
      <motion.div
        initial={{ y: 0 }}
        animate={hasSearched ? { y: -80 } : { y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <UserSearch onSearch={() => setHasSearched(true)} />
      </motion.div>

      {hasSearched && users.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mt-10"
        >
          <UserResults />
        </motion.div>
      )}
    </div>
  );
}
