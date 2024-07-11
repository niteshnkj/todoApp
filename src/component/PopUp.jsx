import { IoMdCloseCircleOutline } from "react-icons/io";

const PopUp = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
        {children}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <IoMdCloseCircleOutline size={24} />
        </button>
      </div>
    </div>
  );
};

export default PopUp;
