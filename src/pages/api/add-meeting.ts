// pages/api/add-meeting.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { ruangMeetingData } from "@/data/RuangMeetingData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      id,
      unit,
      ruangMeeting,
      kapasitas,
      tanggalRapat,
      waktuStart,
      waktuEnd,
      jumlahPeserta,
      jenisKonsumsi,
    } = req.body;

    // Validate request data
    if (
      !id ||
      !unit ||
      !ruangMeeting ||
      !kapasitas ||
      !tanggalRapat ||
      !waktuStart ||
      !waktuEnd ||
      !jumlahPeserta ||
      !Array.isArray(jenisKonsumsi)
    ) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    // Add the new meeting to the data array
    ruangMeetingData.push({
      id,
      unit,
      ruangMeeting,
      kapasitas,
      tanggalRapat,
      waktuStart,
      waktuEnd,
      jumlahPeserta,
      jenisKonsumsi,
    });

    return res.status(201).json({
      message: "Meeting added successfully",
      data: ruangMeetingData,
    });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
