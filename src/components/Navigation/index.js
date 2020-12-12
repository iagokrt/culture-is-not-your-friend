import React from "react";

function Navigation () {
  return (
    <div className="navigation">
      <a href="https://www.twitter.com/iagokrt" target="_BLANK" rel="noopener noreferrer">
        buy me a coffee: '__'
      </a>
      <style jsx>{`
        .navigation {
          position: fixed;
          bottom: 30px;
          left: 30px;
          z-index: 10;
          color: white;
          font-family: sans-serif;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 0.2em;
          opacity: 0.7;
          transition: all 0.6s;
        }

        .navigation:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Navigation