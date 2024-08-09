"use server";
import nodemailer from "nodemailer";

let transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_USERNAME,
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
});
export async function sendMailer(val) {
  console.log("click", val);
  try {
    const testResult = await transport.verify();
    // console.log(testResult);
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
    if(send!=null){
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
}
