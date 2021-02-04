import { defineConfigSchema } from "@openmrs/esm-config";
import { backendDependencies } from "./openmrs-backend-dependencies";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  const moduleName = "@openmrs/esm-form-entry";
  defineConfigSchema(moduleName, {});

  return {
    extensions: [
      {
        id: "form-widget",
        load: () => import("./main.single-spa"),
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
