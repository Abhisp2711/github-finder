import { FaEye, FaLink, FaInfo, FaStar, FaUtensils } from "react-icons/fa";
import Badge from "../ui/badge";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function RepoItem({ repo }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="repo-item bg-slate-900 rounded-lg text-white p-2"
    >
      <h3 className="text-md font-semibold mt-2">
        <a href={repo.html_url} rel="noopener noreferrer" className="mr-2">
          <FaLink className="inline-block mr-2" />
          {repo.name}
        </a>
      </h3>
      <p className="mt-2 p-2">{repo.description}</p>

      <div className="flex flex-wrap gap-2 mt-2">
        <Badge className="hover:bg-blue-800 hover:text-blue-100 transition-all duration-150">
          <FaEye className="mr-1" />
          {inView ? <CountUp end={repo.watchers_count} duration={1} /> : 0}
        </Badge>

        <Badge
          variant="success"
          className="hover:bg-green-800 hover:text-green-100 transition-all duration-150"
        >
          <FaStar className="mr-1" />
          {inView ? <CountUp end={repo.stargazers_count} duration={1} /> : 0}
        </Badge>

        <Badge
          variant="warning"
          className="hover:bg-yellow-800 hover:text-yellow-100 transition-all duration-150"
        >
          <FaInfo className="mr-1" />
          {inView ? <CountUp end={repo.open_issues} duration={1} /> : 0}
        </Badge>

        <Badge
          variant="error"
          className="hover:bg-red-800 hover:text-red-100 transition-all duration-150"
        >
          <FaUtensils className="mr-1" />
          {inView ? <CountUp end={repo.forks} duration={1} /> : 0}
        </Badge>
      </div>
    </motion.div>
  );
}

export default RepoItem;
