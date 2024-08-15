"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsNotificationOpen] = useState(false);
  const router = useRouter();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((isProfileOpen) => !isProfileOpen);
  };

  return (
    <div className="flex h-full items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        height={22}
        width={22}
        alt=""
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div>
          <Link href="/">Profile</Link>
        </div>
      )}
      <Image
        src="/notification.png"
        height={22}
        width={22}
        alt=""
        className="cursor-pointer"
        onClick={() => setIsNotificationOpen((prev) => !prev)}
      />
      <Image
        src="/cart.png"
        height={22}
        width={22}
        alt=""
        className="cursor-pointer"
        onClick={() => setIsCartOpen((isProfileOpen) => !isCartOpen)}
      />
    </div>
  );
};

export default NavIcons;
