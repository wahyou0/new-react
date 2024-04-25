import AuthLayout from "../components/Layouts/AuthLayouts"
import FormLogin from "../components/Fragments/FormLogin"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin></FormLogin>
            <p className="text-sm mt-4 text-center">
                Belum Punya Akun?
                <Link to="/register" className="font-bold text-blue-600">Buat Akun</Link>
            </p>
        </AuthLayout>
    )
}

export default LoginPage