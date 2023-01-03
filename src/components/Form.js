import React from "react";
import {FormSection} from "./FormSection";
import {SideMenu} from "./SideMenu";
import {Feedback} from "./Feedback";


export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 0,
            answers: this.initializeAnswers(),
            showFeedback: false
        };
        this.handleSectionCompleted = this.handleSectionCompleted.bind(this);
        this.handleFeedbackContinue = this.handleFeedbackContinue.bind(this);
    }

    initializeAnswers() {
        let answers = [];

        this.props.sections.forEach((section) => {
            let sectionAnswers = {};
            section.questions.forEach((question) => {
                sectionAnswers[question.id] = '';
            });
            answers.push(sectionAnswers);
        });

        return answers;
    }

    // renders

    render() {
        return (
            <div className="main-container">
                <div className="header-mobile-container">
                    <div className="header-mobile">
                        <p className="title">Calculadora de huella de carbono</p>
                    </div>
                </div>
                {this.renderSideMenu()}
                {this.renderMainContent()}
            </div>
        )
    }

    renderMainContent() {
        if (this.state.showFeedback) {
            return <Feedback percentage={this.completedQuestionsPercentage()} onContinue={this.handleFeedbackContinue}/>;
        } else {
            return (
                <FormSection questions={this.props.sections[this.state.currentSection].questions}
                             onSectionCompleted={this.handleSectionCompleted}
                             sectionName={this.props.sections[this.state.currentSection].name}
                             key={this.props.sections[this.state.currentSection].name}
                />
            )
        }
    }

    renderStepIndicatorItems() {
        const steps = Array.from(Array(this.questions.length).keys());
        return steps.map(step => {
            return <li className={this.stepIndicatorItemClassNameFor(step)} key={step}/>
        })
    }

    renderSideMenu() {
        if (this.mustShowSideMenu()) {
            return <SideMenu sections={this.props.sections} currentSectionIndex={this.state.currentSection}/>
        }
    }

    renderStepIndicator() {
        return (
            <ul className="progress">
                {this.renderStepIndicatorItems()}
            </ul>
        )
    }

    // handlers

    handleFeedbackContinue() {
        this.setState({showFeedback: false});
        this.goToNextSection();
    }

    handleSectionCompleted(sectionAnswers) {
        this.updateAnswers(sectionAnswers);
        this.finishSection();
    }

    // aux

    completedQuestionsPercentage() {
        return this.roundToMultipleOf5(this.answeredQuestionsQuantity() / this.questionsQuantity() * 100)
    }

    questionsQuantity() {
        let result = 0
        this.props.sections.forEach((section) => {
           result += section.questions.length;
        });
        return result
    }

    answeredQuestionsQuantity() {
        let result = 0
        this.props.sections.forEach((section, index) => {
            if (this.state.currentSection >= index) {
                result += section.questions.length;
            }
        });
        return result
    }

    finishSection() {
        if (this.isLastSection()) {
            this.props.onFormSubmitted(this.state.answers);
        } else {
            this.setState({showFeedback: true});
        }
    }

    goToNextSection() {
        this.setState({currentSection: this.state.currentSection + 1});
    }

    mustShowSideMenu() {
        return this.props.sections.length > 1;
    }

    updateAnswers(sectionAnswers) {
        let currentAnswers = this.state.answers;
        currentAnswers[this.state.currentSection] = sectionAnswers;
        this.setState({answers: currentAnswers});
    }

    isLastSection() {
        return this.state.currentSection === this.props.sections.length - 1;
    }

    roundToMultipleOf5(number) {
        return Math.ceil(number/5)*5;
    }
}
