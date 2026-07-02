import { createContext, useState, useCallback } from "react";
import authService from "../services/authService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        return authService.getStoredUser();
    });

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return authService.isAuthenticated();
    });

    const login = useCallback(async (email, password) => {
        try {
            const response = await authService.login(email, password);
            setUser(response.user);
            setIsAuthenticated(true);
            return response;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    }, []);

    const register = useCallback(async (email, password, name) => {
        try {
            const response = await authService.register(email, password, name);
            setUser(response.user);
            setIsAuthenticated(true);
            return response;
        } catch (error) {
            console.error("Register error:", error);
            throw error;
        }
    }, []);

    const googleLogin = useCallback(async (credential) => {
        try {
            const response = await authService.googleLogin(credential);
            setUser(response.user);
            setIsAuthenticated(true);
            return response;
        } catch (error) {
            console.error("Google login error:", error);
            throw error;
        }
    }, []);

    const logout = useCallback(() => {
        authService.logout();
        setUser(null);
        setIsAuthenticated(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                googleLogin,
                logout,
                isAuthenticated,
                token: authService.getToken(),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
