import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

const teamMembers = [
  {
    id: "sahana",
    name: "Sahana Hegde",
    role: "Versatile Vocalist",
    img: "/assets/sahanaimg-CWM4pjtY.svg",
    bg: "/assets/mike-CQyUZ1eS.webp",
    desc: "A student of Pandit Venkatesh Alkod & Pandit Uttam Chigri, Sahana is a Versatile Vocalist with a “Vidwat Antima” qualification. Being familiar to the entire country by being a part of many reputed reality shows like “Sa Re Ga Ma Pa”, she was blessed to be musically acquainted with the legendary Shri.S P Balasubrahmanyam. With several accolades, awards, recordings with established music directors, overseas stage performances & recognitions in the field of Music, Sahana is a passionate singer with a very intricate understanding of Music. Watching her render Bhavageethes & some of her original compositions during the concert is definitely magical.",
    socials: {
      instagram: "https://www.instagram.com/sahana_s_hegde?igsh=MTM3ejN4NWZ3MW44Ng%3D%3D&utm_source=qr",
      whatsapp: "https://wa.me/916361869023",
      phone: "tel:6361869023"
    }
  },
  {
    id: "sanjay",
    name: "Sanjay R S",
    role: "Piano & Jazz Artist",
    img: "/assets/sanjayimg-BW-YZ-mf.svg",
    bg: "/assets/piano-Dzyw537Q.jpeg",
    desc: "Training under veteran Russian pianists, Natallia Kapylova & Liusya Draznik, Sanjay performs Western classical & Jazz alongside fantastic musicians across the country at various venues & events. Also exposed to Carnatic learning under Vid.Rajeeva Lochana & Vid.Vani Manjunath, he believes in Music to be the source of world peace. With a diploma in Piano performance from the London College of Music, he has students studying under him internationally. With a solid foundation in music, Sanjay is an able Music Producer & Composer and has also worked with Sahana to produce some of her originals.",
    socials: {
      instagram: "https://www.instagram.com/pianomage?igsh=MTkwOGVoMHRkZWhhdw==",
      whatsapp: "https://wa.me/918762313061",
      phone: "tel:+918762313061"
    }
  },
  {
    id: "madhu",
    name: "Madhu Srinivas",
    role: "Multi Percussionist",
    img: "/assets/madhuimg-D_VxnQ79.svg",
    bg: "/assets/drums-BvzPOAyP.webp",
    desc: "Being an acclaimed Multi-Percussionist, Madhu’s musical journey began with the Tabla. Achieving proficiency with a variety of percussive instruments and developing an innate sense of rhythm, Madhu plays for various Bands all over the world. He has expressed his percussive energy with renowned artists such as Shri Vasu Dixit & Ananya Bhat. Being fluent with 12 percussion instruments, he conducts Drum Circle’s, Percussive Therapy & also has his own set of students. He brings “Laya” and guides Bhaava Payana through a variety of complex time signatures.",
    socials: {
      instagram: "https://www.instagram.com/madhu_srinivas?igsh=MTM2NzYwNjI5ZjZlZjg5",
      whatsapp: "https://wa.me/919740604271",
      phone: "tel:+919740604271"
    }
  }
];

export default function Team() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <section className="section team-section pt-5 mt-5">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-5 team-heading" data-aos="fade-down">
            MEET THE MASTERS
          </h2>
        </div>

        {teamMembers.map((member, idx) => (
          <div
            className="movie_card"
            id={member.id}
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            key={member.id}
          >
            <div className="info_section">
              <div className="movie_header">
                <img
                  className="locandina"
                  src={member.img}
                  alt={member.name}
                />
                <div className="header_content">
                  <h1>{member.name}</h1>
                  <h4>{member.role}</h4>
                </div>
              </div>
              <div className="movie_desc">
                <p className="text">{member.desc}</p>
              </div>
              <div className="movie_social">
                <ul>
                  <li>
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'inherit' }}
                      title="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href={member.socials.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'inherit' }}
                      title="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                  </li>
                  {member.socials.phone && member.socials.phone !== 'tel:' && (
                    <li>
                      <a
                        href={member.socials.phone}
                        style={{ color: 'inherit' }}
                        title="Call"
                      >
                        <FaPhone />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div
              className="blur_back"
              style={{ background: `url(${member.bg})` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
