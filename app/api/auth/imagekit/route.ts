import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

// Why is this important?
// Without this handler:

// Sensitive credentials (like the private key) would have to be sent to the client, making them vulnerable to misuse.
// There would be no way to ensure that only authorized users can upload files.

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({
  publicKey: publicKey,
  privateKey: privateKey,
  urlEndpoint: urlEndpoint,
});

/**
 * Retrieves the authentication parameters for the ImageKit service.
 * @returns {Promise<NextResponse>} The authentication parameters as a JSON response.
 */
export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
