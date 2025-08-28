import './inputBlock.scss'
import type {FC} from "react";

interface InputBlockProps {
    inputTitle?: string;
    name: string;
    tagP?:string;
    tagSpan?:string;
    variant:'white' | 'lightPeach';
    className?: string;
    placeholder?: string;
    iconCheck?: boolean;

}


const InputBlock:FC<InputBlockProps> = ({inputTitle, name,placeholder, tagSpan,variant,className,tagP,iconCheck}) => {
    return <div className={`${className} input-block`}>
        <div className='input-title-wrapper G-align-center'>
            {iconCheck  &&  <div className='G-center'>
                <i className='icon icon-check'></i>
            </div>}

            <p className='input-title'>{inputTitle}</p>
        </div>
        <label className={`input-label ${variant}`}>
            <input type="text" placeholder={placeholder} name={name}/>
        </label>
        {tagP &&
            <div className='input-tags G-align-center'>
                <i className='icon icon-info'></i>
                <p>{tagP}</p>
                {tagSpan && <span>{tagSpan}</span> }

            </div>
        }

    </div>
};

export default InputBlock;