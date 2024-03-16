import Backend from "./backend";
import Superbase from "./superbase";

export function NewApiService(name) {
  switch (name) {
    case "superbase":
      return new Superbase();
    case "backend":
      return new Backend();
  }
}
export const api  = NewApiService("backend")