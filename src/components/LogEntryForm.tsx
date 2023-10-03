import { useMultistepForm } from "../useMultiStepForm";

const LogEntryForm = () => {
  const { steps, currentStepIndex, next, isLastStep } = useMultistepForm([
    <div>One</div>,
    <div>Two</div>
  ]);
  return (
    <div>
      <form>
        <div>
          {" "}
          {currentStepIndex+1} / {steps.length}
        </div>
        <button autoFocus type="button" onClick={next}>{isLastStep ? "👍" : "I did the thing!"}</button>
      </form>
    </div>
  );
};

export default LogEntryForm;
