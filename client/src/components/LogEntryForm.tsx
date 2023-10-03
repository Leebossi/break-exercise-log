import { useMultistepForm } from "../useMultistepForm";

const LogEntryForm = () => {
  const { steps, currentStepIndex, next, back, isLastStep, isFirstStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);

  return (
    <div>
      <form>
        <div>
          {" "}
          {currentStepIndex + 1} / {steps.length}
        </div>
        {!isFirstStep && <button onClick={back}>back</button>}
        <button type="button" onClick={next}>
          {isLastStep ? "👍" : "I did the thing!"}
        </button>
      </form>
    </div>
  );
};

export default LogEntryForm;
