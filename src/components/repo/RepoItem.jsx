import { FaEye, FaLink, FaInfo, FaStar, FaUtensils } from "react-icons/fa";
import Badge from "../ui/badge";
function RepoItem({ repo }) {
  return (
    <div className="repo-item  bg-slate-900 rounded-lg text-white p-2  ">
      <h3 className="text-md font-semibold mt-2">
        <a href={repo.html_url} rel="noopener noreferrer" className=" mr-2">
          <FaLink className="inline-block mr-2" />
          {repo.name}
        </a>
      </h3>
      <p className="mt-2 p-2">{repo.description}</p>
      <div className="flex flex-wrap gap-2 mt-2 ">
        <div className="flex  items-center justify-center">
          <div className="hover:scale-105 transition-all duration-75 cursor-pointer">
            <Badge>
              <FaEye className="mr-1  " />
              {repo.watchers_count}
            </Badge>
          </div>
        </div>

        <div className="flex  items-center justify-center">
          <div className="hover:scale-105 transition-all duration-75 cursor-pointer">
            <Badge variant="secondary ">
              <FaStar className="mr-1  " />
              {repo.stargazers_count}
            </Badge>
          </div>
        </div>
        <div className="flex  items-center justify-center">
          <div className="hover:scale-110 transition-all duration-75 cursor-pointer">
            <Badge variant="warning">
              <FaInfo className="mr-1  " />
              {repo.open_issues}
            </Badge>
          </div>
        </div>
        <div className="flex  items-center justify-center">
          <div className="hover:scale-110 transition-all duration-75 cursor-pointer ">
            <Badge variant="error">
              <FaUtensils className="mr-1 " />
              {repo.forks}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
