import React, { Component } from "react";
import QuestionService from "../services/questionService";
import QuestionsForm from "./questionsForm";
import QuestionsTable from "./questionsTable";

class Questions extends Component {
  state = {
    questions: [],
  };

  async componentDidMount() {
    this.getQuestions();
  }

  async getQuestions() {
    const { data: questions } = await QuestionService.getAllQuestions();
    this.setState({ questions });
  }

  addQuestion = async (question) => {
    await QuestionService.addQuestion(question);
    this.getQuestions();
  };

  render() {
    return (
      <div className="container questions">
        <div className="side">
          <h1>Questions List</h1>
          <QuestionsTable questions={this.state.questions} />
        </div>
        <div className="side">
          <h1>Add a new question</h1>
          <QuestionsForm onAddQuestion={this.addQuestion} />
        </div>
      </div>
    );
  }
}

export default Questions;
