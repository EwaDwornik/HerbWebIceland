import React from 'react';
import {Formik, Field, Form, FormikHelpers} from "formik";
import * as Yup from 'yup';
import {ContactValues} from "../model";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";


const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short')
        .max(50, 'Too long')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    subject: Yup.string().min(10, 'Too short').required('Required'),
    message: Yup.string().min(20, 'Too short').required('Required'),
});

// Simple contact page.
function Contact() {

    return (
        <>
            <Navigation/>
            <div className="contact-background">
                <div className="contact-box animated bounceInLeft">
                    <div className="center-element">
                        <h1>Contact us if you want to cooperate!</h1>
                    </div>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            subject: '',
                            message: ''
                        }}
                        validationSchema={ContactSchema}
                        onSubmit={(
                            values: ContactValues,
                            {setSubmitting}: FormikHelpers<ContactValues>
                        ) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 500);
                        }}
                    >
                        {({errors, touched}) => (
                            <Form className="contactForm ">
                                <div className="pos-relative">
                                    <label htmlFor="Name">name</label>
                                    <Field className="effect-green-longer" name="name" placeholder="Ewok"/>
                                    <span className="focus-border"></span>
                                    {errors.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="pos-relative">
                                    <label htmlFor="email">e-mail</label>
                                    <Field
                                        className="effect-green-longergreen"
                                        name="email"
                                        placeholder="ewok@sw.com"
                                        type="email"
                                    />
                                    <span className="focus-border"></span>
                                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                </div>
                                <div className="pos-relative">
                                    <label htmlFor="subject">subject</label>
                                    <Field className="effect-green-longer" name="subject" placeholder="subject"/>
                                    {errors.subject ? (
                                        <div>{errors.subject}</div>
                                    ) : null}
                                    <span className="focus-border"></span>
                                </div>
                                <div className="pos-relative">
                                    <label htmlFor="message">message</label>
                                    <Field className="effect-green-longer" component='textarea' row={7} id="message"
                                           name="message"
                                           placeholder="message"/>
                                    <span className="focus-border"></span>
                                    {errors.message ? (
                                        <div>{errors.message}</div>
                                    ) : null}

                                </div>
                                <button type="submit">Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="credits">
                    photo by <Link to="https://www.pexels.com/@madsdonald/" target="_blank">Mads Thomsen</Link>
                </div>
            </div>
        </>

    );
}

export default Contact;





