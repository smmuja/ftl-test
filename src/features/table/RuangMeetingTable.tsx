import { RuangMeetingDataProps } from "@/types/RuangMeetingDataProps";

export function RuangMeetingTable({
  ruangMeetingData,
}: {
  ruangMeetingData: RuangMeetingDataProps[];
}) {
  return (
    <>
      <div className="">
        <table>
          <thead>
            <tr>
              <th className="py-2 px-2 md:px-4 border-b">UNIT</th>
              <th className="py-2 px-2 md:px-4 border-b">RUANG MEETING</th>
              <th className="py-2 px-2 md:px-4 border-b">KAPASITAS</th>
              <th className="py-2 px-2 md:px-4 border-b">TANGGAL RAPAT</th>
              <th className="py-2 px-2 md:px-4 border-b">WAKTU</th>
              <th className="py-2 px-2 md:px-4 border-b">JUMLAH PESERTA</th>
              <th className="py-2 px-2 md:px-4 border-b">JENIS KONSUMSI</th>
            </tr>
          </thead>
          <tbody>
            {ruangMeetingData.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="py-2 px-2 md:px-4 border-b">{item.unit}</td>
                  <td className="py-2 px-2 md:px-4 border-b">
                    {item.ruangMeeting}
                  </td>
                  <td className="py-2 px-2 md:px-4 border-b">
                    {item.kapasitas}
                  </td>
                  <td className="py-2 px-2 md:px-4 border-b">
                    {item.tanggalRapat}
                  </td>
                  <td className="py-2 px-2 md:px-4 border-b">{`${item.waktuStart} s/d ${item.waktuEnd}`}</td>
                  <td className="py-2 px-2 md:px-4 border-b">
                    {item.jumlahPeserta}
                  </td>
                  <td className="py-2 px-2 md:px-4 border-b">
                    {item.jenisKonsumsi}
                  </td>
                  <td className="py-2 px-2 md:px-4 border-b"></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
