import { useState } from "react";

function Background() {
  return (
    <div>
      <div className="background"></div>
      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -30;
          background-color: rgb(237, 205, 187);
          height: 100vh;
          width: 100vw;
        }
      `}</style>
    </div>
  );
}

export default Background;
