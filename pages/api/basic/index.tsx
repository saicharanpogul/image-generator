/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from "@vercel/og";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: "experimental-edge",
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { searchParams } = new URL(req?.url as string);
  const message = searchParams.get("message");
  const length = message?.length;
  if (length && length > 250) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <svg width="0" height="0" viewBox="0 0 512 512"></svg>
          <div
            style={{ marginTop: 40, textAlign: "center", padding: "0 40px" }}
          >
            Max length is 250
          </div>
        </div>
      ),
      { height: 512, width: 512 }
    );
  }
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <svg width="0" height="0" viewBox="0 0 512 512"></svg>
        <div style={{ marginTop: 40, textAlign: "center", padding: "0 40px" }}>
          {message}
        </div>
      </div>
    ),
    { height: 512, width: 512 }
  );
};
