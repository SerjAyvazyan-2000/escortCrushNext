import './vertical-stepper.scss'
import {FC} from "react";

export type Step = {
    id?: string | number;
    title: string;
};



interface StepS {
    steps: Step[],
    currentStep:number
}


const VerticalStepper: FC<StepS> = ({steps,currentStep}) => {
    return <div className='vertical-stepper G-flex-column'>

        {steps.map((item, idx) => {
            const index= idx + 1
            const status =
                index < currentStep ? 'done'
                    : index === currentStep ? 'current'
                        : '';

            const statusLine =
                index < currentStep ? 'done'
                    : index === currentStep ? 'half-done'
                        : '';

            return (
                <div key={index} className='stepper-item-wrapper '>
                    <div className={`vertical-stepper-item G-align-center ${status}  `}>
                        <div className='stepper-number  G-center'>
                            <span>{index}</span>

                            <i className='icon icon-check'></i>
                        </div>
                        <p>{item.title}</p>
                    </div>
                    {index  !== steps.length && <div className={`stepper-line ${statusLine}`}></div>}

                </div>
            )
        })}


    </div>
};

export default VerticalStepper;