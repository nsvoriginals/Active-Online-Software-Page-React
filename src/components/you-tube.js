import React from 'react'

import PropTypes from 'prop-types'

import './you-tube.css'

const YouTube = (props) => {
  return (
    <div className="you-tube-you-tube">
      <img
        alt={props.pastedImage_alt}
        src={props.pastedImage_src}
        className="you-tube-pasted-image"
      />
    </div>
  )
}

YouTube.defaultProps = {
  pastedImage_src: '/playground_assets/pastedimage-smjb.svg',
  pastedImage_alt: 'pastedImage',
}

YouTube.propTypes = {
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default YouTube
