/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Flower from "./flower";

/* eslint-disable jsx-a11y/alt-text */
function Akad() {
  return (
    <div id="resepsi">
      <div data-aos="fade-up" className="akad container">
        {/* <Flower /> */}
        <div className="akad-content">
          <div className="header">
            <p>Akad</p>
          </div>
          <div className="jam">
            <div className="jam-header">
              <p>Pukul:</p>
            </div>
            <div>
              <p>{"08:00 - 10:00"} WIB</p>
            </div>
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
              <p>
                Jl. Mawar 2 RT.005/014 Bintaro, Pesanggrahan, Jakarta Selatan
              </p>
            </div>
          </div>

          {/* <div className="live-button">
            <a
              //  href="https://www.instagram.com/setyariniarum/"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/setyariniarum/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Live Stream
            </a>
          </div> */}
        </div>

        <style jsx>{`
          .akad {
            margin-bottom: 3rem;
          }
          .akad-content {
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

          .jam {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
          }

          .jam-header {
            font-weight: bold;
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

          .live-button {
            margin-top: 0.5rem;
          }

          a {
            padding: 0.5rem 0.75rem;
            background-color: rgb(191, 146, 112);
            border-radius: 0.25rem;
            color: black;
            text-decoration: none; /* no underline */
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
              rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Akad;
