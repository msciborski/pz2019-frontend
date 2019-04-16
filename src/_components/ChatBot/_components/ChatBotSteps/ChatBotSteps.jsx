import {AddMedicalAppointmentSteps, BasicSteps} from "./index";
import {HelpFindDoctorSteps} from "./HelpFindDoctorSteps";

const ChatBotSteps = BasicSteps.concat(AddMedicalAppointmentSteps, HelpFindDoctorSteps);

export { ChatBotSteps };