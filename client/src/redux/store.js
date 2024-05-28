import { configureStore } from '@reduxjs/toolkit'
import { ParticipantSlice } from './participantSlice';

const store = configureStore({
    reducer: ParticipantSlice.reducer,
})

export default store;