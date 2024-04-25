import AuthLayout from "../components/Layouts/AuthLayouts"
import FormRegister from "../components/Fragments/FormRegister"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister/>
            <p className="text-sm mt-4 text-center">
                Sudah Punya Akun?
                <Link to="/login" className="font-bold text-blue-600">Login</Link>
            </p>
        </AuthLayout>
    )
}

export default RegisterPage