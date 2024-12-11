import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { RuangMeetingTable } from "@/features/table/RuangMeetingTable";
import { DashboardWrapper } from "@/features/dashboard/DashboardWrapper";
// import { DashboardWrapper } from "@/features/dashboard/DashboardProduct";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <DashboardWrapper />
    </>
  );
}
