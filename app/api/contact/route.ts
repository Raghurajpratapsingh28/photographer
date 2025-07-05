import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Log environment variables (remove this in production)
console.log('Environment variables loaded:', {
  hasEmailUser: !!process.env.EMAIL_USER,
  hasEmailPass: !!process.env.EMAIL_PASS,
});

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  console.log('API route hit');
  console.log('Environment variables:', {
    hasEmailUser: !!process.env.EMAIL_USER,
    hasEmailPass: !!process.env.EMAIL_PASS,
  });

  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle OPTIONS request for CORS
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { headers });
  }

  try {
    // Verify environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS,
      });
      return NextResponse.json(
        { error: 'Email configuration is missing. Please check your environment variables.' },
        { status: 500, headers }
      );
    }

    const body = await request.json();
    console.log('Received request body:', body);

    const { name, email, phone, eventType, date, message } = body;

    // Validate required fields
    if (!name || !email || !eventType || !date || !message) {
      console.error('Missing required fields:', { name, email, eventType, date, message });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'raghurajpratap2810@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://imgs.search.brave.com/ep2X3-OqMb_O6BmYxm_EIF3UwI17qHOG9n5VVKZ5PGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/ODc2Njk4Mi92ZWN0/b3IvdmVjdG9yLWRl/c2lnbi10ZW1wbGF0/ZS1zdW4tZG90cy1p/Y29uLXNpZ24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVQz/dU4zSEtGU1hvVG56/NFNnc3d6U3YzTEEx/Z3pTTE1sZUthOElM/amhSY0U9" alt="Surya Photography Logo" style="width: 150px; height: auto;"/>
          </div>

          <h2 style="color: #333; font-size: 28px; margin-bottom: 25px; text-align: center; font-family: 'Playfair Display', serif;">New Photography Inquiry</h2>
          
          <div style="margin-bottom: 30px;">
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #9f7a2f;">
              <h3 style="color: #9f7a2f; font-size: 20px; margin: 0 0 15px 0;">Client Details</h3>
              <p style="margin: 8px 0;"><span style="color: #666; font-weight: bold; min-width: 100px; display: inline-block;">Name:</span> ${name}</p>
              <p style="margin: 8px 0;"><span style="color: #666; font-weight: bold; min-width: 100px; display: inline-block;">Email:</span> ${email}</p>
              <p style="margin: 8px 0;"><span style="color: #666; font-weight: bold; min-width: 100px; display: inline-block;">Phone:</span> ${phone || 'Not provided'}</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #9f7a2f;">
              <h3 style="color: #9f7a2f; font-size: 20px; margin: 0 0 15px 0;">Event Information</h3>
              <p style="margin: 8px 0;"><span style="color: #666; font-weight: bold; min-width: 100px; display: inline-block;">Type:</span> ${eventType.charAt(0).toUpperCase() + eventType.slice(1)}</p>
              <p style="margin: 8px 0;"><span style="color: #666; font-weight: bold; min-width: 100px; display: inline-block;">Date:</span> ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #9f7a2f;">
              <h3 style="color: #9f7a2f; font-size: 20px; margin: 0 0 15px 0;">Message</h3>
              <p style="margin: 8px 0; line-height: 1.8; color: #444;">${message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://your-domain.com/admin/bookings" style="background-color: #9f7a2f; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold;">View in Dashboard</a>
          </div>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
            <table style="width: 100%;">
              <tr>
                <td style="text-align: center;">
                  <img src="https://imgs.search.brave.com/ep2X3-OqMb_O6BmYxm_EIF3UwI17qHOG9n5VVKZ5PGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/ODc2Njk4Mi92ZWN0/b3IvdmVjdG9yLWRl/c2lnbi10ZW1wbGF0/ZS1zdW4tZG90cy1p/Y29uLXNpZ24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVQz/dU4zSEtGU1hvVG56/NFNnc3d6U3YzTEEx/Z3pTTE1sZUthOElM/amhSY0U9" alt="Camera Icon" style="width: 24px; height: 24px; margin-bottom: 10px;"/>
                  <p style="margin: 0; color: #666; font-size: 14px;">Surya Photography</p>
                </td>
                <td style="text-align: center;">
                  <img src="https://imgs.search.brave.com/ep2X3-OqMb_O6BmYxm_EIF3UwI17qHOG9n5VVKZ5PGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/ODc2Njk4Mi92ZWN0/b3IvdmVjdG9yLWRl/c2lnbi10ZW1wbGF0/ZS1zdW4tZG90cy1p/Y29uLXNpZ24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVQz/dU4zSEtGU1hvVG56/NFNnc3d6U3YzTEEx/Z3pTTE1sZUthOElM/amhSY0U9" alt="Location Icon" style="width: 24px; height: 24px; margin-bottom: 10px;"/>
                  <p style="margin: 0; color: #666; font-size: 14px;">Your Studio Address</p>
                </td>
                <td style="text-align: center;">
                  <img src="https://imgs.search.brave.com/ep2X3-OqMb_O6BmYxm_EIF3UwI17qHOG9n5VVKZ5PGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/ODc2Njk4Mi92ZWN0/b3IvdmVjdG9yLWRl/c2lnbi10ZW1wbGF0/ZS1zdW4tZG90cy1p/Y29uLXNpZ24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVQz/dU4zSEtGU1hvVG56/NFNnc3d6U3YzTEEx/Z3pTTE1sZUthOElM/amhSY0U9" alt="Phone Icon" style="width: 24px; height: 24px; margin-bottom: 10px;"/>
                  <p style="margin: 0; color: #666; font-size: 14px;">Your Phone Number</p>
                </td>
              </tr>
            </table>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://instagram.com/your-handle" style="text-decoration: none; margin: 0 10px;"><img src="https://your-domain.com/instagram.png" alt="Instagram" style="width: 32px; height: 32px;"/></a>
            <a href="https://facebook.com/your-page" style="text-decoration: none; margin: 0 10px;"><img src="https://your-domain.com/facebook.png" alt="Facebook" style="width: 32px; height: 32px;"/></a>
            <a href="https://twitter.com/your-handle" style="text-decoration: none; margin: 0 10px;"><img src="https://your-domain.com/twitter.png" alt="Twitter" style="width: 32px; height: 32px;"/></a>
          </div>

          <div style="font-size: 12px; color: #999; text-align: center; margin-top: 30px;">
            <p style="margin: 5px 0;">© ${new Date().getFullYear()} Surya Photography. All rights reserved.</p>
            <p style="margin: 5px 0;">This is an automated email from your website's contact form</p>
          </div>
        </div>
      `,
    };

    console.log('Attempting to send email...');
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Detailed error:', error);
    
    // Return more detailed error message
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'An unexpected error occurred while sending the email';

    return NextResponse.json(
      { 
        error: errorMessage,
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500, headers }
    );
  }
} 