"use client";

import { OAuthStrategy, createClient } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { createContext, ReactNode } from "react";
import Cookies from "js-cookie";
const refreshToken =JSON.parse(Cookies.get("refreshToken")|| "{}")
//const refreshToken = process.env.NEXT_PUBLIC_WIX_REFRESH_TOKEN || "";


const wixClient = createClient({
  modules: {
    products,
    collections,
    //currentCart
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type WixClient = typeof wixClient;
export const WixClientContext = createContext<WixClient>(wixClient);
export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};