import React from 'react';

export default function FloatingInstagram() {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/916361869023"
        className="whatsapp-float pulse"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        <img
          src="https://img.icons8.com/color/48/whatsapp--v1.png"
          alt="WhatsApp"
        />
      </a>
      <a
        href="https://www.instagram.com/sahana_s_hegde?igsh=MW1nY25oaDV1eWVkMA=="
        className="instagram-float pulse"
        target="_blank"
        rel="noreferrer"
        title="Follow us on Instagram"
      >
        <img
          src="https://img.icons8.com/color/48/instagram-new--v1.png"
          alt="Instagram"
        />
      </a>
    </div>
  );
}

