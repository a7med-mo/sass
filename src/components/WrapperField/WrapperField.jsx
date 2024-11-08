import { ErrorMessage, Field } from "formik";
import Error from "./Error";

// eslint-disable-next-line react/prop-types
export default function WrapperField({ name, title, type, error, touched }) {
    return (
        <>
            <label htmlFor={name}>{title}</label>
            <Field type={type} name={name} placeholder={title} className={error && touched ? "errorInput" : ""}/>
            <ErrorMessage name={name}  component={Error}/>
        </>
    )
}
