import { NextRequest, NextResponse } from "next/server";

import Joi from "joi";
import axios from "axios";
import brevoClient from "@/lib/brevoClient";

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate the request body
    const { error, value } = schema.validate(body, { abortEarly: false }); // 'abortEarly: false': ensures that all validation errors are collected, not just the first one.

    if (error) {
      // Collect all error messages
      const errorMessages = error.details.map((error) => error.message);
      return NextResponse.json({ error: errorMessages }, { status: 400 });
    }

    const { firstName, lastName, email, phoneNumber, subject, message } = value;

    const emailData = {
      sender: { name: "Vara Alta", email: "noreply@vara-alta.com" }, // Use verified sender email
      replyTo: { email: email, name: `${firstName} ${lastName}` }, // User's email to the replyTo field
      to: [{ email: "admin@vara-alta.com", name: "Vara Alta" }], // Receipient company email
      subject: subject, // Email subject
      htmlContent: `
      <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `, // Email content
    };

    const response = await brevoClient.post("/smtp/email", emailData);
    console.log("Email response:", response.data);

    return NextResponse.json(
      { success: true, data: response.data },
      { status: response.status }
    );
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Brevo API Error:", error.response.data);
    } else if (error instanceof Error) {
      console.error("Error sending email:", error.message);
    }

    return NextResponse.json(
      { error: "Failed to send the email" },
      { status: 500 }
    );
  }
}
