import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import SplashScreen from "./UI/pages/Splash";

import store from "base/redux/store";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import MainRoute from "./routes/MainRoute";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "UI/pages/ErrorFallback";

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  body {
    color: ${(props) => (props.$whiteColor ? "white" : "black")};
  }
`;

function App() {
  // React Query
  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        /**
         * dùng lại khi đã call xong api
         * tránh trường hợp nhiều component dùng thì call lại nhiều lần
         */
        refetchOnMount: false,
        /**
         * bỏ fetch lại khi focus vào component
         * ko biết có cần ko
         */
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<SplashScreen />}>
            <MainRoute />
          </Suspense>
        </ErrorBoundary>
        <GlobalStyle />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
