import Flower from "./flower";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
function CoupleDetails(props) {
  return (
    <div id="couple">
      <div className="couple container" data-aos="fade-up">
        {/* <Flower /> */}
        <div className="couple-image-wrapper">
          <div
            className="couple-image"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <img src="/asset/nadia_cropped.jpg" alt="couple.jpg" />
            <div className="couple-image-ornamen">
              <img src="/asset/ornamen_foto.png" alt="couple.jpg" />
            </div>
          </div>
          <div
            className="couple-name"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="couple-name-girl">
              <div className="girl-name">
                <p>Nadiani Salwa</p>
              </div>
              <div>
                <p>Putri Ke-enam dari</p>
              </div>
              <div className="couple-parent">
                <p>Bapak Abdul Manap</p>
                <p>dan</p>
                <p>Ibu Mahwiyah</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-out" data-aos-delay="500">
          <p style={{ fontSize: "2em" }}>&</p>
        </div>
        <div className="couple-image-wrapper">
          <div
            className="couple-name-boy"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="boy-name">
              <p>Albiji Acadnesia</p>
            </div>
            <div>
              <p>Putra Ke-dua dari</p>
            </div>
            <div className="couple-parent">
              <p>Bapak Indarto</p>
              <p>dan</p>
              <p>Ibu Purwati</p>
            </div>
          </div>
          <div
            className="couple-image"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <img src="/asset/biji_cropped.jpg" alt="couple.jpg" />
            <div className="couple-image-ornamen">
              <img src="/asset/ornamen_foto.png" alt="couple.jpg" />
            </div>
          </div>
          {/* <div className="love-story">
            <div
              className="love-story-button"
              onClick={() => props.setDisplayLoveStory(true)}
            >
              <p>Love Story</p>
            </div>
          </div> */}
        </div>

        <style jsx>{`
          .couple {
            margin-bottom: 3rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            align-items: center;
          }

          .couple-image-wrapper {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            text-align: center;
          }

          .couple-image {
            width: 8.75rem;
            justify-content: center;
            position: relative;
          }

          .couple-image > img {
            width: inherit;
            border: 2px solid rgb(227, 183, 160);
          }

          .couple-image-ornamen {
            width: 110%;
            position: absolute;
            bottom: -2rem;
            left: -0.8rem;
          }

          .couple-image-ornamen > img {
            width: inherit;
          }

          .couple-name {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .couple-name-girl,
          .couple-name-boy {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.6rem;
          }

          .girl-name > p,
          .boy-name > p {
            font-family: "Great Vibes", serif;
            letter-spacing: 0.2rem;
            font-size: 1.6em;
            font-weight: bold;
          }

          .couple-parent {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.94em;
            font-weight: bold;
          }

          .love-story-button {
            padding: 0.5rem 0.75rem;
            background-color: rgb(191, 146, 112);
            border-radius: 0.25rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
              rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }
        `}</style>
      </div>
    </div>
  );
}

export default CoupleDetails;
