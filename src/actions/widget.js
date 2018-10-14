import { getWidgetData } from "../services/BHI-API"

export const REQUEST_FAILED = 'REQUEST_FAILED'
export const REQUEST_UPDATE = "UPDATE_WIDGETS"

export const updateWidgets = (data) => ({
  type: REQUEST_UPDATE,
  data
})

export function refreshWidgets () {
  return async function (dispatch, getState) {
    await getWidgetData()
      .then(response => {
        console.log(response)
        dispatch(updateWidgets(response))
      })
      .catch(error => {
        const mockedData = {
          'Tippy': {
            'title': 'Tippy',
            'description': 'Scavenger Hunt',
            'imageUrl': 'ec047be62531be2a93587a3a60bf3870.jpg'
          },
          'Ferry': {
            'title': 'BHI Ferry',
            'description': 'Tickets and Schedule',
            'imageUrl': '3322.jpg'
          },
          'News': {
            'title': 'Island News',
            'description': 'More storms forcasted this week.',
            'imageUrl': 'ocean-storm-matt-dobson.jpg'
          },
          'Events': {
            'title': 'BINGO Night!',
            'description': 'Tuesday @ 7pm, 23 people going',
            'imageUrl': 'crop3.jpg'
          },
          'Assistance': {
            'title': 'Island Assistance',
            'description': null,
            'imageUrl': 'photo-1502786965697-c531beea0b4a.jpeg'
          }
        }
        dispatch(requestFailed(error))
        dispatch(updateWidgets(mockedData))
      })
  }
}

export function requestFailed (status) {
  console.log(`%c ${status}`, 'background: #ff0000; color: #fff')
  return {
    type: REQUEST_FAILED,
    status,
    received_at: Date.now()
  }
}