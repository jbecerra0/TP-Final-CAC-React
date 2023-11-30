import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context";
import { AppStorage } from "../../base/app_storage";
import { authApi } from "../../datasources/remote/auth/auth_api";

export const AUTH_KEY = "isLoggedIn";

export const AuthProvider = ({ children, fallback }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const saveLoginState = async (state) => AppStorage.save(AUTH_KEY, state);

    const getLoginState = async () => AppStorage.get(AUTH_KEY);

    const removeLoginState = async () => AppStorage.remove(AUTH_KEY);

    useEffect(() => {
        (async () => {
            const loginState = await getLoginState();

            if (!loginState) return;

            setIsLoggedIn(loginState);

            setIsLoading(true);
        })();

        /* const initAuth = async () => {
            const loginState = await getLoginState();

            if (!loginState) return;

            setIsLoggedIn(loginState);

            setIsLoading(true);
        };
        initAuth(); */
    }, []);

    const login = async (form) => {
        const response = await authApi.post("/login", form);

        setIsLoggedIn(true);
        saveLoginState(true);
    };

    const logout = async () => {
        setIsLoggedIn(false);
        removeLoginState();
    };

    if (fallback && isLoading) {
        return fallback;
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
