"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const ClientAuthButtons = () => {
      const { user, isSignedIn } = useUser();

  return (
    <div className="w-3/12 flex items-center justify-around">
          {!isSignedIn ? (
            <>
              <SignInButton mode="redirect">
                <button className="cursor-pointer text-[#db0c0c] rounded-xl px-2 py-1">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="redirect">
                <button className="cursor-pointer bg-[#db0c0c] text-white rounded-xl px-2 py-1 ml-2">
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
