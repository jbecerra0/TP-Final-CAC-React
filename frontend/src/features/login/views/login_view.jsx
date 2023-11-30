import { useAuth } from "../../../core/auth/hook/use_auth";
import FormLogin from "../../../core/components/form_login";
import NetflixLogo from "../components/netflix_logo";
import { Link } from "react-router-dom";

const LoginView = () => {
    const { login } = useAuth();

    return (
        <div className="bg-[url('./background_login.jpg')]">
            <div className="bg-zinc-950/50">
                <header>
                    <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                        <Link to={"/"}>
                            <NetflixLogo />
                        </Link>
                    </div>
                </header>
                <main className="flex justify-center items-center h-screen">
                    <FormLogin login={login} />
                </main>
            </div>
        </div>
    );
};

export default LoginView;
