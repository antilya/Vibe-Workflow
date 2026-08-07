"use client"

import React from "react";
import { ReactFlowProvider } from "reactflow";
import NodeFlow from "./components/NodeFlow";
import { AssetUrlProvider } from "./AssetUrlContext";

export default function Home({ apiKey, initialNodeSchemas, initialWorkflowData, resolveAssetUrl }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <AssetUrlProvider resolveAssetUrl={resolveAssetUrl}>
        <ReactFlowProvider>
          <NodeFlow
            apiKey={apiKey}
            initialNodeSchemas={initialNodeSchemas}
            initialWorkflowData={initialWorkflowData}
          />
        </ReactFlowProvider>
      </AssetUrlProvider>
    </div>
  );
}
