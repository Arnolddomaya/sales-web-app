import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom/dist";
import "./styles.css";
import { clsx } from "clsx";

export default function MainTemplate() {
  const { pathname } = useLocation();

  const menu = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/counters",
      label: "Counters",
    },
  ];

  return (
    <>
      <header>
        <nav>
          <ol>
            {menu.map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className={clsx("menu-item", { current: to === pathname })}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer> © 2023</footer>
    </>
  );
}
