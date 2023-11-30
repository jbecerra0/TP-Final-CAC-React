import { AuthProvider } from "../auth/provider/auth_provider";
import { NextUIProvider } from "@nextui-org/react";

const RootProvider = ({ children }) => {
    return (
        <NextUIProvider>
            <AuthProvider>{children}</AuthProvider>
        </NextUIProvider>
    );
};

export default RootProvider;
