import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    console.log(watch("example"));


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:w-1/2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600 mt-2">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600 mt-2">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true,  maxLength: 20, minLength: 6 })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password.type === 'required' && <span className="text-red-600 mt-2">Password is required</span>}
                            {errors.password.type === 'minLength' && <span className="text-red-600 mt-2">Password should be more than 6 character</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirmPassword", { required: true,  maxLength: 20, minLength: 6 })} name="confirmPassword" placeholder="password" className="input input-bordered" />
                            {errors.confirmPassword && <span className="text-red-600 mt-2">Password is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <p className="text-center underline-offset-1"><small>Already Have an Account?<Link className="font-bold" to='/login'> Login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;