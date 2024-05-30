import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    login: false,
    participant: {},
    token: null
}

export const ParticipantSlice = createSlice({
    name: "participant",
    initialState,
    reducers: {
        setParticipant: (state, action) => {
            state.login = true;
            state.participant = action.payload.participant;
            state.token = action.payload.token
        },
        setParticipantLogOut: (state, action) => {
            state.login = false;
            state.participant = action.payload;
            state.token = null;
        }
    }
})

export const { setParticipant, setParticipantLogOut } = ParticipantSlice.actions;