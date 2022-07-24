/* eslint-disable @next/next/no-img-element */
import Flower from "./flower";
import "aos/dist/aos.css";

/* eslint-disable jsx-a11y/alt-text */

function Resepsi() {
  return (
    <div className="resepsi container" data-aos="fade-up">
      <Flower />
      <div className="resepsi-content">
        <div className="header">
          <p>Resepsi</p>
        </div>
        <div className="sesi">
          <p>10:00 - Selesai</p>
          {/* <p>Sesi II: 13:00 - 15:00</p> */}
          {/* <p>Sesi III: 15:00 - 17:00</p> */}
        </div>
        <div className="tanggal">
          <div className="tanggal-left-section">
            <p>Minggu</p>
          </div>
          <div className="tanggal-middle-section">
            <div className="tanggal-middle-first-child">
              <p>07</p>
            </div>
            <div className="tanggal-middle-last-child">
              <p>2022</p>
            </div>
          </div>
          <div className="tanggal-right-section">
            <p>Agustus</p>
          </div>
        </div>
        <div className="alamat">
          <div className="alamat-header">
            <p>Lokasi Acara:</p>
          </div>
          <div className="alamat-nama">
            <p>Lapangan PB Bersama</p>
          </div>
          <div className="alamat-lengkap">
            <p>Jl. Mawar 2 RT.005/014 Bintaro, Pesanggrahan, Jakarta Selatan</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .resepsi {
          margin-bottom: 3rem;
        }

        .resepsi-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 2em;
          font-weight: bold;
        }

        .sesi {
          font-weight: bold;
          text-align: center;
        }

        .tanggal {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: rgb(102, 51, 0);
        }

        .tanggal-left-section {
          font-size: 2.125em;
        }

        .tanggal-middle-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.125rem;
          font-weight: bold;
        }

        .tanggal-middle-first-child {
          font-size: 2em;
        }

        .tanggal-right-section {
          font-size: 2.125em;
        }

        .alamat-header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 1.5em;
          display: flex;
          justify-content: center;

          margin: 0.5rem 0;
        }

        .alamat-nama {
          font-weight: bold;
          display: flex;
          justify-content: center;
          margin-bottom: 0.25rem;
        }

        .alamat-lengkap {
          display: flex;
          justify-content: center;
        }

        .alamat-lengkap > p {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Resepsi;
