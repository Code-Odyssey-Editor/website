import { FaGoogle } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { VscExtensions } from "react-icons/vsc";
import { BiGitCommit } from "react-icons/bi";
import { BsFillBookmarksFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

const editorpage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full min-h-screen py-8 bg-gray-100/80">
      {/* Main Editor */}
      <div className="w-11/12 bg-gradient-to-r from-gray-700/80 to-slate-800 h-full rounded-3xl p-2">
        {/* Navbar */}
        <nav className="p-1 bg-blue-500/20 rounded-full">
          <div className="flex flex-row">
            <FaGoogle className="w-4 h-4 text-white m-2 hover:scale-110 cursor-pointer" />
            <ul className="flex gap-2 text-sm py-[5px] text-white/80 font-sans font-medium bg-black/20 rounded-full px-4">
              <li className="cursor-pointer hover:text-white">File</li>
              <li className="cursor-pointer hover:text-white">Edit</li>
              <li className="cursor-pointer hover:text-white">Selection</li>
              <li className="cursor-pointer hover:text-white">View</li>
              <li className="cursor-pointer hover:text-white">Go</li>
              <li className="cursor-pointer hover:text-white">Run</li>
            </ul>
          </div>
        </nav>

        {/* Menu Bar */}
        <div className="flex flex-col gap-2 w-12 bg-gray-700/90 rounded-full m-1">
          {/* Folder */}
          <FaFolderOpen className="text-white mx-auto mt-4 cursor-pointer" />
          {/* Extensions */}
          <VscExtensions className="text-white mx-auto mt-2 cursor-pointer" />
          {/* Commit */}
          <BiGitCommit className="text-white mx-auto mt-2 cursor-pointer" />
          {/* Bookmarks */}
          <BsFillBookmarksFill className="text-white mx-auto mt-2 cursor-pointer" />
          {/* More */}
          <FiMoreHorizontal className="text-white mx-auto mt-2 mb-4 cursor-pointer" />
        </div>
      </div>
    </main>
  );
};

export default editorpage;
