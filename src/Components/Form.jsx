import 'bootstrap/dist/css/bootstrap.css';
import './form.css'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom';
function Form() {
    const loc = useLocation();
    const nav = useNavigate();
    console.log(loc.state);
    const form = useForm();
    const { register, handleSubmit, formState} = form;
    function onSubmit(values) {
        console.log(values);
        localStorage.setItem('token', "true");
        if (loc.state) {
            nav(loc.state);
        }
        else
            nav('/home');
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input
                        {...register('name', {
                            required: {
                                value: true,
                                message: "must enter data in name"
                            },
                            minLength:{
                                value:10,
                                message:'must be more than 10'                 
                                       }
                        })}
                        type="text"
                        className={`form-control`}
                        id="exampleInputName1"
                        aria-describedby="nameHelp"
                        placeholder="Enter name"

                    />
                    <br />
                    <br />
                    <small id="nameHelp" className="form-text text-danger">
                    <h6>{formState.errors.name?.message}</h6>
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email </label>
                    <input
                        {...register('email', {
                            required: {
                                value: true,
                                message: "must enter data in email"
                            },
                            pattern:{
                                value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message:'must be test@gmail.com'
                            },
                            minLength:{
                                value:10,
                                message:'must be more than 10'                 
                                       },
                             maxLength:{
                                        value:20,
                                        message:'must be less than 10'                 
                                    }

                        })}
                        type="text"
                        className={`form-control`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"

                    />
                    <br />
                    <br />
                    <small id="emailHelp" className="form-text text-danger">
                    <h6>{formState.errors.email?.message}</h6>
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input

                        {...register('pass',{
                            required: {
                                value: true,
                                message: "must enter data in pass"
                            },
                            pattern:{
                                value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                message:'must be Abjjhb@123'
                            },
                            minLength:{
                                value:10,
                                message:'must be more than 10'                 
                                       },
                                       maxLength:{
                                        value:15,
                                        message:'must be less than 10'                 
                                               }
        

                        })}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                     <br />
                    <br />
                    <small id="passHelp" className="form-text text-danger">
                    <h6>{formState.errors.pass?.message}</h6>
                    </small>
                </div>
                
                <button type="submit" className="btn btn-secondary">
                    Submit
                </button>
            </form>
           

        </div>

    )
}

export default Form