import type { ComponentProps, FC, JSX } from "react";
import ThemeContextProvider from "./context/theme";
import { AuthContextProvider } from "./context/auth";
import { ProfileContextProvider } from "./context/profile";
import { AttendanceContextProvider } from "./context/attendance";
import { AdminContextProvider } from "./context/admin";


export const combineContext = (...components: FC[]): FC<any> => {
  return components.reduce(
    (AccumulatedComponents: any, CurrentComponent: any) => {
      // eslint-disable-next-line react/display-name
      return ({ children }: ComponentProps<FC<any>>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

const providers = [
    ThemeContextProvider,
    AuthContextProvider,
    ProfileContextProvider,
    AttendanceContextProvider,
    AdminContextProvider
] as any;

export const AppContextProvider = combineContext(...providers);
