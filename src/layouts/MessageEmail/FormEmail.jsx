import { Formik, Form, ErrorMessage, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import {
    SendMail
} from "../../reduxs/apis/SendMail.js";
import Loading from "../../layouts/Loading";

export default function FormEmail(){

    const email = useSelector(state => state.email);
    const dispath = useDispatch();

    const validate = Yup.object().shape({

        subtitle: Yup.string()
            .min(6, "Must be 6 characters or less.")
            .max(100, "Must be 100 characters or less.")
            .required("Please provide a valid subtitle."),

        content: Yup.string()
            .min(6, "Must be 6 characters or less.")
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
                            {
                                email.loading
                                        ? <div>
                                            <span style={{fontSize: `14px`, color: `#C33`}}>Give us a second...</span>&nbsp;
                                            <span className="send__mail"><Loading /></span>
                                        </div>
                                        :<button title="Send mail for me" 
                                                type="submit"
                                                className="send__mail">
                                            <i className="icon-paper-plane"></i>
                                        </button>
                            }
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}