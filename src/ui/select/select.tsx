'use client';
import {useEffect, useMemo, useRef, useState} from 'react';
import './select.scss';
import Checkbox from "@/ui/checkbox/checkbox";

interface OptionBase {
    value: string;
    label?: string;
}

interface OptionWithChildren extends OptionBase {
    valueItems: OptionBase[];
}


type Option = OptionBase | OptionWithChildren;



interface Props {
    label?: string;
    required?: boolean;
    options: Option[];
    value: string[];
    onChange: (next: string[]) => void;
    placeholder?: string;
    className?:'big-select' | 'error';
}

export default function Select({
                                   label = 'Select',
                                   options,
                                   value,
                                   onChange,
                                   placeholder = 'Choose',
                                   className,
                               }: Props) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null); // ✨ обёртка


    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);



    const toggle = (val: string) => {
        if (value[0] === val) {
            onChange([]);
        } else {
            onChange([val]);
        }
    };


    const labelByValue = useMemo(() => {
        const map = new Map<string, string>();
        options.forEach(opt => {
            map.set(opt.value, opt.label ?? opt.value);
            if('valueItems' in opt){
                if (Array.isArray(opt.valueItems)) {
                    opt.valueItems.forEach(child => {
                        map.set(child.value, child.label ?? child.value);
                    });
                }
            }
        });
        return map;
    }, [options]);


    return (
        <div ref={wrapperRef} className={`select-multi ${className} `}>
            {label && (
                <h3>
                    {label}
                </h3>
            )}

            <button
                type="button"
                className="select-multi-trigger"
                onClick={() => setOpen(o => !o)}
            >
                <p className={`select-multi-value ${value.length ? '' : 'placeholder'}`}>
                    {value.length ? value.map(v => labelByValue.get(v) ?? v).join(', ') : placeholder}
                </p>
                <i className={`icon icon-arrowDown ${open ? 'open' : ''}`}/>
            </button>


                <div className={`select-multi-dropdown G-flex-column ${open ? 'active' : ''}`}>

                        {options.map(opt => {
                            const checked = value[0] === opt.value;
                            return (
                                <div key={opt.value}>
                                    <Checkbox onChange={() => toggle(opt.value)}  active={checked}   name={opt.value} />

                                    {'valueItems' in opt && Array.isArray(opt.valueItems) && opt.valueItems.length > 0 && (
                                        <div className="multi-sub-dropdown G-flex-column">
                                            {opt.valueItems.map(item => (
                                                <div key={item.value}>
                                                    <Checkbox
                                                        onChange={() => toggle(item.value)}
                                                        active={value.includes(item.value)}
                                                        name={item.label}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                </div>

        </div>
    );
}