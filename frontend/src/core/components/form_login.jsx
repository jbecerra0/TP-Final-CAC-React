import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { useForm } from "../hooks/use_form";

const FormLogin = ({ login }) => {
    const INITIAL_FORM = {
        email: "",
        password: "",
    };
    const { form, handleOnChange, resetForm } = useForm(INITIAL_FORM);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        login(form);
        resetForm();
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <Card className="w-96 bg-zinc-950/75">
                <div className="m-2">
                    <CardHeader className="flex justify-start">
                        <p className="text-2xl font-semibold tracking-wider text-neutral-50">
                            Inicia sesión
                        </p>
                    </CardHeader>
                    <CardBody className="gap-4">
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            value={form.email}
                            onChange={handleOnChange}
                        />
                        <Input
                            type="password"
                            label="Password"
                            name="password"
                            value={form.password}
                            onChange={handleOnChange}
                        />
                    </CardBody>
                    <CardFooter className="flex flex-col">
                        <Button
                            className="bg-red-600 text-neutral-50"
                            fullWidth
                            type="submit"
                        >
                            Iniciar sesión
                        </Button>
                        <div className="flex flex-row items-center justify-between my-3 w-full">
                            <Checkbox
                                classNames={{
                                    label: "text-neutral-50",
                                }}
                                defaultSelected
                            >
                                Recuérdame
                            </Checkbox>
                            <Link href="#">¿Necesitas ayuda?</Link>
                        </div>
                    </CardFooter>
                </div>
            </Card>
        </form>
    );
};

export default FormLogin;
