"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const participant_controller_1 = require("../controllers/participant.controller");
const participantRouter = (0, express_1.Router)();
participantRouter.get('/', participant_controller_1.getParticipants);
exports.default = participantRouter;
