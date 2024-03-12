import { useSignupMutation} from "../../api/baseApi.js";
export const SignUp=  ()=> {
    const [signUp, { isLoading }] = useSignupMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signUp().unwrap();

        } catch (error) {

            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields for email and password */}
            <button type="submit" disabled={isLoading}>SignUp</button>
        </form>
    );
}


