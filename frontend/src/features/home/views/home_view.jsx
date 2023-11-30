import { useAuth } from "../../../core/auth/hook/use_auth";

const HomeView = () => {
    const { isLoggedIn } = useAuth();

    return <h1>{isLoggedIn ? "Logged" : "Not logged"}</h1>;
};

export default HomeView;
