import { NextRequest, NextResponse } from "next/server";

const path = require("path");
import { writeFile } from "fs/promises";

// const client_ID = process.env.client_ID;
// const client_sec = process.env.client_sec;
// const redirect_uri = process.env.redirect_uri;
// const REEF = process.env.refresh_token;

// const oauth2Client = new google.auth.OAuth2(
//   client_ID,
//   client_sec,
//   redirect_uri
// );

// oauth2Client.setCredentials({ refresh_token: REEF });

// const drive = google.drive({
//   version: "v3",
//   auth: oauth2Client,
// });

// async function uploadFile(filePath: string, cvName: string, type: string) {
// try {
// const res = await drive.files.create({
//   requestBody: {
//     name: cvName,
//     mimeType: "application/pdf",
//     parents: process.env[type],
//   },
//   media: {
//     mimeType: "application/pdf",
//     body: fs.createReadStream(filePath),
//   },
// });
//   const fileID = res.data.id;
//   try {
//     await drive.permissions.create({
//       fileId: fileID,
//       requestBody: {
//         role: "reader",
//         type: "anyone",
//       },
//     });
//     const result = await drive.files.get({
//       fileId: fileID,
//       fields: "webViewLink, webContentLink",
//     });
//     return NextResponse.json({
//       fileLink: result.data.webViewLink,
//       message: "success",
//     });
//   } catch (error) {
//     console.error(error);
//   }
// } catch (err) {
//   console.error(err);
// }
// }

// async function deleteFile(fileID: string) {
//   try {
//     const res = await drive.files.delete({
//       fileId: fileID,
//     });
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const cv = formData.get("cv") as File;
    const ts = formData.get("ts") as File;
    const inc = formData.get("inc") as File;

    if (!cv && !ts && !inc) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const cvName = req.headers.get("X-Type");
    if (cv) {
      const cvBytes = await cv.arrayBuffer();
      const cvBuffer = Buffer.from(cvBytes);
      const cvFilePath = path.join(
        process.cwd(),
        "public/uploads/Student/CV/",
        cvName
      );
      await writeFile(cvFilePath, cvBuffer);
    }
    const cvLink = "uploads/Student/CV/" + cvName;

    const tsName = req.headers.get("Y-Type");
    if (ts) {
      const tsBytes = await ts.arrayBuffer();
      const tsBuffer = Buffer.from(tsBytes);
      const tsFilePath = path.join(
        process.cwd(),
        "public/uploads/Student/Transcript/",
        tsName
      );
      await writeFile(tsFilePath, tsBuffer);
    }
    const tsLink = "uploads/Student/Transcript/" + tsName;

    const inName = req.headers.get("Z-Type");
    if (inc) {
      const inBytes = await inc.arrayBuffer();
      const inBuffer = Buffer.from(inBytes);
      const inFilePath = path.join(
        process.cwd(),
        "public/uploads/Student/IncomeCertificate/",
        inName
      );
      await writeFile(inFilePath, inBuffer);
    }
    const inLink = "uploads/Student/IncomeCertificate/" + inName;

    // const res = await uploadFile(
    //   filePath,
    //   file.name,
    //   req.headers.get("X-Type") as string
    // );

    // if (res?.ok) {
    //   fs.unlink(filePath, (err) => {
    //     console.log(err);
    //   });
    // }

    return NextResponse.json(
      {
        message: "file uploaded successfully",
        cvLink: cvLink,
        tsLink: tsLink,
        inLink: inLink,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "File upload failed" }, { status: 500 });
  }
}
