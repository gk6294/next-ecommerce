"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModel";

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
      <div className="relative cursor-pointer">
        <Image
        src="/cart.png"
        height={22}
        width={22}
        alt=""
        onClick={() => setIsCartOpen((isProfileOpen) => !isCartOpen)}
      />
      <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full text-white text-sm bg-lama flex items-center justify-center ">2</div>
      </div>
      {isCartOpen && (
        <CartModal/>
      )}
    </div>
  );
};

export default NavIcons;
