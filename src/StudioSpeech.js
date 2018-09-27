function mapStudioSpeechToActions(speechParam = '') {
  const speech = speechParam.toLowerCase()
  if (!speech.includes('studio')) {
    return {}
  }

  if (speech.includes('shoot')) {
    return { type: 'SHOOT', reset: true }
  }

  if (speech.includes('turn')) {
    return { type: 'TURN', reset: true }
  }

  return {}
}
export { mapStudioSpeechToActions }
