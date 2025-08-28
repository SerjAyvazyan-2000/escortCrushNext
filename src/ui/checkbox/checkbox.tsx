import {type FC} from 'react'
import './checkbox.scss'

interface CheckboxProps {
    active?: boolean
    variant?: 'orange-checkbox'
    name?: string
    onChange: (value: string) => void
    className?: string
}

 const Checkbox:FC<CheckboxProps> = ({active,name,onChange,className,variant}) => {

     const toggleSwitch = () => {
         if (name) {
             onChange?.(name);
         }
     }

    return (
        <div onClick={toggleSwitch} className={`checkbox-wrapper ${className} ${active ? 'on' : 'off'} G-align-center`}>
            <div
                className={`custom-checkbox ${variant}  ${active ? 'on' : 'off'}  G-center `}

            >
                <i className='icon icon-check'></i>

            </div>
            {name &&  <p>{name}</p> }

        </div>

    )
}

export default Checkbox
