import { Link } from "react-router-dom";

const routePaths = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
];

export default function Header() {
  return (
    <nav className="flex-none w-full h-10 flex items-center justify-center border-b-2">
      <ul className="flex items-center justify-center gap-x-2">
        {routePaths.map((item, index) => (
          <li key={index}>
            {item ? (
              <Link to={item.path} title={item.title}>
                {item.title}
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
