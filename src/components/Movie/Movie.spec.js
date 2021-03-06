import React from 'react'
import { shallow } from 'enzyme'
import { Movie } from './Movie'
import { mockMovie } from '../../mockData/movies'
import { postData, getData, deleteData } from '../../api'
jest.mock('../../api')

describe('Movie', () => {
  let wrapper
  let setLoginPromptMock = jest.fn()
  let setFavoritesMock = jest.fn()
  let setPopupMock = jest.fn()

  beforeEach(() => {

    wrapper = shallow(
      <Movie
        movie={mockMovie}
        user={{ name: 'jon', id: 27 }}
        setLoginPrompt={setLoginPromptMock}
        setFavorites={setFavoritesMock}
        setPopup={setPopupMock}
        isPopup={true}
      />
    )

  })

  it('should pass snapshot test', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call setPopupMock 1 time when link is clicked', () => {
    wrapper.find('Link').simulate('click')
    expect(setPopupMock).toHaveBeenCalledTimes(1)
  })

  it('should call setPopupMock with false when link is clicked', () => {
    wrapper.find('Link').simulate('click')
    expect(setPopupMock).toHaveBeenCalledWith(false)
  })

  it('should call setPopup when a movie is clicked', () => {
    wrapper = shallow(
      <Movie
        movie={mockMovie}
        user={{ name: 'jon', id: 27 }}
        setLoginPrompt={setLoginPromptMock}
        setFavorites={setFavoritesMock}
        setPopup={setPopupMock}
        isPopup={false}
      />
    )
    wrapper.find('img').simulate('click')
    expect(setPopupMock).toHaveBeenCalledWith(true)
  })

  it('should call setShouldPromptLoginMock when favorite button is clicked', () => {
    wrapper.find('.favorite-btn').simulate('click')
    expect(setLoginPromptMock).toHaveBeenCalledTimes(1)
  })

  it('should call setFavoritesMock when favorite button is clicked', () => {
    expect(setFavoritesMock).toHaveBeenCalledTimes(1)
  })

  it('should call getData when favorite button is clicked', () => {
    expect(getData).toHaveBeenCalledTimes(1)
  })

  it('should call getData when favorite button is clicked', () => {
    expect(postData).toHaveBeenCalledTimes(1)
  })

  it('should call getData when favorite button is clicked', () => {
    expect(deleteData).toHaveBeenCalledTimes(0)
  })
})
