import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    participants: [],
}

export const ParticipantSlice = createSlice({
    name: "participants",
    initialState,
    reducers: {
        setParticipant: (state, action) => {
            state.participants = action.payload;
        }
    }
})

export const { setParticipant } = ParticipantSlice.actions;