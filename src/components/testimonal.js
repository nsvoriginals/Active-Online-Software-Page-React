import React from 'react'

import PropTypes from 'prop-types'

import './testimonal.css'

const Testimonal = (props) => {
  return (
    <div className="testimonal-testimonal testimonal">
      <span className="testimonal-text">{props.Quote}</span>
      <div className="testimonal-author">
        <div className="testimonal-avatar">
          <img
            alt={props.Avatar_alt}
            src={props.Avatar_src}
            className="testimonal-image"
          />
        </div>
        <div className="testimonal-user">
          <span className="testimonal-name">{props.Name}</span>
          <span className="testimonal-divider">—</span>
          <span className="testimonal-from">{props.From}</span>
        </div>
      </div>
    </div>
  )
}

Testimonal.defaultProps = {
  From: 'Vista Social',
  Avatar_alt: 'image',
  Avatar_src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&ixlib=rb-1.2.1&w=200',
  Name: 'Andy Smith',
  Quote:
    '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”',
}

Testimonal.propTypes = {
  From: PropTypes.string,
  Avatar_alt: PropTypes.string,
  Avatar_src: PropTypes.string,
  Name: PropTypes.string,
  Quote: PropTypes.string,
}

export default Testimonal
