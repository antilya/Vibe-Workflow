"use client"

import React from "react";
import { ReactFlowProvider } from "reactflow";
import NodeFlow from "./components/NodeFlow";
import { AssetUrlProvider } from "./AssetUrlContext";

export default function Home({
  apiKey,
  initialNodeSchemas,
  initialWorkflowData,
  resolveAssetUrl,
  onGenerationStart,
  onGenerationEnd,
  onGenerationComplete,
  onGenerationError,
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <AssetUrlProvider resolveAssetUrl={resolveAssetUrl}>
        <ReactFlowProvider>
          <NodeFlow
            apiKey={apiKey}
            initialNodeSchemas={initialNodeSchemas}
            initialWorkflowData={initialWorkflowData}
            onGenerationStart={onGenerationStart}
            onGenerationEnd={onGenerationEnd}
            onGenerationComplete={onGenerationComplete}
            onGenerationError={onGenerationError}
          />
        </ReactFlowProvider>
      </AssetUrlProvider>
    </div>
  );
}
