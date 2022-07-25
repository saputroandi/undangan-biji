function Maps() {
  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };
  return (
    <div id="maps">
      <div className="maps container" data-aos="fade-up">
        <div className="gmap">
          <div className="gmap_canvas">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4587990498296!2d106.76635446304066!3d-6.28538285193825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf08e1d96da56e946!2zNsKwMTcnMDYuNyJTIDEwNsKwNDUnNTkuOCJF!5e0!3m2!1sid!2sid!4v1658651397661!5m2!1sid!2sid"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="link-button">
          <a
            // href="https://goo.gl/maps/JTubxLm8Fcjesq5Q6"
            onClick={() =>
              window.open(
                "https://goo.gl/maps/q2DFYb4YVCVmoFTg7",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Buka di Google Maps
          </a>
        </div>

        <style jsx>{`
          .maps {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 3rem;
            gap: 1rem;
            z-index: 10;
          }
          .gmap {
            border-radius: 0.5rem;
            width: 85vw;
            height: 100%;
            overflow: hidden;
          }
          iframe {
            width: 100%;
            height: 100vw;
          }

          .link-button {
            padding: 0.5rem 0.75rem;
            background-color: rgb(227, 183, 160);
            border-radius: 0.25rem;
          }

          a {
            color: rgb(0, 0, 0);
            text-decoration: none;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Maps;
