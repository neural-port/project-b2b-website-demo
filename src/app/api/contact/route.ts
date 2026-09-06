import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function validateName(value: unknown): string {
  if (typeof value !== "string" || value.trim().length < 2) {
    throw new Error("Name must be at least 2 characters.");
  }
  if (value.trim().length > 100) {
    throw new Error("Name must not exceed 100 characters.");
  }
  return value.trim();
}

function validateEmail(value: unknown): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error("Email is required.");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value.trim())) {
    throw new Error("Please provide a valid email address.");
  }
  return value.trim().toLowerCase();
}

function validateMessage(value: unknown): string {
  if (typeof value !== "string" || value.trim().length < 10) {
    throw new Error("Message must be at least 10 characters.");
  }
  if (value.trim().length > 2000) {
    throw new Error("Message must not exceed 2000 characters.");
  }
  return value.trim();
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json." },
        { status: 415 }
      );
    }

    const body: ContactPayload = await request.json();

    const name = validateName(body.name);
    const email = validateEmail(body.email);
    const message = validateMessage(body.message);

    return NextResponse.json(
      {
        success: true,
        data: { name, email, message: message.slice(0, 50) + "..." },
      },
      { status: 200 }
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Invalid request.";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
