import { User } from "oidc-client";
import { createContext } from "react";

export const UserContext = createContext<User | null>(null);