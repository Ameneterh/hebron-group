import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { signOutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const currentUser = true;
  //   const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    // try {
    //   const res = await fetch("/api/user/signout", {
    //     method: "POST",
    //   });
    //   const data = await res.json();
    //   if (!res.ok) {
    //     console.log(data.message);
    //   } else {
    //     dispatch(signOutSuccess());
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // const urlParams = new URLSearchParams(location.search);
    // urlParams.set("searchTerm", searchTerm);
    // const searchQuery = urlParams.toString();
    // navigate(`/search?${searchQuery}`);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full bg-slate-950 p-1">
        <p className="text-white text-lg truncate">
          <Typewriter
            options={{
              strings: ["Born to Reign"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <Navbar fluid className="border-b-2 shadow-lg bg-green-300" color="white">
        <Link to="/" className="flex gap-2 items-center">
          <img
            src="/school-badge.png"
            alt="logo"
            className="h-20 w-20 p-2 rounded-full"
          />
          <div className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-white">
            <span className="text-4xl flex flex-row gap-2 px-2 bg-gradient-to-r from-green-500 via-green-950 to-blue-950 rounded-md border-b-2 border-b-white">
              Hebron
            </span>
            <span className="text-blue-950">group of schools</span>
          </div>
        </Link>
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Search ..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline lg:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button
          onClick={handleSubmit}
          className="w-12 h-10 lg:hidden border border-slate-300 dark:border-slate-600"
          color="grey"
        >
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About Us</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/resources"} as={"div"}>
            <Link to="/resources">Resources</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/blogs"} as={"div"}>
            <Link to="/blogs">Blogs Page</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/contact"} as={"div"}>
            <Link to="/contact">Contact Us</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
