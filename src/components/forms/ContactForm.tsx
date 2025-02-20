"use client";

import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import { contactFormSchema } from "./validation/contactFormSchema";
import { Button } from "../ui/Button";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

const services = [
  {
    service: "Compra",
  },
  {
    service: "Venta",
  },
  {
    service: "Renta",
  },
  {
    service: "Administración",
  },
  {
    service: "Otros",
  },
];

export default function ContactForm() {
  const submitForm = async (
    values: FormValues,
    formik: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    formik.resetForm();
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      }}
      validationSchema={contactFormSchema}
      onSubmit={submitForm}
    >
      {(formik) => (
        <form className="space-y-8" onSubmit={formik.handleSubmit} noValidate>
          {/* FIELD SECTION */}
          <div className="space-y-6">
            {/* MATRIZ STRUCTURE */}
            <div className="space-y-6">
              <div className="w-full flex flex-col sm:flex-row gap-6">
                {/* FIRST NAME */}
                <label
                  htmlFor="first-name"
                  className="w-full sm:w-1/2 flex flex-col"
                >
                  <span className="text-sm uppercase tracking-wide">
                    Nombre
                  </span>
                  <Field
                    name="firstName"
                    type="text"
                    id="first-name"
                    className="text-sm border-b border-solid border-[#f93a97] pb-1 outline-none"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-600 text-xs"
                  />
                </label>
                {/* LAST NAME */}
                <label
                  htmlFor="last-name"
                  className="w-full sm:w-1/2 flex flex-col"
                >
                  <span className="text-sm uppercase tracking-wide">
                    Apellido
                  </span>
                  <Field
                    name="lastName"
                    type="text"
                    id="last-name"
                    className="text-sm border-b border-solid border-[#f93a97] pb-1 outline-none"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-600 text-xs"
                  />
                </label>
              </div>
              <div className="w-full flex flex-col sm:flex-row gap-6">
                {/* EMAIL */}
                <label
                  htmlFor="email"
                  className="w-full sm:w-1/2 flex flex-col"
                >
                  <span className="text-sm uppercase tracking-wide">
                    Correo electrónico
                  </span>
                  <Field
                    name="email"
                    type="email"
                    id="email"
                    className="text-sm border-b border-solid border-[#f93a97] pb-1 outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-xs"
                  />
                </label>
                {/* PHONE NUMBER */}
                <label
                  htmlFor="phone-number"
                  className="w-full sm:w-1/2 flex flex-col"
                >
                  <div className="text-sm uppercase tracking-wide">
                    Número de teléfono{" "}
                    <span className="text-xs lowercase">(opcional)</span>
                  </div>
                  <Field
                    name="phoneNumber"
                    type="phone-number"
                    id="phoneNumber"
                    className="text-sm border-b border-solid border-[#f93a97] pb-1 outline-none"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-600 text-xs"
                  />
                </label>
              </div>
            </div>
            {/* COLUMN STRUCTURE */}
            <div className="space-y-6">
              {/* SERVICES */}
              <label htmlFor="service" className="flex flex-col">
                <span className="text-sm uppercase tracking-wide">
                  Servicios
                </span>
                <Field
                  name="service"
                  as="select"
                  className="peer text-sm border-b border-solid border-[#f93a97] pb-1 outline-none"
                >
                  {services.map((item, id) => (
                    <option value={item.service} key={id} className="text-sm">
                      {item.service}
                    </option>
                  ))}
                </Field>
              </label>
              {/* SUBJECT */}
              <label htmlFor="subject" className="flex flex-col">
                <span className="text-sm uppercase tracking-wide">Asunto</span>
                <Field
                  name="subject"
                  type="text"
                  id="subject"
                  className="text-sm border-b border-solid border-[#f93a97] pb-1 outline-none"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-600 text-xs"
                />
              </label>
              {/* MESSAGE */}
              <label htmlFor="message" className="flex flex-col">
                <span className="text-sm uppercase tracking-wide">Mensaje</span>
                <Field
                  name="message"
                  type="text"
                  as="textarea"
                  rows={6}
                  id="message"
                  className="text-sm border-b border-solid border-[#f93a97] pb-1 outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-600 text-xs"
                />
              </label>
            </div>
          </div>
          {/* BUTTON SECTION */}
          <div className="w-full flex justify-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={!formik.isValid || formik.dirty}
            >
              Enviar mensaje
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}
