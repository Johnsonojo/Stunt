const qr = require("qrcode");
const fs = require("fs");

// Function to generate QR code with a given payload
async function generateQRCode(payload, fileName) {
  try {
    const qrCode = await qr.toFile(fileName, payload, {
      width: 300,
      height: 300,
      // color: { dark: "#FFFBD6", light: "#AB4B36" },
      color: { dark: "#AB4B36", light: "#FFFBD6" },
      margin: 1,
    });
    console.log("QR code generated successfully!");
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
}

// #FFFBD6
// #AB4B36
// Generate QR codes for each guest
for (let i = 1; i <= 500; i++) {
  const payload = `Guest number ${i}`; // Customize the payload as per your requirements
  const fileName = `guest_${i}_qr_code.png`; // Customize the file name format

  generateQRCode(payload, fileName);
}

// function convertISODateTime(dateTimeString) {
//   const dateTime = new Date(dateTimeString);

//   const dateOptions = { year: "numeric", month: "long", day: "numeric" };
//   const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };

//   const date = dateTime.toLocaleDateString(undefined, dateOptions);
//   const time = dateTime.toLocaleTimeString(undefined, timeOptions);

//   return { date, time };
// }

// const dateTimeString = "2023-07-04T21:27:17.058Z";
// const { date, time } = convertISODateTime(dateTimeString);

// console.log("Date:", date);
// console.log("Time:", time);
