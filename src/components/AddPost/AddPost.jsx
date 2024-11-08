// import { Form, Formik } from "formik";
// import WrapperField from "../WrapperField/WrapperField";
// import { IoMdClose } from "react-icons/io";
// import * as Yup from "yup";
// import { useState } from "react";
// import { axiosConfig } from "../../utils/axiosConfig";
// import {  useMutation, useQueryClient } from "@tanstack/react-query";

// export default function AddPost() {
//     const queryClient = useQueryClient()

//     const addNewPost = useMutation({
//         mutationFn: (values) => axiosConfig({
//             method: 'post',
//             url: '/posts',
//             data: values
//         }),
//         onSuccess: () => {
//             queryClient.invalidateQueries({
//                 queryKey: ['post']})
//         }
//     })


//     const initialValues = {
//         imageUrl: "",
//         title: "",
//         discription: ""
//     }

//     const onSubmit = (values, { resetForm }) => {

//         if (values) {
//             console.log(values)
//             resetForm()

//             addNewPost.mutate(values)
//         }

//     }

//     const validationSchema = Yup.object({
//         imageUrl: Yup.string().required("url is required"),
//         title: Yup.string().required("name is required"),
//         discription: Yup.string().required("discription is required"),
//     })

//     const [addPost, setAddPost] = useState(false);


//     const handleClick = () => {

//         if (addPost) {
//             setAddPost(false)
//         } else {
//             setAddPost(true)
//         }
//     }


//     return (
//         <>
//             <div className={`box-form ${addPost ? "active" : ""}`} >
//                 <div className="popup"></div>
//                 <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

//                     {({ errors, touched }) => (<Form>
//                         <div>
//                             <IoMdClose onClick={handleClick} />
//                         </div>

//                         <WrapperField title={"image url"} name={"imageUrl"} type={"url"} error={errors.imageUrl} touched={touched.imageUrl} />
//                         <WrapperField title={"title"} name={"title"} type={"text"} error={errors.title} touched={touched.title} />
//                         <WrapperField title={"discription"} name={"discription"} type={"text"} error={errors.discription} touched={touched.discription} />

//                         <button type="submit" className="btn">
//                             Submit
//                         </button>
//                     </Form>
//                     )}
//                 </Formik>

//             </div>
//             <div className="box-btn">
//                 <button onClick={handleClick} className="btn">Add Post</button>
//             </div>

//         </>
//     )
// }







import { Form, Formik } from "formik";
import WrapperField from "../WrapperField/WrapperField";
import { IoMdClose } from "react-icons/io";
import * as Yup from "yup";
import { useState } from "react";
import { axiosConfig } from "../../utils/axiosConfig";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddPost() {
    const queryClient = useQueryClient();

    const addNewPost = useMutation({
        mutationFn: (values) => axiosConfig({
            method: 'post',
            url: '/posts',
            data: values
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['post']
            });
        }
    });

    const initialValues = {
        imageUrl: "",
        title: "",
        discription: ""
    };

    const onSubmit = (values, { resetForm }) => {
        if (values) {
            const postData = {
                ...values,
                createdAt: new Date().toISOString() // إضافة الوقت الحالي تلقائيًا
            };

            console.log(postData);
            resetForm();
            addNewPost.mutate(postData);
        }
    };

    const validationSchema = Yup.object({
        imageUrl: Yup.string().required("url is required"),
        title: Yup.string().required("name is required"),
        discription: Yup.string().required("discription is required"),
    });

    const [addPost, setAddPost] = useState(false);

    const handleClick = () => {
        setAddPost(!addPost);
    };

    return (
        <>
            <div className={`box-form ${addPost ? "active" : ""}`}>
                <div className="popup"></div>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {({ errors, touched }) => (
                        <Form>
                            <div>
                                <IoMdClose onClick={handleClick} />
                            </div>

                            <WrapperField title={"image url"} name={"imageUrl"} type={"url"} error={errors.imageUrl} touched={touched.imageUrl} />
                            <WrapperField title={"title"} name={"title"} type={"text"} error={errors.title} touched={touched.title} />
                            <WrapperField title={"discription"} name={"discription"} type={"text"} error={errors.discription} touched={touched.discription} />

                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="box-btn">
                <button onClick={handleClick} className="btn">Add Post</button>
            </div>
        </>
    );
}
