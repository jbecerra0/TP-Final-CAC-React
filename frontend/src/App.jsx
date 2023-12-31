import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/app_router";
import RootProvider from "./core/providers/root_provider";

const App = () => {
    return (
        <RootProvider>
            <RouterProvider router={appRouter}></RouterProvider>
        </RootProvider>
    );
};

export default App;
