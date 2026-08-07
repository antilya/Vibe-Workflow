"use client";

import React, { createContext, useContext } from "react";

const AssetUrlContext = createContext(null);

export function AssetUrlProvider({ resolveAssetUrl, children }) {
  return (
    <AssetUrlContext.Provider value={resolveAssetUrl}>
      {children}
    </AssetUrlContext.Provider>
  );
}

export function useAssetUrlResolver() {
  return useContext(AssetUrlContext);
}
