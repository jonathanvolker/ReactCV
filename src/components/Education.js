import React from 'react';

const Education = () => {
  return (
    <div className="education__container">
      <div className="education__header">
          <div className="marquee">
            <div>
              <span>&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education&nbsp;Education</span>
            </div>
          </div>
      </div>
      <ul className="education__info">
        <li>
          <div className="education__date">2003 - 2008</div>
          <div className="education__date">EET N°1</div>
          <div className="education__school">Bachiller BIES.</div>
        </li>
        <li>
          <div className="education__date">2021</div>
          <div className="education__date">Academia SoyHenry</div>
          <div className="education__school">FullStack dev.</div>
          <div className="education__date">React-NodeJS</div>
        </li>
      </ul>
    </div>
  )
}

export default Education;