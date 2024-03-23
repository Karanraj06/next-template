import nodemailer from 'nodemailer';

const domain = process.env.NEXT_PUBLIC_APP_URL;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendTwoFactorTokenEmail(email: string, token: string) {
  await transporter.sendMail({
    from: process.env.AUTH_USER,
    to: email,
    subject: '2FA Code',
    html: `<p>Your 2FA code: ${token}</p>`,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await transporter.sendMail({
    from: process.env.AUTH_USER,
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
}

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await transporter.sendMail({
    from: process.env.AUTH_USER,
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
}
