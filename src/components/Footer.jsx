import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-3 footer-custom">
      <div className="container">
        <div className="mb-4">
          <a
            href="https://www.facebook.com/share/1Afrzw9ZvZ/?mibextid=wwXIfr"
            className="mx-3 nav-link d-inline footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/sahana_s_hegde?igsh=MTM3ejN4NWZ3MW44Ng%3D%3D&utm_source=qr"
            className="mx-3 nav-link d-inline footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@SahanaSHegde"
            className="mx-3 nav-link d-inline footer-link"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </div>
        <p className="mb-0 footer-copyright">
          © 2026 Sahana Hegde | designed by Gurukiran S K
        </p>
      </div>
    </footer>
  );
}
