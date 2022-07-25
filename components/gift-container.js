import { useState } from "react";
import Flower from "./flower";
import rules from "./rules";

function DisplayedGift() {
  const [copyStatus, setCopyStatus] = useState(false);

  const handleCopy = (e, bankName) => {
    const bankAccount = {
      BCA: "6030519726",
      SINARMAS: "0053973183",
    };
    e.preventDefault();
    navigator.clipboard.writeText(bankAccount[bankName]);
    setCopyStatus(true);
  };

  return (
    <div>
      <div className="gift container" id="gift">
        <div className="gift-wrapper">
          <div className="header">
            <p>Love Gift</p>
          </div>
          <div className="opening">
            <p>
              Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan
              tanda kasih untuk kami, dapat melalui:
            </p>
          </div>
          <div className="rekening-wrapper">
            <div className="rekening">
              <div className="icon">
                <img src="/asset/bca.png" />
              </div>
              <div className="owner">
                a/n <strong>Amelia</strong>
              </div>
              <div className="nomor-rekening">6030519726</div>
              <div
                className="copy-rekening"
                onClick={(e) => handleCopy(e, "BCA")}
              >
                <a>
                  <strong>{copyStatus ? "Tersalin" : "Salin Rekening"}</strong>
                </a>
              </div>
            </div>
            <div className="rekening">
              <div className="icon">
                <img src="/asset/sinarmas.png" />
              </div>
              <div className="owner">
                a/n <strong>Albiji Acadnesia</strong>
              </div>
              <div className="nomor-rekening">0053973183</div>
              <div
                className="copy-rekening"
                onClick={(e) => handleCopy(e, "SINARMAS")}
              >
                <a>
                  <strong>{copyStatus ? "Tersalin" : "Salin Rekening"}</strong>
                </a>
              </div>
            </div>
          </div>
          <div className="closing">
            <p>Terimakasih</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gift {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 3rem;
          gap: 1rem;
          z-index: 10;
        }

        .gift-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          font-size: 0.8em;
          align-self: center;
        }

        .header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 2em;
          font-weight: bold;
        }

        .rekening {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin: auto;
          padding: 1rem 0;
          border-radius: 0.5rem;
        }

        .icon > img {
          width: 8rem;
          height: auto;
        }

        .owner {
          font-size: 1.5em;
        }

        .nomor-rekening {
          font-size: 1.2em;
        }

        .copy-rekening {
          padding: 0.5rem 1rem;
          background-color: rgb(227, 183, 160);
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
          border-radius: 0.25rem;
        }

        .closing {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 1.2em;
        }

        .fade-enter {
          opacity: 0;
          z-index: -30;
        }

        .fade-enter-active {
          opacity: 1;
          transition: opacity 300ms;
          z-index: -30;
        }

        .fade-exit {
          opacity: 1;
          z-index: -30;
        }

        .fade-exit-active {
          transition: opacity 300ms;
          opacity: 0;
          z-index: -30;
        }

        .gift-background {
          display: block;
          width: 100vw;
          height: 100vh;
          z-index: 42;
          background-color: rgba(0, 0, 0, 0.3);
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
}

export default DisplayedGift;
