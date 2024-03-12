import backendApiSlice from "./backend";
import superbaseApiSlice from "./superbase";

export function NewApiService(name) {
  switch (name) {
    case "superbase":
      return superbaseApiSlice;
    case "backend":
      return backendApiSlice;
  }
}
