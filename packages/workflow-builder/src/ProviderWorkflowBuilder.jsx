"use client";

import React from "react";
import WorkflowBuilder from "./WorkflowBuilder";

const PROVIDER_ASSET_ORIGIN = "https://cdn.muapi.ai/";

function resolveProviderAssetUrl(assetKey) {
  return new URL(String(assetKey).replace(/^\/+/, ""), PROVIDER_ASSET_ORIGIN).href;
}

export default function ProviderWorkflowBuilder({
  resolveAssetUrl = resolveProviderAssetUrl,
  ...props
}) {
  return <WorkflowBuilder {...props} resolveAssetUrl={resolveAssetUrl} />;
}
