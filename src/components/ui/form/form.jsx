import { useForm } from "react-hook-form";

const validations = {
    name: { 
        required: 'User name is required'
    },
    email: { 
        required: 'User email is required'
    },
    username: { 
        required: 'User user name is required'
    },
    password: { 
        required: 'User password is required'
    }
}

const defaultValues = {
    name: '',
    email: '',
    username: '',
    password: ''
}

function Form({ className = '', loginForm, registerForm }) {
    const { register, handleSubmit, reset, control, watch, formState: { errors, isValid } } = useForm({ mode: 'all', defaultValues });
    
    return (
        <>
            {loginForm && <form className={`${className}`}>
                                <div className="input-group mb-1">
                                    {/* USERNAME */}
                                    <span className="input-group-text"><i className="fa fa-tag"></i></span>
                                    <input 
                                    type="text"
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                    placeholder="username"
                                    {...register("username", validations.username)}
                                    />
                                    {errors.username && (<div className="invalid-feedback">{errors.username.message}</div>)}
                                </div>
                                <div className="input-group mb-1">
                                    {/* PASSWORD */}
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                    <input 
                                    type="text"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="password"
                                    {...register("password", validations.password)}
                                    />
                                    {errors.password && (<div className="invalid-feedback">{errors.password.message}</div>)}
                                </div>
                                <div>
                                    <button type="button" class="border border-dark btn btn-primary" style={{width: '100%'}}>Login</button>
                                    <div className="border-bottom" style={{height: '10px'}}></div>
                                    <div className="border-top" style={{height: '10px'}}></div>
                                    <button type="button" class="border border-dark btn btn-outline-secondary" style={{width: '100%'}}>Register</button>
                                </div>
                            </form>}
            
            {registerForm && <form className={`${className}`} onSubmit={handleSubmit}>
                                <div className="input-group mb-1">
                                    {/* NAME */}
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    <input 
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Name"
                                    {...register("name", validations.name)}
                                    />
                                    {errors.name && (<div className="invalid-feedback">{errors.name.message}</div>)}
                                </div>
                                <div className="input-group mb-1">
                                    {/* EMAIL */}
                                    <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                    <input 
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="user@example.com"
                                    {...register("email", validations.email)}
                                    />
                                    {errors.email && (<div className="invalid-feedback">{errors.email.message}</div>)}
                                </div>
                                <div className="input-group mb-1">
                                    {/* USERNAME */}
                                    <span className="input-group-text"><i className="fa fa-tag"></i></span>
                                    <input 
                                    type="text"
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                    placeholder="username"
                                    {...register("username", validations.username)}
                                    />
                                    {errors.username && (<div className="invalid-feedback">{errors.username.message}</div>)}
                                </div>
                                <div className="input-group mb-1">
                                    {/* PASSWORD */}
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                    <input 
                                    type="text"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="password"
                                    {...register("password", validations.password)}
                                    />
                                    {errors.password && (<div className="invalid-feedback">{errors.password.message}</div>)}
                                </div>
                                <button type="button" class="border border-dark btn btn-primary" style={{width: '100%'}}>Register</button>
                            </form>}
        </>
    );
}

export default Form;