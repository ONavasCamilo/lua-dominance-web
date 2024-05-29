import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    participant: {},
}

export const ParticipantSlice = createSlice({
    name: "participant",
    initialState,
    reducers: {
        setParticipant: (state, action) => {
            state.participant = action.payload;
        }
    }
})

export const { setParticipant } = ParticipantSlice.actions;