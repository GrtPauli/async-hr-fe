import type { ComponentProps, FC, JSX } from "react";
import ThemeContextProvider from "./context/theme";


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
    ThemeContextProvider
] as any;

export const AppContextProvider = combineContext(...providers);
