import React from "react";
import Reciclaje from 'assets/img/Reciclaje';
import {QuestionArea} from "../controllers/answers-panels/QuestionArea";


export class FormSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: this.initializeAnswers(),
            currentStep: 0,
            currentAnswerValid: true
        };
        this.handleAnswerSubmitted = this.handleAnswerSubmitted.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.goToPreviousStep = this.goToPreviousStep.bind(this);
    }

    initializeAnswers() {
        let answers = {};
        this.props.questions.forEach((question) => {
            answers[question.id] = '';
        });

        return answers;
    }

    // renders

    render() {
        return (
            <div className="form-area">
                <p className="title-section">{this.props.sectionName}</p>
                <div className="image-container">
                    {this.renderQuestionAnimation()}
                </div>
                <form id={this.currentQuestion().id} onSubmit={this.handleAnswerSubmitted}>
                    <QuestionArea question={this.currentQuestion()} answer={this.currentAnswer()}
                                  answerValid={this.state.currentAnswerValid}
                                  onChange={this.handleAnswerChange}/>
                    <input type="submit" value="Siguiente"/>
                </form>
                {this.renderStepIndicator()}
            </div>
        )
    }

    renderQuestionAnimation() {
        return React.createElement(this.currentQuestion().animation);
    }

    renderStepIndicatorItems() {
        const steps = Array.from(Array(this.props.questions.length).keys());
        return steps.map(step => {
            return <li className={this.stepIndicatorItemClassNameFor(step)} key={step}/>
        })
    }

    renderStepIndicator() {
        return (
            <ul className="section-progress">
                {this.renderStepIndicatorItems()}
            </ul>
        )
    }

    // handlers

    handleAnswerSubmitted(event) {
        event.preventDefault();
        const isValid = this.validateAnswer();
        if (isValid) {
            this.updateNextStep();
        }
    }

    validateAnswer() {
        let isValid = this.currentQuestion().validator(this.currentAnswer());
        this.setState({
            currentAnswerValid: isValid
        });
        return isValid;
    }

    handleAnswerChange(answer) {
        let answers = this.state.answers;
        answers[this.currentQuestion().id] = answer;

        this.setState({
            answers: answers
        })
    }

    // aux

    goToPreviousStep() {
        const previousStep = this.state.currentStep - 1;
        this.setState({
            currentStep: previousStep
        })
    }

    currentAnswer() {
        return this.state.answers[this.currentQuestion().id]
    }

    stepIndicatorItemClassNameFor(step) {
        let className = "progress-item";
        if (step === this.state.currentStep) {
            className = `${className} -active`;
        }

        return className;
    }

    currentQuestion() {
        return this.props.questions[this.state.currentStep];
    }

    _questionByStep(step){
        return this.props.questions[step];
    }

    _nextStep(){
        var nextStep =  this.state.currentStep + 1;
        var nextQuestion = this._questionByStep(nextStep);
        if ('onlyIf' in nextQuestion){
            var stepToCheck = nextQuestion.onlyIf[0];
            var checkFunction = nextQuestion.onlyIf[1];
            if (checkFunction(this.state.answers[stepToCheck]) === false) {
                nextStep += 1;
            }
        }
        return nextStep;  
    }

    updateNextStep() {
        if (this._isLastStep()) {
            return this._completeSection()
        }
        let nextStep =  this._nextStep();
        if (nextStep > this.props.questions.length - 1) {
            return this._completeSection()
        }
        this.setState({currentStep: nextStep});
    }

    _completeSection(){
        const answers =  this.state.answers;
        this.props.onSectionCompleted(answers);
    }

    _isLastStep() {
        return this.state.currentStep === this.props.questions.length - 1;
    }
}
