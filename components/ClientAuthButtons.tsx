"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const ClientAuthButtons = () => {
      const { user, isSignedIn } = useUser();

  return (
    <div className="w-1/2 flex items-center justify-between p-2">
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
}

export default ClientAuthButtons;
