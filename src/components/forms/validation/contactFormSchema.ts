import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Primer nombre es requerido")
    .min(3, "Debe ser de al menos 3 caracteres"),
  lastName: yup
    .string()
    .required("Primer Apellido es requerido")
    .min(3, "Debe ser de al menos 3 caracteres"),
  email: yup
    .string()
    .required("Correo electrónico es requerido")
    .email("Correo electrónico no válido"),
  subject: yup
    .string()
    .required("Asunto es requerido")
    .min(10, "Debe ser de al menos 10 caracteres"),
  message: yup
    .string()
    .required("Mensaje es requerido")
    .min(50, "Debe ser de al menos 50 caracteres"),
});
