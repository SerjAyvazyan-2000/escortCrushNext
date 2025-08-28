import {type FC, useEffect, useState} from 'react'
import './switch.scss'

interface SwitchProps {
    variant:'orange-switch' | 'green-switch'
    name?:string
    active?:boolean
    disabled?:boolean
    classNameText?:'black-text'
}
const Switch:FC<SwitchProps> = ({variant,name,active,disabled,classNameText}) => {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => {
        setIsOn(prev => !prev)
    }

    useEffect(() => {
        if(active){
            setIsOn(prev => !prev)
        }
    }, [active]);

    return <div  onClick={toggleSwitch} className={ `switch-wrapper  G-align-center  ${disabled ? 'disabled' : ''}   ${isOn ? 'on' : 'off'}`}>
        <div
            className={`custom-switch ${variant} ${isOn ? 'on' : 'off'}`}

        >
            <div className="knob" />
        </div>
        <p className={`${classNameText}`}>{name}</p>
    </div>


}

export default Switch