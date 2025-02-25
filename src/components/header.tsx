import { signOut } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { User } from "../types/types";

interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign out successfully");
      setIsOpen(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Sign out fail")
    }
  };

  return (
    <nav className="header">
      <div className="logo">
        <Link to="/">
          <img src="https://res.cloudinary.com/dbtpdvmm6/image/upload/v1737106565/logo_new_mrw3tg.jpg" alt="Hubb-Calligraphy" />
        </Link>
      </div>

          {/* .\src\assets\logo_new.jpg */}
      {/* <h1>Hubb-calligraphy</h1> */}

      <Link className="homeeee" onClick={() => setIsOpen(false)} to={"/"}>
        Home
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/cart"}>
        <FaShoppingCart />
      </Link> 
      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser /> Profile
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
                  Admin
                </Link>
              )}
              <Link onClick={() => setIsOpen(false)} to="/orders">
                Orders
              </Link>
              <button onClick={logoutHandler}>
                logout<FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
