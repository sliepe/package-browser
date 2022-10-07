import React from "react";
import ManifestState from "./ManifestState";

export default React.createContext<ManifestState>({
    isLoaded: false
})