import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition'
import { mapStudioSpeechToActions } from './StudioSpeech'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
}

class Dictaphone extends Component {
  state = {
    action: '',
  }

  componentDidUpdate() {
    const { transcript, resetTranscript } = this.props
    const speechAction = mapStudioSpeechToActions(transcript)

    if (speechAction.reset) {
      resetTranscript()
    }

    switch (speechAction.type) {
      case 'SHOOT':
        this.setState({ action: 'shooting' })
        break
      case 'TURN':
        this.setState({ action: 'turning' })
        break
    }
  }

  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition,
    } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    console.log(this.props.interimTranscript)

    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <div>{transcript}</div>
        <div>{this.state.action}</div>
        <div>{JSON.stringify(this.props, null, 2)}</div>
      </div>
    )
  }
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(Dictaphone)
