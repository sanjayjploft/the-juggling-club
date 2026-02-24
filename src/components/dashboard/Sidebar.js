"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useAutoCollapse from "../../hooks/useAutoCollapse";
import LogoutModal from "./LogoutModal";

export default function Sidebar({ menu = [] }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useAutoCollapse(1400);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <aside className={`juggling-sidebar ${collapsed ? "is-collapsed" : ""}`}>
      <div className="juggling-logo">
        <a href="/">
          <Image
            src="/assets/image/logo-juggling.svg"
            alt="Juggling Club logo"
            width={60}
            height={60}
          />
        </a>
      </div>

      <ul className="juggling-menu">
        {menu.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.name} className={active ? "active" : ""}>
              <Link href={item.href}>
                <Image
                  src={active ? item.activeIcon : item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        className="juggling-logout"
        onClick={() => setShowLogout(true)}
        aria-label="Log out">
        <Image
          src="/assets/image/logout-icon.svg"
          alt=""
          width={18}
          height={18}
        />
        {!collapsed && <span>Log out</span>}
      </button>

      <LogoutModal open={showLogout} onClose={() => setShowLogout(false)} />

      <button
        className="juggling-sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
        ☰
      </button>
    </aside>
  );
}
