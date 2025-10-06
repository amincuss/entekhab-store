// src/app/api/proxy/[...all]/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  return proxyHandler(req, "GET");
}

export async function POST(req: NextRequest) {
  return proxyHandler(req, "POST");
}

async function proxyHandler(req: NextRequest, method: "GET" | "POST") {
  try {
    // مسیر دقیق API خارجی
    const url = new URL(req.url);
    const path = url.pathname.replace("/api/proxy/", "");

    // Query params
    const params: Record<string, string> = {};
    url.searchParams.forEach((value, key) => (params[key] = value));

    // داده POST
    const data = method === "POST" ? await req.json() : undefined;

    // مقادیر حساس از ENV
    const callerId = process.env.NEXT_API_CALLER_ID;
    const password = process.env.NEXT_API_PASSWORD;

    if (!callerId || !password) {
      return NextResponse.json(
        { message: "Server credentials missing" },
        { status: 500 }
      );
    }

    // ارسال درخواست به API خارجی
    const response = await axios({
      method,
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}`,
      headers: {
        "Caller-Id": callerId,
        Password: password,
        Accept: "application/json",
      },
      params,
      data,
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: unknown) {
    let message = "Unknown error";
    let status = 500;

    if (axios.isAxiosError(error)) {
      // خطای Axios
      message = error.response?.data?.Message || error.message;
      status = error.response?.status || 500;
    } else if (error instanceof Error) {
      // خطای معمولی JS
      message = error.message;
    }

    return NextResponse.json({ message }, { status });
  }
}