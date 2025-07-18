import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import UserItems from "./UserItems";

function UserCard({ user }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      <UserItems user={user} />
    </motion.div>
  );
}

export default UserCard;
