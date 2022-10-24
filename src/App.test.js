
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
require('jest-fetch-mock' ).enableMocks()
import App from './App.js'

beforeEach(() => {
    fetch.resetMocks();
})

describe('recieves values from Github REST API using jest fetch mock', () => {
test("recieves GitHub name", async () => {
fetch.mockResponseOnce(JSON.stringify({name: 'rlsnider'}))
render(<App />)
const gitHubName =  await waitFor(() => screen.getByRole('heading', { level: 2 }))
expect(gitHubName).toHaveTextContent('rlsnider')
})

test('checks url from the GitHub REST API using Jest Fetch Mock', async () => {
    
    fetch.mockResponseOnce(JSON.stringify({html_url: "https://github.com/rlsnider"}))
    render(<App />)
    const gitHubUrl = await waitFor(() => screen.getByRole('link'))
    expect(gitHubURL).toHaveAttribute('href', expect.stringContaining('github.com/rlsnider'))
})
})