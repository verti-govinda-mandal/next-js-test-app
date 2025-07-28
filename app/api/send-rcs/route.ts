// app/api/send-rcs/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Twilio } from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID!;

const client = new Twilio(accountSid, authToken);

export async function POST(req: NextRequest) {
  try {
    const { to, body } = await req.json();

    if (!to || !body) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: to and body' },
        { status: 400 }
      );
    }

    const message = await client.messages.create({
      to,
      body,
      messagingServiceSid,
      mediaUrl: ['https://golfdistrict.com/wp-content/uploads/2024/07/img-list-tee-times-768x719.png'], // Add media URLs if needed
    });

    return NextResponse.json({ success: true, sid: message.sid }, { status: 200 });
  } catch (error) {
    console.error('Twilio message send error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
