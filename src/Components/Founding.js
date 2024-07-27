import React from 'react';
import '../Pages/about.css';

const Founding = ({ theme }) => (
    <div className={`accordion-content ${theme}`}>
        <div className="founding-content">
            <div className="founder-image-container">
                <img 
                    src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.18169-1/12189063_899913230100856_6981209505211075988_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeHiG487pd9bPsqJvktrgjtTUkOZEHDeajdSQ5kQcN5qN2mtATy5B4A-rXUF3U13ijreWxf4zoJblRQQDorqDaWI&_nc_ohc=rGcDGS4vcNQQ7kNvgGT__X3&_nc_ht=scontent.fcmb2-2.fna&oh=00_AYBQi_eXVpf0fHgafI9bEFS42L-oryqEuywkEBxzL6x_LA&oe=66BA310B" 
                    alt="Founder" 
                    className="founder-image" 
                />
            </div>
            <div className="founding-details">
                <p>
                    Ishani Yahodha Ranganath was a distinguished Senior Lecturer at the University of Kelaniya in the Faculty of Performing Arts. Known for her exceptional talent and dedication to the art of dance, Ishani made significant contributions to the field both as an educator and as a performer. Born to renowned dancing teachers G. Ranganath and Kamala Nayana Ranganath, Ishani was deeply rooted in a legacy of artistic excellence. Her parents greatly influenced her passion and career.<br/><br/>
                    Ishani's expertise in traditional and contemporary dance forms earned her widespread acclaim. She inspired countless students through her innovative teaching methods and performances that captured the essence of cultural heritage. Her commitment to preserving and promoting the arts was evident in her numerous choreographed pieces and her active participation in cultural events and workshops.<br/><br/>
                    Tragically, Ishani Yahodha Ranganath passed away in 2016, leaving behind a rich legacy of artistic achievement and a profound impact on the dance community. Her memory continues to inspire future generations of dancers and educators.
                </p>
            </div>
        </div>
    </div>
);

export default Founding;
