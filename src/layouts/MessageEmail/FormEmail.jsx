import { Formik, Form, ErrorMessage, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import {
    SendMail
} from "../../reduxs/apis/SendMail.js";

export default function FormEmail(){

    const email = useSelector(state => state.email);
    const dispath = useDispatch();

    const validate = Yup.object().shape({

        subtitle: Yup.string()
        .max(100, "Must be 15 characters or less.")
        .required("Please provide a valid subtitle."),

        content: Yup.string()
        .max(300, "Must be 300 characters or less.")
        .required("Please provide a valid content.")
    });
    
    return (
        <Formik 
            initialValues={{
                subtitle: '',
                content: ''
            }}

            validationSchema={validate}
            
            onSubmit={values => {

                const message = {
                    "Destination": values.subtitle,
                    "Subject": values.subtitle,
                    "Body": values.content,
                    "EmailAddress": "binhhp20@gmail.com",
                    "NameObject": "Vu Binh"
                };

                dispath(SendMail(message));
            }}

            >
            {
                ({ errors, touched }) => (
                    
                    <Form className="meeychat__body">
                        <p className="meeychat__address">To email: binhhp20@gmail.com</p>
                        <div className="meeychat__subtitle">
                            <Field  name="subtitle"
                                    className={`form-control ${errors.subtitle && touched.subtitle ? 'is-invalid' : ''}`}
                                    placeholder="Subtile"
                                    autoComplete="off"/>

                            <ErrorMessage className="error" component="div" name="subtitle" />
                        </div>
                        <div className="meeychat__content">
                            <Field as="textarea"
                                name="content"
                                className={`form-control form-text ${errors.subtitle && touched.subtitle ? 'is-invalid' : ''}`} 
                                placeholder="Content" />
                            
                            <ErrorMessage className="error" component="div" name="content" />
                        </div>
                        <div className="meeychat__footer">
                            <button title="Send mail for me" 
                                    type="submit"
                                    className="send__mail">
                                    {
                                        email.loading ? <i className="icon-menu"></i>
                                        :<i className="icon-paper-plane"></i>
                                    }
                            </button>
                        </div>

                    </Form>
                )
            }
        </Formik>
    )
}