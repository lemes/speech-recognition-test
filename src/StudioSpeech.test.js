import { mapStudioSpeechToActions } from './StudioSpeech'

test('mapStudioSpeechToActions', () => {
  expect(mapStudioSpeechToActions('studio shoot')).toEqual({
    type: 'SHOOT',
    reset: true,
  })
  expect(mapStudioSpeechToActions('studio turn')).toEqual({
    type: 'TURN',
    reset: true,
  })
  expect(mapStudioSpeechToActions('shoot')).toEqual({})
  expect(mapStudioSpeechToActions('bazinha')).toEqual({})
  expect(mapStudioSpeechToActions('studio')).toEqual({})
})
