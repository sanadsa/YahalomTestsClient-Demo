import http from "./httpService";
import env from "../environments/environment";

export interface Question {
  Id: number;
  Title: string;
}

const serverRoute = env.serverUrl + "/api/Questions/";

const QuestionService = {
  async getAllQuestions() {
    return await http.get(serverRoute + "getQuestions");
  },

  async addQuestion(question: any) {
    return await http.post(serverRoute + "addQuestion", question);
  },
};

export default QuestionService;
