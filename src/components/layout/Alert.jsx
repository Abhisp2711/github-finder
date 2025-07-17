import { useContext } from "react";
import { FaBan } from "react-icons/fa";
import AlertContext from "../../context/alert/AlertContext";
export default function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="flex items-center  my-4 space-x-2 text-red-600">
        <FaBan />
        <p className="text-black font-semibold ">{alert.msg}</p>
      </div>
    )
  );
}
