import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  participant: {},
  token: null,
  participations: [],
};

export const ParticipantSlice = createSlice({
  name: "participant",
  initialState,
  reducers: {
    setParticipant: (state, action) => {
      state.login = true;
      state.participant = action.payload.participant;
      state.token = action.payload.token;
    },
    setParticipantLogOut: (state, action) => {
      state.login = false;
      state.participant = action.payload;
      state.token = null;
    },
    addParticipation: (state, action) => {
      return {
        ...state,
        participations: [...state.participations, action.payload],
      };
    },
    setParticipationLogOut: (state, action) => {
      state.participations = action.payload;
    },
    setParticipantDiscord: (state, action) => {
      state.participant.discord = action.payload
    }
  },
});

export const {
  setParticipant,
  setParticipantLogOut,
  addParticipation,
  setParticipationLogOut,
  setParticipantDiscord
} = ParticipantSlice.actions;
