import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '../../../components/header'

describe('Tests of <Header />', () => {
    let header
    beforeAll(() => {
        header = render(<Header />)
    })

    test('Header render correctly', () => {
        header.getByText('Pure Vibes Global')
    })

})