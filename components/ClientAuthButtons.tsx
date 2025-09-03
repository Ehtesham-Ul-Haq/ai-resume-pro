"use client";
import React, { useEffect, useState } from "react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const ClientAuthButtons = () => {
  const { isSignedIn } = useUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch: render nothing until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4 p-2">
      {!isSignedIn ? (
        <>
          <SignInButton mode="redirect">
            <button className="cursor-pointer text-[#db0c0c] border border-[#db0c0c] border-dashed hover:bg-[#db0c0c] hover:text-white rounded-full px-2 py-1">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="redirect">
            <button className="cursor-pointer text-[#db0c0c] border border-[#db0c0c] border-dashed hover:bg-[#db0c0c] hover:text-white rounded-full px-2 py-1">
              Sign Up
            </button>
          </SignUpButton>
        </>
      ) : (
        <UserButton afterSignOutUrl="/" />
      )}
    </div>
  );
};

export default ClientAuthButtons;
