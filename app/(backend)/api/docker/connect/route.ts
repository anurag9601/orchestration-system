import { NextResponse } from "next/server";
import docker from "@/connections/docker";

export function GET() {
    try {
        try {
            const dockerVersion = docker.version();

            return NextResponse.json({ success: true, message: "Docker is running and connected successfully.", version: dockerVersion }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ success: false, error: "Docker is not running or the required settings are disabled. Please start Docker and enable the necessary configuration." }, { status: 400 });
        }
    } catch (error) {
        console.log("Something went wrong in /api/docker/connect API.", error);
        return NextResponse.json({ success: false, error: error }, { status: 500 });
    }
}