import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = `https://app.glitchtip.com/my-org-8y/api/12117/envelope/?sentry_version=7&sentry_key=f2e6bc7ffcd249ea825e4a8346d92457&sentry_client=sentry.javascript.nextjs%2F9.2.0`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        Accept: "*/*",
      },
      // Since GET doesn't carry a body, you might use searchParams or cookies to pass data
      body: "", // Leaving blank to match structure—consider reworking this for GET use
    });

    return NextResponse.json({ status: "ok" });
  } catch (error: any) {
    console.error("GlitchTip tunnel error:", error);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
