"use server";
import { Alert } from "@/common/Alert";
import nodemailer from "nodemailer";

export async function sendMailer(val) {
  console.log("click", val);
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ankm335@gmail.com",
      pass: "gmyk nlio azxk drla",
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const send = await transport.sendMail({
      from: "ankm335@gmail.com",
      to: "anandkumarof99@gmail.com",
      subject: "test",
      html: "<h3>hello world</h3>",
    });
    console.log(send);
    Alert(send);
  } catch (error) {
    console.log(error);
  }
}
